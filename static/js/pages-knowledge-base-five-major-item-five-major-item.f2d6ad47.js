(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-knowledge-base-five-major-item-five-major-item"],{"09bd":function(t,i,e){"use strict";e.r(i);var a=e("60be"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"190f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,i=getCurrentPages();this.route=i[i.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var i,e=this,a=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){e.systemType=t}}),i="ios"==this.systemType.platform?2:1;var n={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:a,platform:i,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:n,success:function(t){0==t.data.code&&(clearInterval(e.Timer),e.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};i.default=a},"1dca":function(t,i,e){"use strict";e.r(i);var a=e("50ee"),n=e("7003");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);var s,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0f5ec893",null,!1,a["a"],s);i["default"]=l.exports},"21bd":function(t,i,e){"use strict";e.r(i);var a=e("cf58"),n=e("09bd");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("9dc2");var s,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"db2cd7e6",null,!1,a["a"],s);i["default"]=l.exports},"2ea0":function(t,i,e){"use strict";var a=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("f3f3")),o=e("2f62"),s=a(e("21bd")),r=a(e("1dca")),l={components:{"sys-article":s.default,buryingpoint:r.default},data:function(){return{imgDomain:"",token:"",modelId:"",channelId:"",bgcolor:"",rgba:"",title:"",imgurl:"",secondMenu:[],activeBtn:0,viewId:"id0",sysArticleList:[]}},computed:(0,n.default)({},(0,o.mapGetters)(["getVideoList","getLoadtype1","getContentText1"])),onReachBottom:function(){},onBackPress:function(){},onNavigationBarButtonTap:function(t){0==t.index?uni.navigateBack({delta:1}):uni.getStorageSync("token")?uni.navigateTo({url:"/pages/communication/consult-options"}):(uni.showToast({icon:"none",title:"未登录",duration:1e3}),setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),1e3))},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onUnload:function(){this.$refs.buryingpoint.buryingpoint("营养支持")},onHide:function(){this.$refs.buryingpoint.buryingpoint("营养支持")},onLoad:function(t){var i=this;i.imgDomain=i.$store.state.center.imgDomain;var e=uni.getStorageSync("token");i.token=e,i.title=t.title,i.imgurl=t.imgurl,i.modelId=t.modelId,console.log(t),this.bgcolor=t.bgcolor,this.rgba=t.rgba,uni.request({url:i.$webUrl+i.$getChannelByModelId,method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},data:{parentId:t.parentId},success:function(t){console.log(t),i.secondMenu=t.data.data,i.channelId=t.data.data[0].id,i.ogetVideo(),i.getData1()}})},methods:(0,n.default)({},(0,o.mapActions)(["asyncGetVideoList"]),{getData1:function(){var t=this,i=this.channelId,e=this.modelId,a={status:1,page:1,limit:4,channelId:i,modelId:e};uni.request({url:t.$webUrl+t.$facmsarchivesPage,method:"GET",data:a,success:function(i){t.sysArticleList=i.data.data.list},fail:function(t){console.log(JSON.stringify(t))}})},moreSysArticle:function(){var t=this.modelId,i=this.channelId,e=this.secondMenu[this.activeBtn].name;uni.navigateTo({url:"/pages/communication/expert-articles?modelId="+t+"&channelId="+i+"&title="+e})},handleToVDetail:function(t){var i=t.currentTarget.dataset;uni.navigateTo({url:"../../video/course-detail?courseId="+i.courseid+"&flag="+i.flag})},ogetVideo:function(){var t=this.title,i=this.secondMenu[this.activeBtn].name;this.asyncGetVideoList({tag:t,tag1:i})},setActiveBtn:function(t){this.activeBtn!=t&&(this.viewId="id"+t,this.activeBtn=t,this.pageNo=1,this.channelId=this.secondMenu[t].id,this.getData1(),this.ogetVideo())}})};i.default=l},4252:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".bg-img[data-v-599a8f2a]{position:relative;width:%?682?%;height:%?360?%;border-radius:%?16?%}.top-title[data-v-599a8f2a]{position:absolute;top:%?64?%;left:%?44?%;color:#fff;font-size:%?40?%;z-index:999}.bg-img uni-image[data-v-599a8f2a]{width:%?682?%;height:100%;border-radius:%?16?%}.btns[data-v-599a8f2a]{\r\n\t/* position: absolute; */width:100%;height:%?90?%;white-space:nowrap;padding-top:%?40?%;z-index:3;text-align:center}.btn-item[data-v-599a8f2a]{margin:0 %?10?%;padding:%?10?% %?20?%;display:inline-block;text-align:center;background:hsla(0,0%,100%,.8);\r\n\t/* box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2); */border-radius:%?8?%;font-size:%?32?%;color:rgba(3,3,3,.5)}.active-btn[data-v-599a8f2a]{color:#fe5960;background:#fff!important}.scroll-x[data-v-599a8f2a]{height:%?80?%;white-space:nowrap}\r\n/* 课程样式 */.uni-media-list[data-v-599a8f2a]{display:-webkit-box;display:-webkit-flex;display:flex}.uni-list-cell[data-v-599a8f2a]{margin-bottom:10px;border-bottom:1px solid #f8f8f8;padding-bottom:10px}.uni-media-list-logo[data-v-599a8f2a]{width:%?200?%;height:%?128?%;border-radius:%?8?%}.uni-media-list-body[data-v-599a8f2a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:%?8?% %?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-media-list-text-top[data-v-599a8f2a]{font-size:%?28?%;color:#000;line-height:%?40?%}.uni-media-list-text-bottom[data-v-599a8f2a]{color:#03b2ca;font-size:%?24?%;margin-top:%?14?%}.uni-media-list-right[data-v-599a8f2a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-media-list-price[data-v-599a8f2a]{width:%?138?%;height:%?56?%;background:#f6f6f6;border-radius:%?28?%;font-size:%?24?%;color:#03b2ca;line-height:%?56?%;text-align:center}.uni-media-list-cjhy[data-v-599a8f2a]{font-size:%?24?%;color:rgba(0,0,0,.45);line-height:%?64?%}.uni-media-list-text-line[data-v-599a8f2a]{margin:%?0?% %?24?%}.uni-list-img[data-v-599a8f2a]{width:100%;border-radius:%?8?%;margin-top:%?42?%}.caption-img uni-image[data-v-599a8f2a]{height:%?104?%;margin-top:%?34?%}.wrap1[data-v-599a8f2a]{padding:%?34?% %?34?% %?6?%}.box2[data-v-599a8f2a]{box-sizing:border-box;padding:0 %?36?%}.first-title[data-v-599a8f2a]{color:#484848;margin:%?32?% 0 %?26?%}.second-title[data-v-599a8f2a]{padding:0 %?36?% %?36?%;font-size:%?40?%;font-family:SourceHanSansCN-Medium;font-weight:500;color:#484848}.circle[data-v-599a8f2a]{width:%?550?%;height:%?104?%;margin:0 auto %?30?%}.circle>.img-box[data-v-599a8f2a]{width:%?104?%;height:%?104?%;box-sizing:border-box;padding:%?20?%;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.15);border-radius:%?8?%;float:left;margin-right:%?45?%}.circle>.img-box>uni-image[data-v-599a8f2a]{width:100%;height:100%}.circle-line[data-v-599a8f2a]{overflow:hidden}.circle-long[data-v-599a8f2a]{font-size:%?28?%;line-height:%?60?%}.circle-msg[data-v-599a8f2a]{font-size:%?24?%;color:#999;line-height:%?40?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.more-btn[data-v-599a8f2a]{width:%?240?%;height:%?56?%;border-radius:%?8?%;opacity:.75;border:1px solid #03b2ca;margin:%?48?% auto 0;text-align:center;line-height:%?56?%;font-size:%?28?%;color:#03b2ca\r\n\t/* height:88upx;\r\n\tmargin: 40upx 34upx 50upx;\r\n\tborder-radius:8upx;\r\n\topacity:0.75;\r\n\tborder:1px solid rgba(3,178,202,1);\r\n\ttext-align: center;\r\n\tline-height: 88upx;\r\n\tfont-size:28upx;\r\n\tcolor: #03B2CA; */}",""]),t.exports=i},"50ee":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view")},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},"60be":function(t,i,e){"use strict";e("e25e"),e("ac1f"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:["item","imgDomain"],data:function(){return{lazy:!0,timeNum:null}},mounted:function(){this.getDate(this.item.utime)},methods:{getDate:function(t){var i=6e4,e=60*i,a=24*e,n=30*a;if(void 0==t)return!1;t=t.replace(/\-/g,"/");var o=new Date(t).getTime(),s=(new Date).getTime(),r=s-o,l=r/n,c=r/(7*a),d=r/a,u=r/e,f=r/i;this.timeNum=l>=1?parseInt(l)+"月前":c>=1?parseInt(c)+"周前":d>=1?parseInt(d)+"天前":u>=1?parseInt(u)+"小时前":f>=1?parseInt(f)+"分钟前":"刚刚"},articleDetail:function(t,i){var e="/pages/communication/article-detail?id="+t+"&author="+i;uni.navigateTo({url:e})}}};i.default=a},6998:function(t,i,e){"use strict";var a=e("7658"),n=e.n(a);n.a},"6dee":function(t,i,e){var a=e("a828");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("4fdba450",a,!0,{sourceMap:!1,shadowMode:!1})},7003:function(t,i,e){"use strict";e.r(i);var a=e("190f"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},7658:function(t,i,e){var a=e("4252");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("a5a0328a",a,!0,{sourceMap:!1,shadowMode:!1})},"8bef":function(t,i,e){"use strict";e.r(i);var a=e("b43f"),n=e("bfd6");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("6998");var s,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"599a8f2a",null,!1,a["a"],s);i["default"]=l.exports},"9dc2":function(t,i,e){"use strict";var a=e("6dee"),n=e.n(a);n.a},a828:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".hots[data-v-db2cd7e6]{height:%?120?%;padding:%?26?% %?34?% %?26?%;margin-bottom:%?26?%;box-shadow:0 3px 6px 0 rgba(10,91,108,.15)}.hots>uni-image[data-v-db2cd7e6]{width:%?172?%;height:%?120?%;float:left;margin-right:%?48?%;box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.5);border-radius:%?16?%}.hot-msg[data-v-db2cd7e6]{overflow:hidden}.hot-title[data-v-db2cd7e6]{height:%?72?%;font-size:%?32?%;font-weight:500;color:#484848;line-height:%?64?%}.hot-author[data-v-db2cd7e6]{font-size:%?24?%;font-weight:500;color:#6d7278;line-height:%?40?%}.hot-time[data-v-db2cd7e6]{font-size:%?24?%;color:#03b2ca;line-height:%?40?%}.hot-views[data-v-db2cd7e6]{font-size:%?24?%;font-weight:500;color:#484848;line-height:%?40?%}.hot-list[data-v-db2cd7e6]{height:%?64?%;font-size:%?24?%;color:#919191;padding-top:%?14?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;/*设置显示行数，此处为2行，可设置其他数字*/-webkit-box-orient:vertical;letter-spacing:%?2?%}.hot-authorCont[data-v-db2cd7e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?4?%}",""]),t.exports=i},b43f:function(t,i,e){"use strict";var a={buryingpoint:e("1dca").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"bg-img",style:{boxShadow:"0px 2px 6px 0px "+t.bgcolor}},[e("v-uni-view",{staticClass:"top-title"},[t._v(t._s(t.title))]),e("v-uni-image",{attrs:{src:"/static/advertisement/"+t.imgurl+"@2x.png"}})],1),e("v-uni-scroll-view",{staticClass:"btns",attrs:{"scroll-x":!0,"scroll-into-view":t.viewId,"scroll-with-animation":!0}},t._l(t.secondMenu,(function(i,a){return e("v-uni-view",{class:["btn-item",t.activeBtn==a?"active-btn":""],style:{boxShadow:"0px 2px 4px 0px "+t.bgcolor,background:"rgba("+t.rgba+")"},attrs:{id:"id"+a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setActiveBtn(a,i)}}},[t._v(t._s(i.name))])})),1)],1),e("v-uni-view",{staticClass:"second-title"},[t._v("文章")]),t._l(t.sysArticleList,(function(i,a){return e("sys-article",{key:a,attrs:{imgDomain:t.imgDomain,item:i}})})),4==t.sysArticleList.length?e("v-uni-view",{staticClass:"more-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.moreSysArticle.apply(void 0,arguments)}}},[t._v("查看更多")]):t._e(),e("v-uni-view",{staticClass:"box2"},[t.getVideoList.length>0?e("v-uni-view",{staticClass:"first-title"},[t._v("关联课程")]):t._e()],1),e("v-uni-view",{staticClass:"wrap1"},t._l(t.getVideoList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[e("v-uni-view",{staticClass:"uni-media-list",attrs:{"data-courseid":i.id,"data-flag":i.flag},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleToVDetail.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"uni-media-list-logo",attrs:{mode:"aspectFill",src:i.thumbnail}}),e("v-uni-view",{staticClass:"uni-media-list-body"},[e("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"uni-media-list-text-bottom"},[e("v-uni-text",[t._v(t._s(i.typeName))]),e("v-uni-text",{staticClass:"uni-media-list-text-line"},[t._v("|")]),e("v-uni-text",[t._v(t._s(i.episode)+"小节")])],1)],1),e("v-uni-view",{staticClass:"uni-media-list-right"},[e("v-uni-view",{staticClass:"uni-media-list-price"},[t._v(t._s("￥"+i.price))])],1)],1)],1)})),1),e("buryingpoint",{ref:"buryingpoint"})],2)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},bfd6:function(t,i,e){"use strict";e.r(i);var a=e("2ea0"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},cf58:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"hots",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.articleDetail(t.item.id,t.item.author)}}},[e("v-uni-image",{attrs:{mode:"aspectFill","lazy-load":t.lazy,src:t.item.image?"http://public.qilinsports.com/"+t.item.image:"/static/coop-bg.jpg"}}),e("v-uni-view",{staticClass:"hot-msg"},[e("v-uni-view",{staticClass:"hot-title one-line"},[t._v(t._s(t.item.title))]),e("v-uni-view",{staticClass:"hot-authorCont"},[e("v-uni-view",{staticClass:"hot-author"},[t._v(t._s(t.item.author?t.item.author:"Bodyreader")+"-"+t._s(t.timeNum))]),e("v-uni-view",{staticClass:"hot-views"},[t._v("浏览数量："+t._s(t.item.views))])],1)],1)],1)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))}}]);