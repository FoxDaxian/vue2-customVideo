//这两种都可以


// const Video = require("./video.vue");
// module.exports = {
//   install(Vue,options){
//     Vue.components = {
//       Video
//     }
//   }
// }

import Video from "./video.vue";

const install = ( Vue, options ) =>{
  Vue.component(Video.name,Video);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}