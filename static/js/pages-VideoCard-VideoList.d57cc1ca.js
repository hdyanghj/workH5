(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-VideoCard-VideoList"],{"0125":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".Cont[data-v-a40649de]{letter-spacing:%?2?%;padding-bottom:%?40?%}.ReturnCont[data-v-a40649de]{width:calc(100% - %?96?%);padding:0 %?48?%;height:%?216?%;position:fixed;top:0;left:0;z-index:9999;background:#fff}.TopHeight[data-v-a40649de]{width:100%;height:%?216?%}.ReturnPosition[data-v-a40649de]{position:absolute;width:calc(100% - %?96?%);bottom:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ReturnBtn[data-v-a40649de]{width:%?80?%;height:%?80?%}.ReturnBtn>uni-image[data-v-a40649de]{width:100%;height:100%}.SortBtn[data-v-a40649de]{font-size:%?28?%;color:#db4528}.SortBtn uni-text[data-v-a40649de]{font-size:%?28?%;padding-right:%?8?%}.CardCont[data-v-a40649de]{width:%?654?%;margin:0 auto;height:%?852?%;box-shadow:0 %?8?% %?24?% 0 rgba(0,0,0,.45);border-radius:%?32?%;overflow:hidden;position:relative;margin-top:%?40?%}.CardCoverImg[data-v-a40649de]{position:absolute;left:0;top:0;z-index:1;width:100%;height:100%}.ContentRank[data-v-a40649de]{width:100%;height:100%;position:relative;z-index:2}.UserInfo[data-v-a40649de]{padding:%?60?% %?64?% %?56?% %?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.UserInfoFlex[data-v-a40649de]{display:-webkit-box;display:-webkit-flex;display:flex}.UserHeadImg[data-v-a40649de]{width:%?104?%;height:%?104?%;border:%?2?% solid hsla(0,0%,96.1%,.45);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:%?24?%}.UserHeadImg>uni-image[data-v-a40649de]{width:%?88?%;height:%?88?%;border-radius:50%}.UserName[data-v-a40649de]{padding:%?16?% 0 %?4?%;font-size:%?32?%;line-height:%?44?%;color:#fff}.UserTime[data-v-a40649de]{font-size:%?24?%;line-height:%?34?%;color:#fff}.Collect[data-v-a40649de]{width:%?80?%;height:%?80?%;background:#fff;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.Collect uni-text[data-v-a40649de]{font-size:%?46?%}.CardTitle[data-v-a40649de]{padding:0 %?72?%;font-size:%?36?%;color:#fff;line-height:%?50?%;text-align:center;text-shadow:%?2?% %?2?% %?2?% rgba(0,23,51,.75);margin-bottom:%?32?%;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;/*设置显示行数，此处为2行，可设置其他数字*/-webkit-box-orient:vertical;overflow:hidden}.CardTime[data-v-a40649de]{text-align:center;font-size:%?24?%;color:#fff;line-height:%?34?%;padding-top:%?16?%}.CardControl[data-v-a40649de]{width:calc(100% - %?300?%);padding:0 %?150?%;height:%?116?%;position:absolute;bottom:%?64?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.CardMute[data-v-a40649de],\n.Praise[data-v-a40649de]{width:%?76?%;height:%?76?%;background:rgba(0,0,0,.45);border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.CardMute uni-text[data-v-a40649de],\n.Praise uni-text[data-v-a40649de]{color:#fff;font-size:%?46?%}.CardPlay uni-text[data-v-a40649de]{color:#fff;font-size:%?116?%;text-shadow:.1em .1em .2em rgba(0,0,0,.65)}.MarginTopZero[data-v-a40649de]{margin-top:0}.SelectState[data-v-a40649de]{color:#fe666f!important}.BgCol[data-v-a40649de]{position:absolute;top:0;left:0;z-index:2;width:100%;height:%?406?%;background-color:rgba(0,0,0,.45);-webkit-filter:blur(%?40?%);filter:blur(%?40?%)}.PositionInfo[data-v-a40649de]{width:100%;height:100%;position:absolute;left:0;right:0;z-index:3}",""]),t.exports=e},"0373":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("ab14")),o=a(i("1dca")),r={components:{uniLoadMore:n.default,buryingpoint:o.default},data:function(){return{Sort:"asc",total:"",loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"我是有底线的"},page:1,token:uni.getStorageSync("token"),userId:uni.getStorageSync("user_Id"),VideoCoverArr:[]}},onLoad:function(){uni.setStorageSync("VideoIdx",""),this.GetVideoCoverList()},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10),uni.getStorageSync("VideoIdx")&&(this.VideoCoverArr[uni.getStorageSync("VideoIdx").ind].likeStatus=uni.getStorageSync("VideoIdx").item.likeStatus,this.VideoCoverArr[uni.getStorageSync("VideoIdx").ind].collectStatus=uni.getStorageSync("VideoIdx").item.collectStatus,this.VideoCoverArr[uni.getStorageSync("VideoIdx").ind].Mute=uni.getStorageSync("VideoIdx").item.Mute,uni.setStorageSync("VideoIdx","")),this.token=uni.getStorageSync("token"),this.userId=uni.getStorageSync("user_Id")},onHide:function(){this.$refs.buryingpoint.buryingpoint("视频轮播列表页")},onUnload:function(){this.$refs.buryingpoint.buryingpoint("视频轮播列表页")},onReachBottom:function(){this.GetVideoCoverList()},methods:{SortBtn:function(){"asc"===this.Sort?this.Sort="desc":this.Sort="asc",this.page=1,this.VideoCoverArr=[],this.GetVideoCoverList()},GetVideoCoverList:function(){var t=this;uni.request({url:this.$webUrl+this.$VideoCoverList,method:"GET",data:{page:this.page++,limit:4,userId:this.userId,order:this.Sort},success:function(e){if(0===e.data.code){t.total=e.data.data.total;var i=e.data.data.list;4===i.length?t.loadingType=0:t.loadingType=2;for(var a=0;a<i.length;a++)t.$set(i[a],"Mute",!1),t.VideoCoverArr.push(i[a])}},fail:function(t){console.log(JSON.stringify(t))}})},VideogiveBtn:function(t){var e,i;this.userId||uni.navigateTo({url:"/pages/login/login"}),t.likeStatus?(e=this.$VideoDeleteHelp,i={itemId:t.id,itemType:5}):(e=this.$VideoHelp,i={id:t.id}),uni.request({url:this.$webUrl+e,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:i,success:function(e){0===e.data.code&&(t.likeStatus?t.likeStatus=0:t.likeStatus=1)},fail:function(t){console.log(JSON.stringify(t))}})},VideoStoreUpBtn:function(t){var e;this.userId||uni.navigateTo({url:"/pages/login/login"}),e=t.collectStatus?this.$BbsCancelCollection:this.$usercollect,uni.request({url:this.$webUrl+e,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{marking:t.id,type:6},success:function(e){0===e.data.code&&(t.collectStatus?t.collectStatus=0:t.collectStatus=1)},fail:function(t){console.log(JSON.stringify(t))}})},MuteBtn:function(t){t.Mute?t.Mute=!1:t.Mute=!0},BackBtn:function(){uni.navigateBack({delta:1})},ToPlayVideo:function(t){for(var e=0;e<this.VideoCoverArr.length;e++)this.$set(this.VideoCoverArr[e],"page",this.page-1);uni.setStorageSync("VideoList",this.VideoCoverArr),uni.navigateTo({url:"/pages/VideoCard/VideoPlay?id="+t.id+"&page="+t.page+"&total="+this.total+"&Sort="+this.Sort})}}};e.default=r},"190f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,e=getCurrentPages();this.route=e[e.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var e,i=this,a=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){i.systemType=t}}),e="ios"==this.systemType.platform?2:1;var n={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:a,platform:e,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:n,success:function(t){0==t.data.code&&(clearInterval(i.Timer),i.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};e.default=a},"197f":function(t,e,i){"use strict";var a=i("76d8"),n=i.n(a);n.a},"1dca":function(t,e,i){"use strict";i.r(e);var a=i("50ee"),n=i("7003");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0f5ec893",null,!1,a["a"],r);e["default"]=d.exports},"50ee":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},7003:function(t,e,i){"use strict";i.r(e);var a=i("190f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},7638:function(t,e,i){"use strict";i.r(e);var a=i("0373"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"76d8":function(t,e,i){var a=i("0125");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("255f8d6f",a,!0,{sourceMap:!1,shadowMode:!1})},9362:function(t,e,i){"use strict";var a=i("eca9"),n=i.n(a);n.a},"975f":function(t,e,i){"use strict";i.r(e);var a=i("fbe7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},9865:function(t,e,i){"use strict";i.r(e);var a=i("fbd5"),n=i("7638");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("197f");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"a40649de",null,!1,a["a"],r);e["default"]=d.exports},a502:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:2===t.loadingType?t.contentText.contentnomore:t.contentText.contenterror))])],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},ab14:function(t,e,i){"use strict";i.r(e);var a=i("a502"),n=i("975f");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9362");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0f050a07",null,!1,a["a"],r);e["default"]=d.exports},de72:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".load-more[data-v-0f050a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-0f050a07]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-0f050a07]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-0f050a07]{position:absolute}.load1[data-v-0f050a07],\n.load2[data-v-0f050a07],\n.load3[data-v-0f050a07]{height:24px;width:24px}.load2[data-v-0f050a07]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0f050a07]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-0f050a07]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0f050a07 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0f050a07{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},eca9:function(t,e,i){var a=i("de72");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("753f3363",a,!0,{sourceMap:!1,shadowMode:!1})},fbd5:function(t,e,i){"use strict";var a={buryingpoint:i("1dca").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Cont"},[i("v-uni-view",{staticClass:"ReturnCont"},[i("v-uni-view",{staticClass:"ReturnPosition"},[i("v-uni-view",{staticClass:"ReturnBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackBtn()}}},[i("v-uni-image",{attrs:{mode:"aspectFill",src:"/static/Back.png"}})],1),i("v-uni-view",{staticClass:"SortBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.SortBtn()}}},[i("v-uni-text",{staticClass:"iconfont"},[t._v("")]),t._v(t._s("asc"===t.Sort?"正序":"倒序"))],1)],1)],1),i("v-uni-view",{staticClass:"TopHeight"}),t._l(t.VideoCoverArr,(function(e,a){return i("v-uni-view",{key:a,staticClass:"CardCont",class:a?"":"MarginTopZero"},[i("v-uni-image",{staticClass:"CardCoverImg",attrs:{mode:"aspectFill",src:e.thumbnail}}),i("v-uni-view",{staticClass:"ContentRank"},[i("v-uni-view",{staticClass:"PositionInfo"},[i("v-uni-view",{staticClass:"UserInfo"},[i("v-uni-view",{staticClass:"UserInfoFlex"},[i("v-uni-view",{staticClass:"UserHeadImg"},[i("v-uni-image",{attrs:{mode:"aspectFill",src:"/static/yszc-logo.png"}})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"UserName"},[t._v(t._s(e.author))]),i("v-uni-view",{staticClass:"UserTime"},[t._v(t._s(e.createDate?e.createDate.substring(0,11):""))])],1)],1),i("v-uni-view",{staticClass:"Collect",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.VideoStoreUpBtn(e)}}},[i("v-uni-text",{staticClass:"iconfont",class:e.collectStatus?"SelectState":""},[t._v(t._s(e.collectStatus?"":""))])],1)],1),i("v-uni-view",{staticClass:"CardTitle"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"CardControl"},[i("v-uni-view",{staticClass:"CardMute",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.MuteBtn(e)}}},[i("v-uni-text",{staticClass:"iconfont"},[t._v(t._s(e.Mute?"":""))])],1),i("v-uni-view",{staticClass:"CardPlay",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ToPlayVideo(e)}}},[i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1),i("v-uni-view",{staticClass:"Praise",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.VideogiveBtn(e)}}},[i("v-uni-text",{staticClass:"iconfont",class:e.likeStatus?"SelectState":""},[t._v("")])],1)],1)],1),i("v-uni-view",{staticClass:"BgCol"})],1)],1)})),t.VideoCoverArr.length?i("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}}):t._e(),i("buryingpoint",{ref:"buryingpoint"})],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},fbe7:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};e.default=a}}]);