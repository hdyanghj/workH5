(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-test-body-test-recommend"],{"190f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,e=getCurrentPages();this.route=e[e.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var e,i=this,a=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){i.systemType=t}}),e="ios"==this.systemType.platform?2:1;var n={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:a,platform:e,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:n,success:function(t){0==t.data.code&&(clearInterval(i.Timer),i.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};e.default=a},"1dca":function(t,e,i){"use strict";i.r(e);var a=i("50ee"),n=i("7003");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0f5ec893",null,!1,a["a"],s);e["default"]=c.exports},"1e53":function(t,e,i){"use strict";i.r(e);var a=i("63a7"),n=i("4b38");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("d35e");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"c32abf78",null,!1,a["a"],s);e["default"]=c.exports},"4b38":function(t,e,i){"use strict";i.r(e);var a=i("d231"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"50ee":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"63a7":function(t,e,i){"use strict";var a={buryingpoint:i("1dca").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"banner-body"},[i("v-uni-image",{attrs:{src:"/static/advertisement/knyy.png"}})],1),i("v-uni-view",{staticClass:"body-title"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"body-test-tag"},t._l(t.tagList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"body-tag-btn",class:[a==t.active?"tag-active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeHistory(a)}}},[t._v(t._s(e))])})),1),i("v-uni-view",{staticClass:"body-cont"},[t.renderingList0?i("v-uni-view",{staticClass:"body-list-cont"},[i("v-uni-view",{staticClass:"tishi-text"},[t._v("通过在线咨询上传您的图片或视频，教练员会帮助您分析问题的出现的具体原因。")]),i("v-uni-view",[i("v-uni-input",{staticClass:"title",attrs:{type:"text",placeholder:"提问标题(最多50字)",maxlength:"50","placeholder-style":"font-size: 24upx"},model:{value:t.head,callback:function(e){t.head=e},expression:"head"}}),i("v-uni-textarea",{staticClass:"textarea-style",attrs:{value:"",maxlength:"100",placeholder:"请描述您的年龄、性别、症状，以便于在线进行交流， 能够更加准确的回答您的问题","placeholder-class":"placeholder","placeholder-style":"font-size: 24upx;line-height: 40upx;color:#999999"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t.showBtn?i("v-uni-button",{staticClass:"upload-file",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseFile.apply(void 0,arguments)}}},[t._v("上传文件")]):t._e(),i("v-uni-view",{staticClass:"remark"},[i("v-uni-view",{staticClass:"remark-title"},[t._v("联系方式：")]),i("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.connection,(function(e,a){return i("v-uni-label",{key:e.value,staticClass:"connection-item"},[i("v-uni-radio",{staticClass:"radio-item",attrs:{value:e.value}}),i("v-uni-text",[t._v(t._s(e.name))])],1)})),1),i("v-uni-textarea",{staticClass:"remark-area",attrs:{maxlength:"50",placeholder:"请填写QQ账号或微信账号,并确认无误.","placeholder-class":"placeholder","placeholder-style":"font-size: 28upx;line-height: 40upx;color:#999999"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),i("v-uni-view",{class:["submit-btn",t.activeSubmit?"submit-btn-active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fnSubmit.apply(void 0,arguments)}}},[t._v("提交")]),t.upimgurl.length>0?i("v-uni-scroll-view",{staticClass:"scroll-x",attrs:{"scroll-x":!0}},t._l(t.imgs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"img-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage(a)}}},[i("v-uni-text",{staticClass:"iconfont",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteImg(a)}}},[t._v("")]),i("v-uni-image",{attrs:{src:e,mode:"aspectFill"}})],1)})),1):t._e(),t.upvideourl?i("v-uni-view",{staticClass:"img-item"},[i("v-uni-text",{staticClass:"iconfont",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteVideo.apply(void 0,arguments)}}},[t._v("")]),i("v-uni-video",{staticClass:"img-item",attrs:{src:t.video,controls:!0}})],1):t._e()],1)],1):t._e(),t._l(t.courseList,(function(e){return t.renderingList1?i("v-uni-view",{staticClass:"body-cont-list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.articleDetail(e.clickKey,e.id)}}},[i("v-uni-view",{staticClass:"cont-list-left"},[i("v-uni-view",{staticClass:"cont-list-title"},[i("v-uni-text",[t._v(t._s(t.tagsText))]),t._v(t._s(e.title))],1),i("v-uni-view",{staticClass:"cont-list-tag"},[t._v(t._s(e.typeName))]),i("v-uni-view",{staticClass:"cont-list-date"},[t._v(t._s(e.createDate))])],1),i("v-uni-view",{staticClass:"cont-list-right"},[i("v-uni-image",{attrs:{src:e.thumbnail}}),i("v-uni-view",{staticClass:"iconfont"},[t._v("")])],1)],1):t._e()})),t.noData?i("v-uni-view",{staticClass:"no-data"},[t._v("暂无相关信息")]):t._e()],2),i("buryingpoint",{ref:"buryingpoint"})],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},7003:function(t,e,i){"use strict";i.r(e);var a=i("190f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"7cf6":function(t,e,i){"use strict";var a=i("ee27");i("c975"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("e143")),o={downBtn:function(){setTimeout((function(){var t=window.navigator.userAgent.toLowerCase();-1!=t.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=t.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=t.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=t.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(t){console.log("登陆失效验证："),console.log(JSON.stringify(t));var e=t.code,i=t.msg||t.error;if(100005001==e||100005002==e){uni.clearStorage(),i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==e?(console.log(e),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:i,duration:1500})},integralSave:function(t){var e=t.url,i=t.data,a=t.token,n=t.cb;a&&uni.request({url:e,method:"POST",header:{token:a},data:i,success:function(t){n&&n()}})},showModal:function(t,e){var i=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(a){a.confirm?uni.navigateTo({url:"../login/login"}):a.cancel&&i.visitorLogin({url:t,url2:e})}})},visitorLogin:function(t){var e=t.url,i=t.url2,a=this,n=plus.device.uuid;console.log(n),uni.request({url:e,data:{openId:n,unionid:n},success:function(t){console.log("获取用户信息"),console.log(JSON.stringify(t)),3==t.data.data.code?a.register(i,n):a.saveUserInfo(t.data.data)}})},register:function(t,e){var i=this;uni.request({url:t,method:"POST",data:{openid:e,unionid:e},success:function(t){console.log("注册"),console.log(JSON.stringify(t)),i.saveUserInfo(t.data.data)}})},saveUserInfo:function(t){uni.setStorage({key:"user_Info",data:{username:t.user.username,headSculpture:t.user.headSculpture,remarks:t.user.remarks,gender:t.user.gender,birthday:t.user.birthday,email:t.user.email,mobile:t.user.mobile}}),uni.setStorage({key:"user_Id",data:t.user.id}),uni.setStorage({key:"token",data:t.token}),uni.setStorage({key:"postureTestNumber",data:t.user.postureTestNumber})},statisticalClicks:function(t){var e=n.default.prototype;uni.request({url:e.$webUrl+e.$recordClicks,method:"POST",data:t,success:function(t){console.log("统计点击量 ："),console.log(t)},fail:function(t){console.log(t)}})},sharingApplet:function(t){console.log(JSON.stringify(t));var e=n.default.prototype,i=this,a=e.$userSharingRecord;void 0!=t.courseflag&&2==t.courseflag&&(a=e.$courseShareLock),uni.request({url:e.$webUrl+a,header:{token:t.token},data:{href:t.href,shareChannel:t.subMsg,shareContent:t.summary,shareImg:t.imageUrl,shareTitle:t.title,shareType:t.shareType,userId:t.userId,markId:t.id,module:t.module},method:"POST",success:function(a){console.log("分享记录"+JSON.stringify(a)),console.log(e.$webUrl),console.log(e.$userintegralrecord),i.integralSave({url:e.$webUrl+e.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:t.userId},token:t.token}),i.shareFun(t)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(t){console.log("我进来了"),console.log(JSON.stringify(t)),uni.share({provider:"weixin",type:t.shareType,imageUrl:t.imageUrl,title:t.title,miniProgram:{id:"gh_bb081e4b31c9",path:t.href,type:0,webUrl:t.webHref},success:function(t){console.log(JSON.stringify(t))}})},getMembers:function(t,e,i){var a=this;uni.request({url:t,header:{"content-type":"application/x-www-form-urlencoded",token:e},data:{userId:i},method:"GET",success:function(t){if(0==t.data.code){var e=t.data.data;console.log(e),uni.setStorage({key:"memberInfo",data:e})}else a.notLogin(t.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};e.default=o},"99c3":function(t,e,i){var a=i("9b27");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1900b9b4",a,!0,{sourceMap:!1,shadowMode:!1})},"9b27":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.upload-file[data-v-c32abf78]{height:%?80?%;margin-bottom:%?32?%;line-height:%?80?%;background:#01b2ca;color:#fff;border-radius:%?40?%}.content[data-v-c32abf78]{width:%?750?%;margin:0 auto}.body-title[data-v-c32abf78]{width:%?660?%;padding:%?40?% 0 0;margin:0 auto;font-size:%?40?%}.banner-body[data-v-c32abf78]{width:%?660?%;height:%?160?%;margin:0 auto;padding-top:%?40?%}.banner-body uni-image[data-v-c32abf78]{width:100%;height:100%;border-radius:%?20?%}.body-test-tag[data-v-c32abf78]{width:%?660?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?20?%}.body-tag-btn[data-v-c32abf78]{\n\t/* padding: 20upx 30upx; */padding:%?20?% 0;margin-right:%?30?%;font-size:%?28?%}.tag-active[data-v-c32abf78]{color:#03b2ca!important;position:relative}.tag-active[data-v-c32abf78]:after{content:"";width:40%;height:1px;position:absolute;left:30%;bottom:0;background:#00bfff}.body-cont[data-v-c32abf78]{width:%?660?%;margin:0 auto;padding-top:%?40?%}.body-cont-list[data-v-c32abf78]{width:100%;padding:%?40?% 0;border-bottom:1px solid #ececec;display:-webkit-box;display:-webkit-flex;display:flex}.cont-list-left[data-v-c32abf78]{width:%?460?%}.body-list-cont[data-v-c32abf78]{width:100%}.boay-list-title[data-v-c32abf78]{width:92%;padding:%?30?% 0;padding-right:8%;font-size:%?32?%;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;position:relative}.body-list-jiantou[data-v-c32abf78]{font-family:texticons;width:%?42?%;height:%?42?%;text-align:center;line-height:%?42?%;font-size:%?36?%;position:absolute;right:%?0?%;top:%?30?%}.body-list-main[data-v-c32abf78]{padding:%?20?%;background:#efefef;font-size:%?28?%;-webkit-transition-duration:.3s;transition-duration:.3s}.activeStyle[data-v-c32abf78]{color:#6bd8ed;position:relative}.activeStyle .body-list-jiantou[data-v-c32abf78]{transform:rotate(90deg);-ms-transform:rotate(90deg); \t/* IE 9 */-moz-transform:rotate(90deg); \t/* Firefox */-webkit-transform:rotate(90deg); /* Safari 和 Chrome */-o-transform:rotate(90deg);-webkit-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}.itemStyle[data-v-c32abf78]{color:#000}.guide-btn[data-v-c32abf78]{padding-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.guide-jiance[data-v-c32abf78]{width:40%;text-align:center;background:#6bd8ed;color:#fff;padding:%?20?% 0;margin-right:%?40?%}.guide-zixun[data-v-c32abf78]{width:40%;margin:%?40?% auto;border-radius:%?20?%;text-align:center;background:#6bd8ed;color:#fff;padding:%?20?% 0}.guide-zixun uni-text[data-v-c32abf78]{font-size:%?50?%;vertical-align:middle;margin-right:%?10?%}.no-data[data-v-c32abf78]{padding:%?40?%;text-align:center;font-size:%?28?%;color:#ccc}.cont-list-title[data-v-c32abf78]{font-size:%?32?%;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cont-list-title uni-text[data-v-c32abf78]{padding:%?2?% %?10?%;border-radius:%?5?%;background:#6bd8ed;font-size:%?24?%;color:#fff;margin-right:%?20?%}.cont-list-tag[data-v-c32abf78]{font-size:%?24?%;padding-top:%?20?%}.cont-list-date[data-v-c32abf78]{font-size:%?24?%;padding-top:%?20?%}.cont-list-right[data-v-c32abf78]{width:%?200?%;height:%?140?%;box-shadow:0 2px 4px 0 rgba(10,91,108,.45);border-radius:%?8?%;overflow:hidden;position:relative}.cont-list-right uni-image[data-v-c32abf78]{width:100%;height:100%}.cont-list-right .iconfont[data-v-c32abf78]{position:absolute;width:%?50?%;height:%?50?%;margin-top:%?-25?%;margin-left:%?-25?%;font-size:%?50?%;top:50%;left:50%;color:#fff;text-shadow:0 2px 4px #525252}.tishi-text[data-v-c32abf78]{\n\t/* padding: 0 40upx; */font-size:%?24?%;line-height:%?40?%;color:#858585}.title[data-v-c32abf78]{height:%?84?%;padding:0 %?20?%;margin:%?20?% 0 %?36?%;font-size:%?30?%;box-sizing:border-box;background:#f0f0f0;border-radius:4px}.remark-title[data-v-c32abf78]{font-size:%?30?%;line-height:%?40?%}.remark-area[data-v-c32abf78]{width:100%;height:%?80?%;padding:%?20?%;margin:%?10?% 0 %?40?%;font-size:%?28?%;line-height:%?40?%;box-sizing:border-box;border-radius:%?8?%;border:1px solid #c1c1c1}.textarea-style[data-v-c32abf78]{width:100%;height:%?200?%;padding:%?32?%;margin:%?40?% 0;font-size:%?28?%;line-height:%?40?%;box-sizing:border-box;border-radius:%?8?%;border:1px solid #c1c1c1}.placeholder[data-v-c32abf78]{font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}\n/* 上传文件 样式 */.scroll-x[data-v-c32abf78]{width:%?700?%;height:%?420?%;margin-top:%?50?%;white-space:nowrap;\n\t/* padding-right: 20upx; */box-sizing:border-box}.img-item[data-v-c32abf78]{position:relative;display:inline-block;width:%?280?%;height:%?420?%;margin-right:%?40?%;\n\t/* float: left; */word-wrap:break-word;white-space:pre-wrap;border-radius:%?8?%;overflow:hidden}.img-item>.iconfont[data-v-c32abf78]{position:absolute;right:0;top:0;display:inline-block;width:%?60?%;height:%?60?%;color:#03b2ca;text-align:center;line-height:%?60?%;border-radius:50%;font-size:%?30?%;font-weight:700;z-index:999}.img-item>uni-image[data-v-c32abf78]{width:100%;border-radius:%?8?%;border:1px solid #e8e8e8;box-sizing:border-box}uni-video[data-v-c32abf78]{margin-top:%?50?%}.connection-item[data-v-c32abf78]{margin-right:%?40?%;padding:%?20?% 0;font-size:%?30?%;display:inline-block}\n/* .radio-item, .uni-radio-wrapper, .uni-radio-input{\n\twidth: 32upx !important;\n\theight: 32upx !important;\n} */.submit-btn[data-v-c32abf78]{width:%?660?%;height:%?80?%;margin:%?20?% auto;background:#f0f0f0;border-radius:%?42?%;font-size:%?40?%;font-family:SourceHanSansCN-Medium;font-weight:500;color:#4d4d4d;line-height:%?80?%;text-align:center;-webkit-transition:background-color .5s;transition:background-color .5s}.submit-btn-active[data-v-c32abf78]{background:#01b2ca;color:#fff}',""]),t.exports=e},d231:function(t,e,i){"use strict";var a=i("ee27");i("99af"),i("a15b"),i("fb6a"),i("a434"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f3f3")),o=i("2f62"),s=a(i("7cf6")),r=a(i("1dca")),c={components:{buryingpoint:r.default},data:function(){return{content:"",head:"",remark:"",connection:[{value:"WX:",name:"微信"},{value:"QQ:",name:"QQ"}],connectionItem:"",imgs:[],video:"",upimgurl:[],upvideourl:"",showBtn:!0,uploadFileType:"",userId:"",fee:"",orderId:"",orderNum:"",itemId:"",vip:"",title:"",tag:"",assess:"",token:"",tagList:["在线咨询","相关课程"],courseList:[],active:0,tagsText:"",renderingList0:!0,renderingList1:!1,current:0,activeStyle:"activeStyle",itemStyle:"itemStyle",jiance:"jiance",zixun:"zixun",requestUrl:"",requestDate:"",noData:!1}},onLoad:function(t){var e=uni.getStorageSync("vip");if(this.vip=e,0==e){var i=this.$store.state.communication.cousultPrice.length;if(i){var a=this.$store.state.communication.cousultPrice[1].chargeStatus;2==a?this.fee=this.$store.state.communication.cousultPrice[1].preferentialPrice:1==a?this.fee=this.$store.state.communication.cousultPrice[1].price:3!=a&&4!=a||(this.fee=0)}else this.asyncSetConsultPrice()}else this.fee=0;this.userId=uni.getStorageSync("user_Id"),this.title=t.itemname,this.tag=t.category,this.assess=t.assess;var n=uni.getStorageSync("token");this.token=n,this.changeHistory(0)},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onUnload:function(){this.$refs.buryingpoint.buryingpoint("体测问题原因")},onHide:function(){this.$refs.buryingpoint.buryingpoint("体测问题原因")},computed:{activeSubmit:function(){return this.head&&this.content&&this.remark&&this.connectionItem}},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},methods:(0,n.default)({},(0,o.mapActions)(["asyncSetConsultPrice"]),{changeHistory:function(t){this.active=t,0==this.active&&(this.noData=!1,this.renderingList0=!0,this.renderingList1=!1),1==this.active&&(this.requestUrl=this.$getCourseListInfo,this.requestDate={page:1,limit:10,tag:this.tag,tag1:this.title},this.tabClick(t),this.renderingList0=!1,this.renderingList1=!0)},onClickItem:function(t){this.current!==t&&(this.current=t)},tabClick:function(t){var e=this;uni.request({url:this.$webUrl+this.requestUrl,data:this.requestDate,header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},success:function(i){if(0==i.data.code){if(e.courseList=[],1==t){var a=i.data.data.list;if(0==a.length)return e.courseList=[],void(e.noData=!0);e.noData=!1;for(var n=0;n<a.length;n++)e.$set(a[n],"clickKey",2);e.courseList=a,e.tagsText="课程"}}else s.default.notLogin(i.data)}})},articleDetail:function(t,e){var i="";1==t&&(i="/pages/video/video-detail?videoId="+e+"&flag=1"),2==t&&(i="/pages/video/course-detail?courseId="+e+"&flag=1"),uni.navigateTo({url:i})},guideBtn:function(t){"jiance"==t&&uni.switchTab({url:"/pages/video/course-type"}),"zixun"==t&&uni.navigateTo({url:"/pages/communication/consult-options?type=expert"})},fnSubmit:function(){var t=this,e="";this.upimgurl.length>0?e=this.upimgurl.slice(0,4).join(","):this.upvideourl&&(e=this.upvideourl);var i=this.connectionItem+this.remark;if(0==this.vip){var a=this.$store.state.communication.cousultPrice[1].chargeStatus;2==a?this.fee=this.$store.state.communication.cousultPrice[1].preferentialPrice:1==a?this.fee=this.$store.state.communication.cousultPrice[1].price:3!=a&&4!=a||(this.fee=0)}var n={totalAmount:this.fee,payType:1,orderSource:1,consultType:2,secondLevelClass:"成人",firstLevelClass:"学生体质测试",author:this.userId,content:this.content,remark:i,title:this.head,imgUrl:e,modelType:0};return n.title?n.content?n.remark?void uni.request({url:this.$webUrl+this.$cmsconsult,method:"POST",header:{token:this.token},data:n,success:function(e){if(0==e.data.code){t.isOrdered=!0;var i=e.data.data.orderId,a=e.data.data.orderNum,n=e.data.data.itemId;t.orderId=i,t.orderNum=a,t.itemId=n,t.isORnotVip(i,a)}else s.default.notLogin(e.data)}}):uni.showToast({icon:"none",title:"请填写联系方式"}):uni.showToast({icon:"none",title:"请填写内容"}):uni.showToast({icon:"none",title:"请填写标题"})},isORnotVip:function(t,e){var i=this;0==this.vip?uni.navigateTo({url:"/pages/communication/pay?fee="+i.fee+"&orderId="+t+"&orderNum="+e+"&body=咨询"}):uni.request({url:i.$webUrl+i.$updateStatus,method:"POST",header:{token:uni.getStorageSync("token"),"content-type":"application/x-www-form-urlencoded"},data:{itemId:i.itemId},success:function(t){0==t.data.code?uni.redirectTo({url:"/pages/center/ac-quiz/advisory-list"}):s.default.notLogin(t.data)}})},radioChange:function(t){this.connectionItem=t.detail.value},previewImage:function(t){var e=this.imgs;uni.previewImage({current:this.imgs[t],urls:e})},deleteVideo:function(){this.upvideourl="",this.showBtn=!0,this.uploadFileType=""},deleteImg:function(t){this.imgs.splice(t,1),this.upimgurl.splice(t,1),this.upimgurl.length<4&&(this.showBtn=!0),0==this.upimgurl.length&&(this.uploadFileType="")},chooseFile:function(){var t=this;uni.showActionSheet({itemList:["上传图片","上传视频(小于30M)"],success:function(e){if(0==e.tapIndex)uni.chooseImage({count:4-t.imgs.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){t.imgs=t.imgs.concat(e.tempFilePaths),t.uploadFile(e.tempFilePaths)}});else{if("img"==t.uploadFileType)return uni.showToast({icon:"none",title:"请继续上传图片"});uni.chooseVideo({count:1,sourceType:["camera","album"],compressed:!0,success:function(e){e.size/1048576>30?uni.showToast({icon:"none",title:"视频大于30M，请修改视频分辨率.",duration:1500}):(t.video=e.tempFilePath,t.uploadFile(e.tempFilePath))}})}},fail:function(t){}})},uploadFile:function(t){var e=this;if(uni.showLoading({title:"正在上传。。。"}),Array.isArray(t))for(var i=0;i<t.length;i++)uni.uploadFile({url:e.$webUrl+e.$upAvatar,filePath:t[i],fileType:"image",name:"file",formData:{type:5},success:function(t){if(200==t.statusCode){var i=JSON.parse(t.data.toString()).filename;i&&(e.upimgurl.push(i),4==e.upimgurl.length&&(e.showBtn=!1),e.uploadFileType="img"),uni.hideLoading()}else uni.showToast({icon:"none",title:"上传失败！",duration:2e3})},fail:function(t){uni.hideLoading()}});else uni.uploadFile({url:e.$webUrl+e.$upAvatar,filePath:t,fileType:"video",name:"file",formData:{type:5},success:function(t){if(200==t.statusCode){uni.hideLoading();var i=JSON.parse(t.data.toString()).filename;i&&(e.upvideourl=i,e.showBtn=!1,e.uploadFileType="video")}else uni.showToast({icon:"none",title:"上传失败！",duration:2e3})},fail:function(t){uni.hideLoading()}})}})};e.default=c},d35e:function(t,e,i){"use strict";var a=i("99c3"),n=i.n(a);n.a}}]);