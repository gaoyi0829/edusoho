!function(d){function i(i){for(var e,s,r=i[0],o=i[1],n=i[2],a=0,t=[];a<r.length;a++)s=r[a],Object.prototype.hasOwnProperty.call(w,s)&&w[s]&&t.push(w[s][0]),w[s]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(d[e]=o[e]);for(c&&c(i);t.length;)t.shift()();return u.push.apply(u,n||[]),l()}function l(){for(var i,e=0;e<u.length;e++){for(var s=u[e],r=!0,o=1;o<s.length;o++){var n=s[o];0!==w[n]&&(r=!1)}r&&(u.splice(e--,1),i=a(a.s=s[0]))}return i}var s={},w={213:0},u=[];function a(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return d[i].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=d,a.c=s,a.d=function(i,e,s){a.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:s})},a.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},a.t=function(e,i){if(1&i&&(e=a(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var r in e)a.d(s,r,function(i){return e[i]}.bind(null,r));return s},a.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return a.d(e,"a",e),e},a.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=i,e=e.slice();for(var o=0;o<e.length;o++)i(e[o]);var c=r;u.push([683,0]),l()}({280:function(k,T,S){var _;
/*!
 * UAParser.js v0.7.21
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
!function(o,u){"use strict";var c="function",i="undefined",e="model",s="name",r="type",n="vendor",a="version",t="architecture",d="console",l="mobile",w="tablet",m="smarttv",p="wearable",b={extend:function(i,e){var s={};for(var r in i)e[r]&&e[r].length%2==0?s[r]=e[r].concat(i[r]):s[r]=i[r];return s},has:function(i,e){return"string"==typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:u},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},f={rgx:function(i,e){for(var s,r,o,n,a,t=0;t<e.length&&!n;){for(var d=e[t],l=e[t+1],w=s=0;w<d.length&&!n;)if(n=d[w++].exec(i))for(r=0;r<l.length;r++)a=n[++s],"object"==typeof(o=l[r])&&0<o.length?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?typeof o[1]!=c||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):u:this[o[0]]=a?o[1].call(this,a,o[2]):u:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):u):this[o]=a||u;t+=2}},str:function(i,e){for(var s in e)if("object"==typeof e[s]&&0<e[s].length){for(var r=0;r<e[s].length;r++)if(b.has(e[s][r],i))return"?"===s?u:s}else if(b.has(e[s],i))return"?"===s?u:s;return i}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},g={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[s,a],[/(opios)[\/\s]+([\w\.]+)/i],[[s,"Opera Mini"],a],[/\s(opr)\/([\w\.]+)/i],[[s,"Opera"],a],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[s,a],[/(konqueror)\/([\w\.]+)/i],[[s,"Konqueror"],a],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[s,"IE"],a],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[s,"Edge"],a],[/(yabrowser)\/([\w\.]+)/i],[[s,"Yandex"],a],[/(Avast)\/([\w\.]+)/i],[[s,"Avast Secure Browser"],a],[/(AVG)\/([\w\.]+)/i],[[s,"AVG Secure Browser"],a],[/(puffin)\/([\w\.]+)/i],[[s,"Puffin"],a],[/(focus)\/([\w\.]+)/i],[[s,"Firefox Focus"],a],[/(opt)\/([\w\.]+)/i],[[s,"Opera Touch"],a],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[s,"UCBrowser"],a],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],a],[/(windowswechat qbcore)\/([\w\.]+)/i],[[s,"WeChat(Win) Desktop"],a],[/(micromessenger)\/([\w\.]+)/i],[[s,"WeChat"],a],[/(brave)\/([\w\.]+)/i],[[s,"Brave"],a],[/(qqbrowserlite)\/([\w\.]+)/i],[s,a],[/(QQ)\/([\d\.]+)/i],[s,a],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[s,a],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[s,a],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[s,a],[/(MetaSr)[\/\s]?([\w\.]+)/i],[s],[/(LBBROWSER)/i],[s],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[a,[s,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[a,[s,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[s,a],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[a,[s,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[s,/(.+)/,"$1 WebView"],a],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[s,/(.+(?:g|us))(.+)/,"$1 $2"],a],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[a,[s,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[s,"Sailfish Browser"],a],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[s,a],[/(dolfin)\/([\w\.]+)/i],[[s,"Dolphin"],a],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[s,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[s,"Chrome"],a],[/(coast)\/([\w\.]+)/i],[[s,"Opera Coast"],a],[/fxios\/([\w\.-]+)/i],[a,[s,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[a,[s,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[a,s],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[s,"GSA"],a],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[s,[a,f.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[s,a],[/(navigator|netscape)\/([\w\.-]+)/i],[[s,"Netscape"],a],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[s,a]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[t,"amd64"]],[/(ia32(?=;))/i],[[t,b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[t,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[t,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[t,/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[[t,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[t,b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[e,n,[r,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[e,[n,"Apple"],[r,w]],[/(apple\s{0,1}tv)/i],[[e,"Apple TV"],[n,"Apple"],[r,m]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[n,e,[r,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[e,[n,"Amazon"],[r,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[e,f.str,h.device.amazon.model],[n,"Amazon"],[r,l]],[/android.+aft([bms])\sbuild/i],[e,[n,"Amazon"],[r,m]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[e,n,[r,l]],[/\((ip[honed|\s\w*]+);/i],[e,[n,"Apple"],[r,l]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[n,e,[r,l]],[/\(bb10;\s(\w+)/i],[e,[n,"BlackBerry"],[r,l]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[e,[n,"Asus"],[r,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[n,"Sony"],[e,"Xperia Tablet"],[r,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[n,"Sony"],[r,l]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[n,e,[r,d]],[/android.+;\s(shield)\sbuild/i],[e,[n,"Nvidia"],[r,d]],[/(playstation\s[34portablevi]+)/i],[e,[n,"Sony"],[r,d]],[/(sprint\s(\w+))/i],[[n,f.str,h.device.sprint.vendor],[e,f.str,h.device.sprint.model],[r,l]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[n,[e,/_/g," "],[r,l]],[/(nexus\s9)/i],[e,[n,"HTC"],[r,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[e,[n,"Huawei"],[r,l]],[/android.+(bah2?-a?[lw]\d{2})/i],[e,[n,"Huawei"],[r,w]],[/(microsoft);\s(lumia[\s\w]+)/i],[n,e,[r,l]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[e,[n,"Microsoft"],[r,d]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[n,"Microsoft"],[r,l]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[e,[n,"Motorola"],[r,l]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[e,[n,"Motorola"],[r,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,b.trim],[e,b.trim],[r,m]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[n,"Samsung"],[r,m]],[/\(dtv[\);].+(aquos)/i],[e,[n,"Sharp"],[r,m]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[n,"Samsung"],e,[r,w]],[/smart-tv.+(samsung)/i],[n,[r,m],e],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[n,"Samsung"],e,[r,l]],[/sie-(\w*)/i],[e,[n,"Siemens"],[r,l]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[n,"Nokia"],e,[r,l]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[e,[n,"Acer"],[r,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[e,[n,"LG"],[r,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[n,"LG"],e,[r,w]],[/(lg) netcast\.tv/i],[n,e,[r,m]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[e,[n,"LG"],[r,l]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[n,e,[r,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[e,[n,"Lenovo"],[r,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[n,e,[r,l]],[/linux;.+((jolla));/i],[n,e,[r,l]],[/((pebble))app\/[\d\.]+\s/i],[n,e,[r,p]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,e,[r,l]],[/crkey/i],[[e,"Chromecast"],[n,"Google"],[r,m]],[/android.+;\s(glass)\s\d/i],[e,[n,"Google"],[r,p]],[/android.+;\s(pixel c)[\s)]/i],[e,[n,"Google"],[r,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[e,[n,"Google"],[r,l]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[e,/_/g," "],[n,"Xiaomi"],[r,l]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[e,/_/g," "],[n,"Xiaomi"],[r,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[e,[n,"Meizu"],[r,l]],[/(mz)-([\w-]{2,})/i],[[n,"Meizu"],e,[r,l]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[e,[n,"OnePlus"],[r,l]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[e,[n,"RCA"],[r,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[e,[n,"Dell"],[r,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[e,[n,"Verizon"],[r,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[n,"Barnes & Noble"],e,[r,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[e,[n,"NuVision"],[r,w]],[/android.+;\s(k88)\sbuild/i],[e,[n,"ZTE"],[r,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[e,[n,"Swiss"],[r,l]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[e,[n,"Swiss"],[r,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[e,[n,"Zeki"],[r,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[n,"Dragon Touch"],e,[r,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[e,[n,"Insignia"],[r,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[e,[n,"NextBook"],[r,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[n,"Voice"],e,[r,l]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[n,"LvTel"],e,[r,l]],[/android.+;\s(PH-1)\s/i],[e,[n,"Essential"],[r,l]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[e,[n,"Envizen"],[r,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[n,e,[r,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[e,[n,"MachSpeed"],[r,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[n,e,[r,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[e,[n,"Rotor"],[r,w]],[/android.+(KS(.+))\s+build/i],[e,[n,"Amazon"],[r,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[n,e,[r,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[r,b.lowerize],n,e],[/[\s\/\(](smart-?tv)[;\)]/i],[[r,m]],[/(android[\w\.\s\-]{0,9});.+build/i],[e,[n,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[a,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[a,[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,a],[/rv\:([\w\.]{1,9}).+(gecko)/i],[a,s]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[s,a],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[s,[a,f.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[a,f.str,h.os.windows.version]],[/\((bb)(10);/i],[[s,"BlackBerry"],a],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[s,a],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[s,"Symbian"],a],[/\((series40);/i],[s],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"],a],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[s,a],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],a],[/(sunos)\s?([\w\.\d]*)/i],[[s,"Solaris"],a],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[s,a],[/(haiku)\s(\w+)/i],[s,a],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[a,/_/g,"."],[s,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[s,"Mac OS"],[a,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[s,a]]},v=function(i,e){if("object"==typeof i&&(e=i,i=u),!(this instanceof v))return new v(i,e).getResult();var s=i||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),r=e?b.extend(g,e):g;return this.getBrowser=function(){var i={name:u,version:u};return f.rgx.call(i,s,r.browser),i.major=b.major(i.version),i},this.getCPU=function(){var i={architecture:u};return f.rgx.call(i,s,r.cpu),i},this.getDevice=function(){var i={vendor:u,model:u,type:u};return f.rgx.call(i,s,r.device),i},this.getEngine=function(){var i={name:u,version:u};return f.rgx.call(i,s,r.engine),i},this.getOS=function(){var i={name:u,version:u};return f.rgx.call(i,s,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this};v.VERSION="0.7.21",v.BROWSER={NAME:s,MAJOR:"major",VERSION:a},v.CPU={ARCHITECTURE:t},v.DEVICE={MODEL:e,VENDOR:n,TYPE:r,CONSOLE:d,MOBILE:l,SMARTTV:m,TABLET:w,WEARABLE:p,EMBEDDED:"embedded"},v.ENGINE={NAME:s,VERSION:a},v.OS={NAME:s,VERSION:a},typeof T!=i?(typeof k!=i&&k.exports&&(T=k.exports=v),T.UAParser=v):(_=function(){return v}.call(T,S,T,k))===u||(k.exports=_);var y,x=o&&(o.jQuery||o.Zepto);x&&!x.ua&&(y=new v,x.ua=y.getResult(),x.ua.get=function(){return y.getUA()},x.ua.set=function(i){y.setUA(i);var e=y.getResult();for(var s in e)x.ua[s]=e[s]})}("object"==typeof window?window:this)},683:function(i,e,s){"use strict";s.r(e);var r=s(0),o=s.n(r),n=s(1),a=s.n(n),t=s(280),d=s.n(t);new(function(){function i(){o()(this,i),this.init()}return a()(i,[{key:"init",value:function(){var e=this;this.isLiveRoomOpened=!1;var s=0,r=1,i=$("#entry").data("directUrl");i?this.entryRoom(i):s=setInterval(function(){return 10<r?(clearInterval(s),void $("#entry").html(Translator.trans("course_set.live_room.entry_error_hint"))):void $.ajax({url:$("#entry").data("url"),success:function(i){if(i.error)return clearInterval(s),void $("#entry").html(Translator.trans("course_set.live_room.entry_error_with_message",{message:i.error}));i.roomUrl&&(e.entryRoom(i.roomUrl),clearInterval(s)),r++},error:function(){$("#entry").html(Translator.trans("course_set.live_room.entry_error_hint"))}})},3e3),this.triggerLiveEvent()}},{key:"entryRoom",value:function(i){var e=$("#entry").data("provider"),s=$("#entry").data("role"),r=new d.a(navigator.userAgent),o=r.getBrowser(),n=r.getOS();"http:"===document.location.protocol&&"student"===s&&(8===e||9===e)&&"Android"!==n.name&&"Chrome"===o.name&&60<=o.major&&(window.location.href=i),this.isLiveRoomOpened=!0;var a='<iframe name="classroom" src="'+i+'" style="position:absolute; left:0; top:0; height:100%; width:100%; border:0px;" scrolling="no" allowfullscreen="true" allow="microphone; camera"></iframe>';$("body").html(a)}},{key:"triggerLiveEvent",value:function(){var i=this,e=null,s=(s=Date.parse(new Date).toString()).substr(0,10),r=setInterval(function(){i.isLiveRoomOpened&&0!==$('meta[name="trigger_url"]').length&&(e=e?"doing":"start",$.ajax({url:$('meta[name="trigger_url"]').attr("content"),type:"GET",data:{eventName:e,data:{lastTime:s,events:{watching:{watchTime:60}}}},success:function(i){i.live_end&&clearInterval(r)},error:function(i){var e=i.responseJSON.goto;void 0!==e&&(window.location.href=e)}}),s=(s=Date.parse(new Date).toString()).substr(0,10))},6e4)}}]),i}())}});