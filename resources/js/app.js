require('./bootstrap');
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import {routes} from "./routes";
import StoreData from "./store"
import MainApp from "./components/MainApp.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: 'history'
});

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
