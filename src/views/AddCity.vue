<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                <h2>Add City</h2>
                <form @submit.prevent="createCity">
                    <div class="form-group">
                    <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Input city"
                        v-model="city"
                    />
                    </div>
                    <div class="form-group">
                    <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Input country"
                        v-model="country"
                    />
                    </div>
                    <div class="form-group">
                    <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Input postal code"
                        v-model="postal_code"
                    />
                    </div>
                    <button class="btn btn-primary">Create City</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import citiesColRef from '@/firebase';
import {addDoc} from 'firebase/firestore';
export default {
    data(){
        return {
            city: null,
            country: null,
            postal_code : null
        }
    },
    methods: {
        async createCity(){
            console.log('Creating Document');
            const addedDoc = await addDoc(citiesColRef, this.$data);
            alert('Document created successfully!')
            console.log(addedDoc)
            this.$router.push('/')
        }
    }
};
</script>

<style>

</style>
