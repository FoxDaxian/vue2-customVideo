<style scoped lang="scss">
	.video{
		padding: 24px;
		background-color: rgba(#5B311B, 0.8);
		.tempWrap{
			width: 800px;
			margin:0 auto;
			h2{
				span{
					font-size: 30px;
				}
				color:#fff;
			}
		}
	}
	.video:nth-of-type(2n){
		background-color: rgba(#1D3156, 0.8);
	}
	.video:first-child{
		margin-bottom: 8px;
		background-color: #16A085;
	}
</style>
<template>
	<div id="app">
		<div class="video">
			<div class="tempWrap">
				<h2><span>第一步：</span>安装并绑定组件</h2>
				<pre><code ref="code">{{intro}}</code></pre>
			</div>
		</div>		<div class="video">
		<div class="tempWrap">
			<h2><span>形态1：</span>仅仅一个src属性，具备基础的功能</h2>
			<vue-video
			src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
			></vue-video>
			<pre><code ref="code1">{{video1}}</code></pre>
		</div>
	</div>
	<div class="video">
		<div class="tempWrap">
			<h2><span>形态2：</span>自定义宽高(默认为800*500)</h2>
			<vue-video
			src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
			width="800px"
			height="600px"
			></vue-video>
			<pre><code ref="code2">{{video2}}</code></pre>
		</div>
	</div>
	<div class="video">
		<div class="tempWrap">
			<h2><span>形态3：</span>指定暂停播放显示图片和poster</h2>
			<vue-video
			src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
			:playImg='require("@/assets/play.png")'
			:poster='require("@/assets/eva.jpg")'
			></vue-video>
			<pre><code ref="code3">{{video3}}</code></pre>
		</div>
	</div>
	<div class="video">
		<div class="tempWrap">
			<h2><span>形态4：</span>自定义右键菜单</h2>
			<vue-video
			src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
			:menu="true"
			></vue-video>
			<pre><code ref="code4">{{video4}}</code></pre>
		</div>
	</div>
	<div class="video">
		<div class="tempWrap">
			<h2><span>形态5：</span>切换清晰度</h2>
			<video-com
			src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
			:definition="definition"
			></video-com>
			<pre><code ref="code5">{{video5}}</code></pre>
		</div>
	</div>
	<div class="video">
		<div class="tempWrap">
			<h2><span>究极形态：</span>合体进化</h2>
			<video-com
			src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
			width="800px"
			height="600px"
			:playImg='require("@/assets/play.png")'
			:poster='require("@/assets/eva.jpg")'
			:menu="true"
			:definition="definition"
			></video-com>
			<pre><code ref="code6">{{video6}}</code></pre>
		</div>
	</div>
</div>
</template>

<script>
	import VideoCom from "./components/video/video.vue";
	import hljs from 'highlight.js'
	import "highlight.js/styles/monokai-sublime.css";
	export default {
		name: 'app',
		data(){
			return {
				definition:{
					low:"http://oqvlh6ipq.bkt.clouddn.com/eva_low.mp4",
					high:"http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				},
				intro:`
				//首先 (c)npm i vue2-video -S

				import VueVideo from '../lib/'

				Vue.use(VueVideo)
				`,
				video1: `
				<vue-video
				src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				></vue-video>
				`,
				video2: `
				<vue-video
				src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				width="800px"
				height="600px"
				></vue-video>
				`,
				video3: `
				// @为path.resolve(__dirname,'../src/')的别名(alias)
				<vue-video
				src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				:playImg='require("@/assets/play.png")'
				:poster='require("@/assets/eva.jpg")'
				></vue-video>
				`,
				video4: `
				<vue-video
				src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				:menu="true"
				></vue-video>
				`,
				video5: `
				<video-com
				src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				:definition="definition"
				></video-com>
				
				data(){
					return {
						definition:{
							low:"http://oqvlh6ipq.bkt.clouddn.com/eva_low.mp4",
							high:"http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
						}
					}
				}
				`,
				video6: `
				<video-com
				src="http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
				width="800px"
				height="600px"
				:playImg='require("@/assets/play.png")'
				:poster='require("@/assets/eva.jpg")'
				:menu="true"
				:definition="definition"
				></video-com>

				data(){
					return {
						definition:{
							low:"http://oqvlh6ipq.bkt.clouddn.com/eva_low.mp4",
							high:"http://oqvlh6ipq.bkt.clouddn.com/eva_normal.mp4"
						}
					}
				}
				`
			}
		},
		components: {
			VideoCom
		},
		mounted(){
			Object.values(this.$refs).forEach(function( el, i ) {
				hljs.highlightBlock(el)
			});
		}
	}
</script>
