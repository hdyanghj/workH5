(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-account-cancellation-agreement"],{"190f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,i=getCurrentPages();this.route=i[i.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var i,e=this,n=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){e.systemType=t}}),i="ios"==this.systemType.platform?2:1;var a={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:n,platform:i,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:a,success:function(t){0==t.data.code&&(clearInterval(e.Timer),e.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};i.default=n},"1dca":function(t,i,e){"use strict";e.r(i);var n=e("50ee"),a=e("7003");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);var u,o=e("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0f5ec893",null,!1,n["a"],u);i["default"]=r.exports},"1ff1":function(t,i,e){"use strict";var n=e("c721"),a=e.n(n);a.a},"3f3f":function(t,i,e){"use strict";e.r(i);var n=e("97ae"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"45dd":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".wrap[data-v-7152c1e0]{margin-bottom:%?30?%}.title1[data-v-7152c1e0]{margin-bottom:%?40?%;font-size:%?40?%;font-weight:500;color:#03b2ca;line-height:%?56?%}.txt[data-v-7152c1e0]{font-size:%?28?%;font-weight:500;color:#000;line-height:%?40?%;word-break:break-all}.txt2[data-v-7152c1e0]{font-size:%?28?%;font-weight:500;color:#000;line-height:%?40?%;padding-left:%?30?%}.title2[data-v-7152c1e0]{margin:%?30?% 0;font-size:%?32?%;font-weight:500;color:#03b2ca;line-height:%?44?%}.line[data-v-7152c1e0]{padding:%?10?% 0}.table[data-v-7152c1e0]{border:1px solid\n}.tr[data-v-7152c1e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;border-bottom:1px solid}.tr[data-v-7152c1e0]:last-child{border:0}.td[data-v-7152c1e0]{padding:%?6?%;font-size:%?28?%;border-right:1px solid}.td[data-v-7152c1e0]:first-child{width:30%}.td[data-v-7152c1e0]:last-child{-webkit-box-flex:1;-webkit-flex:1;flex:1;border:0}.font-bold[data-v-7152c1e0]{font-weight:700}",""]),t.exports=i},"50ee":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view")},s=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}))},7003:function(t,i,e){"use strict";e.r(i);var n=e("190f"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},7358:function(t,i,e){"use strict";var n={buryingpoint:e("1dca").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"title1"},[t._v("帐号注销协议")]),e("v-uni-view",{staticClass:"txt"},[t._v("您在申请注销流程中点击同意前，应当认真阅读《帐号注销协议》（以下简称“本协议”）。"),e("v-uni-text",{staticClass:"font-bold"},[t._v("特别提醒您，当您成功提交注销申请后，即表示您已充分阅读、理解并接受本协议的全部内容。")]),t._v("阅读本协议的过程中，如果您不同意相关任何条款，请您立即停止帐号注销程序。如您对本协议有任何疑问，可通App意见反馈专区或邮箱：service@qilinsports.com联系我们。")],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("1、如果您仍欲继续注销帐号，我们的官方渠道为您提供了在线的注销功能（如手机端体语App的注销功能路径为：【我的】-【账户设置】-【账号与安全】-【注销账号】），您可以按照页面操作指引进行在线注销。当然，您也可以给我们发送邮件（邮箱：service@qilinsports.com）联系工作人员进行账号注销。")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("2、您应确保您有权决定该帐号的注销事宜，不侵犯任何第三方的合法权益，如因此引发任何争议，由您自行承担。")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("3、"),e("v-uni-text",{staticClass:"font-bold"},[t._v("您理解并同意，账号注销后我们无法协助您重新恢复前述服务。请您在申请注销前自行备份您欲保留的本帐号信息和数据，并妥善处理体语账号下所有资金和交易问题。")])],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("4、帐号注销后，已绑定的手机号、邮箱、微信账号将会被解除绑定。")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("5、注销帐号后，您将无法再使用本帐号，也将无法找回您帐号中及与帐号相关的任何内容或信息，包括但不限于：")]),e("v-uni-view",{staticClass:"txt"},[t._v("（1）您将无法继续使用该帐号进行登录；")]),e("v-uni-view",{staticClass:"txt"},[t._v("（2）您帐号的个人资料和历史信息都将无法找回；")]),e("v-uni-view",{staticClass:"txt"},[t._v("（3）"),e("v-uni-text",{staticClass:"font-bold"},[t._v("您理解并同意，注销帐号后，您曾获得的虚拟货币将视为您自愿、主动放弃，无法继续使用；虚拟交易等虚拟财产信息等将全部清除。")]),t._v("由此引起一切纠纷由您自行处理，我们不承担任何责任。")],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("6、您申请注销的体语账号应当不存在任何由于该账号被注销而导致的未了结的合同关系与其他基于该账号的存在而产生或维持的权利义务，及本公司认为注销该账号会由此产生未了结的权利义务而产生纠纷的情况。\n在帐号注销期间，如果您的帐号被他人投诉、被国家机关调查或者正处于诉讼、仲裁程序中，我们有权自行终止您的帐号注销程序，而无需另行得到您的同意。")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("7、请注意，注销您的帐号并不代表本帐号注销前的帐号行为和相关责任得到豁免或减轻。")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("8、本协议未尽事宜，参照《隐私政策》、《用户协议》执行。")]),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"txt"},[t._v("9、本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。因本协议产生之争议，双方尽最大诚意进行友好协商，如果双方不能协商一致，均应依照中华人民共和国法律予以处理，并由北京市西城区人民法院管辖。")]),e("v-uni-view",{staticClass:"txt",staticStyle:{padding:"80upx 0 0 360upx"}},[t._v("北京体语科技有限公司"),e("br"),t._v("二零二零年一月六日")]),e("v-uni-text",{staticClass:"font-bold"}),e("buryingpoint",{ref:"buryingpoint"})],1)},s=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}))},"97ae":function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("1dca")),s={components:{buryingpoint:a.default},data:function(){return{}},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onHide:function(){this.$refs.buryingpoint.buryingpoint("注销协议")},onUnload:function(){this.$refs.buryingpoint.buryingpoint("注销协议")},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},methods:{}};i.default=s},c721:function(t,i,e){var n=e("45dd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("9c0d1088",n,!0,{sourceMap:!1,shadowMode:!1})},db6c:function(t,i,e){"use strict";e.r(i);var n=e("7358"),a=e("3f3f");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("1ff1");var u,o=e("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"7152c1e0",null,!1,n["a"],u);i["default"]=r.exports}}]);