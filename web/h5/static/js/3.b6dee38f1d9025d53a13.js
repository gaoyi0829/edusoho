webpackJsonp([3],{"7/x9":function(e,t,s){"use strict";var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail__service"},[s("span",[e._v("承诺服务：")]),e._v(" "),e._l(e.services,function(t){return[s("span",{staticClass:"course-detail__service-icon"},[e._v(e._s(t.shortName))])]})],2)},staticRenderFns:[]},n=s("VU/8")({name:"service",props:["services"]},i,!1,null,null,null);t.a=n.exports},GQ5V:function(e,t,s){"use strict";var i=s("6vT6"),n=s("SQAI"),a={name:"e-mini-coupon",mixins:[s("OPcZ").a],props:{item:{type:Object,default:function(){return{}}}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("van-tag",{staticClass:"mini-coupon ml10",attrs:{type:"danger"}},[this._v(this._s(this.priceHtml(this.item,!1)))])},staticRenderFns:[]},o=s("VU/8")(a,r,!1,null,null,null).exports,c={name:"onsale",mixins:[s("w/qc").a],components:{coupon:n.a,miniCoupon:o,EPopup:i.a},props:["unreceivedCoupons","miniCoupons"],data:function(){return{couponListShow:!1}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.unreceivedCoupons.length?s("e-panel",{attrs:{title:"优惠"}},[s("van-cell",{staticClass:"course-detail__cell",attrs:{"is-link":""},on:{click:function(t){e.couponListShow=!0}}},[s("template",{slot:"title"},[s("span",{staticClass:"text-12"},[e._v("领券：")]),e._v(" "),e._l(e.miniCoupons,function(e,t){return s("mini-coupon",{key:t,attrs:{item:e}})})],2)],2),e._v(" "),s("e-popup",{staticClass:"coupon-popup white-background",attrs:{show:e.couponListShow,title:"优惠券"},on:{"update:show":function(t){e.couponListShow=t}}},[e._l(e.unreceivedCoupons,function(t,i){return s("coupon",{key:i,attrs:{index:i,coupon:t,showButton:!0},on:{couponHandle:function(t){e.couponHandle(t)}}})}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.unreceivedCoupons.length,expression:"!unreceivedCoupons.length"}],staticClass:"coupon-empty"},[s("img",{staticClass:"empty-img",attrs:{src:"static/images/coupon_empty.png"}}),e._v(" "),s("div",{staticClass:"empty-text"},[e._v("暂无优惠券")])])],2)],1):e._e()},staticRenderFns:[]},u=s("VU/8")(c,l,!1,null,null,null);t.a=u.exports},f0vb:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("eqfM");var i=s("/QYm"),n=s("Dd8w"),a=s.n(n),r=(s("XmAh"),s("il3B")),o=s("Xxa5"),c=s.n(o),l=s("exGp"),u=s.n(l),d=s("upIP"),v=s("jW8y"),p=s("gMS5"),h=s("Du/2"),m=s("7/x9"),f=s("NYxO"),_={data:function(){return{items:[],isFree:!1}},components:{service:m.a},filters:{filterTime:function(e){var t=new Date(e);return t.getFullYear()+"-"+("0"+t.getMonth()).slice(-2)+"-"+("0"+t.getDate()).slice(-2)}},watch:{selectedPlanId:{immediate:!0,handler:function(e){var t=this;this.items=this.details.courses.map(function(e,s){return t.$set(e,"active",!1),e.id===t.details.id&&(e.active=!0),e})}},learnExpiryHtml:{immediate:!0,handler:function(e){var t=this.details.learningExpiryDate,s=t.expiryStartDate.slice(0,10),i=t.expiryEndDate.slice(0,10);this.$emit("getLearnExpiry",{val:e,startDateStr:s,endDateStr:i})}}},computed:a()({},Object(f.mapState)("course",{details:function(e){return e.details},selectedPlanId:function(e){return e.selectedPlanId}}),Object(f.mapState)(["courseSettings","vipSwitch"]),{learnExpiryHtml:function(){var e=this.details.member,t=this.details.learningExpiryDate,s=t.expiryMode;if(e)return"forever"==s?"永久有效":0!=e.deadline?e.deadline.slice(0,10)+"之前可学习":"永久有效";switch(s){case"forever":return"永久有效";case"end_date":return t.expiryEndDate.slice(0,10)+"之前可学习";case"days":return t.expiryDays+"天内可学习";case"date":return'<div class = "mt5">开课日期：'+t.expiryStartDate.slice(0,10)+"&nbsp;&nbsp;&nbsp;截止日期："+t.expiryEndDate.slice(0,10)+"</div>"}},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)},defaultPlan:function(){return 1===this.items.length&&!this.items[0].title},isDiscount:function(){if(!this.details.courseSet)return!1;var e=this.details.courseSet.discount;if(""!==e){var t=Number(e);return 10!==t&&(0===t||t)}}}),methods:a()({},Object(f.mapActions)("course",["getCourseDetail"]),{handleClick:function(e,t){var s=this;this.items.map(function(e){return e.active=!1}),e.active=!0,this.getCourseDetail({courseId:e.id}).then(function(){s.$emit("switchPlan")}).catch(function(e){i.a.fail(e.message)})},filterPrice:function(){var e=this.details;return Number(e.isFree)||"0.00"===e.price?(this.isFree=!0,"免费"):(this.isFree=!1,"¥"+e.price)}})},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("e-panel",{attrs:{title:e.details.courseSet.title}},[s("div",{staticClass:"course-detail__plan-price"},[s("span",{class:{isFree:e.isFree}},[e._v(e._s(e.filterPrice())+"\n        "),e.isDiscount?s("span",{staticClass:"original-price ml10"},[e._v("原价：￥"+e._s(e.details.originPrice))]):e._e()]),e._v(" "),e.showStudent?s("span",{staticClass:"plan-price__student-num"},[e._v(e._s(e.details.studentNum)+"人在学")]):e._e()])]),e._v(" "),e.defaultPlan?e._e():s("ul",{staticClass:"course-detail__plan"},e._l(e.items,function(t,i){return t.title?s("li",{class:{active:t.active},on:{click:function(s){e.handleClick(t,i)}}},[e._v(e._s(t.title))]):e._e()})),e._v(" "),s("div",{staticClass:"course-detail__validity"},[e.details.vipLevel&&e.vipSwitch?s("div",{staticClass:"mb15"},[s("span",{staticClass:"mr20"},[e._v("会员免费")]),e._v(" "),s("img",{staticClass:"vipIcon",attrs:{src:e.details.vipLevel.icon}}),e._v(" "),s("router-link",{staticClass:"color-primary",attrs:{to:{path:"/vip",query:{id:e.details.vipLevel.id}}}},[e._v("\n        "+e._s(e.details.vipLevel.name)+"免费学")])],1):e._e(),e._v(" "),e.details.services.length?s("service",{attrs:{services:e.details.services}}):e._e(),e._v(" "),s("div",[s("span",{staticClass:"mr20"},[e._v("学习有效期")]),e._v(" "),s("span",{staticClass:"dark",domProps:{innerHTML:e._s(e.learnExpiryHtml)}})]),e._v(" "),0!=e.details.buyExpiryTime?s("div",{staticClass:"mt5"},[s("span",{staticClass:"mr20"},[e._v("购买截止日期")]),e._v(" "),s("span",{staticClass:"validity orange"},[e._v(e._s(e._f("filterTime")(e.details.buyExpiryTime)))])]):e._e()],1)],1)},staticRenderFns:[]},C=s("VU/8")(_,y,!1,null,null,null).exports,g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:"教师介绍"}},[e._l(e.teacherInfo,function(t){return[s("div",{staticClass:"teacher-content"},[s("img",{staticClass:"avatar-img",attrs:{src:t.avatar.large}}),e._v(" "),s("div",{staticClass:"teacher-cell"},[s("span",{staticClass:"dark font-family-PFM"},[e._v(e._s(t.nickname))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"item.title"}],staticClass:"text-content"},[e._v(e._s(t.title))])])])]})],2)},staticRenderFns:[]},w=s("VU/8")({name:"teacher",props:["teacherInfo"]},g,!1,null,null,null).exports,b=s("gyMJ"),x=this,S={props:{details:{type:Object,value:function(){return{}}}},data:function(){return{headBottom:0,active:1,scrollFlag:!1,tabs:["课程介绍","课程目录","学员评价"],tabsClass:"",errorMsg:""}},computed:a()({},Object(f.mapState)("course",{selectedPlanId:function(e){return e.selectedPlanId}}),Object(f.mapState)(["user"]),{progress:function(){return Number(this.details.publishedTaskNum)?parseInt(this.details.progress.percent)+"%":"0%"},summary:function(){return this.details.summary||this.details.courseSet.summary},isClassCourse:function(){return Number(this.details.parentId)}}),watch:{selectedPlanId:function(e,t){e!==t&&(x.active=0),console.log(x.active,"active")}},created:function(){var e=this;return u()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.showDialog();case 1:case"end":return t.stop()}},t,e)}))()},components:{Directory:v.a,DetailHead:p.a,DetailPlan:C,Teacher:w,reviewList:d.a},methods:{showDialog:function(){var e=this;if(this.details.member){var t="";if(this.details.member.access&&(t=this.details.member.access.code),t&&"success"!==t){this.errorMsg=this.getErrorMsg(t);var s="",n=function(){};if("course.expired"===t||"member.expired"===t&&!this.isClassCourse){s="课程已到期，无法继续学习，是否退出";var a={id:this.details.id};n=function(){b.a.deleteCourse({query:a}).then(function(e){e.success?window.location.reload():i.a.fail("退出课程失败，请稍后重试")})},this.callConfirm(s,n)}else"vip.member_expired"===t?(s="会员已到期，请及时续费会员",n=function(){e.$router.push({path:"/vip",query:{id:e.user.vip&&e.user.vip.levelId}})},this.callConfirm(s,n)):i.a.fail(this.errorMsg)}}},getErrorMsg:function(e){switch(e){case"course.not_found":return"当前课程不存在";case"course.unpublished":return"当前课程未发布";case"course.expired":return"当前课程已过期";case"course.not_arrive":return"当前课程还不能学习";case"user.not_login":return"用户未登录";case"user.locked":return"用户被锁定";case"member.not_found":return"用户未加入课程";case"member.expired":return"课程已过期";case"vip.vip_closed":return"网校已关闭会员功能";case"vip.not_login":return"用户未登录";case"vip.not_member":return"当前用户并不是vip";case"vip.member_expired":return"用户会员服务已过期";case"vip.level_not_exist":return"用户会员等级或课程会员不存在";case"vip.level_low":return"用户会员等级过低";default:return"异常错误"}},callConfirm:function(e,t){r.a.confirm({title:"",message:e}).then(function(){t()}).catch(function(){})}}},T={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"join-after"},[s("detail-head",{attrs:{courseSet:e.details.courseSet}}),e._v(" "),s("van-tabs",{class:e.tabsClass,model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,function(e){return s("van-tab",{key:e,attrs:{title:e}})})),e._v(" "),s("div",{staticClass:"join-after__content"},[1==e.active?s("div",[s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"progress-bar__content"},[s("div",{staticClass:"progress-bar__rate",style:{width:e.progress}})]),e._v(" "),s("div",{staticClass:"progress-bar__text"},[e._v(e._s(e.progress))])]),e._v(" "),s("directory",{staticClass:"join-after-dirctory",attrs:{hiddeTitle:!0,errorMsg:e.errorMsg,tryLookable:e.details.tryLookable},on:{showDialog:e.showDialog}})],1):e._e(),e._v(" "),0==e.active?s("div",[s("detail-plan",{on:{switchPlan:e.showDialog}}),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("e-panel",{attrs:{title:"课程介绍"}},[s("div",{domProps:{innerHTML:e._s(e.summary)}})]),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("teacher",{staticClass:"teacher",attrs:{teacherInfo:e.details.teachers}})],1):e._e(),e._v(" "),2==e.active?s("div",[s("review-list",{ref:"review",attrs:{targetId:e.details.courseSet.id,reviews:e.details.reviews,title:"学员评价",defaulValue:"暂无评价",type:"course"}})],1):e._e()])],1)},staticRenderFns:[]},P=s("VU/8")(S,T,!1,null,null,null).exports,D=s("fZjL"),E=s.n(D),k=s("rsAy"),I=s("GQ5V"),O={name:"joinBefore",mixins:[s("1JqO").a],data:function(){return{tabs:["课程介绍","课程目录","学员评价"],loadMoreAbout:!1,active:0,tabsClass:"",learnExpiry:"永久有效",startDateStr:"",endDateStr:"",tops:{aboutTop:0,courseTop:0,reviewTop:0},unreceivedCoupons:[],miniCoupons:[]}},components:{Teacher:w,Directory:v.a,DetailHead:p.a,DetailPlan:C,moreMask:k.a,reviewList:d.a,onsale:I.a},computed:a()({},Object(f.mapState)("course",{details:function(e){return e.details}}),Object(f.mapState)(["user"]),{summary:function(){return this.details.summary||this.details.courseSet.summary},isClassCourse:function(){return Number(this.details.parentId)},accessToJoin:function(){return"success"===this.details.access.code||"user.not_login"===this.details.access.code},vipAccessToJoin:function(){var e=!1;if(!this.details.vipLevel||!this.user.vip)return!1;this.details.vipLevel.seq<=this.user.vip.seq&&(e=!(new Date(this.user.vip.deadline).getTime()<(new Date).getTime()));return e}}),mounted:function(){var e=this;this.isClassCourse||b.a.searchCoupon({params:{targetId:this.details.courseSet.id,targetType:"course"}}).then(function(t){e.unreceivedCoupons=t.data,e.miniCoupons=e.unreceivedCoupons.length>3?e.unreceivedCoupons.slice(0,4):e.unreceivedCoupons}),window.addEventListener("touchmove",this.handleScroll),window.addEventListener("scroll",this.handleScroll),setTimeout(function(){window.scrollTo(0,0)},100)},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll),window.removeEventListener("scroll",this.handleScroll)},methods:a()({},Object(f.mapActions)("course",["joinCourse"]),{onTabClick:function(e,t){var s=this.$refs[this.transIndex2Tab(e)];window.scrollTo(0,s.$el.offsetTop-44)},transIndex2Tab:function(e){return["about","directory","review"][e]},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs,s=["about","directory","review"].reverse();setTimeout(function(){E()(t).forEach(function(s){e.tops[s+"Top"]=t[s].$el.getBoundingClientRect().top}),e.scrollFlag=!1,e.tabsClass=e.tops.aboutTop-44<=0?"van-tabs--fixed":"";for(var i=0;i<s.length;i++){if(e.tops[s[i]+"Top"]-44<=0)return void(e.active=s.length-i-1)}},400)}},activeCurrentTab:function(e){var t=this.tops;return(e+=44)<t.teacherTop?0:e>=t.directoryTop?2:1},handleJoin:function(){var e=this,t=this.vipAccessToJoin;if(this.accessToJoin||t)if(this.$store.state.token){var s=this.details.learningExpiryDate.expiryEndDate,i=new Date(s).getTime(),n=(new Date).getTime(),a=n<i;a=0==s||n<i,(Number(this.details.buyable)&&a||t)&&(+this.details.price&&!t?this.getOrder():this.joinCourse({id:this.details.id}).then(function(t){0===E()(t).length&&e.getOrder()}).catch(function(e){console.error(e)}))}else this.$router.push({name:"login",query:{redirect:this.redirect}})},getLearnExpiry:function(e){this.learnExpiry=e.val,this.startDateStr=e.startDateStr,this.endDateStr=e.endDateStr},getOrder:function(){var e=this.details.learningExpiryDate.expiryMode,t=this.startDateStr+" 至 "+this.endDateStr,s="date"===e?t:this.learnExpiry;this.$router.push({name:"order",params:{id:this.details.id},query:{expiryScope:s,targetType:"course"}})}})},L={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.isClassCourse?"":"join-before"},[s("detail-head",{attrs:{price:e.details.price,courseSet:e.details.courseSet}}),e._v(" "),s("detail-plan",{on:{getLearnExpiry:e.getLearnExpiry}}),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),!e.isClassCourse&&0!==Number(e.details.price)&&e.unreceivedCoupons.length?[s("onsale",{attrs:{unreceivedCoupons:e.unreceivedCoupons,miniCoupons:e.miniCoupons}}),e._v(" "),s("div",{staticClass:"segmentation"})]:e._e(),e._v(" "),s("van-tabs",{class:e.tabsClass,on:{click:e.onTabClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,function(e){return s("van-tab",{key:e,attrs:{title:e}})})),e._v(" "),s("e-panel",{ref:"about",staticClass:"about",attrs:{title:"课程介绍"}},[s("more-mask",{attrs:{disabled:e.loadMoreAbout},on:{maskLoadMore:function(t){e.loadMoreAbout=!0}}},[s("div",{domProps:{innerHTML:e._s(e.summary)}})])],1),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("teacher",{staticClass:"teacher",attrs:{title:"教师介绍",teacherInfo:e.details.teachers}}),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("directory",{ref:"directory"}),e._v(" "),s("div",{staticClass:"segmentation"}),e._v(" "),s("review-list",{ref:"review",attrs:{targetId:e.details.courseSet.id,reviews:e.details.reviews,title:"学员评价",type:"course",defaulValue:"暂无评价"}}),e._v(" "),e.isClassCourse?e._e():s("e-footer",{attrs:{disabled:!e.accessToJoin},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v("\n    "+e._s(e._f("filterJoinStatus")(e.details.access.code,"course",e.vipAccessToJoin)))])],2)},staticRenderFns:[]},j=s("VU/8")(O,L,!1,null,null,null).exports,M={components:{},data:function(){return{currentComp:""}},computed:a()({},Object(f.mapState)("course",{selectedPlanIndex:function(e){return e.selectedPlanIndex},joinStatus:function(e){return e.joinStatus},details:function(e){return e.details}}),Object(f.mapState)({isLoading:function(e){return e.isLoading}})),watch:{joinStatus:function(e){this.getComponent(e)}},created:function(){var e=this;this.getCourseDetail({courseId:this.$route.params.id}).then(function(){e.getComponent(e.joinStatus)}).catch(function(e){i.a.fail(e.message)})},methods:a()({},Object(f.mapActions)("course",["getCourseDetail"]),Object(f.mapMutations)("course",{setSourceType:h.i}),{getComponent:function(e){this.currentComp=e?P:j}}),beforeRouteLeave:function(e,t,s){this.setSourceType({sourceType:"img",taskId:-1}),s()}},$={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail"},[this.isLoading?t("e-loading"):this._e(),this._v(" "),t(this.currentComp,{tag:"component",attrs:{details:this.details}})],1)},staticRenderFns:[]},A=s("VU/8")(M,$,!1,null,null,null);t.default=A.exports},gMS5:function(e,t,s){"use strict";var i=s("//Fk"),n=s.n(i),a=s("Xxa5"),r=s.n(a),o=s("woOf"),c=s.n(o),l=(s("eqfM"),s("/QYm")),u=s("exGp"),d=s.n(u),v=s("Dd8w"),p=s.n(v),h=s("PirY"),m=s.n(h),f=s("NYxO"),_=s("gyMJ"),y={data:function(){return{isEncryptionPlus:!1,mediaOpts:{},isCoverOpen:!1,isPlaying:!1,player:null}},props:{courseSet:{type:Object,default:{}}},computed:p()({},Object(f.mapState)("course",{sourceType:function(e){return e.sourceType},selectedPlanId:function(e){return e.selectedPlanId},taskId:function(e){return e.taskId},details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},user:function(e){return e.user}}),{textContent:function(){return this.mediaOpts.text}}),watch:{taskId:{immediate:!0,handler:function(e,t){["video","audio"].includes(this.sourceType)&&(window.scrollTo(0,0),this.initPlayer())}}},methods:{viewAudioDoc:function(){this.isCoverOpen=!0},hideAudioDoc:function(){this.isCoverOpen=!1},handlePlayer:function(){return this.isPlaying?this.player&&this.player.pause():this.player&&this.player.play()},getParams:function(){return!this.joinStatus?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId}}},initPlayer:function(){var e=this;return d()(r.a.mark(function t(){var s,i,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$refs.video&&(e.$refs.video.innerHTML=""),t.next=3,_.a.getMedia(e.getParams());case 3:if(s=t.sent,e.isEncryptionPlus=s.media.isEncryptionPlus,!s.media.isEncryptionPlus){t.next=8;break}return Object(l.a)("该浏览器不支持云视频播放，请下载App"),t.abrupt("return");case 8:i=s.media,n={id:"course-detail__head--video",user:e.user,playlist:i.url,autoplay:!0,disableFullscreen:"audio"===e.sourceType,isAudio:"audio"===e.sourceType},e.mediaOpts=c()({text:s.media.text},n),e.$store.commit("UPDATE_LOADING_STATUS",!0),e.loadPlayerSDK().then(function(t){e.$store.commit("UPDATE_LOADING_STATUS",!1);var s=new t(n);s.on("playing",function(){e.isPlaying=!0}),s.on("paused",function(){e.isPlaying=!1}),e.player=s});case 13:case"end":return t.stop()}},t,e)}))()},loadPlayerSDK:function(){if(!window.VideoPlayerSDK){var e="//service-cdn.qiqiuyun.net/js-sdk/video-player/sdk-v1.js?v="+Date.now()/1e3/60;return new n.a(function(t,s){m()(e,function(e){e&&s(e),t(window.VideoPlayerSDK)})})}return n.a.resolve(window.VideoPlayerSDK)}}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail__head"},[e.textContent?s("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus&&!e.isCoverOpen,expression:"['audio'].includes(sourceType) && !isEncryptionPlus && !isCoverOpen"}],staticClass:"course-detail__nav--btn",on:{click:e.viewAudioDoc}},[e._v("\n    文稿\n  ")]):e._e(),e._v(" "),e.textContent?s("div",{directives:[{name:"show",rawName:"v-show",value:["audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['audio'].includes(sourceType) && !isEncryptionPlus"}],staticClass:"course-detail__nav--cover web-view",class:{opened:e.isCoverOpen}},[s("div",{staticClass:"media-text",domProps:{innerHTML:e._s(e.textContent)}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isCoverOpen,expression:"isCoverOpen"}],staticClass:"course-detail__nav--cover-control",on:{click:e.handlePlayer}},[s("i",{staticClass:"h5-icon",class:e.isPlaying?"h5-icon-zanting":"h5-icon-bofang"})]),e._v(" "),s("div",{staticClass:"course-detail__nav--cover-close-btn",on:{click:e.hideAudioDoc}},[s("i",{staticClass:"van-icon van-icon-arrow van-nav-bar__arrow"})])]):e._e(),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"img"===e.sourceType||e.isEncryptionPlus,expression:"sourceType === 'img' || isEncryptionPlus"}],staticClass:"course-detail__head--img"},[s("img",{attrs:{src:e.courseSet.cover.large,alt:""}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio"].includes(e.sourceType)&&!e.isEncryptionPlus,expression:"['video', 'audio'].includes(sourceType) && !isEncryptionPlus"}],ref:"video",attrs:{id:"course-detail__head--video"}})])},staticRenderFns:[]},g=s("VU/8")(y,C,!1,null,null,null);t.a=g.exports},upIP:function(e,t,s){"use strict";var i=s("GK7I"),n=s("rsAy"),a={name:"reviewList",components:{review:i.a,moreMask:n.a},props:["reviews","title","targetId","defaulValue","type"],data:function(){return{maxShowNum:5}},methods:{loadMore:function(){this.$router.push({path:"/comment/"+this.targetId,query:{type:this.type}})}},computed:{isClass:function(){return"classroom"===this.type}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:e.title,needFlex:!1,defaulValue:e.defaulValue}},[e.reviews.length?s("moreMask",{attrs:{maxHeight:400},on:{maskLoadMore:e.loadMore}},[e._l(e.reviews,function(t){return[s("review",{attrs:{review:t,isClass:e.isClass,course:t.course}})]})],2):e._e()],1)},staticRenderFns:[]},o=s("VU/8")(a,r,!1,null,null,null);t.a=o.exports}});