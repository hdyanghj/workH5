(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-examination-testmain"],{"0bf09":function(t,e,i){"use strict";var a=i("ee27");i("4160"),i("c975"),i("a9e3"),i("b680"),i("d3b7"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var s=a(i("c964")),n=(a(i("50ea")),a(i("2e01"))),o=a(i("bb2e")),r=a(i("7cf6")),l=a(i("0a68")),c=a(i("ddda")),u=a(i("1dca")),d={components:{buryingpoint:u.default,cover:n.default,ewm:o.default,share:c.default},data:function(){return{HQBtn:!0,showPopupBottom:!1,shareObj:{},title:"",bodyTitle:null,name:"",age:"",sex:"",widthText:"",heightText:"",hwScore:"",reportData:[],token:"",note:"学生标准：90.0分及以上为优秀，80.0～89.9分为良好，60.0～79.9分为及格，60以下为不及格。",bodyNorm:"",dateText:"",testId:"",scoreShow:!0,listClass:"list-class",categories:[],series:[{name:"测试雷达图",data:[]}],cWidth:"",cHeight:"",pixelRatio:1,fontSize:"",testname:"",purposeList:null,project:!1,totalScore:0,overviewText:"",addsource:"",testText:null,testTextList:[],testid:"",platform:""}},onNavigationBarButtonTap:function(t){0==t.index?uni.navigateBack({delta:1}):this.shareBtn()},onLoad:function(t){this.testId=t.testId,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(600),this.fontSize=uni.upx2px(24),"undefined"!=typeof t.token?this.token=t.token:this.token=uni.getStorageSync("token"),"undefined"!=typeof t.platform&&(this.platform=t.platform),this.detail()},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onHide:function(){this.$refs.buryingpoint.buryingpoint("体测详版报告")},onUnload:function(){this.$refs.buryingpoint.buryingpoint("体测详版报告")},onBackPress:function(){if(1==this.showPopupBottom)return this.showPopupBottom=!1,!0},methods:{urlHQBtn:function(){var t=null;this.title.indexOf("体能")>-1&&(t="体能增强方案"),this.title.indexOf("体质")>-1&&(t="体质增强方案"),uni.navigateTo({url:"/pages/center/info/health-questionnaire?body="+t+"&testId="+this.testId+"&token="+this.token+"&platform="+this.platform})},hidePopup:function(){this.showPopupBottom=!1},shareBtn:function(){var t;this.title.indexOf("体能")>-1&&(t=13),this.title.indexOf("体质")>-1&&(t=2),this.hidePopup(),this.shareObj["href"]=this.$h5Url+"/pages/center/examination/testmain-share?testId="+this.testId,this.shareObj["title"]=this.title,this.shareObj["summary"]="该报告显示个人情况，以及身体是否达到国家平均水平。",this.shareObj["imageUrl"]="/static/img/tizhi-baogao.png",this.shareObj["id"]=this.testId,this.shareObj["module"]=t,this.showPopupBottom=!0},loadCharts:function(t,e,i){var a=i<5?5:i;new l.default({$this:this,canvasId:"canvasRadar",type:"radar",fontSize:this.fontSize,legend:!0,background:"#FFFFFF",pixelRatio:this.pixelRatio,animation:!0,dataLabel:!0,categories:t,series:e,width:this.cWidth*this.pixelRatio,height:this.cHeight*this.pixelRatio,extra:{radar:{max:a}}})},detail:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.request({url:t.$webUrl+t.$ModeList,data:{testId:t.testId},header:{"content-type":"application/x-www-form-urlencoded",token:""+t.token},success:function(e){var i;0==e.data.code?function(){var a=t,s=e.data.data;s.forEach((function(e,i){"身高"!=e.itemname&&"体重"!=e.itemname&&("睁眼站立（单腿支撑）"==e.itemname&&(e.itemname="睁眼站立"),t.categories.push(e.itemname),t.series[0].data.push(e.assessgrade))})),t.loadCharts(t.categories,t.series,Math.max.apply(null,t.series[0].data)),a.name=s[0].membername,a.sex=s[0].membersex,a.age=s[0].memberage;var n=s[0].testid;a.dateText=n.substring(0,4)+"-"+n.substring(4,6)+"-"+n.substring(6,8);var o=s[0].modelname.substring(0,4);"国民体质"!=o&&"国家学生"!=o&&"中考体育"!=o||(i=s[0].AssessGroup,-1!==i.indexOf("儿童")&&(t.title="幼儿体质测评报告",t.testname="幼儿体质"),-1!==i.indexOf("小学")&&(t.title="小学生体质测评报告",t.testname="小学生体质"),-1!==i.indexOf("初中")&&(t.title="中考体育体质测评报告",t.testname="中考体育"),-1!==i.indexOf("高中")&&(t.title="高中生体质测评报告",t.testname="高中生体质"),-1!==i.indexOf("大学")&&(t.title="大学生体质测评报告",t.testname="大学生体质"),-1!==i.indexOf("壮年")&&(t.title="成人体质测评报告",t.testname="成人体质")),"幼儿体能"!=o&&"国家体育"!=o||(a.testTextList=["●  优秀：测试结果为优秀，说明此项身体素质能力较好；如想长期保持，还需进行相关训练。","●  良好：测试结果为良好，说明此项身体素质能力一般；离优秀还有一定距离，需要进行相关训练。","●  及格：测试结果为及格，说明此项身体素质能力较差，及其需要进行相关训练。","●  不及格：测试结果为不及格，说明此项身体素质能力很差，迫切需要进行相关训练。"]),"国家体育"!=o&&"幼儿体能"!=o||(t.project=!0,a.title="国家体育锻炼测评报告",a.testText="体能",a.age>=3&&a.age<=6&&(a.title="幼儿体能增强测评报告",a.bodyTitle="幼儿体能增强",t.testname="幼儿体能增强"),a.age>=6&&a.age<=12&&(a.title="小学生体能增强测评报告",a.bodyTitle="小学生体能增强",t.testname="小学生体能增强"),a.age>=12&&a.age<=17&&(a.title="初高中体能增强测评报告",a.bodyTitle="初高中体能增强",t.testname="初高中体能增强"),a.age>=18&&a.age<=59&&(a.title="成人体能增强测评报告",t.testname="成人体能增强",a.age>=18&&a.age<=24&&(a.bodyTitle="青年体能增强"),a.age>=25&&a.age<=44&&(a.bodyTitle="壮年一组体能增强"),a.age>=45&&a.age<=59&&(a.bodyTitle="壮年二组体能增强")),a.purposeList=a.get_request(a.bodyTitle)),console.log(s);for(var r=function(t){if(null==s[t].assessvalue?a.$set(s[t],"testStatus",!0):a.$set(s[t],"testStatus",!1),"身高"==s[t].itemname)a.heightText=s[t].assessvalue;else if("体重"==s[t].itemname)a.widthText=s[t].assessvalue,a.hwScore=s[t].assessgrade;else{var e=[{classBg:"huise"},{classBg:"huise"},{classBg:"huise"},{classBg:"huise"},{classBg:"huise"}];if("中考体育"==o){a.scoreShow=!1;for(var i=0;i<s.length;i++)if("学校过程性考试"==s[t].itemname)s[t].lookOver="";else if(null!=s[t].assesslevel&&"0%"==s[t].assesslevel)a.$set(s[t],"assesspurpose","请继续保持");else{var n="距离满分差"+s[t].assesslevel;a.$set(s[t],"assesspurpose",n)}a.$set(s[t],"assesslevel","")}if(s[t].scoreIcon=e,null!=a.totalScore&&("幼儿体质测评报告"==a.title||"成人体质测评报告"==a.title||"国家体育"==o||"小学生体质测评报告"==a.title||"高中生体质测评报告"==a.title||"大学生体质测评报告"==a.title))if(null==s[t].assessgrade)a.totalScore=null;else{var r=Number(s[t].assessgrade);a.totalScore=a.totalScore+r}if("小学生体质测评报告"!=a.title&&"高中生体质测评报告"!=a.title&&"大学生体质测评报告"!=a.title||a.studentEvaluation(),"国民体质"==o||"幼儿体能"==o){if("幼儿体质测评报告"==a.title&&a.toddlerEvaluation(),"成人体质测评报告"==a.title&&(a.age>=20&&a.age<=39&&a.adultEvaluationYi(),a.age>=45&&a.age<=59&&a.adultEvaluationEr()),"幼儿体能"==o&&a.purposeList.then((function(e){for(var i=e.data,n=0;n<i.length;n++)s[t].itemname==i[n].dictValue&&a.$set(s[t],"assesspurpose",i[n].remark)})),1==s[t].assessgrade)for(var l=0;l<1;l++)a.$set(s[t].scoreIcon[l],"classBg","hongse");if(2==s[t].assessgrade)for(var c=0;c<2;c++)a.$set(s[t].scoreIcon[c],"classBg","huangse");if(3==s[t].assessgrade)for(var u=0;u<3;u++)a.$set(s[t].scoreIcon[u],"classBg","lvse");if(4==s[t].assessgrade)for(var d=0;d<4;d++)a.$set(s[t].scoreIcon[d],"classBg","lanse");if(5==s[t].assessgrade)for(var v=0;v<5;v++)a.$set(s[t].scoreIcon[v],"classBg","zise");if("幼儿体能增强"==a.bodyTitle&&0==s[t].assessgrade)for(var f=0;f<5;f++)a.$set(s[t].scoreIcon[f],"classBg","huise"),a.$set(s[t],"assesslevel","差")}else if("国家体育"==o){if(a.evaluation(),a.purposeList.then((function(e){for(var i=e.data,n=0;n<i.length;n++)s[t].itemname==i[n].dictValue&&a.$set(s[t],"assesspurpose",i[n].remark)})),"不及格"==s[t].assesslevel)if(0==s[t].assessgrade)for(var h=0;h<1;h++)a.$set(s[t].scoreIcon[h],"classBg","hongse"),s[t].assesslevel;else for(var g=0;g<2;g++)a.$set(s[t].scoreIcon[g],"classBg","huangse");if("及格"==s[t].assesslevel)for(var p=0;p<3;p++)a.$set(s[t].scoreIcon[p],"classBg","lvse");if("良好"==s[t].assesslevel)for(var w=0;w<4;w++)a.$set(s[t].scoreIcon[w],"classBg","lanse");if("优秀"==s[t].assesslevel)for(var m=0;m<5;m++)a.$set(s[t].scoreIcon[m],"classBg","zise")}else{if("不及格"==s[t].assesslevel)for(var b=0;b<1;b++)a.$set(s[t].scoreIcon[b],"classBg","hongse"),a.$set(s[t],"classColor","hscolor");if("及格"==s[t].assesslevel)for(var x=0;x<2;x++)a.$set(s[t].scoreIcon[x],"classBg","huangse");if("低体重"==s[t].assesslevel)for(var y=0;y<2;y++)a.$set(s[t].scoreIcon[y],"classBg","hongse");if("良好"==s[t].assesslevel||"正常"==s[t].assesslevel)for(var T=0;T<3;T++)a.$set(s[t].scoreIcon[T],"classBg","lvse");if("优秀"==s[t].assesslevel)for(var k=0;k<4;k++)a.$set(s[t].scoreIcon[k],"classBg","lanse");if("超重"==s[t].assesslevel)for(var _=0;_<4;_++)a.$set(s[t].scoreIcon[_],"classBg","huangse");if("满分"==s[t].assesslevel)for(var S=0;S<5;S++)a.$set(s[t].scoreIcon[S],"classBg","zise");if("肥胖"==s[t].assesslevel)for(var $=0;$<5;$++)a.$set(s[t].scoreIcon[$],"classBg","hongse")}"分"==s[t].itemunitzh&&(a.$set(s[t],"assessgrade",""),a.$set(s[t],"assesslevel","")),a.reportData.push(s[t])}"幼儿体能测试"==s[t].modelname?a.bodyNorm="幼儿发展指南与多年实践经验总结":-1!=s[t].modelname.indexOf("国民体质测定标准")?a.bodyNorm="国民体质测定标准（国家体育总局颁布）":a.bodyNorm=s[t].modelname},l=0;l<s.length;l++)r(l);/^\d+$/.test(a.totalScore)||(a.totalScore=a.totalScore.toFixed(1))}():r.default.notLogin(e.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}});case 1:case"end":return e.stop()}}),e)})))()},evaluation:function(){null!=this.totalScore?(this.totalScore>=400&&(this.overviewText="总分数达到400（含）分以上，测试综合成绩为优秀；说明整体的运动能力较好，希望长期保持。"),this.totalScore>=320&&this.totalScore<=399&&(this.overviewText="总分数达到320~399分，测试综合成绩为良好；说明整体的运动能力一般，还需要进行相关训练，提升运动能力。"),this.totalScore>=200&&this.totalScore<=319&&(this.overviewText="总分数达到200~319分，测试综合成绩为及格；说明整体的运动能力较差，很需要进行相关训练，提高运动能力。"),this.totalScore<=199&&(this.overviewText="总分数达到199（含）分以下，测试综合成绩为不及格；说明整体的运动能力很差，急需进行相关训练，提高运动能力。")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},toddlerEvaluation:function(){null!=this.totalScore?(this.totalScore>31&&(this.overviewText="综合成绩为一级（优秀）"),this.totalScore>=28&&this.totalScore<=31&&(this.overviewText="综合成绩为二级（良好）"),this.totalScore>=20&&this.totalScore<=27&&(this.overviewText="综合成绩为三级（合格）"),this.totalScore<20&&(this.overviewText="综合成绩为四级（不合格）")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},studentEvaluation:function(){null!=this.totalScore?(this.totalScore>90&&(this.overviewText="90.0分及以上为优秀"),this.totalScore>=80&&this.totalScore<=89.9&&(this.overviewText="80.0～89.9分为良好"),this.totalScore>=60&&this.totalScore<=79.9&&(this.overviewText="60.0～79.9分为及格"),this.totalScore<59.9&&(this.overviewText="59.9分及以下为不及格")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},adultEvaluationYi:function(){null!=this.totalScore?(this.totalScore>33&&(this.overviewText="综合成绩为一级（优秀）"),this.totalScore>=30&&this.totalScore<=33&&(this.overviewText="综合成绩为二级（良好）"),this.totalScore>=23&&this.totalScore<=29&&(this.overviewText="综合成绩为三级（合格）"),this.totalScore<23&&(this.overviewText="综合成绩为四级（不合格）")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},adultEvaluationEr:function(){null!=this.totalScore?(this.totalScore>26&&(this.overviewText="综合成绩为一级（优秀）"),this.totalScore>=24&&this.totalScore<=26&&(this.overviewText="综合成绩为二级（良好）"),this.totalScore>=18&&this.totalScore<=23&&(this.overviewText="综合成绩为三级（合格）"),this.totalScore<18&&(this.overviewText="综合成绩为四级（不合格）")):this.overviewText="有测评项目数据未填写，无法给出综合成绩及评价。"},get_request:function(t){var e=this;return(0,s.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,new Promise((function(i,a){uni.request({url:e.$webUrl+e.$getDictsInfo,data:{dictType:"tineng_test_purpose",dictName:t},success:function(t){i(t.data)},fail:function(t){a(t)}})}));case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}}),i)})))()}}};e.default=d},1424:function(t,e,i){"use strict";var a=i("f391"),s=i.n(a);s.a},"190f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,e=getCurrentPages();this.route=e[e.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var e,i=this,a=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){i.systemType=t}}),e="ios"==this.systemType.platform?2:1;var s={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:a,platform:e,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:s,success:function(t){0==t.data.code&&(clearInterval(i.Timer),i.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};e.default=a},"1dca":function(t,e,i){"use strict";i.r(e);var a=i("50ee"),s=i("7003");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"0f5ec893",null,!1,a["a"],o);e["default"]=l.exports},"1f21":function(t,e,i){"use strict";i.r(e);var a=i("5cc8"),s=i("ffc4");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("e4fb");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"8042357a",null,!1,a["a"],o);e["default"]=l.exports},2161:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-mask[data-v-2df39949]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-2df39949]{position:fixed;bottom:0;z-index:999;background-color:#fff;box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-bottom[data-v-2df39949]{left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.share-icon[data-v-2df39949]{width:%?80?%;height:%?80?%}.share-font[data-v-2df39949]{font-size:%?28?%;margin-top:%?10?%}.share[data-v-2df39949]{margin:%?40?% %?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}",""]),t.exports=e},"50ea":function(t,e,i){"use strict";function a(t){if(window.WebViewJavascriptBridge)return t(window.WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src="https://__bridge_loaded__",document.documentElement.appendChild(e),setTimeout((function(){document.documentElement.removeChild(e)}),0)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={callhandler:function(t,e,i){a((function(a){a.callHandler(t,e,i)}))},registerhandler:function(t,e){a((function(i){i.registerHandler(t,(function(t,i){e(t,i)}))}))}};e.default=s},"50ee":function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"5cc8":function(t,e,i){"use strict";var a={share:i("ddda").default,buryingpoint:i("1dca").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cover",{attrs:{testtitle:t.title,testname:t.name,testsex:t.sex,testage:t.age,testid:t.testid,testdate:t.dateText}}),a("v-uni-view",[a("v-uni-view",{staticClass:"top-logo"},[a("v-uni-image",{attrs:{src:i("590f")}})],1),a("v-uni-view",{staticClass:"big-title"},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"module-title title-padding"},[t._v("一、"+t._s(t.testname)+"测评雷达图")]),a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasRadar",id:"canvasRadar"}})],1),a("v-uni-view",{staticClass:"test-subtitle"}),t.heightText&&t.widthText?a("v-uni-view",{staticClass:"hw-score"},[t.heightText?a("v-uni-view",[a("v-uni-text",[t._v("身高：")]),a("v-uni-text",[t._v(t._s(t.heightText)+"厘米")])],1):t._e(),a("v-uni-view",[a("v-uni-text",[t._v("体重：")]),a("v-uni-text",[t._v(t._s(t.widthText)+"千克")])],1),t.hwScore?a("v-uni-view",[a("v-uni-text",[t._v("得分：")]),a("v-uni-text",[t._v(t._s(t.hwScore)+"分")])],1):t._e()],1):t._e(),a("v-uni-view",{staticClass:"body-main"},t._l(t.reportData,(function(e,s){return""!==e.assessvalue?a("v-uni-view",{key:s,staticClass:"body-list",class:t.listClass,attrs:{"data-target":e.itemname,"data-assess":e.assesslevel}},[a("v-uni-view",{staticClass:"list-name"},[t._v(t._s(e.itemname))]),1!=e.testStatus?a("v-uni-view",[a("v-uni-view",{staticClass:"list-value"},[t._v(t._s(e.assessvalue)+" "+t._s(e.itemunitzh))]),""!==e.assessgrade?a("v-uni-view",{staticClass:"list-value"},[t._v("分数: "+t._s(e.assessgrade)+"分")]):t._e(),e.assesslevel?a("v-uni-view",{staticClass:"list-score-text",class:e.classColor},[t._v(t._s(e.assesslevel))]):t._e(),t.scoreShow?a("v-uni-view",{staticClass:"list-score"},t._l(e.scoreIcon,(function(t,e){return a("v-uni-view",{key:e,staticClass:"list-score-main",class:t.classBg})})),1):t._e(),e.assesspurpose?a("v-uni-view",{staticClass:"list-value"},[t._v(t._s(e.assesspurpose))]):t._e()],1):a("v-uni-view",{staticClass:"no-test"},[a("v-uni-image",{attrs:{src:i("7461"),mode:"aspectFit"}}),a("v-uni-view",[t._v("未完成测评")])],1)],1):t._e()})),1),t.overviewText?a("v-uni-view",{staticClass:"module-title title-padding"},[t._v("二、综合评价")]):t._e(),t.overviewText?a("v-uni-view",{staticClass:"standard-text"},[t.totalScore?a("v-uni-view",{staticClass:"overviewText-list"},[t._v("●  综合分数："+t._s(t.totalScore)+"分")]):t._e(),a("v-uni-view",{staticClass:"overviewText-list"},[t._v("●  "+t._s(t.overviewText))])],1):t._e(),t.testText&&!t.overviewText?a("v-uni-view",{staticClass:"module-title single-title-padding"},[t._v("二、单项评价：")]):t._e(),t.testText?a("v-uni-view",{staticClass:"standard-text"},[t.overviewText?a("v-uni-view",{staticClass:"overviewText-title"},[t._v("单项评价：")]):t._e(),t._l(t.testTextList,(function(e){return a("v-uni-view",{staticClass:"overviewText-list"},[t._v(t._s(e))])}))],2):t._e(),a("v-uni-view",{staticClass:"end-text"},[a("v-uni-view",[t._v("测评依据及标准："+t._s(t.bodyNorm))]),a("v-uni-view",[t._v("体语意见：我们建议每三个月测试一次。")]),a("v-uni-view",{staticClass:"end-text-color"},[t._v("此测评结果不作为医疗诊断依据。")]),a("v-uni-view",[t._v("测评时间："+t._s(t.dateText))])],1),t.HQBtn?a("v-uni-view",{staticClass:"hq-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.urlHQBtn.apply(void 0,arguments)}}},[t._v("若您需要体能增强方案，请您填写调查问卷以方便我们提供准确数据>>")]):t._e(),a("ewm")],1),a("share",{attrs:{integralType:"4",show:t.showPopupBottom,obj:t.shareObj},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.hidePopup.apply(void 0,arguments)}}}),a("buryingpoint",{ref:"buryingpoint"})],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"66a3":function(t,e,i){var a=i("87c2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("a93b2ed6",a,!0,{sourceMap:!1,shadowMode:!1})},"6c68":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{downImg:function(t){console.log(t),uni.showModal({title:"保存二维码",content:"是否将微信二维码保存到相册",cancelText:"立即保存",cancelColor:"#6BD8ED",confirmText:"暂不保存",confirmColor:"#919191",success:function(e){e.confirm||e.cancel&&uni.saveImageToPhotosAlbum({filePath:t,success:function(){}})}})}}};e.default=a},7003:function(t,e,i){"use strict";i.r(e);var a=i("190f"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"7f6a":function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"ewm"},[i("v-uni-view",{staticClass:"ewm-text"},[i("v-uni-image",{attrs:{src:"/static/body-report/app.png",mode:""},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.downImg("/static/body-report/app.png")}}}),i("v-uni-view",[t._v("APP")])],1),i("v-uni-view",{staticClass:"ewm-text"},[i("v-uni-image",{attrs:{src:"/static/weixin.png",mode:""},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.downImg("/static/weixin.png")}}}),i("v-uni-view",[t._v("公众号")])],1)],1),i("v-uni-view",{staticClass:"footer-text"},[t._v("想要了解更多请扫描二维码"),i("br"),t._v("下载/关注体语")])],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"87c2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".ewm[data-v-4def9b1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ewm uni-image[data-v-4def9b1e]{width:%?120?%;height:%?120?%}.ewm-text[data-v-4def9b1e]{text-align:center;font-size:%?22?%;color:#484848}.ewm-text uni-view[data-v-4def9b1e]{margin-bottom:%?6?%}.ewm-text[data-v-4def9b1e]:nth-child(1){margin-right:%?74?%}.footer-text[data-v-4def9b1e]{font-size:%?24?%;color:#484848;text-align:center;line-height:1.5}",""]),t.exports=e},a932:function(t,e,i){var a=i("ed7f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("34f286aa",a,!0,{sourceMap:!1,shadowMode:!1})},b7af:function(t,e,i){"use strict";i.r(e);var a=i("ec77"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},bb2e:function(t,e,i){"use strict";i.r(e);var a=i("7f6a"),s=i("c4a9");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("e23d");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"4def9b1e",null,!1,a["a"],o);e["default"]=l.exports},c011:function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup uni-popup-bottom"},t._l(t.shareChannel,(function(e,a){return i("v-uni-view",{key:a,staticClass:"share",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleToShare(e.channel,e.subMsg)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"share-icon",attrs:{src:e.iconfont,mode:""}})],1),i("v-uni-view",{staticClass:"share-font"},[t._v(t._s(e.subMsg))])],1)})),1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},c4a9:function(t,e,i){"use strict";i.r(e);var a=i("6c68"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},ddda:function(t,e,i){"use strict";i.r(e);var a=i("c011"),s=i("b7af");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("1424");var o,r=i("f0c5"),l=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"2df39949",null,!1,a["a"],o);e["default"]=l.exports},e23d:function(t,e,i){"use strict";var a=i("66a3"),s=i.n(a);s.a},e4fb:function(t,e,i){"use strict";var a=i("a932"),s=i.n(a);s.a},ec77:function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("7cf6")),n={props:{show:{type:Boolean,default:!1},integralType:[String,Number],obj:Object},data:function(){var t=0;return t=44,{offsetTop:t,shareChannel:[{iconfont:"/static/weixinShare.svg",channel:"WXSceneSession",subMsg:"微信好友"},{iconfont:"/static/friendShare.svg",channel:"WXSenceTimeline",subMsg:"微信朋友圈"}]}},methods:{hide:function(){this.$emit("hidePopup")},handleToShare:function(t,e){var i=this,a=uni.getStorageSync("token"),n=uni.getStorageSync("user_Id"),o=this.obj["href"],r=this.obj["title"],l=this.obj["summary"],c=this.obj["imageUrl"],u=this.obj["id"],d=this.obj["module"],v=this.$userSharingRecord;if(void 0!=this.obj["courselock"]&&1==this.obj["courselock"]){this.obj["courselock"];v=this.$courseShareLock}console.log("courselock:"+this.obj["courselock"]),console.log(v),uni.request({url:this.$webUrl+v,header:{token:a},data:{href:o,shareChannel:e,shareContent:l,shareImg:c,shareTitle:r,shareType:0,userId:n,markId:u,module:d},method:"POST",success:function(e){0==e.data.code?(s.default.integralSave({url:i.$webUrl+i.$userintegralrecord,data:{integralOperate:1,integralType:i.integralType,title:2==i.integralType?"邀请好友送积分":"分享送积分",userId:n},token:a}),uni.share({provider:"weixin",scene:t,type:0,href:o,title:r,summary:l,imageUrl:c,success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))},complete:function(){i.$emit("hidePopup")}})):s.default.notLogin(e.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}}};e.default=n},ed7f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".big-title[data-v-8042357a]{font-size:%?36?%;text-align:center;margin:0 0 %?40?%}.top-logo[data-v-8042357a]{text-align:center}.top-logo uni-image[data-v-8042357a]{width:%?120?%;height:%?120?%}.title-padding[data-v-8042357a]{padding-left:%?40?%;padding-bottom:%?30?%}.end-text[data-v-8042357a]{font-size:%?26?%;line-height:1.8;padding:%?30?% %?35?% %?60?%}.end-text-color[data-v-8042357a]{color:#e3557c}.qiun-charts[data-v-8042357a]{width:%?750?%;height:%?600?%;background-color:#fff}.charts[data-v-8042357a]{width:%?750?%;height:%?600?%;background-color:#fff}.square-space[data-v-8042357a]{display:inline-block\n\t/* border:1px solid black; */}.square-block[data-v-8042357a]{width:%?88?%;height:%?24?%;margin-right:%?10?%;display:inline-block}.hw-score[data-v-8042357a]{width:%?640?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?28?%\n\t/* justify-content:flex-start | flex-end | center | space-between |space-around; */}.note[data-v-8042357a]{font-size:13px;color:#535353;width:90%;margin:auto}.test-title[data-v-8042357a]{padding:%?20?% %?45?% 0;height:%?80?%;line-height:%?80?%;font-size:%?36?%;text-align:left;color:#313245}.test-subtitle[data-v-8042357a]{width:%?660?%;margin:0 auto;text-align:left}.test-subtitle uni-text[data-v-8042357a]{font-size:%?26?%;color:#969696}.test-list[data-v-8042357a]{width:%?660?%;margin:0 auto %?10?%;display:-webkit-flex;display:-webkit-box;display:flex;font-size:%?32?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.test-list .test-list-name[data-v-8042357a]{font-size:%?32?%;color:#484848}.test-list .test-list-value[data-v-8042357a]{font-size:%?28?%;color:#484848}.text-icon[data-v-8042357a]{width:%?40?%;height:%?40?%;margin-top:%?-5?%;margin-right:%?10?%;display:inline-block;vertical-align:middle}.test-list uni-text[data-v-8042357a]{color:#484848}.body-main[data-v-8042357a]{width:%?640?%;padding-top:%?20?%;margin:0 auto;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.body-list[data-v-8042357a]{width:%?248?%;background:#fff;box-shadow:0 2px 8px 0 rgba(10,91,108,.25);border-radius:8px;padding:%?20?%;margin:0 %?10?% %?40?%;position:relative}.list-name[data-v-8042357a]{width:100%;line-height:%?50?%;font-size:%?24?%}.no-test[data-v-8042357a]{width:%?248?%;padding-top:%?20?%;text-align:center}.no-test uni-image[data-v-8042357a]{width:%?120?%;height:%?120?%}.no-test uni-view[data-v-8042357a]{padding-top:%?20?%;font-size:%?24?%;color:#484848;text-align:center}.list-value[data-v-8042357a]{width:100%;font-size:%?20?%;line-height:%?50?%;color:#4b4b4b}.list-score[data-v-8042357a]{width:100%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list-score-main[data-v-8042357a]{width:%?28?%;height:%?18?%;margin-right:%?8?%}.list-score-text[data-v-8042357a]{font-size:%?32?%}.list-btn[data-v-8042357a]{width:%?112?%;height:%?40?%;text-align:center;line-height:%?40?%;background:#1bc4db;border-radius:4px 0 0 4px;font-size:%?24?%;color:#fff;position:absolute;right:%?0?%;bottom:%?20?%}.huise[data-v-8042357a]{background:#ccc}.huangse[data-v-8042357a]{background:#f1d866}.lanse[data-v-8042357a]{background:#4a90e2}.zise[data-v-8042357a]{background:#ac72e1}.lvse[data-v-8042357a]{background:#71e1bf}.hongse[data-v-8042357a]{background:#ff3a3a}.con[data-v-8042357a]{color:#fff}.hscolor[data-v-8042357a]{font-size:%?32?%;font-weight:700;color:#ff3a3a}\n/* 没有分数 */.fraction-hide .square-main[data-v-8042357a]{display:none}.fraction-hide .body-list-fraction[data-v-8042357a]{display:none}.fraction-hide .body-list-value[data-v-8042357a]{text-align:right}.standard-text[data-v-8042357a]{width:%?660?%;margin:%?20?% auto %?10?%;font-size:%?32?%;color:#4b4b4b}.overviewText-title[data-v-8042357a]{font-weight:700;color:#201c1c}.overviewText-list[data-v-8042357a]{font-size:%?28?%;margin:%?20?% auto %?10?%}.ewm[data-v-8042357a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ewm uni-image[data-v-8042357a]{width:%?120?%;height:%?120?%}.ewm-text[data-v-8042357a]{text-align:center;font-size:%?22?%;color:#484848}.ewm-text uni-view[data-v-8042357a]{margin-bottom:%?6?%}.ewm-text[data-v-8042357a]:nth-child(1){margin-right:%?74?%}.footer-text[data-v-8042357a]{font-size:%?24?%;color:#484848;text-align:center;line-height:1.5;margin-bottom:%?38?%}.hq-btn[data-v-8042357a]{width:%?600?%;padding:%?30?%;margin:0 auto %?80?%;font-size:%?28?%;line-height:1.5;color:#1bc4db;background:#fff;box-shadow:0 1px 10px 0 rgba(0,0,0,.25);border-radius:4px}.single-title-padding[data-v-8042357a]{padding-left:%?40?%}",""]),t.exports=e},f391:function(t,e,i){var a=i("2161");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("de925d3c",a,!0,{sourceMap:!1,shadowMode:!1})},ffc4:function(t,e,i){"use strict";i.r(e);var a=i("0bf09"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a}}]);