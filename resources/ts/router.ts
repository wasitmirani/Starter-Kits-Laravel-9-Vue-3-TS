import { createRouter, createWebHistory } from 'vue-router'
// createWebHistory
// import CompaniesIndex from '../components/companies/CompaniesIndex.vue'


// function setComponent(String path_file) {
//     const route_path = "./components/backend/pages/" + path_file + "Component.vue";
//     return import("" + route_path);
// }
let path="./vue/backend/pages/Home.vue";
import Home from  "./vue/backend/pages/Home.vue";

const routes = [
    // { path: "/:catchAll(.*)",
    // name: "NotFound",
    // component: () => setComponent("error/404") },
    // { path: "/unauthorized/user", component: () => setComponent("error/401"),name: "unauthorized" },
    {
        path: "/",
        redirect: { path: '/home/dashboard' }
    },
    {
        path: "/home/dashboard", component: Home, name: "Dashboard",
        meta: { permissions: "dashboard-view" }
    },



];


export default createRouter({
    history: createWebHistory(),
    routes
})
