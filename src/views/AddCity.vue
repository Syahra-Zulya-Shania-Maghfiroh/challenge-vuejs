<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="offside-md-3">
                    <h2>Add City</h2>
                    <form @submit.prevent="createCity">
                        <div class="form-group">
                            <div class="mb-3">
                                <input type="text" class="form-control mb-4" placeholder="Input city" v-model="city">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="mb-3">
                                <input type="text" class="form-control mb-4" placeholder="Input country" v-model="country">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="mb-3">
                                <input type="number" class="form-control mb-4" placeholder="Input postal code" v-model="postal_code">
                            </div>
                        </div>
                    <button type="submit" class="btn btn-primary">Create City</button>
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
