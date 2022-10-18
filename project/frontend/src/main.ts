import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

const app = createApp(App);

import NavBar from "@/components/navbar/NavBar.vue";
app.component('nav-bar', NavBar);

app.use(store).use(router).mount('#app');