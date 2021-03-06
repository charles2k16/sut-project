import Vue from "vue";
import ElementUI from "element-ui";
import "./element-variables.scss";
import 'element-ui/lib/theme-chalk/display.css';
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

Vue.use(ElementUI);
locale.use(lang);
