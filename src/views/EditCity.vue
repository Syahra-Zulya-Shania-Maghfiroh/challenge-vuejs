<template>
  <div>
    <div class="container">
      <div class="row">
            <section class="bg-light mt-2 p-5">
                <div class="col-md-6 offset-md-3">
                <h2>Edit City</h2>
                <form @submit.prevent="handleSubmit">
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
            </section>
      </div>
    </div>
  </div>
</template>

<script>
import { setDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { useCityStore } from '../city';

export default {
  setup() {
    const cityId = ref(null);
    const cityInfo = ref({});

    const router = useRouter();
    const cityUpdate = useCityStore();

    const updateCity = async () => {
      await setDoc(cityUpdate.docRef, cityInfo.value);
      alert('Document updated successfully!');
      router.push('/');
    };


    const handleSubmit = () => {
      updateCity();
    };

    const params = computed(() => router.currentRoute.value.params);
    cityId.value = params.value.cityId;
    cityUpdate.cityId = cityId.value;

    cityUpdate.getCity().then(() => {
      cityInfo.value = cityUpdate.cityInfo;
    });

    return {
      cityInfo,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>
