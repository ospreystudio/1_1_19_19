import { createApp } from 'vue'
import {createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import BaseModel from "@/components/BaseModel";
import AllUsers from "@/components/Pages/AllUsers";
import CourseGoals from "@/components/Pages/CourseGoals";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: AllUsers
        },
        {
            path:  '/goals', component: CourseGoals
        }
    ]
})

const app = createApp(App)

app.component('base-modal', BaseModel)

app.use(router)

app.mount('#app')
