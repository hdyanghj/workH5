(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-test-HeightReportPresen"],{"08d9":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{testid:String,testtitle:String,testname:String,testpeople:String,testdate:String,testsex:[String,Number],testage:[String,Number]},data:function(){return{orgtext:""}},mounted:function(){var t=this;""==this.testid?(console.log("没id"),this.orgtext=uni.getStorageSync("orgData")):(console.log("有id"),uni.request({url:this.$webUrl+this.$getDeptByTestId,data:{testId:this.testid},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e),t.orgtext=e.data.data.deptName}}))},methods:{}};e.default=a},"12f9":function(t,e,i){"use strict";i.r(e);var a=i("81e0"),n=i("2f01");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5043");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"317c5b94",null,!1,a["a"],s);e["default"]=r.exports},"20f4":function(t,e){t.exports="data:image/jpeg;base64,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"},"2e01":function(t,e,i){"use strict";i.r(e);var a=i("cffb"),n=i("6529");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f100");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"768abc33",null,!1,a["a"],s);e["default"]=r.exports},"2f01":function(t,e,i){"use strict";i.r(e);var a=i("bc8c"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"434e":function(t,e,i){var a=i("e8b8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0abd00e8",a,!0,{sourceMap:!1,shadowMode:!1})},"496a":function(t,e,i){var a=i("ee75");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("18d3ecd0",a,!0,{sourceMap:!1,shadowMode:!1})},5043:function(t,e,i){"use strict";var a=i("434e"),n=i.n(a);n.a},"590f":function(t,e,i){t.exports=i.p+"static/img/report.23540c71.png"},6529:function(t,e,i){"use strict";i.r(e);var a=i("08d9"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"66a3":function(t,e,i){var a=i("87c2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("a93b2ed6",a,!0,{sourceMap:!1,shadowMode:!1})},"6c68":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{downImg:function(t){console.log(t),uni.showModal({title:"保存二维码",content:"是否将微信二维码保存到相册",cancelText:"立即保存",cancelColor:"#6BD8ED",confirmText:"暂不保存",confirmColor:"#919191",success:function(e){e.confirm||e.cancel&&uni.saveImageToPhotosAlbum({filePath:t,success:function(){}})}})}}};e.default=a},"7f6a":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"ewm"},[i("v-uni-view",{staticClass:"ewm-text"},[i("v-uni-image",{attrs:{src:"/static/body-report/app.png",mode:""},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.downImg("/static/body-report/app.png")}}}),i("v-uni-view",[t._v("APP")])],1),i("v-uni-view",{staticClass:"ewm-text"},[i("v-uni-image",{attrs:{src:"/static/weixin.png",mode:""},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.downImg("/static/weixin.png")}}}),i("v-uni-view",[t._v("公众号")])],1)],1),i("v-uni-view",{staticClass:"footer-text"},[t._v("想要了解更多请扫描二维码"),i("br"),t._v("下载/关注体语")])],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"81e0":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"down-main",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downBtn.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"down-body"},[a("v-uni-view",{staticClass:"down-icon"},[a("v-uni-image",{attrs:{src:i("20f4")}}),a("v-uni-text",[t._v("体语")])],1),a("v-uni-view",{staticClass:"down-btn"},[t._v("打开")])],1),a("v-uni-view",{staticClass:"down-bottom"},[a("v-uni-view",{staticClass:"down-botbtn"},[t._v("打开APP查看更多")])],1)],1),a("cover",{attrs:{testtitle:t.testtitle,testname:t.name,testsex:t.sex,testage:t.age,testid:t.testid,testdate:t.dateText}}),a("v-uni-view",{staticClass:"ContWidthBg"},[a("v-uni-view",{staticClass:"top-logo"},[a("v-uni-image",{attrs:{src:i("590f")}})],1),a("v-uni-view",{staticClass:"big-title"},[t._v(t._s(t.testtitle))]),a("v-uni-view",{staticClass:"module-title"},[t._v("一、"+t._s(t.finallyTitle))]),"sgdbcp"==t.active?a("v-uni-view",[a("v-uni-view",{staticClass:"module-content ContWidth"},[a("v-uni-view",{staticClass:"point-relative"},[a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasLineD",id:"canvasLineD"}})],1)],1),a("v-uni-view",{staticClass:"total-differ text-align-center"},[t._v("儿童青少年身高达标发育折线图")])],1),a("v-uni-view",{staticClass:"module-title"},[t._v("二、综合评价")]),a("v-uni-view",{staticClass:"ConclusionTextCot"},[a("v-uni-view",{staticClass:"ConclusionKeyCot"},[t._v("*")]),a("v-uni-view",{staticClass:"ConclusionKeyTextCot"},[t._v(t._s(t.HeightData.name)+" : "+t._s(t.HeightData.conclusion))])],1)],1):t._e(),"tzdbcp"==t.active?a("v-uni-view",[a("v-uni-view",{staticClass:"module-content ContWidth"},[a("v-uni-view",{staticClass:"point-relative"},[a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasLineD",id:"canvasLineD"}})],1)],1),a("v-uni-view",{staticClass:"total-differ text-align-center"},[t._v("6-18岁儿童青少年体重达标发育折线图")])],1),a("v-uni-view",{staticClass:"module-title"},[t._v("二、综合评价")]),a("v-uni-view",{staticClass:"ConclusionTextCot"},[a("v-uni-view",{staticClass:"ConclusionKeyCot"},[t._v("*")]),a("v-uni-view",{staticClass:"ConclusionKeyTextCot"},[t._v(t._s(t.WeightData.name)+" : "+t._s(t.WeightData.conclusion))])],1)],1):t._e(),a("v-uni-view",{staticClass:"end-text"},[a("v-uni-view",[t._v("体语意见：我们建议每三个月测试一次。")]),a("v-uni-view",{staticClass:"end-text-color"},[t._v("此测评结果不作为医疗诊断依据。")]),a("v-uni-view",[t._v("测评时间："+t._s(t.testDate))])],1),a("ewm")],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"87c2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".ewm[data-v-4def9b1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ewm uni-image[data-v-4def9b1e]{width:%?120?%;height:%?120?%}.ewm-text[data-v-4def9b1e]{text-align:center;font-size:%?22?%;color:#484848}.ewm-text uni-view[data-v-4def9b1e]{margin-bottom:%?6?%}.ewm-text[data-v-4def9b1e]:nth-child(1){margin-right:%?74?%}.footer-text[data-v-4def9b1e]{font-size:%?24?%;color:#484848;text-align:center;line-height:1.5}",""]),t.exports=e},bb2e:function(t,e,i){"use strict";i.r(e);var a=i("7f6a"),n=i("c4a9");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e23d");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"4def9b1e",null,!1,a["a"],s);e["default"]=r.exports},bc8c:function(t,e,i){"use strict";var a=i("ee27");i("c975"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2e01")),o=a(i("bb2e")),s=a(i("7cf6")),c=a(i("0a68")),r={components:{cover:n.default,ewm:o.default},data:function(){return{testtitle:"",pixelRatio:1,HeightData:{name:"",heights:[],gapValue:"",conclusion:""},WeightData:{name:"",bmis:[],gapValue:"",conclusion:"",bmi:"",age:""},MinHeight:null,UserId:null,active:null,title:"",name:"",age:"",sex:"",dateText:"",testDate:"",finallyTitle:"",testid:""}},onLoad:function(t){this.MinHeight=uni.getSystemInfoSync().windowHeight+"px",this.UserId=t.id,this.active=t.active,"sgdbcp"==t.active?(this.testtitle="身高达标测评报告",this.finallyTitle="身高达标测评结果",this.DetailsLoder(this.HeightData,this.$HeightTestingPresen)):(this.testtitle="体重达标测评报告",this.finallyTitle="体重达标测评结果",this.DetailsLoder(this.WeightData,this.$weightTestingPresen)),this.cWidth=uni.upx2px(680),this.cHeight=uni.upx2px(500)},methods:{downBtn:function(){s.default.downBtn()},showLine:function(t,e,i,a){var n=null;n="sgdbcp"==this.active?{min:40,max:230,splitNumber:19}:{min:10,max:150,splitNumber:14},new c.default({$this:this,canvasId:t,type:"line",fontSize:8,legend:!1,dataLabel:!1,dataPointShape:!0,pixelRatio:this.pixelRatio,categories:e.categories,series:e.series,animation:!0,definedAge:this.age,xAxis:{type:"grid",gridColor:"#484848",fontColor:"black",gridType:"dash",dashLength:10},yAxis:{gridType:"dash",gridColor:"#484848",fontColor:"black",splitNumber:n.splitNumber,dashLength:10,min:n.min,max:n.max},width:this.cWidth*this.pixelRatio,height:this.cHeight*this.pixelRatio})},DetailsLoder:function(t,e){var i=this;uni.request({url:this.$webUrl+e+this.UserId,method:"GET",success:function(e){if(0==e.data.code){i.userName=e.data.data.name,i.userSex=e.data.data.sex,i.userAge=parseInt(e.data.data.age),i.testDate=e.data.data.createDate.substring(0,11);var a=null,n=null,o=null;t.name=e.data.data.name,t.conclusion=e.data.data.conclusion,"sgdbcp"==i.active?(i.name=e.data.data.name,i.age=parseInt(e.data.data.age),i.sex=e.data.data.sex,i.dateText=e.data.data.createDate.substring(0,4)+"-"+e.data.data.createDate.substring(5,7)+"-"+e.data.data.createDate.substring(8,10),t.height=e.data.data.height,t.age=parseInt(e.data.data.age),a=[],o=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],-1!=o.indexOf(t.age)&&(a[o.indexOf(t.age)]=t.height,a.length=o.length),n="男"==e.data.data.sex?[{data:["50.4","76.5","88.5","97.5","104.1","111.3","117.7","125.48","130.72","135.81","140.76","146.01","152.18","160.19","165.63","169.02","170.58","171.39","171.42"],color:"#1BC4DB"},{data:a,color:"#FF3A3A"}]:[{data:["49.7","75.0","87.2","96.3","103.1","110.2","116.6","124.13","129.34","134.91","141.18","147.36","152.41","156.07","157.78","158.47","158.93","159.18","160.01"],color:"#1BC4DB"},{data:a,color:"#FF3A3A"}]):(i.name=e.data.data.name,i.age=parseInt(e.data.data.age),i.sex=e.data.data.sex,i.dateText=e.data.data.createDate.substring(0,4)+"-"+e.data.data.createDate.substring(5,7)+"-"+e.data.data.createDate.substring(8,10),t.weight=e.data.data.weight,t.age=parseInt(e.data.data.age),a=[],o=[6,7,8,9,10,11,12,13,14,15,16,17,18],a.length=o.length,-1!=o.indexOf(t.age)&&(a[o.indexOf(t.age)]=t.weight),n="男"==e.data.data.sex?[{data:["27.55","32.41","38.49","44.35","50.01","56.07","63.04","70.83","77.20","80.60","82.05","82.70","83"],color:"#1BC4DB"},{data:a,color:"#FF3A3A"}]:[{data:["26.3","29.89","34.23","39.41","45.97","53.33","59.64","63.45","65.36","66.30","66.69","66.82","66.89"],color:"#1BC4DB"},{data:a,color:"#FF3A3A"}]);var s={bodyHeightRemale:{categories:o,series:n}},c=[];c=s.bodyHeightRemale,i.showLine("canvasLineD",c,0,200)}},fail:function(t){}})}}};e.default=r},c4a9:function(t,e,i){"use strict";i.r(e);var a=i("6c68"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},cffb:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"rip-one"},[i("v-uni-view",{staticClass:"rip-tishi"},[t._v("此测评结果不作为医疗诊断依据")]),i("v-uni-view",[i("v-uni-view",{staticClass:"rip-bgi"},[i("v-uni-image",{attrs:{src:"http://public.qilinsports.com/picture/coverpage/jiance-index-logo.png",mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"rip-title"},[t._v("体语健康测评管理系统")]),i("v-uni-view",{staticClass:"rip-report-name"},[t._v(t._s(t.testtitle))]),i("v-uni-view",{staticClass:"rip-people-info"},[i("v-uni-view",[t._v("姓名：")]),i("v-uni-view",{staticClass:"rip-people-text"},[t._v(t._s(t.testname))])],1),i("v-uni-view",{staticClass:"rip-people-info"},[i("v-uni-view",[t._v("性别：")]),i("v-uni-view",{staticClass:"rip-people-text"},[t._v(t._s(t.testsex))])],1),t.testage?i("v-uni-view",{staticClass:"rip-people-info"},[i("v-uni-view",[t._v("年龄：")]),i("v-uni-view",{staticClass:"rip-people-text"},[t._v(t._s(t.testage))])],1):t._e(),i("v-uni-view",{staticClass:"rip-date"},[t._v("单位名称：北京体语科技有限公司"),i("br"),t._v("测评日期："+t._s(t.testdate))])],1)],1),i("v-uni-view",{staticClass:"rip-two"},[i("v-uni-view",{staticClass:"rip-two-main"},[i("v-uni-view",{staticClass:"rip-two-title"},[t._v("体语健康测评管理系统简介")]),i("v-uni-view",{staticClass:"introduction"},[i("v-uni-view",[t._v("体语，是解读身体语言的科学。身体语言有两种表现形式：一是内在表现，如脏器发出的信号、气血运行发出的信号等。二是外在表现，如身体姿态、功能状况、运动能力等。而身体语言的外在表现，实际上是内在信号的外显。体姿作为人体语言最外显的部分，能够透露出大量的信息。")]),i("v-uni-view",[t._v("国内权威机构统计，八成青少年儿童体姿不良。走路中探颈、驼背46.1%，上体晃动27.5%，站姿头位不正41.2%，双肩不平38.3%，坐姿塌腰、弯背23.6%，X型腿、O型腿17.7%，各项均良好者仅有12.8%。[1]")]),i("v-uni-view",[t._v("而体姿不良将直接或间接引发肩/颈/背/胸等疼痛、头晕、手臂麻木、肥胖、平衡下降、心慌、心跳加速、心肺功能受损、便秘，甚至牙齿咬合不齐、视力不良等多种问题。")]),i("v-uni-view",[t._v("但是，很多人对体姿问题视而不见，甚至没有概念。这不仅影响孩子的生长发育，还可能造成本不应有的损害。而传统的人体姿态评估，严重受时间、场地、人员、资金限制，只能是少数有钱人的特权，不能为广大人民群众提供帮助。")]),i("v-uni-view",[t._v("体语科技认为，每一个人，不分贫富，不分地域，都应该得到相同的基本健康帮助。用科技实现健康平等，是我们追求的目标。")]),i("v-uni-view",[t._v("为了帮助每一个人解决体姿问题，我们历时8年研发与实践，涵盖从2.5岁到60岁年龄段，利用深度卷积神经网络模型开发出体姿人工智能测评仪。它从测评到评估，最后到解决方案，全部基于人工智能和现代科技实现。")]),i("v-uni-view",[t._v("体语®体姿人工智能测评仪集测试、评估、干预“三位一体”，突破时、空、人、钱限制，让每一个人都能测得起，用得好。它由体姿测评和辅助测评两大体系构成，涵盖体姿、生长发育、身高达标、体重达标、视力、营养、功能、体能、骨龄、幼儿体质、小学生体质、中考体育、高中生体质、成人体质共计14个测评项目。")]),i("v-uni-view",[t._v("体语健康测评管理系统是一套由体姿人工智能测评仪、硬件、软件、APP等共同组成的、完整度高、功能齐备的人工智能健康测评及解决方案体系，惠及每一位珍视健康的人。")]),i("v-uni-view",[t._v("早发现，早干预，少遗憾，再无忧。")]),i("v-uni-view",[t._v("体语科技，用科技实现健康平等。")])],1),i("v-uni-view",{staticClass:"rip-two-split"},[t._v("[1]《8成青少年形体不良 常见探颈、驼背、窝肩》，http://health.sohu.com/20070427/n249741662.shtml")]),i("v-uni-view",{staticClass:"rip-two-footer"},[t._v("北京体语科技有限公司")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},e23d:function(t,e,i){"use strict";var a=i("66a3"),n=i.n(a);n.a},e8b8:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".big-title[data-v-317c5b94]{font-size:%?36?%;text-align:center;margin:0 0 %?40?%}.top-logo[data-v-317c5b94]{text-align:center}.top-logo uni-image[data-v-317c5b94]{width:%?120?%;height:%?120?%}.end-text[data-v-317c5b94]{font-size:%?26?%;line-height:1.8;padding-bottom:%?60?%;padding-left:%?40?%}.end-text-color[data-v-317c5b94]{color:#e3557c}.module-title[data-v-317c5b94]{font-size:%?32?%;padding-left:%?40?%}.ContWidthBg[data-v-317c5b94]{width:100%}.ContWidth[data-v-317c5b94]{width:%?662?%;margin:0 auto}.TitleCont[data-v-317c5b94]{padding-top:%?102?%;font-size:%?40?%;font-family:SourceHanSansCN-Medium,SourceHanSansCN;font-weight:500;color:#484848;line-height:%?60?%}.TipsCont[data-v-317c5b94]{padding-top:%?80?%;font-size:%?24?%;font-family:SourceHanSansCN-Regular,SourceHanSansCN;font-weight:400;color:#484848}.module-content[data-v-317c5b94]{padding:%?40?% %?0?%;width:100%}.point-relative[data-v-317c5b94]{position:relative}.qiun-charts[data-v-317c5b94]{width:%?680?%;height:%?500?%;margin:0 auto;background-color:#fff}.charts[data-v-317c5b94]{width:%?680?%;height:%?500?%}.total-differ[data-v-317c5b94]{color:#484848;font-size:%?28?%}.text-align-center[data-v-317c5b94]{text-align:center}.ConclusionText[data-v-317c5b94]{padding-top:%?50?%;font-size:%?32?%;font-family:SourceHanSansCN-Medium,SourceHanSansCN;font-weight:500;color:#484848;line-height:%?36?%;letter-spacing:1px}.ConclusionTextCot[data-v-317c5b94]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?30?%;font-size:%?24?%;font-family:SourceHanSansCN-Medium,SourceHanSansCN;font-weight:500;color:#484848;line-height:%?36?%;letter-spacing:1px}.ConclusionKeyCot[data-v-317c5b94]{margin-right:%?10?%;color:red}.down-main[data-v-317c5b94]{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;z-index:99}.down-body[data-v-317c5b94]{width:%?660?%;height:%?140?%;padding:0 %?46?%;position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?40?%;background:#fff}.down-icon[data-v-317c5b94]{line-height:%?100?%}.down-icon uni-image[data-v-317c5b94]{width:%?80?%;height:%?80?%;vertical-align:middle;border-radius:%?10?%;margin-right:%?20?%;margin-top:%?-4?%}.down-icon uni-text[data-v-317c5b94]{font-size:%?28?%}.down-btn[data-v-317c5b94]{width:%?116?%;height:%?48?%;background:#cd1942;border-radius:%?24?%;text-align:center;line-height:%?48?%;font-size:%?24?%;color:#fff}.down-bottom[data-v-317c5b94]{width:%?750?%;height:%?200?%;padding-top:%?40?%;background:hsla(0,0%,100%,.6);position:fixed;bottom:0;left:0;z-index:9}.down-botbtn[data-v-317c5b94]{width:%?660?%;height:%?80?%;background:#cd1942;border-radius:%?40?%;margin:0 auto;text-align:center;line-height:%?80?%;font-size:%?24?%;color:#fff}",""]),t.exports=e},ee75:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".introduction[data-v-768abc33]{padding:%?30?% 0}.introduction uni-view[data-v-768abc33]{letter-spacing:%?2?%;line-height:1.5;margin-bottom:%?24?%}.introduction p sup[data-v-768abc33]{display:inline-block}.rip-tishi[data-v-768abc33]{width:90%;margin-top:%?120?%;text-align:left;font-size:%?24?%;letter-spacing:1px;color:#fff;text-align:left}.rip-one[data-v-768abc33]{width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-image:url(http://public.qilinsports.com/picture/coverpage/rip-bgi.png);background-repeat:no-repeat;background-size:cover;background-color:#fff}.rip-two[data-v-768abc33]{width:100%;font-size:%?26?%;color:#3e495c;line-height:1.5}.rip-two .rip-two-main[data-v-768abc33]{padding:%?50?%}.rip-bgi[data-v-768abc33]{text-align:center}.rip-bgi uni-image[data-v-768abc33]{width:%?140?%;height:%?94?%;margin-top:%?200?%}.rip-title[data-v-768abc33]{color:#fff;font-size:%?30?%;margin:%?28?% %?0?% %?60?% %?0?%;text-align:center}.rip-report-name[data-v-768abc33]{color:#fff;font-size:%?36?%;text-align:center;margin-bottom:%?200?%}.rip-people-info[data-v-768abc33]{display:-webkit-box;display:-webkit-flex;display:flex;color:#fff;font-size:%?28?%;margin:%?0?% %?80?% %?20?%}.rip-people-info .rip-people-text[data-v-768abc33]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;border-bottom:1px solid hsla(0,0%,100%,.75)}.rip-date[data-v-768abc33]{font-size:%?24?%;color:#fff;line-height:%?44?%;text-align:center;margin-top:%?120?%}.rip-two-footer[data-v-768abc33]{text-align:right;margin-top:%?60?%}.rip-two-title[data-v-768abc33]{text-align:center;font-size:%?36?%;font-weight:700}",""]),t.exports=e},f100:function(t,e,i){"use strict";var a=i("496a"),n=i.n(a);n.a}}]);