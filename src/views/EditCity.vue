<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Edit City</h2>
          <form @submit.prevent="updateCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Input city"
                v-model="cityInfo.city"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Input country"
                v-model="cityInfo.country"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Input postal code"
                v-model="cityInfo.postal_code"
              />
            </div>
            <button class="btn btn-primary">Update City</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      cityInfo: {
        city: null,
        country: null,
        postal_code: null,
      },
    };
  },

  methods: {
    async getCity() {
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.city = cityData.city;
      this.cityInfo.country = cityData.country;
      this.cityInfo.postal_code = cityData.postal_code;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `The city with ID of ${this.cityId} has been updated successfully!`
      );
      this.$router.push("/");
    },
  },

  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>

<style>
</style>