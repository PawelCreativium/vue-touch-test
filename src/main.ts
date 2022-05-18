import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import '@/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Vue3TouchEvents from 'vue3-touch-events';

const app = createApp(App);

app.use(createPinia());
app.use(Vue3TouchEvents);

app.mount('#app');
