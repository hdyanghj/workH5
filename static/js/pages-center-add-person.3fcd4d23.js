(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-add-person"],{"0d06":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".body-posture[data-v-e82e0f30]{width:100%;padding:%?40?% 0 %?60?%}.body-posture-list[data-v-e82e0f30]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;border-bottom:1px solid #efefef;padding:%?30?%;margin-bottom:%?30?%;border-radius:%?10?%;box-shadow:2px 2px 5px #efefef;position:relative}.posture-noneborder[data-v-e82e0f30]{font-size:%?32?%;padding:0}.posture-tishi[data-v-e82e0f30]{color:red;font-size:%?24?%;padding:%?40?% 0}.posture-tishimsg[data-v-e82e0f30]{color:grey;font-size:%?24?%;padding:0 0 %?40?% 0}.posture-list-left[data-v-e82e0f30]{line-height:%?50?%;padding-right:%?30?%}.posture-list-right[data-v-e82e0f30]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.posture-list-input[data-v-e82e0f30]{height:%?50?%;line-height:%?50?%;font-size:%?30?%;color:grey}.radio-list[data-v-e82e0f30]{font-size:%?30?%;padding-right:%?60?%;color:grey}.radio-list-icon[data-v-e82e0f30]{padding-right:%?10?%}.age-icon[data-v-e82e0f30]{float:right;display:inline-block;font-family:texticons;color:#000}.login-button[data-v-e82e0f30]{width:%?600?%;margin:0 auto;padding:%?20?%}.danwei[data-v-e82e0f30]{height:%?50?%;line-height:%?50?%;position:absolute;right:%?20?%}",""]),t.exports=e},"29cc":function(t,e,i){var s=i("0d06");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("03d11ea3",s,!0,{sourceMap:!1,shadowMode:!1})},"4a91":function(t,e,i){"use strict";var s={wPicker:i("581f").default,buryingpoint:i("1dca").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body-posture"},[i("v-uni-view",{staticClass:"body-posture-list"},[i("v-uni-view",{staticClass:"posture-list-left"},[t._v("姓名")]),i("v-uni-view",{staticClass:"posture-list-right"},[i("v-uni-input",{staticClass:"posture-list-input",attrs:{type:"text",placeholder:"请输入测试人姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),i("v-uni-view",{staticClass:"body-posture-list"},[i("v-uni-view",{staticClass:"posture-list-left"},[t._v("性别")]),i("v-uni-view",{staticClass:"posture-list-right"},[i("v-uni-radio-group",{staticClass:"radio-group",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.items,(function(e){return i("v-uni-label",{staticClass:"radio-list"},[i("v-uni-radio",{staticClass:"radio-list-icon",attrs:{value:e.value,checked:e.checked}}),t._v(t._s(e.value))],1)})),1)],1)],1),i("v-uni-view",{staticClass:"body-posture-list"},[i("v-uni-view",{staticClass:"posture-list-left"},[t._v("年龄")]),i("v-uni-view",{staticClass:"posture-list-right"},[i("v-uni-input",{staticClass:"posture-list-input",attrs:{type:"text",placeholder:"请输入测试人年龄",disabled:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleTab("date",t.userAge)}},model:{value:t.userAge,callback:function(e){t.userAge=e},expression:"userAge"}})],1)],1),i("v-uni-view",{staticClass:"body-posture-list"},[i("v-uni-view",{staticClass:"posture-list-left"},[t._v("身高")]),i("v-uni-view",{staticClass:"posture-list-right"},[i("v-uni-input",{staticClass:"posture-list-input",attrs:{type:"number",placeholder:"请输入测试人身高"},model:{value:t.bodyHeight,callback:function(e){t.bodyHeight=e},expression:"bodyHeight"}})],1),i("v-uni-view",{staticClass:"danwei"},[t._v("CM")])],1),i("v-uni-view",{staticClass:"body-posture-list"},[i("v-uni-view",{staticClass:"posture-list-left"},[t._v("体重")]),i("v-uni-view",{staticClass:"posture-list-right"},[i("v-uni-input",{staticClass:"posture-list-input",attrs:{type:"number",placeholder:"请输入测试人体重"},model:{value:t.bodyWeight,callback:function(e){t.bodyWeight=e},expression:"bodyWeight"}})],1),i("v-uni-view",{staticClass:"danwei"},[t._v("KG")])],1),i("v-uni-view",{staticClass:"body-posture-list"},[i("v-uni-view",{staticClass:"posture-list-left"},[t._v("病史")]),i("v-uni-view",{staticClass:"posture-list-right"},[i("v-uni-input",{staticClass:"posture-list-input",attrs:{type:"text",placeholder:"请输入测试人病史"},model:{value:t.mediHistory,callback:function(e){t.mediHistory=e},expression:"mediHistory"}})],1)],1),i("v-uni-view",{staticClass:"login-button"},[i("v-uni-button",{staticClass:"normalButton",attrs:{disabled:t.disaBled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.obtainCode()}}},[t._v("提交")])],1),i("w-picker",{ref:"date",attrs:{mode:"date",startYear:"1950",endYear:t.endYear,defaultVal:[t.years.length,t.month-1,t.day-1],current:!1,disabledAfter:!0,themeColor:"#f00"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),i("buryingpoint",{ref:"buryingpoint"})],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}))},6536:function(t,e,i){"use strict";var s=i("ee27");i("99af"),i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("7cf6")),a=s(i("581f")),o=s(i("1dca")),u={components:{buryingpoint:o.default,wPicker:a.default},data:function(){for(var t=new Date,e=[],i=t.getFullYear(),s=[],n=t.getMonth()+1,a=[],o=t.getDate(),u=1950;u<=t.getFullYear();u++)e.push(u);for(var r=1;r<=12;r++)r<10?s.push("0"+r):s.push(r);for(var l=1;l<=31;l++)l<10?a.push("0"+l):a.push(l);return{isClick:!0,userAge:"",name:"",bodyHeight:"",bodyWeight:"",mediHistory:"",items:[{value:"男",checked:"true"},{value:"女"}],sex:"1",disaBled:!1,id:"",token:"",edit_Id:"",addlist:[],changeStatus:!1,mode:"date",endYear:i,years:e,month:n,day:o,defaultVal:[0,0,0,0,0,0,0]}},onLoad:function(t){this.source=t.source},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onHide:function(){this.$refs.buryingpoint.buryingpoint("添加检测人")},onUnload:function(){this.$refs.buryingpoint.buryingpoint("添加检测人")},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},mounted:function(){this.detail()},methods:{toggleTab:function(t,e){this.mode=t,this.defaultVal=e,this.$refs[t].show()},onConfirm:function(t){switch(this.mode){case"date":this.userAge=t.result;break}},detail:function(){var t=uni.getStorageSync("token"),e=uni.getStorageSync("user_Id");if(this.token=t,this.id=e,""!=this.id){var i=new Date,s=i.getFullYear(),n=i.getMonth(),a=i.getDate();this.date="".concat(s,"-").concat(n,"-").concat(a)}else uni.redirectTo({url:"../login/login"})},radioChange:function(t){"男"==t.detail.value&&(this.sex="1"),"女"==t.detail.value&&(this.sex="2")},obtainCode:function(t){var e=this;""!=this.name.replace(/\s+/g,"")?""!=this.sex?""!=this.userAge?""!=this.bodyHeight?(this.bodyHeight=parseInt(this.bodyHeight),this.bodyHeight<40||this.bodyHeight>230?uni.showToast({icon:"none",title:"请输入正确身高"}):""!=this.bodyWeight?this.bodyWeight<10||this.bodyWeight>148?uni.showToast({icon:"none",title:"请输入正确体重"}):(this.isClick=!1,setTimeout((function(){e.isClick=!0}),2e3),uni.request({url:this.$webUrl+this.$addperson,header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},data:{userId:this.id,memberName:this.name,memberSex:this.sex,birthday:this.userAge,height:this.bodyHeight,weight:this.bodyWeight,medicalHistory:this.mediHistory},method:"POST",success:function(t){0==t.data.code?(uni.setStorageSync("person_Id",t.data.data),uni.showToast({title:"添加成功！",icon:"none",duration:2e3,success:function(t){0==e.source&&setTimeout((function(){uni.navigateBack({delta:1})}),2e3),1==e.source&&setTimeout((function(){uni.navigateBack({delta:2})}),2e3)}})):n.default.notLogin(t.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})):uni.showToast({icon:"none",duration:3e3,title:"请输入体测人体重"})):uni.showToast({icon:"none",duration:3e3,title:"请输入体测人身高"}):uni.showToast({icon:"none",duration:3e3,title:"请输入体测人年龄"}):uni.showToast({icon:"none",duration:3e3,title:"请选择体测人性别"}):uni.showToast({icon:"none",duration:3e3,title:"请输入体测人姓名"})}}};e.default=u},8555:function(t,e,i){"use strict";i.r(e);var s=i("4a91"),n=i("f727");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("96df");var o,u=i("f0c5"),r=Object(u["a"])(n["default"],s["b"],s["c"],!1,null,"e82e0f30",null,!1,s["a"],o);e["default"]=r.exports},"96df":function(t,e,i){"use strict";var s=i("29cc"),n=i.n(s);n.a},f727:function(t,e,i){"use strict";i.r(e);var s=i("6536"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a}}]);