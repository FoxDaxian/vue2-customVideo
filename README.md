# vue2-video

支持**ie10**以上(不完全兼容```IE```，要兼容```IE```请在入口文件```main.js```内添加```babel-polyfill```)  
支持键盘上、下、左、右、空格操作


--------------


轻量级vue2 video组件

```
第一步，(c)npm下载
(c)npm i vue2-video -S
```

```javascript
//第二步，main.js引入
import VueVideo from 'vue2-video'
import 'vue2-video/video.css';
Vue.use(VueVideo);
```

```javascript
//第三步，使用
<vue-video src='xxx.mp4'></vue-video>
```

------

  
现在，你可以自定义整体的颜色方案，请[下载自定义scss库](https://github.com/a13821190779/custom-vue2-video/archive/master.zip)  
![folder](http://oqvlh6ipq.bkt.clouddn.com/custom-folder.png "下载解压后文件夹内容")

首先解压到任意位置，然后修改scss库中的```theme.scss```文件(文件中有样式注释，如下)
![custom](http://oqvlh6ipq.bkt.clouddn.com/vue2-video.png "自定义主题说明")  

然后，使用scss转换器(例如koala)，编译video.scss  
最后，在```Vue.use(VueVideo)```下```import '你的路径/video.css'```




更多详见[文档](https://a13821190779.github.io/vue-video/)
