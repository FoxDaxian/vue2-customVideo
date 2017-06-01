import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import Video from "./components/video-router/video-router.vue";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
	{ path: '/video', component: Video }
	]
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	router:router
})
