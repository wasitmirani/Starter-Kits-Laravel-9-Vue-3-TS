


require('./bootstrap');

import { createApp } from "vue";
import router from "./router";


const app =createApp({
    mounted(){
        console.log("app mounted");
    }
});
app.config.globalProperties.window = window;

app.use(router).mount('#app');
