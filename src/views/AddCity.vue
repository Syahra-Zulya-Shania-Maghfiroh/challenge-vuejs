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
                        v-model="cityStore.city"
                    />
                    </div>
                    <div class="form-group">
                    <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Input country"
                        v-model="cityStore.country"
                    />
                    </div>
                    <div class="form-group">
                    <input
                        type="text"
                        class="form-control mb-2"
                        placeholder="Input postal code"
                        v-model="cityStore.postal_code"
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
import { useRouter } from 'vue-router';
// import { computed } from 'vue'
import {useCityStore} from '../city'
export default {
    setup(){
        const router = useRouter();
        const cityStore = useCityStore()

        const createCity = async () => {
            await cityStore.createCity()
            alert('Document created successfully!')
            router.push('/')
        }

        return {
            cityStore,
            createCity,
        }

    },
    created(){
        this.cityStore.fetchCities()
    }
};
</script>

<style>

</style>
