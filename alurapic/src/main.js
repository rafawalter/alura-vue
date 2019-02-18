import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';




import './directives/Transform';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';
import './assets/js/teste.js';

import 'bootstrap/dist/js/bootstrap.js';


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
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';
Vue.http.interceptors.push((req, next) => {
    //    req.headers.set('Authorization', 'informação de segurança aqui');
    console.log('Lidando com o request');

    next(res => {
        console.log('Lidando com a resposta');
        console.log(res.body);
    })
});


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});