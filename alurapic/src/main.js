import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

import './directives/Transform';

import VeeValidate from 'vee-validate';
import msgVeeValidatePtBr from './pt_BR.js';
Vue.use(VeeValidate, {
    locale: 'pt_BR',
    dictionary: {
        pt_BR: {
            messages: msgVeeValidatePtBr
        }
    }
});

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history',
});

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});