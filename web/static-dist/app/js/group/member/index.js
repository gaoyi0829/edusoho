!function(u){function e(e){for(var r,t,n=e[0],o=e[1],i=e[2],a=0,s=[];a<n.length;a++)t=n[a],Object.prototype.hasOwnProperty.call(l,t)&&l[t]&&s.push(l[t][0]),l[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(u[r]=o[r]);for(f&&f(e);s.length;)s.shift()();return m.push.apply(m,i||[]),c()}function c(){for(var e,r=0;r<m.length;r++){for(var t=m[r],n=!0,o=1;o<t.length;o++){var i=t[o];0!==l[i]&&(n=!1)}n&&(m.splice(r--,1),e=a(a.s=t[0]))}return e}var t={},l={165:0},m=[];function a(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return u[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=u,a.c=t,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(r,e){if(1&e&&(r=a(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)a.d(t,n,function(e){return r[e]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var f=n;m.push([768,0]),c()}({768:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),i=t(1),a=t.n(i);new(function(){function e(){o()(this,e),this.$group=$(".js-group-section"),this.init()}return a()(e,[{key:"init",value:function(){this.bindEvent()}},{key:"bindEvent",value:function(){var e=this;this.$group.on("click","#delete-btn",function(){return e.deleteMember()}),this.$group.on("click","#remove-admin-btn",function(){return e.removeAdminer()}),this.$group.on("click","#set-admin-btn",function(){return e.setAdminer()})}},{key:"setAdminer",value:function(){var e=$("#set-admin-url").attr("value"),r=$("#member-form");this.adminerOperated({choose:"group.manage.choose_setting_member_hint",confirm:"group.manage.setting_member_permission_hint",error:"site.save_error_hint"},e,r)}},{key:"removeAdminer",value:function(){var e=$("#admin-form").attr("action"),r=$("#admin-form");this.adminerOperated({choose:"group.manage.choose_setting_member_hint",confirm:"group.manage.cancel_member_permission",error:"site.save_error_hint"},e,r)}},{key:"deleteMember",value:function(){var e=$("#member-form").attr("action"),r=$("#member-form");this.adminerOperated({choose:"group.manage.delete_required_error_hint",confirm:"group.manage.delete_member_hint",error:"site.delete_fail_hint"},e,r,!0)}},{key:"adminerOperated",value:function(e,r,t,n){return $(":checkbox:checked").length<1?(alert(Translator.trans(e.choose)),!1):!!confirm(Translator.trans(e.confirm))&&void $.post(r,t.serialize(),function(){var e=n?"site.delete_success_hint":"site.save_success_hint";cd.message({type:"success",message:Translator.trans(e)}),setTimeout(function(){window.location.reload()},1500)}).error(function(){cd.message({type:"danger",message:Translator.trans(e.error)})})}}]),e}())}});