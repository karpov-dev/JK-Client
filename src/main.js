import { createApp } from "vue";
import AppLayout from "./layouts/AppLayout";
import router from "./router/router";
import store from './store';
import './scss/style.scss';

const app = createApp(AppLayout);

app.use(router);
app.use(store);
app.config.errorHandler = (message, vm, trace) => globalErrorHandler(message, vm, trace);

app.mount('#app');

const globalErrorHandler = (message, vm, trace) => {
  console.error(message);
}