<template>
<div class="container">

<section class="bg-light">
  <div class="container d-flex mb-2" style="margin-top: 2rem; margin-left: 1rem">
    <div class="mr-auto p-2">
      <h4 style="margin-top: 2rem">Country Data</h4>
    </div>
    <div class="p-2">
      <div class="form-group" style="width: 15rem; margin-top: 2rem; align: right">
        <!-- <label for="">Filter Guest Name</label> -->
        <input
          type="number"
          class="form-control"
          placeholder="Input postal code"
        />
      </div>
    </div>
  </div>
    <div class="row" style="margin-left: 1rem"></div>
    <!-- <h3>All Order Data</h3> -->
  <div class="rounded h-100 p-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">City</th>
          <th scope="col">Country</th>
          <th scope="col">Postal Code</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(city, index) in cities" :key="index.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ city.city }}</td>
          <td>{{ city.country }}</td>
          <td>{{ city.postal_code }}</td>
          <td>
            <router-link :to="{path:`/edit-city/` + city.id}" class="btn btn-warning mx-2">Update</router-link>
            <button v-on:click="deleteCity(city.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </section>
</div>
</template>

<script>
import citiesColRef from '@/firebase';
import {getDocs, doc, deleteDoc} from 'firebase/firestore';
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {
      cities: [],
      selectedDoc: null
    }
  }, 
  methods: {
    async fetchCities(){
      let citiesSnapShot = await getDocs(citiesColRef);
      let cities = [];
      citiesSnapShot.forEach((city) => {
        let cityData = city.data();
        cityData.id = city.id;
        cities.push(cityData);
      });
      console.log(cities);
      this.cities = cities
    },
    async deleteCity(cityId){
      let cityRef = doc(citiesColRef, cityId);
      await deleteDoc(cityRef)
      alert('City deleted successfully!')
      this.$router.go()
    }
  },
  created(){
    this.fetchCities()
  }
}
</script>
