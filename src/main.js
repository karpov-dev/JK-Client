import {createApp} from "vue";
import AppLayout from "./layouts/AppLayout";

import {EventBus} from "./services/events/EventBus";
import {NotificationService} from "./services/notification/NotificationService";
import {uiConstants} from "./services/constants/ui.constants";

import router from "./router/router";
import store from './store';
import './styles/global/global.scss';

const app = createApp(AppLayout);
const eventBus = new EventBus();

app.use(router);
app.use(store);

app.config.globalProperties.$eventBus = eventBus;
app.config.globalProperties.$notification = NotificationService;
app.config.globalProperties.$constants = uiConstants;

app.config.errorHandler = (message, vm, trace) => globalErrorHandler(message, vm, trace);

app.mount('#app');

const globalErrorHandler = (message, vm, trace) => {
  console.error(message);
}