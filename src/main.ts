import WidgetView from './components/WidgetView.ce.vue';
import {defineCustomElement} from "vue";
const element = defineCustomElement(WidgetView);

customElements.define("weather-widget", element);