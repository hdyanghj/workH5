(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-examination-testmain~pages-center-examination-testmain-share"],{"08d9":function(t,e,r){"use strict";r("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{testid:String,testtitle:String,testname:String,testpeople:String,testdate:String,testsex:[String,Number],testage:[String,Number]},data:function(){return{orgtext:""}},mounted:function(){var t=this;""==this.testid?(console.log("没id"),this.orgtext=uni.getStorageSync("orgData")):(console.log("有id"),uni.request({url:this.$webUrl+this.$getDeptByTestId,data:{testId:this.testid},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e),t.orgtext=e.data.data.deptName}}))},methods:{}};e.default=i},"2e01":function(t,e,r){"use strict";r.r(e);var i=r("cffb"),n=r("6529");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("f100");var a,c=r("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"768abc33",null,!1,i["a"],a);e["default"]=s.exports},"496a":function(t,e,r){var i=r("ee75");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("18d3ecd0",i,!0,{sourceMap:!1,shadowMode:!1})},"590f":function(t,e,r){t.exports=r.p+"static/img/report.23540c71.png"},6529:function(t,e,r){"use strict";r.r(e);var i=r("08d9"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},7461:function(t,e){t.exports="data:image/png;base64,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"},"96cf":function(t,e){!function(e){"use strict";var r,i=Object.prototype,n=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=m;var f="suspendedStart",p="suspendedYield",v="executing",h="completed",g={},d={};d[a]=function(){return this};var w=Object.getPrototypeOf,A=w&&w(w(S([])));A&&A!==i&&n.call(A,a)&&(d=A);var b=B.prototype=x.prototype=Object.create(d);j.prototype=b.constructor=B,B.constructor=j,B[s]=j.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,B):(t.__proto__=B,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},E(C.prototype),C.prototype[c]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,r,i){var n=new C(m(t,e,r,i));return l.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},E(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},l.values=S,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return c.type="throw",c.arg=t,e.next=i,n&&(e.method="next",e.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;L(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:S(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=r),g}}}function m(t,e,r,i){var n=e&&e.prototype instanceof x?e:x,o=Object.create(n.prototype),a=new G(i||[]);return o._invoke=H(t,r,a),o}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(i){return{type:"throw",arg:i}}}function x(){}function j(){}function B(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(r,i,o,a){var c=y(t[r],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var r;function i(t,i){function n(){return new Promise((function(r,n){e(t,i,r,n)}))}return r=r?r.then(n,n):n()}this._invoke=i}function H(t,e,r){var i=f;return function(n,o){if(i===v)throw new Error("Generator is already running");if(i===h){if("throw"===n)throw o;return T()}r.method=n,r.arg=o;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var s=y(t,e,r);if("normal"===s.type){if(i=r.done?h:p,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=h,r.method="throw",r.arg=s.arg)}}}function k(t,e){var i=t.iterator[e.method];if(i===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=y(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c964:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return n}));r("d3b7"),r("e6cf");function i(t,e,r,i,n,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(i,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))}}},cffb:function(t,e,r){"use strict";var i,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"rip-one"},[r("v-uni-view",{staticClass:"rip-tishi"},[t._v("此测评结果不作为医疗诊断依据")]),r("v-uni-view",[r("v-uni-view",{staticClass:"rip-bgi"},[r("v-uni-image",{attrs:{src:"http://public.qilinsports.com/picture/coverpage/jiance-index-logo.png",mode:"aspectFit"}})],1),r("v-uni-view",{staticClass:"rip-title"},[t._v("体语健康测评管理系统")]),r("v-uni-view",{staticClass:"rip-report-name"},[t._v(t._s(t.testtitle))]),r("v-uni-view",{staticClass:"rip-people-info"},[r("v-uni-view",[t._v("姓名：")]),r("v-uni-view",{staticClass:"rip-people-text"},[t._v(t._s(t.testname))])],1),r("v-uni-view",{staticClass:"rip-people-info"},[r("v-uni-view",[t._v("性别：")]),r("v-uni-view",{staticClass:"rip-people-text"},[t._v(t._s(t.testsex))])],1),t.testage?r("v-uni-view",{staticClass:"rip-people-info"},[r("v-uni-view",[t._v("年龄：")]),r("v-uni-view",{staticClass:"rip-people-text"},[t._v(t._s(t.testage))])],1):t._e(),r("v-uni-view",{staticClass:"rip-date"},[t._v("单位名称：北京体语科技有限公司"),r("br"),t._v("测评日期："+t._s(t.testdate))])],1)],1),r("v-uni-view",{staticClass:"rip-two"},[r("v-uni-view",{staticClass:"rip-two-main"},[r("v-uni-view",{staticClass:"rip-two-title"},[t._v("体语健康测评管理系统简介")]),r("v-uni-view",{staticClass:"introduction"},[r("v-uni-view",[t._v("体语，是解读身体语言的科学。身体语言有两种表现形式：一是内在表现，如脏器发出的信号、气血运行发出的信号等。二是外在表现，如身体姿态、功能状况、运动能力等。而身体语言的外在表现，实际上是内在信号的外显。体姿作为人体语言最外显的部分，能够透露出大量的信息。")]),r("v-uni-view",[t._v("国内权威机构统计，八成青少年儿童体姿不良。走路中探颈、驼背46.1%，上体晃动27.5%，站姿头位不正41.2%，双肩不平38.3%，坐姿塌腰、弯背23.6%，X型腿、O型腿17.7%，各项均良好者仅有12.8%。[1]")]),r("v-uni-view",[t._v("而体姿不良将直接或间接引发肩/颈/背/胸等疼痛、头晕、手臂麻木、肥胖、平衡下降、心慌、心跳加速、心肺功能受损、便秘，甚至牙齿咬合不齐、视力不良等多种问题。")]),r("v-uni-view",[t._v("但是，很多人对体姿问题视而不见，甚至没有概念。这不仅影响孩子的生长发育，还可能造成本不应有的损害。而传统的人体姿态评估，严重受时间、场地、人员、资金限制，只能是少数有钱人的特权，不能为广大人民群众提供帮助。")]),r("v-uni-view",[t._v("体语科技认为，每一个人，不分贫富，不分地域，都应该得到相同的基本健康帮助。用科技实现健康平等，是我们追求的目标。")]),r("v-uni-view",[t._v("为了帮助每一个人解决体姿问题，我们历时8年研发与实践，涵盖从2.5岁到60岁年龄段，利用深度卷积神经网络模型开发出体姿人工智能测评仪。它从测评到评估，最后到解决方案，全部基于人工智能和现代科技实现。")]),r("v-uni-view",[t._v("体语®体姿人工智能测评仪集测试、评估、干预“三位一体”，突破时、空、人、钱限制，让每一个人都能测得起，用得好。它由体姿测评和辅助测评两大体系构成，涵盖体姿、生长发育、身高达标、体重达标、视力、营养、功能、体能、骨龄、幼儿体质、小学生体质、中考体育、高中生体质、成人体质共计14个测评项目。")]),r("v-uni-view",[t._v("体语健康测评管理系统是一套由体姿人工智能测评仪、硬件、软件、APP等共同组成的、完整度高、功能齐备的人工智能健康测评及解决方案体系，惠及每一位珍视健康的人。")]),r("v-uni-view",[t._v("早发现，早干预，少遗憾，再无忧。")]),r("v-uni-view",[t._v("体语科技，用科技实现健康平等。")])],1),r("v-uni-view",{staticClass:"rip-two-split"},[t._v("[1]《8成青少年形体不良 常见探颈、驼背、窝肩》，http://health.sohu.com/20070427/n249741662.shtml")]),r("v-uni-view",{staticClass:"rip-two-footer"},[t._v("北京体语科技有限公司")])],1)],1)],1)},o=[];r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}))},ee75:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,".introduction[data-v-768abc33]{padding:%?30?% 0}.introduction uni-view[data-v-768abc33]{letter-spacing:%?2?%;line-height:1.5;margin-bottom:%?24?%}.introduction p sup[data-v-768abc33]{display:inline-block}.rip-tishi[data-v-768abc33]{width:90%;margin-top:%?120?%;text-align:left;font-size:%?24?%;letter-spacing:1px;color:#fff;text-align:left}.rip-one[data-v-768abc33]{width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-image:url(http://public.qilinsports.com/picture/coverpage/rip-bgi.png);background-repeat:no-repeat;background-size:cover;background-color:#fff}.rip-two[data-v-768abc33]{width:100%;font-size:%?26?%;color:#3e495c;line-height:1.5}.rip-two .rip-two-main[data-v-768abc33]{padding:%?50?%}.rip-bgi[data-v-768abc33]{text-align:center}.rip-bgi uni-image[data-v-768abc33]{width:%?140?%;height:%?94?%;margin-top:%?200?%}.rip-title[data-v-768abc33]{color:#fff;font-size:%?30?%;margin:%?28?% %?0?% %?60?% %?0?%;text-align:center}.rip-report-name[data-v-768abc33]{color:#fff;font-size:%?36?%;text-align:center;margin-bottom:%?200?%}.rip-people-info[data-v-768abc33]{display:-webkit-box;display:-webkit-flex;display:flex;color:#fff;font-size:%?28?%;margin:%?0?% %?80?% %?20?%}.rip-people-info .rip-people-text[data-v-768abc33]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;border-bottom:1px solid hsla(0,0%,100%,.75)}.rip-date[data-v-768abc33]{font-size:%?24?%;color:#fff;line-height:%?44?%;text-align:center;margin-top:%?120?%}.rip-two-footer[data-v-768abc33]{text-align:right;margin-top:%?60?%}.rip-two-title[data-v-768abc33]{text-align:center;font-size:%?36?%;font-weight:700}",""]),t.exports=e},f100:function(t,e,r){"use strict";var i=r("496a"),n=r.n(i);n.a}}]);