(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-course-type"],{"08a8":function(e,t,n){"use strict";n.r(t);var i=n("fabd"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"190f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var e=this,t=getCurrentPages();this.route=t[t.length-1].route,this.Timer=setInterval((function(){e.DataTimeNum++}),1e3)},buryingpoint:function(e){var t,n=this,i=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(e){n.systemType=e}}),t="ios"==this.systemType.platform?2:1;var o={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:i,platform:t,route:this.route,name:e,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:o,success:function(e){0==e.data.code&&(clearInterval(n.Timer),n.DataTimeNum=0)},fail:function(e){console.log(JSON.stringify(e))}})}}};t.default=i},"1d88":function(e,t,n){"use strict";var i=n("1f91"),o=n.n(i);o.a},"1dca":function(e,t,n){"use strict";n.r(t);var i=n("50ee"),o=n("7003");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"0f5ec893",null,!1,i["a"],r);t["default"]=u.exports},"1f91":function(e,t,n){var i=n("79bc");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("27d3a858",i,!0,{sourceMap:!1,shadowMode:!1})},"50ee":function(e,t,n){"use strict";var i,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view")},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"6baa":function(e,t,n){"use strict";var i={buryingpoint:n("1dca").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"wrap"},[e._l(e.list,(function(t,i){return n("v-uni-view",{key:i,staticClass:"course relative",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleToCourseList(t.dictValue,t.dictName)}}},[n("v-uni-image",{attrs:{src:t.imageSrc}}),n("v-uni-view",{staticClass:"absolute"},[n("v-uni-view",{staticClass:"typeName"},[e._v(e._s(t.dictName)+"课程")]),t.smallTitle?n("v-uni-view",{staticClass:"name-detail"},[e._v(e._s(t.smallTitle))]):e._e(),n("v-uni-view",{staticClass:"more"},[e._v("立即查看")])],1)],1)})),n("buryingpoint",{ref:"buryingpoint"})],2)},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},7003:function(e,t,n){"use strict";n.r(t);var i=n("190f"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"79bc":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".course[data-v-26b767db]{padding:%?20?% %?0?%}.course uni-image[data-v-26b767db]{width:100%;height:%?360?%;border-radius:%?10?%;box-shadow:%?0?% %?0?% %?15?% rgba(106,76,76,.16)}.relative[data-v-26b767db]{position:relative}.absolute[data-v-26b767db]{position:absolute;top:%?60?%;left:%?50?%;color:#195092;font-size:%?40?%;font-weight:500}.typeName[data-v-26b767db]{font-size:%?40?%;font-weight:700;letter-spacing:%?10?%}.name-detail[data-v-26b767db]{font-size:%?28?%;margin-top:%?20?%}.descript[data-v-26b767db]{font-size:%?28?%;line-height:%?60?%;color:#484848}.more[data-v-26b767db]{width:%?152?%;height:%?56?%;line-height:%?56?%;font-size:%?24?%;text-align:center;letter-spacing:%?1?%;background:#fff;box-shadow:0 %?2?% %?10?% 0 rgba(0,0,0,.25);border-radius:%?8?%;margin-top:%?32?%}.gt[data-v-26b767db]{font-size:%?22?%;padding-left:%?10?%}",""]),e.exports=t},"7cf6":function(e,t,n){"use strict";var i=n("ee27");n("c975"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("e143")),a={downBtn:function(){setTimeout((function(){var e=window.navigator.userAgent.toLowerCase();-1!=e.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=e.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=e.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=e.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(e){console.log("登陆失效验证："),console.log(JSON.stringify(e));var t=e.code,n=e.msg||e.error;if(100005001==t||100005002==t){uni.clearStorage(),n="token不能为空"==n?"未登录":n.replace(/token/g,"登录"),uni.showToast({icon:"none",title:n,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==t?(console.log(t),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:n,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:n,duration:1500})},integralSave:function(e){var t=e.url,n=e.data,i=e.token,o=e.cb;i&&uni.request({url:t,method:"POST",header:{token:i},data:n,success:function(e){o&&o()}})},showModal:function(e,t){var n=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(i){i.confirm?uni.navigateTo({url:"../login/login"}):i.cancel&&n.visitorLogin({url:e,url2:t})}})},visitorLogin:function(e){var t=e.url,n=e.url2,i=this,o=plus.device.uuid;console.log(o),uni.request({url:t,data:{openId:o,unionid:o},success:function(e){console.log("获取用户信息"),console.log(JSON.stringify(e)),3==e.data.data.code?i.register(n,o):i.saveUserInfo(e.data.data)}})},register:function(e,t){var n=this;uni.request({url:e,method:"POST",data:{openid:t,unionid:t},success:function(e){console.log("注册"),console.log(JSON.stringify(e)),n.saveUserInfo(e.data.data)}})},saveUserInfo:function(e){uni.setStorage({key:"user_Info",data:{username:e.user.username,headSculpture:e.user.headSculpture,remarks:e.user.remarks,gender:e.user.gender,birthday:e.user.birthday,email:e.user.email,mobile:e.user.mobile}}),uni.setStorage({key:"user_Id",data:e.user.id}),uni.setStorage({key:"token",data:e.token}),uni.setStorage({key:"postureTestNumber",data:e.user.postureTestNumber})},statisticalClicks:function(e){var t=o.default.prototype;uni.request({url:t.$webUrl+t.$recordClicks,method:"POST",data:e,success:function(e){console.log("统计点击量 ："),console.log(e)},fail:function(e){console.log(e)}})},sharingApplet:function(e){console.log(JSON.stringify(e));var t=o.default.prototype,n=this,i=t.$userSharingRecord;void 0!=e.courseflag&&2==e.courseflag&&(i=t.$courseShareLock),uni.request({url:t.$webUrl+i,header:{token:e.token},data:{href:e.href,shareChannel:e.subMsg,shareContent:e.summary,shareImg:e.imageUrl,shareTitle:e.title,shareType:e.shareType,userId:e.userId,markId:e.id,module:e.module},method:"POST",success:function(i){console.log("分享记录"+JSON.stringify(i)),console.log(t.$webUrl),console.log(t.$userintegralrecord),n.integralSave({url:t.$webUrl+t.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:e.userId},token:e.token}),n.shareFun(e)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(e){console.log("我进来了"),console.log(JSON.stringify(e)),uni.share({provider:"weixin",type:e.shareType,imageUrl:e.imageUrl,title:e.title,miniProgram:{id:"gh_bb081e4b31c9",path:e.href,type:0,webUrl:e.webHref},success:function(e){console.log(JSON.stringify(e))}})},getMembers:function(e,t,n){var i=this;uni.request({url:e,header:{"content-type":"application/x-www-form-urlencoded",token:t},data:{userId:n},method:"GET",success:function(e){if(0==e.data.code){var t=e.data.data;console.log(t),uni.setStorage({key:"memberInfo",data:t})}else i.notLogin(e.data)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};t.default=a},8229:function(e,t,n){"use strict";n.r(t);var i=n("6baa"),o=n("08a8");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("1d88");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"26b767db",null,!1,i["a"],r);t["default"]=u.exports},fabd:function(e,t,n){"use strict";var i=n("ee27");n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("7cf6")),a=i(n("1dca")),r={components:{buryingpoint:a.default},data:function(){return{list:[]}},onShow:function(){var e=this;setTimeout((function(){e.$refs.buryingpoint.Time()}),10)},onHide:function(){this.$refs.buryingpoint.buryingpoint("课程中心")},onLoad:function(){this.getCourseTypeInfo()},methods:{getCourseTypeInfo:function(){var e=this,t="http://public.qilinsports.com/picture/courseType/";uni.request({url:this.$webUrl+this.$getCourseTypeInfo,method:"GET",data:{primaryType:"courselevelclass"},success:function(n){if(console.log(n),n=n.data,0==n.code){var i=n.data;for(var o in i)if(i[o].smallTitle="","tizicourse"==i[o].dictValue)i[o].imageSrc=t+"tizi.png";else if("yingyangcourse"==i[o].dictValue)i[o].imageSrc=t+"yingyang.png";else if("gongnengcourse"==i[o].dictValue)i[o].imageSrc=t+"gongneng.png";else if("tinengcourse"==i[o].dictValue){i[o].imageSrc=t+"tineng.png";var a=i[o].dictName.indexOf("(");i[o].smallTitle=i[o].dictName.substring(a),i[o].dictName=i[o].dictName.substring(0,a)}e.list=i}},fail:function(){},complete:function(){}})},handleToCourseList:function(e,t){var n="体姿"==t?1:"营养"==t?2:"功能"==t?3:4,i={platform:1,type:4,sonType:n};o.default.statisticalClicks(i),uni.navigateTo({url:"course-list?dictValue="+e+"&dictName="+t})}}};t.default=r}}]);