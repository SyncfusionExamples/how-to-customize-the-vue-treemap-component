import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense("Your License Key");

createApp(App).mount('#app')
