!function(s){function t(t){for(var e,a,n=t[0],r=t[1],o=t[2],i=0,c=[];i<n.length;i++)a=n[i],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&c.push(u[a][0]),u[a]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(s[e]=r[e]);for(p&&p(t);c.length;)c.shift()();return d.push.apply(d,o||[]),l()}function l(){for(var t,e=0;e<d.length;e++){for(var a=d[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==u[o]&&(n=!1)}n&&(d.splice(e--,1),t=i(i.s=a[0]))}return t}var a={},u={69:0},d=[];function i(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=s,i.c=a,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var p=n;d.push([757,0]),l()}({17:function(t,e){t.exports=jQuery},757:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(1),i=a.n(r),c=a(63),s=function(){function r(t,e,a,n){o()(this,r),this.$element=t,this.dataTo=e,this.smsType=a,this.captchaNum=n,this.CaptchaValidator=null,this.init()}return i()(r,[{key:"init",value:function(){var e=this;this.$element.on("click","#getcode_num",function(t){return e.changeCaptcha(t)}),$(".js-captcha-btn").click(function(t){return e.submitForm(t)}),this.initValidator()}},{key:"changeCaptcha",value:function(t){var e=$(t.currentTarget);e.attr("src",e.data("url")+"?"+Math.random())}},{key:"submitForm",value:function(){this.CaptchaValidator.form()&&this.$element.submit()}},{key:"initValidator",value:function(){var e=this;this._captchaValidated=!1,this.CaptchaValidator=this.$element.validate({onkeyup:!1,onfocusout:!1,rules:{captcha_num:{required:!0,alphanumeric:!0}},messages:{captcha_num:{required:Translator.trans("auth.mobile_captcha_required_error_hint")}},submitHandler:function(){console.log("submitHandler"),$.get(e.$element.attr("action"),{value:$("#captcha_num_modal").val()},function(t){t.success?(e.$element.parents(".modal").modal("hide"),e._captchaValidated=!0,new c.a({element:".js-sms-send",url:$(".js-sms-send").data("smsUrl"),smsType:e.smsType,dataTo:e.dataTo,captchaNum:e.captchaNum,captcha:!0,captchaValidated:e._captchaValidated,preSmsSend:function(){return!0}}),$(".js-sms-send").off("click")):(e._captchaValidated=!1,e.$element.find("#getcode_num").attr("src",$("#getcode_num").data("url")+"?"+Math.random()),e.$element.find(".help-block").html('<span class="color-danger">'+Translator.trans("auth.mobile_captcha_error_hint")+"</span>"),e.$element.find(".help-block").show())},"json")}}),$("#captcha_num_modal").keydown(function(t){13==t.keyCode&&e.CaptchaValidator.form()})}}]),r}(),l="",u="",u=0<$('input[name="set_bind_emailOrMobile"]').length?(l="set_bind_emailOrMobile","sms_registration"):0<$('input[name="mobile"]').length?(l="mobile",0<$("#password-reset-by-mobile-form").length?"sms_forget_password":0<$("#settings-find-pay-password-form").length?"sms_forget_pay_password":"sms_bind"):(l=null==$('[name="verifiedMobile"]').val()?"emailOrMobile":"verifiedMobile","sms_registration");$("#captcha-form").find("#getcode_num").attr("src",$("#getcode_num").data("url")+"?"+Math.random());var d=new s($("#captcha-form"),l,u,"captcha_num");console.log($("#captcha-form")),console.log(d)}});