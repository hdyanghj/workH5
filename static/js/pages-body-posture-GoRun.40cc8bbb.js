(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-posture-GoRun"],{1409:function(t,e,i){"use strict";i.r(e);var a=i("680b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"190f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,e=getCurrentPages();this.route=e[e.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var e,i=this,a=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){i.systemType=t}}),e="ios"==this.systemType.platform?2:1;var n={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:a,platform:e,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:n,success:function(t){0==t.data.code&&(clearInterval(i.Timer),i.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};e.default=a},"1dca":function(t,e,i){"use strict";i.r(e);var a=i("50ee"),n=i("7003");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0f5ec893",null,!1,a["a"],s);e["default"]=d.exports},"358e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".Cont[data-v-7790bd0f]{letter-spacing:%?2?%;padding-bottom:%?40?%}.Back[data-v-7790bd0f]{padding:0 %?48?%;width:%?80?%;height:%?80?%;padding-top:%?104?%}.Back>uni-image[data-v-7790bd0f]{width:100%;height:100%}.FollowTitle[data-v-7790bd0f]{padding:0 %?48?%;padding-top:%?44?%;font-size:%?40?%;line-height:%?40?%;color:#001733}.RunImgLevelTitle[data-v-7790bd0f],\n.FollowLevelTitle[data-v-7790bd0f]{padding:0 %?48?%;font-size:%?24?%;line-height:%?40?%;color:#f0cf8d;padding-top:%?14?%}.RunInfo[data-v-7790bd0f]{width:%?662?%;height:%?112?%;background:#fff;box-shadow:%?8?% %?8?% %?24?% 0 rgba(0,23,51,.15);margin:0 auto;margin-top:%?48?%}.RunInfoName[data-v-7790bd0f]{font-size:%?36?%;line-height:%?36?%;color:#484848;padding:%?16?% 0 %?16?% %?32?%}.RunInfoName>uni-text[data-v-7790bd0f]{font-size:%?24?%;color:#195092;padding-left:%?24?%}.RunInFoText[data-v-7790bd0f]{padding-left:%?32?%;font-size:%?24?%;line-height:%?24?%;color:#484848}.RunInFoText>uni-text[data-v-7790bd0f]{padding-right:%?12?%}.RunImgTitle[data-v-7790bd0f]{padding:%?48?% 0 %?16?% %?48?%;font-size:%?32?%;line-height:%?32?%;color:#001733;display:-webkit-box;display:-webkit-flex;display:flex}.RunImgLevelTitle[data-v-7790bd0f]{padding-top:0}.RunUploadImg[data-v-7790bd0f]{padding:0 %?48?%}.RunUploadImg[data-v-7790bd0f]{padding-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex}.RunUploadImgText[data-v-7790bd0f]{width:%?460?%;font-size:%?28?%;color:#919191;padding-left:%?36?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.RunUploadImgCont[data-v-7790bd0f]{width:%?144?%;height:%?168?%;background:#fff;box-shadow:%?8?% %?8?% %?24?% 0 rgba(0,23,51,.15);border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.RunUploadImgCont>uni-view[data-v-7790bd0f]{text-align:center}.RunUploadImgFor[data-v-7790bd0f]{width:%?144?%;height:%?168?%;position:relative;margin-right:%?26?%}.RunUploadImgForMar[data-v-7790bd0f]{margin-right:0}.RunUploadImgFor>uni-video[data-v-7790bd0f],\n.RunUploadImgFor>uni-image[data-v-7790bd0f]{position:absolute;left:0;top:0;z-index:888!important;width:100%;height:100%;box-shadow:%?8?% %?8?% %?24?% 0 rgba(0,23,51,.15);border-radius:%?8?%}.CloseBtn[data-v-7790bd0f]{width:%?32?%;height:%?32?%;color:#195092;text-align:center;line-height:%?32?%;font-size:%?36?%;position:absolute;bottom:%?-36?%;left:50%;margin-left:%?-16?%;z-index:999!important}.RunUploadImgIcon[data-v-7790bd0f]{width:%?46?%;height:%?40?%}.RunCameraText[data-v-7790bd0f]{font-size:%?24?%;color:#919191}.DescribeTitle[data-v-7790bd0f]{padding:%?56?% 0 %?16?% %?48?%;font-size:%?32?%;color:#001733}.DescribeCont[data-v-7790bd0f]{width:%?654?%;height:%?182?%;margin:0 auto;background:#fff;box-shadow:%?8?% %?8?% %?24?% 0 rgba(0,23,51,.15);border-radius:%?8?%;border:%?2?% solid #195092;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?32?%}.DescribeSpot[data-v-7790bd0f]{width:%?12?%;height:%?12?%;background:#195092;border-radius:50%;margin:%?44?% %?24?% 0 %?32?%}.DescribeCont>uni-textarea[data-v-7790bd0f]{padding:%?32?%;padding-left:0;max-height:calc(%?182?% - %?64?%);font-size:%?24?%;line-height:%?36?%}.UploadImgBut[data-v-7790bd0f]{width:%?654?%;height:%?88?%;margin:0 auto;background:#195092;border-radius:%?44?%;font-size:%?32?%;color:#fff;line-height:%?88?%;text-align:center;margin-top:%?66?%}.UploadImgTips[data-v-7790bd0f]{width:calc(%?654?%);margin:0 auto;border-bottom:%?2?% solid #a9b1ba;padding:%?24?% 0 %?24?%;font-size:%?28?%;line-height:%?28?%;color:#b91614}.ReportTitle[data-v-7790bd0f]{font-size:%?36?%;line-height:%?36?%;color:#001733;padding:%?48?% %?48?% %?24?%}.ReportLeverTitle[data-v-7790bd0f]{font-size:%?24?%;color:#f0cf8d;line-height:%?24?%;padding:0 %?48?% %?16?%}.ReportList[data-v-7790bd0f]{width:%?654?%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;background:#fa7268;box-shadow:0 %?2?% %?8?% 0 rgba(0,23,51,.45);border-radius:%?16?%;margin:0 auto;margin-top:%?32?%;position:relative;overflow:hidden}.ReportInfo[data-v-7790bd0f]{width:%?532?%;height:%?120?%;background:#fff;box-shadow:%?4?% %?4?% %?16?% 0 rgba(0,23,51,.15);border-radius:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex}.ReportImage[data-v-7790bd0f]{width:%?52?%;height:%?52?%;margin:%?34?% %?16?% 0 %?32?%}.ReportImage>uni-image[data-v-7790bd0f]{width:100%;height:100%}.ReportName[data-v-7790bd0f]{font-size:%?28?%;line-height:%?28?%;color:#001733;padding-top:%?32?%}.ReportTime[data-v-7790bd0f]{font-size:%?24?%;line-height:%?24?%;color:#919191;padding-top:%?4?%}.NotState[data-v-7790bd0f]{width:calc(%?654?% - %?82?%);background:#f9f9f9;box-shadow:%?4?% %?4?% %?16?% 0 rgba(0,23,51,.15);border-radius:%?16?%;padding:%?32?% %?50?% %?32?% %?32?%;margin:0 auto;margin-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.NotState>uni-image[data-v-7790bd0f]{width:%?48?%;height:%?48?%}.ReportState[data-v-7790bd0f]{width:%?122?%;height:100%;text-align:center;line-height:%?120?%;font-size:%?24?%;color:#fff}.NotStateInfo[data-v-7790bd0f]{display:-webkit-box;display:-webkit-flex;display:flex}.NotStateInfo .ReportImage[data-v-7790bd0f]{margin:0;margin-right:%?16?%}.NotStateInfo .ReportName[data-v-7790bd0f]{padding-top:0}.ImgEnlarge[data-v-7790bd0f]{width:100%;height:100%;background:#000;position:fixed;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:9999}.ImgEnlarge>uni-image[data-v-7790bd0f]{width:100%;height:100%}.ImgEnlarge>uni-video[data-v-7790bd0f]{width:100%;height:100%}.NoReport[data-v-7790bd0f]{width:%?654?%;height:%?456?%;margin-top:%?48?%;margin:0 auto}.NoReport>uni-image[data-v-7790bd0f]{width:100%;height:100%}.NoReportText[data-v-7790bd0f]{font-size:%?28?%;color:#353535;padding:0 %?48?%;padding-top:%?16?%;line-height:%?44?%}.ShotKnow[data-v-7790bd0f]{width:calc(%?654?% - %?64?%);padding:%?32?%;background:#f4f4f4;border-radius:%?16?%;margin:0 auto;margin-top:%?32?%;font-size:%?28?%;color:#919191}.ShotKnowText[data-v-7790bd0f]{padding-top:%?20?%;line-height:%?48?%}.IsShowFalse[data-v-7790bd0f]{padding:0;text-align:center;line-height:%?112?%}.slide_list[data-v-7790bd0f]{-webkit-transition:all .1s;transition:all .1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;min-width:200%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.now-message-info[data-v-7790bd0f],\n.removeM[data-v-7790bd0f]{float:left}.now-message-info[data-v-7790bd0f]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;\n\t/* justify-content: space-between; */font-size:16px;clear:both;padding:0}.removeM[data-v-7790bd0f]{height:calc(100% - %?32?%);width:%?100?%;padding-right:%?40?%;margin-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.RemoveBg[data-v-7790bd0f]{width:%?76?%;height:%?76?%;background:#f2f2f2;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.RemoveBg>uni-image[data-v-7790bd0f]{width:%?40?%;height:%?40?%}.ReportListCont[data-v-7790bd0f]{overflow:hidden;padding-bottom:%?6?%}",""]),t.exports=e},"3dce":function(t,e,i){"use strict";var a=i("9f7d"),n=i.n(a);n.a},"50ee":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"680b":function(t,e,i){"use strict";var a=i("ee27");i("a4d3"),i("e01a"),i("4160"),i("c975"),i("a434"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("7cf6")),o=a(i("ab14")),s=a(i("1dca")),r={components:{uniLoadMore:o.default,buryingpoint:s.default},data:function(){return{start_slide_x:0,IsShow:!0,describe:"",ImgVideo:[],RatedTitle:null,person_Id:null,token:uni.getStorageSync("token"),memberUrl:null,memberDate:null,id:null,bodyMsg:{name:"",birthday:"",age:"",sex:"",height:"",weight:"",totalAmount:null,memberId:"",userId:"",orderSource:1},loadModal:!1,progressText:"",submitText:"",ImgEnlargeUrl:"",listItem:[],pageNum:1,loadingType:0,isClick:!0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"我是有底线的"}}},onLoad:function(t){this.id=uni.getStorageSync("user_Id"),1==t.ind?(this.RatedTitle="坐姿",this.bodyMsg.postureType=1):2==t.ind?(this.RatedTitle="走姿",this.bodyMsg.postureType=2):(this.RatedTitle="跑姿",this.bodyMsg.postureType=3),this.GetHistory()},onPullDownRefresh:function(){this.pageNum=1,this.ImgVideo=[],this.listItem=[],this.describe="",this.GetHistory(),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onUnload:function(){this.$refs.buryingpoint.buryingpoint(this.RatedTitle)},onHide:function(){this.$refs.buryingpoint.buryingpoint(this.RatedTitle)},onReachBottom:function(){this.GetHistory()},onShow:function(){var t=this;this.detail(),this.obtainPrice(),setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},computed:{Screen_width:function(){return uni.getSystemInfoSync().windowWidth}},methods:{SubmitBtn:function(){var t=this;this.ImgVideo.length&&this.describe?(this.bodyMsg.description=this.describe,this.bodyMsg.fileUrl=this.ImgVideo.toString(),this.isClick=!1,setTimeout((function(){t.isClick=!0}),2e3),uni.request({url:this.$webUrl+this.$GoRunHold,header:{token:""+this.token},data:this.bodyMsg,method:"POST",success:function(e){1===e.data.code?uni.navigateTo({url:"/pages/communication/pay?fee="+t.bodyMsg.totalAmount+"&orderId="+e.data.data.orderId+"&orderNum="+e.data.data.orderNum+"&body="+t.RatedTitle+"&ind="+t.bodyMsg.postureType}):(uni.showToast({title:"提交成功",duration:3e3,icon:"none"}),t.ImgVideo=[],t.describe="",t.pageNum=1,t.GetHistory())},fail:function(t){uni.showToast({title:"网络连接不稳定，请检查网络",duration:3e3,icon:"none"})}})):uni.showToast({icon:"none",title:"请填写信息",duration:1500})},GetHistory:function(){var t=this;uni.request({url:this.$webUrl+this.$GoRunList,method:"GET",data:{page:this.pageNum++,limit:4,userId:uni.getStorageSync("user_Id"),token:uni.getStorageSync("token"),postureType:this.bodyMsg.postureType},success:function(e){if(0===e.data.code){var i=e.data.data.list;4===i.length?t.loadingType=0:t.loadingType=2;for(var a=0;a<i.length;a++)t.$set(i[a],"slide_x",0),t.listItem.push(i[a])}},fail:function(t){}})},removeM:function(t,e){var i=this;uni.showModal({title:"提示",content:"你确定要删除吗?",cancelText:"删除",cancelColor:"red",confirmText:"取消",success:function(a){a.confirm||a.cancel&&uni.request({url:i.$webUrl+i.$GoRunRemove,header:{"content-type":"application/x-www-form-urlencoded",token:""+i.token},data:{id:t},method:"POST",success:function(t){0===t.data.code&&(i.listItem.splice(e,1),uni.showToast({title:"删除成功",duration:3e3,icon:"none"}))},fail:function(t){uni.showToast({title:"网络连接不稳定，请检查网络",duration:3e3,icon:"none"})}})}})},BackOff:function(){uni.switchTab({url:"/pages/index/main"})},chooseFile:function(){var t=this;this.IsShow?"坐姿"===this.RatedTitle?uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){t.uploadFile(e.tempFilePaths[0])}}):uni.chooseVideo({count:1,sourceType:["camera","album"],compressed:!0,success:function(e){e.size/1048576>30?uni.showToast({icon:"none",title:"视频大于30M，请修改视频分辨率.",duration:1500}):t.uploadFile(e.tempFilePath)}}):uni.showToast({icon:"none",duration:3e3,title:"请添加体测人"})},uploadFile:function(t,e){var i,a,n=this;this.loadModal=!0,this.submitText="上传中...","坐姿"===this.RatedTitle?(i=18,a="image"):"走姿"===this.RatedTitle?(i=19,a="video"):(i=20,a="video"),uni.uploadFile({url:this.$webUrl+this.$upAvatar,filePath:t,fileType:a,name:"file",formData:{type:i},success:function(t){if(200==t.statusCode){var e=JSON.parse(t.data.toString()).filename;n.ImgVideo.push(e),n.loadModal=!1,n.submitText=""}else uni.showToast({icon:"none",title:"上传失败！",duration:2e3})},fail:function(t){console.log(JOSN.stringify(t))}})},chooseImg:function(){this.ImgEnlargeUrl=""},ImgEnlargeBtn:function(t){this.ImgEnlargeUrl=this.ImgVideo[t]},obtainPrice:function(){var t,e=this;t="坐姿"===this.RatedTitle?{type:13}:"走姿"===this.RatedTitle?{type:14}:{type:15},uni.request({url:this.$webUrl+this.$pricemanagePage,data:t,success:function(t){console.log(t);var i=t.data.data.list[0].chargeStatus;2==i?e.bodyMsg.totalAmount=t.data.data.list[0].preferentialPrice:1==i?e.bodyMsg.totalAmount=t.data.data.list[0].price:3!=i&&4!=i||(e.bodyMsg.totalAmount=0)}})},CloseBtn:function(t){this.ImgVideo.splice(t,1)},detail:function(){this.person_Id=uni.getStorageSync("person_Id"),""!=this.token&&(""==this.person_Id?(this.memberUrl=this.$UserDefault,this.memberDate={userId:this.id}):(this.memberUrl=this.$getSpecifiedMember,this.memberDate={id:this.person_Id}),this.huoquTcr())},cancelBtn:function(){this.loadModal=!1},huoquTcr:function(){var t=this;uni.request({url:this.$webUrl+this.memberUrl,header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},data:this.memberDate,method:"GET",success:function(e){if(0==e.data.code){var i=e.data.data;if(""==i||null==i)return void(t.IsShow=!1);var a=t.howold(i.birthday),o=Number(a.substring(0,a.indexOf("岁")));i&&(t.bodyMsg.name=i.memberName,t.bodyMsg.age=o,t.bodyMsg.sex=i.memberSex,t.bodyMsg.height=i.height,t.bodyMsg.weight=i.weight,t.bodyMsg.memberId=i.id,t.bodyMsg.userId=i.userId,t.bodyMsg.birthday=i.birthday,t.IsShow=!0)}else n.default.notLogin(e.data)},fail:function(t){uni.showToast({title:"网络连接不稳定，请检查网络",duration:3e3,icon:"none"})}})},selectBut:function(){uni.setStorage({key:"jump_Key",data:"body"}),uni.navigateTo({url:"../center/add-list?source=1"})},howold:function(t){if(null!==t&&void 0!==t&&""!==t){var e=new Date,i=new Date(t),a=e.getTime()-i.getTime(),n=parseInt(a/864e5);if(n<30)return n+"天";if(n>=30&&n<=365){var o=parseInt(n%365/30)+"月"+parseInt(n%365%30)+"天";if(0==parseInt(n%365%30)){o=parseInt(n%365/30)+"月";return o}return o}if(n>365&&parseInt(n%365/30)<13){o=parseInt(n/365)+"岁"+parseInt(n%365/30)+"月";if(0==parseInt(n%365/30)){var s=t.split("-");o="";o=s[2]<=e.getDate()?parseInt(n/365)+"岁":parseInt(n/365-1)+"岁"}return o}}},ToReport:function(t){var e=this;t.payStatus?t.status?uni.navigateTo({url:"/pages/body-posture/GoRunReport?id="+t.id}):uni.showToast({title:"测试进行中，稍后查看",duration:3e3,icon:"none"}):uni.request({url:this.$webUrl+this.$GoRunPay,header:{"content-type":"application/x-www-form-urlencoded",token:""+this.token},data:{recordId:t.id,postureType:this.bodyMsg.postureType},method:"POST",success:function(t){0===t.data.code&&uni.navigateTo({url:"/pages/communication/pay?fee="+e.bodyMsg.totalAmount+"&orderId="+t.data.data.orderId+"&orderNum="+t.data.data.orderNum+"&body="+e.RatedTitle+"&ind="+e.bodyMsg.postureType})},fail:function(t){uni.showToast({title:"网络连接不稳定，请检查网络",duration:3e3,icon:"none"})}})},touchStart:function(t,e){var i=this;this.startTime=t.timeStamp,this.start_slide_x=this.listItem[e].slide_x,uni.createSelectorQuery().selectAll(".removeM").boundingClientRect().exec((function(t){null!=t[0]&&(i.btnWidth=-1*t[0][e].width)})),this.startX=t.touches[0].pageX,this.lastX=this.startX,this.listItem.forEach((function(t,i){i!==e&&(t.slide_x=0)}))},touchMove:function(t,e){var i=t.touches[0].pageX,a=i-this.lastX,n=this.listItem[e].slide_x+a;n<=0&&n>=this.btnWidth&&(this.listItem[e].slide_x=n),this.lastX=i},recover:function(t){0!=this.listItem.length&&(this.listItem[t].slide_x=0)},touchEnd:function(t,e){var i=10,a=t.timeStamp,n=this.startX-this.lastX;Math.abs(a-this.startTime)>200&&(i=this.btnWidth/-2),this.listItem[e].slide_x=n>i?this.btnWidth:n<-1*i?0:this.start_slide_x}}};e.default=r},7003:function(t,e,i){"use strict";i.r(e);var a=i("190f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"747c":function(t,e,i){"use strict";i.r(e);var a=i("7a1a"),n=i("1409");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3dce");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7790bd0f",null,!1,a["a"],s);e["default"]=d.exports},"7a1a":function(t,e,i){"use strict";var a={buryingpoint:i("1dca").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Cont"},[i("v-uni-view",{staticClass:"Back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackOff()}}},[i("v-uni-image",{attrs:{mode:"aspectFill",src:"/static/Home/Back.png"}})],1),i("v-uni-view",{staticClass:"FollowTitle"},[t._v(t._s(t.RatedTitle))]),i("v-uni-view",{staticClass:"FollowLevelTitle"},[t._v("了解身体，拥抱健康")]),t.IsShow?i("v-uni-view",{staticClass:"RunInfo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectBut()}}},[i("v-uni-view",{staticClass:"RunInfoName"},[t._v(t._s(t.bodyMsg.name)),i("v-uni-text",[t._v("点击修改")])],1),i("v-uni-view",{staticClass:"RunInFoText"},[t.bodyMsg.sex?i("v-uni-text",[t._v("性别："+t._s(1===t.bodyMsg.sex?"男":"女"))]):t._e(),t.bodyMsg.age?i("v-uni-text",[t._v("年龄："+t._s(t.bodyMsg.age)+"岁")]):t._e(),t.bodyMsg.height?i("v-uni-text",[t._v("身高："+t._s(t.bodyMsg.height)+"cm")]):t._e(),t.bodyMsg.weight?i("v-uni-text",[t._v("体重："+t._s(t.bodyMsg.weight)+"Kg")]):t._e()],1)],1):t._e(),t.IsShow?t._e():i("v-uni-view",{staticClass:"RunInfo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectBut()}}},[i("v-uni-view",{staticClass:"RunInfoName IsShowFalse"},[i("v-uni-text",[t._v("请添加测试人")])],1)],1),i("v-uni-view",{staticClass:"RunImgTitle"},[t._v("上传图片/视频")]),i("v-uni-view",{staticClass:"RunImgLevelTitle"},[t._v("上传照片或者视频，来对您的状况进行评估")]),i("v-uni-view",{staticClass:"RunUploadImg"},[t._l(t.ImgVideo,(function(e,a){return i("v-uni-view",{key:a,staticClass:"RunUploadImgFor",class:3===a?"RunUploadImgForMar":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ImgEnlargeBtn(a)}}},[t.ImgEnlargeUrl?t._e():i("v-uni-view",{staticClass:"CloseBtn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.CloseBtn(a)}}},[t._v("x")]),"坐姿"===t.RatedTitle?i("v-uni-image",{attrs:{src:e,mode:"aspectFill"}}):i("v-uni-video",{attrs:{src:e,autoplay:!1,controls:!1},on:{play:function(e){arguments[0]=e=t.$handleEvent(e),t.ImgEnlargeBtn(a)}}})],1)})),t.ImgVideo.length<4?i("v-uni-view",{staticClass:"RunUploadImgCont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseFile()}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"RunUploadImgIcon",attrs:{src:"/static/BodyPosture/cameraIcon.png",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"RunCameraText"},[t._v(t._s("坐姿"===t.RatedTitle?"相片":"视频"))])],1)],1):t._e(),"坐姿"!==t.RatedTitle||t.ImgVideo.length?t._e():i("v-uni-view",{staticClass:"RunUploadImgText"},[t._v("最多上传4张至少正面侧面各一张图片")]),"跑姿"!==t.RatedTitle||t.ImgVideo.length?t._e():i("v-uni-view",{staticClass:"RunUploadImgText"},[t._v(t._s(this.RatedTitle)+"测评最低要求20米侧面起跑到站立结束视频，推荐上传20米正、侧、背面3个视频提供最准测评")]),"走姿"!==t.RatedTitle||t.ImgVideo.length?t._e():i("v-uni-view",{staticClass:"RunUploadImgText"},[t._v(t._s(this.RatedTitle)+"推荐上传10米正、侧、背面3个视频提供最准测评")])],2),i("v-uni-view",{staticClass:"DescribeTitle"},[t._v("添加描述")]),i("v-uni-view",{staticClass:"RunImgLevelTitle"},[t._v("将您感受到的坐姿问题总结一下，会让我们对您的状更加了解")]),i("v-uni-view",{staticClass:"DescribeCont"},[i("v-uni-view",{staticClass:"DescribeSpot"}),i("v-uni-textarea",{attrs:{placeholder:"在这里输入您的问题"},model:{value:t.describe,callback:function(e){t.describe=e},expression:"describe"}})],1),i("v-uni-view",{staticClass:"ShotKnow"},[i("v-uni-view",[t._v("拍摄须知")]),"坐姿"===t.RatedTitle?i("v-uni-view",{staticClass:"ShotKnowText"},[t._v("1、尽可能简单的座椅，无靠背无扶手最好；"),i("br"),t._v("2、衣着合身，尽量修身，避免过于宽松的衣物，着平底鞋；"),i("br"),t._v("3、坐在椅子上，双手自然放在大腿上；"),i("br"),t._v("4、拍摄正面与侧面照片，拍摄角度与拍摄面垂直摄像头在约肩关节水平。")]):t._e(),"走姿"===t.RatedTitle?i("v-uni-view",{staticClass:"ShotKnowText"},[t._v("1、衣着合身，尽量修身，避免过于宽松的衣物，着平底鞋；"),i("br"),t._v("2、视频中步行长度不短于直线步行10米；"),i("br"),t._v("3、视频中包含从静止迈步开始，到步行结束、双脚并拢站立为止整个步行过程；"),i("br"),t._v("4、拍摄正面、背面和侧面的步行视频，包含头顶到足底完整人体入镜；"),i("br"),t._v("5、侧面拍摄时，尽量与测试人保持等速前进追拍。")]):t._e(),"跑姿"===t.RatedTitle?i("v-uni-view",{staticClass:"ShotKnowText"},[t._v("1、衣着合身，尽量修身，避免过于宽松的衣物，着平底运动鞋；"),i("br"),t._v("2、视频中跑步长度不短于直线步行20米；"),i("br"),t._v("3、视频中包含从起跑开始，到跑步结束、双脚并拢站立为止整个跑步过程；"),i("br"),t._v("4、拍摄正面、背面和侧面的跑步视频，包含头顶到足底完整人体入镜。")]):t._e()],1),i("v-uni-view",{staticClass:"UploadImgBut",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isClick&&t.SubmitBtn()}}},[t._v("上传")]),i("v-uni-view",{staticClass:"UploadImgTips"},[t._v("上传成功后，需要支付¥"+t._s(t.bodyMsg.totalAmount)+"才能查看报告")]),i("v-uni-view",{staticClass:"ReportTitle"},[t._v("报告")]),i("v-uni-view",{staticClass:"ReportLeverTitle"},[t._v("需要1个工作日的时间来处理您的问题")]),t.listItem.length?t._e():i("v-uni-view",[i("v-uni-view",{staticClass:"NoReportText"},[t._v("您目前还没有任何报告，请您先去测试，测评完毕后您的报告才会在此展示")]),i("v-uni-view",{staticClass:"NoReport"},[i("v-uni-image",{attrs:{src:"/static/BodyPosture/NoReport.png",mode:"aspectFit"}})],1)],1),t._l(t.listItem,(function(e,a){return i("v-uni-view",{key:a,staticClass:"ReportListCont",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ToReport(e)}}},[e.status&&e.payStatus?t._e():i("v-uni-view",{staticClass:"slide_list",style:{transform:"translate3d("+e.slide_x+"px, 0, 0)"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(e,a)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(e,a)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(e,a)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.recover(a)}}},[i("v-uni-view",{staticClass:"now-message-info",style:{width:t.Screen_width+"px"},attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"ReportList"},[i("v-uni-view",{staticClass:"ReportInfo"},[i("v-uni-view",{staticClass:"ReportImage"},[i("v-uni-image",{attrs:{src:"/static/BodyPosture/Report.png",mode:"aspectFit"}})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"ReportName"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"ReportTime"},[t._v(t._s(e.createDate))])],1)],1),i("v-uni-view",{staticClass:"ReportState"},[t._v(t._s(e.payStatus?"未完成":"未支付"))])],1)],1),i("v-uni-view",{staticClass:"removeM btn-div",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.removeM(e.id,a)}}},[i("v-uni-view",{staticClass:"RemoveBg"},[i("v-uni-image",{attrs:{src:"/static/BodyPosture/remove.png",mode:"aspectFit"}})],1)],1),i("v-uni-view",{staticStyle:{clear:"both"}})],1),e.status&&e.payStatus?i("v-uni-view",{staticClass:"slide_list",style:{transform:"translate3d("+e.slide_x+"px, 0, 0)"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(e,a)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(e,a)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(e,a)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.recover(a)}}},[i("v-uni-view",{staticClass:"now-message-info",style:{width:t.Screen_width+"px"},attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"NotState"},[i("v-uni-view",{staticClass:"NotStateInfo"},[i("v-uni-view",{staticClass:"ReportImage"},[i("v-uni-image",{attrs:{src:"/static/BodyPosture/Report.png",mode:"aspectFit"}})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"ReportName"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"ReportTime"},[t._v(t._s(e.createDate))])],1)],1),i("v-uni-image",{attrs:{src:"/static/BodyPosture/finish.png",mode:"aspectFit"}})],1)],1),i("v-uni-view",{staticClass:"removeM btn-div",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.removeM(e.id,a)}}},[i("v-uni-view",{staticClass:"RemoveBg"},[i("v-uni-image",{attrs:{src:"/static/BodyPosture/remove.png",mode:"aspectFit"}})],1)],1),i("v-uni-view",{staticStyle:{clear:"both"}})],1):t._e()],1)})),t.loadModal?i("v-uni-view",{staticClass:"pop-ups",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelBtn.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"load-modal"},[i("v-uni-image",{attrs:{src:"/static/logding-logo.png",mode:"aspectFit"}}),i("v-uni-view",{staticClass:"gray-text"},[t._v(t._s(t.progressText))]),i("v-uni-view",{staticClass:"gray-text"},[t._v(t._s(t.submitText))])],1)],1):t._e(),t.ImgEnlargeUrl?i("v-uni-view",{staticClass:"ImgEnlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg()}}},["坐姿"===t.RatedTitle?i("v-uni-image",{attrs:{mode:"aspectFit",src:t.ImgEnlargeUrl}}):i("v-uni-video",{attrs:{autoplay:!0,src:t.ImgEnlargeUrl},on:{ended:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg()}}})],1):t._e(),t.listItem.length?i("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}}):t._e(),i("buryingpoint",{ref:"buryingpoint"})],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"7cf6":function(t,e,i){"use strict";var a=i("ee27");i("c975"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("e143")),o={downBtn:function(){setTimeout((function(){var t=window.navigator.userAgent.toLowerCase();-1!=t.indexOf("huawei")?window.location="https://appgallery.cloud.huawei.com/uowap/index.html#/detailApp/C100740675?detailType=&subsource=C100740675&referrer=&s=&shareFrom=appmarket&v=&shareTo=weixin&source=appshare&id=&locale=zh_CN&channelId=":-1!=t.indexOf("vivo")?window.location="https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=2757924&resource=301&source=2":-1!=t.indexOf("xiaomi")?window.location="http://app.xiaomi.com/detail/796164":-1!=t.indexOf("iphone")?window.location="https://apps.apple.com/cn/app/%E4%BD%93%E8%AF%AD/id1460747699":window.location="https://a.app.qq.com/o/simple.jsp?pkgname=com.tiyu.app&fromcase=40003"}),500)},notLogin:function(t){console.log("登陆失效验证："),console.log(JSON.stringify(t));var e=t.code,i=t.msg||t.error;if(100005001==e||100005002==e){uni.clearStorage(),i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500});getCurrentPages();setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1500)}else 100005015==e?(console.log(e),uni.setStorageSync("vip",0),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({icon:"none",title:i,duration:1500})},integralSave:function(t){var e=t.url,i=t.data,a=t.token,n=t.cb;a&&uni.request({url:e,method:"POST",header:{token:a},data:i,success:function(t){n&&n()}})},showModal:function(t,e){var i=this;uni.showModal({title:"提示",content:"注册会员，能够从任何iOS设备访问个人信息及内容，是否注册？",cancelText:"游客访问",confirmText:"注册登陆",success:function(a){a.confirm?uni.navigateTo({url:"../login/login"}):a.cancel&&i.visitorLogin({url:t,url2:e})}})},visitorLogin:function(t){var e=t.url,i=t.url2,a=this,n=plus.device.uuid;console.log(n),uni.request({url:e,data:{openId:n,unionid:n},success:function(t){console.log("获取用户信息"),console.log(JSON.stringify(t)),3==t.data.data.code?a.register(i,n):a.saveUserInfo(t.data.data)}})},register:function(t,e){var i=this;uni.request({url:t,method:"POST",data:{openid:e,unionid:e},success:function(t){console.log("注册"),console.log(JSON.stringify(t)),i.saveUserInfo(t.data.data)}})},saveUserInfo:function(t){uni.setStorage({key:"user_Info",data:{username:t.user.username,headSculpture:t.user.headSculpture,remarks:t.user.remarks,gender:t.user.gender,birthday:t.user.birthday,email:t.user.email,mobile:t.user.mobile}}),uni.setStorage({key:"user_Id",data:t.user.id}),uni.setStorage({key:"token",data:t.token}),uni.setStorage({key:"postureTestNumber",data:t.user.postureTestNumber})},statisticalClicks:function(t){var e=n.default.prototype;uni.request({url:e.$webUrl+e.$recordClicks,method:"POST",data:t,success:function(t){console.log("统计点击量 ："),console.log(t)},fail:function(t){console.log(t)}})},sharingApplet:function(t){console.log(JSON.stringify(t));var e=n.default.prototype,i=this,a=e.$userSharingRecord;void 0!=t.courseflag&&2==t.courseflag&&(a=e.$courseShareLock),uni.request({url:e.$webUrl+a,header:{token:t.token},data:{href:t.href,shareChannel:t.subMsg,shareContent:t.summary,shareImg:t.imageUrl,shareTitle:t.title,shareType:t.shareType,userId:t.userId,markId:t.id,module:t.module},method:"POST",success:function(a){console.log("分享记录"+JSON.stringify(a)),console.log(e.$webUrl),console.log(e.$userintegralrecord),i.integralSave({url:e.$webUrl+e.$userintegralrecord,data:{integralOperate:1,integralType:4,title:"分享送积分",userId:t.userId},token:t.token}),i.shareFun(t)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})},shareFun:function(t){console.log("我进来了"),console.log(JSON.stringify(t)),uni.share({provider:"weixin",type:t.shareType,imageUrl:t.imageUrl,title:t.title,miniProgram:{id:"gh_bb081e4b31c9",path:t.href,type:0,webUrl:t.webHref},success:function(t){console.log(JSON.stringify(t))}})},getMembers:function(t,e,i){var a=this;uni.request({url:t,header:{"content-type":"application/x-www-form-urlencoded",token:e},data:{userId:i},method:"GET",success:function(t){if(0==t.data.code){var e=t.data.data;console.log(e),uni.setStorage({key:"memberInfo",data:e})}else a.notLogin(t.data)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接不稳定，请检查网络"})}})}};e.default=o},9362:function(t,e,i){"use strict";var a=i("eca9"),n=i.n(a);n.a},"975f":function(t,e,i){"use strict";i.r(e);var a=i("fbe7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9f7d":function(t,e,i){var a=i("358e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3224c361",a,!0,{sourceMap:!1,shadowMode:!1})},a502:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:2===t.loadingType?t.contentText.contentnomore:t.contentText.contenterror))])],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},ab14:function(t,e,i){"use strict";i.r(e);var a=i("a502"),n=i("975f");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9362");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0f050a07",null,!1,a["a"],s);e["default"]=d.exports},de72:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".load-more[data-v-0f050a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-0f050a07]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-0f050a07]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-0f050a07]{position:absolute}.load1[data-v-0f050a07],\n.load2[data-v-0f050a07],\n.load3[data-v-0f050a07]{height:24px;width:24px}.load2[data-v-0f050a07]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0f050a07]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-0f050a07]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0f050a07 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0f050a07{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},eca9:function(t,e,i){var a=i("de72");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("753f3363",a,!0,{sourceMap:!1,shadowMode:!1})},fbe7:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};e.default=a}}]);