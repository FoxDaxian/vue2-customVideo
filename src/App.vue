<template>
	<div id="app">
		<!-- <video-com
		src="http://devtest.qiniudn.com/%E8%8B%A5%E8%83%BD%E7%BB%BD%E6%94%BE%E5%85%89%E8%8A%92.mp4"
		width="800px"
		height="500px"
		:playImg='require("../../../static/play.png")'
		:poster='require("../../../static/eva.jpg")'
		:menu="true"
		></video-com> -->
		<vue-video
		src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
		:definition="definition"
		:playImg='require("@/assets/play.png")'
		:poster='require("@/assets/eva.jpg")'
		:menu="true"
		></vue-video>
	</div>
</template>

<script>
	import VideoCom from "./components/video/video.vue";
	export default {
		name: 'app',
		data(){
			return {
				definition:{
					low:"http://oqvlh6ipq.bkt.clouddn.com/eva_low.mp4",
					high:"http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				}
			}
		},
		components: {
			VideoCom
		},
	}
</script>

<style scoped lang="scss">

</style>
