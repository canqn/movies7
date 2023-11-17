import { createRouter, createWebHistory } from 'vue-router';
// Layouts
import { DefaultLayout, HeaderOnly } from '~/layouts';
//config
import config from '../config';


import About from '../features/About.vue';
import Contact from '../features/Contact.vue';
import Home from '../features/Home/index.vue';
import Movie from '../features/Movie/index.vue';
import MovieUpdated from '../features/Movie/page/Updated';
import WatchMovie from '../features/Movie/page/Details/index.vue';

const layouts = { default: 'DefaultLayout', only: 'HeaderOnly' }


const publicRoutes = [
    {
        path: config.routes.home,
        name: 'home',
        component: Home,
    },
    {
        path: config.routes.about,
        name: 'about',
        component: About
    },
    {
        path: config.routes.contact,
        name: 'contact',
        component: Contact
    },
    {
        path: '/movie',
        name: 'movie',
        component: Movie,
    },
    {
        path: '/movie/:id',
        name: 'TheMovie',
        component: WatchMovie,
        meta: {
            layout: HeaderOnly
        }

    },
    {
        path: '/updated',
        name: 'movie',
        component: MovieUpdated
    },
];

const privateRoutes = [];

const routes = [...publicRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router, publicRoutes, privateRoutes };