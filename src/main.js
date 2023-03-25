import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import TheIndex from './components/pages/TheIndex.vue'
import TheCoffee from './components/pages/TheCoffee.vue'
import TheShow from './components/pages/TheShow.vue'
import TheCreate from './components/pages/TheCreate.vue'
import CoffeeEdit from './components/pages/CoffeeEdit.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheIndex }, // The Index Page
        { path: '/coffee', component: TheCoffee }, // The Coffee Page
        { path: '/coffee/:id', component: TheShow }, // The Show Page
        { path: '/new', component: TheCreate }, // The Create Page
        { path: '/edit/:id', component: CoffeeEdit } // The Edit Page

    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');