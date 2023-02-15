import {createRouter, createWebHistory} from 'vue-router';
import Login from '@/Views/Login.vue';
import Main from '@/Views/Main.vue';
import Menu from '@/Views/Menu.vue';
import Recipes from '@/Views/Recipes.vue';
import shoppingList from '@/Views/Shopping-list.vue';
import Profile from '@/Views/Profile.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            alias: '/login',
            name: 'Login',
            component: () => import("./components/Login-form.vue")
        },
        {
            path:'/register',
            alias: '/register',
            name: 'Registration',
            component: () => import("./components/Registration-form.vue")
        },
        {
            path: '/main',
            alias: '/main',
            name: 'Main',
            component: Main
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        },
        {
            path: '/recipes',
            name: 'Recipes',
            component: Recipes
        },
        {
            path: '/shopping-list',
            name: 'Shopping-list',
            component: shoppingList
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }
    ]
})

export default router;