(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Bbs-BbsPraise"],{"147f":function(e,t,i){"use strict";var a=i("e73d"),n=i.n(a);n.a},"32ea":function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"bbs-praise-title"},e._l(e.tabItem,(function(t,a){return i("v-uni-view",{staticClass:"tabitem",class:[a==e.active?"tabActive":""],attrs:{id:"id"+a},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickTabToChange(a)}}},[e._v(e._s(t))])})),1),e._l(e.list,(function(t,a){return i("v-uni-view",{staticClass:"bbs-praise-content"},[i("v-uni-view",{staticClass:"praise-desc",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleToBbsInfoDetails(a,t.id,t.itemId,t.userId)}}},[i("v-uni-image",{staticClass:"praise-person-head",attrs:{src:t.headSculpture,mode:""}}),i("v-uni-view",{staticClass:"praise-person"},[i("v-uni-view",[e._v(e._s(t.username))]),0==e.active?i("v-uni-view",{staticClass:"person-write"},[e._v(e._s(t.content))]):e._e(),1==e.active?i("v-uni-view",{staticClass:"person-write",class:1==t.readStatus?"readed":""},[e._v("回复了您的评论："+e._s(t.content))]):e._e()],1)],1)],1)})),i("uni-load-more",{attrs:{loadingType:e.loadingType,contentText:e.contentText}})],2)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))},"6b73":function(e,t,i){"use strict";i.r(t);var a=i("c3d4"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"6c85":function(e,t,i){"use strict";i.r(t);var a=i("32ea"),n=i("6b73");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("147f");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"9dd025b0",null,!1,a["a"],r);t["default"]=d.exports},"7cf6":function(e,t,i){"use strict";var a=i("ee27");i("c975"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("e143")),o={downBtn:function(){setTimeout((function(){var e=window.navigator.userAgent.toLowerCase();-1!=e.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=e.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=e.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=e.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(e){console.log("登陆失效验证："),console.log(JSON.stringify(e));var t=e.code,i=e.msg||e.error;if(100005001==t||100005002==t){uni.clearStorage(),i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==t?(console.log(t),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:i,duration:1500})},integralSave:function(e){var t=e.url,i=e.data,a=e.token,n=e.cb;a&&uni.request({url:t,method:"POST",header:{token:a},data:i,success:function(e){n&&n()}})},showModal:function(e,t){var i=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(a){a.confirm?uni.navigateTo({url:"../login/login"}):a.cancel&&i.visitorLogin({url:e,url2:t})}})},visitorLogin:function(e){var t=e.url,i=e.url2,a=this,n=plus.device.uuid;console.log(n),uni.request({url:t,data:{openId:n,unionid:n},success:function(e){console.log("获取用户信息"),console.log(JSON.stringify(e)),3==e.data.data.code?a.register(i,n):a.saveUserInfo(e.data.data)}})},register:function(e,t){var i=this;uni.request({url:e,method:"POST",data:{openid:t,unionid:t},success:function(e){console.log("注册"),console.log(JSON.stringify(e)),i.saveUserInfo(e.data.data)}})},saveUserInfo:function(e){uni.setStorage({key:"user_Info",data:{username:e.user.username,headSculpture:e.user.headSculpture,remarks:e.user.remarks,gender:e.user.gender,birthday:e.user.birthday,email:e.user.email,mobile:e.user.mobile}}),uni.setStorage({key:"user_Id",data:e.user.id}),uni.setStorage({key:"token",data:e.token}),uni.setStorage({key:"postureTestNumber",data:e.user.postureTestNumber})},statisticalClicks:function(e){var t=n.default.prototype;uni.request({url:t.$webUrl+t.$recordClicks,method:"POST",data:e,success:function(e){console.log("统计点击量 ："),console.log(e)},fail:function(e){console.log(e)}})},sharingApplet:function(e){console.log(JSON.stringify(e));var t=n.default.prototype,i=this,a=t.$userSharingRecord;void 0!=e.courseflag&&2==e.courseflag&&(a=t.$courseShareLock),uni.request({url:t.$webUrl+a,header:{token:e.token},data:{href:e.href,shareChannel:e.subMsg,shareContent:e.summary,shareImg:e.imageUrl,shareTitle:e.title,shareType:e.shareType,userId:e.userId,markId:e.id,module:e.module},method:"POST",success:function(a){console.log("分享记录"+JSON.stringify(a)),console.log(t.$webUrl),console.log(t.$userintegralrecord),i.integralSave({url:t.$webUrl+t.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:e.userId},token:e.token}),i.shareFun(e)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(e){console.log("我进来了"),console.log(JSON.stringify(e)),uni.share({provider:"weixin",type:e.shareType,imageUrl:e.imageUrl,title:e.title,miniProgram:{id:"gh_bb081e4b31c9",path:e.href,type:0,webUrl:e.webHref},success:function(e){console.log(JSON.stringify(e))}})},getMembers:function(e,t,i){var a=this;uni.request({url:e,header:{"content-type":"application/x-www-form-urlencoded",token:t},data:{userId:i},method:"GET",success:function(e){if(0==e.data.code){var t=e.data.data;console.log(t),uni.setStorage({key:"memberInfo",data:t})}else a.notLogin(e.data)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};t.default=o},9362:function(e,t,i){"use strict";var a=i("eca9"),n=i.n(a);n.a},"975f":function(e,t,i){"use strict";i.r(t);var a=i("fbe7"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},a502:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.loadingType&&e.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:e.color}},[e._v(e._s(0===e.loadingType?e.contentText.contentdown:1===e.loadingType?e.contentText.contentrefresh:2===e.loadingType?e.contentText.contentnomore:e.contentText.contenterror))])],1)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))},ab14:function(e,t,i){"use strict";i.r(t);var a=i("a502"),n=i("975f");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("9362");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0f050a07",null,!1,a["a"],r);t["default"]=d.exports},bdc9:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".bbs-praise-title[data-v-9dd025b0]{font-size:%?36?%;margin:%?48?% %?0?% %?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tabitem[data-v-9dd025b0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;padding-bottom:%?16?%;color:#919191}.tabActive[data-v-9dd025b0]{color:#1bc4db;border-bottom:1px solid #1bc4db}.bbs-praise-content[data-v-9dd025b0]{border-bottom:1px solid rgba(255,235,235,.92);padding:%?24?% %?44?%}.praise-desc[data-v-9dd025b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.praise-person-head[data-v-9dd025b0]{width:%?88?%;height:%?88?%;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.5);border-radius:50%}.praise-img[data-v-9dd025b0]{width:%?132?%;height:%?88?%;border-radius:%?8?%}.praise-person[data-v-9dd025b0]{font-size:%?32?%;color:#484848;margin-left:%?24?%}.praise-person uni-view[data-v-9dd025b0]:nth-child(1){margin-bottom:%?16?%}.person-write[data-v-9dd025b0]{font-size:%?28?%;width:%?550?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.readed[data-v-9dd025b0]{color:rgba(74,74,74,.5)}",""]),e.exports=t},c3d4:function(e,t,i){"use strict";var a=i("ee27");i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("7cf6")),o=a(i("ab14")),r={components:{uniLoadMore:o.default},data:function(){return{tabItem:["赞","评论"],active:0,page:1,limit:5,loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"我是有底线的"},list:[]}},onNavigationBarButtonTap:function(e){0==e.index&&uni.navigateBack({delta:1})},onLoad:function(){this.getPraiseInfo(0)},methods:{onReachBottom:function(){this.reachBottom()},reachBottom:function(){var e=this;null!=this.timer&&clearTimeout(this.timer),0===this.loadingType&&(this.loadingType=1,this.timer=setTimeout((function(){e.getPraiseInfo(e.active)}),1e3))},clickTabToChange:function(e){this.active=e,this.page=1,this.list=[],this.getPraiseInfo(e)},getPraiseInfo:function(e){var t=this,i={};i=0==e?{page:this.page,limit:this.limit,targetUserId:uni.getStorageSync("user_Id"),itemAction:1}:{page:this.page,limit:this.limit,targetUserId:uni.getStorageSync("user_Id"),itemAction:2},uni.request({url:this.$webUrl+this.$getPraiseInfo,method:"GET",header:{token:uni.getStorageSync("token")},data:i,success:function(e){if(console.log(e),e=e.data,0==e.code&&e.data.list){if(t.list.length==e.data.total)return void(t.loadingType=2);t.page++,t.list=t.list.concat(e.data.list),t.loadingType=0,e.data.total<t.limit&&(t.loadingType=2)}else n.default.notLogin(e.data)},fail:function(e){uniApp.loadingType=2,uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},handleToBbsInfoDetails:function(e,t,i,a){var o=this;1==this.active&&uni.request({url:this.$webUrl+this.$setComment+t,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:uni.getStorageSync("token")},success:function(t){0==t.data.code?(o.list[e].readStatus=1,uni.navigateTo({url:"/pages/Bbs/BbsInfoDetails?id="+i+"&userId="+a})):n.default.notLogin(t.data)},fail:function(e){uniApp.loadingType=2,uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}}};t.default=r},de72:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".load-more[data-v-0f050a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-0f050a07]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-0f050a07]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-0f050a07]{position:absolute}.load1[data-v-0f050a07],\n.load2[data-v-0f050a07],\n.load3[data-v-0f050a07]{height:24px;width:24px}.load2[data-v-0f050a07]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0f050a07]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-0f050a07]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0f050a07 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0f050a07{0%{opacity:1}100%{opacity:.2}}",""]),e.exports=t},e73d:function(e,t,i){var a=i("bdc9");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("3e4dc2a0",a,!0,{sourceMap:!1,shadowMode:!1})},eca9:function(e,t,i){var a=i("de72");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("753f3363",a,!0,{sourceMap:!1,shadowMode:!1})},fbe7:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};t.default=a}}]);