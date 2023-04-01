import { defineStore } from 'pinia'
import citiesColRef from '@/firebase';
import { getDocs, doc, deleteDoc, addDoc, getDoc, setDoc } from 'firebase/firestore';
// import { useRouter } from 'vue-router';

export const useCityStore = defineStore({
    id: 'cityStore',
    state: () => ({
        // get n delete
        cities: [],
        selectedDoc: null,
        // add
        city: null,
        country: null,
        postal_code: null,
        cityData: null,
        // edit
        selectedCity: {},
        cityId: null,
        docRef: null,
        cityInfo: {
            city: null,
            country: null,
            postal_code: null,
        },

    }),
    actions: {
        // page home
        async fetchCities() {
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
        async deleteCity(cityId) {
            let cityRef = doc(citiesColRef, cityId);
            await deleteDoc(cityRef)
            alert('City deleted successfully!')
            this.fetchCities()
        },
        // end

        // page add
        async createCity() {
            console.log('Creating Document');
            const newCity = { city: this.city, country: this.country, postal_code: this.postal_code }
            const addedDoc = await addDoc(citiesColRef, newCity);
            console.log(addedDoc)
        },
        // end

        // page update
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

        },
    },
})