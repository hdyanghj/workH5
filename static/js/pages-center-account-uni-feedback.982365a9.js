(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-account-uni-feedback"],{"162f":function(e,t,i){"use strict";i.r(t);var n=i("fd4e"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"190f":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var e=this,t=getCurrentPages();this.route=t[t.length-1].route,this.Timer=setInterval((function(){e.DataTimeNum++}),1e3)},buryingpoint:function(e){var t,i=this,n=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(e){i.systemType=e}}),t="ios"==this.systemType.platform?2:1;var a={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:n,platform:t,route:this.route,name:e,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:a,success:function(e){0==e.data.code&&(clearInterval(i.Timer),i.DataTimeNum=0)},fail:function(e){console.log(JSON.stringify(e))}})}}};t.default=n},"1dca":function(e,t,i){"use strict";i.r(t);var n=i("50ee"),a=i("7003");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0f5ec893",null,!1,n["a"],s);t["default"]=l.exports},"50ee":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view")},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},7003:function(e,t,i){"use strict";i.r(t);var n=i("190f"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"7cf6":function(e,t,i){"use strict";var n=i("ee27");i("c975"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("e143")),o={downBtn:function(){setTimeout((function(){var e=window.navigator.userAgent.toLowerCase();-1!=e.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=e.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=e.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=e.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(e){console.log("登陆失效验证："),console.log(JSON.stringify(e));var t=e.code,i=e.msg||e.error;if(100005001==t||100005002==t){uni.clearStorage(),i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==t?(console.log(t),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:i,duration:1500})},integralSave:function(e){var t=e.url,i=e.data,n=e.token,a=e.cb;n&&uni.request({url:t,method:"POST",header:{token:n},data:i,success:function(e){a&&a()}})},showModal:function(e,t){var i=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(n){n.confirm?uni.navigateTo({url:"../login/login"}):n.cancel&&i.visitorLogin({url:e,url2:t})}})},visitorLogin:function(e){var t=e.url,i=e.url2,n=this,a=plus.device.uuid;console.log(a),uni.request({url:t,data:{openId:a,unionid:a},success:function(e){console.log("获取用户信息"),console.log(JSON.stringify(e)),3==e.data.data.code?n.register(i,a):n.saveUserInfo(e.data.data)}})},register:function(e,t){var i=this;uni.request({url:e,method:"POST",data:{openid:t,unionid:t},success:function(e){console.log("注册"),console.log(JSON.stringify(e)),i.saveUserInfo(e.data.data)}})},saveUserInfo:function(e){uni.setStorage({key:"user_Info",data:{username:e.user.username,headSculpture:e.user.headSculpture,remarks:e.user.remarks,gender:e.user.gender,birthday:e.user.birthday,email:e.user.email,mobile:e.user.mobile}}),uni.setStorage({key:"user_Id",data:e.user.id}),uni.setStorage({key:"token",data:e.token}),uni.setStorage({key:"postureTestNumber",data:e.user.postureTestNumber})},statisticalClicks:function(e){var t=a.default.prototype;uni.request({url:t.$webUrl+t.$recordClicks,method:"POST",data:e,success:function(e){console.log("统计点击量 ："),console.log(e)},fail:function(e){console.log(e)}})},sharingApplet:function(e){console.log(JSON.stringify(e));var t=a.default.prototype,i=this,n=t.$userSharingRecord;void 0!=e.courseflag&&2==e.courseflag&&(n=t.$courseShareLock),uni.request({url:t.$webUrl+n,header:{token:e.token},data:{href:e.href,shareChannel:e.subMsg,shareContent:e.summary,shareImg:e.imageUrl,shareTitle:e.title,shareType:e.shareType,userId:e.userId,markId:e.id,module:e.module},method:"POST",success:function(n){console.log("分享记录"+JSON.stringify(n)),console.log(t.$webUrl),console.log(t.$userintegralrecord),i.integralSave({url:t.$webUrl+t.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:e.userId},token:e.token}),i.shareFun(e)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(e){console.log("我进来了"),console.log(JSON.stringify(e)),uni.share({provider:"weixin",type:e.shareType,imageUrl:e.imageUrl,title:e.title,miniProgram:{id:"gh_bb081e4b31c9",path:e.href,type:0,webUrl:e.webHref},success:function(e){console.log(JSON.stringify(e))}})},getMembers:function(e,t,i){var n=this;uni.request({url:e,header:{"content-type":"application/x-www-form-urlencoded",token:t},data:{userId:i},method:"GET",success:function(e){if(0==e.data.code){var t=e.data.data;console.log(t),uni.setStorage({key:"memberInfo",data:t})}else n.notLogin(e.data)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};t.default=o},8954:function(e,t,i){"use strict";i.r(t);var n=i("eb36"),a=i("162f");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("f75a");var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"8d39eb50",null,!1,n["a"],s);t["default"]=l.exports},"8cad":function(e,t,i){var n=i("9f8e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("a0f4bc14",n,!0,{sourceMap:!1,shadowMode:!1})},9362:function(e,t,i){"use strict";var n=i("eca9"),a=i.n(n);a.a},"975f":function(e,t,i){"use strict";i.r(t);var n=i("fbe7"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"9f8e":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf) format("truetype")}uni-page-body[data-v-8d39eb50]{background-color:#efeff4}uni-view[data-v-8d39eb50]{font-size:%?28?%}.feedback-desc[data-v-8d39eb50]{font-size:%?24?%;line-height:1.5;padding:%?0?% %?20?% %?20?% %?20?%;color:#8f8f94}.input-view[data-v-8d39eb50]{font-size:%?28?%}.close-view[data-v-8d39eb50]{text-align:center;line-height:14px;height:16px;width:16px;border-radius:50%;background:#ff5053;color:#fff;position:absolute;top:-6px;right:-4px;font-size:12px}\n    /* 上传 */.uni-uploader[data-v-8d39eb50]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-uploader-head[data-v-8d39eb50]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-uploader-info[data-v-8d39eb50]{color:#b2b2b2}.uni-uploader-body[data-v-8d39eb50]{margin-top:%?16?%}.uni-uploader__files[data-v-8d39eb50]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-uploader__file[data-v-8d39eb50]{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img[data-v-8d39eb50]{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box[data-v-8d39eb50]{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box[data-v-8d39eb50]:before,\n    .uni-uploader__input-box[data-v-8d39eb50]:after{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box[data-v-8d39eb50]:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box[data-v-8d39eb50]:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box[data-v-8d39eb50]:active{border-color:#999}.uni-uploader__input-box[data-v-8d39eb50]:active:before,\n    .uni-uploader__input-box[data-v-8d39eb50]:active:after{background-color:#999}.uni-uploader__input[data-v-8d39eb50]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}\n    /*问题反馈*/.feedback-title[data-v-8d39eb50]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-title[data-v-8d39eb50]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0}.feedback-body[data-v-8d39eb50]{background:#fff}.feedback-textare[data-v-8d39eb50]{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input[data-v-8d39eb50]{font-size:%?34?%;height:%?50?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?50?%}.feedback-uploader[data-v-8d39eb50]{padding:%?22?% %?20?%}.feedback-submit[data-v-8d39eb50]{background:#007aff;color:#fff;margin:%?20?%}.fk-history[data-v-8d39eb50]{font-size:%?36?%;padding:%?20?%}.history-list[data-v-8d39eb50]{background-color:#fff;padding:%?30?% %?0?%}.history-item[data-v-8d39eb50]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#195092;padding:%?24?% %?64?%;font-size:%?28?%;background:#fff;box-shadow:%?8?% %?8?% %?16?% %?0?% rgba(0,23,51,.25);border-radius:%?8?%;border:%?1?% solid #195092;margin:%?0?% %?30?% %?24?%;position:relative}.question-name[data-v-8d39eb50]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.question-title[data-v-8d39eb50]{display:inline-block;width:%?320?%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all}.red-box[data-v-8d39eb50]{display:inline-block;margin-right:%?10?%;width:%?12?%;height:%?12?%;background-color:#b91614;border-radius:50%}.history-item-active[data-v-8d39eb50]{background:#fff;border:%?1?% solid #919191;color:#919191}.delete-btn[data-v-8d39eb50]{position:absolute;right:%?-10?%;top:%?-10?%}.delete-btn .iconfont[data-v-8d39eb50]{color:#b91614}body.?%PAGE?%[data-v-8d39eb50]{background-color:#efeff4}',""]),e.exports=t},a502:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.loadingType&&e.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}}),i("v-uni-view",{style:{background:e.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:e.color}},[e._v(e._s(0===e.loadingType?e.contentText.contentdown:1===e.loadingType?e.contentText.contentrefresh:2===e.loadingType?e.contentText.contentnomore:e.contentText.contenterror))])],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},ab14:function(e,t,i){"use strict";i.r(t);var n=i("a502"),a=i("975f");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("9362");var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0f050a07",null,!1,n["a"],s);t["default"]=l.exports},de72:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".load-more[data-v-0f050a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-0f050a07]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-0f050a07]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-0f050a07]{position:absolute}.load1[data-v-0f050a07],\n.load2[data-v-0f050a07],\n.load3[data-v-0f050a07]{height:24px;width:24px}.load2[data-v-0f050a07]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0f050a07]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-0f050a07]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0f050a07 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0f050a07{0%{opacity:1}100%{opacity:.2}}",""]),e.exports=t},eb36:function(e,t,i){"use strict";var n={buryingpoint:i("1dca").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",{staticStyle:{"font-size":"36upx",color:"#000"}},[e._v("问题和意见")])],1),i("v-uni-view",{staticClass:"feedback-desc"},[e._v("我们一直致力于改进bodyreader的用户体验，您可以将您的问题反馈给我们，您的建议与反馈将是我们进步的巨大动力。")]),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-textarea",{staticClass:"feedback-textare",staticStyle:{"font-size":"32upx"},attrs:{placeholder:"请详细描述你的问题和意见..."},model:{value:e.sendDate.content,callback:function(t){e.$set(e.sendDate,"content",t)},expression:"sendDate.content"}})],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("图片(选填,提供问题截图,总大小10M以下)")])],1),i("v-uni-view",{staticClass:"feedback-body feedback-uploader"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title",staticStyle:{"font-size":"24upx",color:"#6f6868"}},[e._v("点击预览图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/8")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,(function(t,n){return[i("v-uni-view",{key:n+"_0",staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{mode:"aspectFill",src:t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage(n)}}}),i("v-uni-view",{staticClass:"close-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close(n)}}},[e._v("x")])],1)]})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length<8,expression:"imageList.length < 8"}],staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImg.apply(void 0,arguments)}}})],1)],2)],1)],1)],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",{staticStyle:{"font-size":"32upx",color:"#000"}},[e._v("手机号 / 微信号")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-input",{staticClass:"feedback-input",staticStyle:{"font-size":"32upx",color:"#6f6868"},attrs:{placeholder:"(选填,方便我们联系你 )"},model:{value:e.sendDate.contact,callback:function(t){e.$set(e.sendDate,"contact",t)},expression:"sendDate.contact"}})],1),i("v-uni-view",{staticClass:"history-record"},[i("v-uni-view",{staticClass:"fk-history"},[e._v("反馈历史")]),i("v-uni-view",{staticClass:"history-list"},[e._l(e.hisotryList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"history-item",class:1==t.readStatus?"history-item-active":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleToFeedbackDetail(t.id,t.readStatus,n)},longpress:function(t){arguments[0]=t=e.$handleEvent(t),e.displayDeleteBtn(n)}}},[i("v-uni-view",{staticClass:"question-name"},[0==t.readStatus?i("v-uni-text",{staticClass:"red-box"}):e._e(),i("v-uni-text",{staticClass:"question-title"},[e._v(e._s(t.opinion))])],1),i("v-uni-view",{staticClass:"question-time"},[e._v(e._s(t.createDate))]),e.isDelActive==n?i("v-uni-view",{staticClass:"delete-btn",attrs:{id:"id"+n},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.deleteFeedback(t.id,n)}}},[i("v-uni-text",{staticClass:"iconfont"},[e._v("")])],1):e._e()],1)})),i("uni-load-more",{attrs:{loadingType:e.loadingType,contentText:e.contentText}})],2)],1),i("buryingpoint",{ref:"buryingpoint"})],1)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},eca9:function(e,t,i){var n=i("de72");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("753f3363",n,!0,{sourceMap:!1,shadowMode:!1})},f75a:function(e,t,i){"use strict";var n=i("8cad"),a=i.n(n);a.a},fbe7:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};t.default=n},fd4e:function(e,t,i){"use strict";var n=i("ee27");i("99af"),i("a434"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("7cf6")),o=n(i("ab14")),s=n(i("1dca")),r={components:{buryingpoint:s.default,uniLoadMore:o.default},data:function(){return{stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""},imgUrl:[],page:1,limit:10,loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"我是有底线的"},hisotryList:[],isDelActive:null}},onNavigationBarButtonTap:function(e){"提交"==e.text?this.send():uni.navigateBack({delta:1})},onShow:function(){var e=this;setTimeout((function(){e.$refs.buryingpoint.Time()}),10)},onLoad:function(){this.getHistoryList()},onHide:function(){this.$refs.buryingpoint.buryingpoint("功能反馈")},onUnload:function(){this.$refs.buryingpoint.buryingpoint("功能反馈")},mounted:function(){this.upload()},onReachBottom:function(){var e=this;null!=this.timer&&clearTimeout(this.timer),0===this.loadingType&&(this.loadingType=1,this.timer=setTimeout((function(){e.getHistoryList()}),1e3))},methods:{deleteFeedback:function(e,t){var i=this;uni.showModal({title:"确认删除",content:"删除后将无法恢复此数据",cancelText:"删除",cancelColor:"#6BD8ED",confirmText:"取消",success:function(n){n.confirm||n.cancel&&uni.request({url:i.$webUrl+i.$delFeedBack,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:uni.getStorageSync("token")},data:{id:e},success:function(e){0==e.data.code?(i.hisotryList.splice(t,1),i.isDelActive=null,uni.showToast({icon:"none",duration:3e3,title:"删除成功"})):a.default.notLogin(e.data)}})}})},displayDeleteBtn:function(e){this.isDelActive=e},getHistoryList:function(){var e=this;uni.request({url:this.$webUrl+this.$getFeedBackRecord,method:"GET",header:{token:uni.getStorageSync("token")},data:{page:this.page,limit:this.limit,userId:uni.getStorageSync("user_Id")},success:function(t){if(t=t.data,console.log(t),0==t.code&&t.data.list){var i=t.data.total;for(var n in e.page++,e.hisotryList=e.hisotryList.concat(t.data.list),e.hisotryList)e.hisotryList[n].createDate=e.hisotryList[n].createDate.substring(0,10);e.loadingType=0,i<e.limit&&(e.loadingType=2)}}})},handleToFeedbackDetail:function(e,t,i){0==t&&this.$set(this.hisotryList[i],"readStatus",1),uni.navigateTo({url:"/pages/center/account/feedback-detail?id="+e})},upload:function(){this.token=uni.getStorageSync("token"),""!=this.userId?uni.getStorageSync("user_Info")&&(this.mobile=uni.getStorageSync("user_Info").mobile):uni.reLaunch({url:"../login/phonelogin"})},close:function(e){this.imageList.splice(e,1)},chooseImg:function(){var e=this;uni.chooseImage({sizeType:["compressed"],sourceType:["album","camera"],count:8-this.imageList.length,success:function(t){e.imageList=e.imageList.concat(t.tempFilePaths);for(var i=e.imgUrl.length;i<e.imageList.length;i++)uni.uploadFile({url:e.$webUrl+e.$upAvatar,filePath:e.imageList[i],fileType:"image",name:"file",formData:{type:3},success:function(t){var i=JSON.parse(t.data);e.imgUrl.push(i.filename)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}})},chooseStar:function(e){this.sendDate.score=e},previewImage:function(e){var t=this.imageList;uni.previewImage({current:this.imageList[e],urls:t})},send:function(){""!=this.sendDate.content.replace(/\s+/g,"")?(uni.showLoading({title:"上传中"}),uni.request({url:this.$webUrl+this.$FeedBack,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:uni.getStorageSync("token")},data:{opinion:this.sendDate.content,imgs:this.imgUrl,contactWay:this.sendDate.contact,itemType:0,userId:uni.getStorageSync("user_Id")},success:function(e){0==e.data.code?(uni.hideLoading(),uni.showToast({title:"感谢您的反馈！",icon:"none",duration:2e3}),setTimeout((function(){uni.navigateBack({delta:1})}),2e3)):a.default.notLogin(e.data)}})):uni.showToast({title:"请描述问题和意见",icon:"none",duration:2e3})}}};t.default=r}}]);