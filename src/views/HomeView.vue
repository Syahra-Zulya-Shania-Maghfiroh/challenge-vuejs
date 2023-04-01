<template>
  <div class="home">
   <h2>Cities</h2>
   <div class="container">
    <div class="row">
      <div class="offside-md-3">
        <ul class="list-group">
          <li v-for="city in cities" :key="city.id" class="list-group-item d-flex justify-content-between align-items-center">
            {{ city.city }}
            <span class="badge bg-primary badge-pill">
              <router-link :to="{path:`/edit-city/` + city.id}" class="btn btn-primary ml-4">Edit</router-link>
            </span>
            <a href="#" class="btn btn-danger" @click="deleteCity(city.id)">Delete</a>
          </li>
        </ul>
      </div>
    </div>
   </div>
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
