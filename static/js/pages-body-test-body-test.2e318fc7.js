(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-test-body-test"],{1424:function(t,e,i){"use strict";var s=i("f391"),a=i.n(s);a.a},2161:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".uni-mask[data-v-2df39949]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-2df39949]{position:fixed;bottom:0;z-index:999;background-color:#fff;box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.uni-popup-bottom[data-v-2df39949]{left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.share-icon[data-v-2df39949]{width:%?80?%;height:%?80?%}.share-font[data-v-2df39949]{font-size:%?28?%;margin-top:%?10?%}.share[data-v-2df39949]{margin:%?40?% %?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}",""]),t.exports=e},2687:function(t,e,i){var s=i("c485");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("e2d36b50",s,!0,{sourceMap:!1,shadowMode:!1})},"34df":function(t,e,i){"use strict";var s=i("2687"),a=i.n(s);a.a},"6b37":function(t,e,i){"use strict";var s={wPicker:i("581f").default,share:i("ddda").default,buryingpoint:i("1dca").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"body-test"},[i("v-uni-view",{staticClass:"hander-cont",class:t.handerBg},[i("v-uni-view",{staticClass:"body-title"},[t._v(t._s(t.bodyTitle)),t.price?i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.showPrice))]):t._e()],1),i("v-uni-view",{staticClass:"example-btn iconfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goHistoryRecord.apply(void 0,arguments)}}},[t._v("查看报告")]),i("v-uni-view",{staticClass:"uni-swiper-msg"},[i("v-uni-view",{staticClass:"swiper-tag"},[t._v("NEW")]),i("v-uni-swiper",{attrs:{vertical:"true",autoplay:"true",circular:"true",interval:"3000"}},t._l(t.reportMsg,(function(e,s){return i("v-uni-swiper-item",{key:s},[i("v-uni-view",{staticClass:"swiper-item-text"},[t._v(t._s(e.membername)+"  "+t._s(e.membersex)+"  "+t._s(e.modelname)+"  "+t._s(e.average)+"分")])],1)})),1)],1),t.tineng?i("v-uni-view",{staticClass:"course-small-type"},[i("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-into-view":t.videoChooseId,"scroll-with-animation":!0}},t._l(t.videoList,(function(e,s){return i("v-uni-view",{key:s,staticClass:"scroll-view-item_H",class:[s==t.videoActive?"videoTab-active":""],attrs:{id:"id"+s},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switcherVideo(s)}}},[t._v(t._s(e.dictValue)),s==t.videoActive?i("v-uni-text",{staticClass:"iconfont play-btn"},[t.videoShow?i("v-uni-text",[t._v("")]):t._e(),t.videoShow?t._e():i("v-uni-text",[t._v("")])],1):t._e()],1)})),1)],1):t._e(),t.tineng?i("v-uni-view",{staticClass:"videoContent"},[i("v-uni-view",{staticClass:"playtext"},[i("v-uni-text",[t._v("*")]),t.videoShow?i("v-uni-text",[t._v("点击播放视频查看正确测试方法")]):t._e(),t.videoShow?t._e():i("v-uni-text",[t._v("点击查看正确测试方法")])],1),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.playVideo.apply(void 0,arguments)}}},[t.videoShow?i("v-uni-text",[t._v("立即播放")]):t._e(),t.videoShow?t._e():i("v-uni-text",[t._v("立即查看")]),i("v-uni-text",{staticClass:"iconfont gt"},[t._v("")])],1)],1):t._e()],1),i("v-uni-view",{staticClass:"physicaltester"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.newShow,expression:"newShow"}],staticClass:"phyNew",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectBut(t.filter)}}},[i("v-uni-text",{staticClass:"newIcon"},[t._v("")]),t._v("新增测试人")],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.selectShow,expression:"selectShow"}],staticClass:"phySelect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectBut(t.people)}}},[i("v-uni-view",{staticClass:"selectText"},[t._v(t._s(t.bodyMsg.memberName)),i("v-uni-view",{staticClass:"selectyishi"},[t._v("点击修改或更换测试人")])],1),i("v-uni-view",{staticClass:"selectMsg"},[i("v-uni-text",[t._v("性别："+t._s(t.sex[t.bodyMsg.memberSex]))]),i("v-uni-text",[t._v("年龄："+t._s(t.bodyMsg.age)+"岁")]),i("v-uni-text",[t._v("身高："+t._s(t.bodyMsg.height)+"CM")]),i("v-uni-text",[t._v("体重："+t._s(t.bodyMsg.weight)+"KG")])],1),i("v-uni-view",{staticClass:"switchIcin"},[t._v("")])],1)],1),t.promptTextShow?i("v-uni-view",{staticClass:"prompt-text"},[t._v(t._s(t.promptText))]):t._e(),t.classShow?i("v-uni-view",{staticClass:"test-list"},[i("v-uni-view",{staticClass:"test-list-kay"},[t._v(t._s(t.own))]),i("v-uni-view",{staticClass:"test-list-value",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleTab("grade")}}},[t._v(t._s(t.owntext))])],1):t._e(),t.ownShow?i("v-uni-view",{staticClass:"test-list"},[i("v-uni-view",{staticClass:"test-list-kay"},[t._v(t._s(t.own))]),i("v-uni-view",{staticClass:"test-list-value"},[t._v(t._s(t.owntext))])],1):t._e(),t.cityShow?i("v-uni-view",{staticClass:"test-list"},[i("v-uni-view",{staticClass:"test-list-kay"},[t._v(t._s(t.own))]),i("v-uni-view",{staticClass:"test-list-value"},[i("v-uni-picker",{attrs:{value:t.index,range:t.cityArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.cityArray[t.index]))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"body-list-text"},[i("v-uni-text",[t._v(t._s(t.prompt))])],1),i("v-uni-view",{staticClass:"body-button"},[i("v-uni-button",{staticClass:"normalButton",attrs:{disabled:t.btnStatus},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.made.apply(void 0,arguments)}}},[t._v("开 始 测 试")])],1),t.videoMain?i("v-uni-view",{staticClass:"pop-ups",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopBtn.apply(void 0,arguments)}}}):t._e(),t.videoMain?i("v-uni-view",{staticClass:"pop-video"},[t.videoShow?i("v-uni-view",{staticClass:"pop-video-main"},[i("v-uni-video",{staticClass:"guide-video",attrs:{id:"myVideo",src:t.videoList[t.videoActive].remark}})],1):t._e(),t.videoShow?t._e():i("v-uni-view",{staticClass:"video-text"},[i("v-uni-view",{staticClass:"video-title"},[t._v(t._s(t.videoList[t.videoActive].dictValue)+":")]),i("v-uni-view",{staticClass:"video-text-cont"},[i("v-uni-text",[t._v(t._s(t.videoList[t.videoActive].remark))])],1),i("v-uni-view",{staticClass:"iconfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopBtn.apply(void 0,arguments)}}},[t._v("")])],1)],1):t._e(),0!=t.gradeText.length?i("w-picker",{ref:"grade",attrs:{mode:"grade",defaultVal:[0],themeColor:"#f00",gradeList:t.gradeText},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):t._e(),i("share",{attrs:{integralType:"4",show:t.showPopupBottom,obj:t.shareObj},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.hidePopup.apply(void 0,arguments)}}}),i("buryingpoint",{ref:"buryingpoint"})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}))},"6ff0":function(t,e,i){"use strict";i.r(e);var s=i("6b37"),a=i("beed");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("34df");var n,d=i("f0c5"),r=Object(d["a"])(a["default"],s["b"],s["c"],!1,null,"0ca7dc8f",null,!1,s["a"],n);e["default"]=r.exports},7285:function(t,e,i){"use strict";var s=i("ee27");i("c975"),i("a9e3"),i("e25e"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("7cf6")),o=s(i("581f")),n=s(i("1dca")),d=s(i("ddda")),r={components:{buryingpoint:n.default,wPicker:o.default,share:d.default},data:function(){return{vipUrl:"normal",promptTextShow:!1,promptText:"您的年龄不符合该标准，请修改后重试。",token:"",id:"",bodyTitle:"",bodySource:null,prompt:"",reportMsg:[],addlist:[],sex:["请选择","男","女"],gradeText:[],bodyMsg:{id:"",memberName:"",birthday:"",age:"",memberSex:"",height:"",weight:"",price:null},newShow:!0,selectShow:!1,filter:"filter",people:"people",person_Id:"",standard:"",own:"",owntext:"",classShow:!1,ownShow:!1,cityShow:!1,dateText:"",dateUrl:"",mobile:"",cityArray:["北京","长春","成都","重庆","长沙","福州","广州","贵阳","哈尔滨","海口","杭州","合肥","呼和浩特","济南","昆明","拉萨","兰州","南昌","南京","南宁","上海","深圳","沈阳","石家庄","太原","天津","乌鲁木齐","武汉","西安","西宁","银川","郑州"],index:0,btnStatus:!0,memberUrl:"",memberDate:[],ageText:"",handerBg:"",videoList:null,videoChooseId:"",videoActive:0,videoMain:!1,tineng:!1,videoShow:!1,price:null,standardId:null,showPopupBottom:!1,shareObj:{}}},onNavigationBarButtonTap:function(t){0==t.index?uni.navigateBack({delta:1}):this.shareBtn()},onLoad:function(t){var e=this;this.standardId=t.standard,0==t.standard&&(this.bodyTitle="幼儿体质测评",this.standard="国民体质测定标准",this.own="所属组",this.owntext="儿童一组",this.prompt="从身体形态、身体机能、身体素质和运动能力等方面综合评定学生的体质健康水平，是促进学生体质健康发展、激励学生积极进行身体锻炼。本测试适用于幼儿园。",this.handerBg="lanse",this.btnStatus=!1),1==t.standard&&(this.bodyTitle="小学生体质",this.standard="国家学生体质健康标准",this.own="所属组",this.owntext="选择所属组",this.gradeText=["小学一年级","小学二年级","小学三年级","小学四年级","小学五年级","小学六年级"],this.classShow=!0,this.prompt="从身体形态、身体机能、身体素质和运动能力等方面综合评定学生的体质健康水平，是促进学生体质健康发展、激励学生积极进行身体锻炼;本测试适用于小学；",this.handerBg="lvse",this.btnStatus=!0),2==t.standard&&(this.bodyTitle="中考体育",this.standard=this.cityArray[this.index],this.own="城市",this.cityShow=!0,this.prompt="中考体育是通过统一测试的形式对应届初中毕业生作出体质评价的统一测评模式；考试成绩和中考挂钩，直接会影响学生的高中录取。 体育中考的时间一般在每年3月份到5月份期间，各地时间不同。",this.handerBg="chengse",this.btnStatus=!1),3==t.standard&&(this.bodyTitle="高中生体质",this.standard="国家学生体质健康标准",this.own="所属组",this.owntext="选择所属组",this.gradeText=["高中一年级","高中二年级","高中三年级"],this.classShow=!0,this.prompt="从身体形态、身体机能、身体素质和运动能力等方面综合评定学生的体质健康水平，是促进学生体质健康发展、激励学生积极进行身体锻炼;本测试适用于高中；",this.handerBg="fense",this.btnStatus=!0),4==t.standard&&(this.bodyTitle="大学生体质",this.standard="国家学生体质健康标准",this.own="所属组",this.owntext="选择所属组",this.gradeText=["大学一年级","大学二年级","大学三年级","大学四年级"],this.classShow=!0,this.prompt="从身体形态、身体机能、身体素质和运动能力等方面综合评定学生的体质健康水平，是促进学生体质健康发展、激励学生积极进行身体锻炼;本测试适用于大学；",this.handerBg="lanse",this.btnStatus=!0),5==t.standard&&(this.bodyTitle="成人体质",this.standard="国民体质测定标准",this.own="所属组",this.prompt="从身体形态、身体机能、身体素质和运动能力等方面综合评定成人的体质健康水平，是促进成人体质健康发展、激励成人积极进行身体锻炼;本测试适用于成人；",this.handerBg="luse"),6==t.standard&&(this.bodyTitle="幼儿体能增强",this.standard="幼儿体能测试",this.prompt="本测试适用于幼儿园。",this.tineng=!0,this.bodySource="幼儿体能增强",this.handerBg="lanse"),7==t.standard&&(this.bodyTitle="小学生体能增强",this.standard="国家体育锻炼标准",this.own="所属组",this.prompt="本测试适用于小学生。",this.tineng=!0,this.bodySource="小学生体能增强",this.handerBg="lvse"),8==t.standard&&(this.bodyTitle="初高中体能增强",this.standard="国家体育锻炼标准",this.own="所属组",this.prompt="本测试适用于初中生和高中生。",this.tineng=!0,this.bodySource="初高中体能增强",this.handerBg="lanse"),9==t.standard&&(this.bodyTitle="成人体能增强",this.standard="国家体育锻炼标准",this.own="所属组",this.prompt="本测试适用于成年人。",this.tineng=!0,this.bodySource="成人体能增强",this.handerBg="luse"),6!=t.standard&&7!=t.standard&&8!=t.standard&&9!=t.standard||uni.request({url:this.$webUrl+this.$pricemanagePage,data:{type:9,sonType:2},success:function(t){var i=t.data.data.list;e.price=i[0].price,1==i[0].chargeStatus?(e.showPrice="价格："+i[0].price+"元/次",e.price=i[0].price):2==i[0].chargeStatus?(e.showPrice="优惠价："+i[0].preferentialPrice+"元/次",e.price=i[0].preferentialPrice):3==i[0].chargeStatus?(e.showPrice="免费测试",e.price=0):4==i[0].chargeStatus&&(e.showPrice="限时免费",e.price=0),e.bodyMsg.price=e.price}})},onUnload:function(){this.$refs.buryingpoint.buryingpoint(this.bodyTitle)},onHide:function(){this.$refs.buryingpoint.buryingpoint(this.bodyTitle)},onShow:function(t){var e=this;setTimeout((function(){e.$refs.buryingpoint.Time()}),10),uni.getStorageSync("user_Id")&&uni.getStorageSync("token")&&uni.request({url:this.$webUrl+this.$messageBadge,method:"GET",data:{userId:uni.getStorageSync("user_Id")},success:function(t){if(t=t.data,0==t.code){uni.setStorageSync("vip",t.data.vip);var i=t.data.vip;e.vipUrl=1==i?"super":2==i?"org":"normal"}},fail:function(){},complete:function(){}}),this.token=uni.getStorageSync("token"),this.detail()},methods:{goHistoryRecord:function(){-1==this.bodyTitle.indexOf("体能")?uni.navigateTo({url:"/pages/center/ac-quiz/growth-list?active=tzhcp"}):uni.navigateTo({url:"/pages/center/ac-quiz/growth-list?active=tnzqcp"})},goMember:function(t){uni.getStorageSync("token")&&uni.navigateTo({url:"/pages/center/integral/member-ship?type="+t})},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.owntext=t.result,this.btnStatus=!1},shareBtn:function(){var t,e;6==this.standardId||7==this.standardId||8==this.standardId||9==this.standardId?(t=13,e="体能"):(t=2,e="体质"),this.hidePopup(),this.shareObj["href"]=this.$h5Url+"/pages/body-test/body-test?standard="+this.standardId,this.shareObj["title"]=this.bodyTitle,this.shareObj["summary"]="通过在线测试，测试个人"+e+"发育情况。",this.shareObj["imageUrl"]="/static/img/tizhi-test.png",this.shareObj["module"]=t,this.showPopupBottom=!0},hidePopup:function(){this.showPopupBottom=!1},switcherVideo:function(t){this.videoChooseId="id"+t,this.videoActive=t,this.videoMain=!0},playVideo:function(){this.videoMain=!0},stopBtn:function(){this.videoMain=!1},detail:function(){var t=this,e=uni.getStorageSync("user_Id"),i=uni.getStorageSync("token"),s=uni.getStorageSync("person_Id"),o=uni.getStorageSync("user_Info");this.mobile=o.mobile,this.id=e,this.token=i,this.person_Id=s,uni.request({url:this.$webUrl+this.$getTestViewByTestIdList,header:{token:""+this.token},data:{startBarNumber:0,endBarNumber:6},method:"GET",success:function(e){if(0==e.data.code)for(var i=e.data.data,s=0;s<i.length;s++)2===i[s].membername.length&&t.$set(i[s],"membername",i[s].membername.substring(0,1)+"*"),3===i[s].membername.length&&t.$set(i[s],"membername",i[s].membername.substring(0,1)+"**"),4===i[s].membername.length&&t.$set(i[s],"membername",i[s].membername.substring(0,2)+"**"),0!=i[s].average&&t.reportMsg.push(i[s]);else a.default.notLogin(e.data)},fail:function(t){}}),""!=this.token&&(""==this.person_Id?(this.memberUrl=this.$UserDefault,this.memberDate={userId:this.id}):(this.memberUrl=this.$getSpecifiedMember,this.memberDate={id:this.person_Id}),this.huoquTcr()),this.promptText="",this.promptTextShow=!1},bindPickerChange:function(t){this.index=t.target.value,this.standard=this.cityArray[this.index].split("市")[0]},huoquTcr:function(){var t=this;uni.request({url:this.$webUrl+this.memberUrl,header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},data:this.memberDate,method:"GET",success:function(e){if(0==e.data.code){var i;uni.setStorageSync("person_Id","");var s=e.data.data;if(!s)return t.newShow=!0,void(t.selectShow=!1);if(s){if(i=t.howold(s.birthday),t.bodyMsg.age=Number(i.substring(0,i.indexOf("岁"))),"幼儿体能测试"==t.standard){var o=t.transform(s.birthday);t.ageText=Number(o),t.bodyMsg.age<3||t.bodyMsg.age>6?(t.promptText="年龄应是3-6岁,请修年龄改后重试。",t.promptTextShow=!0,t.btnStatus=!0):(t.promptTextShow=!1,t.btnStatus=!1)}else"幼儿体质测评"==t.bodyTitle?(t.ageText=t.bodyMsg.age,t.bodyMsg.age<3||t.bodyMsg.age>6?(t.promptText="年龄应是3-6岁,请修年龄改后重试。",t.promptTextShow=!0,t.btnStatus=!0):(t.promptTextShow=!1,t.btnStatus=!1)):t.ageText=t.bodyMsg.age;t.bodyMsg.birthday=s.birthday,t.bodyMsg.id=s.id,t.bodyMsg.memberName=s.memberName,t.bodyMsg.memberSex=s.memberSex,t.bodyMsg.height=s.height,t.bodyMsg.weight=s.weight,t.bodyMsg.birthday=s.birthday,t.newShow=!1,t.selectShow=!0,"成人体能增强"==t.bodyTitle&&(t.bodyMsg.age>=18&&t.bodyMsg.age<=24&&(t.bodySource="青年体能增强"),t.bodyMsg.age>=25&&t.bodyMsg.age<=44&&(t.bodySource="壮年一组体能增强"),t.bodyMsg.age>=45&&t.bodyMsg.age<=59&&(t.bodySource="壮年二组体能增强")),"国家体育锻炼标准"!=t.standard&&"幼儿体能增强"!=t.bodyTitle||uni.request({url:t.$webUrl+t.$getDictsInfo,data:{dictType:"tineng_test_method",dictName:t.bodySource},success:function(e){for(var i=e.data.data,s=0;s<i.length;s++){var a=i[s].remark;-1!=a.indexOf("mp4")&&(t.videoShow=!0)}t.videoList=i}}),"国家体育锻炼标准"!=t.standard&&"成人体质"!=t.bodyTitle||t.getTheGroup()}}else a.default.notLogin(e.data)},fail:function(t){uni.showToast({title:"网络连接不稳定，请检查网络",duration:3e3,icon:"none"})}})},getTheGroup:function(){var t=this;if("小学生体能增强"==this.bodyTitle&&(this.bodyMsg.age<6||this.bodyMsg.age>11))return this.promptText="年龄应是6-11岁,请修改年龄后重试。",this.promptTextShow=!0,this.show=!1,this.ownShow=!1,void(this.btnStatus=!0);if("初高中体能增强"==this.bodyTitle&&(this.bodyMsg.age<12||this.bodyMsg.age>17))return this.promptText="年龄应是12-17岁,请修年龄改后重试。",this.promptTextShow=!0,this.show=!1,this.ownShow=!1,void(this.btnStatus=!0);if("成人体质"==this.bodyTitle&&(this.bodyMsg.age<20||this.bodyMsg.age>59))return this.promptText="年龄应是20岁至59岁，请修改年龄后重试。",this.promptTextShow=!0,this.show=!1,this.ownShow=!1,void(this.btnStatus=!0);if("成人体能增强"==this.bodyTitle&&(this.bodyMsg.age<18||this.bodyMsg.age>59))return this.promptText="年龄应是18岁以上,请修年龄改后重试。",this.promptTextShow=!0,this.show=!1,this.ownShow=!1,void(this.btnStatus=!0);if(this.ownShow=!0,this.btnStatus=!1,this.ageText=this.bodyMsg.age,"国家体育锻炼标准"==this.standard?(this.bodyMsg.age>17&&this.bodyMsg.age<25&&(this.ageText=18),this.bodyMsg.age>24&&this.bodyMsg.age<30&&(this.ageText=29)):this.bodyMsg.age>19&&this.bodyMsg.age<30&&(this.ageText=29),this.bodyMsg.age>29&&this.bodyMsg.age<35&&(this.ageText=34),this.bodyMsg.age>34&&this.bodyMsg.age<40&&(this.ageText=39),"国民体质测定标准"==this.standard){if(this.bodyMsg.age>39&&this.bodyMsg.age<45)return void(this.owntext="壮年二组")}else this.bodyMsg.age>39&&this.bodyMsg.age<45&&(this.ageText=44);this.bodyMsg.age>44&&this.bodyMsg.age<50&&(this.ageText=49),this.bodyMsg.age>49&&this.bodyMsg.age<55&&(this.ageText=54),this.bodyMsg.age>54&&this.bodyMsg.age<60&&(this.ageText=59),this.bodyMsg.age>59&&this.bodyMsg.age<65&&(this.ageText=64),this.bodyMsg.age>64&&this.bodyMsg.age<70&&(this.ageText=69),uni.request({url:this.$webUrl+this.$getAssessGroupGjbz,method:"GET",data:{assessAge:this.ageText,assessSex:this.sex[this.bodyMsg.memberSex]},header:{token:""+this.token},success:function(e){0==e.data.code?("国家学生体质健康标准"==t.standard&&(console.log("xiaoxue"),t.owntext=e.data.data.assessSchoolgroup),"国家体育锻炼标准"!=t.standard&&"成人体质"!=t.bodyTitle||(t.owntext=e.data.data.assessGroup),t.ownShow=!0):a.default.notLogin(e.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},transform:function(t){if(null!==t&&void 0!==t&&""!==t){var e=new Date,i=new Date(t),s=e.getTime()-i.getTime(),a=parseInt(s/864e5);if(a<30)return"0.0";if(a>=30&&a<=365){var o="0."+parseInt(a%365/30);return o}if(a>365&&parseInt(a%365/30)<13){o=parseInt(a/365)+"."+parseInt(a%365/30);if(parseInt(a%365/30)>6)o=parseInt(a/365)+1+".0";if(parseInt(a%365/30)<=6&&parseInt(a%365/30)>0)o=parseInt(a/365)+".5";if(0==parseInt(a%365/30))o=parseInt(a/365)+".0";return o}}},howold:function(t){if(null!==t&&void 0!==t&&""!==t){var e=new Date,i=new Date(t),s=e.getTime()-i.getTime(),a=parseInt(s/864e5);if(a<30)return a+"天";if(a>=30&&a<=365){var o=parseInt(a%365/30)+"月"+parseInt(a%365%30)+"天";if(0==parseInt(a%365%30)){o=parseInt(a%365/30)+"月";return o}return o}if(a>365&&parseInt(a%365/30)<13){o=parseInt(a/365)+"岁"+parseInt(a%365/30)+"月";if(0==parseInt(a%365/30)){var n=t.split("-");o="";o=n[2]<=e.getDate()?parseInt(a/365)+"岁":parseInt(a/365-1)+"岁"}return o}}},made:function(){var t=this;""!=this.bodyMsg.memberName?"0"!=this.bodyMsg.memberSex?"请选择"!=this.date?("幼儿体能增强"==this.bodyTitle&&(this.dateText={memberid:this.bodyMsg.birthday,membername:this.bodyMsg.memberName,memberage:this.ageText,membersex:this.sex[this.bodyMsg.memberSex],addsource:this.standard,assesssex:this.sex[this.bodyMsg.memberSex],adduser:this.mobile,source:this.bodySource}),"小学生体能增强"!=this.bodyTitle&&"初高中体能增强"!=this.bodyTitle&&"成人体能增强"!=this.bodyTitle||(this.dateText={memberid:this.bodyMsg.birthday,membername:this.bodyMsg.memberName,memberage:this.bodyMsg.age,membersex:this.sex[this.bodyMsg.memberSex],assessgroup:this.owntext,assesssex:this.sex[this.bodyMsg.memberSex],adduser:this.mobile,addsource:"国家体育锻炼标准",source:this.bodySource}),"幼儿体质测评"==this.bodyTitle&&(console.log(this.bodySource),this.dateText={memberid:this.bodyMsg.birthday,membername:this.bodyMsg.memberName,memberage:this.bodyMsg.age,membersex:this.sex[this.bodyMsg.memberSex],assessgroup:this.owntext,addsource:this.standard,assesssex:this.sex[this.bodyMsg.memberSex],adduser:this.mobile}),"中考体育"==this.bodyTitle&&(this.dateText={memberid:this.bodyMsg.birthday,membername:this.bodyMsg.memberName,memberage:this.bodyMsg.age,membersex:this.sex[this.bodyMsg.memberSex],addsource:this.standard,assesssex:this.sex[this.bodyMsg.memberSex],adduser:this.mobile}),"小学生体质"!=this.bodyTitle&&"高中生体质"!=this.bodyTitle&&"大学生体质"!=this.bodyTitle||(this.dateText={memberid:this.bodyMsg.birthday,membername:this.bodyMsg.memberName,memberage:this.bodyMsg.age,membersex:this.sex[this.bodyMsg.memberSex],assessgroup:this.owntext,assesssex:this.sex[this.bodyMsg.memberSex],adduser:this.mobile,addsource:"国家学生体质健康标准"}),"成人体质"==this.bodyTitle&&(this.dateText={memberid:this.bodyMsg.birthday,membername:this.bodyMsg.memberName,memberage:this.bodyMsg.age,membersex:this.sex[this.bodyMsg.memberSex],assessgroup:this.owntext,assesssex:this.sex[this.bodyMsg.memberSex],adduser:this.mobile,addsource:this.standard}),this.dateText.testDetectionId=this.bodyMsg.id,this.dateUrl=this.$ModelData,uni.request({url:this.$webUrl+this.dateUrl,method:"GET",header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},data:this.dateText,success:function(e){if(0==e.data.code){var i=e.data;t.$set(i,"pageTitle",t.bodyTitle),t.$set(i,"age",t.ageText),uni.setStorage({key:"testDate",data:{testdata:i}}),uni.setStorage({key:"basicInfo",data:t.bodyMsg}),uni.navigateTo({url:"./body-score?source=bodytest"})}else a.default.notLogin(e.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})):uni.showToast({icon:"none",title:"请输入年龄"}):uni.showToast({icon:"none",title:"请输入性别"}):uni.showToast({icon:"none",title:"请输入正确姓名"})},selectBut:function(t){if("filter"==t){if(""==this.token)return uni.showToast({icon:"none",duration:3e3,title:"请登录后重试"}),void setTimeout((function(){uni.navigateTo({url:"../login/login"})}),1e3);uni.navigateTo({url:"../center/add-person?source=0"})}"people"==t&&(uni.setStorage({key:"jump_Key",data:"body"}),uni.navigateTo({url:"../center/add-list?source=1"}))}}};e.default=r},b7af:function(t,e,i){"use strict";i.r(e);var s=i("ec77"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a},beed:function(t,e,i){"use strict";i.r(e);var s=i("7285"),a=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=a.a},c011:function(t,e,i){"use strict";var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup uni-popup-bottom"},t._l(t.shareChannel,(function(e,s){return i("v-uni-view",{key:s,staticClass:"share",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleToShare(e.channel,e.subMsg)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"share-icon",attrs:{src:e.iconfont,mode:""}})],1),i("v-uni-view",{staticClass:"share-font"},[t._v(t._s(e.subMsg))])],1)})),1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}))},c485:function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".physicaltester[data-v-0ca7dc8f]{margin:%?40?% auto %?20?%}.example-btn[data-v-0ca7dc8f]{top:%?126?%}.ft-btn[data-v-0ca7dc8f]{z-index:999;top:%?210?%}.prompt-text[data-v-0ca7dc8f]{color:red;font-size:%?24?%;margin:%?0?% %?46?%}.hander-cont[data-v-0ca7dc8f]{width:100%;padding-top:%?124?%}.body-title[data-v-0ca7dc8f]{width:%?660?%;padding:%?80?% 0 0;margin:0 auto;font-size:%?40?%;color:#fff}.price[data-v-0ca7dc8f]{font-size:%?26?%;color:red;padding-left:%?10?%}.uni-swiper-msg[data-v-0ca7dc8f]{width:%?580?%;margin:0 auto;padding:%?40?% 0 %?40?% %?80?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.swiper-tag[data-v-0ca7dc8f]{position:absolute;background:#fe5960;color:#fff;width:%?70?%;text-align:center;font-size:%?20?%;height:%?40?%;line-height:%?40?%;left:0;top:%?44?%}.uni-swiper-msg uni-swiper[data-v-0ca7dc8f]{width:100%;height:%?50?%}.uni-swiper-msg uni-swiper-item[data-v-0ca7dc8f]{line-height:%?50?%}.swiper-item-text[data-v-0ca7dc8f]{font-size:%?28?%;color:#fff}.test-list[data-v-0ca7dc8f]{width:%?660?%;margin:0 auto;padding:%?20?% 0 %?40?%}.test-list-kay[data-v-0ca7dc8f]{font-size:%?32?%}.test-list-value[data-v-0ca7dc8f]{width:%?560?%;margin:0 auto;height:%?60?%;line-height:%?60?%;border-bottom:1px solid #d3cece;font-size:%?24?%;color:#757575}.body-list-text[data-v-0ca7dc8f]{width:%?620?%;margin:%?40?% auto;padding:%?20?%;font-size:%?24?%;line-height:%?40?%;background:#f6f6f6;border-radius:%?10?%}.body-button[data-v-0ca7dc8f]{padding:%?20?% 0;width:%?660?%;margin:0 auto}.lanse[data-v-0ca7dc8f]{background:#0081ff;background-image:url(https://image.weilanwl.com/color2.0/cardBg.png);background-size:cover;background-position:50%}.lvse[data-v-0ca7dc8f]{background:#1cbbb4;background-image:url(https://image.weilanwl.com/color2.0/cardBg.png);background-size:cover;background-position:50%}.chengse[data-v-0ca7dc8f]{background:#e54d42;background-image:url(https://image.weilanwl.com/color2.0/cardBg.png);background-size:cover;background-position:50%}.fense[data-v-0ca7dc8f]{background:#df3897;background-image:url(https://image.weilanwl.com/color2.0/cardBg.png);background-size:cover;background-position:50%}.luse[data-v-0ca7dc8f]{background:#b8e986;background-image:url(https://image.weilanwl.com/color2.0/cardBg.png);background-size:cover;background-position:50%}.scroll-view_H[data-v-0ca7dc8f]{white-space:nowrap;width:100%}.scroll-view-item_H[data-v-0ca7dc8f]{display:inline-block;font-size:%?28?%;color:#fff;height:%?60?%;text-align:center;margin-right:%?20?%;line-height:%?59?%;padding:0 %?20?%}.scroll-view-item_H[data-v-0ca7dc8f]:nth-child(1){margin-left:%?20?%}.videoTab-active[data-v-0ca7dc8f]{background:rgba(0,0,0,.2);border-radius:%?16?% %?16?% 0 0}.videoContent[data-v-0ca7dc8f]{height:%?70?%;background:rgba(0,0,0,.2);border-radius:0 0 %?38?% %?38?%;font-size:%?24?%;color:#fff;line-height:%?70?%;padding:%?0?% %?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;letter-spacing:%?2?%}.playtext uni-text[data-v-0ca7dc8f]:nth-child(1){color:red}.gt[data-v-0ca7dc8f]{font-size:%?24?%}.play-btn[data-v-0ca7dc8f]{display:inline-block;padding-left:%?14?%}.pop-video[data-v-0ca7dc8f]{width:%?660?%;min-height:%?372?%;position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?40?% %?6?% %?50?%;background:#fff;border-radius:%?10?%;overflow:hidden}.pop-video-main[data-v-0ca7dc8f]{width:%?600?%;height:%?338?%;margin:0 auto\n\t/* border-radius: 20upx;\n\toverflow: hidden; */}.guide-video[data-v-0ca7dc8f]{width:100%;height:100%}.phySelectA[data-v-0ca7dc8f]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;padding-left:%?68?%;line-height:%?60?%}.phySelectText[data-v-0ca7dc8f]{font-size:%?24?%;color:#1bc4db;padding-left:%?16?%;padding-top:%?4?%}.video-text[data-v-0ca7dc8f]{width:%?600?%;margin:0 auto;padding:%?20?% 0;position:relative}.video-title[data-v-0ca7dc8f]{font-size:%?26?%;font-weight:700;color:#7989a3;padding-bottom:%?10?%}.video-text-cont[data-v-0ca7dc8f]{font-size:%?20?%;line-height:1.5;color:#7989a3;padding-bottom:%?10?%}.video-text .iconfont[data-v-0ca7dc8f]{width:%?40?%;height:%?40?%;font-size:%?30?%;text-align:center;line-height:%?40?%;border-radius:50%;border:1px solid #000;position:absolute;right:50%;bottom:%?-30?%;color:#000;z-index:10000}",""]),t.exports=e},ddda:function(t,e,i){"use strict";i.r(e);var s=i("c011"),a=i("b7af");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1424");var n,d=i("f0c5"),r=Object(d["a"])(a["default"],s["b"],s["c"],!1,null,"2df39949",null,!1,s["a"],n);e["default"]=r.exports},ec77:function(t,e,i){"use strict";var s=i("ee27");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("7cf6")),o={props:{show:{type:Boolean,default:!1},integralType:[String,Number],obj:Object},data:function(){var t=0;return t=44,{offsetTop:t,shareChannel:[{iconfont:"/static/weixinShare.svg",channel:"WXSceneSession",subMsg:"微信好友"},{iconfont:"/static/friendShare.svg",channel:"WXSenceTimeline",subMsg:"微信朋友圈"}]}},methods:{hide:function(){this.$emit("hidePopup")},handleToShare:function(t,e){var i=this,s=uni.getStorageSync("token"),o=uni.getStorageSync("user_Id"),n=this.obj["href"],d=this.obj["title"],r=this.obj["summary"],h=this.obj["imageUrl"],c=this.obj["id"],l=this.obj["module"],u=this.$userSharingRecord;if(void 0!=this.obj["courselock"]&&1==this.obj["courselock"]){this.obj["courselock"];u=this.$courseShareLock}console.log("courselock:"+this.obj["courselock"]),console.log(u),uni.request({url:this.$webUrl+u,header:{token:s},data:{href:n,shareChannel:e,shareContent:r,shareImg:h,shareTitle:d,shareType:0,userId:o,markId:c,module:l},method:"POST",success:function(e){0==e.data.code?(a.default.integralSave({url:i.$webUrl+i.$userintegralrecord,data:{integralOperate:1,integralType:i.integralType,title:2==i.integralType?"邀请好友送积分":"分享送积分",userId:o},token:s}),uni.share({provider:"weixin",scene:t,type:0,href:n,title:d,summary:r,imageUrl:h,success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){console.log("fail:"+JSON.stringify(t))},complete:function(){i.$emit("hidePopup")}})):a.default.notLogin(e.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}}};e.default=o},f391:function(t,e,i){var s=i("2161");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("de925d3c",s,!0,{sourceMap:!1,shadowMode:!1})}}]);