import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//import { Button as AButton, Form as AForm, FormItem as AFormItem, Input as AInput, Modal as AModal } from 'ant-design-vue';
// 引入 Element UI
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router);

// 使用 Element UI
app.use(ElementPlus);
app.mount('#app');