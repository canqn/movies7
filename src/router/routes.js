import { createRouter, createWebHistory } from 'vue-router';
// Layouts
import { DefaultLayout, HeaderOnly } from '~/layouts';
//config
import config from '../config';
import About from '../features/About.vue';
import Contact from '../features/Contact.vue';
import Todos from '../features/Todos/index.vue';
import Home from '../features/Home/index.js';
import Movie from '../features/Movie/index.vue';
import MovieUpdated from '../features/Movie/page/Updated';
import WatchMovie from '../features/Movie/page/Details/index.vue';

const publicRoutes = [
    {
        path: config.routes.home,
        name: 'home',
        component: Home,
        meta: {
            layout: HeaderOnly
        }
    },
    {
        path: config.routes.about,
        name: 'about',
        component: About
    },
    {
        path: config.routes.todo,
        name: 'todo',
        component: Todos,
        meta: {
            layout: HeaderOnly
        }
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
        meta: {
            title: 'Movies'
        }
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
        name: 'updated',
        component: MovieUpdated,
        meta: {
            title: 'Recently Updated'
        }
    },
];

const privateRoutes = [];

const routes = [...publicRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    // Get the page title from the route meta data that we have defined
    // See further down below for how we setup this data
    const title = to.meta.title

    //Take the title from the parameters
    let titleFromParams = to.state;
    // const titleFromParams = 'test Title from';
    // If the route has a title, set it as the page title of the document/page
    if (title) {
        document.title = `${title} | Watch Movies Online Free, Free Movies Streaming`
    } else {
        document.title = 'Watch Movies Online Free, Free Movies Streaming'
    }
    // If we have a title from the params, extend the title with the title
    // from our params
    if (titleFromParams) {
        document.title = `${titleFromParams} - ${document.title}`;
    }
    // Continue resolving the route
    next()
})



export { router, publicRoutes, privateRoutes };