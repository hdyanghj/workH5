(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-body-test-body-norm"],{"09bd":function(t,e,i){"use strict";i.r(e);var a=i("60be"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"190f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{system:null,route:null,systemType:null,Timer:null,DataTimeNum:0}},methods:{Time:function(){var t=this,e=getCurrentPages();this.route=e[e.length-1].route,this.Timer=setInterval((function(){t.DataTimeNum++}),1e3)},buryingpoint:function(t){var e,i=this,a=uni.getStorageSync("user_Id");uni.getSystemInfo({success:function(t){i.systemType=t}}),e="ios"==this.systemType.platform?2:1;var n={model:this.systemType.model,version:this.systemType.version,systemVersion:this.system,userId:a,platform:e,route:this.route,name:t,ttl:this.DataTimeNum};uni.request({url:this.$webUrl+this.$buryingpoint,method:"POST",data:n,success:function(t){0==t.data.code&&(clearInterval(i.Timer),i.DataTimeNum=0)},fail:function(t){console.log(JSON.stringify(t))}})}}};e.default=a},"19bb":function(t,e,i){var a=i("479e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6871d439",a,!0,{sourceMap:!1,shadowMode:!1})},"1dca":function(t,e,i){"use strict";i.r(e);var a=i("50ee"),n=i("7003");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0f5ec893",null,!1,a["a"],r);e["default"]=d.exports},"21bd":function(t,e,i){"use strict";i.r(e);var a=i("cf58"),n=i("09bd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9dc2");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"db2cd7e6",null,!1,a["a"],r);e["default"]=d.exports},"479e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.box[data-v-1f731ca5]{margin:0 %?36?%}.types[data-v-1f731ca5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?40?%}.type-item[data-v-1f731ca5]{position:relative;width:%?280?%;height:%?220?%;background:#1cbbb4;box-shadow:0 2px 10px 0 #1cbbb4;border-radius:%?8?%;margin:0 %?40?% %?60?% 0}.type-item>uni-image[data-v-1f731ca5]{width:100%;height:100%;border-radius:%?8?%}.type-msg[data-v-1f731ca5]{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;padding-left:%?26?%;box-sizing:border-box;color:#fff;font-weight:700;\n\t/* background: rgba(0,0,0, 0.2); */border-radius:%?8?%}.type-title[data-v-1f731ca5]{margin-top:%?48?%;font-size:%?32?%;font-family:SourceHanSansCN-Medium;color:#fff;line-height:%?48?%}.type-sub[data-v-1f731ca5]{margin-top:%?26?%;font-size:%?24?%;font-family:SourceHanSansCN-Medium;color:#fff;line-height:%?36?%}.type-item[data-v-1f731ca5]:nth-child(2n){margin-right:0}.popular-nav[data-v-1f731ca5]{margin:%?30?% auto;padding-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tag-normal[data-v-1f731ca5]{padding:%?10?% 0;font-size:%?30?%}.tag-active[data-v-1f731ca5]{color:#03b2ca!important;position:relative}.tag-active[data-v-1f731ca5]:after{content:"";height:1px;position:absolute;bottom:%?0?%;left:10%;right:10%;background:#03b2ca}',""]),t.exports=e},"50ee":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view")},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"57bb":function(t,e,i){"use strict";var a=i("ee27");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("21bd")),o=a(i("ab14")),r=a(i("1dca")),s={components:{buryingpoint:r.default,"sys-article":n.default,uniLoadMore:o.default},data:function(){return{loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"我是有底线的"},imgDomain:"",ticeList:[{standard:0,bgcolor:"#0081FF",title:"幼儿体质",url:"/static/drawing/tice-1.png"},{standard:1,bgcolor:"#1CBBB4",title:"小学生体质  ",url:"/static/drawing/tice-2.png"},{standard:2,bgcolor:"#E54D42",title:"中考体育  ",url:"/static/drawing/tice-3.png"},{standard:3,bgcolor:"#DF3897",title:"高中及以上体质  ",url:"/static/drawing/tice-4.png"}],tagList:[],active:0,sysArticles:[],total:-1,page:1,limit:7}},onShow:function(){var t=this;setTimeout((function(){t.$refs.buryingpoint.Time()}),10)},onUnload:function(){this.$refs.buryingpoint.buryingpoint("标准及案例")},onHide:function(){this.$refs.buryingpoint.buryingpoint("标准及案例")},onLoad:function(t){this.imgDomain=this.$store.state.center.imgDomain,this.getSecondMenu()},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},onReachBottom:function(){if(this.total!=this.sysArticles.length){this.loadingType=1;var t=this.page;t++,this.page=t,this.getData1("bottom")}else this.loadingType=2},methods:{goBodyTest:function(t){uni.navigateTo({url:"./body-test?standard="+t})},getSecondMenu:function(){var t=this;t.loadingType=1,uni.request({url:t.$webUrl+t.$getChannelByModelId,type:"GET",data:{parentId:67},success:function(e){t.tagList=e.data.data,t.getData1()},fail:function(t){}})},getData1:function(t){var e=this,i=this.tagList[e.active].id,a=e.page,n=e.limit,o={status:1,page:a,limit:n,channelId:i};uni.request({url:e.$webUrl+e.$facmsarchivesPage,method:"GET",data:o,success:function(i){var a=i.data.data.list;e.total=i.data.data.total,e.sysArticles="bottom"==t?e.sysArticles.concat(a):a,e.total==e.sysArticles.length?e.loadingType=2:e.loadingType=0},fail:function(t){}})},changeHistory:function(t){this.active=t,this.page=1,this.getData1()}}};e.default=s},"60be":function(t,e,i){"use strict";i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["item","imgDomain"],data:function(){return{lazy:!0,timeNum:null}},mounted:function(){this.getDate(this.item.utime)},methods:{getDate:function(t){var e=6e4,i=60*e,a=24*i,n=30*a;if(void 0==t)return!1;t=t.replace(/\-/g,"/");var o=new Date(t).getTime(),r=(new Date).getTime(),s=r-o,d=s/n,l=s/(7*a),c=s/a,u=s/i,f=s/e;this.timeNum=d>=1?parseInt(d)+"月前":l>=1?parseInt(l)+"周前":c>=1?parseInt(c)+"天前":u>=1?parseInt(u)+"小时前":f>=1?parseInt(f)+"分钟前":"刚刚"},articleDetail:function(t,e){var i="/pages/communication/article-detail?id="+t+"&author="+e;uni.navigateTo({url:i})}}};e.default=a},"6dee":function(t,e,i){var a=i("a828");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4fdba450",a,!0,{sourceMap:!1,shadowMode:!1})},7003:function(t,e,i){"use strict";i.r(e);var a=i("190f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"74b6":function(t,e,i){"use strict";var a={buryingpoint:i("1dca").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"first-title"},[t._v("标准及案例")]),i("v-uni-view",{staticClass:"popular-nav"},t._l(t.tagList,(function(e,a){return i("v-uni-view",{key:a,class:["tag-normal",a==t.active?"tag-active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeHistory(a)}}},[t._v(t._s(e.name))])})),1)],1),t._l(t.sysArticles,(function(e,a){return i("sys-article",{key:a,attrs:{item:e,imgDomain:t.imgDomain}})})),i("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}}),i("buryingpoint",{ref:"buryingpoint"})],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},9362:function(t,e,i){"use strict";var a=i("eca9"),n=i.n(a);n.a},"975f":function(t,e,i){"use strict";i.r(e);var a=i("fbe7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9dc2":function(t,e,i){"use strict";var a=i("6dee"),n=i.n(a);n.a},a502:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:2===t.loadingType?t.contentText.contentnomore:t.contentText.contenterror))])],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},a828:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".hots[data-v-db2cd7e6]{height:%?120?%;padding:%?26?% %?34?% %?26?%;margin-bottom:%?26?%;box-shadow:0 3px 6px 0 rgba(10,91,108,.15)}.hots>uni-image[data-v-db2cd7e6]{width:%?172?%;height:%?120?%;float:left;margin-right:%?48?%;box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.5);border-radius:%?16?%}.hot-msg[data-v-db2cd7e6]{overflow:hidden}.hot-title[data-v-db2cd7e6]{height:%?72?%;font-size:%?32?%;font-weight:500;color:#484848;line-height:%?64?%}.hot-author[data-v-db2cd7e6]{font-size:%?24?%;font-weight:500;color:#6d7278;line-height:%?40?%}.hot-time[data-v-db2cd7e6]{font-size:%?24?%;color:#03b2ca;line-height:%?40?%}.hot-views[data-v-db2cd7e6]{font-size:%?24?%;font-weight:500;color:#484848;line-height:%?40?%}.hot-list[data-v-db2cd7e6]{height:%?64?%;font-size:%?24?%;color:#919191;padding-top:%?14?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;/*设置显示行数，此处为2行，可设置其他数字*/-webkit-box-orient:vertical;letter-spacing:%?2?%}.hot-authorCont[data-v-db2cd7e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?4?%}",""]),t.exports=e},ab14:function(t,e,i){"use strict";i.r(e);var a=i("a502"),n=i("975f");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9362");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"0f050a07",null,!1,a["a"],r);e["default"]=d.exports},cf58:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"hots",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.articleDetail(t.item.id,t.item.author)}}},[i("v-uni-image",{attrs:{mode:"aspectFill","lazy-load":t.lazy,src:t.item.image?"http://public.qilinsports.com/"+t.item.image:"/static/coop-bg.jpg"}}),i("v-uni-view",{staticClass:"hot-msg"},[i("v-uni-view",{staticClass:"hot-title one-line"},[t._v(t._s(t.item.title))]),i("v-uni-view",{staticClass:"hot-authorCont"},[i("v-uni-view",{staticClass:"hot-author"},[t._v(t._s(t.item.author?t.item.author:"Bodyreader")+"-"+t._s(t.timeNum))]),i("v-uni-view",{staticClass:"hot-views"},[t._v("浏览数量："+t._s(t.item.views))])],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},db61:function(t,e,i){"use strict";var a=i("19bb"),n=i.n(a);n.a},de72:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".load-more[data-v-0f050a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-0f050a07]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-0f050a07]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-0f050a07]{position:absolute}.load1[data-v-0f050a07],\n.load2[data-v-0f050a07],\n.load3[data-v-0f050a07]{height:24px;width:24px}.load2[data-v-0f050a07]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0f050a07]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-0f050a07]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0f050a07 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-0f050a07]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0f050a07]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0f050a07]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0f050a07]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0f050a07]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0f050a07{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},e1c7:function(t,e,i){"use strict";i.r(e);var a=i("57bb"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},eca9:function(t,e,i){var a=i("de72");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("753f3363",a,!0,{sourceMap:!1,shadowMode:!1})},fbe7:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};e.default=a},fe49:function(t,e,i){"use strict";i.r(e);var a=i("74b6"),n=i("e1c7");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("db61");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1f731ca5",null,!1,a["a"],r);e["default"]=d.exports}}]);