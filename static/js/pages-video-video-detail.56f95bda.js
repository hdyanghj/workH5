(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-video-detail"],{"0163":function(t,e,i){"use strict";i.r(e);var n=i("24f6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"190f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,e=getCurrentPages();this.route=e[e.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var e,i=this,n=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){i.systemType=t}}),e="ios"==this.systemType.platform?2:1;var a={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:n,platform:e,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:a,success:function(t){0==t.data.code&&(clearInterval(i.Timer),i.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};e.default=n},"1dca":function(t,e,i){"use strict";i.r(e);var n=i("50ee"),a=i("7003");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"0f5ec893",null,!1,n["a"],s);e["default"]=r.exports},"24f6":function(t,e,i){"use strict";var n=i("ee27");i("99af"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ab14")),o=n(i("7cf6")),s=n(i("1dca")),l={components:{buryingpoint:s.default,uniLoadMore:a.default},data:function(){return{videoId:"",title:"",synopsis:"",praise:"",author:"",isActive:!1,isCollectActive:!1,timer:null,page:1,limit:10,loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"我是有底线的"},list:[],commentText:"",anonymity:0,playURL:"",cover:"",flag:!0,root:!0,isAnonymity:!1,token:"",userId:"",defaultImg:this.$defaultAvatar}},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onHide:function(){this.$refs.buryingpoint.buryingpoint("视频介绍")},onUnload:function(){this.$refs.buryingpoint.buryingpoint("视频介绍")},onLoad:function(t){this.token=uni.getStorageSync("token"),this.userId=uni.getStorageSync("user_Id"),this.videoId=t.videoId,this.getVideoPlayInfo(),this.reachBottomMomments(),this.playingVideo()},onReachBottom:function(){this.flag=!1,this.reachBottomMomments()},methods:{handleToLogin:function(){setTimeout((function(){uni.switchTab({url:"../center/center"})}),800)},playingVideo:function(){var t=this;uni.request({url:this.$webUrl+this.$playingVideo,method:"GET",data:{videoId:this.videoId},header:{token:this.token},success:function(e){e=e.data,0==e.code?t.root=e.msg:o.default.notLogin(e)},fail:function(){},complete:function(){}})},getVideoPlayInfo:function(){var t=this;uni.request({url:this.$webUrl+this.$getVideoPlayInfo+this.videoId,method:"GET",data:{userId:this.userId},header:{token:this.token},success:function(e){if(e=e.data,0==e.code&&e.data){var i=e.data;t.title=i.title,t.synopsis=i.synopsis,t.praise=i.praise,t.author=i.author,t.cover=i.cover,1==i.likeStatus?t.isActive=!0:0==i.likeStatus&&(t.isActive=!1),1==i.collectStatus?t.isCollectActive=!0:0==i.collectStatus&&(t.isCollectActive=!1)}else o.default.notLogin(e)},fail:function(){},complete:function(){}})},getMommentsInfo:function(){var t=this;uni.request({url:this.$webUrl+this.$getMommentsInfo,method:"GET",data:{page:this.page,limit:this.limit,videoId:this.videoId,userId:this.userId},header:{token:this.token},success:function(e){if(e=e.data,0==e.code&&e.data.list){if(t.list.length==e.data.count)return void(t.loadingType=2);t.page++,t.list=t.list.concat(e.data.list),t.loadingType=0,e.data.count<t.limit&&(t.loadingType=2)}else o.default.notLogin(e)},fail:function(){},complete:function(){}})},reachBottomMomments:function(){var t=this;null!=this.timer&&clearTimeout(this.timer),0===this.loadingType&&(1==this.flag?this.getMommentsInfo():(this.loadingType=1,this.timer=setTimeout((function(){t.getMommentsInfo()}),1e3)))},handleVideoLike:function(){this.userId?0==this.isActive&&this.handleToLike(this.videoId,1):(uni.showToast({icon:"none",duration:3e3,title:"未登录"}),this.handleToLogin())},handleCommentsLike:function(t,e){if(this.userId){if(1!=this.list[t].likeStatus){this.list[t].likeStatus=1;var i=this.list[t].praise;i++,this.list[t].praise=i,this.handleToLike(e,2)}}else uni.showToast({icon:"none",duration:3e3,title:"未登录"}),this.handleToLogin()},handleToLike:function(t,e){var i=this;uni.request({url:this.$webUrl+this.$handleToLike,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{marking:t,type:e},success:function(t){t=t.data,i.likeCode=t.code,0==t.code?1==e&&(0==i.isActive&&i.praise++,i.isActive=!0):o.default.notLogin(t)},fail:function(){},complete:function(){}})},handleToCollect:function(){var t=this;this.userId?this.isCollectActive||uni.request({url:this.$webUrl+this.$handleToVideoCollect,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{marking:this.videoId,type:2},success:function(e){e=e.data,0==e.code?t.isCollectActive=!0:o.default.notLogin(e)},fail:function(){},complete:function(){}}):(uni.showToast({icon:"none",duration:3e3,title:"未登录"}),this.handleToLogin())},handleAnonymity:function(){this.isAnonymity=!this.isAnonymity,1==this.isAnonymity?this.anonymity=1:this.anonymity=0},writeComments:function(){var t=this;if(this.userId){if(""==this.commentText.replace(/\s+/g,""))return void uni.showToast({icon:"none",duration:3e3,title:"评论不能为空"});uni.request({url:this.$webUrl+this.$writeComments,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{videoId:this.videoId,content:this.commentText,anonymity:this.anonymity},success:function(e){e=e.data,0==e.code?(t.loadingType=0,t.list=[],t.page=1,t.flag=!0,t.reachBottomMomments(),t.commentText=""):o.default.notLogin(e)},fail:function(){},complete:function(){}})}else uni.showToast({icon:"none",duration:3e3,title:"未登录"}),this.handleToLogin()},handleToVideoPay:function(){uni.navigateTo({url:"video-pay?videoId="+this.videoId})},handleToAliplayer:function(){this.userId?"token失效，请重新登录"==this.root||"token不能为空"==this.root?(uni.showToast({icon:"none",duration:3e3,title:"登录已失效，请重新登录"}),this.handleToLogin()):"success"==this.root?uni.navigateTo({url:"aliplayer?videoId="+this.videoId+"&token="+this.token+"&title="+this.title}):uni.showToast({icon:"none",duration:3e3,title:this.root}):(uni.showToast({icon:"none",duration:3e3,title:"未登录"}),this.handleToLogin())},errorText:function(t){if(100005001==t||100005002==t)return uni.showToast({icon:"none",duration:3e3,title:"登录已失效，请重新登录"}),uni.clearStorage(),void this.handleToLogin()}}};e.default=l},"2aad":function(t,e,i){"use strict";var n=i("43e3"),a=i.n(n);a.a},"43e3":function(t,e,i){var n=i("a2b6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b5da2a9e",n,!0,{sourceMap:!1,shadowMode:!1})},"50ee":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},7003:function(t,e,i){"use strict";i.r(e);var n=i("190f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"7cf6":function(t,e,i){"use strict";var n=i("ee27");i("c975"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("e143")),o={downBtn:function(){setTimeout((function(){var t=window.navigator.userAgent.toLowerCase();-1!=t.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=t.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=t.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=t.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(t){console.log("登陆失效验证："),console.log(JSON.stringify(t));var e=t.code,i=t.msg||t.error;if(100005001==e||100005002==e){uni.clearStorage(),i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==e?(console.log(e),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:i,duration:1500})},integralSave:function(t){var e=t.url,i=t.data,n=t.token,a=t.cb;n&&uni.request({url:e,method:"POST",header:{token:n},data:i,success:function(t){a&&a()}})},showModal:function(t,e){var i=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(n){n.confirm?uni.navigateTo({url:"../login/login"}):n.cancel&&i.visitorLogin({url:t,url2:e})}})},visitorLogin:function(t){var e=t.url,i=t.url2,n=this,a=plus.device.uuid;console.log(a),uni.request({url:e,data:{openId:a,unionid:a},success:function(t){console.log("获取用户信息"),console.log(JSON.stringify(t)),3==t.data.data.code?n.register(i,a):n.saveUserInfo(t.data.data)}})},register:function(t,e){var i=this;uni.request({url:t,method:"POST",data:{openid:e,unionid:e},success:function(t){console.log("注册"),console.log(JSON.stringify(t)),i.saveUserInfo(t.data.data)}})},saveUserInfo:function(t){uni.setStorage({key:"user_Info",data:{username:t.user.username,headSculpture:t.user.headSculpture,remarks:t.user.remarks,gender:t.user.gender,birthday:t.user.birthday,email:t.user.email,mobile:t.user.mobile}}),uni.setStorage({key:"user_Id",data:t.user.id}),uni.setStorage({key:"token",data:t.token}),uni.setStorage({key:"postureTestNumber",data:t.user.postureTestNumber})},statisticalClicks:function(t){var e=a.default.prototype;uni.request({url:e.$webUrl+e.$recordClicks,method:"POST",data:t,success:function(t){console.log("统计点击量 ："),console.log(t)},fail:function(t){console.log(t)}})},sharingApplet:function(t){console.log(JSON.stringify(t));var e=a.default.prototype,i=this,n=e.$userSharingRecord;void 0!=t.courseflag&&2==t.courseflag&&(n=e.$courseShareLock),uni.request({url:e.$webUrl+n,header:{token:t.token},data:{href:t.href,shareChannel:t.subMsg,shareContent:t.summary,shareImg:t.imageUrl,shareTitle:t.title,shareType:t.shareType,userId:t.userId,markId:t.id,module:t.module},method:"POST",success:function(n){console.log("分享记录"+JSON.stringify(n)),console.log(e.$webUrl),console.log(e.$userintegralrecord),i.integralSave({url:e.$webUrl+e.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:t.userId},token:t.token}),i.shareFun(t)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(t){console.log("我进来了"),console.log(JSON.stringify(t)),uni.share({provider:"weixin",type:t.shareType,imageUrl:t.imageUrl,title:t.title,miniProgram:{id:"gh_bb081e4b31c9",path:t.href,type:0,webUrl:t.webHref},success:function(t){console.log(JSON.stringify(t))}})},getMembers:function(t,e,i){var n=this;uni.request({url:t,header:{"content-type":"application/x-www-form-urlencoded",token:e},data:{userId:i},method:"GET",success:function(t){if(0==t.data.code){var e=t.data.data;console.log(e),uni.setStorage({key:"memberInfo",data:e})}else n.notLogin(t.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};e.default=o},"80d9":function(t,e,i){"use strict";i.r(e);var n=i("bfec"),a=i("0163");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2aad");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"fbe720da",null,!1,n["a"],s);e["default"]=r.exports},9362:function(t,e,i){"use strict";var n=i("eca9"),a=i.n(n);a.a},"975f":function(t,e,i){"use strict";i.r(e);var n=i("fbe7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a2b6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".icon-play[data-v-fbe720da]{font-size:%?88?%}.none-reply[data-v-fbe720da]{width:%?304?%;margin:%?100?% auto %?140?%;text-align:center;opacity:.5}.none-reply>uni-image[data-v-fbe720da]{width:%?200?%;height:%?114?%}.none-reply>uni-view[data-v-fbe720da]{margin-top:%?20?%;font-size:%?26?%;color:#333}.d-wrap[data-v-fbe720da]{margin:%?34?%;font-family:PingFangSC-Regular}.play-btn[data-v-fbe720da]{position:absolute;\n\t/* top: 160upx;\n\tleft: 320upx; */top:0;left:0;right:0;bottom:0;width:%?88?%;height:%?88?%;margin:auto;font-size:%?88?%;font-weight:700;color:#fff}.img-view[data-v-fbe720da]{position:relative}.img-view uni-image[data-v-fbe720da]{width:100%}.iconItem[data-v-fbe720da]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.iconItem uni-view[data-v-fbe720da]:first-child{margin-right:%?60?%}.course-content[data-v-fbe720da]{display:-webkit-box;display:-webkit-flex;display:flex}.course-view[data-v-fbe720da]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.course-title[data-v-fbe720da]{font-size:%?32?%}.course-detail[data-v-fbe720da]{font-size:%?28?%;color:#4a4a4a;line-height:%?40?%}.comment-list[data-v-fbe720da]{margin-bottom:%?145?%}.comment-flex[data-v-fbe720da]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.comment-like[data-v-fbe720da]{font-size:%?26?%}.publish[data-v-fbe720da]{color:#03b2ca;padding-left:%?20?%;line-height:%?78?%}.click-like[data-v-fbe720da]{margin-right:%?16?%}.click-like ~ uni-text[data-v-fbe720da]{font-size:%?30?%}.clearfix[data-v-fbe720da]{height:%?10?%}.comment-input[data-v-fbe720da]{position:fixed;left:0;bottom:0;right:0;background-color:#f8f8f8;padding:%?20?% %?40?%;box-shadow:0 0 %?8?% #f0f2f6;display:-webkit-box;display:-webkit-flex;display:flex;font-family:PingFangSC-Regular;font-size:%?32?%;border-top:1px solid #f0f2f6}uni-input[data-v-fbe720da]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?10?% %?20?%;border-radius:%?10?%;background-color:#fff;height:%?70?%}.flex-btn[data-v-fbe720da]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.btn[data-v-fbe720da]{height:%?76?%;width:%?130?%;line-height:%?76?%;padding:0 %?25?%;font-size:%?28?%;background:-webkit-linear-gradient(315deg,#a4eef7,#6bd8ed);background:linear-gradient(135deg,#a4eef7,#6bd8ed);color:#000;border-radius:%?8?%;text-align:center}.like-active[data-v-fbe720da]{color:#6bd8ed}.switch[data-v-fbe720da]{margin-left:%?10?%}.comment-anonymity[data-v-fbe720da]{line-height:%?78?%;padding-right:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.anonymity[data-v-fbe720da]{padding-right:%?10?%;font-size:%?40?%;color:#ccc}.anonymity-active[data-v-fbe720da]{color:#6bd8ed}.anonymity-text[data-v-fbe720da]{font-size:%?26?%}",""]),t.exports=e},a502:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:2===t.loadingType?t.contentText.contentnomore:t.contentText.contenterror))])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},ab14:function(t,e,i){"use strict";i.r(e);var n=i("a502"),a=i("975f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9362");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"0f050a07",null,!1,n["a"],s);e["default"]=r.exports},bfec:function(t,e,i){"use strict";var n={buryingpoint:i("1dca").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"video-play"},[i("v-uni-view",{staticClass:"img-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToAliplayer.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.cover,mode:"aspectFill","lazy-load":"true"}}),i("v-uni-view",{staticClass:"play-btn"},[i("v-uni-text",{staticClass:"iconfont icon-play"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"d-wrap"},[i("v-uni-view",{staticClass:"iconItem"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleVideoLike.apply(void 0,arguments)}}},[t.isActive?i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont click-like",class:[t.isActive?"like-active":""]},[t._v("")]),i("v-uni-text",[t._v(t._s(t.praise))])],1):i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont click-like",class:[t.isActive?"like-active":""]},[t._v("")]),i("v-uni-text",[t._v(t._s(t.praise))])],1)],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToCollect.apply(void 0,arguments)}}},[t.isCollectActive?i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont",class:[t.isCollectActive?"like-active":""]},[t._v("")])],1):i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont",class:[t.isCollectActive?"like-active":""]},[t._v("")])],1)],1)],1),i("v-uni-view",{staticClass:"course-content"},[i("v-uni-view",{staticClass:"course-view"},[i("v-uni-view",{staticClass:"course-title"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"course-detail module border-underline"},[t._v(t._s(t.synopsis))])],1)],1),i("v-uni-view",{staticClass:"comment-list"},[i("v-uni-view",{staticClass:"module-title"},[t._v("评论列表")]),t.list.length?i("v-uni-view",{staticClass:"module comments"},[t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"comment"},[i("v-uni-view",[e.anonymity?i("v-uni-image",{attrs:{src:t.defaultImg,"lazy-load":"true"}}):i("v-uni-image",{attrs:{src:e.headSculpture?e.headSculpture:t.defaultImg,"lazy-load":"true"}})],1),i("v-uni-view",{staticClass:"comment-sub"},[i("v-uni-view",{staticClass:"comment-flex"},[i("v-uni-view",{staticClass:"comment-from"},[t._v(t._s(e.userName))]),i("v-uni-view",{staticClass:"comment-like",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleCommentsLike(n,e.id)}}},[e.likeStatus?i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont click-like",class:[e.likeStatus?"like-active":""]},[t._v("")])],1):i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont click-like",class:[e.likeStatus?"like-active":""]},[t._v("")])],1),i("v-uni-text",[t._v(t._s(e.praise))])],1)],1),i("v-uni-view",{staticClass:"comment-time"},[t._v(t._s(e.createDate))]),i("v-uni-view",{staticClass:"comment-content"},[t._v(t._s(e.content))])],1)],1)})),i("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}})],2):i("v-uni-view",{staticClass:"none-reply"},[i("v-uni-image",{attrs:{src:"/static/no-reply.png","lazy-load":"true"}}),i("v-uni-view",[t._v("还没有评论 快来说两句")])],1)],1)],1),i("v-uni-view",{staticClass:"clearfix"}),i("v-uni-view",{staticClass:"comment-input"},[i("v-uni-view",{staticClass:"comment-anonymity",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleAnonymity.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont anonymity",class:[t.isAnonymity?"anonymity-active":""]},[t._v("")]),i("v-uni-text",{staticClass:"anonymity-text"},[t._v("匿名")])],1),i("v-uni-input",{attrs:{type:"text",placeholder:"我来说几句"},model:{value:t.commentText,callback:function(e){t.commentText=e},expression:"commentText"}}),i("v-uni-view",{staticClass:"publish",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.writeComments.apply(void 0,arguments)}}},[t._v("发表")])],1),i("buryingpoint",{ref:"buryingpoint"})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},de72:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".load-more[data-v-0f050a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-0f050a07]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-0f050a07]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-0f050a07]{position:absolute}.load1[data-v-0f050a07],\n.load2[data-v-0f050a07],\n.load3[data-v-0f050a07]{height:24px;width:24px}.load2[data-v-0f050a07]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0f050a07]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-0f050a07]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0f050a07 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0f050a07{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},eca9:function(t,e,i){var n=i("de72");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("753f3363",n,!0,{sourceMap:!1,shadowMode:!1})},fbe7:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};e.default=n}}]);