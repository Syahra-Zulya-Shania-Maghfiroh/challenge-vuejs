import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCity from '../views/AddCity.vue'
import EditCity from '../views/EditCity.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/add-city',
        name: 'addcity',
        component: AddCity
    },
    {
        path: '/edit-city/:cityId',
        name: 'editcity',
        component: EditCity
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router