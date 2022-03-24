import { createApp } from "vue";
import AppLayout from "./layouts/AppLayout";
import {EventBus} from "./services/event-bus/EventBus";
import router from "./router/router";
import store from './store';
import './styles/global/global.scss';

const app = createApp(AppLayout);
const eventBus = new EventBus();

app.use(router);
app.use(store);

app.config.globalProperties.$eventBus = eventBus;
app.config.errorHandler = (message, vm, trace) => globalErrorHandler(message, vm, trace);

app.mount('#app');

const globalErrorHandler = (message, vm, trace) => {
  console.error(message);
}