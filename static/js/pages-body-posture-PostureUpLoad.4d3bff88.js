(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-posture-PostureUpLoad"],{"023a":function(t,e,i){"use strict";i.r(e);var n=i("52de"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"1a88":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".BodyPostureAssessCont[data-v-9295102c]{width:%?654?%;margin:0 auto;letter-spacing:%?2?%;border-bottom:%?2?% solid #ebebeb;padding-bottom:%?48?%}.BodyPostureSpreadImage[data-v-9295102c]{width:%?654?%;height:%?396?%;margin-top:%?48?%}.BodyPostureSpreadImage>uni-video[data-v-9295102c]{background:#d8d8d8;border-radius:%?16?%;border:%?2?% solid #979797;width:100%;height:100%}.BodyPostureAssess[data-v-9295102c]{padding-top:%?30?%}.BodyPostureAssessTipsCont[data-v-9295102c]{position:relative}.BodyPostureAssessTipsTitle[data-v-9295102c]{font-weight:700;font-size:%?32?%;color:#001733;line-height:%?32?%}.BodyPostureAssessTipsLevelTitle[data-v-9295102c]{font-size:%?24?%;color:#f0cf8d;padding-top:%?16?%;line-height:%?40?%}.usage[data-v-9295102c]{position:absolute;right:%?-48?%;top:0;width:%?210?%;height:%?60?%;background:#fe666f;border-radius:%?200?% 0 0 %?200?%;font-size:%?24?%;color:#fff;text-align:center;line-height:%?60?%}.BodyPostureAssessImageCont[data-v-9295102c]{padding:%?48?% %?40?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.PositionCont[data-v-9295102c]{position:relative}.BodyPostureLeftImage[data-v-9295102c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.BodyPostureLeftImage[data-v-9295102c],\r\n.BodyPostureLefEndImage[data-v-9295102c]{width:%?168?%;height:%?274?%;border-radius:%?8?%;border:%?2?% solid #001733;position:relative}.close-view[data-v-9295102c]{text-align:center;line-height:14px;height:16px;width:16px;border-radius:50%;background:#ff5053;color:#fff;position:absolute;top:%?-12?%;right:%?-12?%;font-size:%?26?%}.ImageTips[data-v-9295102c]{width:%?164?%;height:%?274?%}.camera[data-v-9295102c]{position:absolute;left:50%;top:%?100?%;margin-left:%?-38?%;width:%?76?%;height:%?76?%}.BodyPostureLeftText[data-v-9295102c]{font-size:%?28?%;color:#001733;text-align:center;line-height:%?60?%}.BodyPostureLeftText>uni-text[data-v-9295102c]{color:#fa7268}.BodyPostureEnd[data-v-9295102c]{width:%?654?%;height:%?88?%;line-height:%?88?%;text-align:center;background:#195092;box-shadow:%?8?% %?8?% %?24?% 0 rgba(0,23,51,.45);border-radius:%?44?%;font-size:%?32?%;color:#fff;margin-top:%?40?%}.BodyPostureLefEndImage>uni-image[data-v-9295102c]{width:100%;height:100%}",""]),t.exports=e},"2fb9":function(t,e,i){var n=i("1a88");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("6f26c752",n,!0,{sourceMap:!1,shadowMode:!1})},"32d8":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"BodyPostureAssessCont"},[i("v-uni-view",{staticClass:"BodyPostureAssessTitleCont"},[i("v-uni-view",{staticClass:"BodyPostureSpreadImage"},[i("v-uni-video",{attrs:{src:"http://public.qilinsports.com/video/posture.mp4",poster:"http://public.qilinsports.com/video/video-guide.png"}})],1)],1),i("v-uni-view",{staticClass:"BodyPostureAssess"},[i("v-uni-view",{staticClass:"BodyPostureAssessTipsCont"},[i("v-uni-view",{staticClass:"BodyPostureAssessTips"},[i("v-uni-view",{staticClass:"BodyPostureAssessTipsTitle"},[t._v("体姿测评")])],1),i("v-uni-view",{staticClass:"usage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ToUrl()}}},[t._v("使用方法 >")])],1)],1),i("v-uni-view",{staticClass:"BodyPostureAssessImageCont"},[i("v-uni-view",{staticClass:"PositionCont"},[t.imageList[0].imgfile?i("v-uni-view",{staticClass:"BodyPostureLefEndImage"},[i("v-uni-image",{attrs:{src:t.imageList[0].imgUrl,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"close-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(0)}}},[t._v("x")])],1):t._e(),t.imageList[0].buttonfile?i("v-uni-view",{staticClass:"BodyPostureLeftImage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.chooseImg(0)}}},[i("v-uni-image",{staticClass:"ImageTips",attrs:{src:"/static/BodyPosture/justTips.png",mode:"aspectFill"}})],1):t._e(),t.imageList[0].buttonfile?i("v-uni-image",{staticClass:"camera",attrs:{src:"/static/BodyPosture/camera.png",mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.chooseImg(0)}}}):t._e(),i("v-uni-view",{staticClass:"BodyPostureLeftText"},[t._v("正面照"),i("v-uni-text",[t._v("*")])],1)],1),i("v-uni-view",{staticClass:"PositionCont"},[t.imageList[2].imgfile?i("v-uni-view",{staticClass:"BodyPostureLefEndImage"},[i("v-uni-image",{attrs:{src:t.imageList[2].imgUrl,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"close-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(2)}}},[t._v("x")])],1):t._e(),t.imageList[2].buttonfile?i("v-uni-view",{staticClass:"BodyPostureLeftImage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.chooseImg(2)}}},[i("v-uni-image",{staticClass:"ImageTips",attrs:{src:"/static/BodyPosture/sideTips.png",mode:"aspectFill"}})],1):t._e(),t.imageList[2].buttonfile?i("v-uni-image",{staticClass:"camera",attrs:{src:"/static/BodyPosture/camera.png",mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.chooseImg(2)}}}):t._e(),i("v-uni-view",{staticClass:"BodyPostureLeftText"},[t._v("侧面照"),i("v-uni-text",[t._v("*")])],1)],1),i("v-uni-view",{staticClass:"PositionCont"},[t.imageList[1].imgfile?i("v-uni-view",{staticClass:"BodyPostureLefEndImage"},[i("v-uni-image",{attrs:{src:t.imageList[1].imgUrl,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"close-view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(1)}}},[t._v("x")])],1):t._e(),t.imageList[1].buttonfile?i("v-uni-view",{staticClass:"BodyPostureLeftImage",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.chooseImg(1)}}},[i("v-uni-image",{staticClass:"ImageTips",attrs:{src:"/static/BodyPosture/afterTips.png",mode:"aspectFill"}})],1):t._e(),t.imageList[1].buttonfile?i("v-uni-image",{staticClass:"camera",attrs:{src:"/static/BodyPosture/camera.png",mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.chooseImg(1)}}}):t._e(),i("v-uni-view",{staticClass:"BodyPostureLeftText"},[t._v("背面照"),i("v-uni-text",[t._v("*")])],1)],1)],1),i("v-uni-view",{staticClass:"BodyPostureEnd",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.obtainCode()}}},[t._v("重新上传")])],1),t.loadModal?i("v-uni-view",{staticClass:"pop-ups",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelBtn.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"load-modal"},[i("v-uni-image",{attrs:{src:"/static/logding-logo.png",mode:"aspectFit"}}),i("v-uni-view",{staticClass:"gray-text"},[t._v(t._s(t.progressText))]),i("v-uni-view",{staticClass:"gray-text"},[t._v(t._s(t.submitText))])],1)],1):t._e()],1)},o=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"46ed":function(t,e,i){"use strict";var n=i("2fb9"),r=i.n(n);r.a},"4c8b":function(t,e,i){"use strict";var n=i("ee27");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("c964"));function o(t,e){return a.apply(this,arguments)}function a(){return a=(0,r.default)(regeneratorRuntime.mark((function t(e,i){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:if(n=t.sent,r=n.orientation,console.log(r),0,60,"ios"!==i){t.next=12;break}0,25,t.next=25;break;case 12:t.t0=r,t.next="up"===t.t0?15:"down"===t.t0?17:"right"===t.t0?19:"left"===t.t0?21:23;break;case 15:return 0,t.abrupt("break",25);case 17:return 180,t.abrupt("break",25);case 19:return 90,t.abrupt("break",25);case 21:return 270,t.abrupt("break",25);case 23:return 0,t.abrupt("break",25);case 25:return t.abrupt("return",new Promise((function(t,e){})));case 26:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function s(t){return new Promise((function(t,e){}))}var c=o;e.default=c},"52de":function(t,e,i){"use strict";var n=i("ee27");i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("c964")),o=n(i("4c8b")),a={data:function(){return{progressText:"",submitText:"",loadModal:!1,isClick:!0,sideRightImage:"/static/BodyPosture/back.png",sideLeftImage:"/static/BodyPosture/side.png",sideEndImage:"/static/BodyPosture/JustEnd.png",imageList:[{imgUrl:"",imageUrl:"",imgfile:!1,buttonfile:!0},{imgUrl:"",imageUrl:"",imgfile:!1,buttonfile:!0},{imgUrl:"",imageUrl:"",imgfile:!1,buttonfile:!0},{imgUrl:"",imageUrl:"",imgfile:!1,buttonfile:!0}],token:uni.getStorageSync("token"),userId:uni.getStorageSync("user_Id"),id:null}},onLoad:function(t){this.id=t.id,this.name=t.name},methods:{cancelBtn:function(){this.loadModal=!1},ToUrl:function(){uni.navigateTo({url:"/pages/body-posture/shooting-instructions"})},chooseImg:function(t){var e=this,i=t;0==i&&(this.direction="front"),1==i&&(this.direction="back"),2==i&&(this.direction="left"),3==i&&(this.direction="right"),this.isClick=!1,setTimeout((function(){e.isClick=!0}),1e3),uni.chooseImage({sizeType:["original"],sourceType:["camera"],count:1,success:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"",n.tempFiles[0].size,r=n.tempFilePaths[0],o="",o=r,e.imageList[i].imgfile=!0,e.imageList[i].buttonfile=!1,e.loadModal=!0,e.submitText="上传中...",uni.uploadFile({url:e.$webUrl+e.$uploadPosture,filePath:o,header:{token:""+e.token},fileType:"image",name:"file",success:function(t){var n=JSON.parse(t.data.toString());if(0==n.code){if(e.loadModal=!1,e.$set(e.imageList[i],"imageUrl",n.filename),""==e.imageList[i].imageUrl)return void uni.showToast({icon:"none",duration:3e3,title:"上传失败，请重新上传"});e.$set(e.imageList[i],"imgUrl",o)}else utils.notLogin(n)},fail:function(t){e.imageList[i].imgfile=!1,e.imageList[i].buttonfile=!0,e.imageList[i].imgUrl=""},complete:function(){e.loadModal=!1}});case 10:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()})},compressImageHandler:function(t){return(0,r.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getSystemInfoSync(),e.next=3,(0,o.default)(t,i.platform);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},close:function(t){this.imageList[t].imgUrl="",this.imageList[t].imageUrl="",this.imageList[t].imgfile=!1,this.imageList[t].buttonfile=!0},obtainCode:function(){var t=this;""!=this.imageList[0].imageUrl?""!=this.imageList[1].imageUrl?""!=this.imageList[2].imgUrl||""!=this.imageList[3].imgUrl?(this.loadModal=!0,this.progressText="",this.submitText="提交中...",uni.request({url:this.$webUrl+this.$NewUpdate,header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},data:{id:this.id,userId:this.userId,name:this.name,frontPicture:this.imageList[0].imageUrl,backPicture:this.imageList[1].imageUrl,leftPicture:this.imageList[2].imageUrl},method:"POST",success:function(e){console.log(e),0===e.data.code&&(t.closeImg(),t.loadModal=!1,t.progressText="",t.submitText=".",uni.setStorageSync("PayReturn","PayReturn"),uni.switchTab({url:"/pages/body-posture/body-posture"}))},fail:function(t){uni.showToast({title:"网络连接不稳定，请检查网络",duration:3e3,icon:"none"})}})):uni.showToast({icon:"none",duration:3e3,title:"左右请选一张上传"}):uni.showToast({icon:"none",duration:3e3,title:"请上传背面照"}):uni.showToast({icon:"none",duration:3e3,title:"请上传正面照"})},closeImg:function(){for(var t=0;t<this.imageList.length;t++)this.imageList[t].imgUrl="",this.imageList[t].imageUrl="",this.imageList[t].imgfile=!1,this.imageList[t].buttonfile=!0;uni.removeStorageSync("up_Success")}}};e.default=a},"96cf":function(t,e){!function(e){"use strict";var i,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var d="suspendedStart",f="suspendedYield",h="executing",g="completed",v={},p={};p[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==n&&r.call(y,a)&&(p=y);var w=k.prototype=x.prototype=Object.create(p);P.prototype=w.constructor=k,k.constructor=P,k[c]=P.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(T.prototype),T.prototype[s]=function(){return this},l.AsyncIterator=T,l.async=function(t,e,i,n){var r=new T(b(t,e,i,n));return l.isGeneratorFunction(e)?r:r.next().then((function(t){return t.done?t.value:r.next()}))},C(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},l.values=S,U.prototype={constructor:U,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=i),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),I(i),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;I(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=i),v}}}function b(t,e,i,n){var r=e&&e.prototype instanceof x?e:x,o=Object.create(r.prototype),a=new U(n||[]);return o._invoke=_(t,i,a),o}function L(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(n){return{type:"throw",arg:n}}}function x(){}function P(){}function k(){}function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function T(t){function e(i,n,o,a){var s=L(t[i],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var i;function n(t,n){function r(){return new Promise((function(i,r){e(t,n,i,r)}))}return i=i?i.then(r,r):r()}this._invoke=n}function _(t,e,i){var n=d;return function(r,o){if(n===h)throw new Error("Generator is already running");if(n===g){if("throw"===r)throw o;return j()}i.method=r,i.arg=o;while(1){var a=i.delegate;if(a){var s=B(a,i);if(s){if(s===v)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===d)throw n=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=h;var c=L(t,e,i);if("normal"===c.type){if(n=i.done?g:f,c.arg===v)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=g,i.method="throw",i.arg=c.arg)}}}function B(t,e){var n=t.iterator[e.method];if(n===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,B(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=L(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=i,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a00c:function(t,e,i){"use strict";i.r(e);var n=i("32d8"),r=i("023a");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("46ed");var a,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"9295102c",null,!1,n["a"],a);e["default"]=c.exports},c964:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return r}));i("d3b7"),i("e6cf");function n(t,e,i,n,r,o,a){try{var s=t[o](a),c=s.value}catch(u){return void i(u)}s.done?e(c):Promise.resolve(c).then(n,r)}function r(t){return function(){var e=this,i=arguments;return new Promise((function(r,o){var a=t.apply(e,i);function s(t){n(a,r,o,s,c,"next",t)}function c(t){n(a,r,o,s,c,"throw",t)}s(void 0)}))}}}}]);