webpackJsonp(["app/js/cashier/modal/index"],{0:function(e,a){e.exports=jQuery},"40176c6f6fc7bd3e85b5":function(e,a,r){"use strict";var n=r("b334fd7e4c5a19234db2"),c=function(e){return e&&e.__esModule?e:{default:e}}(n);$(".js-confirm-btn").on("click",function(e){var a=$(e.currentTarget);$.get(a.data("url"),function(e){e.isPaid?location.href=e.redirectUrl:((0,c.default)("danger",Translator.trans("cashier.confirm.fail_message")),$("#modal").modal("hide"))})})}},["40176c6f6fc7bd3e85b5"]);