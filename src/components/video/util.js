const { ceil, floor } = Math;
export default {
	//补0
	addZero( num ) {
		return num > 9 ? num : "0" + num;
	},
	//格式化时间
	formatDate( nativeTime ){
		let minute = this.addZero(floor(nativeTime / 60)),
		second = this.addZero(nativeTime - minute * 60);
		return `${minute}:${second}`
	},
	// 根据音量值改变图标类名
	changeVolumeIconClass(volume){
		let tempClass;
		(volume > 0.8 && volume <= 1) && (tempClass = "volume_icon3");
		(volume > 0.45 && volume <= 0.8) && (tempClass = "volume_icon2");
		(volume > 0 && volume <= 0.45) && (tempClass = "volume_icon1");
		volume === 0 && (tempClass = "mute_icon");
		return tempClass;
	},
	//获取样式数值的方法
	getStyle( el ){
		var style;
		if (window.getComputedStyle) {
			style = window.getComputedStyle(el, null);
		} else { 
			style = el.currentStyle;
		}
		return style;
	}
}