import {createRouter, createWebHistory} from 'vue-router'

import Home from "./../components/Home.vue"
import AboutUs from "./../components/AboutUs.vue"
import Projects from "./../components/Projects.vue"
import LandscapingServices from "./../components/LandscapingServices.vue"
import ContactUs from "../components/ContactUs.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
    },
    {
        path: '/landscapingservices',
        name: 'landscapingservices',
        component: LandscapingServices,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
