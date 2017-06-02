<template>
	<div class="wrap">
		<router-link to="/">返回</router-link>
		<video-com
		src="http://www.runoob.com/try/demo_source/movie.mp4"
		width="800px"
		height="500px"
		:playImg='require("../../../static/play.png")'
		:poster='require("../../../static/eva.jpg")'
		></video-com>
	</div>
</template>

<script>
	import VideoCom from "../video/video.vue";
	export default {

		name: 'video-router',

		data () {
			return {

			};
		},
		components:{
			VideoCom
		}
	};
</script>

<style lang="scss" scoped>
</style>