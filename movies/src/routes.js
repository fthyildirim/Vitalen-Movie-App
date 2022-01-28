import VueRouter from "vue-router";
import Home from "./components/Home.vue";

let router = new VueRouter({
    mode: "history",
    routes:[
        {
            path:"/",
            name:"home",
            component: Home
        },
    ],
});

export default router