import * as Vue from 'Vue';
import CountSubmitter from './count-submitter.vue';
import ProgressBar from './progress-bar.vue';
import App from './app.vue';

import 'bootstrap';
import './index.scss';

const root = Vue.createApp({})

root.component('app', App)
root.component('count-submitter', CountSubmitter)
root.component('progress-bar', ProgressBar)
const vm = root.mount('#app')
