(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-download-invite-down"],{1071:function(t,e,i){var n=i("f276");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("fa66f04c",n,!0,{sourceMap:!1,shadowMode:!1})},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"6d48":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"box"},[i("v-uni-image",{staticClass:"invite-title common",attrs:{src:"/static/invite-title.jpg"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"uname"},[t._v("我是"),i("v-uni-text",[t._v(t._s(t.uname))])],1),i("v-uni-view",{staticClass:"msg"},[i("v-uni-view",[t._v("我邀请你加入"),i("v-uni-text",[t._v("体语")]),t._v("BodyReader")],1),i("v-uni-view",[t._v("这里有专业的体姿、营养、功能、体能")]),i("v-uni-view",[t._v("等测试课程和知识")]),i("v-uni-view",[t._v("促进我们健康成长")]),i("v-uni-view",[t._v("我们大家一起解读身体语言")]),i("v-uni-view",[t._v("做些有意思的事情")])],1)],1),i("v-uni-view",{staticClass:"sandbox"},[i("v-uni-image",{staticClass:"people",attrs:{src:"/static/org-bg.png"}}),i("v-uni-view",{staticClass:"sandbox-inner"},[i("v-uni-view",{staticClass:"sandbox-title"},[t._v("手机号")]),i("v-uni-view",{staticClass:"code"},[i("v-uni-input",{attrs:{type:"number",placeholder:"输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t.loading?i("v-uni-text",{staticClass:"iconfont"},[t._v("")]):t._e(),t._v(t._s(t.msg))],1)],1),i("v-uni-view",{staticClass:"sandbox-title"},[t._v("验证码")]),i("v-uni-view",{staticClass:"code"},[i("v-uni-input",{attrs:{type:"number",disabled:t.codedisabled,placeholder:"输入验证码"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handlegetcode.apply(void 0,arguments)}},model:{value:t.codeumber,callback:function(e){t.codeumber=e},expression:"codeumber"}})],1)],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.regBtn.apply(void 0,arguments)}}},[t._v("点击下载APP")])],1),i("v-uni-image",{staticClass:"last-img",attrs:{src:"/static/invite-bottom.jpg"}})],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"85a1":function(t,e,i){t.exports=i.p+"static/img/invite-middle.70556f28.jpg"},"8bb1":function(t,e,i){"use strict";i("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{phone:"",msg:"获取验证码",status:!0,num:60,timer:null,codeumber:"",userId:"",discount:"",loading:!1,uname:"",courseId:"",codedisabled:!0}},onLoad:function(t){void 0!=t.courseId&&(this.courseId=t.courseId),console.log(JSON.stringify(t)),this.userId=t.userid,this.discount=t.discount,this.uname=t.uname},methods:{handlegetcode:function(){1==this.codedisabled&&uni.showToast({icon:"none",duration:3e3,title:"请点击获取验证码"})},getCode:function(){var t=this;if(this.status){var e=/^1[3456789]\d{9}$/;e.test(this.phone.trim())?(this.loading=!0,uni.request({url:this.$msgUrl+this.$sendMessage,header:{"content-type":"application/x-www-form-urlencoded"},data:{mobile:this.phone.trim()},method:"POST",success:function(e){return 0==e.data.code?(t.codedisabled=!1,t.status=!1,t.loading=!1,t.obtainCode(),void uni.showToast({icon:"none",duration:3e3,title:"发送成功"})):100003004==e.data.code?void uni.showToast({icon:"none",duration:3e3,title:"短信发送次数超限"}):void uni.showToast({icon:"none",duration:3e3,title:"发送失败"})},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})},complete:function(){t.loading=!1}})):uni.showToast({icon:"none",title:"请输入合法的手机号"})}},obtainCode:function(){var t=this;this.timer=setInterval((function(){var e=t.num;e--,t.num=e,0===t.num?(clearInterval(t.timer),t.timer=null,t.msg="重新获取",t.status=!0,t.num=60):t.msg="获取中("+t.num+")"}),1e3)},regBtn:function(){if(11==this.phone.length&&""!=this.phone)if(4==this.codeumber.length&&""!=this.codeumber){var t="",e={},i="";""==this.courseId?(t=this.$captchaRegister,e={mobile:this.phone,captcha:this.codeumber,inviter:this.userId,discount:this.discount,model:i,landingSource:1}):(t=this.$courseShareLockRegister,e={mobile:this.phone,captcha:this.codeumber,formUserId:this.userId,courseId:this.courseId}),uni.request({url:this.$webUrl+t,header:{"content-type":"application/x-www-form-urlencoded"},data:e,method:"POST",success:function(t){console.log("邀请。。。。。。。。。。。。"),console.log(JSON.stringify(t));t.data.data;0!=t.data.code?1!=t.data.code?10007!=t.data.code?2!=t.data.code||uni.showToast({icon:"none",duration:3e3,title:"包含不合法参数"}):uni.showToast({icon:"none",duration:3e3,title:"验证码输入有误"}):uni.showModal({title:"该手机号已注册",content:"该手机号已注册，立即下载APP。",cancelText:"暂不下载",cancelColor:"#919191",confirmText:"立即下载",confirmColor:"#6BD8ED",success:function(t){t.confirm?(console.log("用户点击确定"),window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app"):t.cancel&&console.log("用户点击取消")}}):uni.showModal({title:"注册成功",content:"恭喜你，注册成功，立即下载APP。",cancelText:"暂不下载",cancelColor:"#919191",confirmText:"立即下载",confirmColor:"#6BD8ED",success:function(t){t.confirm?(console.log("用户点击确定"),window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app"):t.cancel&&console.log("用户点击取消")}})},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}else uni.showToast({icon:"none",duration:3e3,title:"请输入4位验证码"});else uni.showToast({icon:"none",duration:3e3,title:"请输入11位手机号"})}}};e.default=n},b2c9:function(t,e,i){"use strict";i.r(e);var n=i("8bb1"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},e2ec:function(t,e,i){"use strict";var n=i("1071"),o=i.n(n);o.a},ef73:function(t,e,i){"use strict";i.r(e);var n=i("6d48"),o=i("b2c9");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("e2ec");var s,c=i("f0c5"),d=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"2a1cbe14",null,!1,n["a"],s);e["default"]=d.exports},f276:function(t,e,i){var n=i("24fb"),o=i("1de5"),a=i("85a1");e=n(!1);var s=o(a);e.push([t.i,".box[data-v-2a1cbe14]{width:%?750?%;box-sizing:border-box;overflow:scroll;overflow-x:hidden;background:-webkit-linear-gradient(315deg,#6780fb,#6780fb);background:linear-gradient(135deg,#6780fb,#6780fb);font-family:SourceHanSansCN-Medium}.last-img[data-v-2a1cbe14]{position:relative;bottom:%?-20?%;width:%?750?%;height:%?196?%;margin-top:%?150?%}.invite-title[data-v-2a1cbe14]{width:%?240?%;height:%?80?%;padding:%?100?% %?76?% 0}.content[data-v-2a1cbe14]{padding:%?74?% %?76?% %?90?%;background:url("+s+") no-repeat 0 0;background-size:%?750?% auto}.content>uni-image[data-v-2a1cbe14]{position:absolute;z-index:0}.uname[data-v-2a1cbe14]{font-size:%?32?%;color:#fff;line-height:%?48?%}.uname>uni-text[data-v-2a1cbe14]{padding-left:%?20?%;font-size:%?52?%;font-weight:700;color:#00d7ff}.msg[data-v-2a1cbe14]{margin:%?44?% 0 0}.msg>uni-view[data-v-2a1cbe14]{font-size:%?24?%;font-weight:500;color:#fff;line-height:%?40?%;letter-spacing:%?4?%}.msg>uni-view>uni-text[data-v-2a1cbe14]{padding:0 %?20?%;font-size:%?52?%;font-weight:700;color:#00d7ff}.sandbox[data-v-2a1cbe14]{position:relative;width:%?598?%;height:%?516?%;margin:0 auto;padding:%?4?%;box-sizing:border-box;border-radius:%?32?%;opacity:.9;border:1px solid #fff}.people[data-v-2a1cbe14]{position:absolute;top:%?-120?%;right:%?-76?%;left:auto;width:%?188?%;height:%?500?%;z-index:-2}.sandbox-inner[data-v-2a1cbe14]{width:100%;height:100%;padding:%?50?% %?76?%;box-sizing:border-box;border-radius:%?28?%;background:#fff}.sandbox-title[data-v-2a1cbe14]{font-size:%?32?%;color:#46476f}.code[data-v-2a1cbe14]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;margin:%?10?% 0 %?40?%;border-bottom:1px solid #6077fd}.code > uni-input[data-v-2a1cbe14]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;padding-left:%?26?%;box-sizing:border-box;font-size:%?30?%}.code > uni-text[data-v-2a1cbe14]{position:relative;display:inline-block;width:%?130?%;padding:0 0 0 %?10?%;font-size:%?26?%;color:#46476f}.iconfont[data-v-2a1cbe14]{position:absolute;left:%?-18?%;top:%?6?%;display:block;font-size:%?26?%;\n\t/* transition: all 1s; */-webkit-animation:loading-data-v-2a1cbe14 1s infinite linear;animation:loading-data-v-2a1cbe14 1s infinite linear}@-webkit-keyframes loading-data-v-2a1cbe14{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-data-v-2a1cbe14{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.btn[data-v-2a1cbe14]{position:absolute;left:0;right:0;top:%?472?%;width:%?400?%;height:%?88?%;margin:0 auto;background:-webkit-linear-gradient(315deg,#7388fd,#5b73fe);background:linear-gradient(135deg,#7388fd,#5b73fe);box-shadow:0 %?4?% %?20?% 0 #4161d5;border-radius:%?44?%;text-align:center;line-height:%?88?%;color:#fff}",""]),t.exports=e}}]);