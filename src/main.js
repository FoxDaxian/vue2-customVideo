import 'babel-polyfill'//for sb ie
import Vue from 'vue'
import App from './App'

import VueVideo from "../lib/";
Vue.use(VueVideo);




/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
})
