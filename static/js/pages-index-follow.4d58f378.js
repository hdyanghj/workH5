(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-follow"],{"156a":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".FollowCont[data-v-d6984a6a]{letter-spacing:%?2?%}.Back[data-v-d6984a6a]{padding:0 %?48?%;width:%?80?%;height:%?80?%;padding-top:%?104?%}.Back>uni-image[data-v-d6984a6a]{width:100%;height:100%}.FollowTitle[data-v-d6984a6a]{padding:0 %?48?%;padding-top:%?44?%;font-size:%?40?%;line-height:%?40?%;color:#001733}.FollowLevelTitle[data-v-d6984a6a]{padding:0 %?48?%;font-size:%?24?%;line-height:%?24?%;color:#f0cf8d;padding-top:%?20?%}.Follow[data-v-d6984a6a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding-top:%?16?%}.FollowText[data-v-d6984a6a]{padding:0 %?34?%;height:%?68?%;border-radius:%?34?%;border:%?2?% solid #195092;text-align:center;line-height:%?68?%;color:#195092;font-size:%?30?%;margin-top:%?32?%;margin-left:%?36?%}.FollowBtn[data-v-d6984a6a]{margin:0 auto;margin-top:%?168?%;width:%?654?%;height:%?88?%;background:#195092;border-radius:%?44?%;font-size:%?32?%;text-align:center;line-height:%?88?%;color:#fff}.FollowTextEnd[data-v-d6984a6a]{background:#195092;box-shadow:%?8?% %?8?% %?24?% 0 rgba(0,23,51,.15);color:#fff}",""]),e.exports=t},"65f5":function(e,t,o){"use strict";o.r(t);var n=o("6cf8"),i=o("a677");for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("66cb");var s,r=o("f0c5"),l=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"d6984a6a",null,!1,n["a"],s);t["default"]=l.exports},"66cb":function(e,t,o){"use strict";var n=o("e21b"),i=o.n(n);i.a},"6bd3":function(e,t,o){"use strict";var n=o("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o("7cf6")),a={data:function(){return{UserId:uni.getStorageSync("user_Id"),token:uni.getStorageSync("token"),FollowList:null,source:""}},onLoad:function(e){this.source=e.source,console.log(this.source),this.ObtainFollow()},methods:{KeepFollow:function(){for(var e=this,t=[],o=0;o<this.FollowList.length;o++)this.FollowList[o].subscribed&&t.push({tagId:this.FollowList[o].id,userId:this.UserId});t.length?uni.request({url:this.$webUrl+this.$KeepFollow,header:{token:this.token},method:"POST",data:JSON.stringify(t),success:function(t){0===t.data.code?(uni.showToast({title:"订阅成功",duration:3e3,icon:"none"}),"main"==e.source?setTimeout((function(){e.ToHome()}),1e3):"center"==e.source?setTimeout((function(){e.ToCenter()}),1e3):setTimeout((function(){e.ToHome()}),1e3)):i.default.notLogin(t.data)}}):uni.showToast({title:"请选择订阅标签",duration:3e3,icon:"none"})},ToBlack:function(){var e=this;"main"==this.source?setTimeout((function(){e.ToHome()}),500):"center"==this.source?setTimeout((function(){e.ToCenter()}),500):setTimeout((function(){e.ToHome()}),500)},DeleteFollow:function(e,t){0===e.subscribed?(this.FollowList[t].subscribed=1,this.FollowList[t].ShowTrue=!0):(this.FollowList[t].subscribed=0,uni.request({url:this.$webUrl+this.$DeleteFollow,header:{"content-type":"application/x-www-form-urlencoded",token:this.token},method:"POST",data:{tagId:e.id,userId:this.UserId},success:function(e){0==e.data.code?uni.showToast({title:"取消订阅",duration:3e3,icon:"none"}):i.default.notLogin(e.data)}}))},ObtainFollow:function(){var e=this;this.UserId||(uni.showToast({title:"未登入",duration:3e3,icon:"none"}),setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1e3)),uni.request({url:this.$webUrl+this.$GainFollow,method:"GET",data:{userId:this.UserId},success:function(t){0===t.data.code&&(e.FollowList=t.data.data)},fail:function(e){console.log(JSON.stringify(e))}})},ToHome:function(){uni.switchTab({url:"/pages/index/main"})},ToCenter:function(){uni.switchTab({url:"/pages/center/center"})}}};t.default=a},"6cf8":function(e,t,o){"use strict";var n,i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"FollowCont"},[o("v-uni-view",{staticClass:"Back",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ToBlack()}}},[o("v-uni-image",{attrs:{mode:"aspectFill",src:"/static/Home/Back.png"}})],1),o("v-uni-view",{staticClass:"FollowTitle"},[e._v("订阅")]),o("v-uni-view",{staticClass:"FollowLevelTitle"},[e._v("选择您关心的订阅标签")]),o("v-uni-view",{staticClass:"Follow"},e._l(e.FollowList,(function(t,n){return o("v-uni-view",{key:n,staticClass:"FollowText",class:t.subscribed?"FollowTextEnd":"",on:{click:function(o){arguments[0]=o=e.$handleEvent(o),e.DeleteFollow(t,n)}}},[e._v(e._s(t.tag))])})),1),o("v-uni-view",{staticClass:"FollowBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.KeepFollow()}}},[e._v("订阅")])],1)},a=[];o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}))},"7cf6":function(e,t,o){"use strict";var n=o("ee27");o("c975"),o("ac1f"),o("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o("e143")),a={downBtn:function(){setTimeout((function(){var e=window.navigator.userAgent.toLowerCase();-1!=e.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=e.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=e.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=e.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(e){console.log("登陆失效验证："),console.log(JSON.stringify(e));var t=e.code,o=e.msg||e.error;if(100005001==t||100005002==t){uni.clearStorage(),o="token不能为空"==o?"未登录":o.replace(/token/g,"登录"),uni.showToast({icon:"none",title:o,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==t?(console.log(t),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:o,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:o,duration:1500})},integralSave:function(e){var t=e.url,o=e.data,n=e.token,i=e.cb;n&&uni.request({url:t,method:"POST",header:{token:n},data:o,success:function(e){i&&i()}})},showModal:function(e,t){var o=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(n){n.confirm?uni.navigateTo({url:"../login/login"}):n.cancel&&o.visitorLogin({url:e,url2:t})}})},visitorLogin:function(e){var t=e.url,o=e.url2,n=this,i=plus.device.uuid;console.log(i),uni.request({url:t,data:{openId:i,unionid:i},success:function(e){console.log("获取用户信息"),console.log(JSON.stringify(e)),3==e.data.data.code?n.register(o,i):n.saveUserInfo(e.data.data)}})},register:function(e,t){var o=this;uni.request({url:e,method:"POST",data:{openid:t,unionid:t},success:function(e){console.log("注册"),console.log(JSON.stringify(e)),o.saveUserInfo(e.data.data)}})},saveUserInfo:function(e){uni.setStorage({key:"user_Info",data:{username:e.user.username,headSculpture:e.user.headSculpture,remarks:e.user.remarks,gender:e.user.gender,birthday:e.user.birthday,email:e.user.email,mobile:e.user.mobile}}),uni.setStorage({key:"user_Id",data:e.user.id}),uni.setStorage({key:"token",data:e.token}),uni.setStorage({key:"postureTestNumber",data:e.user.postureTestNumber})},statisticalClicks:function(e){var t=i.default.prototype;uni.request({url:t.$webUrl+t.$recordClicks,method:"POST",data:e,success:function(e){console.log("统计点击量 ："),console.log(e)},fail:function(e){console.log(e)}})},sharingApplet:function(e){console.log(JSON.stringify(e));var t=i.default.prototype,o=this,n=t.$userSharingRecord;void 0!=e.courseflag&&2==e.courseflag&&(n=t.$courseShareLock),uni.request({url:t.$webUrl+n,header:{token:e.token},data:{href:e.href,shareChannel:e.subMsg,shareContent:e.summary,shareImg:e.imageUrl,shareTitle:e.title,shareType:e.shareType,userId:e.userId,markId:e.id,module:e.module},method:"POST",success:function(n){console.log("分享记录"+JSON.stringify(n)),console.log(t.$webUrl),console.log(t.$userintegralrecord),o.integralSave({url:t.$webUrl+t.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:e.userId},token:e.token}),o.shareFun(e)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(e){console.log("我进来了"),console.log(JSON.stringify(e)),uni.share({provider:"weixin",type:e.shareType,imageUrl:e.imageUrl,title:e.title,miniProgram:{id:"gh_bb081e4b31c9",path:e.href,type:0,webUrl:e.webHref},success:function(e){console.log(JSON.stringify(e))}})},getMembers:function(e,t,o){var n=this;uni.request({url:e,header:{"content-type":"application/x-www-form-urlencoded",token:t},data:{userId:o},method:"GET",success:function(e){if(0==e.data.code){var t=e.data.data;console.log(t),uni.setStorage({key:"memberInfo",data:t})}else n.notLogin(e.data)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};t.default=a},a677:function(e,t,o){"use strict";o.r(t);var n=o("6bd3"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},e21b:function(e,t,o){var n=o("156a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("328191b6",n,!0,{sourceMap:!1,shadowMode:!1})}}]);