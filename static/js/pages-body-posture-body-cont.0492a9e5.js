(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-posture-body-cont"],{"02f4":function(e,t,n){"use strict";n.r(t);var o=n("9cc5"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"0ce6":function(e,t,n){"use strict";var o=n("b363"),i=n.n(o);i.a},"190f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var e=this,t=getCurrentPages();this.route=t[t.length-1].route,this.Timer=setInterval((function(){e.DataTimeNum++}),1e3)},buryingpoint:function(e){var t,n=this,o=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(e){n.systemType=e}}),t="ios"==this.systemType.platform?2:1;var i={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:o,platform:t,route:this.route,name:e,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:i,success:function(e){0==e.data.code&&(clearInterval(n.Timer),n.DataTimeNum=0)},fail:function(e){console.log(JSON.stringify(e))}})}}};t.default=o},"1dca":function(e,t,n){"use strict";n.r(t);var o=n("50ee"),i=n("7003");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var r,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"0f5ec893",null,!1,o["a"],r);t["default"]=u.exports},"3f43":function(e,t,n){"use strict";var o={buryingpoint:n("1dca").default},i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"body-posture"},[o("v-uni-view",{staticClass:"bg-title-h1"},[e._v(e._s(e.title))]),o("v-uni-view",{staticClass:"img-cont"},[o("v-uni-image",{attrs:{src:n("6efe")}})],1),o("v-uni-view",{staticClass:"text-cont"},[e._v(e._s(e.contText))]),o("v-uni-view",{staticClass:"btn-cont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zixunBtn.apply(void 0,arguments)}}},[e._v("专家咨询")]),o("buryingpoint",{ref:"buryingpoint"})],1)},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},"50ee":function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view")},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},"6efe":function(e,t,n){e.exports=n.p+"static/img/knyy.daecfb50.png"},7003:function(e,t,n){"use strict";n.r(t);var o=n("190f"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"7cf6":function(e,t,n){"use strict";var o=n("ee27");n("c975"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("e143")),a={downBtn:function(){setTimeout((function(){var e=window.navigator.userAgent.toLowerCase();-1!=e.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=e.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=e.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=e.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(e){console.log("登陆失效验证："),console.log(JSON.stringify(e));var t=e.code,n=e.msg||e.error;if(100005001==t||100005002==t){uni.clearStorage(),n="token不能为空"==n?"未登录":n.replace(/token/g,"登录"),uni.showToast({icon:"none",title:n,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==t?(console.log(t),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:n,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:n,duration:1500})},integralSave:function(e){var t=e.url,n=e.data,o=e.token,i=e.cb;o&&uni.request({url:t,method:"POST",header:{token:o},data:n,success:function(e){i&&i()}})},showModal:function(e,t){var n=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(o){o.confirm?uni.navigateTo({url:"../login/login"}):o.cancel&&n.visitorLogin({url:e,url2:t})}})},visitorLogin:function(e){var t=e.url,n=e.url2,o=this,i=plus.device.uuid;console.log(i),uni.request({url:t,data:{openId:i,unionid:i},success:function(e){console.log("获取用户信息"),console.log(JSON.stringify(e)),3==e.data.data.code?o.register(n,i):o.saveUserInfo(e.data.data)}})},register:function(e,t){var n=this;uni.request({url:e,method:"POST",data:{openid:t,unionid:t},success:function(e){console.log("注册"),console.log(JSON.stringify(e)),n.saveUserInfo(e.data.data)}})},saveUserInfo:function(e){uni.setStorage({key:"user_Info",data:{username:e.user.username,headSculpture:e.user.headSculpture,remarks:e.user.remarks,gender:e.user.gender,birthday:e.user.birthday,email:e.user.email,mobile:e.user.mobile}}),uni.setStorage({key:"user_Id",data:e.user.id}),uni.setStorage({key:"token",data:e.token}),uni.setStorage({key:"postureTestNumber",data:e.user.postureTestNumber})},statisticalClicks:function(e){var t=i.default.prototype;uni.request({url:t.$webUrl+t.$recordClicks,method:"POST",data:e,success:function(e){console.log("统计点击量 ："),console.log(e)},fail:function(e){console.log(e)}})},sharingApplet:function(e){console.log(JSON.stringify(e));var t=i.default.prototype,n=this,o=t.$userSharingRecord;void 0!=e.courseflag&&2==e.courseflag&&(o=t.$courseShareLock),uni.request({url:t.$webUrl+o,header:{token:e.token},data:{href:e.href,shareChannel:e.subMsg,shareContent:e.summary,shareImg:e.imageUrl,shareTitle:e.title,shareType:e.shareType,userId:e.userId,markId:e.id,module:e.module},method:"POST",success:function(o){console.log("分享记录"+JSON.stringify(o)),console.log(t.$webUrl),console.log(t.$userintegralrecord),n.integralSave({url:t.$webUrl+t.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:e.userId},token:e.token}),n.shareFun(e)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(e){console.log("我进来了"),console.log(JSON.stringify(e)),uni.share({provider:"weixin",type:e.shareType,imageUrl:e.imageUrl,title:e.title,miniProgram:{id:"gh_bb081e4b31c9",path:e.href,type:0,webUrl:e.webHref},success:function(e){console.log(JSON.stringify(e))}})},getMembers:function(e,t,n){var o=this;uni.request({url:e,header:{"content-type":"application/x-www-form-urlencoded",token:t},data:{userId:n},method:"GET",success:function(e){if(0==e.data.code){var t=e.data.data;console.log(t),uni.setStorage({key:"memberInfo",data:t})}else o.notLogin(e.data)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};t.default=a},"9cc5":function(e,t,n){"use strict";var o=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("1dca")),a=o(n("7cf6")),r={components:{buryingpoint:i.default},data:function(){return{itemType:"",typeName:"",title:"",contText:""}},onShow:function(){var e=this;setTimeout((function(){e.$refs.buryingpoint.Time()}),10)},onHide:function(){this.$refs.buryingpoint.buryingpoint("专家咨询")},onUnload:function(){this.$refs.buryingpoint.buryingpoint("专家咨询")},onLoad:function(e){this.itemType=e.itemType,this.typeName=e.typeName},mounted:function(){this.detail()},methods:{detail:function(){var e=this,t=uni.getStorageSync("user_Id"),n=uni.getStorageSync("record_Id"),o=uni.getStorageSync("token");uni.request({url:this.$webUrl+this.$DetectionReport,header:{"content-type":"application/x-www-form-urlencoded",token:""+o},data:{recordId:n,userId:t},method:"GET",success:function(t){if(0==t.data.code)for(var n=t.data.data,o=n.postureAnalysisLiss,i=0;i<o.length;i++)o[i].itemType==e.itemType&&o[i].typeName==e.typeName&&(e.title=o[i].typeName,e.contText=o[i].content);else a.default.notLogin(t.data)}})},zixunBtn:function(){uni.navigateTo({url:"/pages/communication/consult-options?type=expert"})}}};t.default=r},b363:function(e,t,n){var o=n("f3ab");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("64d61c55",o,!0,{sourceMap:!1,shadowMode:!1})},c72c:function(e,t,n){"use strict";n.r(t);var o=n("3f43"),i=n("02f4");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("0ce6");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"16bc19cd",null,!1,o["a"],r);t["default"]=u.exports},f3ab:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".body-posture[data-v-16bc19cd]{padding-bottom:%?120?%}.img-cont[data-v-16bc19cd]{padding:%?20?% 0;width:100%}.img-cont uni-image[data-v-16bc19cd]{width:100%;height:%?200?%;border-radius:%?20?%}.bg-title-h1[data-v-16bc19cd]{padding-top:%?40?%;font-size:%?38?%}.bg-title-h5[data-v-16bc19cd]{color:#ccc;font-size:%?24?%}.text-cont[data-v-16bc19cd]{font-size:%?28?%;line-height:%?40?%}.btn-cont[data-v-16bc19cd]{width:100%;padding:%?30?% 0;background:#6bd8ed;color:#fff;font-size:%?36?%;text-align:center;position:fixed;bottom:0;left:0}",""]),e.exports=t}}]);