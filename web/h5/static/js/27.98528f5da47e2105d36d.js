webpackJsonp([27],{W4Yd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("eqfM");var i=r("/QYm"),a=r("Xxa5"),n=r.n(a),s=r("exGp"),u=r.n(s),o=r("Dd8w"),l=r.n(o),c=r("gyMJ"),f=r("NYxO"),d=r("Du/2"),v={data:function(){return{playUrl:"",requestCount:0}},mixins:[r("1JqO").a],computed:l()({},Object(f.mapState)("course",{joinStatus:function(e){return e.joinStatus}}),Object(f.mapState)({isLoading:function(e){return e.isLoading}})),mounted:function(){var t=this;return u()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.token){e.next=3;break}return t.$router.push({name:"login",query:{redirect:t.redirect}}),e.abrupt("return");case 3:t.handleLive();case 4:case"end":return e.stop()}},e,t)}))()},methods:l()({},Object(f.mapMutations)({setNavbarTitle:d.j}),{handleLive:function(){var e=this.$route.query,t=e.taskId,r=e.replay,a=e.title;this.setNavbarTitle(a),"true"!=String(r)?this.requestLiveNo(t):this.getReplayUrl(t)},getReplayUrl:function(e){var r=this;c.a.getLiveReplayUrl({query:{taskId:e}}).then(function(e){if(e.nonsupport)Object(i.a)("回放暂不支持");else if(e.url)if(-1<e.url.indexOf("/error/"))Object(i.a)("暂无回放");else{var t=e.url.indexOf("/");r.playUrl=0==t?e.url:e.url.substring(t)}else e.error&&i.a.fail(e.error.message)}).catch(function(e){i.a.fail(e.message)})},requestLiveNo:function(t){var r=this;c.a.requestLiveNo({query:{taskId:t}}).then(function(e){e.no&&r.getLiveUrl(t,e.no),e.error&&i.a.fail(e.error.message)}).catch(function(e){i.a.fail(e.message)})},getLiveUrl:function(r,a){var n=this;this.requestCount++,c.a.getLiveUrl({query:{taskId:r,no:a}}).then(function(e){if(e.roomUrl){var t=e.roomUrl.indexOf("/");n.playUrl=0==t?e.roomUrl:e.roomUrl.substring(t)}else n.requestCount<30?n.getLiveUrl(r,a):Object(i.a)("获取直播失败");e.error&&i.a.fail(e.error.message)}).catch(function(e){i.a.fail(e.message)})}})},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"web-view"},[e.isLoading?r("e-loading"):e._e(),e._v(" "),r("iframe",{attrs:{id:"player",src:e.playUrl,width:"100%",frameborder:"0"}})],1)},staticRenderFns:[]},m=r("VU/8")(v,p,!1,null,null,null);t.default=m.exports}});