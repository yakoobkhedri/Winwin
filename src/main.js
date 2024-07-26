import { createApp } from 'vue'
import './style.css'
import '../src/assets/css/app.css'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'
import VueApexCharts from "vue3-apexcharts";



const app= createApp(App);
app.use(router)
app.use(store)
app.use(VueApexCharts)
app.mount('#app')

