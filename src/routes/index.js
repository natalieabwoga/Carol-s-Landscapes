import {createRouter, createWebHistory} from 'vue-router'

import Home from "./../components/Home.vue"
import Artists from "./../components/Artists.vue"
import Exhibitions from "./../components/Exhibitions.vue"
import OurStory from "./../components/OurStory.vue"
import Shop from "./../components/Shop.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/artists',
        name: 'artists',
        component: Artists,
    },
    {
        path: '/exhibitions',
        name: 'exhibitions',
        component: Exhibitions,
    },
    {
        path: '/ourstory',
        name: 'ourstory',
        component: OurStory,
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
