import Vue from 'vue';
import VueResource from 'vue-resource';
import VueClipboard from 'vue-clipboard2';
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate';
import VueI18n from 'vue-i18n'

import store from './store/index.js';
import router from './router/index.js';
import languages from './languages.json';

import App from './App.vue';

Vue.use(VueResource);
Vue.use(VueClipboard);
Vue.use(VeeValidate);
Vue.use(VueI18n)


const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: languages, // set locale messages
})

const dict = {
  custom: {
    recipient: {
      required: 'Please fill in an e-mail address',
      email: 'This e-mail address is not valid'
    },
    email: {
      required: 'Please fill in an e-mail address',
      email: 'This e-mail address is not valid'
    },
    name: {
      required: 'Please fill in a name'
    },
    password: {
      required: 'Please fill in a password'
    },
  }
};

Validator.localize('en', dict);


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
