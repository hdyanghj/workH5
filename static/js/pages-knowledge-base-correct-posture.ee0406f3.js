(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-knowledge-base-correct-posture"],{"190f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,i=getCurrentPages();this.route=i[i.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var i,e=this,n=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){e.systemType=t}}),i="ios"==this.systemType.platform?2:1;var a={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:n,platform:i,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:a,success:function(t){0==t.data.code&&(clearInterval(e.Timer),e.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};i.default=n},"1dca":function(t,i,e){"use strict";e.r(i);var n=e("50ee"),a=e("7003");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);var r,u=e("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"0f5ec893",null,!1,n["a"],r);i["default"]=s.exports},"2dde":function(t,i,e){"use strict";var n=e("5f37"),a=e.n(n);a.a},"50ee":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view")},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},"5f37":function(t,i,e){var n=e("b454");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("ae0cecda",n,!0,{sourceMap:!1,shadowMode:!1})},"6fd7":function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("1dca")),o={components:{buryingpoint:a.default},data:function(){return{title:"体姿",imgDomain:"",list:[],page:1}},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onUnload:function(){this.$refs.buryingpoint.buryingpoint("正确体姿")},onHide:function(){this.$refs.buryingpoint.buryingpoint("正确体姿")},onLoad:function(){this.imgDomain=this.$store.state.center.imgDomain,this.getData()},methods:{getData:function(){var t=this;uni.request({url:this.$webUrl+this.$channelDictPage,method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},data:{page:this.page,limit:10,type:"zhengquetizi"},success:function(i){t.list=i.data.data.list},fail:function(t){}})},goLittleMajor:function(t,i,e){uni.navigateTo({url:"/pages/knowledge-base/five-major-item/correct-posture-list?&tag="+t+"&tag1="+i+"&channelId="+e})}}};i.default=o},7003:function(t,i,e){"use strict";e.r(i);var n=e("190f"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},8087:function(t,i,e){"use strict";e.r(i);var n=e("d49f"),a=e("f17b");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("2dde");var r,u=e("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"1a7a27af",null,!1,n["a"],r);i["default"]=s.exports},b454:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".tizi-list[data-v-1a7a27af]{width:%?660?%;height:%?360?%;margin:%?40?% auto;border-radius:%?20?%;overflow:hidden;position:relative;box-shadow:0 3px 6px 0 rgba(0,0,0,.25)}.tizi-list uni-image[data-v-1a7a27af]{width:100%;height:100%}.tizi-text[data-v-1a7a27af]{position:absolute;top:0;left:0;right:0;bottom:0;padding:%?40?%\n\t/* background: rgba(255,255,255,0.3); */}.tizi-h1[data-v-1a7a27af]{font-size:%?48?%;color:#484848;padding-bottom:%?20?%}.tizi-h2[data-v-1a7a27af]{font-size:%?32?%;color:#919191;padding-bottom:%?10?%}.tizi-h3[data-v-1a7a27af]{font-size:%?24?%;color:#ca0303}.tizi-h4[data-v-1a7a27af]{height:%?80?%;padding-bottom:%?20?%;font-size:%?24?%;color:#484848;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}",""]),t.exports=i},d49f:function(t,i,e){"use strict";var n={buryingpoint:e("1dca").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cont"},[t._l(t.list,(function(i,n){return e("v-uni-view",{staticClass:"tizi-list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLittleMajor(t.title,i.title,i.value)}}},[e("v-uni-image",{attrs:{src:i.picture}}),e("v-uni-view",{staticClass:"tizi-text"},[e("v-uni-view",{staticClass:"tizi-h2"},[t._v(t._s(t.title))]),e("v-uni-view",{staticClass:"tizi-h1"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"tizi-h3"},[t._v("点击查看更多>>")])],1)],1)})),e("buryingpoint",{ref:"buryingpoint"})],2)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},f17b:function(t,i,e){"use strict";e.r(i);var n=e("6fd7"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);