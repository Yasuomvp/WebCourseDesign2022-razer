import Vue from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


export const constRouter:Array<RouteRecordRaw> = [
    {
        path: '/student',
        component: () => import('../components/student.vue') ,
    },
    {
        path: '/teacher',
        component: () => import('../components/teacher.vue') ,
    },
    {
        path:'/login',
        component: () => import('../views/login.vue')
    },
    {
        path:'/show',
        component: () => import('../components/userList.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constRouter
})

export default router

