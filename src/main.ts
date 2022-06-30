import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {AxiosInstance } from "axios";

// createApp(App).mount('#app')

const app = createApp(App);
app.config.globalProperties.$axios=axios;
app.use(router)
app.use(ElementPlus)

app.mount('#app')
router.push("/login")
