(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-test-bone-age"],{"0caf":function(e,t,n){var i=n("eb40");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("dc7dea30",i,!0,{sourceMap:!1,shadowMode:!1})},1424:function(e,t,n){"use strict";var i=n("f391"),r=n.n(i);r.a},"190f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var e=this,t=getCurrentPages();this.route=t[t.length-1].route,this.Timer=setInterval((function(){e.DataTimeNum++}),1e3)},buryingpoint:function(e){var t,n=this,i=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(e){n.systemType=e}}),t="ios"==this.systemType.platform?2:1;var r={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:i,platform:t,route:this.route,name:e,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:r,success:function(e){0==e.data.code&&(clearInterval(n.Timer),n.DataTimeNum=0)},fail:function(e){console.log(JSON.stringify(e))}})}}};t.default=i},"1aac":function(e,t,n){"use strict";n.r(t);var i=n("7acd"),r=n("ef46");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("4702");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"08565d97",null,!1,i["a"],a);t["default"]=u.exports},"1dca":function(e,t,n){"use strict";n.r(t);var i=n("50ee"),r=n("7003");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"0f5ec893",null,!1,i["a"],a);t["default"]=u.exports},"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},2161:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-mask[data-v-2df39949]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-2df39949]{position:fixed;bottom:0;z-index:999;background-color:#fff;box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-bottom[data-v-2df39949]{left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.share-icon[data-v-2df39949]{width:%?80?%;height:%?80?%}.share-font[data-v-2df39949]{font-size:%?28?%;margin-top:%?10?%}.share[data-v-2df39949]{margin:%?40?% %?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}",""]),e.exports=t},"2d02":function(e,t,n){"use strict";var i=n("ee27");n("c975"),n("a9e3"),n("d3b7"),n("e25e"),n("ac1f"),n("25f0"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("c964")),o=i(n("7cf6")),a=i(n("4c8b")),s=i(n("ddda")),u=i(n("1dca")),c={components:{buryingpoint:u.default,share:s.default},data:function(){return{vipUrl:"normal",isClick:!0,filter:"filter",people:"people",newShow:!0,selectShow:!1,person_Id:"",sex:["请选择","男","女"],bodyMsg:{id:"",memberName:"",age:"",memberSex:"",height:"",weight:"",birthday:""},token:"",imgUrl:"",content:"",modelId:"",channelId:"",description:"",title:"骨龄测评",wrapclass:"",showBtn:!0,type:"",userId:"",firstLevelClass:"骨龄检测",orderId:"",orderNum:"",fee:"",source:"",msg:"请提交你的手部扫描以及您想提问的问题",vip:"",memberDate:[],submitBtn:"",showPopupBottom:!1,shareObj:{}}},onNavigationBarButtonTap:function(e){0==e.index?uni.navigateBack({delta:1}):this.shareBtn()},onLoad:function(e){var t=this;this.vip=uni.getStorageSync("vip"),this.source=e.source,this.detail();var n={type:6,sonType:2};uni.request({url:this.$webUrl+this.$pricemanagePage,data:n,success:function(e){var n=e.data.data.list[0].chargeStatus;2==n?t.fee=e.data.data.list[0].preferentialPrice:1==n?t.fee=e.data.data.list[0].price:3!=n&&4!=n||(t.fee=0)}})},onUnload:function(){this.$refs.buryingpoint.buryingpoint("骨龄测评")},onHide:function(){this.$refs.buryingpoint.buryingpoint("骨龄测评")},onShow:function(){var e=this;setTimeout((function(){e.$refs.buryingpoint.Time()}),10),uni.getStorageSync("user_Id")&&uni.getStorageSync("token")&&uni.request({url:this.$webUrl+this.$messageBadge,method:"GET",data:{userId:uni.getStorageSync("user_Id")},success:function(t){if(t=t.data,0==t.code){uni.setStorageSync("vip",t.data.vip);var n=t.data.vip;e.vipUrl=1==n?"super":2==n?"org":"normal"}},fail:function(){},complete:function(){}}),this.token=uni.getStorageSync("token"),this.userId=uni.getStorageSync("user_Id"),this.person_Id=uni.getStorageSync("person_Id"),this.imgUrl="",this.detail()},onBackPress:function(){if(1==this.showPopupBottom)return this.showPopupBottom=!1,!0},methods:{goMember:function(e){uni.getStorageSync("token")&&uni.navigateTo({url:"/pages/center/integral/member-ship?type="+e})},shareBtn:function(){this.hidePopup(),this.shareObj["href"]=this.$h5Url+"/pages/body-test/bone-age",this.shareObj["title"]="骨龄检测",this.shareObj["summary"]="通过在线测试，测试个人骨龄情况。",this.shareObj["imageUrl"]="/static/img/guling-test.png",this.shareObj["module"]=0,this.showPopupBottom=!0},hidePopup:function(){this.showPopupBottom=!1},detail:function(){""!=this.token&&(this.person_Id?(this.memberUrl=this.$getSpecifiedMember,this.memberDate={id:this.person_Id}):(this.memberUrl=this.$UserDefault,this.memberDate={userId:this.userId}),this.huoquTcr())},handleTohistoryRecord:function(){this.userId?uni.navigateTo({url:"/pages/center/ac-quiz/growth-list?active=glcp"}):(uni.showToast({icon:"none",duration:3e3,title:"未登录"}),uni.navigateTo({url:"/pages/login/login"}))},huoquTcr:function(){var e=this;uni.request({url:this.$webUrl+this.memberUrl,header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},data:this.memberDate,method:"GET",success:function(t){if(0==t.data.code){var n=t.data.data;if(""==n||null==n)return e.newShow=!0,void(e.selectShow=!1);var i=e.howold(n.birthday),r=Number(i.substring(0,i.indexOf("岁")));""!=n&&(e.bodyMsg.id=n.id,e.bodyMsg.memberName=n.memberName,e.bodyMsg.age=r,e.bodyMsg.memberSex=n.memberSex,e.bodyMsg.height=n.height,e.bodyMsg.weight=n.weight,e.bodyMsg.birthday=n.birthday,e.newShow=!1,e.selectShow=!0)}else o.default.notLogin(t.data)},fail:function(e){uni.showToast({title:"网络连接不稳定，请检查网络",duration:3e3,icon:"none"})}})},howold:function(e){if(null!==e&&void 0!==e&&""!==e){var t=new Date,n=new Date(e),i=t.getTime()-n.getTime(),r=parseInt(i/864e5);if(r<30)return r+"天";if(r>=30&&r<=365){var o=parseInt(r%365/30)+"月"+parseInt(r%365%30)+"天";if(0==parseInt(r%365%30)){o=parseInt(r%365/30)+"月";return o}return o}if(r>365&&parseInt(r%365/30)<13){o=parseInt(r/365)+"岁"+parseInt(r%365/30)+"月";if(0==parseInt(r%365/30)){var a=e.split("-");o="";o=a[2]<=t.getDate()?parseInt(r/365)+"岁":parseInt(r/365-1)+"岁"}return o}}},selectBut:function(e){"filter"==e&&uni.navigateTo({url:"../center/add-person?source=0"}),"people"==e&&(uni.setStorage({key:"jump_Key",data:"body"}),uni.navigateTo({url:"../center/add-list?source=1"}))},chooseFile:function(){var e=this;uni.chooseImage({count:4,sizeType:["original"],sourceType:["camera"],success:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(n){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=n.tempFilePaths[0],r="",r=i,e.showBtn=!1,e.submitBtn="submit-btn-active",e.uploadFile(r);case 6:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()})},compressImageHandler:function(e){return(0,r.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=uni.getSystemInfoSync(),t.next=3,(0,a.default)(e,n.platform);case 3:return i=t.sent,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))()},uploadFile:function(e){var t=this;uni.showLoading({title:"正在上传。。。"}),uni.uploadFile({url:t.$webUrl+t.$upAvatar,filePath:e,fileType:"image",name:"file",formData:{type:11},success:function(e){if(uni.hideLoading(),200==e.statusCode){var n=JSON.parse(e.data.toString()).filename;n&&(t.imgUrl=n,t.type="img")}else uni.showToast({icon:"none",title:"上传失败！",duration:2e3})},fail:function(e){}})},deleteImg:function(){this.showBtn=!0,this.imgUrl="",this.imgUrl="",this.type="",this.submitBtn=""},fnSubmit:function(){var e=this,t={userId:this.userId,memberId:this.bodyMsg.id,name:this.bodyMsg.memberName,sex:this.bodyMsg.memberSex,birthday:this.bodyMsg.birthday,height:this.bodyMsg.height,picture:this.imgUrl,description:this.content,totalAmount:this.fee,payType:1,orderSource:1,orderType:8};return this.bodyMsg.id?this.imgUrl?(this.isClick=!1,setTimeout((function(){e.isClick=!0}),2e3),void uni.request({url:this.$webUrl+this.$boneage,method:"POST",header:{token:this.token,"content-type":"application/x-www-form-urlencoded"},data:t,success:function(t){if(0==t.data.code){var n=t.data.data.orderId,i=t.data.data.orderNum;t.data.data.itemId;if(e.orderId=n,e.orderNum=i,0==e.fee)return uni.switchTab({url:"/pages/center/center"});uni.navigateTo({url:"/pages/communication/pay?fee="+e.fee+"&orderId="+n+"&orderNum="+i+"&body=骨龄测评&isReport=true"})}else o.default.notLogin(t.data)}})):uni.showToast({icon:"none",title:"请选择图片"}):uni.showToast({icon:"none",title:"请选择测试人"})}}};t.default=c},4702:function(e,t,n){"use strict";var i=n("0caf"),r=n.n(i);r.a},"4c8b":function(e,t,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("c964"));function o(e,t){return a.apply(this,arguments)}function a(){return a=(0,r.default)(regeneratorRuntime.mark((function e(t,n){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:if(i=e.sent,r=i.orientation,console.log(r),0,60,"ios"!==n){e.next=12;break}0,25,e.next=25;break;case 12:e.t0=r,e.next="up"===e.t0?15:"down"===e.t0?17:"right"===e.t0?19:"left"===e.t0?21:23;break;case 15:return 0,e.abrupt("break",25);case 17:return 180,e.abrupt("break",25);case 19:return 90,e.abrupt("break",25);case 21:return 270,e.abrupt("break",25);case 23:return 0,e.abrupt("break",25);case 25:return e.abrupt("return",new Promise((function(e,t){})));case 26:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function s(e){return new Promise((function(e,t){}))}var u=o;t.default=u},"50ee":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view")},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},7003:function(e,t,n){"use strict";n.r(t);var i=n("190f"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"7acd":function(e,t,n){"use strict";var i={share:n("ddda").default,buryingpoint:n("1dca").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"wrap guling"},[n("v-uni-view",{staticClass:"first-title"},[e._v(e._s(e.title))]),n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"msg"},[e._v(e._s(e.msg))])],1),e.fee?n("v-uni-view",{staticClass:"cur-price"},[e._v(e._s("¥"+e.fee+"/次"))]):n("v-uni-text",{staticClass:"cur-price"},[e._v("免费")]),n("v-uni-view",{staticClass:"example-btn iconfont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTohistoryRecord.apply(void 0,arguments)}}},[e._v("查看报告")]),n("v-uni-view",{staticClass:"physicaltester"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.newShow,expression:"newShow"}],staticClass:"phyNew",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectBut(e.filter)}}},[n("v-uni-text",{staticClass:"newIcon"},[e._v("")]),e._v("新增测试人")],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.selectShow,expression:"selectShow"}],staticClass:"phySelect",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectBut(e.people)}}},[n("v-uni-view",{staticClass:"selectText"},[e._v(e._s(e.bodyMsg.memberName)),n("v-uni-view",{staticClass:"selectyishi"},[e._v("点击修改或更换测试人")])],1),n("v-uni-view",{staticClass:"selectMsg"},[n("v-uni-text",[e._v("性别："+e._s(e.sex[e.bodyMsg.memberSex]))]),n("v-uni-text",[e._v("年龄："+e._s(e.bodyMsg.age)+"岁")]),n("v-uni-text",[e._v("身高："+e._s(e.bodyMsg.height)+"CM")]),n("v-uni-text",[e._v("体重："+e._s(e.bodyMsg.weight)+"KG")])],1),n("v-uni-view",{staticClass:"switchIcin"},[e._v("")])],1)],1),n("v-uni-textarea",{staticClass:"textarea-style",attrs:{maxlength:"100",placeholder:"请描述您的问题，以便于我们更加全面地了解您的情况，这样更加有利于我们的工作人员准确的回答您的问题。","placeholder-class":"placeholder","placeholder-style":"font-size: 28upx;line-height: 40upx;color:#999999"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),n("v-uni-view",{staticClass:"upload-title"},[n("v-uni-text",{staticClass:"iconfont"},[e._v("")]),e._v("上传图片")],1),n("v-uni-view",{staticClass:"upload-text-desc"},[e._v("请上传清晰标准的图片，以便于更加准确地识别。此检测意在帮您发现潜在风险，不作为就医凭据")]),e.showBtn?n("v-uni-view",{staticClass:"upload-img"},[n("v-uni-view",{staticClass:"find-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseFile.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont"},[e._v("")]),n("v-uni-view",[e._v("相片")])],1),n("v-uni-view",{staticClass:"img-maxnum"},[e._v("最多上传1张图片")])],1):e._e(),e.imgUrl?n("v-uni-view",{staticClass:"img-item"},[n("v-uni-text",{staticClass:"iconfont",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.deleteImg()}}},[e._v("")]),n("v-uni-image",{attrs:{src:e.imgUrl,mode:"aspectFill"}})],1):e._e(),n("v-uni-view",{staticClass:"submit-btn",class:e.submitBtn,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isClick&&e.fnSubmit()}}},[e._v("提交")]),n("share",{attrs:{integralType:"4",show:e.showPopupBottom,obj:e.shareObj},on:{hidePopup:function(t){arguments[0]=t=e.$handleEvent(t),e.hidePopup.apply(void 0,arguments)}}}),n("buryingpoint",{ref:"buryingpoint"})],1)},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"7cf6":function(e,t,n){"use strict";var i=n("ee27");n("c975"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("e143")),o={downBtn:function(){setTimeout((function(){var e=window.navigator.userAgent.toLowerCase();-1!=e.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=e.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=e.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=e.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(e){console.log("登陆失效验证："),console.log(JSON.stringify(e));var t=e.code,n=e.msg||e.error;if(100005001==t||100005002==t){uni.clearStorage(),n="token不能为空"==n?"未登录":n.replace(/token/g,"登录"),uni.showToast({icon:"none",title:n,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==t?(console.log(t),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:n,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:n,duration:1500})},integralSave:function(e){var t=e.url,n=e.data,i=e.token,r=e.cb;i&&uni.request({url:t,method:"POST",header:{token:i},data:n,success:function(e){r&&r()}})},showModal:function(e,t){var n=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(i){i.confirm?uni.navigateTo({url:"../login/login"}):i.cancel&&n.visitorLogin({url:e,url2:t})}})},visitorLogin:function(e){var t=e.url,n=e.url2,i=this,r=plus.device.uuid;console.log(r),uni.request({url:t,data:{openId:r,unionid:r},success:function(e){console.log("获取用户信息"),console.log(JSON.stringify(e)),3==e.data.data.code?i.register(n,r):i.saveUserInfo(e.data.data)}})},register:function(e,t){var n=this;uni.request({url:e,method:"POST",data:{openid:t,unionid:t},success:function(e){console.log("注册"),console.log(JSON.stringify(e)),n.saveUserInfo(e.data.data)}})},saveUserInfo:function(e){uni.setStorage({key:"user_Info",data:{username:e.user.username,headSculpture:e.user.headSculpture,remarks:e.user.remarks,gender:e.user.gender,birthday:e.user.birthday,email:e.user.email,mobile:e.user.mobile}}),uni.setStorage({key:"user_Id",data:e.user.id}),uni.setStorage({key:"token",data:e.token}),uni.setStorage({key:"postureTestNumber",data:e.user.postureTestNumber})},statisticalClicks:function(e){var t=r.default.prototype;uni.request({url:t.$webUrl+t.$recordClicks,method:"POST",data:e,success:function(e){console.log("统计点击量 ："),console.log(e)},fail:function(e){console.log(e)}})},sharingApplet:function(e){console.log(JSON.stringify(e));var t=r.default.prototype,n=this,i=t.$userSharingRecord;void 0!=e.courseflag&&2==e.courseflag&&(i=t.$courseShareLock),uni.request({url:t.$webUrl+i,header:{token:e.token},data:{href:e.href,shareChannel:e.subMsg,shareContent:e.summary,shareImg:e.imageUrl,shareTitle:e.title,shareType:e.shareType,userId:e.userId,markId:e.id,module:e.module},method:"POST",success:function(i){console.log("分享记录"+JSON.stringify(i)),console.log(t.$webUrl),console.log(t.$userintegralrecord),n.integralSave({url:t.$webUrl+t.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:e.userId},token:e.token}),n.shareFun(e)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(e){console.log("我进来了"),console.log(JSON.stringify(e)),uni.share({provider:"weixin",type:e.shareType,imageUrl:e.imageUrl,title:e.title,miniProgram:{id:"gh_bb081e4b31c9",path:e.href,type:0,webUrl:e.webHref},success:function(e){console.log(JSON.stringify(e))}})},getMembers:function(e,t,n){var i=this;uni.request({url:e,header:{"content-type":"application/x-www-form-urlencoded",token:t},data:{userId:n},method:"GET",success:function(e){if(0==e.data.code){var t=e.data.data;console.log(t),uni.setStorage({key:"memberInfo",data:t})}else i.notLogin(e.data)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};t.default=o},"948a":function(e,t,n){e.exports=n.p+"static/img/guling.5135a9cf.png"},"96cf":function(e,t){!function(t){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"===typeof e,l=t.regeneratorRuntime;if(l)c&&(e.exports=l);else{l=t.regeneratorRuntime=c?e.exports:{},l.wrap=y;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m($([])));b&&b!==i&&r.call(b,a)&&(v=b);var w=T.prototype=k.prototype=Object.create(v);S.prototype=w.constructor=T,T.constructor=S,T[u]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===S||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,T):(e.__proto__=T,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(w),e},l.awrap=function(e){return{__await:e}},_(I.prototype),I.prototype[s]=function(){return this},l.AsyncIterator=I,l.async=function(e,t,n,i){var r=new I(y(e,t,n,i));return l.isGeneratorFunction(t)?r:r.next().then((function(e){return e.done?e.value:r.next()}))},_(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=$,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(i,r){return s.type="throw",s.arg=e,t.next=i,r&&(t.method="next",t.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if("throw"===i.type){var r=i.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:$(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function y(e,t,n,i){var r=t&&t.prototype instanceof k?t:k,o=Object.create(r.prototype),a=new N(i||[]);return o._invoke=C(e,n,a),o}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function S(){}function T(){}function _(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function I(e){function t(n,i,o,a){var s=x(e[n],e,i);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(c).then((function(e){u.value=e,o(u)}),(function(e){return t("throw",e,o,a)}))}a(s.arg)}var n;function i(e,i){function r(){return new Promise((function(n,r){t(e,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=i}function C(e,t,n){var i=d;return function(r,o){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return M()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var u=x(e,t,n);if("normal"===u.type){if(i=n.done?p:f,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=p,n.method="throw",n.arg=u.arg)}}}function O(e,t){var i=e.iterator[t.method];if(i===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method))return g;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=x(i,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,g;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function $(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function t(){while(++i<e.length)if(r.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b7af:function(e,t,n){"use strict";n.r(t);var i=n("ec77"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},c011:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-mask",style:{top:e.offsetTop+"px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.hide.apply(void 0,arguments)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-popup uni-popup-bottom"},e._l(e.shareChannel,(function(t,i){return n("v-uni-view",{key:i,staticClass:"share",on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.handleToShare(t.channel,t.subMsg)}}},[n("v-uni-view",[n("v-uni-image",{staticClass:"share-icon",attrs:{src:t.iconfont,mode:""}})],1),n("v-uni-view",{staticClass:"share-font"},[e._v(e._s(t.subMsg))])],1)})),1)],1)},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},c964:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n("d3b7"),n("e6cf");function i(e,t,n,i,r,o,a){try{var s=e[o](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){i(a,r,o,s,u,"next",e)}function u(e){i(a,r,o,s,u,"throw",e)}s(void 0)}))}}},ddda:function(e,t,n){"use strict";n.r(t);var i=n("c011"),r=n("b7af");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("1424");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"2df39949",null,!1,i["a"],a);t["default"]=u.exports},eb40:function(e,t,n){var i=n("24fb"),r=n("1de5"),o=n("948a");t=i(!1);var a=r(o);t.push([e.i,".upload-title[data-v-08565d97]{color:#001733;font-size:%?36?%;margin:%?48?% %?0?% %?16?% %?0?%}.upload-title .iconfont[data-v-08565d97]{margin-right:%?12?%}.upload-text-desc[data-v-08565d97]{font-size:%?24?%;margin-bottom:%?32?%;letter-spacing:%?2?%;color:#f0cf8d}.physicaltester[data-v-08565d97]{margin:%?40?% auto}.example-btn[data-v-08565d97]{top:%?40?%}.ft-btn[data-v-08565d97]{z-index:999;top:%?210?%}.cur-price[data-v-08565d97]{font-size:%?36?%;font-family:SourceHanSansCN-Medium;font-weight:500;color:#b91614}.submit-btn[data-v-08565d97]{width:%?660?%;height:%?80?%;margin:%?76?% auto %?0?%;background:#d8d8d8;border-radius:%?42?%;font-size:%?40?%;font-family:SourceHanSansCN-Medium;font-weight:500;color:#fff;line-height:%?80?%;text-align:center}.submit-btn-active[data-v-08565d97]{background:#195092}.guling[data-v-08565d97]{background:url("+a+') 100% 0 no-repeat;background-size:60% auto\n}.msg[data-v-08565d97]{overflow:hidden;padding-right:%?30?%;font-size:%?27?%;font-weight:400;color:#f0cf8d;margin:%?16?% %?0?%;letter-spacing:%?2?%}.sub-msg[data-v-08565d97]{margin-top:%?30?%;font-size:%?24?%;font-family:SourceHanSansCN-Regular;font-weight:400;color:#969696;line-height:%?36?%}.top>.switch-box[data-v-08565d97]{float:right;font-size:%?28?%;line-height:%?34?%;color:#999}.title[data-v-08565d97]{height:%?84?%;padding:0 %?20?%;margin:%?36?% 0;font-size:%?30?%;box-sizing:border-box;background:#f0f0f0;border-radius:4px}.list[data-v-08565d97]{margin-top:%?40?%}.list[data-v-08565d97]:after{content:"";display:table;clear:both}.item[data-v-08565d97]{width:%?140?%;height:%?64?%;float:left;margin-right:%?30?%;margin-bottom:%?20?%;line-height:%?64?%;text-align:center;font-size:%?24?%;background:#fff;box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.15);border-radius:%?8?%}.item[data-v-08565d97]:nth-child(4n){margin-right:0}.textarea-style[data-v-08565d97]{width:100%;height:%?240?%;padding:%?32?%;margin:%?40?% 0;font-size:%?28?%;line-height:%?40?%;box-sizing:border-box;border-radius:%?8?%;border:%?1?% solid #195092;background:hsla(0,0%,100%,.75)}.placeholder[data-v-08565d97]{font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.scroll-x[data-v-08565d97]{width:%?700?%;height:%?420?%;white-space:nowrap;\n\t/* padding-right: 20upx; */box-sizing:border-box}.btn[data-v-08565d97]{width:%?196?%;height:%?196?%;\n\t/* float: left; */margin-right:%?18?%;padding-top:%?56?%;text-align:center;box-sizing:border-box;background:hsla(0,0%,87.8%,.75);border-radius:4px}.cross[data-v-08565d97]{width:%?48?%;height:%?48?%;background:#fff;border:1px solid #9b9b9b;border-radius:50%}.btn-msg[data-v-08565d97]{padding-top:%?20?%;font-size:%?24?%;color:#4a4a4a;line-height:%?28?%}.intro[data-v-08565d97]{padding-left:%?18?%;overflow:hidden;font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.img-container[data-v-08565d97]{\n\t/* padding-left: 18upx; */overflow:hidden;overflow-x:scroll}.img-item[data-v-08565d97]{position:relative;display:inline-block;width:%?144?%;height:%?168?%;margin-right:%?40?%;\n\t/* float: left; */word-wrap:break-word;white-space:pre-wrap;border-radius:%?8?%}.img-item>.iconfont[data-v-08565d97]{position:absolute;right:%?-16?%;top:%?-8?%;display:inline-block;width:%?40?%;height:%?40?%;background-color:#ff5a5f;color:#fff;text-align:center;line-height:%?40?%;border-radius:50%;font-size:%?20?%;font-weight:700;z-index:999}.img-item-btn[data-v-08565d97]{width:%?196?%}.img-item>uni-image[data-v-08565d97]{width:%?144?%;height:%?168?%;border-radius:%?8?%;border:1px solid #e8e8e8;box-sizing:border-box}\n/* 上传文件 样式 */.scroll-x[data-v-08565d97]{width:%?700?%;height:%?420?%;margin-top:%?50?%;white-space:nowrap;\n\t/* padding-right: 20upx; */box-sizing:border-box}uni-video[data-v-08565d97]{margin-top:%?50?%}.find-btn[data-v-08565d97]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?144?%;height:%?168?%;color:#919191;font-size:%?24?%;background:#fff;box-shadow:%?8?% %?8?% %?24?% %?0?% rgba(0,23,51,.15);border-radius:%?8?%}.img-maxnum[data-v-08565d97]{font-size:%?28?%;color:#919191;margin-left:%?30?%}.upload-img[data-v-08565d97]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),e.exports=t},ec77:function(e,t,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("7cf6")),o={props:{show:{type:Boolean,default:!1},integralType:[String,Number],obj:Object},data:function(){var e=0;return e=44,{offsetTop:e,shareChannel:[{iconfont:"/static/weixinShare.svg",channel:"WXSceneSession",subMsg:"微信好友"},{iconfont:"/static/friendShare.svg",channel:"WXSenceTimeline",subMsg:"微信朋友圈"}]}},methods:{hide:function(){this.$emit("hidePopup")},handleToShare:function(e,t){var n=this,i=uni.getStorageSync("token"),o=uni.getStorageSync("user_Id"),a=this.obj["href"],s=this.obj["title"],u=this.obj["summary"],c=this.obj["imageUrl"],l=this.obj["id"],d=this.obj["module"],f=this.$userSharingRecord;if(void 0!=this.obj["courselock"]&&1==this.obj["courselock"]){this.obj["courselock"];f=this.$courseShareLock}console.log("courselock:"+this.obj["courselock"]),console.log(f),uni.request({url:this.$webUrl+f,header:{token:i},data:{href:a,shareChannel:t,shareContent:u,shareImg:c,shareTitle:s,shareType:0,userId:o,markId:l,module:d},method:"POST",success:function(t){0==t.data.code?(r.default.integralSave({url:n.$webUrl+n.$userintegralrecord,data:{integralOperate:1,integralType:n.integralType,title:2==n.integralType?"邀请好友送积分":"分享送积分",userId:o},token:i}),uni.share({provider:"weixin",scene:e,type:0,href:a,title:s,summary:u,imageUrl:c,success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))},complete:function(){n.$emit("hidePopup")}})):r.default.notLogin(t.data)},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}}};t.default=o},ef46:function(e,t,n){"use strict";n.r(t);var i=n("2d02"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},f391:function(e,t,n){var i=n("2161");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("de925d3c",i,!0,{sourceMap:!1,shadowMode:!1})}}]);