(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-examination-testmain-share"],{"10fc":function(t,e,s){"use strict";s.r(e);var a=s("cea5"),i=s.n(a);for(var o in a)"default"!==o&&function(t){s.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"112e":function(t,e,s){"use strict";var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cover",{attrs:{testtitle:t.title,testname:t.name,testsex:t.sex,testage:t.age,testid:t.testid,testdate:t.dateText}}),a("v-uni-view",[a("v-uni-view",{staticClass:"top-logo"},[a("v-uni-image",{attrs:{src:s("590f")}})],1),a("v-uni-view",{staticClass:"big-title"},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"module-title title-padding"},[t._v("一、"+t._s(t.testname)+"测试雷达图")]),a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasRadar",id:"canvasRadar"}})],1),a("v-uni-view",{staticClass:"test-subtitle"}),t.heightText&&t.widthText?a("v-uni-view",{staticClass:"hw-score"},[t.heightText?a("v-uni-view",[a("v-uni-text",[t._v("身高：")]),a("v-uni-text",[t._v(t._s(t.heightText)+"厘米")])],1):t._e(),a("v-uni-view",[a("v-uni-text",[t._v("体重：")]),a("v-uni-text",[t._v(t._s(t.widthText)+"千克")])],1),t.hwScore?a("v-uni-view",[a("v-uni-text",[t._v("得分：")]),a("v-uni-text",[t._v(t._s(t.hwScore)+"分")])],1):t._e()],1):t._e(),a("v-uni-view",{staticClass:"body-main"},t._l(t.reportData,(function(e,i){return""!==e.assessvalue?a("v-uni-view",{key:i,staticClass:"body-list",class:t.listClass,attrs:{"data-target":e.itemname,"data-assess":e.assesslevel}},[a("v-uni-view",{staticClass:"list-name"},[t._v(t._s(e.itemname))]),1!=e.testStatus?a("v-uni-view",[a("v-uni-view",{staticClass:"list-value"},[t._v(t._s(e.assessvalue)+" "+t._s(e.itemunitzh))]),""!==e.assessgrade?a("v-uni-view",{staticClass:"list-value"},[t._v("分数: "+t._s(e.assessgrade)+"分")]):t._e(),e.assesslevel?a("v-uni-view",{staticClass:"list-score-text",class:e.classColor},[t._v(t._s(e.assesslevel))]):t._e(),t.scoreShow?a("v-uni-view",{staticClass:"list-score"},t._l(e.scoreIcon,(function(t,e){return a("v-uni-view",{key:e,staticClass:"list-score-main",class:t.classBg})})),1):t._e(),e.assesspurpose?a("v-uni-view",{staticClass:"list-value"},[t._v(t._s(e.assesspurpose))]):t._e()],1):a("v-uni-view",{staticClass:"no-test"},[a("v-uni-image",{attrs:{src:s("7461"),mode:"aspectFit"}}),a("v-uni-view",[t._v("未完成测评")])],1)],1):t._e()})),1),t.overviewText?a("v-uni-view",{staticClass:"module-title title-padding"},[t._v("二、综合评价")]):t._e(),t.overviewText?a("v-uni-view",{staticClass:"standard-text"},[t.totalScore?a("v-uni-view",{staticClass:"overviewText-list"},[t._v("●  综合分数："+t._s(t.totalScore)+"分")]):t._e(),a("v-uni-view",{staticClass:"overviewText-list"},[t._v("●  "+t._s(t.overviewText))])],1):t._e(),t.testText?a("v-uni-view",{staticClass:"standard-text"},[a("v-uni-view",{staticClass:"overviewText-title"},[t.overviewText?t._e():a("v-uni-text",[t._v("二、")]),t._v("单项评价：")],1),t._l(t.testTextList,(function(e){return a("v-uni-view",{staticClass:"overviewText-list"},[t._v(t._s(e))])}))],2):t._e(),a("v-uni-view",{staticClass:"end-text"},[a("v-uni-view",[t._v("测评依据及标准："+t._s(t.bodyNorm))]),a("v-uni-view",[t._v("体语意见：我们建议每三个月测试一次。")]),a("v-uni-view",{staticClass:"end-text-color"},[t._v("此测评结果不作为医疗诊断依据。")]),a("v-uni-view",[t._v("测评时间："+t._s(t.dateText))])],1),a("v-uni-view",{staticClass:"ewm"},[a("v-uni-view",{staticClass:"ewm-text"},[a("v-uni-image",{attrs:{src:"/static/body-report/app.png",mode:""}}),a("v-uni-view",[t._v("APP")])],1),a("v-uni-view",{staticClass:"ewm-text"},[a("v-uni-image",{attrs:{src:"/static/weixin.png",mode:""}}),a("v-uni-view",[t._v("公众号")])],1)],1),a("v-uni-view",{staticClass:"footer-text"},[t._v("想要了解更多请扫描二维码"),a("br"),t._v("关注体语")])],1)],1)},o=[];s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return a}))},"234c":function(t,e,s){var a=s("d3da");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("0511251c",a,!0,{sourceMap:!1,shadowMode:!1})},"40ad":function(t,e,s){"use strict";s.r(e);var a=s("112e"),i=s("10fc");for(var o in i)"default"!==o&&function(t){s.d(e,t,(function(){return i[t]}))}(o);s("551c");var n,r=s("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2c3a86b9",null,!1,a["a"],n);e["default"]=l.exports},"551c":function(t,e,s){"use strict";var a=s("234c"),i=s.n(a);i.a},cea5:function(t,e,s){"use strict";var a=s("ee27");s("4160"),s("c975"),s("a9e3"),s("d3b7"),s("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("96cf");var i=a(s("c964")),o=a(s("2e01")),n=a(s("7cf6")),r=a(s("0a68")),l={components:{cover:o.default},data:function(){return{showPopupBottom:!1,shareObj:{},title:"",bodyTitle:null,name:"",age:"",sex:"",widthText:"",heightText:"",hwScore:"",reportData:[],token:"",note:"学生标准：90.0分及以上为优秀，80.0～89.9分为良好，60.0～79.9分为及格，60以下为不及格。",bodyNorm:"",dateText:"",testId:"",scoreShow:!0,listClass:"list-class",categories:[],series:[{name:"测试雷达图",data:[]}],cWidth:"",cHeight:"",pixelRatio:1,fontSize:"",testname:"",purposeList:null,project:!1,totalScore:0,overviewText:"",addsource:"",testText:null,testTextList:[],testid:""}},onNavigationBarButtonTap:function(t){0==t.index?uni.navigateBack({delta:1}):this.shareBtn()},onLoad:function(t){this.testId=t.testId,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(600),this.fontSize=uni.upx2px(24),this.token=uni.getStorageSync("token")},mounted:function(){this.detail()},onBackPress:function(){if(1==this.showPopupBottom)return this.showPopupBottom=!1,!0},methods:{hidePopup:function(){this.showPopupBottom=!1},shareBtn:function(){var t;this.title.indexOf("体能")>-1&&(t=13),this.title.indexOf("体质")>-1&&(t=2);var e={href:"pages/center/examination/testmain-share?testId="+this.testId,webHref:"http://app.bodyreader.net/",title:this.title,summary:"该报告显示个人情况，以及身体是否达到国家平均水平。",imageUrl:"/static/img/tineng-baogao.png",id:this.testId,module:t,token:uni.getStorageSync("token"),userId:uni.getStorageSync("user_Id"),subMsg:"微信好友",shareType:5};n.default.sharingApplet(e)},loadCharts:function(t,e,s){var a=s<5?5:s;new r.default({$this:this,canvasId:"canvasRadar",type:"radar",fontSize:this.fontSize,legend:!0,background:"#FFFFFF",pixelRatio:this.pixelRatio,animation:!0,dataLabel:!0,categories:t,series:e,width:this.cWidth*this.pixelRatio,height:this.cHeight*this.pixelRatio,extra:{radar:{max:a}}})},detail:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.request({url:t.$webUrl+t.$getTestSharingModeList,data:{testId:t.testId},header:{"content-type":"application/x-www-form-urlencoded",token:""+t.token},success:function(e){var s;0==e.data.code?function(){var a=t,i=e.data.data;i.forEach((function(e,s){"身高"!=e.itemname&&"体重"!=e.itemname&&("睁眼站立（单腿支撑）"==e.itemname&&(e.itemname="睁眼站立"),t.categories.push(e.itemname),t.series[0].data.push(e.assessgrade))})),t.loadCharts(t.categories,t.series,Math.max.apply(null,t.series[0].data)),a.name=i[0].membername,a.sex=i[0].membersex,a.age=i[0].memberage;var o=i[0].testid;a.dateText=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6,8);var n=i[0].modelname.substring(0,4);"国民体质"!=n&&"国家学生"!=n&&"中考体育"!=n||(s=i[0].AssessGroup,-1!==s.indexOf("儿童")&&(t.title="幼儿体质测评报告",t.testname="幼儿体质"),-1!==s.indexOf("小学")&&(t.title="小学生体质测评报告",t.testname="小学生体质"),-1!==s.indexOf("初中")&&(t.title="中考体育体质测评报告",t.testname="中考体育"),-1!==s.indexOf("高中")&&(t.title="高中生体质测评报告",t.testname="高中生体质"),-1!==s.indexOf("大学")&&(t.title="大学生体质测评报告",t.testname="大学生体质"),-1!==s.indexOf("壮年")&&(t.title="成人体质测评报告",t.testname="成人体质")),"幼儿体能"!=n&&"国民体质"!=n||("国民体质"==n&&(a.testText="体质"),a.testTextList=["●  优秀：测试结果优秀，说明此项方面能力较好，但为了能够长期保持优异成绩，希望继续保持训练。","●  良好：测试结果良好，说明此方面能力一般般，离优秀还有一定距离，而且还有很大提高空间，可以继续加强训练。","●  合格：测试结果合格，说明此方面能力只是刚到及格范畴，离良好还有一定距离，而且还有很大提高空间，还需加强训练。","●  较差：测试结果较差，说明在此项方面能力比较弱，需加强训练。","●  差：测试结果差，说明在此项方面能力非常弱，急需加强训练。"]),"国家体育"==n&&(a.testTextList=["●  优秀：测试结果为优秀，说明此项身体素质能力较好；如想长期保持，还需进行相关训练。","●  良好：测试结果为良好，说明此项身体素质能力一般；离优秀还有一定距离，需要进行相关训练。","●  及格：测试结果为及格，说明此项身体素质能力较差，及其需要进行相关训练。","●  不及格：测试结果为不及格，说明此项身体素质能力很差，迫切需要进行相关训练。"]),"国家体育"!=n&&"幼儿体能"!=n||(t.project=!0,a.title="国家体育锻炼测评报告",a.testText="体能",a.age>=3&&a.age<=6&&(a.title="幼儿体能增强测评报告",a.bodyTitle="幼儿体能增强",t.testname="幼儿体能增强"),a.age>=6&&a.age<=12&&(a.title="小学生体能增强测评报告",a.bodyTitle="小学生体能增强",t.testname="小学生体能增强"),a.age>=12&&a.age<=17&&(a.title="初高中体能增强测评报告",a.bodyTitle="初高中体能增强",t.testname="初高中体能增强"),a.age>=18&&a.age<=59&&(a.title="成人体能增强测评报告",t.testname="成人体能增强",a.age>=18&&a.age<=24&&(a.bodyTitle="青年体能增强"),a.age>=25&&a.age<=44&&(a.bodyTitle="壮年一组体能增强"),a.age>=45&&a.age<=59&&(a.bodyTitle="壮年二组体能增强")),a.purposeList=a.get_request(a.bodyTitle));for(var r=function(t){if(null==i[t].assessvalue?a.$set(i[t],"testStatus",!0):a.$set(i[t],"testStatus",!1),"身高"==i[t].itemname)a.heightText=i[t].assessvalue;else if("体重"==i[t].itemname)a.widthText=i[t].assessvalue,a.hwScore=i[t].assessgrade;else{var e=[{classBg:"huise"},{classBg:"huise"},{classBg:"huise"},{classBg:"huise"},{classBg:"huise"}];if("中考体育"==n){a.scoreShow=!1;for(var s=0;s<i.length;s++)if("学校过程性考试"==i[t].itemname)i[t].lookOver="";else if(null!=i[t].assesslevel&&"0%"==i[t].assesslevel)a.$set(i[t],"assesspurpose","请继续保持");else{var o="距离满分差"+i[t].assesslevel;a.$set(i[t],"assesspurpose",o)}a.$set(i[t],"assesslevel","")}if(i[t].scoreIcon=e,null!=a.totalScore&&("幼儿体质测评报告"==a.title||"成人体质测评报告"==a.title||"国家体育"==n||"小学生体质测评报告"==a.title||"高中生体质测评报告"==a.title||"大学生体质测评报告"==a.title))if(null==i[t].assessgrade)a.totalScore=null;else{var r=Number(i[t].assessgrade);a.totalScore=a.totalScore+r}if("小学生体质测评报告"!=a.title&&"高中生体质测评报告"!=a.title&&"大学生体质测评报告"!=a.title||a.studentEvaluation(),"国民体质"==n||"幼儿体能"==n){if("幼儿体质测评报告"==a.title&&a.toddlerEvaluation(),"成人体质测评报告"==a.title&&(a.age>=20&&a.age<=39&&a.adultEvaluationYi(),a.age>=45&&a.age<=59&&a.adultEvaluationEr()),"幼儿体能"==n&&a.purposeList.then((function(e){for(var s=e.data,o=0;o<s.length;o++)i[t].itemname==s[o].dictValue&&a.$set(i[t],"assesspurpose",s[o].remark)})),1==i[t].assessgrade)for(var l=0;l<1;l++)a.$set(i[t].scoreIcon[l],"classBg","hongse");if(2==i[t].assessgrade)for(var c=0;c<2;c++)a.$set(i[t].scoreIcon[c],"classBg","huangse");if(3==i[t].assessgrade)for(var v=0;v<3;v++)a.$set(i[t].scoreIcon[v],"classBg","lvse");if(4==i[t].assessgrade)for(var d=0;d<4;d++)a.$set(i[t].scoreIcon[d],"classBg","lanse");if(5==i[t].assessgrade)for(var u=0;u<5;u++)a.$set(i[t].scoreIcon[u],"classBg","zise");if("幼儿体能增强"==a.bodyTitle&&0==i[t].assessgrade)for(var h=0;h<5;h++)a.$set(i[t].scoreIcon[h],"classBg","huise"),a.$set(i[t],"assesslevel","差")}else if("国家体育"==n){if(a.evaluation(),a.purposeList.then((function(e){for(var s=e.data,o=0;o<s.length;o++)i[t].itemname==s[o].dictValue&&a.$set(i[t],"assesspurpose",s[o].remark)})),"不及格"==i[t].assesslevel)if(0==i[t].assessgrade)for(var f=0;f<1;f++)a.$set(i[t].scoreIcon[f],"classBg","hongse"),i[t].assesslevel;else for(var g=0;g<2;g++)a.$set(i[t].scoreIcon[g],"classBg","huangse");if("及格"==i[t].assesslevel)for(var w=0;w<3;w++)a.$set(i[t].scoreIcon[w],"classBg","lvse");if("良好"==i[t].assesslevel)for(var b=0;b<4;b++)a.$set(i[t].scoreIcon[b],"classBg","lanse");if("优秀"==i[t].assesslevel)for(var x=0;x<5;x++)a.$set(i[t].scoreIcon[x],"classBg","zise")}else{if("不及格"==i[t].assesslevel)for(var p=0;p<1;p++)a.$set(i[t].scoreIcon[p],"classBg","hongse"),a.$set(i[t],"classColor","hscolor");if("及格"==i[t].assesslevel)for(var m=0;m<2;m++)a.$set(i[t].scoreIcon[m],"classBg","huangse");if("低体重"==i[t].assesslevel)for(var T=0;T<2;T++)a.$set(i[t].scoreIcon[T],"classBg","hongse");if("良好"==i[t].assesslevel||"正常"==i[t].assesslevel)for(var _=0;_<3;_++)a.$set(i[t].scoreIcon[_],"classBg","lvse");if("优秀"==i[t].assesslevel)for(var y=0;y<4;y++)a.$set(i[t].scoreIcon[y],"classBg","lanse");if("超重"==i[t].assesslevel)for(var S=0;S<4;S++)a.$set(i[t].scoreIcon[S],"classBg","huangse");if("加分"==i[t].assesslevel)for(var k=0;k<5;k++)a.$set(i[t].scoreIcon[k],"classBg","zise");if("肥胖"==i[t].assesslevel)for(var C=0;C<5;C++)a.$set(i[t].scoreIcon[C],"classBg","hongse")}"分"==i[t].itemunitzh&&(a.$set(i[t],"assessgrade",""),a.$set(i[t],"assesslevel","")),a.reportData.push(i[t])}"幼儿体能测试"==i[t].modelname?a.bodyNorm="幼儿发展指南与多年实践经验总结":-1!=i[t].modelname.indexOf("国民体质测定标准")?a.bodyNorm="国民体质测定标准（国家体育总局颁布）":a.bodyNorm=i[t].modelname},l=0;l<i.length;l++)r(l)}():n.default.notLogin(e.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}});case 1:case"end":return e.stop()}}),e)})))()},evaluation:function(){null!=this.totalScore?(this.totalScore>=400&&(this.overviewText="综合成绩优秀：说明运动素质综合成绩优秀，运动能力较好。"),this.totalScore>=320&&this.totalScore<=399&&(this.overviewText="综合成绩良好：说明运动素质综合成绩良好，运动能力一般。"),this.totalScore>=200&&this.totalScore<=319&&(this.overviewText="综合成绩达标：说明运动素质综合成绩达标，运动能力较弱。"),this.totalScore<=199&&(this.overviewText="综合成绩不达标：说明运动素质综合成绩不达标，运动能力很弱。")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},toddlerEvaluation:function(){null!=this.totalScore?(this.totalScore>31&&(this.overviewText="综合成绩为一级（优秀）"),this.totalScore>=28&&this.totalScore<=31&&(this.overviewText="综合成绩为二级（良好）"),this.totalScore>=20&&this.totalScore<=27&&(this.overviewText="综合成绩为三级（合格）"),this.totalScore<20&&(this.overviewText="综合成绩为四级（不合格）")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},studentEvaluation:function(){null!=this.totalScore?(this.totalScore>90&&(this.overviewText="综合成绩为优秀"),this.totalScore>=80&&this.totalScore<=89.9&&(this.overviewText="综合成绩为良好"),this.totalScore>=60&&this.totalScore<=79.9&&(this.overviewText="综合成绩为及格"),this.totalScore<59.9&&(this.overviewText="综合成绩为不及格")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},adultEvaluationYi:function(){null!=this.totalScore?(this.totalScore>33&&(this.overviewText="综合成绩为一级（优秀）"),this.totalScore>=30&&this.totalScore<=33&&(this.overviewText="综合成绩为二级（良好）"),this.totalScore>=23&&this.totalScore<=29&&(this.overviewText="综合成绩为三级（合格）"),this.totalScore<23&&(this.overviewText="综合成绩为四级（不合格）")):this.overviewText="有评测项目数据未填写，无法给出综合成绩及评价。"},adultEvaluationEr:function(){null!=this.totalScore?(this.totalScore>26&&(this.overviewText="综合成绩为一级（优秀）"),this.totalScore>=24&&this.totalScore<=26&&(this.overviewText="综合成绩为二级（良好）"),this.totalScore>=18&&this.totalScore<=23&&(this.overviewText="综合成绩为三级（合格）"),this.totalScore<18&&(this.overviewText="综合成绩为四级（不合格）")):this.overviewText="有测评项目数据未填写，无法给出综合成绩及评价。"},get_request:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,new Promise((function(s,a){uni.request({url:e.$webUrl+e.$getDictsInfo,data:{dictType:"tineng_test_purpose",dictName:t},success:function(t){s(t.data)},fail:function(t){a(t)}})}));case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}}),s)})))()}}};e.default=l},d3da:function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,".big-title[data-v-2c3a86b9]{font-size:%?36?%;text-align:center;margin:0 0 %?40?%}.top-logo[data-v-2c3a86b9]{text-align:center}.top-logo uni-image[data-v-2c3a86b9]{width:%?120?%;height:%?120?%}.title-padding[data-v-2c3a86b9]{padding-left:%?40?%;padding-bottom:%?30?%}.end-text[data-v-2c3a86b9]{font-size:%?26?%;line-height:1.8;padding:%?30?% %?35?% %?60?%}.end-text-color[data-v-2c3a86b9]{color:#e3557c}.qiun-charts[data-v-2c3a86b9]{width:%?750?%;height:%?600?%;background-color:#fff}.charts[data-v-2c3a86b9]{width:%?750?%;height:%?600?%;background-color:#fff}.square-space[data-v-2c3a86b9]{display:inline-block\n\t/* border:1px solid black; */}.square-block[data-v-2c3a86b9]{width:%?88?%;height:%?24?%;margin-right:%?10?%;display:inline-block}.hw-score[data-v-2c3a86b9]{width:%?640?%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;font-size:%?28?%\n\t/* justify-content:flex-start | flex-end | center | space-between |space-around; */}.note[data-v-2c3a86b9]{font-size:13px;color:#535353;width:90%;margin:auto}.test-title[data-v-2c3a86b9]{padding:%?20?% %?45?% 0;height:%?80?%;line-height:%?80?%;font-size:%?36?%;text-align:left;color:#313245}.test-subtitle[data-v-2c3a86b9]{width:%?660?%;margin:0 auto;text-align:left}.test-subtitle uni-text[data-v-2c3a86b9]{font-size:%?26?%;color:#969696}.test-list[data-v-2c3a86b9]{width:%?660?%;margin:0 auto %?10?%;display:-webkit-flex;display:-webkit-box;display:flex;font-size:%?32?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.test-list .test-list-name[data-v-2c3a86b9]{font-size:%?32?%;color:#484848}.test-list .test-list-value[data-v-2c3a86b9]{font-size:%?28?%;color:#484848}.text-icon[data-v-2c3a86b9]{width:%?40?%;height:%?40?%;margin-top:%?-5?%;margin-right:%?10?%;display:inline-block;vertical-align:middle}.test-list uni-text[data-v-2c3a86b9]{color:#484848}.body-main[data-v-2c3a86b9]{width:%?640?%;padding-top:%?20?%;margin:0 auto;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.body-list[data-v-2c3a86b9]{width:%?248?%;background:#fff;box-shadow:0 2px 8px 0 rgba(10,91,108,.25);border-radius:8px;padding:%?20?%;margin:0 %?10?% %?40?%;position:relative}.list-name[data-v-2c3a86b9]{width:100%;line-height:%?50?%;font-size:%?24?%}.no-test[data-v-2c3a86b9]{width:%?248?%;padding-top:%?20?%;text-align:center}.no-test uni-image[data-v-2c3a86b9]{width:%?120?%;height:%?120?%}.no-test uni-view[data-v-2c3a86b9]{padding-top:%?20?%;font-size:%?24?%;color:#484848;text-align:center}.list-value[data-v-2c3a86b9]{width:100%;font-size:%?20?%;line-height:%?50?%;color:#4b4b4b}.list-score[data-v-2c3a86b9]{width:100%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list-score-main[data-v-2c3a86b9]{width:%?28?%;height:%?18?%;margin-right:%?8?%}.list-score-text[data-v-2c3a86b9]{font-size:%?32?%}.list-btn[data-v-2c3a86b9]{width:%?112?%;height:%?40?%;text-align:center;line-height:%?40?%;background:#1bc4db;border-radius:4px 0 0 4px;font-size:%?24?%;color:#fff;position:absolute;right:%?0?%;bottom:%?20?%}.huise[data-v-2c3a86b9]{background:#ccc}.huangse[data-v-2c3a86b9]{background:#f1d866}.lanse[data-v-2c3a86b9]{background:#4a90e2}.zise[data-v-2c3a86b9]{background:#ac72e1}.lvse[data-v-2c3a86b9]{background:#71e1bf}.hongse[data-v-2c3a86b9]{background:#ff3a3a}.con[data-v-2c3a86b9]{color:#fff}.hscolor[data-v-2c3a86b9]{font-size:%?32?%;font-weight:700;color:#ff3a3a}\n/* 没有分数 */.fraction-hide .square-main[data-v-2c3a86b9]{display:none}.fraction-hide .body-list-fraction[data-v-2c3a86b9]{display:none}.fraction-hide .body-list-value[data-v-2c3a86b9]{text-align:right}.standard-text[data-v-2c3a86b9]{width:%?660?%;margin:%?20?% auto %?10?%;font-size:%?32?%;color:#4b4b4b}.overviewText-title[data-v-2c3a86b9]{font-weight:700;color:#201c1c}.overviewText-list[data-v-2c3a86b9]{font-size:%?28?%;margin:%?20?% auto %?10?%}.ewm[data-v-2c3a86b9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ewm uni-image[data-v-2c3a86b9]{width:%?120?%;height:%?120?%}.ewm-text[data-v-2c3a86b9]{text-align:center;font-size:%?22?%;color:#484848}.ewm-text uni-view[data-v-2c3a86b9]{margin-bottom:%?6?%}.ewm-text[data-v-2c3a86b9]:nth-child(1){margin-right:%?74?%}.footer-text[data-v-2c3a86b9]{font-size:%?24?%;color:#484848;text-align:center;line-height:1.5;margin-bottom:%?38?%}",""]),t.exports=e}}]);