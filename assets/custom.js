/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

$(".site-nav--has-dropdown").hover(function(){
  $(".template-index .header-wrapper").removeClass("is-light");
  $(".template-index").addClass("is-white-header");
  $(".menu_overlay_new").css("display","block");
  $('body').addClass("open_megamenu");
}, function(){
  $(".template-index .header-wrapper").addClass("is-light");
  $(".template-index").removeClass("is-white-header");
  $(".menu_overlay_new").css("display","none");
  $('body').removeClass("open_megamenu");
  if ($(".site-header--opening").length > 0) {
    $(".template-index .header-wrapper").removeClass("is-light");
  }
})
  
/*
 Version: 1.8.0 Slick
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  fade: true,
  pauseOnHover:false,
  pauseOnFocus:false,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 993,
      settings: {
        adaptiveHeight: false
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  variableWidth: true,
  centerMode: false,
  pauseOnHover:false,
  pauseOnFocus:false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/**
 * Swiper 8.4.5
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function C(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function T(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=a.grid&&a.grid.rows>1&&e.grid;let $;T&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(T&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),C%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),T&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||d([])).each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1);const v=-o[g];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((e,t)=>{d(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/n.length)*n.length;o.push(n.eq(e)[0]),l.unshift(n.eq(n.length-e-1)[0])}for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function L(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!l.noSwipingClass&&""!==l.noSwipingClass,f=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&f&&(h=d(f[0]));const g=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(v?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(g,h[0]):h.closest(g)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const w=o.currentX,b=o.currentY,x=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,y=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(x&&(w<=y||w>=i.innerWidth-y)){if("prevent"!==x)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=b,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function O(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let N=!1;function B(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=L.bind(e),e.onTouchMove=O.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!N&&(t.addEventListener("touchstart",B),N=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function q(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const j={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=i[t]&&i[t].enabled,a=o[t]&&o[t].enabled;s&&!a&&e[t].disable(),!s&&a&&e[t].enable()}));const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},_={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:q(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,_,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children?s.children(i()):d(s).children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(_,e)}static get extendedDefaults(){return _}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function J(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(j).forEach((e=>{Object.keys(j[e]).forEach((t=>{V.prototype[t]=j[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el)),i.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass);let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){const e=t.params.scrollbar,s=t.scrollbar.$el;s&&s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function L(){l&&(l=!1,k("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),e.slideRole&&o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},E=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),y(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",x,!0),t.$el.on("pointerdown",w,!0),t.$el.on("pointerup",b,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&E()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",x,!0),t.$el.off("pointerdown",w,!0),t.$el.off("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1);const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.removeClass(r),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);else for(let e=0;e<i;e+=1)s.slides.eq(t.realIndex+e).addClass(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){let i,r,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();i=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,r=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,r=i>t.previousIndex?"next":"prev";l&&(i+="next"===r?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i=i>o?i-Math.floor(a/2)+1:i+Math.floor(a/2)-1:i>o&&s.params.slidesPerGroup,s.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));

/* home_logo_slider */
new Swiper(".home_logo_slider", {
  slidesPerView: 3,
  spaceBetween: 80,
  freeMode: false,
  loop: false,
  mousewheel: false,
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
      mousewheel: true,
    },
    769: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 80,
      slidesPerView: 3,
    }
  },
});

/* home_collection_slider */
new Swiper(".home_collection_slider", {
  slidesPerView: 3,
  spaceBetween: 16,
  freeMode: false,
  loop: true,
  mousewheel: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: "auto",
      mousewheel: true,
    },
    769: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 16,
      slidesPerView: 3,
    }
  },
});

/* home_columns_slider */
new Swiper(".home_columns_slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: false,
  loop: true,
  mousewheel: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: "auto",
      mousewheel: true,
      centeredSlides: true,
    },
    769: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 1,
    }
  },
});



/* home_columns_slider */
new Swiper(".home_blog_slider", {
  slidesPerView: 3,
  spaceBetween: 23,
  freeMode: false,
  loop: true,
  mousewheel: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 16,
      slidesPerView: "auto",
      mousewheel: true,
      centeredSlides: false,
    },
    769: {
      spaceBetween: 16,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 23,
      slidesPerView: 3,
    }
  },
});

/* blog_link_slider */
new Swiper(".blog_link_slider", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: false,
  loop: false,
  mousewheel: true,
  breakpoints: {
    0: {
      mousewheel: true,
    },
    769: {
      mousewheel: false,
    }
  }
});

/* page_jewels_slider */
new Swiper(".page_jewels_slider", {
  slidesPerView: 4,
  spaceBetween: 17,
  freeMode: false,
  loop: false,
  mousewheel: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 12,
      slidesPerView: "auto",
      mousewheel: true,
    },
    769: {
      spaceBetween: 12,
      slidesPerView: 4,
    },
    992: {
      spaceBetween: 17,
      slidesPerView: 4,
    }
  },
});

/* page_jewels_column_slider */
new Swiper(".page_jewels_column_slider", {
  slidesPerView: 4,
  spaceBetween: 17,
  freeMode: false,
  loop: false,
  mousewheel: false,
  breakpoints: {
    0: {
      spaceBetween: 12,
      slidesPerView: "auto",
      mousewheel: true,
    },
    769: {
      spaceBetween: 12,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 17,
      slidesPerView: 4,
    }
  },
});

/* meta_slider_1 */
new Swiper(".meta_slider_1", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: false,
  loop: false,
  mousewheel: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

/* meta_slider_2 */
new Swiper(".meta_slider_2", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: false,
  loop: true,
  mousewheel: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

$(".product-block--tab .collapsible-trigger").click(function() {
  $('html, body').delay(200).animate({
      scrollTop: $(this).offset().top - 100
  }, 1000);  
})


// collection script
const mainCollection = document.querySelector("#collectionTemplate");

if(mainCollection) {
  // append html in collection grid
  function initializeEmbeddedGridItem() {
    const collectionGridItems = mainCollection.querySelectorAll("[js-collection-grid-item]");

    if(collectionGridItems) {
      collectionGridItems.forEach( item => {
        insertWithProductItem(item);
      });
  
      // document.addEventListener('loadmore:init', insertWithProductItem);
  
      window.onresize = insertWithProductItem;
  
      function insertWithProductItem (collectionGridItem) {
        const desktopPosition = collectionGridItem.dataset.desktopPosition;
        const mobilePosition = collectionGridItem.dataset.mobilePosition;
        if($(document).width() > 768) {
          const targetProductItem = mainCollection.querySelector(`.collection-grid__wrapper .grid__item:nth-child(${desktopPosition})`);
          targetProductItem.insertAdjacentHTML("afterEnd",collectionGridItem.outerHTML);
        } else {
          const targetProductItem = mainCollection.querySelector(`.collection-grid__wrapper .grid__item:nth-child(${mobilePosition})`);
          targetProductItem.insertAdjacentHTML("afterEnd",collectionGridItem.outerHTML);
        }
      }
    };
  };

  document.addEventListener('insertWithProductItem:init', initializeEmbeddedGridItem);
  initializeEmbeddedGridItem();


  // append html in collection grid
  function initializeEmbeddedImageWithSlider() {
    const collectionImageWithSlider = mainCollection.querySelectorAll("[js-collection-image-with-slider]");

    if(collectionImageWithSlider) {
      collectionImageWithSlider.forEach( item => {
        insertWithProductItemImageWithSlider(item);
      });
  
      // document.addEventListener('loadmore:init', insertWithProductItem);
  
      window.onresize = insertWithProductItemImageWithSlider;
  
      function insertWithProductItemImageWithSlider (collectionGridItem) {
        const desktopPosition = collectionGridItem.dataset.desktopPosition;
        const mobilePosition = collectionGridItem.dataset.mobilePosition;
        if($(document).width() > 768) {
          const targetProductItem = mainCollection.querySelector(`.collection-grid__wrapper .grid__item:nth-child(${desktopPosition})`);
          targetProductItem.insertAdjacentHTML("afterEnd",collectionGridItem.outerHTML);
        } else {
          const targetProductItem = mainCollection.querySelector(`.collection-grid__wrapper .grid__item:nth-child(${mobilePosition})`);
          targetProductItem.insertAdjacentHTML("afterEnd",collectionGridItem.outerHTML);
        }
      }
    };
  };

  document.addEventListener('insertWithProductItem:init', initializeEmbeddedImageWithSlider);
  initializeEmbeddedImageWithSlider();

  // load more functionality
  function loadMoreInitialize (){
    const loadMoreBtn = mainCollection.querySelector("#loadMoreBtn");
    
    $(loadMoreBtn).click(function(e) {
      e.preventDefault();
      renderProducts($(this));
    });
  };

  // Dev-friendly way to initalize the load more functionality
  document.addEventListener('loadmore:init', loadMoreInitialize);

  loadMoreInitialize();

  function renderProducts(btn){
    const collectionGrid = mainCollection.querySelector("#collectionGrid");
    const ajaxinatePagination = mainCollection.querySelector("#collection-ajaxinate-pagination");
    const nextPageUrl = btn.attr("href");
    btn.addClass("btn-loading");
    btn.text("loading...");

    fetch(`${nextPageUrl}&view=ajax-collection`)
    .then(function(response) {
      return response.text();
    }).then(function(html) {
      // Convert the HTML string into a document object
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var collectionGrid_ = doc.querySelector("#collectionGrid");
      var ajaxinatePagination_ = doc.querySelector("#collection-ajaxinate-pagination");

      collectionGrid.insertAdjacentHTML("beforeend", collectionGrid_.innerHTML);
      ajaxinatePagination.innerHTML = ajaxinatePagination_.innerHTML;

      btn.removeClass("btn-loading");
      btn.text("load more");
      $(mainCollection).find("#loadMoreBtn").removeClass("loading");;

      loadMoreInitialize();
    }); 
  }
};

// image with slider block script
function initImageWithSlider() {
  const imageWithSlider = $("[js-image-with-slider]");

  if(imageWithSlider.length) {
    // featured collection slider
    const featuredCollectionSlider = new Swiper("[js-featured-collection-slider]", {
      slidesPerView: 2,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        0: {
          spaceBetween: 12,
        },
        767: {
          spaceBetween: 16,
        },
        990: {
          spaceBetween: 24,
        }
      }
    });

    // initialize product sample (for slider) script
    const productSample = imageWithSlider.find("[js-product-sample]");

    productSample.click(function() {
      const productId = $(this).data("product-id");
      const slideToEl = imageWithSlider.find(`.swiper-slide[data-product-id="${productId}"]`);
      const slideToIndex = parseInt(slideToEl.data("slide-index"));
      const swiperEl = $(this).parents("[js-image-with-slider]").find(".swiper-wrapper");

      if (slideToEl.length) {
        if(Array.isArray(featuredCollectionSlider)) {
          featuredCollectionSlider.forEach(slider => {
            if(swiperEl.is(slider.$wrapperEl[0])) {
              slider.slideTo(slideToIndex, 1000, true);
            }
          })
        }else {
          featuredCollectionSlider.slideTo(slideToIndex, 1000, true);
        }
      }
    });
  }
}

document.addEventListener('imageWithSlide:init', initImageWithSlider);
initImageWithSlider();

if($('body').hasClass('template-page')){
  document.addEventListener('shopify:section:load', initImageWithSlider);
  document.addEventListener('shopify:section:unload', initImageWithSlider);
}

$(document).ready(function(){
  let tag_link = $('[js-blog-tag-link]')
  tag_link.click(function(e){
    tag_link.removeClass('selected');
    e.preventDefault();
    const tag = $(this).data('blog-tag');
    $(this).addClass('selected');
    blogAjax(tag)
  })
  let url = `${window.location.href}`
  function blogAjax(tag) {
    if(tag === "All") {
      url = `${window.location.href}/?view=blog-ajax`
    }else {
      url = `${window.location.href}/tagged/${tag}/?view=blog-ajax`;
    }
    const container = $('#tab-blog-section');
    fetch(url)
      .then(function(response) {
        return response.text()
      }).then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var ajaxContainer = $(doc).find('#ajax-tab-blog-section')
        container.html(ajaxContainer.children()); 
      })
  }
})

const loadMOreBtn_2 = $('#load_more_btn_2');
var products_on_page_2 = $('.blogs-on-page-2');
var next_url_2 = products_on_page_2.data('next-url-2');

var load_more_btn_2 = $('.load-more_btn-2 ');
var load_more_spinner_2 = $('.load-more_spinner-2');

function loadMoreProducts_1() {
  $.ajax(
    {
      url: next_url_2,
      type: 'GET',
      dataType: 'html',
      beforeSend: function(){
      	load_more_btn_2.hide();
        load_more_spinner_2.show();
      }

    }
  ).done(function(next_page_2){
	
    load_more_spinner_2.hide();
    
    var new_products_2 = $(next_page_2).find('.blogs-on-page-2');
    var new_url_2 = new_products_2.data('next-url-2');
    
    if(new_url_2)
      load_more_btn_2.show();

    next_url_2 = new_url_2;
    products_on_page_2.append(new_products_2.html());

  })
}
loadMOreBtn_2.click(loadMoreProducts_1)

/* nanogallery2 - v3.0.5 - 2021-01-06 */
/*!
 * @preserve nanogallery2 - javascript photo / video gallery and lightbox
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
 * Requirements:
 *  - jQuery (http://www.jquery.com) - version >= 1.7.1
 *
 * Embeded components:
 *  - shifty (https://github.com/jeremyckahn/shifty)
 *  - imagesloaded (https://github.com/desandro/imagesloaded)
 *  - hammer.js (http://hammerjs.github.io/)
 *  - screenfull.js (https://github.com/sindresorhus/screenfull.js)
 * Tools:
 *  - webfont generated with http://fontello.com - mainly based on Font Awesome Copyright (C) 2012 by Dave Gandy (http://fontawesome.io/)
 *  - ICO online converter: https://iconverticons.com/online/
 */
! function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports && "function" == typeof require ? e(require("jquery")) : e(jQuery)
}((function(e) {
  "use strict";

  function t(e) {
      var t = document.getElementById("ngyColorHelperToRGB");
      return null === t && ((t = document.createElement("div")).id = "ngyColorHelperToRGB", t.style.cssText = "display: none; color:" + e + ";", document.body.appendChild(t)), getComputedStyle(t).color
  }

  function n(e, t, n) {
      var i = "";
      if ("RGBA(" == t.toUpperCase().substring(0, 5) && (i = "a", t = "rgb(" + t.substring(5)), "number" != typeof e || e < -1 || e > 1 || "string" != typeof t || "r" != t[0] && "#" != t[0] || "string" != typeof n && void 0 !== n) return null;

      function a(e) {
          var t = e.length,
              n = new Object;
          if (t > 9) {
              if ((e = e.split(",")).length < 3 || e.length > 4) return null;
              n[0] = o(e[0].slice(4)), n[1] = o(e[1]), n[2] = o(e[2]), n[3] = e[3] ? parseFloat(e[3]) : -1
          } else {
              if (8 == t || 6 == t || t < 4) return null;
              t < 6 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (t > 4 ? e[4] + "" + e[4] : "")), e = o(e.slice(1), 16), n[0] = e >> 16 & 255, n[1] = e >> 8 & 255, n[2] = 255 & e, n[3] = 9 == t || 5 == t ? r((e >> 24 & 255) / 255 * 1e4) / 1e4 : -1
          }
          return n
      }
      var o = parseInt,
          r = Math.round,
          l = t.length > 9,
          s = (l = "string" == typeof n ? n.length > 9 || "c" == n && !l : l, e < 0),
          u = (e = s ? -1 * e : e, n = n && "c" != n ? n : s ? "#000000" : "#FFFFFF", a(t)),
          c = a(n);
      return u && c ? l ? "rgb" + i + "(" + r((c[0] - u[0]) * e + u[0]) + "," + r((c[1] - u[1]) * e + u[1]) + "," + r((c[2] - u[2]) * e + u[2]) + (u[3] < 0 && c[3] < 0 ? ")" : "," + (u[3] > -1 && c[3] > -1 ? r(1e4 * ((c[3] - u[3]) * e + u[3])) / 1e4 : c[3] < 0 ? u[3] : c[3]) + ")") : "#" + (4294967296 + 16777216 * (u[3] > -1 && c[3] > -1 ? r(255 * ((c[3] - u[3]) * e + u[3])) : c[3] > -1 ? r(255 * c[3]) : u[3] > -1 ? r(255 * u[3]) : 255) + 65536 * r((c[0] - u[0]) * e + u[0]) + 256 * r((c[1] - u[1]) * e + u[1]) + r((c[2] - u[2]) * e + u[2])).toString(16).slice(u[3] > -1 || c[3] > -1 ? 1 : 3) : null
  }

  function i(e) {
      if (null === e || "object" != typeof e) return e;
      var t = e.constructor();
      for (var n in e) t[n] = i(e[n]);
      return t
  }

  function a() {
      var e = jQuery(window);
      return {
          l: e.scrollLeft(),
          t: e.scrollTop(),
          w: e.width(),
          h: e.height()
      }
  }

  function o(e, t) {
      var n = 0;
      "" == e && (e = "*"), jQuery(e).each((function() {
          var e = parseInt(jQuery(this).css("z-index"));
          n = e > n ? e : n
      })), n++, jQuery(t).css("z-index", n)
  }
  var r = function(e) {
      return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  };

  function l() {
      this.LightboxReOpen = function() {
          m()
      }, this.ReloadAlbum = function() {
          if ("" === u.O.kind) throw "Not supported for this content source:" + u.O.kind;
          var e = u.GOM.albumIdx;
          if (-1 == e) throw "Current album not found.";
          for (var t = u.I[e].GetID(), n = u.I.length, i = 0; i < n; i++) {
              var a = u.I[i];
              a.albumID == t && (a.selected = !1)
          }
          u.I[e].contentIsLoaded = !1, g("-1", t)
      }, this.ItemsSetSelectedValue = function(e, t) {
          for (var n = e.length, i = 0; i < n; i++) pe(e[i], t)
      }, this.ItemsSelectedGet = function() {
          for (var e = [], t = u.I.length, n = 0; n < t; n++) 1 == u.I[n].selected && e.push(u.I[n]);
          return e
      }, this.Get = function(e) {
          return u.O[e]
      }, this.Set = function(e, t) {
          switch (u.O[e] = t, e) {
              case "thumbnailSelectable":
                  de(), w(u.GOM.albumIdx)
          }
      }, this.Refresh = function() {
          w(u.GOM.albumIdx)
      }, this.Resize = function() {
          x()
      }, this.DisplayItem = function(e) {
          var t = p(e);
          "0" != t.imageID ? Q(t.imageID, t.albumID) : g("-1", t.albumID)
      }, this.ThumbnailToolbarOneCartUpdate = function(e) {
          R(e)
      };
      var l = function(e) {
          if (null == u.I[e]) return 0;
          for (var t = u.I[e].GetID(), n = u.I.length, i = 0, a = 0; a < n; a++) {
              u.I[a].isToDisplay(t) && i++
          }
          return i
      };
      this.Search = function(e) {
          u.GOM.albumSearch = e.toUpperCase();
          var t = u.GOM.albumIdx;
          return w(u.GOM.albumIdx), l(t)
      }, this.Search2 = function(e, t) {
          return u.GOM.albumSearch = null != e && null != e ? e.toUpperCase().trim() : "", u.GOM.albumSearchTags = null != t && null != t ? t.toUpperCase().trim() : "", l(u.GOM.albumIdx)
      }, this.Search2Execute = function() {
          var e = u.GOM.albumIdx;
          return w(u.GOM.albumIdx), l(e)
      }, this.Destroy = function() {
          null != u.GOM.hammertime && (u.GOM.hammertime.destroy(), u.GOM.hammertime = null), null != u.VOM.hammertime && (u.VOM.hammertime.destroy(), u.VOM.hammertime = null), e("#ngycs_" + u.baseEltID).remove(), u.GOM.items = [], NGY2Item.New(u, u.i18nTranslations.breadcrumbHome, "", "0", "-1", "album"), u.GOM.navigationBar.$newContent = null, u.$E.base.empty(), u.$E.base.removeData(), u.O.locationHash && jQuery(window).off("hashchange.nanogallery2." + u.baseEltID), jQuery(window).off("resize.nanogallery2." + u.baseEltID), jQuery(window).off("orientationChange.nanogallery2." + u.baseEltID), jQuery(window).off("scroll.nanogallery2." + u.baseEltID), null !== u.$E.scrollableParent && u.$E.scrollableParent.off("scroll.nanogallery2." + u.baseEltID), u.GOM.firstDisplay = !0
      }, this.CloseViewer = function() {
          return tt(null), !1
      }, this.MinimizeToolbar = function() {
          return We(), !1
      }, this.MaximizeToolbar = function() {
          return Ue(), !1
      }, this.PaginationPreviousPage = function() {
          return G(), !1
      }, this.PaginationNextPage = function() {
          return y(), !1
      }, this.PaginationGotoPage = function(e) {
          return e > 1 && e--, u.GOM.pagination.currentPage = e, u.GOM.ScrollToTop(), L(), E(!0), !1
      }, this.PaginationCountPages = function() {
          return 0 == u.GOM.items.length ? 0 : Math.ceil((u.GOM.items[u.GOM.items.length - 1].row + 1) / u.galleryMaxRows.Get())
      };
      var s = function(e, t, n) {
          var i;
          return function() {
              var a = this,
                  o = arguments;

              function r() {
                  n || e.apply(a, o), i = null
              }
              i ? clearTimeout(i) : n && e.apply(a, o), i = setTimeout(r, t || 100)
          }
      };
      window.ng_draf = function(e) {
          return requestAnimationFrame((function() {
              window.requestAnimationFrame(e)
          }))
      }, window.requestTimeout = function(e, t) {
          if (!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame)) return window.setTimeout(e, t);
          var n = (new Date).getTime(),
              i = new Object;
          return i.value = requestAnimFrame((function a() {
              (new Date).getTime() - n >= t ? e.call() : i.value = requestAnimFrame(a)
          })), i
      }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
          window.setTimeout(e, 1e3 / 60)
      }, window.clearRequestTimeout = function(e) {
          window.cancelAnimationFrame ? window.cancelAnimationFrame(e.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(e.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(e.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(e.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(e.value) : clearTimeout(e)
      };
      var u = this;

      function c(e) {
          this.$e = null, this.ngy2ItemIdx = e, this.mediaNumber = u.VOM.items.length + 1, this.posX = 0, this.posY = 0
      }
      u.I = [], u.Id = [], u.O = null, u.baseEltID = null, u.$E = {
          base: null,
          conTnParent: null,
          conLoadingB: null,
          conConsole: null,
          conNavigationBar: null,
          conTnBottom: null,
          scrollableParent: null
      }, u.shoppingCart = [], u.layout = {
          internal: !0,
          engine: "",
          support: {
              rows: !1
          },
          prerequisite: {
              imageSize: !1
          },
          SetEngine: function() {
              if (u.layout.internal) {
                  if ("auto" == u.tn.settings.width[u.GOM.curNavLevel][u.GOM.curWidth] || "" == u.tn.settings.width[u.GOM.curNavLevel][u.GOM.curWidth]) return u.layout.engine = "JUSTIFIED", u.layout.support.rows = !0, void(u.layout.prerequisite.imageSize = !0);
                  if ("auto" == u.tn.settings.height[u.GOM.curNavLevel][u.GOM.curWidth] || "" == u.tn.settings.height[u.GOM.curNavLevel][u.GOM.curWidth]) return u.layout.engine = "CASCADING", u.layout.support.rows = !1, void(u.layout.prerequisite.imageSize = !0);
                  if (null != u.tn.settings.getMosaic()) return u.layout.engine = "MOSAIC", u.layout.support.rows = !0, void(u.layout.prerequisite.imageSize = !1);
                  u.layout.engine = "GRID", u.layout.support.rows = !0, u.layout.prerequisite.imageSize = !1
              }
          }
      }, u.galleryResizeEventEnabled = !1, u.galleryMaxRows = {
          l1: 0,
          lN: 0,
          Get: function() {
              return u.galleryMaxRows[u.GOM.curNavLevel]
          }
      }, u.galleryMaxItems = {
          l1: 0,
          lN: 0,
          Get: function() {
              return u.galleryMaxItems[u.GOM.curNavLevel]
          }
      }, u.galleryFilterTags = {
          l1: 0,
          lN: 0,
          Get: function() {
              return u.galleryFilterTags[u.GOM.curNavLevel]
          }
      }, u.galleryFilterTagsMode = {
          l1: 0,
          lN: 0,
          Get: function() {
              return u.galleryFilterTagsMode[u.GOM.curNavLevel]
          }
      }, u.galleryDisplayMode = {
          l1: "FULLCONTENT",
          lN: "FULLCONTENT",
          Get: function() {
              return u.galleryDisplayMode[u.GOM.curNavLevel]
          }
      }, u.galleryLastRowFull = {
          l1: !1,
          lN: !1,
          Get: function() {
              return u.galleryLastRowFull[u.GOM.curNavLevel]
          }
      }, u.gallerySorting = {
          l1: "",
          lN: "",
          Get: function() {
              return u.gallerySorting[u.GOM.curNavLevel]
          }
      }, u.galleryDisplayTransition = {
          l1: "none",
          lN: "none",
          Get: function() {
              return u.galleryDisplayTransition[u.GOM.curNavLevel]
          }
      }, u.galleryDisplayTransitionDuration = {
          l1: 500,
          lN: 500,
          Get: function() {
              return u.galleryDisplayTransitionDuration[u.GOM.curNavLevel]
          }
      }, u.$currentTouchedThumbnail = null, u.tn = {
          opt: {
              l1: {
                  crop: !0,
                  stacks: 0,
                  stacksTranslateX: 0,
                  stacksTranslateY: 0,
                  stacksTranslateZ: 0,
                  stacksRotateX: 0,
                  stacksRotateY: 0,
                  stacksRotateZ: 0,
                  stacksScale: 0,
                  borderHorizontal: 0,
                  borderVertical: 0,
                  baseGridHeight: 0,
                  displayTransition: "FADEIN",
                  displayTransitionStartVal: 0,
                  displayTransitionEasing: "easeOutQuart",
                  displayTransitionDuration: 240,
                  displayInterval: 15
              },
              lN: {
                  crop: !0,
                  stacks: 0,
                  stacksTranslateX: 0,
                  stacksTranslateY: 0,
                  stacksTranslateZ: 0,
                  stacksRotateX: 0,
                  stacksRotateY: 0,
                  stacksRotateZ: 0,
                  stacksScale: 0,
                  borderHorizontal: 0,
                  borderVertical: 0,
                  baseGridHeight: 0,
                  displayTransition: "FADEIN",
                  displayTransitionStartVal: 0,
                  displayTransitionEasing: "easeOutQuart",
                  displayTransitionDuration: 240,
                  displayInterval: 15
              },
              Get: function(e) {
                  return u.tn.opt[u.GOM.curNavLevel][e]
              }
          },
          scale: 1,
          labelHeight: {
              l1: 0,
              lN: 0,
              get: function() {
                  return u.tn.labelHeight[u.GOM.curNavLevel]
              }
          },
          defaultSize: {
              width: {
                  l1: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  },
                  lN: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  }
              },
              height: {
                  l1: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  },
                  lN: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  }
              },
              getWidth: function() {
                  return u.tn.defaultSize.width[u.GOM.curNavLevel][u.GOM.curWidth]
              },
              getOuterWidth: function() {
                  u.tn.borderWidth = u.tn.opt.Get("borderHorizontal"), u.tn.borderHeight = u.tn.opt.Get("borderVertical");
                  var e = u.tn.defaultSize.width[u.GOM.curNavLevel][u.GOM.curWidth] + 2 * u.tn.opt.Get("borderHorizontal");
                  return "right" != u.O.thumbnailLabel.get("position") && "left" != u.O.thumbnailLabel.get("position") || (e += u.tn.defaultSize.width[u.GOM.curNavLevel][u.GOM.curWidth]), e
              },
              getHeight: function() {
                  return u.tn.defaultSize.height[u.GOM.curNavLevel][u.GOM.curWidth]
              },
              getOuterHeight: function() {
                  return u.tn.defaultSize.height[u.GOM.curNavLevel][u.GOM.curWidth] + 2 * u.tn.opt.Get("borderVertical")
              }
          },
          settings: {
              width: {
                  l1: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0,
                      xsc: "u",
                      smc: "u",
                      mec: "u",
                      lac: "u",
                      xlc: "u"
                  },
                  lN: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0,
                      xsc: "u",
                      smc: "u",
                      mec: "u",
                      lac: "u",
                      xlc: "u"
                  }
              },
              height: {
                  l1: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0,
                      xsc: "u",
                      smc: "u",
                      mec: "u",
                      lac: "u",
                      xlc: "u"
                  },
                  lN: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0,
                      xsc: "u",
                      smc: "u",
                      mec: "u",
                      lac: "u",
                      xlc: "u"
                  }
              },
              getH: function(e, t) {
                  var n = null == e ? u.GOM.curNavLevel : e,
                      i = null == t ? u.GOM.curWidth : t;
                  return "MOSAIC" == u.layout.engine ? this.height[n][i] * this.mosaic[n + "Factor"].h[i] : this.height[n][i]
              },
              getW: function(e, t) {
                  var n = null == e ? u.GOM.curNavLevel : e,
                      i = null == t ? u.GOM.curWidth : t;
                  return "MOSAIC" == u.layout.engine ? this.width[n][i] * this.mosaic[n + "Factor"].w[i] : this.width[n][i]
              },
              mosaic: {
                  l1: {
                      xs: null,
                      sm: null,
                      me: null,
                      la: null,
                      xl: null
                  },
                  lN: {
                      xs: null,
                      sm: null,
                      me: null,
                      la: null,
                      xl: null
                  },
                  l1Factor: {
                      h: {
                          xs: 1,
                          sm: 1,
                          me: 1,
                          la: 1,
                          xl: 1
                      },
                      w: {
                          xs: 1,
                          sm: 1,
                          me: 1,
                          la: 1,
                          xl: 1
                      }
                  },
                  lNFactor: {
                      h: {
                          xs: 1,
                          sm: 1,
                          me: 1,
                          la: 1,
                          xl: 1
                      },
                      w: {
                          xs: 1,
                          sm: 1,
                          me: 1,
                          la: 1,
                          xl: 1
                      }
                  }
              },
              getMosaic: function() {
                  return this.mosaic[u.GOM.curNavLevel][u.GOM.curWidth]
              },
              mosaicCalcFactor: function(e, t) {
                  for (var n = 1, i = 1, a = 0; a < u.tn.settings.mosaic[e][t].length; a++) n = Math.max(n, this.mosaic[e][t][a].w), i = Math.max(i, this.mosaic[e][t][a].h);
                  this.mosaic[e + "Factor"].h[t] = i, this.mosaic[e + "Factor"].w[t] = n
              },
              gutterHeight: {
                  l1: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  },
                  lN: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  }
              },
              gutterWidth: {
                  l1: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  },
                  lN: {
                      xs: 0,
                      sm: 0,
                      me: 0,
                      la: 0,
                      xl: 0
                  }
              },
              GetResponsive: function(e) {
                  return this[e][u.GOM.curNavLevel][u.GOM.curWidth]
              }
          },
          hoverEffects: {
              std: [],
              level1: [],
              get: function() {
                  return "l1" == u.GOM.curNavLevel && 0 !== this.level1.length ? this.level1 : this.std
              }
          },
          buildInit: {
              std: [],
              level1: [],
              get: function() {
                  return "l1" == u.GOM.curNavLevel && 0 !== this.level1.length ? this.level1 : this.std
              }
          },
          toolbar: {
              album: {
                  topLeft: "",
                  topRight: "",
                  bottomLeft: "",
                  bottomRight: ""
              },
              image: {
                  topLeft: "",
                  topRight: "",
                  bottomLeft: "",
                  bottomRight: ""
              },
              albumUp: {
                  topLeft: "",
                  topRight: "",
                  bottomLeft: "",
                  bottomRight: ""
              },
              get: function(e) {
                  return this[e.kind]
              }
          },
          style: {
              l1: {
                  label: "",
                  title: "",
                  desc: ""
              },
              lN: {
                  label: "",
                  title: "",
                  desc: ""
              },
              getTitle: function() {
                  return 'style="' + this[u.GOM.curNavLevel].title + '"'
              },
              getDesc: function() {
                  return 'style="' + this[u.GOM.curNavLevel].desc + '"'
              },
              getLabel: function() {
                  var e = 'style="' + this[u.GOM.curNavLevel].label;
                  return e += u.O.RTL ? '"direction:RTL;"' : "", e += '"'
              }
          }
      }, u.scrollTimeOut = 0, u.i18nTranslations = {
          paginationPrevious: "Previous",
          paginationNext: "Next",
          breadcrumbHome: "List of Albums",
          thumbnailImageTitle: "",
          thumbnailAlbumTitle: "",
          thumbnailImageDescription: "",
          thumbnailAlbumDescription: ""
      }, u.emptyGif = "data:image/gif;base64,R0lGODlhEAAQAIAAAP///////yH5BAEKAAEALAAAAAAQABAAAAIOjI+py+0Po5y02ouzPgUAOw==", u.CSStransformName = dt(["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform"]), u.CSStransformStyle = dt(["transformStyle", "msTransformStyle", "MozTransformStyle", "WebkitTransformStyle", "OTransformStyle"]), u.CSSperspective = dt(["perspective", "msPerspective", "MozPerspective", "WebkitPerspective", "OPerspective"]), u.CSSbackfaceVisibilityName = dt(["backfaceVisibility", "msBackfaceVisibility", "MozBackfaceVisibility", "WebkitBackfaceVisibility", "OBackfaceVisibility"]), u.CSStransitionName = dt(["transition", "msTransition", "MozTransition", "WebkitTransition", "OTransition"]), u.CSSanimationName = dt(["animation", "msAnimation", "MozAnimation", "WebkitAnimation", "OAnimation"]), u.GalleryResizeThrottled = function(e, t, n) {
          var i, a, o, r = null,
              l = 0;
          n || (n = {});
          var s = function() {
              l = !1 === n.leading ? 0 : (new Date).getTime(), r = null, o = e.apply(i, a), r || (i = a = null)
          };
          return function() {
              var u = (new Date).getTime();
              l || !1 !== n.leading || (l = u);
              var c = t - (u - l);
              return i = this, a = arguments, c <= 0 || c > t ? (r && (clearTimeout(r), r = null), l = u, o = e.apply(i, a), r || (i = a = null)) : r || !1 === n.trailing || (r = setTimeout(s, c)), o
          }
      }(x, 15, {
          leading: !1
      }), u.blockList = null, u.allowList = null, u.albumList = [], u.locationHashLastUsed = "", u.custGlobals = {}, u.touchAutoOpenDelayTimerID = 0, u.i18nLang = "", u.timeLastTouchStart = 0, u.custGlobals = {}, u.markupOrApiProcessed = !1, u.GOM = {
          albumIdx: -1,
          clipArea: {
              top: 0,
              height: 0
          },
          displayArea: {
              width: 0,
              height: 0
          },
          displayAreaLast: {
              width: 0,
              height: 0
          },
          displayedMoreSteps: 0,
          items: [],
          $imgPreloader: [],
          thumbnails2Display: [],
          itemsDisplayed: 0,
          firstDisplay: !0,
          firstDisplayTime: 0,
          navigationBar: {
              displayed: !1,
              $newContent: ""
          },
          cache: {
              viewport: null,
              containerOffset: null,
              areaWidth: 100
          },
          nbSelected: 0,
          pagination: {
              currentPage: 0
          },
          panThreshold: 60,
          panYOnly: !1,
          lastFullRow: -1,
          lastDisplayedIdx: -1,
          displayInterval: {
              from: 0,
              len: 0
          },
          hammertime: null,
          curNavLevel: "l1",
          curWidth: "me",
          albumSearch: "",
          albumSearchTags: "",
          lastZIndex: 0,
          lastRandomValue: 0,
          slider: {
              hostIdx: -1,
              hostItem: null,
              currentIdx: 0,
              nextIdx: 0,
              timerID: 0,
              tween: null
          },
          NGY2Item: function(e) {
              if (null == u.GOM.items[e] || null == u.GOM.items[e]) return null;
              var t = u.GOM.items[e].thumbnailIdx;
              return u.I[t]
          },
          GTn: function(e, t, n) {
              this.thumbnailIdx = e, this.width = 0, this.height = 0, this.top = 0, this.left = 0, this.row = 0, this.imageWidth = t, this.imageHeight = n, this.resizedContentWidth = 0, this.resizedContentHeight = 0, this.displayed = !1, this.neverDisplayed = !0, this.inDisplayArea = !1
          },
          ScrollToTop: function() {
              var e, t, n, i;
              if (!u.GOM.firstDisplay && (null !== u.$E.scrollableParent || (e = u.$E.base, t = 20, n = a(), (i = e.offset()).top >= n.t && i.top <= n.t + n.h - t) || u.$E.base.get(0).scrollIntoView(), null !== u.$E.scrollableParent)) {
                  var o = u.$E.scrollableParent.scrollTop(),
                      r = Math.abs(u.$E.scrollableParent.offset().top - u.$E.base.offset().top - o);
                  o > r && window.ng_draf((function() {
                      u.$E.scrollableParent.scrollTop(r)
                  }))
              }
          }
      }, u.VOM = {
          viewerDisplayed: !1,
          viewerIsFullscreen: !1,
          infoDisplayed: !1,
          toolbarsDisplayed: !0,
          toolsHide: null,
          zoom: {
              posX: 0,
              posY: 0,
              userFactor: 1,
              isZooming: !1
          },
          padding: {
              H: 0,
              V: 0
          },
          window: {
              lastWidth: 0,
              lastHeight: 0
          },
          $viewer: null,
          $toolbar: null,
          $toolbarTL: null,
          $toolbarTR: null,
          toolbarMode: "std",
          playSlideshow: !1,
          playSlideshowTimerID: 0,
          slideshowDelay: 3e3,
          albumID: -1,
          viewerMediaIsChanged: !1,
          items: [],
          panMode: "off",
          $baseCont: null,
          $content: null,
          content: {
              previous: {
                  vIdx: -1,
                  $media: null,
                  NGY2Item: function() {
                      return u.I[u.VOM.items[u.VOM.content.previous.vIdx].ngy2ItemIdx]
                  }
              },
              current: {
                  vIdx: -1,
                  $media: null,
                  NGY2Item: function() {
                      return u.I[u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx]
                  }
              },
              next: {
                  vIdx: -1,
                  $media: null,
                  NGY2Item: function() {
                      return u.I[u.VOM.items[u.VOM.content.next.vIdx].ngy2ItemIdx]
                  }
              }
          },
          IdxNext: function() {
              var e = 0;
              return u.VOM.content.current.vIdx < u.VOM.items.length - 1 && (e = u.VOM.content.current.vIdx + 1), e
          },
          IdxPrevious: function() {
              var e = u.VOM.content.current.vIdx - 1;
              return 0 == u.VOM.content.current.vIdx && (e = u.VOM.items.length - 1), e
          },
          gallery: {
              $elt: null,
              $tmbCont: null,
              gwidth: 0,
              vwidth: 0,
              oneTmbWidth: 0,
              firstDisplay: !0,
              posX: 0,
              SetThumbnailActive() {
                  "none" != u.O.viewerGallery && (this.$tmbCont.children().removeClass("activeVThumbnail"), this.$tmbCont.children().eq(u.VOM.content.current.vIdx).addClass("activeVThumbnail"), this.firstDisplay = !1)
              },
              Resize: function() {
                  if ("none" != u.O.viewerGallery)
                      if (this.firstDisplay)(new NGTweenable).tween({
                          from: {
                              opacity: 0
                          },
                          to: {
                              opacity: 1
                          },
                          easing: "easeInOutSine",
                          duration: 1e3,
                          step: function(e) {},
                          finish: function(e) {}
                      });
                      else {
                          var e = u.VOM.$viewer.width(),
                              t = Math.trunc(e / this.oneTmbWidth);
                          if (this.vwidth = t * this.oneTmbWidth, this.$elt.css({
                                  width: this.vwidth,
                                  left: (e - this.vwidth) / 2
                              }), u.VOM.items.length >= t) {
                              var n = this.oneTmbWidth * u.VOM.content.current.vIdx;
                              n + this.posX < this.vwidth ? n + this.posX < 0 && (this.posX = -n) : n + this.posX >= this.vwidth && (this.posX = this.vwidth - (n + this.oneTmbWidth))
                          }
                          this.PanGallery(0)
                      }
              },
              PanGallery: function(e) {
                  this.gwidth < u.VOM.$viewer.width() && (this.posX = (u.VOM.$viewer.width() - this.gwidth) / 2, e = 0), this.posX > this.vwidth - this.oneTmbWidth && (this.posX = this.vwidth - this.oneTmbWidth), this.posX + this.gwidth < this.oneTmbWidth && (this.posX = -this.gwidth + this.oneTmbWidth), this.$tmbCont.css(u.CSStransformName, "translateX(" + (this.posX + e) + "px)")
              },
              PanGalleryEnd: function(e) {
                  var t = 100 * e;
                  (new NGTweenable).tween({
                      from: {
                          pan: u.VOM.gallery.posX
                      },
                      to: {
                          pan: u.VOM.gallery.posX + t
                      },
                      easing: "easeOutQuad",
                      duration: 500,
                      step: function(e) {
                          u.VOM.gallery.posX = e.pan, u.VOM.gallery.PanGallery(0)
                      }
                  })
              }
          },
          hammertime: null,
          swipePosX: 0,
          panPosX: 0,
          panPosY: 0,
          panThreshold: 60,
          panXOnly: !1,
          singletapTime: 0,
          viewerTheme: "",
          timeImgChanged: 0,
          ImageLoader: {
              maxChecks: 1e3,
              list: [],
              intervalHandle: null,
              loadImage: function(e, t) {
                  if ("img" == t.mediaKind) {
                      var n = new Image;
                      if (n.src = t.responsiveURL(), n.width && n.height) e(n.width, n.height, t, 0);
                      else {
                          var i, a = {
                              image: n,
                              url: t.responsiveURL(),
                              ngitem: t,
                              callback: e,
                              checks: 1
                          };
                          for (i = 0; i < this.list.length && null != this.list[i]; i++);
                          this.list[i] = a, this.intervalHandle || (this.intervalHandle = setInterval(this.interval, 50))
                      }
                  }
              },
              interval: function() {
                  for (var e, t = 0, n = u.VOM.ImageLoader.list, i = 0; i < n.length; i++) null != (e = n[i]) && (e.image.width && e.image.height ? (u.VOM.ImageLoader.list[i] = null, e.callback(e.image.width, e.image.height, e.ngitem, e.checks)) : e.checks > u.VOM.ImageLoader.maxChecks ? (u.VOM.ImageLoader.list[i] = null, e.callback(0, 0, e.ngitem, e.checks)) : (t++, e.checks++));
                  0 == t && (u.VOM.ImageLoader.list = [], clearInterval(u.VOM.ImageLoader.intervalHandle), delete u.VOM.ImageLoader.intervalHandle)
              }
          }
      }, u.popup = {
          isDisplayed: !1,
          $elt: null,
          close: function() {
              null != this.$elt && (new NGTweenable).tween({
                  from: {
                      opacity: 1
                  },
                  to: {
                      opacity: 0
                  },
                  attachment: {
                      t: this
                  },
                  easing: "easeInOutSine",
                  duration: 100,
                  step: function(e, t) {
                      null != t.t.$elt && t.t.$elt.css("opacity", e.opacity)
                  },
                  finish: function(e, t) {
                      null != t.t.$elt && (t.t.$elt.remove(), t.t.$elt = null), t.t.isDisplayed = !1
                  }
              })
          }
      }, u.galleryTheme_dark = {
          navigationBar: {
              background: "none",
              borderTop: "",
              borderBottom: "",
              borderRight: "",
              borderLeft: ""
          },
          navigationBreadcrumb: {
              background: "#111",
              color: "#fff",
              colorHover: "#ccc",
              borderRadius: "4px"
          },
          navigationFilter: {
              color: "#ddd",
              background: "#111",
              colorSelected: "#fff",
              backgroundSelected: "#111",
              borderRadius: "4px"
          },
          navigationPagination: {
              background: "#111",
              color: "#fff",
              colorHover: "#ccc",
              borderRadius: "4px"
          },
          thumbnail: {
              background: "#444",
              backgroundImage: "linear-gradient(315deg, #111 0%, #445 90%)",
              borderColor: "#000",
              borderRadius: "0px",
              labelOpacity: 1,
              labelBackground: "rgba(34, 34, 34, 0)",
              titleColor: "#fff",
              titleBgColor: "transparent",
              titleShadow: "",
              descriptionColor: "#ccc",
              descriptionBgColor: "transparent",
              descriptionShadow: "",
              stackBackground: "#aaa"
          },
          thumbnailIcon: {
              padding: "5px",
              color: "#fff",
              shadow: ""
          },
          pagination: {
              background: "#181818",
              backgroundSelected: "#666",
              color: "#fff",
              borderRadius: "2px",
              shapeBorder: "3px solid #666",
              shapeColor: "#444",
              shapeSelectedColor: "#aaa"
          }
      }, u.galleryTheme_light = {
          navigationBar: {
              background: "none",
              borderTop: "",
              borderBottom: "",
              borderRight: "",
              borderLeft: ""
          },
          navigationBreadcrumb: {
              background: "#eee",
              color: "#000",
              colorHover: "#333",
              borderRadius: "4px"
          },
          navigationFilter: {
              background: "#eee",
              color: "#222",
              colorSelected: "#000",
              backgroundSelected: "#eee",
              borderRadius: "4px"
          },
          navigationPagination: {
              background: "#eee",
              color: "#000",
              colorHover: "#333",
              borderRadius: "4px"
          },
          thumbnail: {
              background: "#444",
              backgroundImage: "linear-gradient(315deg, #111 0%, #445 90%)",
              borderColor: "#000",
              labelOpacity: 1,
              labelBackground: "rgba(34, 34, 34, 0)",
              titleColor: "#fff",
              titleBgColor: "transparent",
              titleShadow: "",
              descriptionColor: "#ccc",
              descriptionBgColor: "transparent",
              descriptionShadow: "",
              stackBackground: "#888"
          },
          thumbnailIcon: {
              padding: "5px",
              color: "#fff"
          },
          pagination: {
              background: "#eee",
              backgroundSelected: "#aaa",
              color: "#000",
              borderRadius: "2px",
              shapeBorder: "3px solid #666",
              shapeColor: "#444",
              shapeSelectedColor: "#aaa"
          }
      }, u.viewerTheme_dark = {
          background: "#000",
          barBackground: "rgba(4, 4, 4, 0.2)",
          barBorder: "0px solid #111",
          barColor: "#fff",
          barDescriptionColor: "#ccc"
      }, u.viewerTheme_light = {
          background: "#f8f8f8",
          barBackground: "rgba(4, 4, 4, 0.7)",
          barBorder: "0px solid #111",
          barColor: "#fff",
          barDescriptionColor: "#ccc"
      };
      var h = NGY2Tools.NanoAlert,
          d = NGY2Tools.NanoConsoleLog;

      function m() {
          u.VOM.items = [], u.VOM.albumID = "0", u.GOM.curNavLevel = "l1";
          var e = 0,
              t = u.$E.base[0].attributes,
              n = "";
          t.hasOwnProperty("src") && (n = t.src.nodeValue), "" == n && t.hasOwnProperty("data-ngthumb") && (n = t["data-ngthumb"].nodeValue);
          for (var i = void 0, a = 0; a < u.I.length; a++)
              if ("image" == u.I[a].kind) {
                  var o = new c(a);
                  u.VOM.items.push(o), u.I[a].thumbImg().src == n && (i = e), e++
              }
          u.VOM.items.length > 0 ? De(i) : d(u, "No content for Lightbox standalone.")
      }

      function p(e) {
          var t = {
                  albumID: "0",
                  imageID: "0"
              },
              n = e.split("/");
          return n.length > 0 && (t.albumID = n[0], n.length > 1 && (t.imageID = n[1])), t
      }

      function g(e, t) {
          u.VOM.viewerDisplayed && tt(null);
          var n = NGY2Item.GetIdx(u, t);
          u.GOM.curNavLevel = "lN", 0 == n && (u.GOM.curNavLevel = "l1"), u.layout.SetEngine(), u.galleryResizeEventEnabled = !1, -1 == n && (NGY2Item.New(u, "", "", t, "0", "album"), n = u.I.length - 1), u.I[n].contentIsLoaded ? (de(), u.GOM.pagination.currentPage = 0, rt(t, ""), w(n)) : q(t, g, e, t)
      }

      function f() {
          switch (u.galleryDisplayMode.Get()) {
              case "PAGINATION":
                  u.layout.support.rows && u.galleryMaxRows.Get() > 0 && function() {
                      if (u.$E.conTnBottom.css("opacity", 0), u.$E.conTnBottom.children().remove(), 0 == u.GOM.items.length) return;
                      var e = Math.ceil((u.GOM.items[u.GOM.items.length - 1].row + 1) / u.galleryMaxRows.Get());
                      if (1 == e) return;
                      u.GOM.pagination.currentPage > e - 1 && (u.GOM.pagination.currentPage = e - 1);
                      if (M(), 0 == u.GOM.displayInterval.len) return;
                      if ("NUMBERS" == u.O.galleryPaginationMode && u.GOM.pagination.currentPage > 0) {
                          jQuery('<div class="nGY2PaginationPrev">' + u.O.icons.paginationPrevious + "</div>").appendTo(u.$E.conTnBottom).click((function(e) {
                              G()
                          }))
                      }
                      var t = 0,
                          n = e;
                      if ("NUMBERS" != u.O.galleryPaginationMode) t = 0;
                      else {
                          var i = u.O.paginationVisiblePages;
                          if (i >= e) t = 0;
                          else {
                              var a = 0;
                              a = i % 2 == 1 ? (i + 1) / 2 : i / 2, u.GOM.pagination.currentPage < a ? (t = 0, (n = i - 1) > e && (n = e - 1)) : (t = u.GOM.pagination.currentPage - a, (n = t + i) > e && (n = e - 1)), n - t < i && (t = n - i) < 0 && (t = 0)
                          }
                      }
                      for (var o = t; o < n; o++) {
                          var r = "",
                              l = "";
                          switch (u.O.galleryPaginationMode) {
                              case "NUMBERS":
                                  r = "nGY2paginationItem", l = o + 1;
                                  break;
                              case "DOTS":
                                  r = "nGY2paginationDot";
                                  break;
                              case "RECTANGLES":
                                  r = "nGY2paginationRectangle"
                          }
                          o == u.GOM.pagination.currentPage && (r += "CurrentPage");
                          var s = jQuery('<div class="' + r + '">' + l + "</div>").appendTo(u.$E.conTnBottom);
                          s.data("pageNumber", o), s.click((function(e) {
                              u.GOM.pagination.currentPage = jQuery(this).data("pageNumber"), at("pageChanged"), u.GOM.ScrollToTop(), L(), E(!0)
                          }))
                      }
                      if ("NUMBERS" == u.O.galleryPaginationMode && u.GOM.pagination.currentPage + 1 < e) {
                          jQuery('<div class="nGY2PaginationNext">' + u.O.icons.paginationNext + "</div>").appendTo(u.$E.conTnBottom).click((function(e) {
                              y()
                          }))
                      }
                      u.$E.conTnBottom.css("opacity", 1)
                  }();
                  break;
              case "MOREBUTTON":
                  u.$E.conTnBottom.off("click");
                  var e = u.GOM.items.length - u.GOM.itemsDisplayed;
                  0 == e ? u.$E.conTnBottom.empty() : (u.$E.conTnBottom.html('<div class="nGY2GalleryMoreButton"><div class="nGY2GalleryMoreButtonAnnotation">+' + e + " " + u.O.icons.galleryMoreButton + "</div></div>"), u.$E.conTnBottom.on("click", (function(e) {
                      u.GOM.displayedMoreSteps++, x()
                  })))
          }
      }

      function b(e) {
          var t = "";
          u.O.breadcrumbHideIcons || (t = u.O.icons.breadcrumbAlbum, 0 == e && (t = u.O.icons.breadcrumbHome));
          var n = jQuery('<div class="oneItem">' + t + u.I[e].title + "</div>").appendTo(u.GOM.navigationBar.$newContent.find(".nGY2Breadcrumb"));
          u.O.breadcrumbOnlyCurrentLevel ? 0 == e ? jQuery(n).data("albumID", "0") : jQuery(n).data("albumID", u.I[e].albumID) : jQuery(n).data("albumID", u.I[e].GetID()), n.click((function() {
              g("-1", jQuery(this).data("albumID"))
          }))
      }

      function v(e) {
          var t = jQuery('<div class="oneItem">' + (u.O.RTL ? u.O.icons.breadcrumbSeparatorRtl : u.O.icons.breadcrumbSeparator) + "</div>").appendTo(u.GOM.navigationBar.$newContent.find(".nGY2Breadcrumb"));
          jQuery(t).data("albumIdx", e), t.click((function() {
              var e = jQuery(this).data("albumIdx");
              g("-1", u.I[e].GetID())
          }))
      }

      function O(e) {
          if (u.GOM.navigationBar.$newContent = jQuery('<div class="nGY2Navigationbar"></div>'), 1 == u.O.displayBreadcrumb && !u.O.thumbnailAlbumDisplayImage) {
              var t = 0,
                  n = [];
              if (0 != e) {
                  var i = u.I.length;
                  n.push(e);
                  var a = e;
                  for (t++; 0 != u.I[a].albumID && -1 != u.I[a].albumID;)
                      for (var o = 1; o < i; o++)
                          if (u.I[o].GetID() == u.I[a].albumID) {
                              a = o, n.push(a), t++;
                              break
                          }
              }
              u.O.breadcrumbAutoHideTopLevel && 0 == t || function(e) {
                  if (jQuery('<div class="nGY2NavigationbarItem nGY2Breadcrumb"></div>').appendTo(u.GOM.navigationBar.$newContent), u.O.breadcrumbOnlyCurrentLevel) 0 == e.length ? b(0) : (1 == e.length ? v(0) : v(e[0]), b(e[0]));
                  else if (b(0), e.length > 0) {
                      v(0);
                      for (var t = e.length - 1; t >= 0; t--) b(e[t]), t > 0 && v(e[t - 1])
                  }
              }(n)
          }
          if (0 != u.galleryFilterTags.Get()) {
              var r = u.I[e].albumTagList.length;
              if (r > 0) {
                  for (o = 0; o < r; o++) {
                      var l = u.I[e].albumTagList[o],
                          s = u.O.icons.navigationFilterUnselected,
                          c = "Unselected";
                      jQuery.inArray(l, u.I[e].albumTagListSel) >= 0 && (c = "Selected", s = u.O.icons.navigationFilterSelected), jQuery('<div class="nGY2NavigationbarItem nGY2NavFilter' + c + '">' + s + " " + l + "</div>").appendTo(u.GOM.navigationBar.$newContent).click((function() {
                          var t = jQuery(this),
                              n = t.text().replace(/^\s*|\s*$/, "");
                          if ("single" == u.galleryFilterTagsMode.Get()) u.I[e].albumTagListSel = [], u.I[e].albumTagListSel.push(n);
                          else {
                              if (t.hasClass("nGY2NavFilterUnselected")) u.I[e].albumTagListSel.push(n);
                              else {
                                  var i = jQuery.inArray(n, u.I[e].albumTagListSel); - 1 != i && u.I[e].albumTagListSel.splice(i, 1)
                              }
                              t.toggleClass("nGY2NavFilters-oneTagUnselected nGY2NavFilters-oneTagSelected")
                          }
                          g("-1", u.I[e].GetID())
                      }))
                  }
                  jQuery('<div class="nGY2NavigationbarItem nGY2NavFilterSelectAll">' + u.O.icons.navigationFilterSelectedAll + "</div>").appendTo(u.GOM.navigationBar.$newContent).click((function() {
                      u.I[e].albumTagListSel = [], g("-1", u.I[e].GetID())
                  }))
              }
          }
          "PAGINATION" == u.galleryDisplayMode.Get() && u.O.galleryPaginationTopButtons && (u.layout.support.rows && u.galleryMaxRows.Get() > 0 && (jQuery('<div class="nGY2NavigationbarItem nGY2NavPagination">' + u.O.icons.navigationPaginationPrevious + "</div>").appendTo(u.GOM.navigationBar.$newContent).click((function() {
              G()
          })), jQuery('<div class="nGY2NavigationbarItem nGY2NavPagination">' + u.O.icons.navigationPaginationNext + "</div>").appendTo(u.GOM.navigationBar.$newContent).click((function() {
              y()
          }))))
      }

      function y() {
          var e = 0;
          j(), u.galleryMaxRows.Get() > 0 && (e = (u.GOM.items[u.GOM.items.length - 1].row + 1) / u.galleryMaxRows.Get());
          var t = Math.ceil(e),
              n = u.GOM.pagination.currentPage;
          n < t - 1 ? n++ : n = 0, u.GOM.pagination.currentPage = n, at("pageChanged"), u.GOM.ScrollToTop(), L(), E(!0)
      }

      function G() {
          var e = 0;
          j(), u.galleryMaxRows.Get() > 0 && (e = (u.GOM.items[u.GOM.items.length - 1].row + 1) / u.galleryMaxRows.Get());
          var t = Math.ceil(e),
              n = u.GOM.pagination.currentPage;
          n > 0 ? n-- : n = t - 1, u.GOM.pagination.currentPage = n, at("pageChanged"), u.GOM.ScrollToTop(), L(), E(!0)
      }

      function M() {
          switch (u.GOM.displayInterval.from = 0, u.GOM.displayInterval.len = u.I.length, u.galleryDisplayMode.Get()) {
              case "PAGINATION":
                  if (u.layout.support.rows) {
                      let a = u.GOM.items.length;
                      var e = u.GOM.pagination.currentPage * u.galleryMaxRows.Get(),
                          t = e + u.galleryMaxRows.Get(),
                          n = -1;
                      u.GOM.displayInterval.len = 0;
                      for (var i = 0; i < a; i++) {
                          let a = u.GOM.items[i];
                          a.row >= e && a.row < t && (-1 == n && (u.GOM.displayInterval.from = i, n = i), u.GOM.displayInterval.len++)
                      }
                  }
                  break;
              case "MOREBUTTON":
                  if (u.layout.support.rows) {
                      let e = u.GOM.items.length,
                          t = u.O.galleryDisplayMoreStep * (u.GOM.displayedMoreSteps + 1);
                      u.GOM.displayInterval.len = 0;
                      for (i = 0; i < e; i++) {
                          u.GOM.items[i].row < t && u.GOM.displayInterval.len++
                      }
                  }
                  break;
              case "ROWS":
                  if (u.layout.support.rows) {
                      let e = u.GOM.items.length,
                          t = u.galleryMaxRows.Get();
                      u.galleryLastRowFull.Get() && -1 != u.GOM.lastFullRow && t > u.GOM.lastFullRow + 1 && (t = u.GOM.lastFullRow + 1), u.GOM.displayInterval.len = 0;
                      for (i = 0; i < e; i++) {
                          u.GOM.items[i].row < t && u.GOM.displayInterval.len++
                      }
                  }
                  break;
              default:
              case "FULLCONTENT":
                  if (u.layout.support.rows && u.galleryLastRowFull.Get() && -1 != u.GOM.lastFullRow) {
                      let e = u.GOM.items.length,
                          t = u.GOM.lastFullRow + 1;
                      u.GOM.displayInterval.len = 0;
                      for (i = 0; i < e; i++) {
                          u.GOM.items[i].row < t && u.GOM.displayInterval.len++
                      }
                  }
          }
      }

      function w(e) {
          at("galleryRenderStart"), clearTimeout(u.GOM.slider.timerID), u.GOM.slider.hostIdx = -1;
          var t = u.O.fnGalleryRenderStart;
          if (null !== t && ("function" == typeof t ? t(u.I[u.GOM.albumIdx]) : window[t](u.I[u.GOM.albumIdx])), u.layout.SetEngine(), u.galleryResizeEventEnabled = !1, u.GOM.albumIdx = -1, u.GOM.lastDisplayedIdx = -1, void 0 !== u.$E.conTnBottom && u.$E.conTnBottom.empty(), O(e), u.GOM.firstDisplay) {
              u.GOM.firstDisplay = !1;
              var n = Date.now() - u.GOM.firstDisplayTime;
              n < u.O.galleryRenderDelay ? requestTimeout((function() {
                  I(e)
              }), u.O.galleryRenderDelay - n) : I(e), u.O.galleryRenderDelay = 0
          } else {
              var i = !1;
              0 == u.GOM.navigationBar.$newContent.children().length && (i = !0), (new NGTweenable).tween({
                  from: {
                      opacity: 1
                  },
                  to: {
                      opacity: 0
                  },
                  duration: 300,
                  easing: "easeInQuart",
                  attachment: {
                      h: i
                  },
                  step: function(e, t) {
                      u.$E.conTnParent.css({
                          opacity: e.opacity
                      }), t.h && u.$E.conNavigationBar.css({
                          opacity: e.opacity
                      })
                  },
                  finish: function(t, n) {
                      n.h && u.$E.conNavigationBar.css({
                          opacity: 0,
                          display: "none"
                      }), u.GOM.ScrollToTop(), I(e)
                  }
              })
          }
      }

      function I(e) {
          var t = u.$E.conNavigationBar.children().length;
          (u.$E.conNavigationBar.empty(), u.GOM.navigationBar.$newContent.children().clone(!0, !0).appendTo(u.$E.conNavigationBar), u.$E.conNavigationBar.children().length > 0 && 0 == t) ? (u.$E.conNavigationBar.css({
              opacity: 0,
              display: "block"
          }), (new NGTweenable).tween({
              from: {
                  opacity: 0
              },
              to: {
                  opacity: 1
              },
              duration: 200,
              easing: "easeInQuart",
              step: function(e) {
                  u.$E.conNavigationBar.css(e)
              },
              finish: function(t) {
                  u.$E.conNavigationBar.css({
                      opacity: 1
                  }), requestTimeout((function() {
                      T(e)
                  }), 20)
              }
          })) : requestTimeout((function() {
              T(e)
          }), 20)
      }

      function T(e) {
          u.GOM.lastZIndex = parseInt(u.$E.base.css("z-index")), isNaN(u.GOM.lastZIndex) && (u.GOM.lastZIndex = 0), u.$E.conTnParent.css({
              opacity: 0
          }), u.$E.conTn.off().empty();
          for (var t = u.I.length, n = 0; n < t; n++) {
              var i = u.I[n];
              i.hovered = !1, i.$elt = null, i.$Elts = [], i.eltTransform = [], i.eltFilter = [], i.width = 0, i.height = 0, i.left = 0, i.top = 0, i.resizedContentWidth = 0, i.resizedContentHeight = 0, i.thumbnailImgRevealed = !1
          }
          null == u.CSStransformName ? u.$E.conTn.css("left", "0px") : u.$E.conTn.css(u.CSStransformName, "none"), requestTimeout((function() {
              ! function(e) {
                  var t = new Date;
                  u.$E.conTnParent.css("opacity", 1), u.GOM.items = [], u.GOM.displayedMoreSteps = 0, "onBottom" == u.O.thumbnailLabel.get("position") ? u.tn.labelHeight[u.GOM.curNavLevel] = function() {
                      var e = [],
                          t = 0;
                      if (0 == u.O.thumbnailLabel.get("display")) return 0;
                      e[t++] = '<div class="nGY2GThumbnail ' + u.O.theme + '" style="display:block;visibility:hidden;position:absolute;top:-9999px;left:-9999px;" ><div class="nGY2GThumbnailSub">', 1 == u.O.thumbnailLabel.get("display") && (e[t++] = '  <div class="nGY2GThumbnailLabel" ' + u.tn.style.getLabel() + ">", e[t++] = '    <div class="nGY2GThumbnailAlbumTitle" ' + u.tn.style.getTitle() + ">aAzZjJ</div>", 1 == u.O.thumbnailLabel.get("displayDescription") && (e[t++] = '    <div class="nGY2GThumbnailDescription" ' + u.tn.style.getDesc() + ">aAzZjJ</div>"), e[t++] = "  </div>");
                      e[t++] = "</div></div>";
                      var n = jQuery(e.join("")).appendTo(u.$E.conTn),
                          i = n.find(".nGY2GThumbnailLabel").outerHeight(!0);
                      return n.remove(), i
                  }() : u.tn.labelHeight[u.GOM.curNavLevel] = 0;
                  u.GOM.albumIdx = e, at("galleryRenderEnd");
                  var n = u.O.fnGalleryRenderEnd;
                  null !== n && ("function" == typeof n ? n(u.I[u.GOM.albumIdx]) : window[n](u.I[u.GOM.albumIdx]));
                  ! function() {
                      for (var e = "", t = u.I[u.GOM.albumIdx].GetID(), n = u.I.length, i = 0, a = 0; a < n; a++) {
                          var o = u.I[a];
                          if (o.isToDisplay(t)) {
                              var r = o.thumbImg().width,
                                  l = o.thumbImg().height;
                              !u.layout.prerequisite.imageSize || 0 != r && 0 != l || (e += '<img src="' + o.thumbImg().src + '" data-idx="' + i + '" data-albumidx="' + u.GOM.albumIdx + '">'), 0 == l && (l = u.tn.defaultSize.getHeight()), 0 == r && (r = u.tn.defaultSize.getWidth());
                              var s = new u.GOM.GTn(a, r, l);
                              u.GOM.items.push(s), i++
                          }
                      }
                      at("galleryObjectModelBuilt");
                      var c = u.O.fnGalleryObjectModelBuilt;
                      null !== c && ("function" == typeof c ? c() : window[c]());
                      if ("" != e) {
                          var h = jQuery(e),
                              d = ngimagesLoaded(h);
                          return h = null, d.on("progress", (function(e, t) {
                              if (t.isLoaded) {
                                  var n = t.img.getAttribute("data-idx");
                                  if (t.img.getAttribute("data-albumidx") == u.GOM.albumIdx) {
                                      var i = u.GOM.items[n];
                                      i.imageWidth = t.img.naturalWidth, i.imageHeight = t.img.naturalHeight;
                                      var a = u.I[i.thumbnailIdx];
                                      a.thumbs.width[u.GOM.curNavLevel][u.GOM.curWidth] = i.imageWidth, a.thumbs.height[u.GOM.curNavLevel][u.GOM.curWidth] = i.imageHeight, u.GalleryResizeThrottled();
                                      var o = a.thumbs.width.l1;
                                      for (let e in o) o.hasOwnProperty(e) && e != u.GOM.curWidth && u.tn.settings.width.l1[e] == u.tn.settings.getW() && u.tn.settings.height.l1[e] == u.tn.settings.getH() && (a.thumbs.width.l1[e] = i.imageWidth, a.thumbs.height.l1[e] = i.imageHeight);
                                      o = a.thumbs.width.lN;
                                      for (let e in o) o.hasOwnProperty(e) && e != u.GOM.curWidth && u.tn.settings.width.lN[e] == u.tn.settings.getW() && u.tn.settings.height.lN[e] == u.tn.settings.getH() && (a.thumbs.width.lN[e] = i.imageWidth, a.thumbs.height.lN[e] = i.imageHeight)
                                  }
                              }
                          })), u.galleryResizeEventEnabled = !0, !1
                      }
                      return !0
                  }() ? u.galleryResizeEventEnabled = !0: (S(), function() {
                      var e = u.galleryDisplayTransitionDuration.Get();
                      switch (u.galleryDisplayTransition.Get()) {
                          case "ROTATEX":
                              u.$E.base.css({
                                  perspective: "1000px",
                                  "perspective-origin": "50% 0%"
                              }), (new NGTweenable).tween({
                                  from: {
                                      r: 50
                                  },
                                  to: {
                                      r: 0
                                  },
                                  attachment: {
                                      orgIdx: u.GOM.albumIdx
                                  },
                                  duration: e,
                                  easing: "easeOutCirc",
                                  step: function(e, t) {
                                      t.orgIdx == u.GOM.albumIdx && u.$E.conTnParent.css(u.CSStransformName, "rotateX(" + e.r + "deg)")
                                  }
                              });
                              break;
                          case "SLIDEUP":
                              u.$E.conTnParent.css({
                                  opacity: 0
                              }), (new NGTweenable).tween({
                                  from: {
                                      y: 200,
                                      o: 0
                                  },
                                  to: {
                                      y: 0,
                                      o: 1
                                  },
                                  attachment: {
                                      orgIdx: u.GOM.albumIdx
                                  },
                                  duration: e,
                                  easing: "easeOutCirc",
                                  step: function(e, t) {
                                      t.orgIdx == u.GOM.albumIdx && u.$E.conTnParent.css(u.CSStransformName, "translate( 0px, " + e.y + "px)").css("opacity", e.o)
                                  }
                              })
                      }
                  }(), L(), requestTimeout((function() {
                      E(!1)
                  }), 20));
                  u.O.debugMode && console.log("GalleryRenderPart3: " + (new Date - t))
              }(e)
          }), 20)
      }

      function x() {
          var e = new Date;
          if (u.galleryResizeEventEnabled = !1, 0 == S()) return u.galleryResizeEventEnabled = !0, void(u.O.debugMode && console.log("GalleryResize1: " + (new Date - e)));
          u.O.debugMode && console.log("GalleryResizeSetLayout: " + (new Date - e)), L(), E(!1), u.O.debugMode && console.log("GalleryResizeFull: " + (new Date - e))
      }

      function S() {
          var e = !0;
          switch (u.GOM.cache.areaWidth = u.$E.conTnParent.width(), u.GOM.displayArea = {
              width: 0,
              height: 0
          }, u.layout.engine) {
              case "JUSTIFIED":
                  e = function() {
                      for (var e = 0, t = u.GOM.cache.areaWidth, n = 0, i = 0, a = [], o = 0, r = [], l = !1, s = u.tn.settings.GetResponsive("gutterWidth"), c = u.tn.settings.GetResponsive("gutterHeight"), h = 0, d = 0, m = !1, p = !1, g = u.tn.defaultSize.getOuterHeight(), f = 2 * u.tn.opt.Get("borderHorizontal"), b = 2 * u.tn.opt.Get("borderVertical"), v = 1, O = u.GOM.items.length, y = 0; y < O; y++) {
                          let n = u.GOM.items[y];
                          if (1 == n.deleted) break;
                          if (n.imageWidth > 0) {
                              let i = n.imageWidth / n.imageHeight,
                                  u = Math.floor(g * i);
                              if (l && (l = !1, o++, e = 0, m = !1, p = !1, v = 1), n.imageHeight > n.imageWidth ? m = !0 : p = !0, e + s + u < t - v * f) {
                                  e += u + s, r[o] = g;
                                  var G = Math.max(m ? h : 0, p ? d : 0);
                                  G > 0 && (r[o] = Math.min(r[o], G)), a[o] = y
                              } else {
                                  let n = (t - v * f) / (e += s + u),
                                      i = Math.floor(g * n);
                                  r[o] = i, m && (h = Math.max(h, i)), p && (d = Math.max(d, i)), a[o] = y, l = !0
                              }
                              v++
                          }
                      }
                      o = 0, i = 0, n = 0, 0, u.GOM.lastFullRow = 0;
                      for (y = 0; y < O; y++) {
                          let e = u.GOM.items[y];
                          if (!(e.imageWidth > 0)) return !1; {
                              let l = e.imageWidth / e.imageHeight,
                                  h = Math.floor(l * r[o]);
                              y == a[o] && (a.length != o + 1 || n + s + h + f > t) && (h = t - n - f);
                              let d = parseInt(r[o]);
                              h = parseInt(h), e.resizedContentWidth = h, e.resizedContentHeight = d, e.width = h + f, e.height = d + u.tn.labelHeight.get() + b, e.row = o, e.top = i;
                              let m = n;
                              u.O.RTL && (m = t - n - e.width), e.left = m, n += e.width + s, y == a[o] && (i += e.height + c, u.GOM.lastFullRow = o - 1, o++, n = 0)
                          }
                      }
                      return u.GOM.displayArea.width = t, !0
                  }();
                  break;
              case "CASCADING":
                  e = function() {
                      var e = 0,
                          t = u.GOM.cache.areaWidth,
                          n = 0,
                          i = [],
                          a = z(t),
                          o = 0,
                          r = u.tn.settings.GetResponsive("gutterHeight"),
                          l = 1,
                          s = u.tn.defaultSize.getOuterWidth(),
                          c = u.GOM.items.length,
                          h = 0;
                      "justified" == u.O.thumbnailAlignment ? (a = Math.min(a, c), o = 1 == a ? 0 : (t - a * s) / (a - 1)) : o = u.tn.settings.GetResponsive("gutterWidth");
                      var d = 2 * u.tn.opt.Get("borderHorizontal"),
                          m = 2 * u.tn.opt.Get("borderVertical");
                      if (u.GOM.lastFullRow = -1, "fillWidth" == u.O.thumbnailAlignment) {
                          var p = (a - 1) * o;
                          (l = (t - p) / (a * s)) > 1 && a++, p = (a - 1) * o, l = Math.min((t - p) / (a * s), 1)
                      }
                      for (var g = (s = Math.round(s * l)) - d, f = Math.round(u.tn.opt.Get("baseGridHeight") * l), b = 0; b < c; b++) {
                          var v = u.GOM.items[b];
                          if (1 == v.deleted) break;
                          if (v.imageHeight > 0 && v.imageWidth > 0) {
                              var O = 0,
                                  y = (h = 0, v.imageHeight / v.imageWidth);
                              if (v.resizedContentWidth = g, v.resizedContentHeight = v.resizedContentWidth * y, f > 0) {
                                  var G = Math.max(Math.trunc(v.resizedContentHeight / f), 1);
                                  v.resizedContentHeight = f * G + (G - 1) * (m + r)
                              }
                              if (v.height = v.resizedContentHeight + m + u.tn.labelHeight.get(), v.width = s, v.row = 0, 0 == n) O = e * (s + o), i[e] = v.height + r, ++e >= a && (e = 0, n++);
                              else {
                                  for (var M = 0, w = i[0], I = 1; I < a; I++) i[I] + 5 < w && (w = i[I], M = I);
                                  h = i[M], O = M * (s + o), i[M] = h + v.height + r
                              }
                              var T = O;
                              u.O.RTL && (T = 0 - O - s), v.left = T, v.top = h
                          }
                      }
                      return u.GOM.displayArea.width = a * (s + o) - o, !0
                  }();
                  break;
              case "MOSAIC":
                  e = function() {
                      var e = u.GOM.cache.areaWidth,
                          t = u.tn.settings.GetResponsive("gutterHeight"),
                          n = u.tn.settings.GetResponsive("gutterWidth"),
                          i = 2 * u.tn.opt.Get("borderHorizontal"),
                          a = 2 * u.tn.opt.Get("borderVertical"),
                          o = u.GOM.items.length,
                          r = 0,
                          l = 0,
                          s = 0,
                          c = 0,
                          h = 0;
                      let d = u.tn.settings.getMosaic();
                      for (var m = 0; m < o; m++) {
                          let e = d[s];
                          var p = (e.c - 1) * u.tn.defaultSize.getOuterWidth() + (e.c - 1) * n,
                              g = e.w * u.tn.defaultSize.getOuterWidth() + (e.w - 1) * n;
                          if (h = Math.max(h, p + g), c = Math.max(c, e.c - 1 + e.w), ++s >= d.length) break
                      }
                      var f = (c - 1) * n,
                          b = Math.min((e - f) / (h - f), 1);
                      r = 0, s = 0;
                      for (m = 0; m < o; m++) {
                          let e = u.GOM.items[m],
                              o = d[s];
                          e.top = Math.round((o.r - 1) * u.tn.defaultSize.getOuterHeight() * b) + (o.r - 1) * t + r * l + u.tn.labelHeight.get() * (o.r - 1), r > 0 && (e.top += t), e.left = (o.c - 1) * Math.round(u.tn.defaultSize.getOuterWidth() * b) + (o.c - 1) * n, e.height = Math.round(o.h * u.tn.defaultSize.getOuterHeight() * b) + (o.h - 1) * t + u.tn.labelHeight.get() * o.h, e.resizedContentHeight = e.height - u.tn.labelHeight.get() - a, e.width = Math.round(o.w * u.tn.defaultSize.getOuterWidth() * b) + (o.w - 1) * n, e.resizedContentWidth = e.width - i, e.row = r, 0 == r && (l = Math.max(l, e.top + e.height)), ++s >= d.length && (s = 0, r++)
                      }
                      return u.GOM.displayArea.width = (h - f) * b + f, !0
                  }();
                  break;
              case "GRID":
              default:
                  e = function() {
                      var e = 0,
                          t = 0,
                          n = u.GOM.cache.areaWidth,
                          i = 0,
                          a = u.tn.settings.GetResponsive("gutterHeight"),
                          o = z(n),
                          r = 0,
                          l = [],
                          s = 0,
                          c = n,
                          h = u.tn.defaultSize.getOuterWidth(),
                          d = 1,
                          m = u.GOM.items.length,
                          p = 2 * u.tn.opt.Get("borderHorizontal"),
                          g = 2 * u.tn.opt.Get("borderVertical");
                      "justified" == u.O.thumbnailAlignment ? (o = Math.min(o, m), i = 1 == o ? 0 : (n - o * h) / (o - 1)) : i = u.tn.settings.GetResponsive("gutterWidth");
                      if (u.O.RTL || "fillWidth" == u.O.thumbnailAlignment) {
                          var f = (o - 1) * i;
                          (d = (n - f) / (o * h)) > 1 && o++, f = (o - 1) * i, d = Math.min((n - f) / (o * h), 1), c = o * h + f
                      }
                      u.GOM.lastFullRow = 0;
                      for (var b = 0, v = (h = Math.round(h * d)) - p, O = Math.round(u.tn.defaultSize.getOuterHeight() * d) + u.tn.labelHeight.get(), y = Math.round(u.tn.defaultSize.getOuterHeight() * d) - g, G = 0; G < m; G++) {
                          0 == t ? (e = s * (h + i), l[s] = e, r = e + h) : e = l[s];
                          var M = e;
                          u.O.RTL && (M = parseInt(c) - e - h);
                          var w = u.GOM.items[G];
                          w.top = t, w.left = M, w.height = O, w.width = h, "fillWidth" == u.O.thumbnailAlignment && (w.resizedContentWidth = v, w.resizedContentHeight = y), w.row = b, ++s >= o && (s = 0, t += O + a, u.GOM.lastFullRow = b, b++)
                      }
                      return u.GOM.displayArea.width = r, !0
                  }()
          }
          at("galleryLayoutApplied");
          var t = u.O.fnGalleryLayoutApplied;
          return null !== t && ("function" == typeof t ? t() : window[t]()), e
      }

      function L() {
          null == u.CSStransformName ? u.$E.conTn.css("left", "0px") : u.$E.conTn.css(u.CSStransformName, "none")
      }

      function C() {
          u.GOM.cache.viewport = a(), u.GOM.cache.areaWidth = u.$E.base.width(), u.O.lightboxStandalone || (u.GOM.cache.containerOffset = u.$E.conLoadingB.offset())
      }

      function E(e) {
          C();
          var t = u.GOM.items.length;
          u.GOM.itemsDisplayed = 0;
          var n = 0;
          M();
          for (var i = 0; i < t; i++) {
              let t = u.GOM.items[i];
              i >= u.GOM.displayInterval.from && n < u.GOM.displayInterval.len ? (t.inDisplayArea = !0, e && (t.neverDisplayed = !0), u.GOM.itemsDisplayed++, n++) : t.inDisplayArea = !1
          }
          f();
          var a = [],
              o = [];
          C(), u.GOM.clipArea.top = -1, n = 0;
          var r = -1;
          u.GOM.clipArea.height = 0;
          for (i = 0; i < t; i++) {
              let e = u.GOM.items[i];
              if (e.inDisplayArea) {
                  if (-1 == u.GOM.clipArea.top && (u.GOM.clipArea.top = e.top), e.top - u.GOM.clipArea.top <= -1 && (u.GOM.clipArea.top = e.top), u.GOM.clipArea.height = Math.max(u.GOM.clipArea.height, e.top - u.GOM.clipArea.top + e.height), e.neverDisplayed) {
                      var l = u.GOM.cache.containerOffset.top + (e.top - u.GOM.clipArea.top);
                      if (l + e.height >= u.GOM.cache.viewport.t - 50 && l <= u.GOM.cache.viewport.t + u.GOM.cache.viewport.h + 50) {
                          let t = u.I[e.thumbnailIdx];
                          null == t.$elt && A(t, e.thumbnailIdx, i), a.push({
                              idx: i,
                              delay: n,
                              top: e.top,
                              left: e.left
                          }), n++
                      }
                  } else o.push({
                      idx: i,
                      delay: 0,
                      top: e.top,
                      left: e.left
                  });
                  r = i
              } else {
                  e.displayed = !1;
                  let t = u.I[e.thumbnailIdx];
                  null != t.$elt && t.$elt.css({
                      opacity: 0,
                      display: "none"
                  })
              }
          }
          var s = u.$E.conTnParent.width();
          if (u.GOM.displayArea.width == u.GOM.displayAreaLast.width && u.GOM.clipArea.height == u.GOM.displayAreaLast.height || (u.$E.conTn.width(u.GOM.displayArea.width).height(u.GOM.clipArea.height), u.GOM.displayAreaLast.width = u.GOM.displayArea.width, u.GOM.displayAreaLast.height = u.GOM.clipArea.height), s != u.$E.conTnParent.width()) return u.GOM.cache.areaWidth = u.$E.conTnParent.width(), S(), L(), void E(e);
          if (u.layout.support.rows && ("ROWS" == u.galleryDisplayMode.Get() || "FULLCONTENT" == u.galleryDisplayMode.Get() && u.galleryLastRowFull.Get() && -1 != u.GOM.lastFullRow) && (u.GOM.lastDisplayedIdxNew = r < t - 1 ? r : -1, -1 != u.GOM.lastDisplayedIdx)) {
              u.I[u.GOM.items[u.GOM.lastDisplayedIdx].thumbnailIdx].$getElt(".nGY2GThumbnailIconsFullThumbnail").html("")
          }
          u.GOM.thumbnails2Display = [];
          var c = k(a);
          k(o), u.GOM.thumbnails2Display.forEach((function(e) {
              ! function(e, t) {
                  function n(e, t) {
                      return Math.floor(Math.random() * (t - e + 1) + e)
                  }
                  var i = {},
                      a = {};
                  switch (u.tn.opt.Get("displayTransition")) {
                      case "RANDOMSCALE":
                          {
                              for (var o = n(0, 3); o == u.GOM.lastRandomValue;) o = n(0, 3);u.GOM.lastRandomValue = o;
                              let t = [.95, 1, 1.05, 1.1][o];e.$elt.css({
                                  "z-index": u.GOM.lastZIndex + [1, 2, 3, 4][o],
                                  "box-shadow": "0px 0px 5px 3px rgba(0,0,0,0.74)"
                              }),
                              i = {
                                  scale: .5,
                                  opacity: 0
                              },
                              a = {
                                  scale: t,
                                  opacity: 1
                              };
                              break
                          }
                      case "SCALEUP":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = .6),
                              i = {
                                  scale: e,
                                  opacity: 0
                              },
                              a = {
                                  scale: 1,
                                  opacity: 1
                              };
                              break
                          }
                      case "SCALEDOWN":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = 1.3),
                              i = {
                                  scale: e,
                                  opacity: 0
                              },
                              a = {
                                  scale: 1,
                                  opacity: 1
                              };
                              break
                          }
                      case "SLIDEUP":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = 50),
                              i = {
                                  opacity: 0,
                                  translateY: e
                              },
                              a = {
                                  opacity: 1,
                                  translateY: 0
                              };
                              break
                          }
                      case "SLIDEDOWN":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = -50),
                              i = {
                                  opacity: 0,
                                  translateY: e
                              },
                              a = {
                                  opacity: 1,
                                  translateY: 0
                              };
                              break
                          }
                      case "FLIPUP":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = 100),
                              i = {
                                  opacity: 0,
                                  translateY: e,
                                  rotateX: 45
                              },
                              a = {
                                  opacity: 1,
                                  translateY: 0,
                                  rotateX: 0
                              };
                              break
                          }
                      case "FLIPDOWN":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = -100),
                              i = {
                                  opacity: 0,
                                  translateY: e,
                                  rotateX: -45
                              },
                              a = {
                                  opacity: 1,
                                  translateY: 0,
                                  rotateX: 0
                              };
                              break
                          }
                      case "SLIDEUP2":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = 100),
                              i = {
                                  opacity: 0,
                                  translateY: e,
                                  rotateY: 40
                              },
                              a = {
                                  opacity: 1,
                                  translateY: 0,
                                  rotateY: 0
                              };
                              break
                          }
                      case "IMAGESLIDEUP":
                          i = {
                              opacity: 0,
                              top: "100%"
                          }, a = {
                              opacity: 1,
                              top: "0%"
                          };
                          break;
                      case "SLIDEDOWN2":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = -100),
                              i = {
                                  opacity: 0,
                                  translateY: e,
                                  rotateY: 40
                              },
                              a = {
                                  opacity: 1,
                                  translateY: 0,
                                  rotateY: 0
                              };
                              break
                          }
                      case "SLIDERIGHT":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = -150),
                              i = {
                                  opacity: 0,
                                  translateX: e
                              },
                              a = {
                                  opacity: 1,
                                  translateX: 0
                              };
                              break
                          }
                      case "SLIDELEFT":
                          {
                              let e = u.tn.opt.Get("displayTransitionStartVal");0 == e && (e = 150),
                              i = {
                                  opacity: 0,
                                  translateX: e
                              },
                              a = {
                                  opacity: 1,
                                  translateX: 0
                              };
                              break
                          }
                      case "FADEIN":
                          i = {
                              opacity: 0
                          }, a = {
                              opacity: 1
                          }
                  }
                  var r = new NGTweenable;
                  r.tween({
                      from: i,
                      to: a,
                      attachment: {
                          $e: e.$elt,
                          item: e,
                          tw: r
                      },
                      delay: t,
                      duration: u.tn.opt.Get("displayTransitionDuration"),
                      easing: u.tn.opt.Get("displayTransitionEasing"),
                      step: function(e, t) {
                          window.requestAnimationFrame((function() {
                              if (null !== t.item.$elt) switch (u.tn.opt.Get("displayTransition")) {
                                  case "RANDOMSCALE":
                                  case "SCALEUP":
                                      t.$e.css(u.CSStransformName, "scale(" + e.scale + ")").css("opacity", e.opacity);
                                      break;
                                  case "SCALEDOWN":
                                      t.item.$elt.last().css("opacity", e.opacity), t.item.CSSTransformSet(".nGY2GThumbnail", "scale", e.scale), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "SLIDEUP":
                                      t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformSet(".nGY2GThumbnail", "translate", "0px, " + e.translateY + "px"), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "SLIDEDOWN":
                                      t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformSet(".nGY2GThumbnail", "translate", "0px," + e.translateY + "px"), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "FLIPUP":
                                      t.item.CSSTransformSet(".nGY2GThumbnail", "translate", "0px," + e.translateY + "px"), t.item.CSSTransformSet(".nGY2GThumbnail", "rotateX", e.rotateX + "deg"), t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "FLIPDOWN":
                                      t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformSet(".nGY2GThumbnail", "translate", "0px," + e.translateY + "px"), t.item.CSSTransformSet(".nGY2GThumbnail", "rotateX", e.rotateX + "deg"), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "SLIDEUP2":
                                      t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformSet(".nGY2GThumbnail", "translate", "0px," + e.translateY + "px"), t.item.CSSTransformSet(".nGY2GThumbnail", "rotateY", e.rotateY + "deg"), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "IMAGESLIDEUP":
                                      t.item.$elt.css("opacity", e.opacity), t.item.$Elts[".nGY2GThumbnailImage"].css("top", e.top);
                                      break;
                                  case "SLIDEDOWN2":
                                      t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformSet(".nGY2GThumbnail", "translate", "0px, " + e.translateY + "px"), t.item.CSSTransformSet(".nGY2GThumbnail", "rotateY", e.rotateY + "deg"), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "SLIDERIGHT":
                                      t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformSet(".nGY2GThumbnail", "translate", e.translateX + "px, 0px"), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "SLIDELEFT":
                                      t.item.CSSTransformSet(".nGY2GThumbnail", "translate", e.translateX + "px, 0px"), t.item.$elt.css("opacity", e.opacity), t.item.CSSTransformApply(".nGY2GThumbnail");
                                      break;
                                  case "FADEIN":
                                      t.$e.css(e)
                              } else t.tw.stop(!1)
                          }))
                      },
                      finish: function(e, t) {
                          window.requestAnimationFrame((function() {
                              if (null !== t.item.$elt) {
                                  switch (u.tn.opt.Get("displayTransition")) {
                                      case "RANDOMSCALE":
                                          t.$e.css(u.CSStransformName, "scale(" + e.scale + ")").css("opacity", "");
                                          break;
                                      case "SCALEUP":
                                          t.$e.css(u.CSStransformName, "").css("opacity", "");
                                          break;
                                      case "SCALEDOWN":
                                          t.item.$elt.last().css("opacity", ""), t.item.CSSTransformSet(".nGY2GThumbnail", "scale", e.scale), t.item.CSSTransformApply(".nGY2GThumbnail");
                                          break;
                                      case "IMAGESLIDEUP":
                                          t.item.$elt.css("opacity", ""), t.item.$Elts[".nGY2GThumbnailImage"].css("top", 0);
                                          break;
                                      case "SLIDEDOWN2":
                                          t.item.$elt.css("opacity", ""), t.item.CSSTransformApply(".nGY2GThumbnail");
                                          break;
                                      default:
                                          t.item.$elt.css("opacity", "")
                                  }
                                  B(t.item)
                              }
                          }))
                      }
                  })
              }(e.itm, e.d)
          })), u.GOM.thumbnails2Display = [], "NONE" == u.tn.opt.Get("displayTransition") ? (u.galleryResizeEventEnabled = !0, at("galleryDisplayed")) : requestTimeout((function() {
              u.galleryResizeEventEnabled = !0, at("galleryDisplayed")
          }), c * u.tn.opt.Get("displayInterval"))
      }

      function k(e) {
          var t = e.length;
          if (0 == t) return 0;
          var n = u.tn.opt.Get("displayOrder");
          if ("random" == n ? NGY2Tools.AreaShuffle(e) : ("rowByRow" == n && "JUSTIFIED" != u.layout.engine && "GRID" != u.layout.engine && (n = ""), "colFromRight" != n && "colFromLeft" != n || "CASCADING" == u.layout.engine || "GRID" == u.layout.engine || (n = "")), "colFromRight" == n || "colFromLeft" == n) {
              for (var i = [], a = [], o = 0; o < t; o++) null == i[e[o].left] && (i[e[o].left] = [], a.push(e[o].left)), i[e[o].left].push(e[o].idx);
              "colFromRight" == n && (a = a.reverse());
              for (o = 0; o < a.length; o++)
                  for (var r = a[o], l = 0; l < i[r].length; l++) D(i[r][l], o);
              return o
          }
          var s = 0,
              c = e[0].top;
          for (o = 0; o < t; o++) "rowByRow" == n ? e[o].top > c && (s++, c = e[o].top) : s++, D(e[o].idx, s);
          return s
      }

      function D(e, t) {
          var n = 0,
              i = u.GOM.items[e],
              a = u.GOM.items[e].thumbnailIdx,
              o = u.I[a];
          if (i.neverDisplayed) {
              var r = i.top - u.GOM.clipArea.top;
              if (u.tn.opt.Get("stacks") > 0 ? (o.$elt.last().css({
                      display: "block"
                  }), o.$elt.css({
                      top: r,
                      left: i.left
                  })) : o.$elt.css({
                      display: "block",
                      top: r,
                      left: i.left
                  }), n = r, !0 === u.O.thumbnailWaitImageLoaded) ngimagesLoaded(o.$getElt(".nGY2TnImg2")).on("progress", (function(e, t) {
                  if (t.isLoaded && t.img.getAttribute("data-albumidx") == u.GOM.albumIdx) {
                      var n = t.img.getAttribute("data-idx");
                      u.I[n].ThumbnailImageReveal()
                  }
              }));
              ! function(e, t) {
                  var n = u.GOM.items[e],
                      i = u.I[n.thumbnailIdx];
                  if ("NONE" == u.tn.opt.Get("displayTransition")) i.$elt.css({
                      opacity: 1
                  }), B(i);
                  else {
                      if (null == i.$elt) return;
                      var a = u.GOM.cache.containerOffset.top + (n.top - u.GOM.clipArea.top),
                          o = u.GOM.cache.viewport;
                      if (a + (n.top - u.GOM.clipArea.top) >= o.t - 50 && a <= o.t + o.h + 50) {
                          var r = t * u.tn.opt.Get("displayInterval");
                          return void("CUSTOM" == u.tn.opt.Get("displayTransition") ? "lN" == u.GOM.curNavLevel ? u.O.fnThumbnailDisplayEffect(i.$elt, i, e, r) : u.O.fnThumbnailL1DisplayEffect(i.$elt, i, e, r) : u.GOM.thumbnails2Display.push({
                              itm: i,
                              d: r
                          }))
                      }
                      i.$elt.css({
                          opacity: 1
                      }), B(i)
                  }
              }(e, t), i.displayed = !0, i.neverDisplayed = !1
          } else {
              var l = u.GOM.cache.containerOffset.top + o.top;
              r = u.GOM.cache.containerOffset.top + (i.top - u.GOM.clipArea.top);
              n = i.top - u.GOM.clipArea.top;
              var s = u.GOM.cache.viewport;
              if (u.O.thumbnailDisplayOutsideScreen || l + i.height >= s.t - s.h && l <= s.t + 4 * s.h || r + i.height >= s.t - s.h && r <= s.t + 4 * s.h)
                  if (i.displayed) {
                      if (o.top != i.top || o.left != i.left)
                          if (1 == u.O.galleryResizeAnimation)(new NGTweenable).tween({
                              from: {
                                  top: o.top,
                                  left: o.left,
                                  height: o.height,
                                  width: o.width
                              },
                              to: {
                                  top: n,
                                  left: i.left,
                                  height: i.height,
                                  width: i.width
                              },
                              attachment: {
                                  $e: o.$elt
                              },
                              duration: 100,
                              delay: t * u.tn.opt.Get("displayInterval") / 5,
                              easing: "easeOutQuart",
                              step: function(e, t) {
                                  t.$e.css(e)
                              },
                              finish: function(e, t) {
                                  this.dispose()
                              }
                          });
                          else o.$elt.css({
                              top: n,
                              left: i.left
                          })
                  } else i.displayed = !0, o.$elt.css({
                      display: "block",
                      top: n,
                      left: i.left,
                      opacity: 1
                  }), B(o);
              else i.displayed = !1, o.$elt.css({
                  display: "none"
              })
          }
          if (o.left = i.left, o.top = n, o.width == i.width && o.height == i.height || (o.$elt.css({
                  width: i.width,
                  height: i.height
              }), o.width = i.width, o.height = i.height, o.resizedContentWidth == i.resizedContentWidth && o.resizedContentHeight == i.resizedContentHeight || ("albumUp" == o.kind || (o.$getElt(".nGY2GThumbnailImage").css({
                  height: i.resizedContentHeight,
                  width: i.resizedContentWidth
              }), "JUSTIFIED" == u.layout.engine && o.$getElt(".nGY2GThumbnailImg").css({
                  height: i.resizedContentHeight,
                  width: i.resizedContentWidth
              })), o.resizedContentWidth = i.resizedContentWidth, o.resizedContentHeight = i.resizedContentHeight)), u.GOM.lastDisplayedIdxNew == e && u.layout.support.rows && ("ROWS" == u.galleryDisplayMode.Get() && u.galleryMaxRows.Get() > 0 || "FULLCONTENT" == u.galleryDisplayMode.Get() && u.galleryLastRowFull.Get() && -1 != u.GOM.lastFullRow)) {
              var c = u.GOM.items.length - e - 1;
              "0" != o.albumID && u.O.thumbnailLevelUp && c--, c > 0 ? ((u.O.thumbnailOpenInLightox || u.O.thumbnailSliderDelay > 0) && o.$getElt(".nGY2GThumbnailIconsFullThumbnail").html("+" + c), "right" != u.O.thumbnailLabel.get("position") && "left" != u.O.thumbnailLabel.get("position") && u.GOM.slider.hostItem != u.GOM.NGY2Item(e) && (V(u.GOM.slider.hostItem), u.GOM.slider.hostIdx = e, u.GOM.slider.hostItem = u.GOM.NGY2Item(e), u.GOM.slider.nextIdx = e, u.GOM.slider.currentIdx = e, function() {
                  if (0 == u.O.thumbnailSliderDelay || -1 == u.GOM.slider.hostIdx) return;
                  clearTimeout(u.GOM.slider.timerID);
                  var e = u.GOM.slider.hostItem;
                  0 == e.$getElt(".nGY2TnImgNext").length && (e.$getElt(".nGY2TnImg").clone().removeClass("nGY2TnImg").addClass("nGY2TnImgNext").insertAfter(e.$getElt(".nGY2TnImg")), e.$getElt(".nGY2TnImgBack").clone().removeClass("nGY2TnImgBack").addClass("nGY2TnImgBackNext").insertAfter(e.$getElt(".nGY2TnImg", !0)), e.$getElt(".nGY2GThumbnailImage", !0), e.$getElt(".nGY2GThumbnailImg", !0));
                  e.CSSTransformSet(".nGY2TnImgNext", "translateX", "100%", !0), e.CSSTransformApply(".nGY2TnImgNext"), e.CSSTransformSet(".nGY2TnImgBackNext", "translateX", "100%", !0), e.CSSTransformApply(".nGY2TnImgBackNext"), N(), u.GOM.slider.timerID = requestTimeout((function() {
                      ! function e() {
                          if (null != u.GOM.slider.hostItem.$getElt()) {
                              var t = new NGTweenable;
                              u.GOM.slider.tween = t, t.tween({
                                  from: {
                                      left: 100
                                  },
                                  to: {
                                      left: 0
                                  },
                                  duration: 800,
                                  delay: 0,
                                  easing: "easeOutQuart",
                                  step: function(e) {
                                      null != u.GOM.slider.hostItem.$getElt() ? (u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBack", "translateX", -(100 - e.left) + "%"), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBack"), u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImg", "translateX", -(100 - e.left) + "%"), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImg"), u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBackNext", "translateX", e.left + "%"), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBackNext"), u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgNext", "translateX", e.left + "%"), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgNext")) : u.GOM.slider.tween.stop(!1)
                                  },
                                  finish: function(t) {
                                      null != u.GOM.slider.hostItem.$getElt() && null != u.GOM.NGY2Item(u.GOM.slider.nextIdx) && (V(u.GOM.NGY2Item(u.GOM.slider.nextIdx)), u.GOM.slider.currentIdx = u.GOM.slider.nextIdx, N(), clearTimeout(u.GOM.slider.timerID), u.GOM.slider.timerID = requestTimeout((function() {
                                          e()
                                      }), u.O.thumbnailSliderDelay))
                                  }
                              })
                          }
                      }()
                  }), u.O.thumbnailSliderDelay)
              }())) : (V(u.GOM.slider.hostItem), u.GOM.slider.hostIdx = -1), u.GOM.lastDisplayedIdx = e
          }
      }

      function N() {
          u.GOM.slider.nextIdx++, u.GOM.slider.nextIdx >= u.GOM.items.length && (u.GOM.slider.nextIdx = u.GOM.slider.hostIdx);
          var e = u.GOM.NGY2Item(u.GOM.slider.nextIdx),
              t = "url('" + u.emptyGif + "')";
          null != e.imageDominantColors && (t = "url('" + e.imageDominantColors + "')"), u.GOM.slider.hostItem.$getElt(".nGY2TnImgBackNext", !0).css({
              "background-image": t,
              opacity: 1
          }), u.GOM.slider.hostItem.$getElt(".nGY2TnImgNext", !0).css({
              "background-image": "url('" + e.thumbImg().src + "')",
              opacity: 1
          }), u.GOM.slider.hostItem.$getElt(".nGY2TnImgNext .nGY2GThumbnailImg", !0).attr("src", e.thumbImg().src)
      }

      function V(e) {
          if (-1 != u.GOM.slider.hostIdx) {
              null != u.GOM.slider.tween && 1 == u.GOM.slider.tween._isTweening && u.GOM.slider.tween.stop(!1);
              var t = "url('" + u.emptyGif + "')";
              if (null != e.imageDominantColors && (t = "url('" + e.imageDominantColors + "')"), u.GOM.slider.hostItem.$getElt(".nGY2TnImgBack").css("background-image", t), u.GOM.slider.hostItem.$getElt(".nGY2TnImg").css("background-image", "url('" + e.thumbImg().src + "')"), u.GOM.slider.hostItem.$getElt(".nGY2TnImg .nGY2GThumbnailImg").attr("src", e.thumbImg().src), u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBack", "translateX", "0"), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBack"), u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImg", "translateX", "0"), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImg"), u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgBackNext", "translateX", "100%", !0), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgBackNext"), u.GOM.slider.hostItem.CSSTransformSet(".nGY2TnImgNext", "translateX", "100%", !0), u.GOM.slider.hostItem.CSSTransformApply(".nGY2TnImgNext"), 1 == u.O.thumbnailLabel.get("display")) {
                  var n = u.O.icons.thumbnailAlbum;
                  "album" != e.kind && (n = u.O.icons.thumbnailImage), u.GOM.slider.hostItem.$getElt(".nGY2GThumbnailTitle").html(n + $(e)), u.GOM.slider.hostItem.$getElt(".nGY2GThumbnailDescription").html(n + F(e))
              }
          }
      }

      function Y(e) {
          var t = u.tn.opt.Get("stacks");
          if (0 == t) return "";
          for (var n = "", i = 0; i < t; i++) n = '<div class="nGY2GThumbnailStack " style="display:none;' + e + '"></div>' + n;
          return n
      }

      function A(e, t, n) {
          if (e.eltTransform = [], e.eltFilter = [], e.hoverInitDone = !1, e.$Elts = [], "albumUp" != e.kind) {
              var i = [],
                  a = 0,
                  o = "";
              !1 === u.O.thumbnailOpenInLightox && (o = "cursor:default;");
              var r = e.thumbImg().src.replace(/'/g, "%27"),
                  l = $(e),
                  s = "",
                  c = "background-image: url('" + u.emptyGif + "');";
              null != e.imageDominantColors ? c = "background-image: url('" + e.imageDominantColors + "');" : null != e.imageDominantColor ? s = "background-color:" + e.imageDominantColor + ";" : c = "";
              var h = "opacity:1;";
              1 == u.O.thumbnailWaitImageLoaded && (h = "opacity:0;"), i[a++] = Y(s) + '<div class="nGY2GThumbnail nGY2GThumbnail_' + u.GOM.curNavLevel + '" style="display:none;opacity:0;' + o + '"><div class="nGY2GThumbnailSub ' + (u.O.thumbnailSelectable && e.selected ? "nGY2GThumbnailSubSelected" : "") + '">';
              var d = u.tn.settings.getW(),
                  m = u.tn.settings.getH();
              null !== u.tn.settings.getMosaic() && (d = u.GOM.items[n].width, m = u.GOM.items[n].height);
              var p = "contain";
              u.tn.opt.Get("crop") && (p = "cover");
              var g = "position: absolute; top: 0px; left: 0px; width:" + d + "px; height:" + m + "px;" + s + c + " background-position: center center;  background-repeat: no-repeat; background-size:" + p + "; overflow: hidden;";
              i[a++] = '<div class="nGY2GThumbnailImage nGY2TnImgBack" style="' + g + '"></div>';
              var f = h + "position: absolute; top: 0px; left: 0px; width:" + d + "px; height:" + m + "px; background-image: url('" + r.replace(/\\/g, "\\\\") + "'); background-position: center center; background-repeat: no-repeat; background-size:" + p + "; overflow: hidden;";
              i[a++] = '<div class="nGY2GThumbnailImage nGY2TnImg" style="' + f + '">', i[a++] = '  <img class="nGY2GThumbnailImg nGY2TnImg2" src="' + r + '" alt="' + l + '" style="opacity:0;" data-idx="' + t + '" data-albumidx="' + u.GOM.albumIdx + '" >', i[a++] = "</div>", i[a++] = '<div class="nGY2GThumbnailCustomLayer"></div>', 1 == u.O.thumbnailLabel.get("display") && (i[a++] = '  <div class="nGY2GThumbnailLabel" ' + u.tn.style.getLabel(e) + ">", "album" == e.kind ? i[a++] = '    <div class="nGY2GThumbnailTitle nGY2GThumbnailAlbumTitle" ' + u.tn.style.getTitle() + ">" + u.O.icons.thumbnailAlbum + l + "</div>" : i[a++] = '    <div class="nGY2GThumbnailTitle nGY2GThumbnailImageTitle" ' + u.tn.style.getTitle() + ">" + u.O.icons.thumbnailImage + l + "</div>", i[a++] = '    <div class="nGY2GThumbnailDescription" ' + u.tn.style.getDesc() + ">" + F(e) + "</div>", i[a++] = "  </div>"), i[a++] = function(e) {
                  var t = _(e, "topLeft") + _(e, "topRight") + _(e, "bottomLeft") + _(e, "bottomRight");
                  return t += '<div class="nGY2GThumbnailIconsFullThumbnail"></div>'
              }(e), i[a++] = "</div></div>";
              var b = jQuery(i.join("")).appendTo(u.$E.conTn);
              e.$elt = b, b.data("index", n), e.$getElt(".nGY2GThumbnailImg").data("index", n);
              var v = u.O.fnThumbnailInit;
              null !== v && ("function" == typeof v ? v(b, e, n) : window[v](b, e, n)), "image gallery by nanogallery2 [build]" != e.title && H(n)
          } else ! function(e, t) {
              var n = [],
                  i = 0,
                  a = "";
              !1 === u.O.thumbnailOpenInLightox && (a = "cursor:default;"), n[i++] = Y("") + '<div class="nGY2GThumbnail" style="display:none;opacity:0;' + a + '" >', n[i++] = '  <div class="nGY2GThumbnailSub">';
              var o = u.tn.defaultSize.getHeight(),
                  r = u.tn.defaultSize.getWidth();
              n[i++] = '    <div class="nGY2GThumbnailImage" style="width:' + r + "px;height:" + o + 'px;"><img class="nGY2GThumbnailImg" src="' + u.emptyGif + '" alt="" style="max-width:' + r + "px;max-height:" + o + 'px;" ></div>', n[i++] = '    <div class="nGY2GThumbnailAlbumUp" >' + u.O.icons.thumbnailAlbumUp + "</div>", n[i++] = "  </div>", n[i++] = "</div>";
              var l = jQuery(n.join("")).appendTo(u.$E.conTn);
              e.$elt = l, l.data("index", t), e.$getElt(".nGY2GThumbnailImg").data("index", t)
          }(e, n)
      }

      function _(e, t) {
          var n = "",
              i = u.tn.toolbar.get(e),
              a = {
                  xs: 0,
                  sm: 1,
                  me: 2,
                  la: 3,
                  xl: 4
              },
              o = 0;
          if ("" != i[t]) {
              var r = "top: 0; right: 0; text-align: right;";
              switch (t) {
                  case "topLeft":
                      r = "top: 0; left: 0; text-align: left;";
                      break;
                  case "bottomRight":
                      r = "bottom: 0; right: 0; text-align: right;";
                      break;
                  case "bottomLeft":
                      r = "bottom: 0; left: 0; text-align: left;"
              }
              n += '  <ul class="nGY2GThumbnailIcons" style="' + r + '">';
              for (var l = i[t].split(","), s = l.length, c = 0; c < s; c++) {
                  var h = l[c].replace(/^\s*|\s*$/, ""),
                      d = h.substring(0, 2).toLowerCase(),
                      m = h,
                      p = !0;
                  if (/xs|sm|me|la|xl/i.test(d) && (a[d] > a[u.GOM.curWidth] && (p = !1), m = h.substring(2)), p) {
                      var g = c + 1 < s ? "&nbsp;" : "";
                      switch (m) {
                          case "COUNTER":
                              "album" == e.kind && (n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="">', n += '      <div class="nGY2GThumbnailIconImageCounter"></div>', n += '      <div class="nGY2GThumbnailIconText">' + u.O.icons.thumbnailCounter + Math.max(e.getContentLength(!1), e.numberItems) + g + "</div>", n += "    </li>", o++);
                              break;
                          case "COUNTER2":
                              "album" == e.kind && (n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="">', n += '      <div class="nGY2GThumbnailIconTextBadge">' + u.O.icons.thumbnailCounter + Math.max(e.getContentLength(!1), e.numberItems) + g + "</div>", n += "    </li>", o++);
                              break;
                          case "SHARE":
                              n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="' + m + '">', n += "      <div>" + u.O.icons.thumbnailShare + "</div>", n += "    </li>", o++;
                              break;
                          case "DOWNLOAD":
                              n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="' + m + '">', n += "      <div>" + u.O.icons.thumbnailDownload + "</div>", n += "    </li>", o++;
                              break;
                          case "INFO":
                              n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="' + m + '">', n += "      <div>" + u.O.icons.thumbnailInfo + "</div>", n += "    </li>", o++;
                              break;
                          case "SHOPPINGCART":
                              n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="' + m + '">', n += P(e), n += "    </li>", o++;
                              break;
                          case "DISPLAY":
                              n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="DISPLAY">', n += '      <div class="nGY2GThumbnailIconImageShare">' + u.O.icons.thumbnailDisplay + "</div>", n += "    </li>", o++;
                              break;
                          case "CUSTOM1":
                          case "CUSTOM2":
                          case "CUSTOM3":
                          case "CUSTOM4":
                          case "CUSTOM5":
                          case "CUSTOM6":
                          case "CUSTOM7":
                          case "CUSTOM8":
                          case "CUSTOM9":
                          case "CUSTOM10":
                              var f = m.replace("CUSTOM", "");
                              n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="' + m.toLowerCase() + '">', n += '      <div class="nGY2GThumbnailIconImageShare">' + u.O.icons["thumbnailCustomTool" + f] + "</div>", n += "    </li>", o++;
                              break;
                          case "FEATURED":
                              !0 === e.featured && (n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="">', n += '      <div class="nGY2GThumbnailIconImageFeatured">' + u.O.icons.thumbnailFeatured + "</div>", n += "    </li>", o++);
                              break;
                          case "SELECT":
                              1 == u.O.thumbnailSelectable && (n += '    <li class="nGY2GThumbnailIcon" data-ngy2action="TOGGLESELECT">', !0 === e.selected ? n += '      <div class="nGY2GThumbnailIconImageSelect nGY2ThumbnailSelected">' + u.O.icons.thumbnailSelected + "</div>" : n += '      <div class="nGY2GThumbnailIconImageSelect nGY2ThumbnailUnselected">' + u.O.icons.thumbnailUnselected + "</div>", n += "    </li>", o++)
                      }
                  }
              }
              n += "  </ul>"
          }
          return o > 0 ? n : ""
      }

      function P(e) {
          for (var t = 0, n = e.GetID(), i = 0; i < u.shoppingCart.length; i++) u.I[u.shoppingCart[i].idx].GetID() == n && (t = u.shoppingCart[i].qty);
          return 0 == t && (t = ""), "      <div>" + u.O.icons.thumbnailShoppingcart + t + "</div>"
      }

      function R(e) {
          var t = e.$elt;
          if (null != t) {
              var n = t.find('*[data-ngy2action="SHOPPINGCART"]');
              void 0 !== n && n.html(P(e))
          }
      }

      function $(e) {
          var t = e.title;
          if (1 == u.O.thumbnailLabel.get("display")) {
              void 0 !== t && 0 != t.length || (t = "&nbsp;"), "" != u.i18nTranslations.thumbnailImageTitle && (t = u.i18nTranslations.thumbnailImageTitle);
              var n = u.O.thumbnailLabel.get("titleMaxLength");
              n > 3 && t.length > n && (t = t.substring(0, n) + "...")
          }
          return t
      }

      function F(e) {
          var t = "";
          if (1 == u.O.thumbnailLabel.get("displayDescription")) {
              t = "album" == e.kind ? "" != u.i18nTranslations.thumbnailImageDescription ? u.i18nTranslations.thumbnailAlbumDescription : e.description : "" != u.i18nTranslations.thumbnailImageDescription ? u.i18nTranslations.thumbnailImageDescription : e.description;
              var n = u.O.thumbnailLabel.get("descriptionMaxLength");
              n > 3 && t.length > n && (t = t.substring(0, n) + "..."), 0 == t.length && (t = "&nbsp;")
          }
          return t
      }

      function z(e) {
          var t = u.tn.defaultSize.getOuterWidth(),
              n = 0;
          return n = "justified" == u.O.thumbnailAlignment ? Math.floor(e / t) : Math.floor((e + u.tn.settings.GetResponsive("gutterWidth")) / (t + u.tn.settings.GetResponsive("gutterWidth"))), u.O.maxItemsPerLine > 0 && n > u.O.maxItemsPerLine && (n = u.O.maxItemsPerLine), n < 1 && (n = 1), n
      }

      function B(e) {
          var t = u.tn.opt.Get("stacks");
          if (t > 0) {
              e.$elt.css({
                  display: "block"
              });
              for (var n = .9, i = t - 1; i >= 0; i--) e.$elt.eq(i).css("opacity", n), n -= .2
          }
      }

      function H(e) {
          var t = u.GOM.items[e],
              n = u.I[t.thumbnailIdx];
          if (null != n.$elt) {
              var i = u.O.fnThumbnailHoverInit;
              null !== i && ("function" == typeof i ? i($e, n, e) : window[i]($e, n, e));
              for (var a = u.tn.buildInit.get(), o = 0; o < a.length; o++) switch (a[o].property) {
                  case "scale":
                  case "rotateX":
                  case "rotateY":
                  case "rotateZ":
                  case "translateX":
                  case "translateY":
                  case "translateZ":
                      n.CSSTransformSet(a[o].element, a[o].property, a[o].value), n.CSSTransformApply(a[o].element);
                      break;
                  case "blur":
                  case "brightness":
                  case "grayscale":
                  case "sepia":
                  case "contrast":
                  case "opacity":
                  case "saturate":
                      n.CSSFilterSet(a[o].element, a[o].property, a[o].value), n.CSSFilterApply(a[o].element);
                      break;
                  default:
                      n.$getElt(a[o].element).css(a[o].property, a[o].value)
              }
              var r = u.tn.hoverEffects.get();
              for (o = 0; o < r.length; o++)
                  if (!0 === r[o].firstKeyframe) switch (r[o].type) {
                      case "scale":
                      case "rotateX":
                      case "rotateY":
                      case "rotateZ":
                      case "translateX":
                      case "translateY":
                      case "translateZ":
                          n.CSSTransformSet(r[o].element, r[o].type, r[o].from), n.CSSTransformApply(r[o].element);
                          break;
                      case "blur":
                      case "brightness":
                      case "grayscale":
                      case "sepia":
                      case "contrast":
                      case "opacity":
                      case "saturate":
                          n.CSSFilterSet(r[o].element, r[o].type, r[o].from), n.CSSFilterApply(r[o].element);
                          break;
                      default:
                          n.$getElt(r[o].element).css(r[o].type, r[o].from)
                  }
              n.hoverInitDone = !0
          }
      }

      function U() {
          if (-1 != u.GOM.albumIdx)
              for (var e = u.GOM.items.length, t = 0; t < e; t++) H(t), u.I[u.GOM.items[t].thumbnailIdx].hovered = !1
      }

      function W(e) {
          if (-1 != u.GOM.albumIdx && u.galleryResizeEventEnabled && u.GOM.slider.hostIdx != e) {
              var t = u.GOM.items[e],
                  n = u.I[t.thumbnailIdx];
              if ("albumUp" != n.kind && null != n.$elt) {
                  n.hovered = !0;
                  var i = u.O.fnThumbnailHover;
                  null !== i && ("function" == typeof i ? i(n.$elt, n, e) : window[i](n.$elt, n, e));
                  var a = u.tn.hoverEffects.get();
                  try {
                      for (var o = 0; o < a.length; o++) !0 === a[o].hoverin && n.animate(a[o], 0, !0)
                  } catch (e) {
                      h(u, "error on hover: " + e.message)
                  }
              }
          }
      }

      function j() {
          if (-1 != u.GOM.albumIdx)
              for (var e = u.GOM.items.length, t = 0; t < e; t++) u.GOM.items[t].inDisplayArea ? X(t) : u.I[u.GOM.items[t].thumbnailIdx].hovered = !1
      }

      function X(e) {
          if (-1 != u.GOM.albumIdx && u.galleryResizeEventEnabled && u.GOM.slider.hostIdx != e) {
              var t = u.GOM.items[e],
                  n = u.I[t.thumbnailIdx];
              if ("albumUp" != n.kind && n.hovered && (n.hovered = !1, null != n.$elt)) {
                  var i = u.O.fnThumbnailHoverOut;
                  null !== i && ("function" == typeof i ? i(n.$elt, n, e) : window[i](n.$elt, n, e));
                  var a = u.tn.hoverEffects.get();
                  try {
                      for (var o = 0; o < a.length; o++) !0 === a[o].hoverout && n.animate(a[o], 0, !1)
                  } catch (e) {
                      h(u, "error on hoverOut: " + e.message)
                  }
              }
          }
      }

      function Q(e, t) {
          u.O.debugMode && console.log("#DisplayPhoto : " + t + "-" + e);
          var n = NGY2Item.GetIdx(u, t);
          u.GOM.curNavLevel = 0 == n ? "l1" : "lN", -1 == n && "" != u.O.kind && NGY2Item.New(u, "", "", t, "0", "album");
          var i = NGY2Item.GetIdx(u, e); - 1 != i ? (u.O.debugMode && console.log("#DisplayPhoto : " + i), we(i)) : q(t, Q, e, t)
      }

      function q(e, t, n, i) {
          switch (u.O.kind) {
              case "":
                  ! function(e, t, n) {
                      if (!0 === u.markupOrApiProcessed) return void g("-1", 0);
                      if (void 0 !== u.O.items && null !== u.O.items) K();
                      else {
                          if (!(u.O.$markup.length > 0)) return void d(u, "error: no media to process.");
                          te(u.O.$markup), u.O.$markup = []
                      }
                      u.markupOrApiProcessed = !0, null != e && e(t, n, null)
                  }(t, n, i);
                  break;
              default:
                  jQuery.nanogallery2["data_" + u.O.kind](u, "AlbumGetContent", e, t, n, i)
          }
      }
      this.initiateGallery2 = function(e, t) {
          if (u.O = t, u.$E.base = jQuery(e), u.baseEltID = u.$E.base.attr("id"), null == u.baseEltID) {
              for (var n = "", i = !0; i;) document.getElementById("my_nanogallery" + n) ? "" == n ? n = 1 : n++ : (i = !1, u.baseEltID = "my_nanogallery" + n);
              u.$E.base.attr("id", u.baseEltID)
          }
          if (u.O.$markup = [], function() {
                  "PICASA" != u.O.kind.toUpperCase() && "GOOGLE" != u.O.kind.toUpperCase() || (u.O.kind = "google2");
                  u.GOM.cache.viewport = a(), u.GOM.curWidth = ht(), jQuery.extend(!0, u.tn.toolbar.image, u.O.thumbnailToolbarImage), jQuery.extend(!0, u.tn.toolbar.album, u.O.thumbnailToolbarAlbum);
                  for (var e = ["image", "album"], t = ["topLeft", "topRight", "bottomLeft", "bottomRight"], n = 0; n < e.length; n++)
                      for (var i = 0; i < t.length; i++) u.tn.toolbar[e[n]][t[i]] = u.tn.toolbar[e[n]][t[i]].toUpperCase();
                  "overImageOnBottom" == u.O.thumbnailLabel.position && (u.O.thumbnailLabel.valign = "bottom", u.O.thumbnailLabel.position = "overImage");
                  "overImageOnMiddle" == u.O.thumbnailLabel.position && (u.O.thumbnailLabel.valign = "middle", u.O.thumbnailLabel.position = "overImage");
                  "overImageOnTop" == u.O.thumbnailLabel.position && (u.O.thumbnailLabel.valign = "top", u.O.thumbnailLabel.position = "overImage");
                  void 0 !== u.O.thumbnailL1Label && void 0 !== u.O.thumbnailL1Label.position && ("overImageOnBottom" == u.O.thumbnailL1Label.position && (u.O.thumbnailL1Label.valign = "bottom", u.O.thumbnailL1Label.position = "overImage"), "overImageOnMiddle" == u.O.thumbnailL1Label.position && (u.O.thumbnailL1Label.valign = "middle", u.O.thumbnailL1Label.position = "overImage"), "overImageOnTop" == u.O.thumbnailL1Label.position && (u.O.thumbnailL1Label.valign = "top", u.O.thumbnailL1Label.position = "overImage"));
                  u.O.thumbnailLabel.get = function(e) {
                      return "l1" == u.GOM.curNavLevel && void 0 !== u.O.thumbnailL1Label && void 0 !== u.O.thumbnailL1Label[e] ? u.O.thumbnailL1Label[e] : u.O.thumbnailLabel[e]
                  }, u.O.thumbnailLabel.set = function(e, t) {
                      "l1" == u.GOM.curNavLevel && void 0 !== u.O.thumbnailL1Label && void 0 !== u.O.thumbnailL1Label[e] ? u.O.thumbnailL1Label[e] = t : u.O.thumbnailLabel[e] = t
                  }, "" != u.O.blockList && (u.blockList = u.O.blockList.toUpperCase().split("|"));
                  "" != u.O.allowList && (u.allowList = u.O.allowList.toUpperCase().split("|"));
                  if (void 0 !== u.O.albumList2 && null !== u.O.albumList2 && u.O.albumList2.constructor === Array) {
                      var o = u.O.albumList2.length;
                      for (n = 0; n < o; n++) u.albumList.push(u.O.albumList2[n])
                  }
                  void 0 !== u.O.albumList2 && "string" == typeof u.O.albumList2 && u.albumList.push(u.O.albumList2);

                  function l(e, t, n) {
                      u.tn.opt.lN[n] = u.O[e], u.tn.opt.l1[n] = u.O[e], "number" == r(u.O[t]) && (u.tn.opt.l1[n] = u.O[t])
                  }

                  function s(e, t, n) {
                      u.tn.settings[e][t].xs = n, u.tn.settings[e][t].sm = n, u.tn.settings[e][t].me = n, u.tn.settings[e][t].la = n, u.tn.settings[e][t].xl = n
                  }

                  function c(e, t, n) {
                      var i = u.O[e];
                      if (null != i)
                          if ("number" == r(i) || -1 == i.indexOf(" ")) {
                              var a = "auto";
                              "auto" != i && (a = parseInt(i)), s(t, n, a)
                          } else {
                              var o = i.split(" ");
                              if (o.length > 0 && +o[0] == +o[0]) {
                                  a = "auto";
                                  "auto" != o[0] && (a = parseInt(o[0])), s(t, n, a)
                              }
                              for (var l = 1; l < o.length; l++)
                                  if (/^xs|sm|me|la|xl/i.test(o[l])) {
                                      var c = o[l].substring(0, 2).toLowerCase(),
                                          h = o[l].substring(2);
                                      a = "auto";
                                      "auto" != h && (a = parseInt(h)), u.tn.settings[t][n][c] = a
                                  }
                          }
                  }
                  u.tn.opt.lN.crop = u.O.thumbnailCrop, u.tn.opt.l1.crop = null != u.O.thumbnailL1Crop ? u.O.thumbnailL1Crop : u.O.thumbnailCrop, l("thumbnailStacks", "thumbnailL1Stacks", "stacks"), l("thumbnailStacksTranslateX", "thumbnailL1StacksTranslateX", "stacksTranslateX"), l("thumbnailStacksTranslateY", "thumbnailL1StacksTranslateY", "stacksTranslateY"), l("thumbnailStacksTranslateZ", "thumbnailL1StacksTranslateZ", "stacksTranslateZ"), l("thumbnailStacksRotateX", "thumbnailL1StacksRotateX", "stacksRotateX"), l("thumbnailStacksRotateY", "thumbnailL1StacksRotateY", "stacksRotateY"), l("thumbnailStacksRotateZ", "thumbnailL1StacksRotateZ", "stacksRotateZ"), l("thumbnailStacksScale", "thumbnailL1StacksScale", "stacksScale"), l("thumbnailBorderHorizontal", "thumbnailL1BorderHorizontal", "borderHorizontal"), l("thumbnailBorderVertical", "thumbnailL1BorderVertical", "borderVertical"), l("thumbnailBaseGridHeight", "thumbnailL1BaseGridHeight", "baseGridHeight"), c("thumbnailGutterWidth", "gutterWidth", "lN"), c("thumbnailGutterWidth", "gutterWidth", "l1"), c("thumbnailL1GutterWidth", "gutterWidth", "l1"), c("thumbnailGutterHeight", "gutterHeight", "lN"), c("thumbnailGutterHeight", "gutterHeight", "l1"), c("thumbnailL1GutterHeight", "gutterHeight", "l1"), u.galleryDisplayMode.lN = u.O.galleryDisplayMode.toUpperCase(), u.galleryDisplayMode.l1 = null != u.O.galleryL1DisplayMode ? u.O.galleryL1DisplayMode.toUpperCase() : u.O.galleryDisplayMode.toUpperCase(), u.galleryMaxRows.lN = u.O.galleryMaxRows, u.galleryMaxRows.l1 = "number" == r(u.O.galleryL1MaxRows) ? u.O.galleryL1MaxRows : u.O.galleryMaxRows, u.galleryLastRowFull.lN = u.O.galleryLastRowFull, u.galleryLastRowFull.l1 = null != u.O.galleryL1LastRowFull ? u.O.galleryL1LastRowFull : u.O.galleryLastRowFull, u.gallerySorting.lN = u.O.gallerySorting.toUpperCase(), u.gallerySorting.l1 = null != u.O.galleryL1Sorting ? u.O.galleryL1Sorting.toUpperCase() : u.gallerySorting.lN, u.galleryDisplayTransition.lN = u.O.galleryDisplayTransition.toUpperCase(), u.galleryDisplayTransition.l1 = null != u.O.galleryL1DisplayTransition ? u.O.galleryL1DisplayTransition.toUpperCase() : u.galleryDisplayTransition.lN, u.galleryDisplayTransitionDuration.lN = u.O.galleryDisplayTransitionDuration, u.galleryDisplayTransitionDuration.l1 = null != u.O.galleryL1DisplayTransitionDuration ? u.O.galleryL1DisplayTransitionDuration : u.galleryDisplayTransitionDuration.lN, u.galleryMaxItems.lN = u.O.galleryMaxItems, u.galleryMaxItems.l1 = "number" == r(u.O.galleryL1MaxItems) ? u.O.galleryL1MaxItems : u.O.galleryMaxItems, u.galleryFilterTags.lN = u.O.galleryFilterTags, u.galleryFilterTags.l1 = null != u.O.galleryL1FilterTags ? u.O.galleryL1FilterTags : u.O.galleryFilterTags, u.galleryFilterTagsMode.lN = u.O.galleryFilterTagsMode, u.galleryFilterTagsMode.l1 = null != u.O.galleryL1FilterTagsMode ? u.O.galleryL1FilterTagsMode : u.O.galleryFilterTagsMode, u.O.galleryPaginationMode = u.O.galleryPaginationMode.toUpperCase(), "number" == r(u.O.slideshowDelay) && u.O.slideshowDelay >= 2e3 ? u.VOM.slideshowDelay = u.O.slideshowDelay : d(u, 'Parameter "slideshowDelay" must be an integer >= 2000 ms.');
                  "boolean" == typeof u.O.thumbnailDisplayTransition && (!0 === u.O.thumbnailDisplayTransition ? (u.tn.opt.lN.displayTransition = "FADEIN", u.tn.opt.l1.displayTransition = "FADEIN") : (u.tn.opt.lN.displayTransition = "NONE", u.tn.opt.l1.displayTransition = "NONE"));
                  "" !== u.O.fnThumbnailDisplayEffect && (u.tn.opt.lN.displayTransition = "CUSTOM", u.tn.opt.l1.displayTransition = "CUSTOM");
                  "" !== u.O.fnThumbnailL1DisplayEffect && (u.tn.opt.l1.displayTransition = "CUSTOM");

                  function m(e, t) {
                      if ("string" == typeof e) {
                          var n = e.split("_");
                          1 == n.length && (u.tn.opt[t].displayTransition = e.toUpperCase()), 2 == n.length && (u.tn.opt[t].displayTransition = n[0].toUpperCase(), u.tn.opt[t].displayTransitionStartVal = Number(n[1])), 3 == n.length && (u.tn.opt[t].displayTransition = n[0].toUpperCase(), u.tn.opt[t].displayTransitionStartVal = Number(n[1]), u.tn.opt[t].displayTransitionEasing = n[2])
                      }
                  }
                  l("thumbnailDisplayTransitionEasing", "thumbnailL1DisplayTransitionEasing", "displayTransitionEasing"), m(u.O.thumbnailDisplayTransition, "lN"), m(u.O.thumbnailDisplayTransition, "l1"), m(u.O.thumbnailL1DisplayTransition, "l1"), l("thumbnailDisplayTransitionDuration", "thumbnailL1DisplayTransitionDuration", "displayTransitionDuration"), l("thumbnailDisplayInterval", "thumbnailL1DisplayInterval", "displayInterval"), l("thumbnailDisplayOrder", "thumbnailL1DisplayOrder", "displayOrder"), void 0 !== u.O.thumbnailSizeSM && (u.O.breakpointSizeSM = u.O.thumbnailSizeSM);
                  void 0 !== u.O.thumbnailSizeME && (u.O.breakpointSizeME = u.O.thumbnailSizeME);
                  void 0 !== u.O.thumbnailSizeLA && (u.O.breakpointSizeLA = u.O.thumbnailSizeLA);
                  void 0 !== u.O.thumbnailSizeXL && (u.O.breakpointSizeXL = u.O.thumbnailSizeXL);
                  if (void 0 !== u.O.thumbnailL1BuildInit2) {
                      var p = u.O.thumbnailL1BuildInit2.split("|");
                      for (n = 0; n < p.length; n++) {
                          if (3 == (g = p[n].trim().split("_")).length)(f = re()).element = ie(g[0], ""), f.property = g[1], f.value = g[2], u.tn.buildInit.level1.push(f)
                      }
                  }
                  if (void 0 !== u.O.thumbnailBuildInit2)
                      for (p = u.O.thumbnailBuildInit2.split("|"), n = 0; n < p.length; n++) {
                          var g, f;
                          if (3 == (g = p[n].trim().split("_")).length)(f = re()).element = ie(g[0], ""), f.property = g[1], f.value = g[2], u.tn.buildInit.std.push(f)
                      }
                  var b = u.O.thumbnailL1HoverEffect2;
                  if (void 0 !== b) switch (r(b)) {
                      case "string":
                          {
                              let e = b.split("|");
                              for (n = 0; n < e.length; n++) {
                                  let t = oe();
                                  t = ne(e[n].trim(), t), null != t && u.tn.hoverEffects.level1.push(t)
                              }
                              break
                          }
                      case "object":
                          {
                              let e = oe();e = jQuery.extend(e, b),
                              e = ne(e.name, e),
                              null != e && u.tn.hoverEffects.level1.push(e);
                              break
                          }
                      case "array":
                          for (n = 0; n < b.length; n++) {
                              let e = oe();
                              e = jQuery.extend(e, b[n]), e = ne(e.name, e), null != e && u.tn.hoverEffects.level1.push(e)
                          }
                          break;
                      case "null":
                          break;
                      default:
                          h(u, 'incorrect parameter for "thumbnailL1HoverEffect2".')
                  }
                  u.tn.hoverEffects.level1 = ae(u.tn.hoverEffects.level1);
                  var v = u.O.thumbnailHoverEffect2;
                  switch (r(v)) {
                      case "string":
                          {
                              let e = v.split("|");
                              for (n = 0; n < e.length; n++) {
                                  let t = oe();
                                  t = ne(e[n].trim(), t), null != t && u.tn.hoverEffects.std.push(t)
                              }
                              break
                          }
                      case "object":
                          {
                              let e = oe();e = jQuery.extend(e, v),
                              e = ne(e.name, e),
                              null != e && u.tn.hoverEffects.std.push(e);
                              break
                          }
                      case "array":
                          for (n = 0; n < v.length; n++) {
                              let e = oe();
                              e = jQuery.extend(e, v[n]), e = ne(e.name, e), null != e && u.tn.hoverEffects.std.push(e)
                          }
                          break;
                      case "null":
                          break;
                      default:
                          h(u, 'incorrect parameter for "thumbnailHoverEffect2".')
                  }
                  u.tn.hoverEffects.std = ae(u.tn.hoverEffects.std), null == u.O.touchAnimationL1 && (u.O.touchAnimationL1 = u.O.touchAnimation);
                  0 == u.tn.hoverEffects.std.length && (0 == u.tn.hoverEffects.level1.length && (u.O.touchAnimationL1 = !1), u.O.touchAnimation = !1);
                  0 != u.O.thumbnailHeight && "" != u.O.thumbnailHeight || (u.O.thumbnailHeight = "auto");
                  0 != u.O.thumbnailWidth && "" != u.O.thumbnailWidth || (u.O.thumbnailWidth = "auto");
                  0 != u.O.thumbnailL1Height && "" != u.O.thumbnailL1Height || (u.O.thumbnailL1Height = "auto");
                  0 != u.O.thumbnailL1Width && "" != u.O.thumbnailL1Width || (u.O.thumbnailL1Width = "auto");
                  c("thumbnailWidth", "width", "lN"), c("thumbnailWidth", "width", "l1"), c("thumbnailL1Width", "width", "l1"), c("thumbnailHeight", "height", "lN"), c("thumbnailHeight", "height", "l1"), c("thumbnailL1Height", "height", "l1"), u.O.thumbnailLabelHeight = parseInt(u.O.thumbnailLabelHeight), null != u.O.galleryMosaic && (u.tn.settings.mosaic.l1.xs = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.l1.sm = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.l1.me = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.l1.la = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.l1.xl = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.lN.xs = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.lN.sm = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.lN.me = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.lN.la = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaic.lN.xl = JSON.parse(JSON.stringify(u.O.galleryMosaic)), u.tn.settings.mosaicCalcFactor("l1", "xs"), u.tn.settings.mosaicCalcFactor("l1", "sm"), u.tn.settings.mosaicCalcFactor("l1", "me"), u.tn.settings.mosaicCalcFactor("l1", "la"), u.tn.settings.mosaicCalcFactor("l1", "xl"), u.tn.settings.mosaicCalcFactor("lN", "xs"), u.tn.settings.mosaicCalcFactor("lN", "sm"), u.tn.settings.mosaicCalcFactor("lN", "me"), u.tn.settings.mosaicCalcFactor("lN", "la"), u.tn.settings.mosaicCalcFactor("lN", "xl"));
                  null != u.O.galleryL1Mosaic && (u.tn.settings.mosaic.l1.xs = JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)), u.tn.settings.mosaic.l1.sm = JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)), u.tn.settings.mosaic.l1.me = JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)), u.tn.settings.mosaic.l1.la = JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)), u.tn.settings.mosaic.l1.xl = JSON.parse(JSON.stringify(u.O.galleryL1Mosaic)), u.tn.settings.mosaicCalcFactor("l1", "xs"), u.tn.settings.mosaicCalcFactor("l1", "sm"), u.tn.settings.mosaicCalcFactor("l1", "me"), u.tn.settings.mosaicCalcFactor("l1", "la"), u.tn.settings.mosaicCalcFactor("l1", "xl"));
                  for (var O = ["xs", "sm", "me", "la", "xl"], y = 0; y < O.length; y++) null != u.O["galleryMosaic" + O[y].toUpperCase()] && (u.tn.settings.mosaic.lN[O[y]] = JSON.parse(JSON.stringify(u.O["galleryMosaic" + O[y].toUpperCase()])), u.tn.settings.mosaic.l1[O[y]] = JSON.parse(JSON.stringify(u.O["galleryMosaic" + O[y].toUpperCase()])), u.tn.settings.mosaicCalcFactor("lN", O[y]), u.tn.settings.mosaicCalcFactor("l1", O[y]));
                  for (y = 0; y < O.length; y++) null != u.O["galleryL1Mosaic" + O[y].toUpperCase()] && (u.tn.settings.mosaic.l1[O[y]] = JSON.parse(JSON.stringify(u.O["galleryL1Mosaic" + O[y].toUpperCase()])), u.tn.settings.mosaicCalcFactor("l1", O[y]));
                  switch (u.O.imageTransition = u.O.imageTransition.toUpperCase(), u.layout.SetEngine(), u.O.kind) {
                      case "":
                          break;
                      default:
                          jQuery.nanogallery2["data_" + u.O.kind](u, "Init")
                  }
              }(), function() {
                  Function.prototype.bind || (Function.prototype.bind = function(e) {
                      if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                      var t = Array.prototype.slice.call(arguments, 1),
                          n = this,
                          i = function() {},
                          a = function() {
                              return n.apply(this instanceof i && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                          };
                      return i.prototype = this.prototype, a.prototype = new i, a
                  });
                  // thanks to @lichtamberg - https://github.com/lichtamberg
                  (function() {
                      for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                      window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                          var i = (new Date).getTime(),
                              a = Math.max(0, 16 - (i - e)),
                              o = window.setTimeout((function() {
                                  t(i + a)
                              }), a);
                          return e = i + a, o
                      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                          clearTimeout(e)
                      })
                  })(), Array.prototype.ngy2removeIf = function(e) {
                      for (var t = this.length; t--;) e(this[t], t) && this.splice(t, 1)
                  }, String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                      return t = t || 0, this.indexOf(e, t) === t
                  })
              }(), function() {
                  var e = u.$E.base.children();
                  e.length > 0 && (u.O.$markup = e);
                  if (!u.O.lightboxStandalone) {
                      u.$E.base.text(""), u.$E.base.addClass("ngy2_container"), u.$E.base.addClass(u.O.theme),
                          function() {
                              void 0 !== u.O.colorScheme && (u.O.galleryTheme = u.O.colorScheme);
                              var e = null,
                                  t = "";
                              switch (r(u.O.galleryTheme)) {
                                  case "object":
                                      e = u.galleryTheme_dark, jQuery.extend(!0, e, u.O.galleryTheme), t = "nanogallery_gallerytheme_custom_" + u.baseEltID;
                                      break;
                                  case "string":
                                      switch (u.O.galleryTheme) {
                                          case "light":
                                              e = u.galleryTheme_light, t = "nanogallery_gallerytheme_light_" + u.baseEltID;
                                              break;
                                          case "default":
                                          case "dark":
                                          case "none":
                                          default:
                                              e = u.galleryTheme_dark, t = "nanogallery_gallerytheme_dark_" + u.baseEltID
                                      }
                                      break;
                                  default:
                                      return void h(u, "Error in galleryTheme parameter.")
                              }
                              var n = "." + t + " ",
                                  i = e.navigationBar,
                                  a = n + ".nGY2Navigationbar { background:" + i.background + "; }\n";
                              void 0 !== i.border && "" !== i.border && (a += n + ".nGY2Navigationbar { border:" + i.border + "; }\n");
                              void 0 !== i.borderTop && "" !== i.borderTop && (a += n + ".nGY2Navigationbar { border-top:" + i.borderTop + "; }\n");
                              void 0 !== i.borderBottom && "" !== i.borderBottom && (a += n + ".nGY2Navigationbar { border-bottom:" + i.borderBottom + "; }\n");
                              void 0 !== i.borderRight && "" !== i.borderRight && (a += n + ".nGY2Navigationbar { border-right:" + i.borderRight + "; }\n");
                              void 0 !== i.borderLeft && "" !== i.borderLeft && (a += n + ".nGY2Navigationbar { border-left:" + i.borderLeft + "; }\n");
                              i = e.navigationBreadcrumb;
                              a += n + ".nGY2Breadcrumb { background:" + i.background + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2Breadcrumb .oneItem  { color:" + i.color + "; }\n", a += n + ".nGY2Breadcrumb .oneItem:hover { color:" + i.colorHover + "; }\n";
                              i = e.navigationFilter;
                              a += n + ".nGY2NavFilterUnselected { color:" + i.color + "; background:" + i.background + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2NavFilterSelected { color:" + i.colorSelected + "; background:" + i.backgroundSelected + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2NavFilterSelectAll { color:" + i.colorSelected + "; background:" + i.background + "; border-radius:" + i.borderRadius + "; }\n";
                              i = e.navigationPagination;
                              a += n + ".nGY2NavPagination { color:" + i.color + "; background:" + i.background + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2NavPagination:hover { color:" + i.colorHover + "; }\n";
                              i = e.thumbnail;
                              a += n + ".nGY2GThumbnail { border-radius: " + i.borderRadius + "; background:" + i.background + "; border-color:" + i.borderColor + "; }\n", a += n + ".nGY2GThumbnail_l1 { border-top-width:" + u.tn.opt.l1.borderVertical + "px; border-right-width:" + u.tn.opt.l1.borderHorizontal + "px; border-bottom-width:" + u.tn.opt.l1.borderVertical + "px; border-left-width:" + u.tn.opt.l1.borderHorizontal + "px;}\n", a += n + ".nGY2GThumbnail_lN { border-top-width:" + u.tn.opt.lN.borderVertical + "px; border-right-width:" + u.tn.opt.lN.borderHorizontal + "px; border-bottom-width:" + u.tn.opt.lN.borderVertical + "px; border-left-width:" + u.tn.opt.lN.borderHorizontal + "px;}\n", a += n + ".nGY2GThumbnailStack { background:" + i.stackBackground + "; }\n", a += n + ".nGY2TnImgBack { background:" + i.background + "; background-image:" + i.backgroundImage + "; }\n", a += n + ".nGY2GThumbnailAlbumUp { background:" + i.background + "; background-image:" + i.backgroundImage + "; color:" + e.thumbnail.titleColor + "; }\n", a += n + ".nGY2GThumbnailIconsFullThumbnail { color:" + i.titleColor + "; }\n", a += n + ".nGY2GThumbnailLabel { background:" + i.labelBackground + "; opacity:" + i.labelOpacity + "; }\n", a += n + ".nGY2GThumbnailImageTitle  { color:" + i.titleColor + "; background-color:" + i.titleBgColor + "; " + ("" == i.titleShadow ? "" : "Text-Shadow:" + i.titleShadow + ";") + " }\n", a += n + ".nGY2GThumbnailAlbumTitle { color:" + i.titleColor + "; background-color:" + i.titleBgColor + "; " + ("" == i.titleShadow ? "" : "Text-Shadow:" + i.titleShadow + ";") + " }\n", a += n + ".nGY2GThumbnailDescription { color:" + i.descriptionColor + "; background-color:" + i.descriptionBgColor + "; " + ("" == i.descriptionShadow ? "" : "Text-Shadow:" + i.descriptionShadow + ";") + " }\n";
                              i = e.thumbnailIcon;
                              a += n + ".nGY2GThumbnailIcons { padding:" + i.padding + "; }\n", a += n + ".nGY2GThumbnailIcon { color:" + i.color + "; " + ("" == i.shadow ? "" : "Text-Shadow:" + i.shadow + ";") + " }\n", a += n + ".nGY2GThumbnailIconTextBadge { background-color:" + i.color + "; }\n";
                              i = e.pagination;
                              "NUMBERS" != u.O.galleryPaginationMode ? (a += n + ".nGY2paginationDot { border:" + i.shapeBorder + "; background:" + i.shapeColor + ";}\n", a += n + ".nGY2paginationDotCurrentPage { border:" + i.shapeBorder + "; background:" + i.shapeSelectedColor + ";}\n", a += n + ".nGY2paginationRectangle { border:" + i.shapeBorder + "; background:" + i.shapeColor + ";}\n", a += n + ".nGY2paginationRectangleCurrentPage { border:" + i.shapeBorder + "; background:" + i.shapeSelectedColor + ";}\n") : (a += n + ".nGY2paginationItem { background:" + i.background + "; color:" + i.color + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2paginationItemCurrentPage { background:" + i.background + "; color:" + i.color + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2PaginationPrev { background:" + i.background + "; color:" + i.color + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2PaginationNext { background:" + i.background + "; color:" + i.color + "; border-radius:" + i.borderRadius + "; }\n", a += n + ".nGY2paginationItemCurrentPage { background:" + i.backgroundSelected + "; }\n");
                              i = e.thumbnail;
                              a += n + ".nGY2GalleryMoreButtonAnnotation { background:" + i.background + "; border-color:" + i.borderColor + "; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;}\n", a += n + ".nGY2GalleryMoreButtonAnnotation  { color:" + i.titleColor + "; " + ("" == i.titleShadow ? "" : "Text-Shadow:" + i.titleShadow) + "; }\n", jQuery("head").append('<style id="ngycs_' + u.baseEltID + '">' + a + "</style>"), u.$E.base.addClass(t)
                          }(), u.O.thumbnailLabel.get("hideIcons") && (u.O.icons.thumbnailAlbum = "", u.O.icons.thumbnailImage = "");
                      var t = "";
                      switch (null != u.O.navigationFontSize && "" != u.O.navigationFontSize && (t = ' style="font-size:' + u.O.navigationFontSize + ';"'), u.$E.conNavigationBar = jQuery('<div class="nGY2Navigationbar" ' + t + "></div>").appendTo(u.$E.base), u.$E.conLoadingB = jQuery('<div class="nanoGalleryLBarOff"><div></div><div></div><div></div><div></div><div></div></div>').appendTo(u.$E.base), u.$E.conTnParent = jQuery('<div class="nGY2Gallery"></div>').appendTo(u.$E.base), u.$E.conTn = jQuery('<div class="nGY2GallerySub"></div>').appendTo(u.$E.conTnParent), u.O.thumbnailAlignment) {
                          case "left":
                              u.$E.conTnParent.css({
                                  "text-align": "left"
                              });
                              break;
                          case "right":
                              u.$E.conTnParent.css({
                                  "text-align": "right"
                              })
                      }
                      if (void 0 !== u.O.galleryBuildInit2)
                          for (var n = u.O.galleryBuildInit2.split("|"), i = 0; i < n.length; i++) {
                              var a = n[i].split("_");
                              2 == a.length && u.$E.conTn.css(a[0], a[1])
                          }
                      for (var o = u.tn.hoverEffects.std.concat(u.tn.hoverEffects.level1), l = 0; l < o.length; l++) switch (o[l].type) {
                          case "scale":
                          case "rotateZ":
                          case "rotateX":
                          case "rotateY":
                          case "translateX":
                          case "translateY":
                              ".nGY2GThumbnail" == o[l].element && (u.$E.base.css("overflow", "visible"), u.$E.base.find(".nGY2GallerySub").css("overflow", "visible"), u.$E.conTnParent.css("overflow", "visible"))
                      }
                      if (u.$E.conTnBottom = jQuery('<div class="nGY2GalleryBottom" ' + t + "></div>").appendTo(u.$E.conTnParent), u.O.portable) {
                          var s = "font-weight:bold !important;color: #FF0075 !important;font-size: 14px !important;text-transform: lowercase !important;cursor:pointer !important;text-align: center !important;Text-Shadow: #000000 1px 0px 0px, #000000 1px 1px 0px, #000000 1px -1px 0px, #000000 -1px 1px 0px, #000000 -1px 0px 0px, #000000 -1px -1px 0px, #000000 0px 1px 0px, #000000 0px -1px 0px !important;";
                          u.$E.ngy2i = jQuery('<div class="nGY2PortInfo"><a href="http://nano.gallery" target="_blank" title="nanogallery2 | easy photo gallery for your website" style="' + s + '"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QgDBCAWVVC/hwAABRxJREFUSMetll9oVFcexz/nnDvJRBmSzWTrmD9uNGZsHta0/qFIFQTxRcnCBgTFNlX0YR8W+1AK9lGwCBJYgn0KKr5136S4gpUQTR4caJRslcxYWV3iaphQapJJppO5957z60Mmk4mN1q75wg/OPefc+/v9vt/fueenKEFEqICqsNWAVNiCA7XwaS0iZeejo6OIiCltdIBdJXMLOYp5/PjxsoTVS5nr0mYDJIE/lObeBhaYAn4oJbboAwBvBedHJicnPx8YGGh/8eJF1dvKoJSShoYGf//+/Zl4PP4l8M2yIEoSLErx6c2bN6W1tXVRglWzLVu2SCqVEhE5LiI457SIoEREW2udMaZtcnLy+2QyWZ3L5XRHR4f+4MNdoBUahUJhcWilmZ/NE4ZhOQHn3LIi1lqjtS6vjY6O8uTJE9vc3MyDBw+mYrHYn0Uk63me8gCtlHLA7uHh4bW5XC7oePddPTQ8xHffDjM/PYe3thqMws35iAcHPj5ENBp9Yxmy2Sw7d+40z549C+7du9ewb9++D6y13wDaK+kE0DAzMyNKKbXtvfd5EfzM+Ef/4C+8x23+wzPm+IhtfMf3/Ksuyl+7u9FaY63l+vXrpFIpCoUCmzdvpquri9bWVoIgQClFIpFg48aNPH/+XE9NTQkQLTGmvEXKRERprZWIEIYhQRjQbN6hmUb+tCaPNnM055v40f3If7XBGMPT8af0fNLD0NDQsozPnDlDb28vx44dIwxDRARrLSKCKmUbiUQQkWWnoLJ20UpjFYAjVA6rBJTFV5ZIJIIfBBw4eICxsTHq6uo4dOgQ8XicgYEB7t69y/Hjx4nH43R1dVHB8q+w4hlXSmGd5edwmjCco5DLkZ+aJvTnyIdTrFmzhn9+/TVjY2M0NTVx+/Zt+vv7OXfuHKlUip6eHgBOnz6N7/vlYl0JKzIw78/T+sdGbn6yjf5ZS2HtJgIP+mcC5kySI1uSXPjqAlprTp06RWdnJ8ViEaUUVVVVnD9/nqtXr5LJZHj48CFbt279fQEEYUisZi2fXel9bWU750gmkwRBgNYaz/Ow1lJfX088Hmd2dpZcLvdaBl4pgQChH4B1iHU4a8E6Qj9ARGhpaUFrzeDgIJFIBGMM1lqMMWQyGSYmJohEIqxfv/7314CIoADtGTAaZTTaLI2VUhw+fBjnHBcvXuTy5cs45/A8j3Q6zcmTJ/F9n71799LW1rbgSOs3D+B1lBljcM7R3d3N0aNHKRQKnDhxgs7OTnbt2sX27dsZGRkhHo/T19e3+Kt/fQ1YawFwzolSCs/zUEqVtX1VcJcuXSKRSNDf3086nS6v79mzh76+Pjo6OigWi1RXV2OMWZC29PL8/PxSAL7vE41Gf4rFYkpEePToEb7vU1VVxW+ht7eXs2fPcv/+fQqFAps2baKlpaW8Xl1dTS6XY3x8HBFxtbW1BiiW4hAlInp8fNxt2LChPZvN/ru9vT2Sz+e93bt3qx07diwrzJWYcM5RU1NDNBots5bP53HOlS+kO3fuMDIy4hKJhKTT6ena2tqtxWJxoqamRr98HX9x7do1qaurExYaiXCVzK5bt04GBwdFRP728nVcWZAO+Hsmk/nsxo0bTTMzM5FXHZ83hYhQX1/vHzx48H9tbW1ngSsVvpYCmJ2dJRaLKRbapjpgOxB7K+9LmAbuAnOAnpiYcI2NjUsRLlo2myUMQ1M5t5rmnDO3bt1aNlfmd4W2XL/0/H8pUDF2rNCW/wLRuCkxx8V6wgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0wM1QwNDozMjoyMi0wNDowMO7mdkwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMDNUMDQ6MzI6MjItMDQ6MDCfu87wAAAAAElFTkSuQmCC" style="height:32px !important;width:initial !important;box-shadow: none !important;vertical-align: middle !important;"/> &nbsp; nanogallery2</a></div>').appendTo(u.$E.base), u.$E.ngy2i.find("a").on({
                              mouseenter: function() {
                                  jQuery(this).attr("style", s)
                              },
                              mouseleave: function() {
                                  jQuery(this).attr("style", s)
                              }
                          })
                      }
                  }
                  if (u.$E.conConsole = jQuery('<div class="nGY2ConsoleParent"></div>').appendTo(u.$E.base), function() {
                          u.i18nLang = (navigator.language || navigator.userLanguage).toUpperCase(), "UNDEFINED" === u.i18nLang && (u.i18nLang = "");
                          var e = -("_" + u.i18nLang).length;
                          if ("object" == r(u.O.i18n))
                              for (var t in u.O.i18n) {
                                  var n = t.substr(e);
                                  n == "_" + u.i18nLang ? u.i18nTranslations[t.substr(0, t.length - n.length)] = u.O.i18n[t] : u.i18nTranslations[t] = u.O.i18n[t]
                              }
                      }(), !u.O.lightboxStandalone) switch (function() {
                      le(u.O.thumbnailLabel, "lN"), void 0 !== u.O.thumbnailL1Label ? le(u.O.thumbnailL1Label, "l1") : le(u.O.thumbnailLabel, "l1");
                      u.O.thumbnailL1Label && u.O.thumbnailL1Label.display && le(u.O.thumbnailL1Label, "l1");
                      for (var e = ["xs", "sm", "me", "la", "xl"], t = 0; t < e.length; t++) {
                          if ("auto" != (i = u.tn.settings.width.lN[e[t]])) u.tn.defaultSize.width.lN[e[t]] = i, u.tn.defaultSize.width.l1[e[t]] = i;
                          else {
                              var n = u.tn.settings.height.lN[e[t]];
                              u.tn.defaultSize.width.lN[e[t]] = n, u.tn.defaultSize.width.l1[e[t]] = n
                          }
                      }
                      for (t = 0; t < e.length; t++) {
                          if ("auto" != (n = u.tn.settings.height.lN[e[t]])) u.tn.defaultSize.height.lN[e[t]] = n, u.tn.defaultSize.height.l1[e[t]] = n;
                          else {
                              var i = u.tn.settings.width.lN[e[t]];
                              u.tn.defaultSize.height.lN[e[t]] = i, u.tn.defaultSize.height.l1[e[t]] = i
                          }
                      }
                      for (t = 0; t < e.length; t++) {
                          if ("auto" != (i = u.tn.settings.width.l1[e[t]])) u.tn.defaultSize.width.l1[e[t]] = i;
                          else {
                              n = u.tn.settings.height.l1[e[t]];
                              u.tn.defaultSize.width.l1[e[t]] = n
                          }
                      }
                      for (t = 0; t < e.length; t++) {
                          if ("auto" != (n = u.tn.settings.height.l1[e[t]])) u.tn.defaultSize.height.l1[e[t]] = n;
                          else {
                              i = u.tn.settings.width.l1[e[t]];
                              u.tn.defaultSize.height.l1[e[t]] = i
                          }
                      }
                  }(), u.tn.opt.Get("displayTransition")) {
                      case "SCALEDOWN":
                      case "RANDOMSCALE":
                      default:
                          u.$E.base.css("overflow", "visible"), u.$E.conTnParent.css("overflow", "visible"), u.$E.conTn.css("overflow", "visible")
                  }
              }(), u.GOM.firstDisplayTime = Date.now(), function() {
                  u.O.lightboxStandalone || (u.$E.conTnParent.on({
                      mouseenter: be,
                      mouseleave: ve
                  }, ".nGY2GThumbnail"), u.GOM.hammertime = new NGHammer(u.$E.conTn[0]), u.GOM.hammertime.on("pan", (function(e) {
                      u.VOM.viewerDisplayed || u.O.paginationSwipe && u.layout.support.rows && "PAGINATION" == u.galleryDisplayMode.Get() && (Math.abs(e.deltaY) > u.GOM.panThreshold && (u.GOM.panYOnly = !0), u.GOM.panYOnly || u.$E.conTn.css(u.CSStransformName, "translate(" + e.deltaX + "px,0px)"))
                  })), u.GOM.hammertime.on("panend", (function(e) {
                      if (!u.VOM.viewerDisplayed && u.O.paginationSwipe && u.layout.support.rows && "PAGINATION" == u.galleryDisplayMode.Get()) {
                          if (!u.GOM.panYOnly) {
                              if (e.deltaX > 50) return void G();
                              if (e.deltaX < -50) return void y()
                          }
                          u.GOM.panYOnly = !1, u.$E.conTn.css(u.CSStransformName, "translate(0px,0px)")
                      }
                  })), u.GOM.hammertime.on("tap", (function(e) {
                      if (!u.VOM.viewerDisplayed)
                          if (e.srcEvent.stopPropagation(), e.srcEvent.preventDefault(), "mouse" == e.pointerType) {
                              if ("exit" == ue(e.srcEvent)) return
                          } else {
                              var t = Oe(e.srcEvent, !1);
                              if (-1 == t.GOMidx) return;
                              if ("NONE" != t.action && "OPEN" != t.action) return void ue(e.srcEvent);
                              if (u.GOM.slider.hostIdx == t.GOMidx) return j(), void ye(u.GOM.items[u.GOM.slider.currentIdx].thumbnailIdx, !0);
                              if ("l1" == u.GOM.curNavLevel && 0 == u.O.touchAnimationL1 || "lN" == u.GOM.curNavLevel && 0 == u.O.touchAnimation) return void ye(u.GOM.items[t.GOMidx].thumbnailIdx, !0);
                              u.O.touchAutoOpenDelay > 0 ? (j(), W(t.GOMidx), window.clearInterval(u.touchAutoOpenDelayTimerID), u.touchAutoOpenDelayTimerID = window.setInterval((function() {
                                  window.clearInterval(u.touchAutoOpenDelayTimerID), ye(u.GOM.items[t.GOMidx].thumbnailIdx, !0)
                              }), u.O.touchAutoOpenDelay)) : u.I[u.GOM.items[t.GOMidx].thumbnailIdx].hovered ? ye(u.GOM.items[t.GOMidx].thumbnailIdx, !0) : (j(), W(t.GOMidx))
                          }
                  })), u.O.locationHash && jQuery(window).on("hashchange.nanogallery2." + u.baseEltID, (function() {
                      ot()
                  })));
                  if (jQuery(window).on("resize.nanogallery2." + u.baseEltID + " orientationChange.nanogallery2." + u.baseEltID, s(lt, u.O.eventsDebounceDelay, !1)), jQuery(window).on("scroll.nanogallery2." + u.baseEltID, s(st, u.O.eventsDebounceDelay, !1)), !u.O.lightboxStandalone) {
                      u.$E.scrollableParent = it(u.$E.base[0]);
                      var e = it(u.$E.base[0]);
                      null !== e && (u.$E.scrollableParent = jQuery(e), u.$E.scrollableParent.on("scroll.nanogallery2." + u.baseEltID, s(st, u.O.eventsDebounceDelay, !1)))
                  }
                  u.VOM.toolsHide = s(Ye, u.O.viewerHideToolsDelay, !1), jQuery(document).keyup((function(e) {
                      if (u.popup.isDisplayed) switch (e.keyCode) {
                          case 27:
                              u.popup.close()
                      } else if (u.VOM.viewerDisplayed) switch (Ae(), e.keyCode) {
                          case 27:
                          case 40:
                          case 38:
                              tt();
                              break;
                          case 32:
                          case 13:
                              He();
                              break;
                          case 39:
                          case 33:
                              Qe();
                              break;
                          case 37:
                          case 34:
                              qe()
                      }
                  })), jQuery(window).bind("mousewheel wheel", (function(e) {
                      if (u.VOM.viewerDisplayed && "img" == u.VOM.content.current.NGY2Item().mediaKind) {
                          var t = 0;
                          e.preventDefault(), Ie() && (e.originalEvent.deltaY ? t = e.originalEvent.deltaY : e.originalEvent.wheelDelta && (t = -e.originalEvent.wheelDelta), Te(t <= 0))
                      }
                  })), jQuery(window).bind("mousemove", (function(e) {
                      u.VOM.viewerDisplayed && 0 == u.VOM.toolbarsDisplayed && (u.VOM.singletapTime = (new Date).getTime(), s(Ae, 100, !1)())
                  })), ngscreenfull.enabled && ngscreenfull.onchange((function() {
                      u.VOM.viewerDisplayed && (ngscreenfull.isFullscreen ? (u.VOM.viewerIsFullscreen = !0, u.VOM.$viewer.find(".fullscreenButton").html(u.O.icons.viewerFullscreenOff)) : (u.VOM.viewerIsFullscreen = !1, u.VOM.$viewer.find(".fullscreenButton").html(u.O.icons.viewerFullscreenOn)))
                  }))
              }(), !u.O.lightboxStandalone) {
              var o = u.O.album;
              if ("" == o && "" != u.O.photoset && (o = u.O.photoset, u.O.album = u.O.photoset), "" != o && (u.O.displayBreadcrumb = !1, "NONE" != o.toUpperCase())) return "nano_photos_provider2" == u.O.kind && o == decodeURIComponent(o) && (o = encodeURIComponent(o), u.O.album = o), NGY2Item.New(u, "", "", o, "-1", "album"), void(ot() || g("-1", o))
          }
          NGY2Item.New(u, u.i18nTranslations.breadcrumbHome, "", "0", "-1", "album"), ot() || function() {
              if (u.O.lightboxStandalone) ! function() {
                  if (u.GOM.curNavLevel = "l1", null == u.O.items) {
                      var e = jQuery("[data-nanogallery2-Lightbox"),
                          t = u.$E.base[0].dataset.nanogallery2Lgroup;
                      te(e, t)
                  } else K();
                  m()
              }();
              else if ("" != u.O.openOnStart) {
                  var e = p(u.O.openOnStart);
                  "0" != e.imageID ? Q(e.imageID, e.albumID) : g("-1", e.albumID)
              } else g("-1", 0)
          }()
      };
      var Z = {
          youtube: {
              getID: function(e) {
                  var t = e.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                  return null != t ? t[1] : null
              },
              thumbUrl: function(e) {
                  return "https://img.youtube.com/vi/" + e + "/hqdefault.jpg"
              },
              url: function(e) {
                  return "https://www.youtube.com/embed/" + e
              },
              markup: function(e) {
                  return '<iframe class="nGY2ViewerMedia" src="https://www.youtube.com/embed/' + e + '?rel=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>'
              },
              kind: "iframe"
          },
          vimeo: {
              getID: function(e) {
                  var t = e.match(/(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/);
                  return null != t ? t[4] : null
              },
              url: function(e) {
                  return "https://player.vimeo.com/video/" + e
              },
              markup: function(e) {
                  return '<iframe class="nGY2ViewerMedia" src="https://player.vimeo.com/video/' + e + '" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
              },
              kind: "iframe"
          },
          dailymotion: {
              getID: function(e) {
                  var t = e.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                  return null !== t ? void 0 !== t[4] ? t[4] : t[2] : null
              },
              thumbUrl: function(e) {
                  return "https://www.dailymotion.com/thumbnail/video/" + e
              },
              url: function(e) {
                  return "https://www.dailymotion.com/embed/video/" + e
              },
              markup: function(e) {
                  return '<iframe class="nGY2ViewerMedia" src="https://www.dailymotion.com/embed/video/' + e + '?rel=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>'
              },
              kind: "iframe"
          },
          selfhosted: {
              getID: function(e) {
                  var t = e.split(".").pop().toLowerCase();
                  return "mp4" === t || "webm" === t || "ogv" === t || "3gp" === t ? t : null
              },
              markup: function(e) {
                  var t = e.split(".").pop();
                  return '<video controls class="nGY2ViewerMedia"><source src="' + e + '" type="video/' + t + '" preload="auto">Your browser does not support the video tag (HTML 5).</video>'
              },
              kind: "video",
              selfhosted: !0
          }
      };

      function J(e) {
          if (null == e) return !1;
          return !!/^((http|https|ftp|ftps|file):\/\/)/.test(e)
      }

      function K() {
          var e = 0,
              t = NGY2Tools.AlbumPostProcess.bind(u);
          u.I[0].contentIsLoaded = !0, jQuery.each(u.O.items, (function(n, a) {
              var o = "";
              void 0 === (o = ct(a, "title")) && (o = "");
              var r = "";
              J(r = void 0 !== a["src" + ht().toUpperCase()] ? a["src" + ht().toUpperCase()] : a.src) || (r = u.O.itemsBaseURL + r);
              var l = "";
              void 0 !== a.srct && a.srct.length > 0 ? J(l = a.srct) || (l = u.O.itemsBaseURL + l) : l = r, "" != u.O.thumbnailLabel.get("title") && (o = GetImageTitle(r));
              var s = "";
              void 0 === (s = ct(a, "description")) && (s = "");
              var c = ct(a, "tags");
              void 0 === c && (c = "");
              var h = 0;
              void 0 !== a.albumID && (h = a.albumID, !0);
              var d = null;
              void 0 !== a.ID && (d = a.ID);
              var m = "image";
              void 0 !== a.kind && a.kind.length > 0 && (m = a.kind);
              var p = NGY2Item.New(u, o, s, d, h, m, c);
              "" != o && e++, p.setMediaURL(r, "img"), jQuery.each(Z, (function(e, t) {
                  var n = t.getID(r);
                  if (null != n) return l == r && "function" == typeof t.thumbUrl && (l = t.thumbUrl(n)), "function" == typeof t.url && (r = t.url(n)), p.mediaKind = t.kind, p.mediaMarkup = t.selfhosted ? t.markup(r) : t.markup(n), !1
              })), void 0 !== a.imageWidth && (p.imageWidth = a.width), void 0 !== a.imageHeight && (p.imageHeight = a.height);
              var g = void 0 !== a.imgtWidth ? a.imgtWidth : 0,
                  f = void 0 !== a.imgtHeight ? a.imgtHeight : 0;
              if (p.thumbs = {
                      url: {
                          l1: {
                              xs: l,
                              sm: l,
                              me: l,
                              la: l,
                              xl: l
                          },
                          lN: {
                              xs: l,
                              sm: l,
                              me: l,
                              la: l,
                              xl: l
                          }
                      },
                      width: {
                          l1: {
                              xs: g,
                              sm: g,
                              me: g,
                              la: g,
                              xl: g
                          },
                          lN: {
                              xs: g,
                              sm: g,
                              me: g,
                              la: g,
                              xl: g
                          }
                      },
                      height: {
                          l1: {
                              xs: f,
                              sm: f,
                              me: f,
                              la: f,
                              xl: f
                          },
                          lN: {
                              xs: f,
                              sm: f,
                              me: f,
                              la: f,
                              xl: f
                          }
                      }
                  }, "img" == p.mediaKind) {
                  var b = ["xs", "sm", "me", "la", "xl"];
                  for (n = 0; n < b.length; n++) {
                      var v = a["srct" + b[n].toUpperCase()];
                      void 0 !== v && (J(v) || (v = u.O.itemsBaseURL + v), p.url.l1[b[n]] = v, p.url.lN[b[n]] = v), null != (g = a["imgt" + b[n].toUpperCase() + "Width"]) && (p.width.l1[b[n]] = parseInt(g), p.width.lN[b[n]] = parseInt(g)), null != (f = a["imgt" + b[n].toUpperCase() + "Height"]) && (p.height.l1[b[n]] = parseInt(f), p.height.lN[b[n]] = parseInt(f))
                  }
              }
              void 0 !== a.imageDominantColors && (p.imageDominantColors = a.imageDominantColors), void 0 !== a.imageDominantColor && (p.imageDominantColor = a.imageDominantColor), void 0 !== a.destURL && a.destURL.length > 0 && (p.destinationURL = a.destURL), void 0 !== a.downloadURL && a.downloadURL.length > 0 && (p.downloadURL = a.downloadURL), void 0 !== a.exifModel && (p.exif.model = a.exifModel), void 0 !== a.exifFlash && (p.exif.flash = a.exifFlash), void 0 !== a.exifFocalLength && (p.exif.focallength = a.exifFocalLength), void 0 !== a.exifFStop && (p.exif.fstop = a.exifFStop), void 0 !== a.exifExposure && (p.exif.exposure = a.exifExposure), void 0 !== a.exifIso && (p.exif.iso = a.exifIso), void 0 !== a.exifTime && (p.exif.time = a.exifTime), void 0 !== a.exifLocation && (p.exif.location = a.exifLocation), null !== a.customData && (p.customData = i(a.customData)), p.contentIsLoaded = !0;
              var O = u.O.fnProcessData;
              null !== O && ("function" == typeof O ? O(p, "api", a) : window[O](p, "api", a)), t(h)
          })), 0 == e && (u.O.thumbnailLabel.display = !1)
      }

      function ee(e) {
          var t = "";
          return void 0 !== e.childNodes[0] && null !== e.childNodes[0].nodeValue && void 0 !== e.childNodes[0].nodeValue && (t = e.childNodes[0].nodeValue.trim()), t
      }

      function te(t, n) {
          var a = 0,
              o = NGY2Tools.AlbumPostProcess.bind(u),
              r = NGY2Tools.GetImageTitleFromURL.bind(u);
          u.I[0].contentIsLoaded = !0, jQuery.each(t, (function(t, l) {
              if (l.dataset.nanogallery2Lgroup == n && "SCRIPT" != l.nodeName) {
                  var s = {
                      "data-ngdesc": "",
                      "data-ngid": null,
                      "data-ngkind": "image",
                      "data-ngtags": null,
                      "data-ngdest": "",
                      "data-ngthumbimgwidth": 0,
                      "data-ngthumbimgheight": 0,
                      "data-ngimagewidth": 0,
                      "data-ngimageheight": 0,
                      "data-ngimagedominantcolors": null,
                      "data-ngimagedominantcolor": null,
                      "data-ngexifmodel": "",
                      "data-ngexifflash": "",
                      "data-ngexiffocallength": "",
                      "data-ngexiffstop": "",
                      "data-ngexifexposure": "",
                      "data-ngexifiso": "",
                      "data-ngexiftime": "",
                      "data-ngexiflocation": "",
                      "data-ngsrc": "",
                      alt: ""
                  };
                  [].forEach.call(l.attributes, (function(e) {
                      s[e.name.toLowerCase()] = e.value.trim()
                  }));
                  var c = ee(l);
                  "" == c && "" != s.alt && (c = s.alt), jQuery.each(e(l).children(), (function(e, t) {
                      "" == c && (c = ee(t)), [].forEach.call(t.attributes, (function(e) {
                          s[e.name.toLowerCase()] = e.value.trim()
                      })), "" == c && "" != s.alt && (c = s.alt)
                  }));
                  var h = "",
                      d = ht().toUpperCase();
                  s.hasOwnProperty("data-ngsrc" + d) && (h = s["data-ngsrc" + d]), void 0 === (h = h || s["data-ngsrc"] || s.href) || J(h) || (h = u.O.itemsBaseURL + h);
                  var m = "";
                  if (s.hasOwnProperty("src") && (m = s.src), "" == m && s.hasOwnProperty("data-ngthumb") && (m = s["data-ngthumb"]), "" == m && (m = h), void 0 === m || J(m) || (m = u.O.itemsBaseURL + m), void 0 !== h || void 0 !== m) {
                      var p = s["data-ngdesc"],
                          g = s.id || s["data-ngid"],
                          f = s["data-ngkind"],
                          b = s["data-ngtags"],
                          v = "0";
                      s.hasOwnProperty("data-ngalbumid") && (v = s["data-ngalbumid"], !0);
                      var O = r(h);
                      "" != O && (c = O);
                      var y = NGY2Item.New(u, c, p, g, v, f, b);
                      "" != c && a++, y.setMediaURL(h, "img"), jQuery.each(Z, (function(e, t) {
                          var n = t.getID(h);
                          if (null != n) return m == h && "function" == typeof t.thumbUrl && (m = t.thumbUrl(n)), "function" == typeof t.url && (h = t.url(n)), y.mediaKind = t.kind, y.mediaMarkup = t.selfhosted ? t.markup(h) : t.markup(n), !1
                      })), y.imageWidth = parseInt(s["data-ngimagewidth"]), y.imageHeight = parseInt(s["data-ngimageheight"]);
                      var G = parseInt(s["data-ngthumbimgwidth"]),
                          M = parseInt(s["data-ngthumbimgheight"]);
                      if (y.thumbs = {
                              url: {
                                  l1: {
                                      xs: m,
                                      sm: m,
                                      me: m,
                                      la: m,
                                      xl: m
                                  },
                                  lN: {
                                      xs: m,
                                      sm: m,
                                      me: m,
                                      la: m,
                                      xl: m
                                  }
                              },
                              width: {
                                  l1: {
                                      xs: G,
                                      sm: G,
                                      me: G,
                                      la: G,
                                      xl: G
                                  },
                                  lN: {
                                      xs: G,
                                      sm: G,
                                      me: G,
                                      la: G,
                                      xl: G
                                  }
                              },
                              height: {
                                  l1: {
                                      xs: M,
                                      sm: M,
                                      me: M,
                                      la: M,
                                      xl: M
                                  },
                                  lN: {
                                      xs: M,
                                      sm: M,
                                      me: M,
                                      la: M,
                                      xl: M
                                  }
                              }
                          }, "img" == y.mediaKind) {
                          var w = ["xs", "sm", "me", "la", "xl"];
                          for (t = 0; t < w.length; t++) {
                              if (s.hasOwnProperty("data-ngthumb" + w[t])) {
                                  var I = s["data-ngthumb" + w[t]];
                                  J(I) || (I = u.O.itemsBaseURL + I), y.url.l1[w[t]] = I, y.url.lN[w[t]] = I
                              }
                              if (s.hasOwnProperty("data-ngthumb" + w[t] + "width")) {
                                  G = parseInt(s["data-ngthumb" + w[t] + "width"]);
                                  y.width.l1[w[t]] = G, y.width.lN[w[t]] = G
                              }
                              if (s.hasOwnProperty("data-ngthumb" + w[t] + "height")) {
                                  M = parseInt("data-ngthumb" + w[t] + "height");
                                  y.height.l1[w[t]] = M, y.height.lN[w[t]] = M
                              }
                          }
                      }
                      y.imageDominantColors = s["data-ngimagedominantcolors"], y.imageDominantColor = s["data-ngimagedominantcolors"], y.destinationURL = s["data-ngdest"], y.downloadURL = s["data-ngdownloadurl"], y.exif.model = s["data-ngexifmodel"], y.exif.flash = s["data-ngexifflash"], y.exif.focallength = s["data-ngexiffocallength"], y.exif.fstop = s["data-ngexiffstop"], y.exif.exposure = s["data-ngexifexposure"], y.exif.iso = s["data-ngexifiso"], y.exif.time = s["data-ngexiftime"], y.exif.location = s["data-ngexiflocation"], y.contentIsLoaded = !0, void 0 !== jQuery(l).data("customdata") && (y.customData = i(jQuery(l).data("customdata"))), void 0 !== jQuery(l).data("ngcustomdata") && (y.customData = i(jQuery(l).data("ngcustomdata")));
                      var T = u.O.fnProcessData;
                      null !== T && ("function" == typeof T ? T(y, "markup", l) : window[T](y, "markup", l)), o(v)
                  }
              }
          })), 0 == a && (u.O.thumbnailLabel.display = !1)
      }

      function ne(e, t) {
          var n = ["easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "bounce"],
              i = e.split("_");
          if (i.length >= 4) {
              if (t.name = "", t.type = i[1], t.from = i[2], t.to = i[3], i.length >= 5)
                  for (var a = 4; a < i.length; a++) {
                      for (var o = i[a], r = !1, l = 0; l < n.length; l++)
                          if (o == n[l]) {
                              r = !0, t.easing = o;
                              break
                          }
                      if (!0 !== r)
                          if ("HOVERIN" != (o = o.toUpperCase()))
                              if ("HOVEROUT" != o)
                                  if ("KEYFRAME" != o) {
                                      var s = parseInt(o.replace(/[^0-9\.]/g, ""), 10);
                                      if (s > 0) {
                                          if (o.indexOf("DURATION") >= 0) {
                                              t.duration = s;
                                              continue
                                          }
                                          if (o.indexOf("DURATIONBACK") >= 0) {
                                              t.durationBack = s;
                                              continue
                                          }
                                          if (o.indexOf("DELAY") >= 0) {
                                              t.delay = s;
                                              continue
                                          }
                                          if (o.indexOf("DELAYBACK") >= 0) {
                                              t.delayBack = s;
                                              continue
                                          }
                                          t.duration = s
                                      }
                                  } else t.firstKeyframe = !1;
                      else t.hoverin = !1;
                      else t.hoverout = !1
                  }
              t.element = ie(i[0], t.type)
          } else t.name = e;
          return t
      }

      function ie(e, t) {
          var n = {
              image: ".nGY2GThumbnailImage",
              thumbnail: ".nGY2GThumbnail",
              label: ".nGY2GThumbnailLabel",
              title: ".nGY2GThumbnailTitle",
              description: ".nGY2GThumbnailDescription",
              tools: ".nGY2GThumbnailIcons",
              customlayer: ".nGY2GThumbnailCustomLayer",
              default: "nGY2GThumbnailImage"
          };
          return n[e] || n.default
      }

      function ae(e) {
          for (var a = [], o = 0; o < e.length; o++) switch (e[o].name.toUpperCase()) {
              case "BORDERLIGHTER":
                  {
                      let i = t(se().thumbnail.borderColor),
                          r = "thumbnail_borderColor_" + i + "_" + n(.5, i);a.push(ne(r, e[o]));
                      break
                  }
              case "BORDERDARKER":
                  {
                      let i = t(se().thumbnail.borderColor),
                          r = "thumbnail_borderColor_" + i + "_" + n(-.5, i);a.push(ne(r, e[o]));
                      break
                  }
              case "SCALE120":
                  a.push(ne("thumbnail_scale_1.00_1.20", e[o]));
                  break;
              case "LABELAPPEAR":
              case "LABELAPPEAR75":
                  a.push(ne("label_opacity_0.00_1.00", e[o]));
                  break;
              case "TOOLSAPPEAR":
                  a.push(ne("tools_opacity_0_1", e[o]));
                  break;
              case "TOOLSSLIDEDOWN":
                  a.push(ne("tools_translateY_-100%_0%", e[o]));
                  break;
              case "TOOLSSLIDEUP":
                  a.push(ne("tools_translateY_100%_0%", e[o]));
                  break;
              case "LABELOPACITY50":
                  a.push(ne("label_opacity_1.00_0.50", e[o]));
                  break;
              case "LABELSLIDEUPTOP":
              case "LABELSLIDEUP":
                  a.push(ne("label_translateY_100%_0%", e[o])), a.push(ne("label_translateY_100%_0%", e[o]));
                  break;
              case "LABELSLIDEDOWN":
                  a.push(ne("label_translateY_-100%_0%", e[o]));
                  break;
              case "SCALELABELOVERIMAGE":
                  a.push(ne("label_scale_0.00_1.00", e[o]));
                  var r = i(e[o]);
                  a.push(ne("image_scale_1.00_0.00", r));
                  break;
              case "OVERSCALE":
              case "OVERSCALEOUTSIDE":
                  a.push(ne("label_scale_2.00_1.00", e[o]));
                  r = i(e[o]);
                  a.push(ne("label_opacity_0.00_1.00", r)), r = i(e[o]), a.push(ne("image_scale_1.00_0.00", r)), r = i(e[o]), a.push(ne("image_opacity_1.00_0.00", r));
                  break;
              case "DESCRIPTIONAPPEAR":
                  a.push(ne("description_opacity_0_1", e[o]));
                  break;
              case "SLIDERIGHT":
                  a.push(ne("image_translateX_0%_100%", e[o])), a.push(ne("label_translateX_-100%_0%", i(e[o])));
                  break;
              case "SLIDELEFT":
                  a.push(ne("image_translateX_0%_-100%", e[o])), a.push(ne("label_translateX_100%_0%", i(e[o])));
                  break;
              case "SLIDEUP":
                  a.push(ne("image_translateY_0%_-100%", e[o])), a.push(ne("label_translateY_100%_0%", i(e[o])));
                  break;
              case "SLIDEDOWN":
                  a.push(ne("image_translateY_0%_100%", e[o])), a.push(ne("label_translateY_-100%_0%", i(e[o])));
                  break;
              case "IMAGESCALE150":
              case "IMAGESCALE150OUTSIDE":
                  a.push(ne("image_scale_1.00_1.50", e[o]));
                  break;
              case "IMAGESCALEIN80":
                  a.push(ne("image_scale_1.20_1.00", e[o]));
                  break;
              case "IMAGESLIDERIGHT":
                  a.push(ne("image_translateX_0%_100%", e[o]));
                  break;
              case "IMAGESLIDELEFT":
                  a.push(ne("image_translateX_0%_-100%", e[o]));
                  break;
              case "IMAGESLIDEUP":
                  a.push(ne("image_translateY_0%_-100%", e[o]));
                  break;
              case "IMAGESLIDEDOWN":
                  a.push(ne("image_translateY_0%_100%", e[o]));
                  break;
              case "LABELSLIDEUPDOWN":
                  a.push(ne("label_translateY_0%_100%", e[o]));
                  break;
              case "DESCRIPTIONSLIDEUP":
                  a.push(ne("description_translateY_110%_0%", e[o]));
                  break;
              case "IMAGEBLURON":
                  a.push(ne("image_blur_2.00px_0.00px", e[o]));
                  break;
              case "IMAGEBLUROFF":
                  a.push(ne("image_blur_0.00px_2.00px", e[o]));
                  break;
              case "IMAGEGRAYON":
                  a.push(ne("image_grayscale_0%_100%", e[o]));
                  break;
              case "IMAGEGRAYOFF":
                  a.push(ne("image_grayscale_100%_0%", e[o]));
                  break;
              case "IMAGESEPIAON":
                  a.push(ne("image_sepia_100%_1%", e[o]));
                  break;
              case "IMAGESEPIAOFF":
                  a.push(ne("image_sepia_1%_100%", e[o]));
                  break;
              default:
                  a.push(e[o])
          }
          return a
      }

      function oe() {
          return {
              name: "",
              element: "",
              type: "",
              from: "",
              to: "",
              hoverin: !0,
              hoverout: !0,
              firstKeyframe: !0,
              delay: 0,
              delayBack: 0,
              duration: 400,
              durationBack: 300,
              easing: "easeOutQuart",
              easingBack: "easeOutQuart",
              animParam: null
          }
      }

      function re() {
          return {
              element: "",
              property: "",
              value: ""
          }
      }

      function le(e, t) {
          switch (e.position) {
              case "onBottom":
                  u.tn.style[t].label = "bottom:0; ";
                  break;
              case "right":
                  switch (e.valign) {
                      case "top":
                          u.tn.style[t].label = "top:0; position:absolute; left: 50%;";
                          break;
                      case "middle":
                          u.tn.style[t].label = "top:0; bottom:0; left: 50%;", u.tn.style[t].title = "position:absolute; bottom:50%;", u.tn.style[t].desc = "position:absolute; top:50%;";
                          break;
                      case "bottom":
                      default:
                          u.tn.style[t].label = "bottom:0; position:absolute; left: 50%;", u.tn.style[t].title = "position:absolute;bottom:0;"
                  }
                  break;
              case "custom":
                  break;
              default:
              case "overImage":
                  switch (e.valign) {
                      case "top":
                          u.tn.style[t].label = "top:0; position:absolute;";
                          break;
                      case "middle":
                          u.tn.style[t].label = "top:0; bottom:0;", u.tn.style[t].title = "position:absolute; bottom:50%;", u.tn.style[t].desc = "position:absolute; top:50%;";
                          break;
                      case "bottom":
                      default:
                          u.tn.style[t].label = "bottom:0; position:absolute;"
                  }
          }
          switch ("onBottom" != e.position && (e.titleMultiLine && (u.tn.style[t].title += "white-space:normal;"), e.descriptionMultiLine && (u.tn.style[t].desc += "white-space:normal;")), e.align) {
              case "right":
                  u.tn.style[t].label += "text-align:right;";
                  break;
              case "left":
                  u.tn.style[t].label += "text-align:left;";
                  break;
              default:
                  u.tn.style[t].label += "text-align:center;"
          }
          null != e.titleFontSize && "" != e.titleFontSize && (u.tn.style[t].title += "font-size:" + e.titleFontSize + ";"), null != e.descriptionFontSize && "" != e.descriptionFontSize && (u.tn.style[t].desc += "font-size:" + e.descriptionFontSize + ";"), 0 == e.displayDescription && (u.tn.style[t].desc += "display:none;")
      }

      function se() {
          var e = null;
          switch (r(u.O.galleryTheme)) {
              case "object":
                  e = u.galleryTheme_dark, jQuery.extend(!0, e, u.O.galleryTheme);
                  break;
              case "string":
                  switch (u.O.galleryTheme) {
                      case "light":
                          e = u.galleryTheme_light;
                          break;
                      case "default":
                      case "dark":
                      case "none":
                      default:
                          e = u.galleryTheme_dark
                  }
                  break;
              default:
                  e = u.galleryTheme_dark
          }
          return e
      }

      function ue(e) {
          var t = Oe(e, !1);
          if (-1 == t.GOMidx) return "exit";
          var n = u.GOM.items[t.GOMidx].thumbnailIdx;
          switch (u.GOM.slider.hostIdx == t.GOMidx && (n = u.GOM.items[u.GOM.slider.currentIdx].thumbnailIdx), t.action) {
              case "OPEN":
                  return ye(n, !1), "exit";
              case "DISPLAY":
                  return ye(n, !0), "exit";
              case "TOGGLESELECT":
                  return me(n), "exit";
              case "SHARE":
                  return ge(n), "exit";
              case "DOWNLOAD":
                  return ce(n), "exit";
              case "INFO":
                  return ze(u.I[n]), "exit";
              case "SHOPPINGCART":
                  return he(n, "gallery"), "exit";
              default:
                  var i = u.O.fnThumbnailToolCustAction;
                  null !== i && ("function" == typeof i ? i(t.action, u.I[n]) : window[i](t.action, u.I[n]))
          }
      }

      function ce(e) {
          if ("img" == u.I[e].mediaKind) {
              var t = u.I[e].src;
              null != u.I[e].downloadURL && "" != u.I[e].downloadURL && (t = u.I[e].downloadURL);
              var n = document.createElement("a");
              n.href = t, n.download = t.split("/").pop(), n.target = "_blank", n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
          }
      }

      function he(e, t) {
          for (var n = 0; n < u.shoppingCart.length; n++) {
              var i;
              if (u.shoppingCart[n].idx == e) return u.shoppingCart[n].qty++, R(u.I[e]), null !== (i = u.O.fnShoppingCartUpdated) && ("function" == typeof i ? i(u.shoppingCart, u.I[e], t) : window[i](u.shoppingCart, u.I[e], t)), void at("shoppingCartUpdated")
          }
          u.shoppingCart.push({
              idx: e,
              ID: u.I[e].GetID(),
              qty: 1
          }), R(u.I[e]), null !== (i = u.O.fnShoppingCartUpdated) && ("function" == typeof i ? i(u.shoppingCart, u.I[e], t) : window[i](u.shoppingCart, u.I[e], t)), at("shoppingCartUpdated")
      }

      function de() {
          u.GOM.nbSelected = 0;
          for (var e = 0, t = u.GOM.items.length; e < t; e++) {
              var n = u.I[u.GOM.items[e].thumbnailIdx];
              if (n.selected) {
                  n.selected = !1;
                  var i = u.O.fnThumbnailSelection;
                  null !== i && ("function" == typeof i ? i(n.$elt, n, u.I) : window[i](n.$elt, n, u.I))
              }
              n.selected = !1
          }
      }

      function me(e) {
          var t = u.I[e];
          !0 === t.selected ? (pe(t, !1), u.GOM.nbSelected--, at("itemUnSelected")) : (pe(t, !0), u.GOM.nbSelected++, at("itemSelected"))
      }

      function pe(e, t) {
          e.selected = t,
              function(e) {
                  if (null == e.$elt) return;
                  var t = e.$getElt(".nGY2GThumbnail"),
                      n = e.$getElt(".nGY2GThumbnailIconImageSelect");
                  !0 === e.selected ? (t.addClass("nGY2GThumbnailSubSelected"), n.addClass("nGY2ThumbnailSelected"), n.removeClass("nGY2ThumbnailUnselected"), n.html(u.O.icons.thumbnailSelected)) : (t.removeClass("nGY2GThumbnailSubSelected"), n.removeClass("nGY2ThumbnailSelected"), n.addClass("nGY2ThumbnailUnselected"), n.html(u.O.icons.thumbnailUnselected))
              }(e);
          var n = u.O.fnThumbnailSelection;
          null !== n && ("function" == typeof n ? n(e.$elt, e, u.I) : window[n](e.$elt, e, u.I))
      }

      function ge(e) {
          var t = u.I[e],
              n = document.location.protocol + "//" + document.location.hostname + document.location.pathname,
              i = "#nanogallery/" + u.baseEltID + "/";
          "image" == t.kind ? i += t.albumID + "/" + t.GetID() : i += t.GetID();
          var a = "<br><br>";
          a += '<div class="nGY2PopupOneItem" style="text-align:center;" data-share="facebook">' + u.O.icons.shareFacebook + "</div>", a += '<div class="nGY2PopupOneItem" style="text-align:center;" data-share="pinterest">' + u.O.icons.sharePinterest + "</div>", a += '<div class="nGY2PopupOneItem" style="text-align:center;" data-share="tumblr">' + u.O.icons.shareTumblr + "</div>", a += '<div class="nGY2PopupOneItem" style="text-align:center;" data-share="twitter">' + u.O.icons.shareTwitter + "</div>", a += '<div class="nGY2PopupOneItem" style="text-align:center;" data-share="vk">' + u.O.icons.shareVK + "</div>", a += '<div class="nGY2PopupOneItem" style="text-align:center;" data-share="mail">' + u.O.icons.shareMail + "</div>", a += '<div class="nGY2PopupOneItem" style="text-align:center;"></div>', a += '<input class="nGY2PopupOneItemText" readonly type="text" value="' + n + i + '" style="width:100%;text-align:center;">', a += "<br>", n = encodeURIComponent(document.location.protocol + "//" + document.location.hostname + document.location.pathname + i);
          var o = t.title,
              r = t.thumbImg().src;
          fe("nanogallery2 - share to:", a, "Center"), u.popup.$elt.find(".nGY2PopupOneItem").on("click", (function(e) {
              e.stopPropagation();
              var t = "",
                  i = !0;
              switch (jQuery(this).attr("data-share").toUpperCase()) {
                  case "FACEBOOK":
                      t = "https://www.facebook.com/sharer.php?u=" + n;
                      break;
                  case "VK":
                      t = "http://vk.com/share.php?url=" + n;
                      break;
                  case "GOOGLEPLUS":
                      t = "https://plus.google.com/share?url=" + n;
                      break;
                  case "TWITTER":
                      t = "https://twitter.com/intent/tweet?text=" + o + "url=" + n;
                      break;
                  case "PINTEREST":
                      t = "https://pinterest.com/pin/create/button/?media=" + r + "&url=" + n + "&description=" + o;
                      break;
                  case "TUMBLR":
                      t = "http://www.tumblr.com/share/link?url=" + n + "&name=" + o;
                      break;
                  case "MAIL":
                      t = "mailto:?subject=" + o + "&body=" + n;
                      break;
                  default:
                      i = !1
              }
              i && (window.open(t, "", "height=550,width=500,left=100,top=100,menubar=0"), u.popup.close())
          }))
      }

      function fe(e, t, n) {
          var i = '<div class="nGY2Popup" style="opacity:0;"><div class="nGY2PopupContent' + n + '">';
          i += '<div class="nGY2PopupCloseButton" style="font-size:0.9em;">' + u.O.icons.buttonClose + "</div>", i += '<div class="nGY2PopupTitle">' + e + "</div>", i += t, i += "</div></div>", u.popup.$elt = jQuery(i).appendTo("body"), o(u.VOM.$viewer, u.popup.$elt), u.popup.isDisplayed = !0, (new NGTweenable).tween({
              from: {
                  o: 0,
                  y: 100
              },
              to: {
                  o: 1,
                  y: 0
              },
              easing: "easeInOutSine",
              duration: 250,
              step: function(e, t) {
                  u.popup.$elt[0].style.opacity = e.o, u.popup.$elt[0].style[u.CSStransformName] = "translateY(" + e.y + "px)"
              }
          }), u.popup.$elt.find(".nGY2PopupCloseButton").on("click", (function(e) {
              e.stopPropagation(), u.popup.close()
          }))
      }

      function be(e) {
          if (!u.VOM.viewerDisplayed && -1 != u.GOM.albumIdx) {
              var t = Oe(e, !0); - 1 != t.GOMidx && W(t.GOMidx)
          }
      }

      function ve(e) {
          if (!u.VOM.viewerDisplayed && -1 != u.GOM.albumIdx) {
              var t = Oe(e, !0); - 1 != t.GOMidx && X(t.GOMidx)
          }
      }

      function Oe(e, t) {
          var n = {
              action: "NONE",
              GOMidx: -1
          };
          if (null == e) return n;
          for (var i = e.target || e.srcElement; i != u.$E.conTnParent[0];) {
              if (jQuery(i).hasClass("nGY2GThumbnail")) return "NONE" == n.action && (n.action = "OPEN"), n.GOMidx = jQuery(i).data("index"), n;
              if (!t) {
                  var a = jQuery(i).data("ngy2action");
                  "" != a && null != a && (n.action = a)
              }
              if (null == i.parentNode) return n;
              i = i.parentNode
          }
          return n
      }

      function ye(e, t) {
          var n = u.I[e];
          u.GOM.albumIdxLoading = e;
          var i = u.O.fnThumbnailClicked;
          if (null !== i && ("function" == typeof i ? i(n.$elt, n) : window[i](n.$elt, n)), void 0 !== n.destinationURL && n.destinationURL.length > 0) window.location = n.destinationURL;
          else switch (n.kind) {
              case "image":
                  !1 === t && u.GOM.nbSelected > 0 ? me(e) : we(e);
                  break;
              case "album":
                  if (!1 === t && u.GOM.nbSelected > 0) me(e);
                  else {
                      if (u.O.thumbnailAlbumDisplayImage && 0 != e) return void Ge(e);
                      g("-1", n.GetID())
                  }
                  break;
              case "albumUp":
                  g("-1", NGY2Item.Get(u, n.albumID).albumID)
          }
      }

      function Ge(e) {
          u.O.debugMode && console.log("#DisplayFirstPhotoInAlbum : " + e);
          for (var t = u.I[e], n = u.I.length, i = 0; i < n; i++)
              if (u.I[i].albumID == t.GetID()) return void we(i);
          q(t.GetID(), Ge, e, null)
      }

      function Me(e) {
          switch (u.O.kind) {
              case "flickr":
                  var t = "https://www.flickr.com/photos/" + u.O.userID + "/" + e.GetID();
                  "0" != e.albumID && (t += "/in/album-" + e.albumID + "/"), window.open(t, "_blank");
                  break;
              case "picasa":
              case "google":
              case "google2":
              default:
                  t = e.responsiveURL();
                  window.open(t, "_blank")
          }
      }

      function we(e) {
          if (u.O.thumbnailOpenInLightox)
              if (u.O.thumbnailOpenOriginal) Me(u.I[e]);
              else {
                  var t = [];
                  u.VOM.content.current.vIdx = 0, u.VOM.items = [], u.VOM.albumID = u.I[e].albumID;
                  var n = new c(e);
                  u.VOM.items.push(n), t.push(u.I[e]);
                  var i = u.I.length;
                  for (let n = e + 1; n < i; n++) {
                      let e = u.I[n];
                      if ("image" == e.kind && e.isToDisplay(u.VOM.albumID) && "" == e.destinationURL) {
                          let i = new c(n);
                          u.VOM.items.push(i), t.push(e)
                      }
                  }
                  var a = u.VOM.items.length,
                      o = 1;
                  for (let n = 0; n < e; n++) {
                      let e = u.I[n];
                      if ("image" == e.kind && e.isToDisplay(u.VOM.albumID) && "" == e.destinationURL) {
                          let i = new c(n);
                          i.mediaNumber = o, u.VOM.items.push(i), t.push(e), o++
                      }
                  }
                  for (let e = 0; e < a; e++) u.VOM.items[e].mediaNumber = o, o++;
                  var r = u.O.fnThumbnailOpen;
                  if (null === r)
                      if (u.VOM.viewerDisplayed) {
                          u.VOM.content.current.$media.empty();
                          let e = u.VOM.content.current.NGY2Item();
                          var l = '<div class="nGY2ViewerMediaLoaderDisplayed"></div>';
                          "img" == e.mediaKind && 0 != e.imageWidth && 0 != e.imageHeight && (l = '<div class="nGY2ViewerMediaLoaderHidden"></div>'), u.VOM.content.current.$media.append(l + e.mediaMarkup), et(u.VOM.content.next, 0), et(u.VOM.content.previous, 0), "img" == e.mediaKind && u.VOM.ImageLoader.loadImage(Ke, e), Ze("")
                      } else De();
                  else "function" == typeof r ? r(t) : window[r](t)
              }
      }

      function Ie() {
          if (u.O.viewerZoom && !u.VOM.viewerMediaIsChanged) {
              var e = u.VOM.content.current.NGY2Item();
              if ("img" == e.mediaKind && e.imageHeight > 0 && e.imageWidth > 0) return !1 === u.VOM.zoom.isZooming && (u.VOM.zoom.userFactor = 1, u.VOM.zoom.isZooming = !0), !0
          }
          return !1
      }

      function Te(e) {
          e ? (u.VOM.zoom.userFactor < 1.39 ? u.VOM.zoom.userFactor += .1 : u.VOM.zoom.userFactor = 1.4, xe()) : (u.VOM.zoom.userFactor > 1.2 ? u.VOM.zoom.userFactor -= .1 : u.VOM.zoom.userFactor = 1.1, Se()), Le()
      }

      function xe() {
          u.VOM.zoom.userFactor > 3 && (u.VOM.zoom.userFactor = 3)
      }

      function Se() {
          u.VOM.zoom.userFactor < .2 && (u.VOM.zoom.userFactor = .2)
      }

      function Le() {
          u.VOM.zoom.isZooming || (u.VOM.zoom.userFactor = 1), Ee(u.VOM.content.current, !0), Ee(u.VOM.content.previous, !1), Ee(u.VOM.content.next, !1)
      }

      function Ce(e) {
          var t = e.children().eq(1),
              n = 90;
          "none" != u.O.viewerGallery && (n -= 10), "none" != u.O.viewerToolbar.display && (n -= 10), t.css({
              height: n + "%"
          }), t.css({
              width: "90%"
          }), t[0].style[u.CSStransformName] = 'translate(0px, "50%") '
      }

      function Ee(e, t) {
          var n = e.NGY2Item(),
              i = e.$media;
          if ("img" == n.mediaKind)
              if (0 != n.imageHeight && 0 != n.imageWidth) {
                  var a = 1 == t ? u.VOM.zoom.userFactor : 1,
                      o = 1;
                  "bestImageQuality" == u.O.viewerImageDisplay && (o = window.devicePixelRatio);
                  var r = (u.VOM.window.lastWidth - u.VOM.padding.V) / (n.imageWidth / o),
                      l = (u.VOM.window.lastHeight - u.VOM.padding.H) / (n.imageHeight / o),
                      s = Math.min(r, l);
                  s > 1 && "upscale" != u.O.viewerImageDisplay && (s = 1);
                  var c = n.imageHeight / o * a * s,
                      h = n.imageWidth / o * a * s;
                  i.children().eq(1).css({
                      height: c
                  }), i.children().eq(1).css({
                      width: h
                  });
                  var d = 0;
                  h > u.VOM.window.lastWidth && (d = -(h - u.VOM.window.lastWidth) / 2);
                  t ? (u.VOM.zoom.isZooming || (u.VOM.panPosX = 0, u.VOM.panPosY = 0), u.VOM.zoom.posX = d, u.VOM.zoom.posY = 0, ke(u.VOM.panPosX, u.VOM.panPosY, i, !1)) : (Xe(u.VOM.swipePosX), i.children().eq(1)[0].style[u.CSStransformName] = "translate(0px, 0px) rotate(" + n.rotationAngle + "deg)")
              } else et(e, 0);
          else Ce(i)
      }

      function ke(e, t, n, i) {
          i && (u.VOM.panPosX = e, u.VOM.panPosY = t), e += u.VOM.zoom.posX, t += u.VOM.zoom.posY, n.children().eq(1)[0].style[u.CSStransformName] = "translate(" + e + "px, " + t + "px) rotate(" + u.VOM.content.current.NGY2Item().rotationAngle + "deg)"
      }

      function De(e) {
          u.GOM.firstDisplay = !1, jQuery("head").append('<style id="nGY2_body_scrollbar_style" type="text/css">.nGY2_body_scrollbar{margin-right: ' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>"), jQuery("body").addClass("nGY2_body_scrollbar"), u.VOM.$baseCont = jQuery('<div  class="nGY2 nGY2ViewerContainer" style="opacity:1"></div>').appendTo("body"),
              function() {
                  if ("" == u.VOM.viewerTheme) {
                      void 0 !== u.O.colorSchemeViewer && (u.O.viewerTheme = u.O.colorSchemeViewer);
                      var e = null;
                      switch (r(u.O.viewerTheme)) {
                          case "object":
                              e = u.viewerTheme_dark, jQuery.extend(!0, e, u.O.viewerTheme), u.VOM.viewerTheme = "nanogallery_viewertheme_custom_" + u.baseEltID;
                              break;
                          case "string":
                              switch (u.O.viewerTheme) {
                                  case "none":
                                      return;
                                  case "light":
                                      e = u.viewerTheme_light, u.VOM.viewerTheme = "nanogallery_viewertheme_light_" + u.baseEltID;
                                      break;
                                  case "dark":
                                  case "default":
                                      e = u.viewerTheme_dark, u.VOM.viewerTheme = "nanogallery_viewertheme_dark_" + u.baseEltID
                              }
                              break;
                          default:
                              return void h(u, "Error in viewerTheme parameter.")
                      }
                      var t = "." + u.VOM.viewerTheme + " ",
                          n = t + ".nGY2Viewer { background:" + e.background + "; }\n";
                      n += t + ".nGY2Viewer .toolbarBackground { background:" + e.barBackground + "; }\n", n += t + ".nGY2Viewer .toolbar { border:" + e.barBorder + "; color:" + e.barColor + "; }\n", n += t + ".nGY2Viewer .toolbar .previousButton:after { color:" + e.barColor + "; }\n", n += t + ".nGY2Viewer .toolbar .nextButton:after { color:" + e.barColor + "; }\n", n += t + ".nGY2Viewer .toolbar .closeButton:after { color:" + e.barColor + "; }\n", n += t + ".nGY2Viewer .toolbar .label .title { color:" + e.barColor + "; }\n", n += t + ".nGY2Viewer .toolbar .label .description { color:" + e.barDescriptionColor + "; }\n", jQuery("head").append("<style>" + n + "</style>"), u.VOM.$baseCont.addClass(u.VOM.viewerTheme)
                  } else u.VOM.$baseCont.addClass(u.VOM.viewerTheme)
              }(), u.VOM.$viewer = jQuery('<div class="nGY2Viewer" style="opacity:0" itemscope itemtype="http://schema.org/ImageObject"></div>').appendTo(u.VOM.$baseCont), u.VOM.$viewer.css({
                  msTouchAction: "none",
                  touchAction: "none"
              }), u.VOM.content.current.vIdx = null == e ? 0 : e, u.VOM.content.previous.vIdx = u.VOM.IdxNext(), u.VOM.content.next.vIdx = u.VOM.IdxPrevious();
          var t = '<div class="nGY2ViewerMediaPan"><div class="nGY2ViewerMediaLoaderDisplayed"></div>' + u.VOM.content.previous.NGY2Item().mediaMarkup + "</div>";
          t += '<div class="nGY2ViewerMediaPan"><div class="nGY2ViewerMediaLoaderDisplayed"></div>' + u.VOM.content.current.NGY2Item().mediaMarkup + "</div>", t += '<div class="nGY2ViewerMediaPan"><div class="nGY2ViewerMediaLoaderDisplayed"></div>' + u.VOM.content.next.NGY2Item().mediaMarkup + "</div>";
          var n = "",
              i = u.O.icons.viewerImgPrevious;
          null != i && "" != i && (n += '<div class="nGY2ViewerAreaPrevious ngy2viewerToolAction" data-ngy2action="previous">' + i + "</div>");
          var a = u.O.icons.viewerImgNext;
          null != a && "" != a && (n += '<div class="nGY2ViewerAreaNext ngy2viewerToolAction" data-ngy2action="next">' + a + "</div>"), u.VOM.$content = jQuery('<div class="nGY2ViewerContent">' + t + n + "</div>").appendTo(u.VOM.$viewer), u.VOM.$buttonLeft = u.VOM.$content.find(".nGY2ViewerAreaPrevious"), u.VOM.$buttonRight = u.VOM.$content.find(".nGY2ViewerAreaNext");
          var l = u.VOM.$content.find(".nGY2ViewerMediaPan");
          u.VOM.content.previous.$media = l.eq(0), u.VOM.content.current.$media = l.eq(1), u.VOM.content.next.$media = l.eq(2);
          var c = u.GOM.cache.viewport;
          u.VOM.content.previous.$media[0].style[u.CSStransformName] = "translate(-" + c.w + "px, 0px)", u.VOM.content.next.$media[0].style[u.CSStransformName] = "translate(" + c.w + "px, 0px)", u.VOM.ImageLoader.loadImage(Ke, u.VOM.content.current.NGY2Item()), u.VOM.ImageLoader.loadImage(Ke, u.VOM.content.previous.NGY2Item()), u.VOM.ImageLoader.loadImage(Ke, u.VOM.content.next.NGY2Item()), u.VOM.padding.H = parseInt(u.VOM.$content.css("padding-left")) + parseInt(u.VOM.$content.css("padding-right")), u.VOM.padding.V = parseInt(u.VOM.$content.css("padding-top")) + parseInt(u.VOM.$content.css("padding-bottom"));
          var d = "",
              m = " toolbarBackground";
          u.O.viewerToolbar.fullWidth && (d = " toolbarBackground", m = "");
          var p = "text-align:center;";
          switch (u.O.viewerToolbar.align) {
              case "left":
                  p = "text-align:left;";
                  break;
              case "right":
                  p = "text-align:right;"
          }
          var g = '<div class="toolbarContainer nGEvent' + d + '" style="visibility:' + (u.O.viewerToolbar.display ? "visible" : "hidden") + ";" + p + '"><div class="toolbar nGEvent' + m + '"></div></div>';
          u.VOM.$toolbar = jQuery(g).appendTo(u.VOM.$viewer), "min" == u.VOM.toolbarMode || u.O.viewerToolbar.autoMinimize > 0 && u.O.viewerToolbar.autoMinimize >= u.GOM.cache.viewport.w ? We() : Ue();
          for (var f = '<div class="nGY2ViewerToolsTopLeft nGEvent"><div class="toolbar nGEvent">', b = u.O.viewerTools.topLeft.split(","), v = 0, O = b.length; v < O; v++) f += Be(b[v]);
          f += "</div></div>", u.VOM.$toolbarTL = jQuery(f).appendTo(u.VOM.$viewer);
          for (var y = '<div class="nGY2ViewerToolsTopRight nGEvent"><div class="toolbar nGEvent">', G = u.O.viewerTools.topRight.split(","), M = (v = 0, G.length); v < M; v++) y += Be(G[v]);
          y += "</div></div>", u.VOM.$toolbarTR = jQuery(y).appendTo(u.VOM.$viewer), Pe(), ngscreenfull.enabled && u.O.viewerFullscreen && (ngscreenfull.request(), u.VOM.viewerIsFullscreen = !0),
              function() {
                  if (u.VOM.gallery.firstDisplay = !0, "none" != u.O.viewerGallery) {
                      for (var e = u.O.viewerGalleryTWidth, t = u.O.viewerGalleryTHeight, n = "", i = 0; i < u.VOM.items.length; i++) {
                          var a = u.VOM.items[i].ngy2ItemIdx,
                              o = u.I[a].thumbImg().src.replace(/'/g, "%27");
                          o = o.replace(/\\/g, "\\\\"), n += '<div class="nGY2VThumbnail" style="width:' + e + "px;height:" + t + "px;left:" + i * (e + 4) + "px;background-image: url(&apos;" + o + '&apos;);" data-ngy2_lightbox_thumbnail="true" data-ngy2_idx="' + a + '" data-ngy2_vidx="' + i + '" ></div>'
                      }
                      u.VOM.gallery.gwidth = (e + 4) * u.VOM.items.length, u.VOM.gallery.oneTmbWidth = e + 4;
                      var r = "<div class='nGY2VThumbnailContainer' style='height:" + (t + 4) + "px;left:0;width:" + u.VOM.gallery.gwidth + "px;' data-ngy2_lightbox_gallery='true'>" + n + "</div>";
                      u.VOM.gallery.$elt = jQuery('<div class="nGY2viewerGallery" style="display: inline-block;height:' + (t + 4) + 'px;left:0;right:0;">' + r + "</div>").appendTo(u.VOM.$viewer), u.VOM.gallery.$tmbCont = u.VOM.gallery.$elt.find(".nGY2VThumbnailContainer"), u.VOM.gallery.Resize(), u.VOM.gallery.SetThumbnailActive()
                  }
              }(), o("", u.VOM.$viewer), nt(!0), u.VOM.gallery.Resize(), u.VOM.timeImgChanged = (new Date).getTime(), u.VOM.$toolbarTL.css("opacity", 0), u.VOM.$toolbarTR.css("opacity", 0), u.VOM.$buttonLeft.css("opacity", 0), u.VOM.$buttonRight.css("opacity", 0), "none" != u.O.viewerGallery && u.VOM.gallery.$elt.css("opacity", 0), u.VOM.$content.css("opacity", 0), u.VOM.$toolbarTR[0].style[u.CSStransformName] = "translateY(-40px) ", u.VOM.$toolbarTL[0].style[u.CSStransformName] = "translateY(-40px) ", u.VOM.$buttonLeft[0].style[u.CSStransformName] = "translateX(-40px) ", u.VOM.$buttonRight[0].style[u.CSStransformName] = "translateX(40px) ", (new NGTweenable).tween({
                  from: {
                      opacity: 0,
                      posY: .5 * u.VOM.window.lastHeight
                  },
                  to: {
                      opacity: 1,
                      posY: 0
                  },
                  delay: 10,
                  duration: 450,
                  easing: "easeInOutQuint",
                  step: function(e) {
                      u.VOM.$viewer.css("opacity", e.opacity), u.VOM.$viewer[0].style[u.CSStransformName] = "translateY(" + e.posY + "px) ", u.VOM.$content.css("opacity", e.opacity)
                  }
              }), (new NGTweenable).tween({
                  from: {
                      posY: -40,
                      opacity: 0,
                      scale: 3
                  },
                  to: {
                      posY: 0,
                      opacity: 1,
                      scale: 1
                  },
                  delay: 300,
                  duration: 400,
                  easing: "easeInOutQuint",
                  step: function(e) {
                      u.VOM.$toolbarTR[0].style[u.CSStransformName] = "translateY(" + e.posY + "px) ", u.VOM.$toolbarTL[0].style[u.CSStransformName] = "translateY(" + e.posY + "px) ", u.VOM.$buttonLeft[0].style[u.CSStransformName] = "translateX(" + e.posY + "px) ", u.VOM.$buttonRight[0].style[u.CSStransformName] = "translateX(" + -e.posY + "px) ", "none" != u.O.viewerGallery && (u.VOM.gallery.$elt.css({
                          opacity: e.opacity
                      }), u.VOM.gallery.$elt[0].style[u.CSStransformName] = "scale(" + e.scale + ")")
                  },
                  finish: function() {
                      u.VOM.viewerDisplayed = !0, Xe(0), null == u.VOM.hammertime && (u.VOM.hammertime = new NGHammer.Manager(u.VOM.$baseCont[0], {
                          recognizers: [
                              [NGHammer.Pinch, {
                                  enable: !0
                              }],
                              [NGHammer.Pan, {
                                  direction: NGHammer.DIRECTION_ALL
                              }]
                          ]
                      }), u.VOM.hammertime.on("pan", (function(e) {
                          if (Ne()) switch ("off" == u.VOM.panMode && (null != e.target.dataset.ngy2_lightbox_thumbnail || null != e.target.dataset.ngy2_lightbox_gallery ? u.VOM.panMode = "gallery" : u.VOM.zoom.isZooming ? u.VOM.panMode = "zoom" : u.VOM.panMode = "media"), u.VOM.panMode) {
                              case "zoom":
                                  ke(u.VOM.panPosX + e.deltaX, u.VOM.panPosY + e.deltaY, u.VOM.content.current.$media, !1), u.VOM.toolsHide();
                                  break;
                              case "media":
                                  if (Math.abs(e.deltaY) > u.VOM.panThreshold && Math.abs(e.deltaX) < u.VOM.panThreshold && !u.VOM.panXOnly) {
                                      Xe(0);
                                      var t = 0;
                                      t = e.deltaY < 0 ? Math.max(e.deltaY, -200) : Math.min(e.deltaY, 200), u.VOM.$viewer[0].style[u.CSStransformName] = "translateY(" + t + "px) ", u.VOM.$viewer.css("opacity", 1 - Math.abs(t) / 200 / 2)
                                  } else Math.abs(e.deltaX) > u.VOM.panThreshold && (u.VOM.panXOnly = !0), Xe(e.deltaX), u.VOM.$viewer[0].style[u.CSStransformName] = "translateY(0px)", u.VOM.$viewer.css("opacity", 1);
                                  break;
                              case "gallery":
                                  u.VOM.gallery.PanGallery(e.deltaX)
                          }
                      })), u.VOM.hammertime.on("panend", (function(e) {
                          if (Ne()) {
                              switch (u.VOM.panMode) {
                                  case "zoom":
                                      u.VOM.timeImgChanged = (new Date).getTime(), ke(u.VOM.panPosX + e.deltaX, u.VOM.panPosY + e.deltaY, u.VOM.content.current.$media, !0);
                                      break;
                                  case "media":
                                      var t = !1;
                                      u.VOM.panXOnly || Math.abs(e.deltaY) > 50 && Math.abs(e.deltaX) < 50 && (tt(), t = !0), t || (Math.abs(e.deltaX) < 50 ? Xe(0) : e.deltaX > 50 ? qe(Math.abs(e.velocityX)) : Qe(Math.abs(e.velocityX))), u.VOM.panXOnly = !1;
                                      break;
                                  case "gallery":
                                      u.VOM.gallery.posX += e.deltaX, u.VOM.gallery.PanGallery(0), u.VOM.gallery.PanGalleryEnd(e.velocityX)
                              }
                              u.VOM.panMode = "off"
                          }
                      })), u.O.viewerZoom ? (u.VOM.hammertime.add(new NGHammer.Tap({
                          event: "doubletap",
                          taps: 2,
                          interval: 250
                      })), u.VOM.hammertime.add(new NGHammer.Tap({
                          event: "singletap"
                      })), u.VOM.hammertime.get("doubletap").recognizeWith("singletap"), u.VOM.hammertime.get("singletap").requireFailure("doubletap"), u.VOM.hammertime.on("singletap", (function(e) {
                          if (Ne()) {
                              if (null != e.target.dataset.ngy2_lightbox_thumbnail) {
                                  var t = parseInt(e.target.dataset.ngy2_idx),
                                      n = parseInt(e.target.dataset.ngy2_vidx);
                                  if (!isNaN(t) && n != u.VOM.content.current.vIdx) {
                                      if (n > u.VOM.content.current.vIdx) {
                                          at("lightboxNextImage"), u.VOM.content.next.$media.empty();
                                          var i = u.I[t];
                                          u.VOM.content.next.vIdx = n;
                                          let e = '<div class="nGY2ViewerMediaLoaderDisplayed"></div>';
                                          "img" == i.mediaKind && 0 != i.imageWidth && 0 != i.imageHeight && (e = '<div class="nGY2ViewerMediaLoaderHidden"></div>'), u.VOM.content.next.$media.append(e + i.mediaMarkup), "img" == i.mediaKind ? u.VOM.ImageLoader.loadImage(Ke, i) : Ce(u.VOM.content.next.$media), Ze("nextImage")
                                      } else {
                                          at("lightboxPreviousImage"), u.VOM.content.previous.$media.empty();
                                          var a = u.I[t];
                                          u.VOM.content.previous.vIdx = n;
                                          let e = '<div class="nGY2ViewerMediaLoaderDisplayed"></div>';
                                          "img" == a.mediaKind && 0 != a.imageWidth && 0 != a.imageHeight && (e = '<div class="nGY2ViewerMediaLoaderHidden"></div>'), u.VOM.content.previous.$media.append(e + a.mediaMarkup), "img" == a.mediaKind ? u.VOM.ImageLoader.loadImage(Ke, a) : Ce(u.VOM.content.previous.$media), Ze("previousImage")
                                      }
                                      return
                                  }
                              }
                              if (Ve(e.srcEvent), 0 == u.VOM.toolbarsDisplayed) s(Ae, 100, !1)(), u.VOM.singletapTime = (new Date).getTime();
                              else {
                                  if ((new Date).getTime() - u.VOM.singletapTime < 400) return;
                                  "img" == u.VOM.content.current.NGY2Item().mediaKind && -1 !== e.target.className.indexOf("nGY2ViewerMedia") && ((e.srcEvent instanceof MouseEvent ? e.srcEvent.pageX : e.srcEvent.changedTouches[0].pageX) < u.GOM.cache.viewport.w / 2 ? qe() : Qe())
                              }
                          }
                      })), u.VOM.hammertime.on("doubletap", (function(e) {
                          Ne() && (Ve(e.srcEvent), -1 !== e.target.className.indexOf("nGY2ViewerMedia") && (u.VOM.zoom.isZooming ? (u.VOM.zoom.isZooming = !1, nt(!0)) : Ie() && (u.VOM.zoom.userFactor = 1.5, Le())))
                      })), u.VOM.hammertime.on("pinchend", (function(e) {
                          e.srcEvent.stopPropagation(), e.srcEvent.preventDefault(), u.VOM.timeImgChanged = (new Date).getTime()
                      })), u.VOM.hammertime.on("pinch", (function(e) {
                          e.srcEvent.stopPropagation(), e.srcEvent.preventDefault(), Ie() && (u.VOM.zoom.userFactor = e.scale, xe(), Se(), Le())
                      }))) : (u.VOM.hammertime.add(new NGHammer.Tap({
                          event: "singletap"
                      })), u.VOM.hammertime.on("singletap", (function(e) {
                          if (Ne())
                              if (Ve(e.srcEvent), 0 == u.VOM.toolbarsDisplayed) s(Ae, 100, !1)(), u.VOM.singletapTime = (new Date).getTime();
                              else {
                                  if ((new Date).getTime() - u.VOM.singletapTime < 400) return; - 1 !== e.target.className.indexOf("nGY2ViewerMedia") && ((e.srcEvent instanceof MouseEvent ? e.srcEvent.pageX : e.srcEvent.changedTouches[0].pageX) < u.GOM.cache.viewport.w / 2 ? qe() : Qe())
                              }
                      })))), Ze(""), u.O.slideshowAutoStart && (u.VOM.playSlideshow = !1, He()), Ae(), Je("")
                  }
              })
      }

      function Ne() {
          return !(!u.VOM.viewerDisplayed || u.VOM.viewerMediaIsChanged)
      }

      function Ve(e) {
          e.stopPropagation(), e.preventDefault()
      }

      function Ye() {
          u.VOM.viewerDisplayed && (u.VOM.toolbarsDisplayed = !1, _e(0))
      }

      function Ae() {
          u.VOM.viewerDisplayed && (u.VOM.toolbarsDisplayed = !0, _e(1), u.VOM.toolsHide())
      }

      function _e(e) {
          null != u.VOM.$toolbar && u.VOM.$toolbar.css("opacity", e), null != u.VOM.$toolbarTL && u.VOM.$toolbarTL.css("opacity", e), null != u.VOM.$toolbarTR && u.VOM.$toolbarTR.css("opacity", e), u.VOM.$content.find(".nGY2ViewerAreaNext").css("opacity", e), u.VOM.$content.find(".nGY2ViewerAreaPrevious").css("opacity", e)
      }

      function Pe() {
          u.VOM.$viewer.off("touchstart click", ".ngy2viewerToolAction", Re), u.VOM.$viewer.on("touchstart click", ".ngy2viewerToolAction", Re)
      }

      function Re(t) {
          if (!((new Date).getTime() - u.timeLastTouchStart < 300)) {
              u.timeLastTouchStart = (new Date).getTime();
              var n = e(this),
                  i = n.data("ngy2action");
              if (null != i) {
                  switch (i) {
                      case "next":
                          Ve(t), Qe();
                          break;
                      case "previous":
                          Ve(t), qe();
                          break;
                      case "playPause":
                          t.stopPropagation(), He();
                          break;
                      case "zoomIn":
                          Ve(t), Ie() && Te(!0);
                          break;
                      case "zoomOut":
                          Ve(t), Ie() && Te(!1);
                          break;
                      case "minimize":
                          Ve(t), "std" == u.VOM.toolbarMode ? We() : Ue();
                          break;
                      case "fullScreen":
                          t.stopPropagation(), ngscreenfull.enabled && ngscreenfull.toggle();
                          break;
                      case "info":
                          t.stopPropagation(), ze(u.VOM.content.current.NGY2Item());
                          break;
                      case "close":
                          if (Ve(t), (new Date).getTime() - u.VOM.timeImgChanged < 400) return;
                          tt();
                          break;
                      case "download":
                          Ve(t), ce(u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx);
                          break;
                      case "share":
                          Ve(t), ge(u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx);
                          break;
                      case "linkOriginal":
                          Ve(t), Me(u.VOM.content.current.NGY2Item());
                          break;
                      case "rotateLeft":
                          Ve(t), Fe(-90);
                          break;
                      case "rotateRight":
                          Ve(t), Fe(90);
                          break;
                      case "shoppingcart":
                          Ve(t), he(u.VOM.items[u.VOM.content.current.vIdx].ngy2ItemIdx, "lightbox")
                  }
                  var a = u.O.fnImgToolbarCustClick;
                  0 == i.indexOf("custom") && null !== a && ("function" == typeof a ? a(i, n, u.VOM.content.current.NGY2Item()) : window[a](i, n, u.VOM.content.current.NGY2Item()))
              }
          }
      }

      function Fe(e) {
          var t = u.VOM.content.current.NGY2Item();
          "img" == t.mediaKind && (t.rotationAngle += e, t.rotationAngle = t.rotationAngle % 360, t.rotationAngle < 0 && (t.rotationAngle += 360), Xe(0), Ee(u.VOM.content.current, !0))
      }

      function ze(e) {
          var t = '<div class="nGY2PopupOneItem">' + e.title + "</div>";
          t += '<div class="nGY2PopupOneItemText">' + e.description + "</div>", "" != e.author && (t += '<div class="nGY2PopupOneItemText">' + u.O.icons.user + " " + e.author + "</div>"), "" != e.exif.model && (t += '<div class="nGY2PopupOneItemText">' + u.O.icons.config + " " + e.exif.model + "</div>");
          var n = u.O.icons.picture + ":";
          "" != e.exif.flash || "" != e.exif.focallength || "" != e.exif.fstop || "" != e.exif.exposure || "" != e.exif.iso || "" != e.exif.time ? (n += "<br>", n += "" == e.exif.flash ? "" : " &nbsp; " + e.exif.flash, n += "" == e.exif.focallength ? "" : " &nbsp; " + e.exif.focallength + "mm", n += "" == e.exif.fstop ? "" : " &nbsp; f" + e.exif.fstop, n += "" == e.exif.exposure ? "" : " &nbsp; " + e.exif.exposure + "s", n += "" == e.exif.iso ? "" : " &nbsp; " + e.exif.iso + " ISO", "" != e.exif.time && (n += " &nbsp; " + e.exif.time)) : n += " n/a", t += '<div class="nGY2PopupOneItemText">' + n + "</div>", "" != e.exif.location ? (t += '<div class="nGY2PopupOneItemText">' + u.O.icons.location + ' <a href="http://maps.google.com/maps?z=12&t=m&q=' + encodeURIComponent(e.exif.location) + '" target="_blank">' + e.exif.location + "</a></div>", t += '<iframe width="300" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?&amp;t=m&amp;q=' + encodeURIComponent(e.exif.location) + '&amp;output=embed"></iframe>') : t += '<div class="nGY2PopupOneItemText">' + u.O.icons.location + ": n/a</div>";
          var i = {
                  title: u.O.icons.viewerInfo,
                  content: t
              },
              a = u.O.fnPopupMediaInfo;
          null !== a && (i = "function" == typeof a ? a(e, i.title, i.content) : window[a](e, i.title, i.content)), fe(i.title, i.content, "Left")
      }

      function Be(e) {
          var t = '<div class="ngbt ngy2viewerToolAction ',
              n = e.replace(/^\s+|\s+$/g, "");
          switch (n) {
              case "minimizeButton":
              case "minimize":
                  var i = u.O.icons.viewerToolbarMin;
                  "min" == u.VOM.toolbarMode && (i = u.O.icons.viewerToolbarStd), t += 'minimizeButton nGEvent" data-ngy2action="minimize">' + i + "</div>";
                  break;
              case "previousButton":
              case "previous":
                  t += 'previousButton nGEvent" data-ngy2action="previous">' + u.O.icons.viewerPrevious + "</div>";
                  break;
              case "pageCounter":
                  t += 'pageCounter nGEvent"></div>';
                  break;
              case "nextButton":
              case "next":
                  t += 'nextButton nGEvent" data-ngy2action="next">' + u.O.icons.viewerNext + "</div>";
                  break;
              case "playPauseButton":
              case "playPause":
                  t += 'playButton playPauseButton nGEvent" data-ngy2action="playPause">' + u.O.icons.viewerPlay + "</div>";
                  break;
              case "rotateLeft":
                  t += 'rotateLeftButton nGEvent" data-ngy2action="rotateLeft">' + u.O.icons.viewerRotateLeft + "</div>";
                  break;
              case "rotateRight":
                  t += 'rotateRightButton nGEvent" data-ngy2action="rotateRight">' + u.O.icons.viewerRotateRight + "</div>";
                  break;
              case "downloadButton":
              case "download":
                  t += 'downloadButton nGEvent" data-ngy2action="download">' + u.O.icons.viewerDownload + "</div>";
                  break;
              case "zoomButton":
              case "zoom":
                  t += 'nGEvent" data-ngy2action="zoomIn">' + u.O.icons.viewerZoomIn + '</div><div class="ngbt ngy2viewerToolAction nGEvent" data-ngy2action="zoomOut">' + u.O.icons.viewerZoomOut + "</div>";
                  break;
              case "fullscreenButton":
              case "fullscreen":
                  var a = u.O.icons.viewerFullscreenOn;
                  ngscreenfull.enabled && u.VOM.viewerIsFullscreen && (a = u.O.icons.viewerFullscreenOff), t += 'setFullscreenButton fullscreenButton nGEvent" data-ngy2action="fullScreen">' + a + "</div>";
                  break;
              case "infoButton":
              case "info":
                  t += 'infoButton nGEvent" data-ngy2action="info">' + u.O.icons.viewerInfo + "</div>";
                  break;
              case "linkOriginalButton":
              case "linkOriginal":
                  t += 'linkOriginalButton nGEvent" data-ngy2action="linkOriginal">' + u.O.icons.viewerLinkOriginal + "</div>";
                  break;
              case "closeButton":
              case "close":
                  t += 'closeButton nGEvent" data-ngy2action="close">' + u.O.icons.buttonClose + "</div>";
                  break;
              case "shareButton":
              case "share":
                  t += 'nGEvent" data-ngy2action="share">' + u.O.icons.viewerShare + "</div>";
                  break;
              case "label":
                  t += '"><div class="label"><div class="title nGEvent" itemprop="name"></div><div class="description nGEvent" itemprop="description"></div></div></div>';
                  break;
              case "shoppingcart":
                  t += 'closeButton nGEvent" data-ngy2action="shoppingcart">' + u.O.icons.viewerShoppingcart + "</div>";
                  break;
              default:
                  if (0 == n.indexOf("custom")) {
                      var o = "",
                          r = u.O.fnImgToolbarCustInit;
                      if (null !== r && ("function" == typeof r ? r(n) : window[r](n)), null == o || "" == o) {
                          var l = n.substring(6);
                          o = u.O.icons["viewerCustomTool" + l]
                      }
                      t += "ngy2CustomBtn " + n + ' nGEvent" data-ngy2action="' + n + '">' + o + "</div>"
                  } else t = ""
          }
          return t
      }

      function He() {
          u.VOM.playSlideshow ? (window.clearTimeout(u.VOM.playSlideshowTimerID), u.VOM.playSlideshow = !1, u.VOM.$viewer.find(".playPauseButton").html(u.O.icons.viewerPlay)) : (u.VOM.playSlideshow = !0, Qe(), u.VOM.$viewer.find(".playPauseButton").html(u.O.icons.viewerPause))
      }

      function Ue() {
          u.VOM.toolbarMode = "std";
          for (var e = "", t = u.O.viewerToolbar.standard.split(","), n = 0, i = t.length; n < i; n++) e += Be(t[n]);
          u.VOM.$toolbar.find(".toolbar").html(e), je()
      }

      function We() {
          if (null == u.O.viewerToolbar.minimized || "" == u.O.viewerToolbar.minimized) Ue();
          else {
              u.VOM.toolbarMode = "min";
              for (var e = "", t = u.O.viewerToolbar.minimized.split(","), n = 0, i = t.length; n < i; n++) e += Be(t[n]);
              u.VOM.$toolbar.find(".toolbar").html(e), je()
          }
      }

      function je() {
          var e = u.VOM.content.current.vIdx;
          if (null != e) {
              var t = u.VOM.content.current.NGY2Item(),
                  n = !1;
              void 0 !== t.title && "" != t.title ? (u.VOM.$viewer.find(".ngy2viewerToolAction").find(".title").html(t.title), n = !0) : u.VOM.$viewer.find(".ngy2viewerToolAction").find(".title").html(""), void 0 !== t.description && "" != t.description ? (u.VOM.$viewer.find(".ngy2viewerToolAction").find(".description").html(t.description), n = !0) : u.VOM.$viewer.find(".ngy2viewerToolAction").find(".description").html(""), n ? u.VOM.$viewer.find(".ngy2viewerToolAction").find(".label").show() : u.VOM.$viewer.find(".ngy2viewerToolAction").find(".label").hide();
              var i = u.VOM.items.length;
              i > 0 && u.VOM.$viewer.find(".pageCounter").html(u.VOM.items[e].mediaNumber + "/" + i);
              var a = u.VOM.$viewer.find(".ngy2CustomBtn"),
                  o = u.O.fnImgToolbarCustDisplay;
              a.length > 0 && null !== o && ("function" == typeof o ? o(a, t) : window[o](a, t)), Pe()
          }
      }

      function Xe(e) {
          if (u.VOM.swipePosX = e, null == u.CSStransformName);
          else {
              u.VOM.content.current.$media[0].style[u.CSStransformName] = "translate(" + e + "px, 0px)";
              var t = u.VOM.content.previous.NGY2Item(),
                  n = u.VOM.content.next.NGY2Item();
              if (u.O.imageTransition.startsWith("SWIPE")) {
                  t.mediaTransition() && et(u.VOM.content.previous, 1), n.mediaTransition() && et(u.VOM.content.next, 1);
                  var i = Math.min(Math.max(Math.abs(e) / u.VOM.window.lastWidth, .8), 1);
                  if ("SWIPE" == u.O.imageTransition && (i = 1), e > 0) {
                      let a = u.VOM.window.lastWidth;
                      t.mediaTransition() && (u.VOM.content.previous.$media[0].style[u.CSStransformName] = "translate(" + (-a + e) + "px, 0px) scale(" + i + ")"), n.mediaTransition() && (u.VOM.content.next.$media[0].style[u.CSStransformName] = "translate(" + a + "px, 0px) scale(" + i + ")")
                  } else {
                      let a = -u.VOM.window.lastWidth;
                      n.mediaTransition() && (u.VOM.content.next.$media[0].style[u.CSStransformName] = "translate(" + (-a + e) + "px, 0px) scale(" + i + ")"), t.mediaTransition() && (u.VOM.content.previous.$media[0].style[u.CSStransformName] = "translate(" + a + "px, 0px) scale(" + i + ")")
                  }
              }
              if ("SLIDEAPPEAR" == u.O.imageTransition)
                  if (u.VOM.content.previous.$media[0].style[u.CSStransformName] = "", u.VOM.content.next.$media[0].style[u.CSStransformName] = "", e < 0) {
                      let i = -e / u.VOM.window.lastWidth;
                      n.mediaTransition() && et(u.VOM.content.next, i), t.mediaTransition() && et(u.VOM.content.previous, 0)
                  } else {
                      let i = e / u.VOM.window.lastWidth;
                      t.mediaTransition() && et(u.VOM.content.previous, i), n.mediaTransition() && et(u.VOM.content.next, 0)
                  }
          }
      }

      function Qe(e) {
          e = e || 0, u.VOM.viewerMediaIsChanged || (new Date).getTime() - u.VOM.timeImgChanged < 300 || (at("lightboxNextImage"), Ze("nextImage", e))
      }

      function qe(e) {
          e = e || 0, u.VOM.viewerMediaIsChanged || (new Date).getTime() - u.VOM.timeImgChanged < 300 || (u.VOM.playSlideshow && He(), at("lightboxPreviousImage"), Ze("previousImage", e))
      }

      function Ze(e, t) {
          t = t || 0, u.O.debugMode && console.timeline && console.timeline("nanogallery2_viewer"), u.VOM.playSlideshow && window.clearTimeout(u.VOM.playSlideshowTimerID);
          var n = null,
              i = null;
          switch (u.VOM.timeImgChanged = (new Date).getTime(), u.VOM.viewerMediaIsChanged = !0, u.VOM.zoom.isZooming = !1, nt(!0), e) {
              case "":
                  n = u.VOM.content.current, i = u.VOM.content.current;
                  break;
              case "previousImage":
                  n = u.VOM.content.current, i = u.VOM.content.previous;
                  break;
              default:
                  n = u.VOM.content.current, i = u.VOM.content.next
          }
          if (rt(i.NGY2Item().albumID, i.NGY2Item().GetID()), "" != e) {
              var a = u.GOM.cache.viewport,
                  o = "",
                  r = 500 * (a.w - Math.abs(u.VOM.swipePosX)) / a.w;
              if (t > 0 && (r = Math.min((a.w - Math.abs(u.VOM.swipePosX)) / t, r), o = "linear"), null == u.CSStransformName) et(i, 1), et(n, 1), Je(e);
              else switch (u.O.imageTransition) {
                  case "SWIPE":
                  case "SWIPE2":
                      var l = "nextImage" == e ? -a.w : a.w;
                      i.$media[0].style[u.CSStransformName] = "translate(" + -l + "px, 0px) ", 0 == t && (o = "swipe" == u.O.imageTransition ? "easeInOutSine" : "easeOutCubic"), et(u.VOM.content.current, 1), u.VOM.content.current.$media[0].style[u.CSStransformName] = "translate(0px, 0px)", et(i, 1), (new NGTweenable).tween({
                          from: {
                              t: u.VOM.swipePosX
                          },
                          to: {
                              t: "nextImage" == e ? -a.w : a.w
                          },
                          attachment: {
                              dT: e,
                              new_content_item: i,
                              dir: l,
                              media_transition: i.NGY2Item().mediaTransition()
                          },
                          duration: r,
                          easing: o,
                          step: function(e, t) {
                              if (u.VOM.content.current.$media[0].style[u.CSStransformName] = "translate(" + e.t + "px, 0px)", t.media_transition) {
                                  var n = Math.min(Math.max(Math.abs(e.t) / u.VOM.window.lastWidth, .8), 1);
                                  "SWIPE" == u.O.imageTransition && (n = 1), t.new_content_item.$media[0].style[u.CSStransformName] = "translate(" + (-t.dir + e.t) + "px, 0px) scale(" + n + ")"
                              }
                          },
                          finish: function(e, t) {
                              u.VOM.content.current.$media[0].style[u.CSStransformName] = "", et(u.VOM.content.current, 0), t.new_content_item.$media[0].style[u.CSStransformName] = "", Je(t.dT)
                          }
                      });
                      break;
                  case "SLIDEAPPEAR":
                  default:
                      var s = Math.abs(u.VOM.swipePosX) / u.VOM.window.lastWidth;
                      i.$media[0].style[u.CSStransformName] = "", 0 == t && (o = "easeInOutSine"), (new NGTweenable).tween({
                          from: {
                              o: s,
                              t: u.VOM.swipePosX
                          },
                          to: {
                              o: 1,
                              t: "nextImage" == e ? -a.w : a.w
                          },
                          attachment: {
                              dT: e,
                              new_content_item: i,
                              media_transition: i.NGY2Item().mediaTransition()
                          },
                          delay: 30,
                          duration: r,
                          easing: o,
                          step: function(e, t) {
                              u.VOM.content.current.$media[0].style[u.CSStransformName] = "translate(" + e.t + "px, 0px)", t.media_transition && et(t.new_content_item, e.o)
                          },
                          finish: function(e, t) {
                              u.VOM.content.current.$media[0].style[u.CSStransformName] = "", Je(t.dT)
                          }
                      })
              }
          }
      }

      function Je(e) {
          var t = 0;
          switch (e) {
              case "":
                  t = u.VOM.content.current.vIdx;
                  break;
              case "previousImage":
                  t = u.VOM.content.previous.vIdx;
                  break;
              default:
                  t = u.VOM.content.next.vIdx
          }
          u.VOM.content.current.vIdx = t, u.VOM.content.next.vIdx = u.VOM.IdxNext(), u.VOM.content.previous.vIdx = u.VOM.IdxPrevious(), u.VOM.gallery.Resize(), u.VOM.gallery.SetThumbnailActive();
          var n = u.VOM.content.current.NGY2Item();
          je(), u.O.debugMode && console.timeline && console.timelineEnd("nanogallery2_viewer");
          var i = u.O.fnImgDisplayed;
          if (null !== i && ("function" == typeof i ? i(n) : window[i](n)), u.VOM.swipePosX = 0, "" != e) {
              u.VOM.content.current.$media.removeClass("imgCurrent");
              var a = u.VOM.content.current.$media;
              switch (e) {
                  case "nextImage":
                      u.VOM.content.current.$media = u.VOM.content.next.$media, u.VOM.content.next.$media = a;
                      break;
                  case "previousImage":
                      u.VOM.content.current.$media = u.VOM.content.previous.$media, u.VOM.content.previous.$media = a
              }
          }
          u.VOM.content.current.$media.addClass("imgCurrent");
          var o = u.VOM.$content.find(".nGY2ViewerMediaPan");
          u.VOM.content.current.$media.insertAfter(o.last()), "img" == n.mediaKind && 0 == n.imageWidth ? et(u.VOM.content.current, 0) : (u.VOM.content.current.$media.children().eq(0).attr("class", "nGY2ViewerMediaLoaderHidden"), et(u.VOM.content.current, 1)), u.VOM.content.next.$media.empty();
          var r = u.VOM.content.next.NGY2Item(),
              l = '<div class="nGY2ViewerMediaLoaderDisplayed"></div>';
          "img" == r.mediaKind && 0 != r.imageWidth && 0 != r.imageHeight && (l = '<div class="nGY2ViewerMediaLoaderHidden"></div>'), u.VOM.content.next.$media.append(l + r.mediaMarkup), et(u.VOM.content.next, 0), et(u.VOM.content.previous, 0), "img" == r.mediaKind ? u.VOM.ImageLoader.loadImage(Ke, r) : Ce(u.VOM.content.next.$media), u.VOM.content.previous.$media.empty();
          var s = u.VOM.content.previous.NGY2Item();
          l = '<div class="nGY2ViewerMediaLoaderDisplayed"></div>', "img" == s.mediaKind && 0 != s.imageWidth && 0 != s.imageHeight && (l = '<div class="nGY2ViewerMediaLoaderHidden"></div>'), u.VOM.content.previous.$media.append(l + s.mediaMarkup), et(u.VOM.content.previous, 0), et(u.VOM.content.next, 0), "img" == s.mediaKind ? u.VOM.ImageLoader.loadImage(Ke, s) : Ce(u.VOM.content.previous.$media), u.VOM.playSlideshow && u.VOM.content.current.$media.children().eq(1).ngimagesLoaded().always((function(e) {
              u.VOM.playSlideshow && (u.VOM.playSlideshowTimerID = window.setTimeout((function() {
                  Qe()
              }), u.VOM.slideshowDelay))
          })), nt(), u.VOM.viewerMediaIsChanged = !1, at("lightboxImageDisplayed")
      }

      function Ke(e, t, n, i) {
          n.imageWidth = e, n.imageHeight = t, u.VOM.content.current.NGY2Item() == n && (u.VOM.content.current.$media.children().eq(0).attr("class", "nGY2ViewerMediaLoaderHidden"), et(u.VOM.content.current, 1), u.VOM.zoom.userFactor = 1), u.VOM.content.next.NGY2Item() == n && u.VOM.content.next.$media.children().eq(0).attr("class", "nGY2ViewerMediaLoaderHidden"), u.VOM.content.previous.NGY2Item() == n && u.VOM.content.previous.$media.children().eq(0).attr("class", "nGY2ViewerMediaLoaderHidden"), Le()
      }

      function et(e, t) {
          var n = e.NGY2Item(),
              i = e.$media;
          "img" != n.mediaKind || 0 != n.imageWidth ? 0 == t ? i.children().css({
              opacity: 0,
              visibility: "hidden"
          }) : i.children().css({
              opacity: t,
              visibility: "visible"
          }) : i.children().eq(1).css({
              opacity: 0,
              visibility: "hidden"
          })
      }

      function tt(e) {
          if (null == e && (e = u.VOM.content.current.vIdx), u.VOM.viewerMediaIsChanged = !1, u.VOM.viewerDisplayed) {
              if (jQuery("body").removeClass("nGY2_body_scrollbar"), jQuery("#nGY2_body_scrollbar_style").remove(), u.VOM.playSlideshow && (window.clearTimeout(u.VOM.playSlideshowTimerID), u.VOM.playSlideshow = !1), u.VOM.hammertime.destroy(), u.VOM.hammertime = null, ngscreenfull.enabled && u.VOM.viewerIsFullscreen && (u.VOM.viewerIsFullscreen = !1, ngscreenfull.exit()), jQuery(".nGY2ViewerContainer").remove(), u.VOM.$baseCont = null, u.VOM.viewerDisplayed = !1, u.O.lightboxStandalone) return;
              if (u.O.thumbnailAlbumDisplayImage)
                  if (null == e);
                  else {
                      var t = u.I[u.VOM.items[e].ngy2ItemIdx],
                          n = NGY2Item.Get(u, t.albumID);
                      u.GOM.albumIdx != n.albumID ? g("-1", n.albumID) : (x(), rt("", ""), U())
                  }
              else null != e && (-1 == u.GOM.albumIdx ? g("", u.I[u.VOM.items[e].ngy2ItemIdx].albumID) : (x(), rt(u.I[u.VOM.items[e].ngy2ItemIdx].albumID, ""), U()));
              u.VOM.timeImgChanged = (new Date).getTime()
          }
      }

      function nt(e) {
          if (e = void 0 !== e && e, null !== u.VOM.$toolbar) {
              var t = u.VOM.$viewer.width(),
                  n = u.VOM.$viewer.height();
              if (null != u.VOM.content.current.$media.children().eq(1) && -1 != u.VOM.content.current.vIdx && (e || u.VOM.window.lastWidth != t || u.VOM.window.lastHeight != n)) {
                  u.VOM.window.lastWidth = t, u.VOM.window.lastHeight = n;
                  var i = 0,
                      a = 0;
                  switch ("none" != u.O.viewerGallery && (i = u.O.viewerGalleryTHeight + 10), "bottom" == u.O.viewerGallery && (a = i), u.O.viewerToolbar.position) {
                      case "top":
                      case "topOverImage":
                          u.VOM.$content.css({
                              height: n,
                              width: t,
                              top: 0
                          }), u.VOM.$toolbar.css({
                              top: 0,
                              bottom: ""
                          });
                          break;
                      case "bottom":
                      case "bottomOverImage":
                      default:
                          n -= a, u.VOM.$content.css({
                              height: n,
                              width: t,
                              bottom: -a,
                              top: 0
                          }), u.VOM.$toolbar.css({
                              bottom: i
                          })
                  }!u.VOM.viewerMediaIsChanged && u.VOM.zoom.isZooming ? Le() : u.VOM.zoom.isZooming || 0 == u.VOM.zoom.userFactor && 0 == u.VOM.panPosX && 0 == u.VOM.panPosY && 0 == u.VOM.zoom.posX && 0 == u.VOM.zoom.posY ? (u.VOM.zoom.userFactor = 1, u.VOM.zoom.isZooming = !1, u.VOM.panPosX = 0, u.VOM.panPosY = 0, u.VOM.zoom.posX = 0, u.VOM.zoom.posY = 0, Le()) : (u.VOM.zoom.isZooming = !0, (new NGTweenable).tween({
                      from: {
                          userFactor: u.VOM.zoom.userFactor,
                          panPosX: u.VOM.panPosX,
                          panPosY: u.VOM.panPosY,
                          zoomPosX: u.VOM.zoom.posX,
                          zoomPosY: u.VOM.zoom.posY
                      },
                      to: {
                          userFactor: 1,
                          panPosX: 0,
                          panPosY: 0,
                          zoomPosX: 0,
                          zoomPosY: 0
                      },
                      easing: "easeInOutSine",
                      delay: 0,
                      duration: 150,
                      step: function(e) {
                          u.VOM.zoom.userFactor = e.userFactor, u.VOM.panPosX = e.panPosX, u.VOM.panPosY = e.panPosY, u.VOM.zoom.posX = e.zoomPosX, u.VOM.zoom.posY = e.zoomPosY, Le()
                      },
                      finish: function(e) {
                          u.VOM.zoom.isZooming = !1
                      }
                  }))
              }
          }
      }

      function it(e) {
          const t = /(auto|scroll)/,
              n = (e, t) => null === e.parentNode ? t : n(e.parentNode, t.concat([e])),
              i = (e, t) => getComputedStyle(e, null).getPropertyValue(t),
              a = e => t.test((e => i(e, "overflow") + i(e, "overflow-y") + i(e, "overflow-x"))(e));
          return (e => {
              if (!(e instanceof HTMLElement || e instanceof SVGElement)) return;
              const t = n(e.parentNode, []);
              for (let e = 0; e < t.length; e += 1) {
                  if (t[e] === document.body) return null;
                  if (a(t[e])) return t[e]
              }
              return document.scrollingElement || document.documentElement
          })(e)
      }

      function at(e) {
          var t = e + ".nanogallery2",
              n = null;
          try {
              n = new Event(t)
          } catch (e) {
              (n = document.createEvent("Event")).initEvent(t, !1, !1)
          }
          u.$E.base.trigger(t, n)
      }

      function ot() {
          if (!u.O.locationHash) return !1;
          var e = "#nanogallery/" + u.baseEltID + "/",
              t = location.hash;
          if (u.O.debugMode && (console.log("------------------------ PROCESS LOCATION HASH"), console.log("newLocationHash1: " + t), console.log("G.locationHashLastUsed: " + u.locationHashLastUsed)), "" == t && "" !== u.locationHashLastUsed) return u.O.debugMode && console.log("display root album"), u.locationHashLastUsed = "", u.O.debugMode && console.log("new3 G.locationHashLastUsed: " + u.locationHashLastUsed), g("", "0"), !0;
          if (t != u.locationHashLastUsed) {
              if (0 == t.indexOf(e)) {
                  var n = p(t.substring(e.length));
                  return "0" != n.imageID ? (u.O.debugMode && console.log("display image: " + n.albumID + "-" + n.imageID), Q(n.imageID, n.albumID), !0) : (u.O.debugMode && console.log("display album: " + n.albumID), g("-1", n.albumID), !0)
              }
              return !1
          }
      }

      function rt(e, t) {
          if (!u.O.locationHash || u.O.lightboxStandalone) return !1;
          if (u.O.debugMode && console.log("------------------------ SET LOCATION HASH"), "" == t && ("-1" == e || "0" == e || u.O.album == e)) return "" != location.hash && ("pushState" in history ? history.pushState("", document.title, window.location.pathname + window.location.search) : location.hash = ""), u.locationHashLastUsed = "", void(u.O.debugMode && console.log("new2 G.locationHashLastUsed: " + u.locationHashLastUsed));
          var n = "#nanogallery/" + u.baseEltID + "/" + e;
          "" != t && (n += "/" + t);
          var i = location.hash;
          if (u.O.debugMode && (console.log("newLocationHash2: " + n), console.log("location.hash: " + i)), u.locationHashLastUsed = n, u.O.debugMode && console.log("new G.locationHashLastUsed: " + u.locationHashLastUsed), "" == i || i != n) try {
              top.location.hash = n
          } catch (e) {
              u.O.locationHash = !1
          }
      }

      function lt() {
          C();
          var e = u.GOM.curNavLevel,
              t = u.GOM.curWidth;
          if (u.VOM.viewerDisplayed) nt(), u.VOM.gallery.Resize();
          else if (u.galleryResizeEventEnabled) {
              var n = ht();
              if (-1 != u.GOM.albumIdx) {
                  var i = u.tn.settings;
                  if ("MOSAIC" == u.layout.engine) {
                      if (JSON.stringify(i.mosaic[e][t]) !== JSON.stringify(i.mosaic[e][n])) return u.GOM.curWidth = n, u.GOM.pagination.currentPage = 0, void w(u.GOM.albumIdx)
                  } else if (i.height[e][t] != i.height[e][n] || i.width[e][t] != i.width[e][n] || i.gutterHeight[e][t] != i.gutterHeight[e][n] || i.gutterWidth[e][t] != i.gutterWidth[e][n]) return u.GOM.curWidth = n, u.GOM.pagination.currentPage = 0, void w(u.GOM.albumIdx)
              }
              x()
          }
      }

      function st() {
          u.VOM.viewerDisplayed || ut()
      }

      function ut() {
          0 == u.galleryResizeEventEnabled ? window.setTimeout(ut, 10) : x()
      }

      function ct(e, t) {
          return "" != u.i18nLang && void 0 !== e[t + "_" + u.i18nLang] && e[t + "_" + u.i18nLang].length > 0 ? e[t + "_" + u.i18nLang] : e[t]
      }

      function ht() {
          var e = u.GOM.cache.viewport.w;
          return u.O.breakpointSizeSM > 0 && e < u.O.breakpointSizeSM ? "xs" : u.O.breakpointSizeME > 0 && e < u.O.breakpointSizeME ? "sm" : u.O.breakpointSizeLA > 0 && e < u.O.breakpointSizeLA ? "me" : u.O.breakpointSizeXL > 0 && e < u.O.breakpointSizeXL ? "la" : "xl"
      }

      function dt(e) {
          for (var t = document.createElement("div"), n = 0; n < e.length; ++n)
              if (void 0 !== t.style[e[n]]) return e[n];
          return null
      }
  }
  /*!
   * imagesLoaded PACKAGED v4.1.1
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  e.nanogallery2 = function(e, t) {
          var i = this;
          i.$e = jQuery(e), i.e = e, i.$e.data("nanogallery2data", i), i.init = function() {
              void 0 === window.NGY2Item && (window.NGY2Tools = function() {
                  function e() {}
                  return e.FilterAlbumName = function(e, t) {
                      var n = e.toUpperCase();
                      if (!(this.albumList.length > 0)) {
                          var i = !1;
                          if (null !== this.allowList) {
                              for (a = 0; a < this.allowList.length; a++) - 1 !== n.indexOf(this.allowList[a]) && (i = !0);
                              if (!i) return !1
                          }
                          if (null !== this.blockList)
                              for (a = 0; a < this.blockList.length; a++)
                                  if (-1 !== n.indexOf(this.blockList[a])) return !1;
                          return !0
                      }
                      for (var a = 0; a < this.albumList.length; a++)
                          if (n === this.albumList[a].toUpperCase() || t === this.albumList[a]) return !0
                  }, e.NanoAlert = function(t, n, i) {
                      e.NanoConsoleLog.call(t, n), null != t.$E.conConsole && (t.$E.conConsole.css({
                          visibility: "visible",
                          minHeight: "100px"
                      }), 0 == i ? t.$E.conConsole.append("<p>" + n + "</p>") : t.$E.conConsole.append("<p>nanogallery2: " + n + " [" + t.baseEltID + "]</p>"))
                  }, e.NanoConsoleLog = function(e, t) {
                      window.console && console.log("nanogallery2: " + t + " [" + e.baseEltID + "]")
                  }, e.PreloaderDisplay = function(e) {
                      if (!0 === e) {
                          if (this.$E.conLoadingB.removeClass("nanoGalleryLBarOff").addClass("nanoGalleryLBar"), null != this.GOM.albumIdxLoading && -1 != this.GOM.albumIdxLoading) {
                              this.I[this.GOM.albumIdxLoading].$Elts[".nGY2TnImg"].addClass("nGY2GThumbnailLoaderDisplayed")
                          }
                      } else if (this.$E.conLoadingB.removeClass("nanoGalleryLBar").addClass("nanoGalleryLBarOff"), null != this.GOM.albumIdxLoading && -1 != this.GOM.albumIdxLoading) {
                          this.I[this.GOM.albumIdxLoading].$Elts[".nGY2TnImg"].removeClass("nGY2GThumbnailLoaderDisplayed")
                      }
                  }, e.AreaShuffle = function(e) {
                      for (var t, n, i = e.length; i; t = Math.floor(Math.random() * i), n = e[--i], e[i] = e[t], e[t] = n);
                      return e
                  }, e.GetImageTitleFromURL = function(e) {
                      return "%filename" == this.O.thumbnailLabel.get("title") ? e.split("/").pop().replace("_", " ") : "%filenameNoExt" == this.O.thumbnailLabel.get("title") ? e.split("/").pop().split(".").shift().replace("_", " ") : ""
                  }, e.AlbumPostProcess = function(t) {
                      var n = this.gallerySorting[this.GOM.curNavLevel],
                          i = this.galleryMaxItems[this.GOM.curNavLevel];
                      if ("" != n || i > 0) {
                          var a = this.I.filter((function(e) {
                              return e.albumID == t && "albumUp" != e.kind
                          }));
                          switch (n) {
                              case "RANDOM":
                                  a = e.AreaShuffle(a);
                                  break;
                              case "REVERSED":
                                  a = a.reverse();
                                  break;
                              case "TITLEASC":
                                  a.sort((function(e, t) {
                                      return e.title.toUpperCase() < t.title.toUpperCase() ? -1 : e.title.toUpperCase() > t.title.toUpperCase() ? 1 : 0
                                  }));
                                  break;
                              case "TITLEDESC":
                                  a.sort((function(e, t) {
                                      return e.title.toUpperCase() > t.title.toUpperCase() ? -1 : e.title.toUpperCase() < t.title.toUpperCase() ? 1 : 0
                                  }))
                          }
                          i > 0 && a.length > i && a.splice(i - 1, a.length - i), this.I.ngy2removeIf((function(e) {
                              return e.albumID == t && "albumUp" != e.kind
                          })), this.I.push.apply(this.I, a)
                      }
                  }, e
              }(), window.NGY2Item = function() {
                  var e = 1;

                  function t(t) {
                      var n = 0;
                      n = null == t ? e++ : t, this.GetID = function() {
                          return n
                      }, this.kind = "", this.mediaKind = "img", this.mediaMarkup = "", this.G = null, this.title = "", this.description = "", this.albumID = 0, this.src = "", this.width = 0, this.height = 0, this.destinationURL = "", this.downloadURL = "", this.author = "", this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.resizedContentWidth = 0, this.resizedContentHeight = 0, this.thumbs = {
                          url: {
                              l1: {
                                  xs: "",
                                  sm: "",
                                  me: "",
                                  la: "",
                                  xl: ""
                              },
                              lN: {
                                  xs: "",
                                  sm: "",
                                  me: "",
                                  la: "",
                                  xl: ""
                              }
                          },
                          width: {
                              l1: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              },
                              lN: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              }
                          },
                          height: {
                              l1: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              },
                              lN: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              }
                          }
                      }, this.thumbnailImgRevealed = !1, this.imageDominantColors = null, this.imageDominantColor = null, this.featured = !1, this.flickrThumbSizes = {}, this.picasaThumbs = null, this.hovered = !1, this.hoverInitDone = !1, this.contentIsLoaded = !1, this.contentLength = 0, this.numberItems = 0, this.mediaNumber = 0, this.mediaCounter = 0, this.eltTransform = [], this.eltFilter = [], this.eltEffect = [], this.paginationLastPage = 0, this.paginationLastWidth = 0, this.customData = {}, this.selected = !1, this.imageWidth = 0, this.imageHeight = 0, this.$elt = null, this.$Elts = [], this.tags = [], this.albumTagList = [], this.albumTagListSel = [], this.exif = {
                          exposure: "",
                          flash: "",
                          focallength: "",
                          fstop: "",
                          iso: "",
                          model: "",
                          time: "",
                          location: ""
                      }, this.deleted = !1, this.rotationAngle = 0
                  }
                  t.Get = function(e, t) {
                      for (var n = e.I.length, i = 0; i < n; i++)
                          if (e.I[i].GetID() == t) return e.I[i];
                      return null
                  }, t.GetIdx = function(e, t) {
                      for (var n = e.I.length, i = 0; i < n; i++)
                          if (e.I[i].GetID() == t) return i;
                      return -1
                  }, t.New = function(e, n, i, o, r, l, s) {
                      var u = t.Get(e, r);
                      if (null !== e.O.titleTranslationMap) {
                          let t = e.O.titleTranslationMap.find(e => e.title === n);
                          void 0 !== t && (n = t.replace)
                      }
                      if (-1 != r && 0 != r && "image gallery by nanogallery2 [build]" != n && e.O.thumbnailLevelUp && 0 == u.getContentLength(!1) && "" == e.O.album) {
                          let n = new t("0");
                          e.I.push(n), u.contentLength += 1, n.title = "UP", n.albumID = r, n.kind = "albumUp", n.G = e, jQuery.extend(!0, n.thumbs.width, e.tn.defaultSize.width), jQuery.extend(!0, n.thumbs.height, e.tn.defaultSize.height)
                      }
                      var c = t.Get(e, o);
                      null === c && (c = new t(o), e.I.push(c), -1 != r && "image gallery by nanogallery2 [build]" != n && (u.contentLength += 1)), c.G = e, c.albumID = r, c.kind = l, "image" == l && (u.mediaCounter += 1, c.mediaNumber = u.mediaCounter);
                      var h = e.O.thumbnailFeaturedKeyword;
                      if ("" != h) {
                          h = h.toUpperCase();
                          var d = n.toUpperCase().indexOf(h);
                          d > -1 && (c.featured = !0, n = n.substring(0, d) + n.substring(d + h.length, n.length)), (d = i.toUpperCase().indexOf(h)) > -1 && (c.featured = !0, i = i.substring(0, d) + i.substring(d + h.length, i.length))
                      }
                      if ("string" == typeof e.galleryFilterTags.Get()) switch (e.galleryFilterTags.Get().toUpperCase()) {
                          case "TITLE":
                              {
                                  let e, t = /(?:^|\W)#(\w+)(?!\w)/g,
                                      i = [];
                                  for (; e = t.exec(n);) i.push(e[1].replace(/^\s*|\s*$/, ""));c.setTags(i),
                                  n = n.split("#").join("");
                                  break
                              }
                          case "DESCRIPTION":
                              {
                                  let e, t = /(?:^|\W)#(\w+)(?!\w)/g,
                                      n = [];
                                  for (; e = t.exec(i);) n.push(e[1].replace(/^\s*|\s*$/, ""));c.setTags(n),
                                  i = i.split("#").join("");
                                  break
                              }
                      } else "" != s && null != s && c.setTags(s.split(" "));
                      return c.title = a(e, n), c.description = a(e, i), c
                  }, t.prototype.delete = function() {
                      this.deleted = !0, this.G.I[t.GetIdx(this.G, this.albumID)].contentLength--, this.G.I[t.GetIdx(this.G, this.albumID)].numberItems--;
                      for (var e = this.G.GOM.items.length, n = this.GetID(), i = -1, a = -1, o = 0; o < e; o++) {
                          var r = this.G.GOM.items[o],
                              l = this.G.I[r.thumbnailIdx];
                          l.GetID() == n ? r.neverDisplayed || (i = r.thumbnailIdx, a = o) : -1 != i && (r.neverDisplayed || (l.$getElt(".nGY2GThumbnail").data("index", o - 1), l.$getElt(".nGY2GThumbnailImg").data("index", o - 1)))
                      }
                      if (-1 != i) {
                          var s = this.G;
                          1 == this.selected && (this.selected = !1, s.GOM.nbSelected--), null !== s.I[i].$elt && s.I[i].$elt.remove(), s.GOM.items.splice(a, 1), -1 != s.GOM.lastDisplayedIdx && (s.GOM.lastDisplayedIdx -= 1)
                      }
                  }, t.prototype.addToGOM = function() {
                      for (var e = this.GetID(), t = this.G.I.length, n = 0; n < t; n++) {
                          var i = this.G.I[n];
                          if (i.GetID() == e) {
                              var a = i.thumbImg().width,
                                  o = i.thumbImg().height;
                              0 == o && (o = this.G.tn.defaultSize.getHeight()), 0 == a && (a = this.G.tn.defaultSize.getWidth());
                              var r = new this.G.GOM.GTn(n, a, o);
                              this.G.GOM.items.push(r);
                              break
                          }
                      }
                  };
                  var i = {
                      "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      '"': "&quot;",
                      "'": "&#39;",
                      "/": "&#x2F;",
                      "`": "&#x60;",
                      "=": "&#x3D;"
                  };

                  function a(e, t) {
                      return 1 == e.O.allowHTMLinData ? t : String(t).replace(/[&<>"'`=\/]/g, (function(e) {
                          return i[e]
                      }))
                  }

                  function o(e, t) {
                      if ("0" === (e = String(e)) || 1 == t) return e;
                      var n = Number(e.replace(/[a-zA-Z]/g, "")),
                          i = e.match(/([^\-0-9\.]+)/g),
                          a = "";
                      return null != i && i.length > 0 && (a = i.join()), isNaN(n) || 0 == n ? e : (n *= t) + a
                  }
                  return t.get_nextId = function() {
                      return e
                  }, t.prototype.$getElt = function(e, t) {
                      return null == this.$elt ? null : (void 0 !== this.$Elts[e] && 1 == !t || (this.$Elts[e] = ".nGY2GThumbnail" == e ? this.$elt : this.$elt.find(e)), this.$Elts[e])
                  }, t.prototype.removeElt = function(e) {
                      if (null != this.$elt && null != this.$Elts[e]) {
                          this.$Elts[e].remove();
                          var t = this.$Elts.indexOf(e);
                          this.$Elts.splice(t, 1)
                      }
                  }, t.prototype.album = function() {
                      return this.G.I[t.GetIdx(this.G, this.albumID)]
                  }, t.prototype.mediaTransition = function() {
                      return this.G.O.viewerTransitionMediaKind.indexOf(this.mediaKind) > -1
                  }, t.prototype.imageSet = function(e, t, n) {
                      this.src = e, this.width = t, this.height = n
                  }, t.prototype.thumbSet = function(e, t, n, i, a) {
                      var o = ["xs", "sm", "me", "la", "xl"];
                      if (void 0 === i || "" == i || null == i)
                          for (var r = 0; r < o.length; r++) void 0 === a || "" == a ? (this.thumbs.url.l1[o[r]] = e, this.thumbs.height.l1[o[r]] = n, this.thumbs.width.l1[o[r]] = t, this.thumbs.url.lN[o[r]] = e, this.thumbs.height.lN[o[r]] = n, this.thumbs.width.lN[o[r]] = t) : (this.thumbs.url[a][o[r]] = e, this.thumbs.height[a][o[r]] = n, this.thumbs.width[a][o[r]] = t);
                      else void 0 === a || "" == a || null == a ? (this.thumbs.url.l1[i] = e, this.thumbs.height.l1[i] = n, this.thumbs.width.l1[i] = t, this.thumbs.url.lN[i] = e, this.thumbs.height.lN[i] = n, this.thumbs.width.lN[i] = t) : (this.thumbs.url[a][i] = e, this.thumbs.height[a][i] = n, this.thumbs.width[a][i] = t);
                      for (r = 0; r < o.length; r++) this.thumbs.height.l1[o[r]] = n;
                      for (r = 0; r < o.length; r++) this.G.tn.settings.height.lN[o[r]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[o[r]] == this.G.tn.settings.getW() && (this.thumbs.height.lN[o[r]] = n)
                  }, t.prototype.thumbSetImgHeight = function(e) {
                      for (var t = ["xs", "sm", "me", "la", "xl"], n = 0; n < t.length; n++) this.G.tn.settings.height.l1[t[n]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[t[n]] == this.G.tn.settings.getW() && (this.thumbs.height.l1[t[n]] = e);
                      for (n = 0; n < t.length; n++) this.G.tn.settings.height.lN[t[n]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[t[n]] == this.G.tn.settings.getW() && (this.thumbs.height.lN[t[n]] = e)
                  }, t.prototype.thumbSetImgWidth = function(e) {
                      for (var t = ["xs", "sm", "me", "la", "xl"], n = 0; n < t.length; n++) this.G.tn.settings.height.l1[t[n]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[t[n]] == this.G.tn.settings.getW() && (this.thumbs.width.l1[t[n]] = e);
                      for (n = 0; n < t.length; n++) this.G.tn.settings.height.lN[t[n]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[t[n]] == this.G.tn.settings.getW() && (this.thumbs.width.lN[t[n]] = e)
                  }, t.prototype.thumbImg = function() {
                      var e = {
                          src: "",
                          width: 0,
                          height: 0
                      };
                      return "image gallery by nanogallery2 [build]" == this.title ? (e.src = this.G.emptyGif, e.url = this.G.emptyGif, e) : (e.src = this.thumbs.url[this.G.GOM.curNavLevel][this.G.GOM.curWidth], e.width = this.thumbs.width[this.G.GOM.curNavLevel][this.G.GOM.curWidth], e.height = this.thumbs.height[this.G.GOM.curNavLevel][this.G.GOM.curWidth], e)
                  }, t.prototype.setTags = function(e) {
                      if (e.length > 0) {
                          this.tags = e;
                          for (var t = this.album().albumTagList, n = 0; n < e.length; n++) {
                              for (var i = !1, a = 0; a < t.length; a++) e[n].toUpperCase() == t[a].toUpperCase() && (i = !0);
                              0 == i && this.album().albumTagList.push(e[n])
                          }
                      }
                  }, t.prototype.checkTagFilter = function() {
                      if (0 != this.G.galleryFilterTags.Get() && this.album().albumTagList.length > 0) {
                          if (this.G.O.thumbnailLevelUp && "albumUp" == this.kind) return !0;
                          var e = !1,
                              t = this.album().albumTagListSel;
                          if (0 == t.length) return !0;
                          for (var n = 0; n < this.tags.length; n++)
                              for (var i = 0; i < t.length; i++)
                                  if (this.tags[n].toUpperCase() == t[i].toUpperCase()) {
                                      e = !0;
                                      break
                                  }
                          return e
                      }
                      return !0
                  }, t.prototype.isSearchTagFound = function() {
                      if ("" == this.G.GOM.albumSearchTags) return !0;
                      if (this.G.O.thumbnailLevelUp && "albumUp" == this.kind) return !0;
                      for (var e = 0; e < this.tags.length; e++)
                          if (this.tags[e].toUpperCase().indexOf(this.G.GOM.albumSearchTags) >= 0) return !0;
                      return !1
                  }, t.prototype.setMediaURL = function(e, t) {
                      this.src = e, this.mediaKind = t, "img" == t && (this.mediaMarkup = '<img class="nGY2ViewerMedia" src="' + e + '" alt=" " itemprop="contentURL" draggable="false">')
                  }, t.prototype.isToDisplay = function(e) {
                      return this.albumID == e && this.checkTagFilter() && this.isSearchFound() && this.isSearchTagFound() && 0 == this.deleted
                  }, t.prototype.getContentLength = function(e) {
                      if (0 == e || 0 == this.albumTagList.length || 0 == this.G.galleryFilterTags.Get()) return this.contentLength;
                      for (var t = this.G.I.length, n = 0, i = this.GetID(), a = 0; a < t; a++) {
                          this.G.I[a].isToDisplay(i) && n++
                      }
                      return n
                  }, t.prototype.isSearchFound = function() {
                      return "" == this.G.GOM.albumSearch || -1 != this.title.toUpperCase().indexOf(this.G.GOM.albumSearch)
                  }, t.prototype.responsiveURL = function() {
                      var e = "";
                      switch (this.G.O.kind) {
                          case "":
                          case "flickr":
                              e = this.src;
                              break;
                          case "picasa":
                          case "google":
                          case "google2":
                          default:
                              e = this.src
                      }
                      return e
                  }, t.prototype.ThumbnailImageReveal = function() {
                      0 == this.thumbnailImgRevealed && (this.thumbnailImgRevealed = !0, (new NGTweenable).tween({
                          from: {
                              opacity: 0
                          },
                          to: {
                              opacity: 1
                          },
                          attachment: {
                              item: this
                          },
                          delay: 30,
                          duration: 400,
                          easing: "easeOutQuart",
                          step: function(e, t) {
                              var n = t.item.$getElt(".nGY2TnImg");
                              null != n && n.css(e)
                          }
                      }))
                  }, t.prototype.CSSTransformApply = function(e) {
                      var t = this.eltTransform[e];
                      if (".nGY2GThumbnail" == e)
                          for (var n = t.$elt.length - 1, i = 1, a = 1, r = 1, l = 1, s = 1, u = 1, c = 1, h = n; h >= 0; h--) {
                              var d = "translateX(" + o(t.translateX, i) + ") translateY(" + o(t.translateY, a) + ") translateZ(" + o(t.translateZ, r) + ") scale(" + o(t.scale, c) + ") translate(" + o(t.translate, 1) + ")";
                              this.G.IE <= 9 || this.G.isGingerbread ? d += " rotate(" + o(t.rotateZ, u) + ")" : d += " rotateX(" + o(t.rotateX, l) + ") rotateY(" + o(t.rotateY, s) + ") rotateZ(" + o(t.rotateZ, u) + ") rotate(" + o(t.rotate, 1) + ")", t.$elt[h].style[this.G.CSStransformName] = d, n > 0 && (i -= this.G.tn.opt.Get("stacksTranslateX"), a -= this.G.tn.opt.Get("stacksTranslateY"), r -= this.G.tn.opt.Get("stacksTranslateZ"), l -= this.G.tn.opt.Get("stacksRotateX"), s -= this.G.tn.opt.Get("stacksRotateY"), u -= this.G.tn.opt.Get("stacksRotateZ"), c -= this.G.tn.opt.Get("stacksScale"))
                          } else if (null != t.$elt)
                              for (h = 0; h < t.$elt.length; h++)
                                  if (null != t.$elt[h]) {
                                      d = "translateX(" + t.translateX + ") translateY(" + t.translateY + ") translateZ(" + t.translateZ + ") scale(" + t.scale + ") translate(" + t.translate + ")";
                                      this.G.IE <= 9 || this.G.isGingerbread ? d += " rotate(" + t.rotateZ + ")" : d += " rotateX(" + t.rotateX + ") rotateY(" + t.rotateY + ") rotateZ(" + t.rotateZ + ") rotate(" + t.rotate + ")", t.$elt[h].style[this.G.CSStransformName] = d
                                  }
                  }, t.prototype.CSSTransformSet = function(e, t, n, i) {
                      null == this.eltTransform[e] && (this.eltTransform[e] = {
                          translateX: 0,
                          translateY: 0,
                          translateZ: 0,
                          rotateX: 0,
                          rotateY: 0,
                          rotateZ: 0,
                          scale: 1,
                          translate: "0px,0px",
                          rotate: 0
                      }, this.eltTransform[e].$elt = this.$getElt(e)), this.eltTransform[e][t] = n, !0 === i && (this.eltTransform[e].$elt = this.$getElt(e, !0))
                  }, t.prototype.CSSFilterApply = function(e) {
                      var t = this.eltFilter[e],
                          n = "blur(" + t.blur + ") brightness(" + t.brightness + ") grayscale(" + t.grayscale + ") sepia(" + t.sepia + ") contrast(" + t.contrast + ") opacity(" + t.opacity + ") saturate(" + t.saturate + ")";
                      if (null != t.$elt)
                          for (var i = 0; i < t.$elt.length; i++) null != t.$elt[i] && (t.$elt[i].style.WebkitFilter = n, t.$elt[i].style.filter = n)
                  }, t.prototype.CSSFilterSet = function(e, t, n, i) {
                      null == this.eltFilter[e] && (this.eltFilter[e] = {
                          blur: 0,
                          brightness: "100%",
                          grayscale: "0%",
                          sepia: "0%",
                          contrast: "100%",
                          opacity: "100%",
                          saturate: "100%"
                      }, this.eltFilter[e].$elt = this.$getElt(e)), this.eltFilter[e][t] = n, !0 === i && (this.eltTransform[e].$elt = this.$getElt(e, !0))
                  }, t.prototype.animate = function(e, t, i) {
                      if (null != this.$getElt()) {
                          var a = {};
                          a.G = this.G, a.item = this, a.effect = e, a.hoverIn = i, a.cssKind = "", i ? (null == this.eltEffect[e.element] && (this.eltEffect[e.element] = []), null == this.eltEffect[e.element][e.type] && (this.eltEffect[e.element][e.type] = {
                              initialValue: 0,
                              lastValue: 0
                          }), e.firstKeyframe && (this.eltEffect[e.element][e.type] = {
                              initialValue: e.from,
                              lastValue: e.from
                          }), a.animeFrom = e.from, a.animeTo = e.to, a.animeDuration = parseInt(e.duration), a.animeDelay = 30 + parseInt(e.delay + t), a.animeEasing = e.easing) : (a.animeFrom = this.eltEffect[e.element][e.type].lastValue, a.animeTo = this.eltEffect[e.element][e.type].initialValue, a.animeDuration = parseInt(e.durationBack), a.animeDelay = 30 + parseInt(e.delayBack + t), a.animeEasing = e.easingBack);
                          for (var o = ["translateX", "translateY", "translateZ", "scale", "rotateX", "rotateY", "rotateZ"], r = 0; r < o.length; r++)
                              if (e.type == o[r]) {
                                  a.cssKind = "transform";
                                  break
                              }
                          var l = ["blur", "brightness", "grayscale", "sepia", "contrast", "opacity", "saturate"];
                          for (r = 0; r < l.length; r++)
                              if (e.type == l[r]) {
                                  a.cssKind = "filter";
                                  break
                              }!i || ".nGY2GThumbnail" != e.element || "scale" != e.type && "rotateX" != e.type || (this.G.GOM.lastZIndex++, this.$getElt(e.element).css("z-index", this.G.GOM.lastZIndex));
                          var s = new NGTweenable;
                          a.tweenable = s, s.tween({
                              attachment: a,
                              from: {
                                  v: a.animeFrom
                              },
                              to: {
                                  v: a.animeTo
                              },
                              duration: a.animeDuration,
                              delay: a.animeDelay,
                              easing: a.animeEasing,
                              step: function(e, t) {
                                  if (null != t.item.$getElt())
                                      if (!t.hoverIn || t.item.hovered) {
                                          if (t.G.VOM.viewerDisplayed) t.tweenable.stop(!1);
                                          else if (e.v != t.animeFrom) {
                                              switch (t.cssKind) {
                                                  case "transform":
                                                      t.item.CSSTransformSet(t.effect.element, t.effect.type, e.v), t.item.CSSTransformApply(t.effect.element);
                                                      break;
                                                  case "filter":
                                                      t.item.CSSFilterSet(t.effect.element, t.effect.type, e.v), t.item.CSSFilterApply(t.effect.element);
                                                      break;
                                                  default:
                                                      var a = e.v;
                                                      "rgb(" != e.v.substring(0, 4) && "rgba(" != e.v.substring(0, 5) || (a = n(0, a)), t.item.$getElt(t.effect.element).css(t.effect.type, a)
                                              }
                                              i && (t.item.eltEffect[t.effect.element][t.effect.type].lastValue = e.v)
                                          }
                                      } else t.tweenable.stop(!1);
                                  else t.tweenable.stop(!1)
                              },
                              finish: function(e, t) {
                                  if (i && (t.item.eltEffect[t.effect.element][t.effect.type].lastValue = e.v), null != t.item.$getElt() && (!t.hoverIn || t.item.hovered) && !t.G.VOM.viewerDisplayed) switch (t.cssKind) {
                                      case "transform":
                                          t.item.CSSTransformSet(t.effect.element, t.effect.type, t.animeTo), t.item.CSSTransformApply(t.effect.element);
                                          break;
                                      case "filter":
                                          t.item.CSSFilterSet(t.effect.element, t.effect.type, t.animeTo), t.item.CSSFilterApply(t.effect.element);
                                          break;
                                      default:
                                          t.item.$getElt(t.effect.element).css(t.effect.type, t.animeTo)
                                  }
                              }
                          })
                      }
                  }, t
              }()), i.options = jQuery.extend(!0, {}, jQuery.nanogallery2.defaultOptions, t), i.nG2 = null, i.nG2 = new l, i.nG2.initiateGallery2(i.e, i.options)
          }, i.test = function() {}, i.init()
      }, jQuery.nanogallery2.defaultOptions = {
          kind: "",
          userID: "",
          photoset: "",
          album: "",
          blockList: "scrapbook|profil|auto backup",
          tagBlockList: "",
          allowList: "",
          albumList: "",
          albumList2: null,
          RTL: !1,
          flickrSkipOriginal: !0,
          flickrAPIKey: "",
          breadcrumbAutoHideTopLevel: !0,
          displayBreadcrumb: !0,
          breadcrumbOnlyCurrentLevel: !0,
          breadcrumbHideIcons: !0,
          theme: "nGY2",
          galleryTheme: "dark",
          viewerTheme: "dark",
          items: null,
          itemsBaseURL: "",
          thumbnailSelectable: !1,
          dataProvider: "",
          allowHTMLinData: !1,
          locationHash: !0,
          slideshowDelay: 3e3,
          slideshowAutoStart: !1,
          debugMode: !1,
          titleTranslationMap: null,
          galleryDisplayMoreStep: 2,
          galleryDisplayMode: "fullContent",
          galleryL1DisplayMode: null,
          galleryPaginationMode: "rectangles",
          galleryPaginationTopButtons: !0,
          galleryMaxRows: 2,
          galleryL1MaxRows: null,
          galleryLastRowFull: !1,
          galleryL1LastRowFull: null,
          galleryLayoutEngine: "default",
          paginationSwipe: !0,
          paginationVisiblePages: 10,
          galleryFilterTags: !1,
          galleryL1FilterTags: null,
          galleryFilterTagsMode: "single",
          galleryL1FilterTagsMode: null,
          galleryMaxItems: 0,
          galleryL1MaxItems: null,
          gallerySorting: "",
          galleryL1Sorting: null,
          galleryDisplayTransition: "none",
          galleryL1DisplayTransition: null,
          galleryDisplayTransitionDuration: 1e3,
          galleryL1DisplayTransitionDuration: null,
          galleryResizeAnimation: !1,
          galleryRenderDelay: 10,
          thumbnailCrop: !0,
          thumbnailL1Crop: null,
          thumbnailCropScaleFactor: 1.5,
          thumbnailLevelUp: !1,
          thumbnailAlignment: "fillWidth",
          thumbnailWidth: 300,
          thumbnailL1Width: null,
          thumbnailHeight: 200,
          thumbnailL1Height: null,
          thumbnailBaseGridHeight: 0,
          thumbnailL1BaseGridHeight: null,
          thumbnailGutterWidth: 2,
          thumbnailL1GutterWidth: null,
          thumbnailGutterHeight: 2,
          thumbnailL1GutterHeight: null,
          thumbnailBorderVertical: 2,
          thumbnailL1BorderVertical: null,
          thumbnailBorderHorizontal: 2,
          thumbnailL1BorderHorizontal: null,
          thumbnailFeaturedKeyword: "*featured",
          thumbnailAlbumDisplayImage: !1,
          thumbnailHoverEffect2: "toolsAppear",
          thumbnailBuildInit2: "",
          thumbnailStacks: 0,
          thumbnailL1Stacks: null,
          thumbnailStacksTranslateX: 0,
          thumbnailL1StacksTranslateX: null,
          thumbnailStacksTranslateY: 0,
          thumbnailL1StacksTranslateY: null,
          thumbnailStacksTranslateZ: 0,
          thumbnailL1StacksTranslateZ: null,
          thumbnailStacksRotateX: 0,
          thumbnailL1StacksRotateX: null,
          thumbnailStacksRotateY: 0,
          thumbnailL1StacksRotateY: null,
          thumbnailStacksRotateZ: 0,
          thumbnailL1StacksRotateZ: null,
          thumbnailStacksScale: 0,
          thumbnailL1StacksScale: null,
          thumbnailDisplayOutsideScreen: !0,
          thumbnailWaitImageLoaded: !0,
          thumbnailSliderDelay: 2e3,
          galleryBuildInit2: "",
          portable: !1,
          eventsDebounceDelay: 10,
          touchAnimation: !1,
          touchAnimationL1: void 0,
          touchAutoOpenDelay: 0,
          thumbnailLabel: {
              position: "overImage",
              align: "center",
              valign: "bottom",
              display: !0,
              displayDescription: !1,
              titleMaxLength: 0,
              titleMultiLine: !1,
              descriptionMaxLength: 0,
              descriptionMultiLine: !1,
              hideIcons: !0,
              title: ""
          },
          thumbnailToolbarImage: {
              topLeft: "select",
              topRight: "featured"
          },
          thumbnailToolbarAlbum: {
              topLeft: "select",
              topRight: "counter"
          },
          thumbnailDisplayOrder: "",
          thumbnailL1DisplayOrder: null,
          thumbnailDisplayInterval: 15,
          thumbnailL1DisplayInterval: null,
          thumbnailDisplayTransition: "fadeIn",
          thumbnailL1DisplayTransition: null,
          thumbnailDisplayTransitionEasing: "easeOutQuart",
          thumbnailL1DisplayTransitionEasing: null,
          thumbnailDisplayTransitionDuration: 240,
          thumbnailL1DisplayTransitionDuration: null,
          thumbnailOpenInLightox: !0,
          thumbnailOpenOriginal: !1,
          lightboxStandalone: !1,
          viewer: "internal",
          viewerFullscreen: !1,
          imageTransition: "swipe2",
          viewerTransitionMediaKind: "img",
          viewerZoom: !0,
          viewerImageDisplay: "",
          openOnStart: "",
          viewerHideToolsDelay: 4e3,
          viewerToolbar: {
              display: !1,
              position: "bottom",
              fullWidth: !1,
              align: "center",
              autoMinimize: 0,
              standard: "minimizeButton,label",
              minimized: "minimizeButton,label,infoButton,shareButton,fullscreenButton"
          },
          viewerTools: {
              topLeft: "pageCounter,playPauseButton",
              topRight: "rotateLeft,rotateRight,fullscreenButton,closeButton"
          },
          viewerGallery: "bottomOverMedia",
          viewerGalleryTWidth: 40,
          viewerGalleryTHeight: 40,
          breakpointSizeSM: 480,
          breakpointSizeME: 992,
          breakpointSizeLA: 1200,
          breakpointSizeXL: 1800,
          fnThumbnailInit: null,
          fnThumbnailHoverInit: null,
          fnThumbnailHover: null,
          fnThumbnailHoverOut: null,
          fnThumbnailDisplayEffect: null,
          fnViewerInfo: null,
          fnImgToolbarCustInit: null,
          fnImgToolbarCustDisplay: null,
          fnImgToolbarCustClick: null,
          fnProcessData: null,
          fnThumbnailSelection: null,
          fnGalleryRenderStart: null,
          fnGalleryRenderEnd: null,
          fnGalleryObjectModelBuilt: null,
          fnGalleryLayoutApplied: null,
          fnThumbnailClicked: null,
          fnShoppingCartUpdated: null,
          fnThumbnailToolCustAction: null,
          fnThumbnailOpen: null,
          fnImgDisplayed: null,
          fnPopupMediaInfo: null,
          i18n: {
              breadcrumbHome: "Galleries",
              breadcrumbHome_FR: "Galeries",
              thumbnailImageTitle: "",
              thumbnailAlbumTitle: "",
              thumbnailImageDescription: "",
              thumbnailAlbumDescription: "",
              infoBoxPhoto: "Photo",
              infoBoxDate: "Date",
              infoBoxAlbum: "Album",
              infoBoxDimensions: "Dimensions",
              infoBoxFilename: "Filename",
              infoBoxFileSize: "File size",
              infoBoxCamera: "Camera",
              infoBoxFocalLength: "Focal length",
              infoBoxExposure: "Exposure",
              infoBoxFNumber: "F Number",
              infoBoxISO: "ISO",
              infoBoxMake: "Make",
              infoBoxFlash: "Flash",
              infoBoxViews: "Views",
              infoBoxComments: "Comments"
          },
          icons: {
              thumbnailAlbum: '<i class="nGY2Icon-folder-empty"></i>',
              thumbnailImage: '<i class="nGY2Icon-picture"></i>',
              breadcrumbAlbum: '<i class="nGY2Icon-folder-empty"></i>',
              breadcrumbHome: '<i class="nGY2Icon-home"></i>',
              breadcrumbSeparator: '<i class="nGY2Icon-left-open"></i>',
              breadcrumbSeparatorRtl: '<i class="nGY2Icon-right-open"></i>',
              navigationFilterSelected: '<i style="color:#fff;" class="nGY2Icon-ok"></i>',
              navigationFilterUnselected: '<i style="color:#ddd;opacity:0.3;" class="nGY2Icon-circle-empty"></i>',
              navigationFilterSelectedAll: '<i class="nGY2Icon-ccw"></i>',
              navigationPaginationPrevious: '<i class="nGY2Icon-ngy2_chevron-left"></i>',
              navigationPaginationNext: '<i class="nGY2Icon-ngy2_chevron-right"></i>',
              thumbnailSelected: '<i style="color:#bff;" class="nGY2Icon-ok-circled"></i>',
              thumbnailUnselected: '<i style="color:#bff;" class="nGY2Icon-circle-empty"></i>',
              thumbnailFeatured: '<i style="color:#dd5;" class="nGY2Icon-star"></i>',
              thumbnailCounter: '<i class="nGY2Icon-picture"></i>',
              thumbnailShare: '<i class="nGY2Icon-ngy2_share2"></i>',
              thumbnailDownload: '<i class="nGY2Icon-ngy2_download2"></i>',
              thumbnailInfo: '<i class="nGY2Icon-ngy2_info2"></i>',
              thumbnailShoppingcart: '<i class="nGY2Icon-basket"></i>',
              thumbnailDisplay: '<i class="nGY2Icon-resize-full"></i>',
              thumbnailCustomTool1: "T1",
              thumbnailCustomTool2: "T2",
              thumbnailCustomTool3: "T3",
              thumbnailCustomTool4: "T4",
              thumbnailCustomTool5: "T5",
              thumbnailCustomTool6: "T6",
              thumbnailCustomTool7: "T7",
              thumbnailCustomTool8: "T8",
              thumbnailCustomTool9: "T9",
              thumbnailCustomTool10: "T10",
              thumbnailAlbumUp: '<i style="font-size: 3em;" class="nGY2Icon-ngy2_chevron_up2"></i>',
              paginationNext: '<i class="nGY2Icon-right-open"></i>',
              paginationPrevious: '<i class="nGY2Icon-left-open"></i>',
              galleryMoreButton: '<i class="nGY2Icon-picture"></i> &nbsp; <i class="nGY2Icon-right-open"></i>',
              buttonClose: '<i class="nGY2Icon-ngy2_close2"></i>',
              viewerPrevious: '<i class="nGY2Icon-ngy2_chevron-left"></i>',
              viewerNext: '<i class="nGY2Icon-ngy2_chevron-right"></i>',
              viewerImgPrevious: '<i class="nGY2Icon-ngy2_chevron_left3"></i>',
              viewerImgNext: '<i class="nGY2Icon-ngy2_chevron_right3"></i>',
              viewerDownload: '<i class="nGY2Icon-ngy2_download2"></i>',
              viewerToolbarMin: '<i class="nGY2Icon-ellipsis-vert"></i>',
              viewerToolbarStd: '<i class="nGY2Icon-menu"></i>',
              viewerPlay: '<i class="nGY2Icon-play"></i>',
              viewerPause: '<i class="nGY2Icon-pause"></i>',
              viewerFullscreenOn: '<i class="nGY2Icon-resize-full"></i>',
              viewerFullscreenOff: '<i class="nGY2Icon-resize-small"></i>',
              viewerZoomIn: '<i class="nGY2Icon-ngy2_zoom_in2"></i>',
              viewerZoomOut: '<i class="nGY2Icon-ngy2_zoom_out2"></i>',
              viewerLinkOriginal: '<i class="nGY2Icon-ngy2_external2"></i>',
              viewerInfo: '<i class="nGY2Icon-ngy2_info2"></i>',
              viewerShare: '<i class="nGY2Icon-ngy2_share2"></i>',
              viewerRotateLeft: '<i class="nGY2Icon-ccw"></i>',
              viewerRotateRight: '<i class="nGY2Icon-cw"></i>',
              viewerShoppingcart: '<i class="nGY2Icon-basket"></i>',
              user: '<i class="nGY2Icon-user"></i>',
              location: '<i class="nGY2Icon-location"></i>',
              picture: '<i class="nGY2Icon-picture"></i>',
              config: '<i class="nGY2Icon-wrench"></i>',
              shareFacebook: '<i style="color:#3b5998;" class="nGY2Icon-facebook-squared"></i>',
              shareTwitter: '<i style="color:#00aced;" class="nGY2Icon-twitter-squared"></i>',
              shareTumblr: '<i style="color:#32506d;" class="nGY2Icon-tumblr-squared"></i>',
              sharePinterest: '<i style="color:#cb2027;" class="nGY2Icon-pinterest-squared"></i>',
              shareVK: '<i style="color:#3b5998;" class="nGY2Icon-vkontakte"></i>',
              shareMail: '<i style="color:#555;" class="nGY2Icon-mail-alt"></i>',
              viewerCustomTool1: "T1",
              viewerCustomTool2: "T2",
              viewerCustomTool3: "T3",
              viewerCustomTool4: "T4",
              viewerCustomTool5: "T5",
              viewerCustomTool6: "T6",
              viewerCustomTool7: "T7",
              viewerCustomTool8: "T8",
              viewerCustomTool9: "T9",
              viewerCustomTool10: "T10"
          }
      }, jQuery.fn.nanogallery2 = function(t, n, i) {
          if (void 0 === jQuery(this).data("nanogallery2data")) {
              if ("destroy" == t) return;
              return this.each((function() {
                  new jQuery.nanogallery2(this, t)
              }))
          }
          var a = e(this).data("nanogallery2data").nG2;
          if (void 0 === t || !0 !== t.lightboxStandalone) {
              switch (t) {
                  case "displayItem":
                      a.DisplayItem(n);
                      break;
                  case "search":
                      return a.Search(n);
                  case "search2":
                      return a.Search2(n, i);
                  case "search2Execute":
                      return a.Search2Execute();
                  case "refresh":
                      a.Refresh();
                      break;
                  case "resize":
                      a.Resize();
                      break;
                  case "instance":
                      return a;
                  case "data":
                      return a.data = {
                          items: a.I,
                          gallery: a.GOM,
                          lightbox: a.VOM,
                          shoppingcart: a.shoppingCart
                      }, a.data;
                  case "reload":
                      return a.ReloadAlbum(), e(this);
                  case "itemsSelectedGet":
                      return a.ItemsSelectedGet();
                  case "itemsSetSelectedValue":
                      a.ItemsSetSelectedValue(n, i);
                      break;
                  case "option":
                      if (void 0 === i) return a.Get(n);
                      a.Set(n, i), "demoViewportWidth" == n && e(window).trigger("resize");
                      break;
                  case "destroy":
                      a.Destroy(), e(this).removeData("nanogallery2data");
                      break;
                  case "shoppingCartGet":
                      return a.shoppingCart;
                  case "shoppingCartUpdate":
                      if (void 0 === i || void 0 === n) return !1;
                      for (var o = n, r = i, l = 0; l < a.shoppingCart.length; l++)
                          if (a.shoppingCart[l].ID == o) {
                              a.shoppingCart[l].qty = r;
                              let e = a.I[a.shoppingCart[l].idx];
                              a.ThumbnailToolbarOneCartUpdate(e), 0 == r && a.shoppingCart.splice(l, 1), null !== (u = a.O.fnShoppingCartUpdated) && ("function" == typeof u ? u(a.shoppingCart, e, "api") : window[u](a.shoppingCart, e, "api"));
                              break
                          }
                      return a.shoppingCart;
                  case "shoppingCartRemove":
                      if (void 0 === n) return !1;
                      var s = n;
                      for (l = 0; l < a.shoppingCart.length; l++)
                          if (a.shoppingCart[l].ID == s) {
                              var u, c = a.I[a.shoppingCart[l].idx];
                              a.shoppingCart[l].qty = 0, a.ThumbnailToolbarOneCartUpdate(c), a.shoppingCart.splice(l, 1), null !== (u = a.O.fnShoppingCartUpdated) && ("function" == typeof u ? u(a.shoppingCart, c, "api") : window[u](a.shoppingCart, c, "api"));
                              break
                          }
                      return a.shoppingCart;
                  case "closeViewer":
                      a.CloseViewer();
                      break;
                  case "minimizeToolbar":
                      a.MinimizeToolbar();
                      break;
                  case "maximizeToolbar":
                      a.MaximizeToolbar();
                      break;
                  case "paginationPreviousPage":
                      a.PaginationPreviousPage();
                      break;
                  case "paginationNextPage":
                      a.paginationNextPage();
                      break;
                  case "paginationGotoPage":
                      a.PaginationGotoPage(n);
                      break;
                  case "paginationCountPages":
                      a.PaginationCountPages()
              }
              return e(this)
          }
          a.LightboxReOpen()
      },
      function(e, t) {
          e.ngEvEmitter = function() {
              function e() {}
              var t = e.prototype;
              return t.on = function(e, t) {
                  if (e && t) {
                      var n = this._events = this._events || {},
                          i = n[e] = n[e] || [];
                      return -1 == i.indexOf(t) && i.push(t), this
                  }
              }, t.once = function(e, t) {
                  if (e && t) {
                      this.on(e, t);
                      var n = this._onceEvents = this._onceEvents || {};
                      return (n[e] = n[e] || {})[t] = !0, this
                  }
              }, t.off = function(e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                      var i = n.indexOf(t);
                      return -1 != i && n.splice(i, 1), this
                  }
              }, t.emitEvent = function(e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                      var i = 0,
                          a = n[i];
                      t = t || [];
                      for (var o = this._onceEvents && this._onceEvents[e]; a;) {
                          var r = o && o[a];
                          r && (this.off(e, a), delete o[a]), a.apply(this, t), a = n[i += r ? 0 : 1]
                      }
                      return this
                  }
              }, e
          }()
      }("undefined" != typeof window ? window : this),
      /*!
       * ngimagesLoaded v4.1.1
       * JavaScript is all like "You images are done yet or what?"
       * MIT License
       */
      function(e, t) {
          e.ngimagesLoaded = function(e, t) {
              var n = jQuery,
                  i = e.console;

              function a(e, t) {
                  for (var n in t) e[n] = t[n];
                  return e
              }

              function o(e, t, i) {
                  if (!(this instanceof o)) return new o(e, t, i);
                  "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
                      var t = [];
                      if (Array.isArray(e)) t = e;
                      else if ("number" == typeof e.length)
                          for (var n = 0; n < e.length; n++) t.push(e[n]);
                      else t.push(e);
                      return t
                  }(e), this.options = a({}, this.options), "function" == typeof t ? i = t : a(this.options, t), i && this.on("always", i), this.getImages(), n && (this.jqDeferred = new n.Deferred), setTimeout(function() {
                      this.check()
                  }.bind(this))
              }
              o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
                  this.images = [], this.elements.forEach(this.addElementImages, this)
              }, o.prototype.addElementImages = function(e) {
                  "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                  var t = e.nodeType;
                  if (t && r[t]) {
                      for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                          var a = n[i];
                          this.addImage(a)
                      }
                      if ("string" == typeof this.options.background) {
                          var o = e.querySelectorAll(this.options.background);
                          for (i = 0; i < o.length; i++) {
                              var l = o[i];
                              this.addElementBackgroundImages(l)
                          }
                      }
                  }
              };
              var r = {
                  1: !0,
                  9: !0,
                  11: !0
              };

              function l(e) {
                  this.img = e
              }

              function s(e, t) {
                  this.url = e, this.element = t, this.img = new Image
              }
              return o.prototype.addElementBackgroundImages = function(e) {
                  var t = getComputedStyle(e);
                  if (t)
                      for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                          var a = i && i[2];
                          a && this.addBackground(a, e), i = n.exec(t.backgroundImage)
                      }
              }, o.prototype.addImage = function(e) {
                  var t = new l(e);
                  this.images.push(t)
              }, o.prototype.addBackground = function(e, t) {
                  var n = new s(e, t);
                  this.images.push(n)
              }, o.prototype.check = function() {
                  var e = this;

                  function t(t, n, i) {
                      setTimeout((function() {
                          e.progress(t, n, i)
                      }))
                  }
                  this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(e) {
                      e.once("progress", t), e.check()
                  })) : this.complete()
              }, o.prototype.progress = function(e, t, n) {
                  this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, e, t)
              }, o.prototype.complete = function() {
                  var e = this.hasAnyBroken ? "fail" : "done";
                  if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                      var t = this.hasAnyBroken ? "reject" : "resolve";
                      this.jqDeferred[t](this)
                  }
              }, l.prototype = Object.create(t.prototype), l.prototype.check = function() {
                  this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
              }, l.prototype.getIsImageComplete = function() {
                  return this.img.complete && void 0 !== this.img.naturalWidth
              }, l.prototype.confirm = function(e, t) {
                  this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
              }, l.prototype.handleEvent = function(e) {
                  var t = "on" + e.type;
                  this[t] && this[t](e)
              }, l.prototype.onload = function() {
                  this.confirm(!0, "onload"), this.unbindEvents()
              }, l.prototype.onerror = function() {
                  this.confirm(!1, "onerror"), this.unbindEvents()
              }, l.prototype.unbindEvents = function() {
                  this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
              }, s.prototype = Object.create(l.prototype), s.prototype.check = function() {
                  this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
              }, s.prototype.unbindEvents = function() {
                  this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
              }, s.prototype.confirm = function(e, t) {
                  this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
              }, o.makeJQueryPlugin = function(t) {
                  (t = t || e.jQuery) && ((n = t).fn.ngimagesLoaded = function(e, t) {
                      return new o(this, e, t).jqDeferred.promise(n(this))
                  })
              }, o.makeJQueryPlugin(), o
          }(e, e.ngEvEmitter)
      }(window),
      function() {
          var e = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
              t = "undefined" != typeof module && module.exports,
              n = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
              i = function() {
                  for (var t, n = [
                          ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                          ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                          ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                          ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                          ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                      ], i = 0, a = n.length, o = {}; i < a; i++)
                      if ((t = n[i]) && t[1] in e) {
                          for (i = 0; i < t.length; i++) o[n[0][i]] = t[i];
                          return o
                      }
                  return !1
              }(),
              a = {
                  change: i.fullscreenchange,
                  error: i.fullscreenerror
              },
              o = {
                  request: function(t) {
                      return new Promise(function(a) {
                          var o = i.requestFullscreen,
                              r = function() {
                                  this.off("change", r), a()
                              }.bind(this);
                          t = t || e.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? t[o]() : t[o](n ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", r)
                      }.bind(this))
                  },
                  exit: function() {
                      return new Promise(function(t) {
                          if (this.isFullscreen) {
                              var n = function() {
                                  this.off("change", n), t()
                              }.bind(this);
                              e[i.exitFullscreen](), this.on("change", n)
                          } else t()
                      }.bind(this))
                  },
                  toggle: function(e) {
                      return this.isFullscreen ? this.exit() : this.request(e)
                  },
                  onchange: function(e) {
                      this.on("change", e)
                  },
                  onerror: function(e) {
                      this.on("error", e)
                  },
                  on: function(t, n) {
                      var i = a[t];
                      i && e.addEventListener(i, n, !1)
                  },
                  off: function(t, n) {
                      var i = a[t];
                      i && e.removeEventListener(i, n, !1)
                  },
                  raw: i
              };
          i ? (Object.defineProperties(o, {
              isFullscreen: {
                  get: function() {
                      return Boolean(e[i.fullscreenElement])
                  }
              },
              element: {
                  enumerable: !0,
                  get: function() {
                      return e[i.fullscreenElement]
                  }
              },
              enabled: {
                  enumerable: !0,
                  get: function() {
                      return Boolean(e[i.fullscreenEnabled])
                  }
              }
          }), t ? module.exports = o : window.ngscreenfull = o) : t ? module.exports = !1 : window.ngscreenfull = !1
      }(),
      function() {
          const e = "undefined" != typeof window ? window : global;
          var t, n = function() {
              var t, n, i, a, o, r, l = Date.now ? Date.now : function() {
                      return +new Date
                  },
                  s = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : l;

              function u() {}

              function c(e, t) {
                  var n;
                  for (n in e) Object.hasOwnProperty.call(e, n) && t(n)
              }

              function h(e, t) {
                  return c(t, (function(n) {
                      e[n] = t[n]
                  })), e
              }

              function d(e, t) {
                  c(t, (function(n) {
                      void 0 === e[n] && (e[n] = t[n])
                  }))
              }

              function m(e, n, i, a, o, r, l) {
                  var s, u, c, h = e < r ? 0 : (e - r) / o;
                  for (s in n) n.hasOwnProperty(s) && (c = "function" == typeof(u = l[s]) ? u : t[u], n[s] = p(i[s], a[s], c, h));
                  return n
              }

              function p(e, t, n, i) {
                  return e + (t - e) * n(i)
              }

              function g(e, t) {
                  var n = v.prototype.filter,
                      i = e._filterArgs;
                  c(n, (function(a) {
                      void 0 !== n[a][t] && n[a][t].apply(e, i)
                  }))
              }

              function f(e, t, n, l, u, c, h, d, p, f, b) {
                  i = t + n + l, a = Math.min(b || s(), i), o = a >= i, r = l - (i - a), e.isPlaying() && (o ? (p(h, e._attachment, r), e.stop(!0)) : (e._scheduleId = f(e._timeoutHandler, 1e3 / 60), g(e, "beforeTween"), a < t + n ? m(1, u, c, h, 1, 1, d) : m(a, u, c, h, l, t + n, d), g(e, "afterTween"), p(u, e._attachment, r)))
              }

              function b(e, t) {
                  var n = {},
                      i = typeof t;
                  return c(e, "string" === i || "function" === i ? function(e) {
                      n[e] = t
                  } : function(e) {
                      n[e] || (n[e] = t[e] || "linear")
                  }), n
              }

              function v(e, t) {
                  this._currentState = e || {}, this._configured = !1, this._scheduleFunction = n, void 0 !== t && this.setConfig(t)
              }
              return n = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout, v.prototype.tween = function(e) {
                  return this._isTweening ? this : (void 0 === e && this._configured || this.setConfig(e), this._timestamp = s(), this._start(this.get(), this._attachment), this.resume())
              }, v.prototype.setConfig = function(e) {
                  e = e || {}, this._configured = !0, this._attachment = e.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = e.delay || 0, this._start = e.start || u, this._step = e.step || u, this._finish = e.finish || u, this._duration = e.duration || 500, this._currentState = h({}, e.from || this.get()), this._originalState = this.get(), this._targetState = h({}, e.to || this.get());
                  var t = this;
                  this._timeoutHandler = function() {
                      f(t, t._timestamp, t._delay, t._duration, t._currentState, t._originalState, t._targetState, t._easing, t._step, t._scheduleFunction)
                  };
                  var n = this._currentState,
                      i = this._targetState;
                  return d(i, n), this._easing = b(n, e.easing || "linear"), this._filterArgs = [n, this._originalState, i, this._easing], g(this, "tweenCreated"), this
              }, v.prototype.get = function() {
                  return h({}, this._currentState)
              }, v.prototype.set = function(e) {
                  this._currentState = e
              }, v.prototype.pause = function() {
                  return this._pausedAtTime = s(), this._isPaused = !0, this
              }, v.prototype.resume = function() {
                  return this._isPaused && (this._timestamp += s() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
              }, v.prototype.seek = function(e) {
                  e = Math.max(e, 0);
                  var t = s();
                  return this._timestamp + e === 0 || (this._timestamp = t - e, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, f(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, t), this.pause())), this
              }, v.prototype.stop = function(t) {
                  return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = u, (e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame || e.mozCancelRequestAnimationFrame || e.clearTimeout)(this._scheduleId), t && (g(this, "beforeTween"), m(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), g(this, "afterTween"), g(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
              }, v.prototype.isPlaying = function() {
                  return this._isTweening && !this._isPaused
              }, v.prototype.setScheduleFunction = function(e) {
                  this._scheduleFunction = e
              }, v.prototype.dispose = function() {
                  var e;
                  for (e in this) this.hasOwnProperty(e) && delete this[e]
              }, v.prototype.filter = {}, v.prototype.formula = {
                  linear: function(e) {
                      return e
                  }
              }, t = v.prototype.formula, h(v, {
                  now: s,
                  each: c,
                  tweenProps: m,
                  tweenProp: p,
                  applyFilter: g,
                  shallowCopy: h,
                  defaults: d,
                  composeEasingObject: b
              }), "function" == typeof SHIFTY_DEBUG_NOW && (e.timeoutHandler = f), "object" == typeof exports ? module.exports = v : "function" == typeof define && define.amdDISABLED ? define((function() {
                  return v
              })) : void 0 === e.NGTweenable && (e.NGTweenable = v), v
          }();
          /*!
           * All equations are adapted from Thomas Fuchs'
           * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
           *
           * Based on Easing Equations (c) 2003 [Robert
           * Penner](http://www.robertpenner.com/), all rights reserved. This work is
           * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
           */
          /*!
           *  TERMS OF USE - EASING EQUATIONS
           *  Open source under the BSD License.
           *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
           */
          n.shallowCopy(n.prototype.formula, {
                  easeInQuad: function(e) {
                      return Math.pow(e, 2)
                  },
                  easeOutQuad: function(e) {
                      return -(Math.pow(e - 1, 2) - 1)
                  },
                  easeInOutQuad: function(e) {
                      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
                  },
                  easeInCubic: function(e) {
                      return Math.pow(e, 3)
                  },
                  easeOutCubic: function(e) {
                      return Math.pow(e - 1, 3) + 1
                  },
                  easeInOutCubic: function(e) {
                      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
                  },
                  easeInQuart: function(e) {
                      return Math.pow(e, 4)
                  },
                  easeOutQuart: function(e) {
                      return -(Math.pow(e - 1, 4) - 1)
                  },
                  easeInOutQuart: function(e) {
                      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
                  },
                  easeInQuint: function(e) {
                      return Math.pow(e, 5)
                  },
                  easeOutQuint: function(e) {
                      return Math.pow(e - 1, 5) + 1
                  },
                  easeInOutQuint: function(e) {
                      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
                  },
                  easeInSine: function(e) {
                      return 1 - Math.cos(e * (Math.PI / 2))
                  },
                  easeOutSine: function(e) {
                      return Math.sin(e * (Math.PI / 2))
                  },
                  easeInOutSine: function(e) {
                      return -.5 * (Math.cos(Math.PI * e) - 1)
                  },
                  easeInExpo: function(e) {
                      return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                  },
                  easeOutExpo: function(e) {
                      return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                  },
                  easeInOutExpo: function(e) {
                      return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                  },
                  easeInCirc: function(e) {
                      return -(Math.sqrt(1 - e * e) - 1)
                  },
                  easeOutCirc: function(e) {
                      return Math.sqrt(1 - Math.pow(e - 1, 2))
                  },
                  easeInOutCirc: function(e) {
                      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                  },
                  easeOutBounce: function(e) {
                      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                  },
                  easeInBack: function(e) {
                      var t = 1.70158;
                      return e * e * ((t + 1) * e - t)
                  },
                  easeOutBack: function(e) {
                      var t = 1.70158;
                      return (e -= 1) * e * ((t + 1) * e + t) + 1
                  },
                  easeInOutBack: function(e) {
                      var t = 1.70158;
                      return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                  },
                  elastic: function(e) {
                      return -1 * Math.pow(4, -8 * e) * Math.sin((6 * e - 1) * (2 * Math.PI) / 2) + 1
                  },
                  swingFromTo: function(e) {
                      var t = 1.70158;
                      return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                  },
                  swingFrom: function(e) {
                      var t = 1.70158;
                      return e * e * ((t + 1) * e - t)
                  },
                  swingTo: function(e) {
                      var t = 1.70158;
                      return (e -= 1) * e * ((t + 1) * e + t) + 1
                  },
                  bounce: function(e) {
                      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                  },
                  bouncePast: function(e) {
                      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                  },
                  easeFromTo: function(e) {
                      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
                  },
                  easeFrom: function(e) {
                      return Math.pow(e, 4)
                  },
                  easeTo: function(e) {
                      return Math.pow(e, .25)
                  }
              }),
              function() {
                  function e(e, t, n, i, a, o) {
                      var r, l, s = 0,
                          u = 0,
                          c = 0,
                          h = 0,
                          d = 0,
                          m = 0;

                      function p(e) {
                          return ((s * e + u) * e + c) * e
                      }

                      function g(e) {
                          return (3 * s * e + 2 * u) * e + c
                      }

                      function f(e) {
                          return e >= 0 ? e : 0 - e
                      }
                      return s = 1 - (c = 3 * t) - (u = 3 * (i - t) - c), h = 1 - (m = 3 * n) - (d = 3 * (a - n) - m), r = e, l = function(e) {
                              return 1 / (200 * e)
                          }(o),
                          function(e) {
                              return ((h * e + d) * e + m) * e
                          }(function(e, t) {
                              var n, i, a, o, r, l;
                              for (a = e, l = 0; l < 8; l++) {
                                  if (f(o = p(a) - e) < t) return a;
                                  if (f(r = g(a)) < 1e-6) break;
                                  a -= o / r
                              }
                              if (i = 1, (a = e) < (n = 0)) return n;
                              if (a > i) return i;
                              for (; n < i;) {
                                  if (f((o = p(a)) - e) < t) return a;
                                  e > o ? n = a : i = a, a = .5 * (i - n) + n
                              }
                              return a
                          }(r, l))
                  }
                  n.setBezierFunction = function(t, i, a, o, r) {
                      var l = function(t, n, i, a) {
                          return function(o) {
                              return e(o, t, n, i, a, 1)
                          }
                      }(i, a, o, r);
                      return l.displayName = t, l.x1 = i, l.y1 = a, l.x2 = o, l.y2 = r, n.prototype.formula[t] = l
                  }, n.unsetBezierFunction = function(e) {
                      delete n.prototype.formula[e]
                  }
              }(), (t = new n)._filterArgs = [], n.interpolate = function(e, i, a, o, r) {
                  var l = n.shallowCopy({}, e),
                      s = r || 0,
                      u = n.composeEasingObject(e, o || "linear");
                  t.set({});
                  var c = t._filterArgs;
                  c.length = 0, c[0] = l, c[1] = e, c[2] = i, c[3] = u, n.applyFilter(t, "tweenCreated"), n.applyFilter(t, "beforeTween");
                  var h = function(e, t, i, a, o, r) {
                      return n.tweenProps(a, t, e, i, 1, r, o)
                  }(e, l, i, a, u, s);
                  return n.applyFilter(t, "afterTween"), h
              },
              function(e) {
                  var t = /(\d|\-|\.)/,
                      n = /([^\-0-9\.]+)/g,
                      i = /[0-9.\-]+/g,
                      a = new RegExp("rgb\\(" + i.source + /,\s*/.source + i.source + /,\s*/.source + i.source + "\\)", "g"),
                      o = /^.*\(/,
                      r = /#([0-9]|[a-f]){3,6}/gi;

                  function l(e, t) {
                      var n, i = [],
                          a = e.length;
                      for (n = 0; n < a; n++) i.push("_" + t + "_" + n);
                      return i
                  }

                  function s(t) {
                      e.each(t, (function(e) {
                          var n = t[e];
                          "string" == typeof n && n.match(r) && (t[e] = d(r, n, u))
                      }))
                  }

                  function u(e) {
                      var t = function(e) {
                          3 === (e = e.replace(/#/, "")).length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                          return c[0] = h(e.substr(0, 2)), c[1] = h(e.substr(2, 2)), c[2] = h(e.substr(4, 2)), c
                      }(e);
                      return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
                  }
                  var c = [];

                  function h(e) {
                      return parseInt(e, 16)
                  }

                  function d(e, t, n) {
                      var i = t.match(e),
                          a = t.replace(e, "VAL");
                      if (i)
                          for (var o, r = i.length, l = 0; l < r; l++) o = i.shift(), a = a.replace("VAL", n(o));
                      return a
                  }

                  function m(e) {
                      for (var t = e.match(i), n = t.length, a = e.match(o)[0], r = 0; r < n; r++) a += parseInt(t[r], 10) + ",";
                      return a = a.slice(0, -1) + ")"
                  }

                  function p(t, n) {
                      e.each(n, (function(e) {
                          for (var i = b(t[e]), a = i.length, o = 0; o < a; o++) t[n[e].chunkNames[o]] = +i[o];
                          delete t[e]
                      }))
                  }

                  function g(t, n) {
                      e.each(n, (function(e) {
                          var i = t[e],
                              o = function(e, t) {
                                  f.length = 0;
                                  for (var n = t.length, i = 0; i < n; i++) f.push(e[t[i]]);
                                  return f
                              }(function(e, t) {
                                  for (var n, i = {}, a = t.length, o = 0; o < a; o++) n = t[o], i[n] = e[n], delete e[n];
                                  return i
                              }(t, n[e].chunkNames), n[e].chunkNames);
                          i = function(e, t) {
                              for (var n = e, i = t.length, a = 0; a < i; a++) n = n.replace("VAL", +t[a].toFixed(4));
                              return n
                          }(n[e].formatString, o), t[e] = d(a, i, m)
                      }))
                  }
                  var f = [];

                  function b(e) {
                      return e.match(i)
                  }
                  e.prototype.filter.token = {
                      tweenCreated: function(i, a, o, r) {
                          var u, c;
                          s(i), s(a), s(o), this._tokenData = (u = i, c = {}, e.each(u, (function(e) {
                              var i, a, o = u[e];
                              if ("string" == typeof o) {
                                  var r = b(o);
                                  c[e] = {
                                      formatString: (i = o, a = i.match(n), a ? (1 === a.length || i.charAt(0).match(t)) && a.unshift("") : a = ["", ""], a.join("VAL")),
                                      chunkNames: l(r, e)
                                  }
                              }
                          })), c)
                      },
                      beforeTween: function(t, n, i, a) {
                          ! function(t, n) {
                              e.each(n, (function(e) {
                                  var i, a = n[e].chunkNames,
                                      o = a.length,
                                      r = t[e];
                                  if ("string" == typeof r) {
                                      var l = r.split(" "),
                                          s = l[l.length - 1];
                                      for (i = 0; i < o; i++) t[a[i]] = l[i] || s
                                  } else
                                      for (i = 0; i < o; i++) t[a[i]] = r;
                                  delete t[e]
                              }))
                          }(a, this._tokenData), p(t, this._tokenData), p(n, this._tokenData), p(i, this._tokenData)
                      },
                      afterTween: function(t, n, i, a) {
                          g(t, this._tokenData), g(n, this._tokenData), g(i, this._tokenData),
                              function(t, n) {
                                  e.each(n, (function(e) {
                                      var i = n[e].chunkNames,
                                          a = i.length,
                                          o = t[i[0]];
                                      if ("string" === typeof o) {
                                          for (var r = "", l = 0; l < a; l++) r += " " + t[i[l]], delete t[i[l]];
                                          t[e] = r.substr(1)
                                      } else t[e] = o
                                  }))
                              }(a, this._tokenData)
                      }
                  }
              }(n)
      }.call(null),
      /*! NGHammer.JS - v2.0.7 - 2016-04-22
       * http://hammerjs.github.io/
       *
       * Copyright (c) 2016 Jorik Tangelder;
       * Licensed under the MIT license */
      function(e, t, n, i) {
          var a, o = ["", "webkit", "Moz", "MS", "ms", "o"],
              r = t.createElement("div"),
              l = Math.round,
              s = Math.abs,
              u = Date.now;

          function c(e, t, n) {
              return setTimeout(b(e, n), t)
          }

          function h(e, t, n) {
              return !!Array.isArray(e) && (d(e, n[t], n), !0)
          }

          function d(e, t, n) {
              var i;
              if (e)
                  if (e.forEach) e.forEach(t, n);
                  else if (void 0 !== e.length)
                  for (i = 0; i < e.length;) t.call(n, e[i], i, e), i++;
              else
                  for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e)
          }

          function m(t, n, i) {
              var a = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
              return function() {
                  var n = new Error("get-stack-trace"),
                      i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                      o = e.console && (e.console.warn || e.console.log);
                  return o && o.call(e.console, a, i), t.apply(this, arguments)
              }
          }
          a = "function" != typeof Object.assign ? function(e) {
              if (null == e) throw new TypeError("Cannot convert undefined or null to object");
              for (var t = Object(e), n = 1; n < arguments.length; n++) {
                  var i = arguments[n];
                  if (null != i)
                      for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a])
              }
              return t
          } : Object.assign;
          var p = m((function(e, t, n) {
                  for (var i = Object.keys(t), a = 0; a < i.length;)(!n || n && void 0 === e[i[a]]) && (e[i[a]] = t[i[a]]), a++;
                  return e
              }), "extend", "Use `assign`."),
              g = m((function(e, t) {
                  return p(e, t, !0)
              }), "merge", "Use `assign`.");

          function f(e, t, n) {
              var i, o = t.prototype;
              (i = e.prototype = Object.create(o)).constructor = e, i._super = o, n && a(i, n)
          }

          function b(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          }

          function v(e, t) {
              return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e
          }

          function O(e, t) {
              return void 0 === e ? t : e
          }

          function y(e, t, n) {
              d(I(t), (function(t) {
                  e.addEventListener(t, n, !1)
              }))
          }

          function G(e, t, n) {
              d(I(t), (function(t) {
                  e.removeEventListener(t, n, !1)
              }))
          }

          function M(e, t) {
              for (; e;) {
                  if (e == t) return !0;
                  e = e.parentNode
              }
              return !1
          }

          function w(e, t) {
              return e.indexOf(t) > -1
          }

          function I(e) {
              return e.trim().split(/\s+/g)
          }

          function T(e, t, n) {
              if (e.indexOf && !n) return e.indexOf(t);
              for (var i = 0; i < e.length;) {
                  if (n && e[i][n] == t || !n && e[i] === t) return i;
                  i++
              }
              return -1
          }

          function x(e) {
              return Array.prototype.slice.call(e, 0)
          }

          function S(e, t, n) {
              for (var i = [], a = [], o = 0; o < e.length;) {
                  var r = t ? e[o][t] : e[o];
                  T(a, r) < 0 && i.push(e[o]), a[o] = r, o++
              }
              return n && (i = t ? i.sort((function(e, n) {
                  return e[t] > n[t]
              })) : i.sort()), i
          }

          function L(e, t) {
              for (var n, i, a = t[0].toUpperCase() + t.slice(1), r = 0; r < o.length;) {
                  if ((i = (n = o[r]) ? n + a : t) in e) return i;
                  r++
              }
          }
          var C = 1;

          function E(t) {
              var n = t.ownerDocument || t;
              return n.defaultView || n.parentWindow || e
          }
          var k = "ontouchstart" in e,
              D = k && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
              N = ["x", "y"],
              V = ["clientX", "clientY"];

          function Y(e, t) {
              var n = this;
              this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                  v(e.options.enable, [e]) && n.handler(t)
              }, this.init()
          }

          function A(e, t, n) {
              var i = n.pointers.length,
                  a = n.changedPointers.length,
                  o = 1 & t && i - a == 0,
                  r = 12 & t && i - a == 0;
              n.isFirst = !!o, n.isFinal = !!r, o && (e.session = {}), n.eventType = t,
                  function(e, t) {
                      var n = e.session,
                          i = t.pointers,
                          a = i.length;
                      n.firstInput || (n.firstInput = _(t));
                      a > 1 && !n.firstMultiple ? n.firstMultiple = _(t) : 1 === a && (n.firstMultiple = !1);
                      var o = n.firstInput,
                          r = n.firstMultiple,
                          l = r ? r.center : o.center,
                          c = t.center = P(i);
                      t.timeStamp = u(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = z(l, c), t.distance = F(l, c),
                          function(e, t) {
                              var n = t.center,
                                  i = e.offsetDelta || {},
                                  a = e.prevDelta || {},
                                  o = e.prevInput || {};
                              1 !== t.eventType && 4 !== o.eventType || (a = e.prevDelta = {
                                  x: o.deltaX || 0,
                                  y: o.deltaY || 0
                              }, i = e.offsetDelta = {
                                  x: n.x,
                                  y: n.y
                              });
                              t.deltaX = a.x + (n.x - i.x), t.deltaY = a.y + (n.y - i.y)
                          }(n, t), t.offsetDirection = $(t.deltaX, t.deltaY);
                      var h = R(t.deltaTime, t.deltaX, t.deltaY);
                      t.overallVelocityX = h.x, t.overallVelocityY = h.y, t.overallVelocity = s(h.x) > s(h.y) ? h.x : h.y, t.scale = r ? (d = r.pointers, m = i, F(m[0], m[1], V) / F(d[0], d[1], V)) : 1, t.rotation = r ? function(e, t) {
                              return z(t[1], t[0], V) + z(e[1], e[0], V)
                          }(r.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length,
                          function(e, t) {
                              var n, i, a, o, r = e.lastInterval || t,
                                  l = t.timeStamp - r.timeStamp;
                              if (8 != t.eventType && (l > 25 || void 0 === r.velocity)) {
                                  var u = t.deltaX - r.deltaX,
                                      c = t.deltaY - r.deltaY,
                                      h = R(l, u, c);
                                  i = h.x, a = h.y, n = s(h.x) > s(h.y) ? h.x : h.y, o = $(u, c), e.lastInterval = t
                              } else n = r.velocity, i = r.velocityX, a = r.velocityY, o = r.direction;
                              t.velocity = n, t.velocityX = i, t.velocityY = a, t.direction = o
                          }(n, t);
                      var d, m;
                      var p = e.element;
                      M(t.srcEvent.target, p) && (p = t.srcEvent.target);
                      t.target = p
                  }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
          }

          function _(e) {
              for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                  clientX: l(e.pointers[n].clientX),
                  clientY: l(e.pointers[n].clientY)
              }, n++;
              return {
                  timeStamp: u(),
                  pointers: t,
                  center: P(t),
                  deltaX: e.deltaX,
                  deltaY: e.deltaY
              }
          }

          function P(e) {
              var t = e.length;
              if (1 === t) return {
                  x: l(e[0].clientX),
                  y: l(e[0].clientY)
              };
              for (var n = 0, i = 0, a = 0; a < t;) n += e[a].clientX, i += e[a].clientY, a++;
              return {
                  x: l(n / t),
                  y: l(i / t)
              }
          }

          function R(e, t, n) {
              return {
                  x: t / e || 0,
                  y: n / e || 0
              }
          }

          function $(e, t) {
              return e === t ? 1 : s(e) >= s(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
          }

          function F(e, t, n) {
              n || (n = N);
              var i = t[n[0]] - e[n[0]],
                  a = t[n[1]] - e[n[1]];
              return Math.sqrt(i * i + a * a)
          }

          function z(e, t, n) {
              n || (n = N);
              var i = t[n[0]] - e[n[0]],
                  a = t[n[1]] - e[n[1]];
              return 180 * Math.atan2(a, i) / Math.PI
          }
          Y.prototype = {
              handler: function() {},
              init: function() {
                  this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(E(this.element), this.evWin, this.domHandler)
              },
              destroy: function() {
                  this.evEl && G(this.element, this.evEl, this.domHandler), this.evTarget && G(this.target, this.evTarget, this.domHandler), this.evWin && G(E(this.element), this.evWin, this.domHandler)
              }
          };
          var B = {
              mousedown: 1,
              mousemove: 2,
              mouseup: 4
          };

          function H() {
              this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, Y.apply(this, arguments)
          }
          f(H, Y, {
              handler: function(e) {
                  var t = B[e.type];
                  1 & t && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = 4), this.pressed && (4 & t && (this.pressed = !1), this.callback(this.manager, t, {
                      pointers: [e],
                      changedPointers: [e],
                      pointerType: "mouse",
                      srcEvent: e
                  }))
              }
          });
          var U = {
                  pointerdown: 1,
                  pointermove: 2,
                  pointerup: 4,
                  pointercancel: 8,
                  pointerout: 8
              },
              W = {
                  2: "touch",
                  3: "pen",
                  4: "mouse",
                  5: "kinect"
              },
              j = "pointerdown",
              X = "pointermove pointerup pointercancel";

          function Q() {
              this.evEl = j, this.evWin = X, Y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
          }
          e.MSPointerEvent && !e.PointerEvent && (j = "MSPointerDown", X = "MSPointerMove MSPointerUp MSPointerCancel"), f(Q, Y, {
              handler: function(e) {
                  var t = this.store,
                      n = !1,
                      i = e.type.toLowerCase().replace("ms", ""),
                      a = U[i],
                      o = W[e.pointerType] || e.pointerType,
                      r = "touch" == o,
                      l = T(t, e.pointerId, "pointerId");
                  1 & a && (0 === e.button || r) ? l < 0 && (t.push(e), l = t.length - 1) : 12 & a && (n = !0), l < 0 || (t[l] = e, this.callback(this.manager, a, {
                      pointers: t,
                      changedPointers: [e],
                      pointerType: o,
                      srcEvent: e
                  }), n && t.splice(l, 1))
              }
          });
          var q = {
              touchstart: 1,
              touchmove: 2,
              touchend: 4,
              touchcancel: 8
          };

          function Z() {
              this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, Y.apply(this, arguments)
          }

          function J(e, t) {
              var n = x(e.touches),
                  i = x(e.changedTouches);
              return 12 & t && (n = S(n.concat(i), "identifier", !0)), [n, i]
          }
          f(Z, Y, {
              handler: function(e) {
                  var t = q[e.type];
                  if (1 === t && (this.started = !0), this.started) {
                      var n = J.call(this, e, t);
                      12 & t && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                          pointers: n[0],
                          changedPointers: n[1],
                          pointerType: "touch",
                          srcEvent: e
                      })
                  }
              }
          });
          var K = {
              touchstart: 1,
              touchmove: 2,
              touchend: 4,
              touchcancel: 8
          };

          function ee() {
              this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, Y.apply(this, arguments)
          }

          function te(e, t) {
              var n = x(e.touches),
                  i = this.targetIds;
              if (3 & t && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
              var a, o, r = x(e.changedTouches),
                  l = [],
                  s = this.target;
              if (o = n.filter((function(e) {
                      return M(e.target, s)
                  })), 1 === t)
                  for (a = 0; a < o.length;) i[o[a].identifier] = !0, a++;
              for (a = 0; a < r.length;) i[r[a].identifier] && l.push(r[a]), 12 & t && delete i[r[a].identifier], a++;
              return l.length ? [S(o.concat(l), "identifier", !0), l] : void 0
          }
          f(ee, Y, {
              handler: function(e) {
                  var t = K[e.type],
                      n = te.call(this, e, t);
                  n && this.callback(this.manager, t, {
                      pointers: n[0],
                      changedPointers: n[1],
                      pointerType: "touch",
                      srcEvent: e
                  })
              }
          });

          function ne() {
              Y.apply(this, arguments);
              var e = b(this.handler, this);
              this.touch = new ee(this.manager, e), this.mouse = new H(this.manager, e), this.primaryTouch = null, this.lastTouches = []
          }

          function ie(e, t) {
              1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, ae.call(this, t)) : 12 & e && ae.call(this, t)
          }

          function ae(e) {
              var t = e.changedPointers[0];
              if (t.identifier === this.primaryTouch) {
                  var n = {
                      x: t.clientX,
                      y: t.clientY
                  };
                  this.lastTouches.push(n);
                  var i = this.lastTouches;
                  setTimeout((function() {
                      var e = i.indexOf(n);
                      e > -1 && i.splice(e, 1)
                  }), 2500)
              }
          }

          function oe(e) {
              for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                  var a = this.lastTouches[i],
                      o = Math.abs(t - a.x),
                      r = Math.abs(n - a.y);
                  if (o <= 25 && r <= 25) return !0
              }
              return !1
          }
          f(ne, Y, {
              handler: function(e, t, n) {
                  var i = "touch" == n.pointerType,
                      a = "mouse" == n.pointerType;
                  if (!(a && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                      if (i) ie.call(this, t, n);
                      else if (a && oe.call(this, n)) return;
                      this.callback(e, t, n)
                  }
              },
              destroy: function() {
                  this.touch.destroy(), this.mouse.destroy()
              }
          });
          var re = L(r.style, "touchAction"),
              le = void 0 !== re,
              se = function() {
                  if (!le) return !1;
                  var t = {},
                      n = e.CSS && e.CSS.supports;
                  return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
                      t[i] = !n || e.CSS.supports("touch-action", i)
                  })), t
              }();

          function ue(e, t) {
              this.manager = e, this.set(t)
          }
          ue.prototype = {
              set: function(e) {
                  "compute" == e && (e = this.compute()), le && this.manager.element.style && se[e] && (this.manager.element.style[re] = e), this.actions = e.toLowerCase().trim()
              },
              update: function() {
                  this.set(this.manager.options.touchAction)
              },
              compute: function() {
                  var e = [];
                  return d(this.manager.recognizers, (function(t) {
                          v(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                      })),
                      function(e) {
                          if (w(e, "none")) return "none";
                          var t = w(e, "pan-x"),
                              n = w(e, "pan-y");
                          if (t && n) return "none";
                          if (t || n) return t ? "pan-x" : "pan-y";
                          if (w(e, "manipulation")) return "manipulation";
                          return "auto"
                      }(e.join(" "))
              },
              preventDefaults: function(e) {
                  var t = e.srcEvent,
                      n = e.offsetDirection;
                  if (this.manager.session.prevented) t.preventDefault();
                  else {
                      var i = this.actions,
                          a = w(i, "none") && !se.none,
                          o = w(i, "pan-y") && !se["pan-y"],
                          r = w(i, "pan-x") && !se["pan-x"];
                      if (a) {
                          var l = 1 === e.pointers.length,
                              s = e.distance < 2,
                              u = e.deltaTime < 250;
                          if (l && s && u) return
                      }
                      if (!r || !o) return a || o && 6 & n || r && 24 & n ? this.preventSrc(t) : void 0
                  }
              },
              preventSrc: function(e) {
                  this.manager.session.prevented = !0, e.preventDefault()
              }
          };

          function ce(e) {
              this.options = a({}, this.defaults, e || {}), this.id = C++, this.manager = null, this.options.enable = O(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
          }

          function he(e) {
              return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
          }

          function de(e) {
              return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
          }

          function me(e, t) {
              var n = t.manager;
              return n ? n.get(e) : e
          }

          function pe() {
              ce.apply(this, arguments)
          }

          function ge() {
              pe.apply(this, arguments), this.pX = null, this.pY = null
          }

          function fe() {
              pe.apply(this, arguments)
          }

          function be() {
              ce.apply(this, arguments), this._timer = null, this._input = null
          }

          function ve() {
              pe.apply(this, arguments)
          }

          function Oe() {
              pe.apply(this, arguments)
          }

          function ye() {
              ce.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
          }

          function Ge(e, t) {
              return (t = t || {}).recognizers = O(t.recognizers, Ge.defaults.preset), new Me(e, t)
          }
          ce.prototype = {
              defaults: {},
              set: function(e) {
                  return a(this.options, e), this.manager && this.manager.touchAction.update(), this
              },
              recognizeWith: function(e) {
                  if (h(e, "recognizeWith", this)) return this;
                  var t = this.simultaneous;
                  return t[(e = me(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
              },
              dropRecognizeWith: function(e) {
                  return h(e, "dropRecognizeWith", this) || (e = me(e, this), delete this.simultaneous[e.id]), this
              },
              requireFailure: function(e) {
                  if (h(e, "requireFailure", this)) return this;
                  var t = this.requireFail;
                  return -1 === T(t, e = me(e, this)) && (t.push(e), e.requireFailure(this)), this
              },
              dropRequireFailure: function(e) {
                  if (h(e, "dropRequireFailure", this)) return this;
                  e = me(e, this);
                  var t = T(this.requireFail, e);
                  return t > -1 && this.requireFail.splice(t, 1), this
              },
              hasRequireFailures: function() {
                  return this.requireFail.length > 0
              },
              canRecognizeWith: function(e) {
                  return !!this.simultaneous[e.id]
              },
              emit: function(e) {
                  var t = this,
                      n = this.state;

                  function i(n) {
                      t.manager.emit(n, e)
                  }
                  n < 8 && i(t.options.event + he(n)), i(t.options.event), e.additionalEvent && i(e.additionalEvent), n >= 8 && i(t.options.event + he(n))
              },
              tryEmit: function(e) {
                  if (this.canEmit()) return this.emit(e);
                  this.state = 32
              },
              canEmit: function() {
                  for (var e = 0; e < this.requireFail.length;) {
                      if (!(33 & this.requireFail[e].state)) return !1;
                      e++
                  }
                  return !0
              },
              recognize: function(e) {
                  var t = a({}, e);
                  if (!v(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                  56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
              },
              process: function(e) {},
              getTouchAction: function() {},
              reset: function() {}
          }, f(pe, ce, {
              defaults: {
                  pointers: 1
              },
              attrTest: function(e) {
                  var t = this.options.pointers;
                  return 0 === t || e.pointers.length === t
              },
              process: function(e) {
                  var t = this.state,
                      n = e.eventType,
                      i = 6 & t,
                      a = this.attrTest(e);
                  return i && (8 & n || !a) ? 16 | t : i || a ? 4 & n ? 8 | t : 2 & t ? 4 | t : 2 : 32
              }
          }), f(ge, pe, {
              defaults: {
                  event: "pan",
                  threshold: 10,
                  pointers: 1,
                  direction: 30
              },
              getTouchAction: function() {
                  var e = this.options.direction,
                      t = [];
                  return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t
              },
              directionTest: function(e) {
                  var t = this.options,
                      n = !0,
                      i = e.distance,
                      a = e.direction,
                      o = e.deltaX,
                      r = e.deltaY;
                  return a & t.direction || (6 & t.direction ? (a = 0 === o ? 1 : o < 0 ? 2 : 4, n = o != this.pX, i = Math.abs(e.deltaX)) : (a = 0 === r ? 1 : r < 0 ? 8 : 16, n = r != this.pY, i = Math.abs(e.deltaY))), e.direction = a, n && i > t.threshold && a & t.direction
              },
              attrTest: function(e) {
                  return pe.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
              },
              emit: function(e) {
                  this.pX = e.deltaX, this.pY = e.deltaY;
                  var t = de(e.direction);
                  t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
              }
          }), f(fe, pe, {
              defaults: {
                  event: "pinch",
                  threshold: 0,
                  pointers: 2
              },
              getTouchAction: function() {
                  return ["none"]
              },
              attrTest: function(e) {
                  return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
              },
              emit: function(e) {
                  if (1 !== e.scale) {
                      var t = e.scale < 1 ? "in" : "out";
                      e.additionalEvent = this.options.event + t
                  }
                  this._super.emit.call(this, e)
              }
          }), f(be, ce, {
              defaults: {
                  event: "press",
                  pointers: 1,
                  time: 251,
                  threshold: 9
              },
              getTouchAction: function() {
                  return ["auto"]
              },
              process: function(e) {
                  var t = this.options,
                      n = e.pointers.length === t.pointers,
                      i = e.distance < t.threshold,
                      a = e.deltaTime > t.time;
                  if (this._input = e, !i || !n || 12 & e.eventType && !a) this.reset();
                  else if (1 & e.eventType) this.reset(), this._timer = c((function() {
                      this.state = 8, this.tryEmit()
                  }), t.time, this);
                  else if (4 & e.eventType) return 8;
                  return 32
              },
              reset: function() {
                  clearTimeout(this._timer)
              },
              emit: function(e) {
                  8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = u(), this.manager.emit(this.options.event, this._input)))
              }
          }), f(ve, pe, {
              defaults: {
                  event: "rotate",
                  threshold: 0,
                  pointers: 2
              },
              getTouchAction: function() {
                  return ["none"]
              },
              attrTest: function(e) {
                  return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
              }
          }), f(Oe, pe, {
              defaults: {
                  event: "swipe",
                  threshold: 10,
                  velocity: .3,
                  direction: 30,
                  pointers: 1
              },
              getTouchAction: function() {
                  return ge.prototype.getTouchAction.call(this)
              },
              attrTest: function(e) {
                  var t, n = this.options.direction;
                  return 30 & n ? t = e.overallVelocity : 6 & n ? t = e.overallVelocityX : 24 & n && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && s(t) > this.options.velocity && 4 & e.eventType
              },
              emit: function(e) {
                  var t = de(e.offsetDirection);
                  t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
              }
          }), f(ye, ce, {
              defaults: {
                  event: "tap",
                  pointers: 1,
                  taps: 1,
                  interval: 300,
                  time: 250,
                  threshold: 9,
                  posThreshold: 10
              },
              getTouchAction: function() {
                  return ["manipulation"]
              },
              process: function(e) {
                  var t = this.options,
                      n = e.pointers.length === t.pointers,
                      i = e.distance < t.threshold,
                      a = e.deltaTime < t.time;
                  if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
                  if (i && a && n) {
                      if (4 != e.eventType) return this.failTimeout();
                      var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                          r = !this.pCenter || F(this.pCenter, e.center) < t.posThreshold;
                      if (this.pTime = e.timeStamp, this.pCenter = e.center, r && o ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = c((function() {
                          this.state = 8, this.tryEmit()
                      }), t.interval, this), 2) : 8
                  }
                  return 32
              },
              failTimeout: function() {
                  return this._timer = c((function() {
                      this.state = 32
                  }), this.options.interval, this), 32
              },
              reset: function() {
                  clearTimeout(this._timer)
              },
              emit: function() {
                  8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
              }
          }), Ge.VERSION = "2.0.7", Ge.defaults = {
              domEvents: !1,
              touchAction: "compute",
              enable: !0,
              inputTarget: null,
              inputClass: null,
              preset: [
                  [ve, {
                      enable: !1
                  }],
                  [fe, {
                          enable: !1
                      },
                      ["rotate"]
                  ],
                  [Oe, {
                      direction: 6
                  }],
                  [ge, {
                          direction: 6
                      },
                      ["swipe"]
                  ],
                  [ye],
                  [ye, {
                          event: "doubletap",
                          taps: 2
                      },
                      ["tap"]
                  ],
                  [be]
              ],
              cssProps: {
                  userSelect: "none",
                  touchSelect: "none",
                  touchCallout: "none",
                  contentZooming: "none",
                  userDrag: "none",
                  tapHighlightColor: "rgba(0,0,0,0)"
              }
          };

          function Me(e, t) {
              var n;
              this.options = a({}, Ge.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new((n = this).options.inputClass || (D ? ee : k ? ne : H))(n, A), this.touchAction = new ue(this, this.options.touchAction), we(this, !0), d(this.options.recognizers, (function(e) {
                  var t = this.add(new e[0](e[1]));
                  e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
              }), this)
          }

          function we(e, t) {
              var n, i = e.element;
              i.style && (d(e.options.cssProps, (function(a, o) {
                  n = L(i.style, o), t ? (e.oldCssProps[n] = i.style[n], i.style[n] = a) : i.style[n] = e.oldCssProps[n] || ""
              })), t || (e.oldCssProps = {}))
          }
          Me.prototype = {
              set: function(e) {
                  return a(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
              },
              stop: function(e) {
                  this.session.stopped = e ? 2 : 1
              },
              recognize: function(e) {
                  var t = this.session;
                  if (!t.stopped) {
                      var n;
                      this.touchAction.preventDefaults(e);
                      var i = this.recognizers,
                          a = t.curRecognizer;
                      (!a || a && 8 & a.state) && (a = t.curRecognizer = null);
                      for (var o = 0; o < i.length;) n = i[o], 2 === t.stopped || a && n != a && !n.canRecognizeWith(a) ? n.reset() : n.recognize(e), !a && 14 & n.state && (a = t.curRecognizer = n), o++
                  }
              },
              get: function(e) {
                  if (e instanceof ce) return e;
                  for (var t = this.recognizers, n = 0; n < t.length; n++)
                      if (t[n].options.event == e) return t[n];
                  return null
              },
              add: function(e) {
                  if (h(e, "add", this)) return this;
                  var t = this.get(e.options.event);
                  return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
              },
              remove: function(e) {
                  if (h(e, "remove", this)) return this;
                  if (e = this.get(e)) {
                      var t = this.recognizers,
                          n = T(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
                  }
                  return this
              },
              on: function(e, t) {
                  if (void 0 !== e && void 0 !== t) {
                      var n = this.handlers;
                      return d(I(e), (function(e) {
                          n[e] = n[e] || [], n[e].push(t)
                      })), this
                  }
              },
              off: function(e, t) {
                  if (void 0 !== e) {
                      var n = this.handlers;
                      return d(I(e), (function(e) {
                          t ? n[e] && n[e].splice(T(n[e], t), 1) : delete n[e]
                      })), this
                  }
              },
              emit: function(e, n) {
                  this.options.domEvents && function(e, n) {
                      var i = t.createEvent("Event");
                      i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
                  }(e, n);
                  var i = this.handlers[e] && this.handlers[e].slice();
                  if (i && i.length) {
                      n.type = e, n.preventDefault = function() {
                          n.srcEvent.preventDefault()
                      };
                      for (var a = 0; a < i.length;) i[a](n), a++
                  }
              },
              destroy: function() {
                  this.element && we(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
              }
          }, a(Ge, {
              INPUT_START: 1,
              INPUT_MOVE: 2,
              INPUT_END: 4,
              INPUT_CANCEL: 8,
              STATE_POSSIBLE: 1,
              STATE_BEGAN: 2,
              STATE_CHANGED: 4,
              STATE_ENDED: 8,
              STATE_RECOGNIZED: 8,
              STATE_CANCELLED: 16,
              STATE_FAILED: 32,
              DIRECTION_NONE: 1,
              DIRECTION_LEFT: 2,
              DIRECTION_RIGHT: 4,
              DIRECTION_UP: 8,
              DIRECTION_DOWN: 16,
              DIRECTION_HORIZONTAL: 6,
              DIRECTION_VERTICAL: 24,
              DIRECTION_ALL: 30,
              Manager: Me,
              Input: Y,
              TouchAction: ue,
              TouchInput: ee,
              MouseInput: H,
              PointerEventInput: Q,
              TouchMouseInput: ne,
              SingleTouchInput: Z,
              Recognizer: ce,
              AttrRecognizer: pe,
              Tap: ye,
              Pan: ge,
              Swipe: Oe,
              Pinch: fe,
              Rotate: ve,
              Press: be,
              on: y,
              off: G,
              each: d,
              merge: g,
              extend: p,
              assign: a,
              inherit: f,
              bindFn: b,
              prefixed: L
          }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).NGHammer = Ge, "function" == typeof define && define.amdDISABLED ? define((function() {
              return Ge
          })) : "undefined" != typeof module && module.exports ? module.exports = Ge : e.NGHammer = Ge
      }(window, document)
})),
function() {
  "use strict";
  var e;
  e = function() {
      for (var e = document.querySelectorAll("[data-nanogallery2]"), t = 0; t < e.length; t++) jQuery(e[t]).nanogallery2(jQuery(e[t]).data("nanogallery2"));
      for (e = document.querySelectorAll("[data-nanogallery2-lightbox]"), t = 0; t < e.length; t++) e[t].classList.add("NGY2ThumbnailLightbox"), e[t].addEventListener("click", (function(e) {
          e.preventDefault();
          for (var t = {
                  lightboxStandalone: !0,
                  viewerToolbar: {
                      display: !1
                  }
              }, n = this.dataset.nanogallery2Lgroup, i = document.querySelectorAll("[data-nanogallery2-lightbox]"), a = 0; a < i.length; a++)
              if (i[a].dataset.nanogallery2Lgroup == n && "" !== i[a].dataset.nanogallery2Lightbox) {
                  t = jQuery.extend(!0, {}, t, jQuery(i[a]).data("nanogallery2Lightbox"));
                  break
              }
          jQuery(this).nanogallery2(t)
      }))
  }, "loading" != document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", (function() {
      "complete" == document.readyState && e()
  }))
}.call(null),
  /**!
   * @preserve nanogallery2 - NANOPHOTOSPROVIDER2 data provider
   * Homepage: http://nanogallery2.nanostudio.org
   * Sources:  https://github.com/nanostudio-org/nanogallery2
   *
   * License:  GPLv3 and commercial licence
   * 
   */
  function(e) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery", "nanogallery2"], e) : "object" == typeof exports && "function" == typeof require ? e(require(["jquery", "nanogallery2"])) : e(jQuery)
  }((function(e) {
      jQuery.nanogallery2.data_nano_photos_provider2 = function(e, t) {
          var n = e,
              i = function(t, i, s, c) {
                  var h = NGY2Item.GetIdx(n, t);
                  "" == e.I[h].title && (e.I[h].title = a(t));
                  var d = n.O.dataProvider + "?albumID=" + t;
                  d += "&hxs=" + n.tn.settings.getH(n.GOM.curNavLevel, "xs"), d += "&wxs=" + n.tn.settings.getW(n.GOM.curNavLevel, "xs"), d += "&hsm=" + n.tn.settings.getH(n.GOM.curNavLevel, "sm"), d += "&wsm=" + n.tn.settings.getW(n.GOM.curNavLevel, "sm"), d += "&hme=" + n.tn.settings.getH(n.GOM.curNavLevel, "me"), d += "&wme=" + n.tn.settings.getW(n.GOM.curNavLevel, "me"), d += "&hla=" + n.tn.settings.getH(n.GOM.curNavLevel, "la"), d += "&wla=" + n.tn.settings.getW(n.GOM.curNavLevel, "la"), d += "&hxl=" + n.tn.settings.getH(n.GOM.curNavLevel, "xl"), d += "&wxl=" + n.tn.settings.getW(n.GOM.curNavLevel, "xl"), r(!0), jQuery.ajaxSetup({
                      cache: !1
                  }), jQuery.support.cors = !0;
                  try {
                      var m = setTimeout((function() {
                          r(!1), l(n, "Could not retrieve nanoPhotosProvider2 data (timeout).")
                      }), 6e4);
                      n.O.debugMode && console.log("nanoPhotosProvider2 URL: " + d), jQuery.getJSON(d, (function(e, a, d) {
                          clearTimeout(m), r(!1), o(h, e), "ok" == e.nano_status ? (u(t), null != i && i(s, c, null)) : l(n, "Could not retrieve nanoPhotosProvider2 data. Error: " + e.nano_status + " - " + e.nano_message)
                      })).fail((function(e, t, i) {
                          clearTimeout(m), r(!1);
                          var a = "";
                          for (var o in e) a += o + "=" + e[o] + "<br>";
                          l(n, "Could not retrieve nanoPhotosProvider2 data. Error: " + (t + ", " + i + " " + a + "<br><br>URL:" + d))
                      }))
                  } catch (e) {
                      l(n, "Could not retrieve nanoPhotosProvider2 data. Error: " + e)
                  }
              };

          function a(e) {
              return decodeURIComponent(e)
          }

          function o(e, t) {
              n.O.debugMode && (console.log("nanoPhotosProvider2 parse data:"), console.dir(t));
              jQuery.each(t.album_content, (function(e, i) {
                  var o = n.O.dataProvider.substring(0, n.O.dataProvider.indexOf("nano_photos_provider2.php")),
                      r = o + a(i.src),
                      l = i.title,
                      u = i.description.split("_").join(" "),
                      c = "image";
                  void 0 !== i.kind && i.kind.length > 0 && (c = i.kind);
                  var h = i.ID,
                      d = !1;
                  if ("album" == c && (s(l, h) || (d = !0), "" == n.O.album && "" == n.O.photoset || (d = !0)), "image" == c || !d) {
                      var m = 0;
                      void 0 !== i.albumID && (m = i.albumID, !0);
                      var p = void 0 === i.tags ? "" : i.tags,
                          g = NGY2Item.New(n, l.split("_").join(" "), u, h, m, c, p);
                      g.setMediaURL(r, "img"), void 0 !== i.dcGIF && (g.imageDominantColors = "data:image/gif;base64," + i.dcGIF), void 0 !== i.dc && "" !== i.dc && (g.imageDominantColor = i.dc), "album" == c ? g.numberItems = i.cnt : (g.imageWidth = i.imgWidth, g.imageHeight = i.imgHeight), "" != i.originalURL && (g.downloadURL = o + a(i.originalURL));
                      for (var f = n.GOM.curNavLevel, b = ["xs", "sm", "me", "la", "xl"], v = 0; v < b.length; v++) g.thumbs.url[f][b[v]] = o + a(i.t_url[v]), g.thumbs.width[f][b[v]] = parseInt(i.t_width[v]), g.thumbs.height[f][b[v]] = parseInt(i.t_height[v]);
                      var O = n.O.fnProcessData;
                      null !== O && ("function" == typeof O ? O(g, n.O.dataProvider, t) : window[O](g, n.O.dataProvider, t))
                  }
              })), n.I[e].contentIsLoaded = !0
          }
          var r = NGY2Tools.PreloaderDisplay.bind(n),
              l = NGY2Tools.NanoAlert,
              s = NGY2Tools.FilterAlbumName.bind(n),
              u = NGY2Tools.AlbumPostProcess.bind(n);
          switch (t) {
              case "GetHiddenAlbums":
                  break;
              case "AlbumGetContent":
                  var c = arguments[2],
                      h = arguments[3],
                      d = arguments[4],
                      m = arguments[5];
                  i(c, h, d, m)
          }
      }
  })),
  /**!
   * @preserve nanogallery2 - GOOGLE PHOTOS data provider
   * Homepage: http://nanogallery2.nanostudio.org
   * Sources:  https://github.com/nanostudio-org/nanogallery2
   *
   * License:  GPLv3 and commercial licence
   * 
   */
  function(e) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery", "nanogallery2"], e) : "object" == typeof exports && "function" == typeof require ? e(require(["jquery", "nanogallery2"])) : e(jQuery)
  }((function(e) {
      jQuery.nanogallery2.data_google2 = function(e, t) {
          var n = e,
              i = function(e, t, i, o) {
                  var s = "",
                      u = "image",
                      c = NGY2Item.GetIdx(n, e),
                      d = "";
                  n.galleryMaxItems.Get() > 0 && (d = "&max-results=" + n.galleryMaxItems.Get());
                  var m = "";
                  "undefined" != typeof ngy2_pwa_at && (m = ngy2_pwa_at), 0 == e ? (s = "" != m ? "https://photoslibrary.googleapis.com/v1/albums" : n.O.google2URL + "?nguserid=" + n.O.userID + "&alt=json&v=3&kind=album" + d + "&rnd=" + (new Date).getTime(), u = "album") : s = "" != m ? "https://photoslibrary.googleapis.com/v1/mediaItems:search" : n.O.google2URL + "?nguserid=" + n.O.userID + "&ngalbumid=" + e + "&alt=json&v=3&kind=photo&" + d, n.O.debugMode && console.log("Google Photos URL: " + s), r(!0), jQuery.ajaxSetup({
                      cache: !1
                  }), jQuery.support.cors = !0;
                  try {
                      var p = setTimeout((function() {
                          r(!1), l("Could not retrieve AJAX data...")
                      }), 6e4);
                      jQuery.getJSON(s + "&callback=?", (function(s) {
                          if ("error" == s.nano_status) return clearTimeout(p), r(!1), void l(n, "Could not retrieve Google data. Error: " + s.nano_message);
                          clearTimeout(p), r(!1), a(c, u, s), h(e), null != t && t(i, o, null)
                      })).fail((function(e, t, i) {
                          clearTimeout(p), r(!1);
                          var a = "";
                          for (var o in e) a += o + "=" + e[o] + "<br>";
                          l(n, "Could not retrieve Google data. Error: " + (t + ", " + i + " " + a + "<br><br>URL:" + s))
                      }))
                  } catch (e) {
                      l(n, "Could not retrieve Google data. Error: " + e)
                  }
              };

          function a(e, t, i) {
              n.O.debugMode && (console.log("Google Photos data:"), console.dir(i));
              var a = n.I[e].GetID();
              jQuery.each(i, (function(e, i) {
                  if ("object" == typeof i && null !== i) {
                      var r = "",
                          l = "";
                      "image" == t ? (void 0 !== i.description && (r = i.description), "" != n.O.thumbnailLabel.get("title") && (l = u(i.filename))) : l = i.title, null == l && (l = "");
                      var h = i.id;
                      if ("album" == t && (!c(l, h) || null == i.coverPhotoBaseUrl)) return !0;
                      var d = NGY2Item.New(n, l, r, h, a, t, ""),
                          m = 0,
                          p = 0,
                          g = "";
                      "image" == t ? (g = i.baseUrl, n.O.viewerZoom || null == n.O.viewerZoom ? g += "=h" + i.mediaMetadata.height + "-w" + i.mediaMetadata.width : window.screen.width > window.screen.height ? g += "=w" + window.screen.width : g = s + "=h" + window.screen.height, d.setMediaURL(g, "img"), void 0 !== i.mediaMetadata.width && (d.imageWidth = parseInt(i.mediaMetadata.width), m = d.imageWidth), void 0 !== i.mediaMetadata.height && (d.imageHeight = parseInt(i.mediaMetadata.height), p = d.imageHeight), void 0 !== i.mediaMetadata.photo && (null != i.mediaMetadata.photo.exposureTime && (d.exif.exposure = i.mediaMetadata.photo.exposureTime), null != i.mediaMetadata.photo.focalLength && (d.exif.focallength = i.mediaMetadata.photo.focalLength), null != i.mediaMetadata.photo.apertureFNumber && (d.exif.fstop = i.mediaMetadata.photo.apertureFNumber), null != i.mediaMetadata.photo.isoEquivalent && (d.exif.iso = i.mediaMetadata.photo.isoEquivalent), null != i.mediaMetadata.photo.cameraModel && (d.exif.model = i.mediaMetadata.photo.cameraModel)), void 0 !== i.mediaMetadata.video && (null != i.mediaMetadata.video.cameraModel && (d.exif.model = i.mediaMetadata.video.cameraModel), d.downloadURL = i.baseUrl + "=dv")) : d.numberItems = i.mediaItemsCount, d.thumbs = o("l1", d.thumbs, i, t, p, m), d.thumbs = o("lN", d.thumbs, i, t, p, m);
                      var f = n.O.fnProcessData;
                      null !== f && ("function" == typeof f ? f(d, "google2", i) : window[f](d, "google2", i))
                  }
              })), n.I[e].contentIsLoaded = !0
          }

          function o(e, t, i, a, o, r) {
              for (var l = ["xs", "sm", "me", "la", "xl"], s = 0; s < l.length; s++) {
                  if ("image" == a) {
                      if ("auto" == n.tn.settings.width[e][l[s]]) {
                          let a = r / o;
                          t.height[e][l[s]] = n.tn.settings.getH(e, l[s]), t.width[e][l[s]] = n.tn.settings.getH(e, l[s]) * a, t.url[e][l[s]] = i.baseUrl + "=h" + n.tn.settings.getH(e, l[s]);
                          continue
                      }
                      if ("auto" == n.tn.settings.height[e][l[s]]) {
                          let a = o / r;
                          t.width[e][l[s]] = n.tn.settings.getW(e, l[s]), t.height[e][l[s]] = n.tn.settings.getW(e, l[s]) * a, t.url[e][l[s]] = i.baseUrl + "=w" + n.tn.settings.getW(e, l[s]);
                          continue
                      }
                      t.height[e][l[s]] = n.tn.settings.getH(e, l[s]), t.width[e][l[s]] = n.tn.settings.getW(e, l[s]), t.url[e][l[s]] = i.baseUrl + "=w" + n.tn.settings.getW(e, l[s])
                  }
                  if ("album" == a) {
                      if ("auto" == n.tn.settings.width[e][l[s]]) {
                          t.url[e][l[s]] = i.coverPhotoBaseUrl + "=h" + n.tn.settings.getH(e, l[s]);
                          continue
                      }
                      if ("auto" == n.tn.settings.height[e][l[s]]) {
                          t.url[e][l[s]] = i.coverPhotoBaseUrl + "=w" + n.tn.settings.getW(e, l[s]);
                          continue
                      }
                      t.url[e][l[s]] = i.coverPhotoBaseUrl + "=h" + n.tn.settings.getH(e, l[s]) + "-w" + n.tn.settings.getW(e, l[s])
                  }
              }
              return t
          }
          var r = NGY2Tools.PreloaderDisplay.bind(n),
              l = NGY2Tools.NanoAlert,
              u = NGY2Tools.GetImageTitleFromURL.bind(n),
              c = NGY2Tools.FilterAlbumName.bind(n),
              h = NGY2Tools.AlbumPostProcess.bind(n);
          switch (t) {
              case "AlbumGetContent":
                  var d = arguments[2],
                      m = arguments[3],
                      p = arguments[4],
                      g = arguments[5];
                  i(d, m, p, g)
          }
      }
  })),
  /**!
   * @preserve nanogallery2 - FLICKR data provider
   * Homepage: http://nanogallery2.nanostudio.org
   * Sources:  https://github.com/nanostudio-org/nanogallery2
   *
   * License:  GPLv3 and commercial licence
   * 
   */
 /* function(e) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery", "nanogallery2"], e) : "object" == typeof exports && "function" == typeof require ? e(require(["jquery", "nanogallery2"])) : e(jQuery)
  }((function(e) {
      jQuery.nanogallery2.data_flickr = function(e, t) {
          var n = e,
              i = {
                  url: function() {
                      return "https://api.flickr.com/services/rest/"
                  },
                  thumbSize: "               sq",
                  thumbAvailableSizes: new Array(75, 100, 150, 240, 500, 640),
                  thumbAvailableSizesStr: new Array("sq", "t", "q", "s", "m", "z"),
                  photoSize: "0",
                  photoAvailableSizes: new Array(75, 100, 150, 240, 500, 640, 1024, 1024, 1600, 2048, 1e4),
                  photoAvailableSizesStr: new Array("sq", "t", "q", "s", "m", "z", "b", "l", "h", "k", "o")
              },
              a = function(e, t, a, l) {
                  "" == n.O.flickrAPIKey && h(n, "Please set your Flickr API Key (option flickrAPIKey)");
                  var s = NGY2Item.GetIdx(n, e),
                      d = "",
                      m = "image";
                  "NONE" == n.O.photoset.toUpperCase() || "NONE" == n.O.album.toUpperCase() ? d = i.url() + "?&method=flickr.people.getPublicPhotos&api_key=" + n.O.flickrAPIKey + "&user_id=" + n.O.userID + "&extras=description,views,tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_z,url_b,url_h,url_k&per_page=500&format=json" : 0 == n.I[s].GetID() ? (d = i.url() + "?&method=flickr.photosets.getList&api_key=" + n.O.flickrAPIKey + "&user_id=" + n.O.userID + "&per_page=500&primary_photo_extras=tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json", m = "album") : d = i.url() + "?&method=flickr.photosets.getPhotos&api_key=" + n.O.flickrAPIKey + "&photoset_id=" + n.I[s].GetID() + "&extras=description,views,tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json", n.O.debugMode && console.log("Flickr URL: " + d), c(!0), jQuery.ajaxSetup({
                      cache: !1
                  }), jQuery.support.cors = !0;
                  var g = setTimeout((function() {
                          c(!1), h(n, "Could not retrieve AJAX data...")
                      }), 6e4),
                      f = [],
                      b = function(i, d) {
                          jQuery.getJSON(i + "&page=" + d + "&jsoncallback=?", (function(v, O, y) {
                              var G = 0;
                              if ("album" == m) {
                                  if (void 0 !== v.stat && "fail" === v.stat) return h(n, "Could not retrieve Flickr album list: " + v.message + " (code: " + v.code + ")."), !1;
                                  f = f.concat(v.photosets.photoset), G = v.photosets.pages
                              } else if ("NONE" == n.O.photoset.toUpperCase() || "NONE" == n.O.album.toUpperCase()) f = f.concat(v.photos.photo), G = v.photos.pages;
                              else {
                                  if (void 0 !== v.stat && "fail" === v.stat) return h(n, "Could not retrieve Flickr album: " + v.message + " (code: " + v.code + ")."), !1;
                                  "" == n.I[s].title && (n.I[s].title = v.photoset.title), f = f.concat(v.photoset.photo), G = v.photoset.pages
                              }
                              G > d ? b(i, d + 1) : (clearTimeout(g), c(!1), f = u(f, n.O.tagBlockList), "album" == m ? r(s, e, f) : o(s, e, f), p(e), null != t && t(a, l, null))
                          })).fail((function(e, t, i) {
                              clearTimeout(g), c(!1), h(n, "Could not retrieve Flickr ajax data: " + t + ", " + i)
                          }))
                      };
                  b(d, 1)
              };

          function o(e, t, a) {
              n.O.debugMode && (console.log("Flickr parse photos:"), console.dir(a)), jQuery.each(a, (function(e, a) {
                  var o = a.id,
                      r = a.url_sq,
                      s = a.title;
                  "" != n.O.thumbnailLabel.get("title") && (s = d(r));
                  var u = a.description._content,
                      c = 75,
                      h = 75,
                      m = i.photoAvailableSizesStr.length - 1;
                  n.O.flickrSkipOriginal && m--;
                  for (e = m; e >= 0; e--)
                      if (null != a["url_" + i.photoAvailableSizesStr[e]]) {
                          r = a["url_" + i.photoAvailableSizesStr[e]], c = parseInt(a["width_" + i.photoAvailableSizesStr[e]]), h = parseInt(a["height_" + i.photoAvailableSizesStr[e]]);
                          break
                      }
                  var p = {};
                  for (var g in a) 0 != g.indexOf("height_") && 0 != g.indexOf("width_") && 0 != g.indexOf("url_") || (p[g] = a[g]);
                  var f = void 0 !== a.tags ? a.tags : "",
                      b = NGY2Item.New(n, s, u, o, t, "image", f);
                  b.setMediaURL(r, "img"), b.imageWidth = c, b.imageHeight = h;
                  var v = {
                      url: {
                          l1: {
                              xs: "",
                              sm: "",
                              me: "",
                              la: "",
                              xl: ""
                          },
                          lN: {
                              xs: "",
                              sm: "",
                              me: "",
                              la: "",
                              xl: ""
                          }
                      },
                      width: {
                          l1: {
                              xs: 0,
                              sm: 0,
                              me: 0,
                              la: 0,
                              xl: 0
                          },
                          lN: {
                              xs: 0,
                              sm: 0,
                              me: 0,
                              la: 0,
                              xl: 0
                          }
                      },
                      height: {
                          l1: {
                              xs: 0,
                              sm: 0,
                              me: 0,
                              la: 0,
                              xl: 0
                          },
                          lN: {
                              xs: 0,
                              sm: 0,
                              me: 0,
                              la: 0,
                              xl: 0
                          }
                      }
                  };
                  v = l(v, a, "l1"), v = l(v, a, "lN"), b.thumbs = v;
                  var O = n.O.fnProcessData;
                  null !== O && ("function" == typeof O ? O(b, "flickr", a) : window[O](b, "flickr", a))
              })), n.I[e].contentIsLoaded = !0
          }

          function r(e, t, i) {
              n.O.debugMode && (console.log("Flickr parse list of albums:"), console.dir(i)), jQuery.each(i, (function(e, i) {
                  var a = i.title._content;
                  if (0 == i.visibility_can_see_set) return !0;
                  if (m(a, i.id)) {
                      var o = i.id,
                          r = null != i.description._content ? i.description._content : "",
                          s = {};
                      for (var u in i.primary_photo_extras) s[u] = i.primary_photo_extras[u];
                      var c = "";
                      void 0 !== i.primary_photo_extras && void 0 !== i.primary_photo_extras.tags && (c = i.primary_photo_extras.tags);
                      var h = NGY2Item.New(n, a, r, o, t, "album", c);
                      h.numberItems = i.photos, h.thumbSizes = s;
                      var d = {
                          url: {
                              l1: {
                                  xs: "",
                                  sm: "",
                                  me: "",
                                  la: "",
                                  xl: ""
                              },
                              lN: {
                                  xs: "",
                                  sm: "",
                                  me: "",
                                  la: "",
                                  xl: ""
                              }
                          },
                          width: {
                              l1: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              },
                              lN: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              }
                          },
                          height: {
                              l1: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              },
                              lN: {
                                  xs: 0,
                                  sm: 0,
                                  me: 0,
                                  la: 0,
                                  xl: 0
                              }
                          }
                      };
                      d = l(d, i.primary_photo_extras, "l1"), d = l(d, i.primary_photo_extras, "lN"), h.thumbs = d;
                      var p = n.O.fnProcessData;
                      null !== p && ("function" == typeof p ? p(h, "flickr", i) : window[p](h, "flickr", i))
                  }
              })), n.I[e].contentIsLoaded = !0
          }

          function l(e, t, i) {
              var a = 1;
              !0 === n.tn.opt[i].crop && (a = n.O.thumbnailCropScaleFactor);
              for (var o = ["xs", "sm", "me", "la", "xl"], r = 0; r < o.length; r++)
                  if ("auto" == n.tn.settings.width[i][o[r]] || "" == n.tn.settings.width[i][o[r]]) {
                      let l = s("height_", Math.ceil(n.tn.settings.height[i][o[r]] * n.tn.scale * a * n.tn.settings.mosaic[i + "Factor"].h[o[r]]), t);
                      e.url[i][o[r]] = l.url, e.width[i][o[r]] = l.width, e.height[i][o[r]] = l.height
                  } else if ("auto" == n.tn.settings.height[i][o[r]] || "" == n.tn.settings.height[i][o[r]]) {
                  let l = s("width_", Math.ceil(n.tn.settings.width[i][o[r]] * n.tn.scale * a * n.tn.settings.mosaic[i + "Factor"].w[o[r]]), t);
                  e.url[i][o[r]] = l.url, e.width[i][o[r]] = l.width, e.height[i][o[r]] = l.height
              } else {
                  let l = "height_",
                      u = Math.ceil(n.tn.settings.height[i][o[r]] * n.tn.scale * a * n.tn.settings.mosaic[i + "Factor"].h[o[r]]);
                  n.tn.settings.width[i][o[r]] > n.tn.settings.height[i][o[r]] && (l = "width_", u = Math.ceil(n.tn.settings.width[i][o[r]] * n.tn.scale * a * n.tn.settings.mosaic[i + "Factor"].w[o[r]]));
                  let c = s(l, u, t);
                  e.url[i][o[r]] = c.url, e.width[i][o[r]] = c.width, e.height[i][o[r]] = c.height
              }
              return e
          }

          function s(e, t, n) {
              for (var a = {
                      url: "",
                      width: 0,
                      height: 0
                  }, o = 0, r = 0; r < i.thumbAvailableSizes.length; r++) {
                  var l = n[e + i.photoAvailableSizesStr[r]];
                  if (null != l && (o = r, l >= t)) break
              }
              var s = i.photoAvailableSizesStr[o];
              return a.url = n["url_" + s], a.width = parseInt(n["width_" + s]), a.height = parseInt(n["height_" + s]), a
          }
          var u = function(e, t) {
              return "" != t && null != e && (e = e.filter((function(e) {
                  var n = new RegExp(t, "i"),
                      i = [e.tags];
                  return Array.isArray(e.tags) && (i = e.tags), !i.some((function(e) {
                      return n.test(e)
                  }))
              }))), e
          };
          var c = NGY2Tools.PreloaderDisplay.bind(n),
              h = NGY2Tools.NanoAlert,
              d = NGY2Tools.GetImageTitleFromURL.bind(n),
              m = NGY2Tools.FilterAlbumName.bind(n),
              p = NGY2Tools.AlbumPostProcess.bind(n);
          switch (t) {
              case "AlbumGetContent":
                  var g = arguments[2],
                      f = arguments[3],
                      b = arguments[4],
                      v = arguments[5];
                  a(g, f, b, v)
          }
      }
  }));

*/
  const selectors$z = {
    popupContainer: '.pswp',
    popupCloseBtn: '.pswp__custom-close',
    popupIframe: 'iframe, video',
    popupCustomIframe: '.pswp__custom-iframe',
    popupThumbs: '.pswp__thumbs',
    dataOptionClasses: 'data-pswp-option-classes',
    dataVideoType: 'data-video-type',
  };

  const classes$k = {
    classCurrent: 'is-current',
    classCustomLoader: 'pswp--custom-loader',
    classCustomOpen: 'pswp--custom-opening',
    classLoader: 'pswp__loader',
  };

  const loaderHTML = `<div class="${classes$k.classLoader}"><div class="loader pswp__loader-line"><div class="loader-indeterminate"></div></div></div>`;

  class LoadPhotoswipe {
    constructor(items, options = '') {
      this.items = items;
      this.pswpElement = document.querySelectorAll(selectors$z.popupContainer)[0];
      this.popup = null;
      this.popupThumbs = null;
      this.popupThumbsContainer = this.pswpElement.querySelector(selectors$z.popupThumbs);
      this.closeBtn = this.pswpElement.querySelector(selectors$z.popupCloseBtn);
      const defaultOptions = {
        history: false,
        focus: false,
        mainClass: '',
      };
      this.options = options !== '' ? options : defaultOptions;

      this.init();
    }

    init() {
      this.pswpElement.classList.add(classes$k.classCustomOpen);

      this.initLoader();

      loadScript({url: window.theme.assets.photoswipe})
        .then(() => this.loadPopup())
        .catch((e) => console.error(e));
    }

    initLoader() {
      if (this.pswpElement.classList.contains(classes$k.classCustomLoader) && this.options !== '' && this.options.mainClass) {
        this.pswpElement.setAttribute(selectors$z.dataOptionClasses, this.options.mainClass);
        let loaderElem = document.createElement('div');
        loaderElem.innerHTML = loaderHTML;
        loaderElem = loaderElem.firstChild;
        this.pswpElement.appendChild(loaderElem);
      } else {
        this.pswpElement.setAttribute(selectors$z.dataOptionClasses, '');
      }
    }

    loadPopup() {
      const PhotoSwipe = window.themePhotoswipe.PhotoSwipe.default;
      const PhotoSwipeUI = window.themePhotoswipe.PhotoSwipeUI.default;

      if (this.pswpElement.classList.contains(classes$k.classCustomLoader)) {
        this.pswpElement.classList.remove(classes$k.classCustomLoader);
      }

      this.pswpElement.classList.remove(classes$k.classCustomOpen);

      this.popup = new PhotoSwipe(this.pswpElement, PhotoSwipeUI, this.items, this.options);
      this.popup.init();

      this.initVideo();

      this.thumbsActions();

      this.popup.listen('close', () => this.onClose());

      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.popup.close());
      }
    }

    initVideo() {
      const videoContainer = this.pswpElement.querySelector(selectors$z.popupCustomIframe);
      if (videoContainer) {
        const videoType = videoContainer.getAttribute(selectors$z.dataVideoType);

        if (videoType == 'youtube') {
          new LoadVideoYT(videoContainer.parentElement);
        } else if (videoType == 'vimeo') {
          new LoadVideoVimeo(videoContainer.parentElement);
        }
      }
    }

    thumbsActions() {
      if (this.popupThumbsContainer && this.popupThumbsContainer.firstChild) {
        this.popupThumbsContainer.addEventListener('wheel', (e) => this.stopDisabledScroll(e));
        this.popupThumbsContainer.addEventListener('mousewheel', (e) => this.stopDisabledScroll(e));
        this.popupThumbsContainer.addEventListener('DOMMouseScroll', (e) => this.stopDisabledScroll(e));

        this.popupThumbs = this.pswpElement.querySelectorAll(`${selectors$z.popupThumbs} > *`);
        this.popupThumbs.forEach((element, i) => {
          element.addEventListener('click', (e) => {
            e.preventDefault();
            element.parentElement.querySelector(`.${classes$k.classCurrent}`).classList.remove(classes$k.classCurrent);
            element.classList.add(classes$k.classCurrent);
            this.popup.goTo(i);
          });
        });

        this.popup.listen('imageLoadComplete', () => this.setCurrentThumb());
        this.popup.listen('beforeChange', () => this.setCurrentThumb());
      }
    }

    stopDisabledScroll(e) {
      e.stopPropagation();
    }

    onClose() {
      const popupIframe = this.pswpElement.querySelector(selectors$z.popupIframe);
      if (popupIframe) {
        popupIframe.parentNode.removeChild(popupIframe);
      }

      if (this.popupThumbsContainer && this.popupThumbsContainer.firstChild) {
        while (this.popupThumbsContainer.firstChild) this.popupThumbsContainer.removeChild(this.popupThumbsContainer.firstChild);
      }

      this.pswpElement.setAttribute(selectors$z.dataOptionClasses, '');
      const loaderElem = this.pswpElement.querySelector(`.${classes$k.classLoader}`);
      if (loaderElem) {
        this.pswpElement.removeChild(loaderElem);
      }
    }

    setCurrentThumb() {
      const lastCurrentThumb = this.pswpElement.querySelector(`${selectors$z.popupThumbs} > .${classes$k.classCurrent}`);
      if (lastCurrentThumb) {
        lastCurrentThumb.classList.remove(classes$k.classCurrent);
      }

      if (!this.popupThumbs) return;
      const currentThumb = this.popupThumbs[this.popup.getCurrentIndex()];
      currentThumb.classList.add(classes$k.classCurrent);
      this.scrollThumbs(currentThumb);
    }

    scrollThumbs(currentThumb) {
      const thumbsContainerLeft = this.popupThumbsContainer.scrollLeft;
      const thumbsContainerWidth = this.popupThumbsContainer.offsetWidth;
      const thumbsContainerPos = thumbsContainerLeft + thumbsContainerWidth;
      const currentThumbLeft = currentThumb.offsetLeft;
      const currentThumbWidth = currentThumb.offsetWidth;
      const currentThumbPos = currentThumbLeft + currentThumbWidth;

      if (thumbsContainerPos <= currentThumbPos || thumbsContainerPos > currentThumbLeft) {
        const currentThumbMarginLeft = parseInt(window.getComputedStyle(currentThumb).marginLeft);
        this.popupThumbsContainer.scrollTo({
          top: 0,
          left: currentThumbLeft - currentThumbMarginLeft,
          behavior: 'smooth',
        });
      }
    }
  }

  const selectors$A = {
    zoomWrapper: '[data-zoom-wrapper]',
    dataImageSrc: 'data-image-src',
    dataImageWidth: 'data-image-width',
    dataImageHeight: 'data-image-height',
    dataImageZoomEnable: 'data-image-zoom-enable',
    thumbs: '.pswp__thumbs',
    caption: '[data-zoom-caption]',
  };

  const classes$l = {
    variantSoldOut: 'variant--soldout',
    variantUnavailable: 'variant--unavailabe',
    popupThumb: 'pswp__thumb',
    popupClass: 'pswp-zoom-gallery',
    popupClassNoThumbs: 'pswp-zoom-gallery--single',
    popupTitle: 'product__title',
    popupTitleNew: 'product__title pswp__title',
  };

  class Zoom {
    constructor(section) {
      this.container = section.container;
      this.zoomWrappers = this.container.querySelectorAll(selectors$A.zoomWrapper);
      this.thumbsContainer = document.querySelector(selectors$A.thumbs);
      this.zoomCaptionElem = this.container.querySelector(selectors$A.caption);
      this.zoomEnable = this.container.getAttribute(selectors$A.dataImageZoomEnable) === 'true';

      if (this.zoomEnable) {
        this.init();
      }
    }

    init() {
      const self = this;

      if (this.zoomWrappers.length) {
        this.zoomWrappers.forEach((element, i) => {
          element.addEventListener('click', function (e) {
            e.preventDefault();

            self.createZoom(i);
          });

          element.addEventListener('keyup', function (e) {
            // On keypress Enter move the focus to the first focusable element in the related slide
            if (e.keyCode === window.theme.keyboardKeys.ENTER) {
              e.preventDefault();

              self.createZoom(i);
            }
          });
        });
      }
    }

    createZoom(indexImage) {
      const self = this;
      let items = [];
      let counter = 0;
      let thumbs = '';
      this.zoomWrappers.forEach((elementImage) => {
        const imgSrc = elementImage.getAttribute(selectors$A.dataImageSrc);
        const imgWidth = parseInt(elementImage.getAttribute(selectors$A.dataImageWidth));
        const imgHeight = parseInt(elementImage.getAttribute(selectors$A.dataImageHeight));

        items.push({
          src: imgSrc,
          w: imgWidth,
          h: imgHeight,
          msrc: imgSrc,
        });

        thumbs += `<a href="#" class="${classes$l.popupThumb}" style="background-image: url('${imgSrc}')"></a>`;

        counter += 1;
        if (self.zoomWrappers.length === counter) {
          let popupClass = `${classes$l.popupClass}`;
          if (counter === 1) {
            popupClass = `${classes$l.popupClass} ${classes$l.popupClassNoThumbs}`;
          }
          const options = {
            history: false,
            focus: false,
            index: indexImage,
            mainClass: popupClass,
            showHideOpacity: true,
            howAnimationDuration: 150,
            hideAnimationDuration: 250,
            closeOnScroll: false,
            closeOnVerticalDrag: false,
            captionEl: true,
            closeEl: true,
            closeElClasses: ['caption-close', 'title'],
            tapToClose: false,
            clickToCloseNonZoomable: false,
            maxSpreadZoom: 2,
            loop: true,
            spacing: 0,
            allowPanToNext: true,
            pinchToClose: false,
            addCaptionHTMLFn: function (item, captionEl, isFake) {
              self.zoomCaption(item, captionEl, isFake);
            },
            getThumbBoundsFn: function getThumbBoundsFn() {
              const imageLocation = self.zoomWrappers[indexImage];
              const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
              const rect = imageLocation.getBoundingClientRect();
              return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
            },
          };

          new LoadPhotoswipe(items, options);

          if (self.thumbsContainer && thumbs !== '') {
            self.thumbsContainer.innerHTML = thumbs;
          }
        }
      });
    }

    zoomCaption(item, captionEl) {
      let captionHtml = '';
      const targetContainer = captionEl.children[0];
      if (this.zoomCaptionElem) {
        captionHtml = this.zoomCaptionElem.innerHTML;

        if (this.zoomCaptionElem.closest(`.${classes$l.variantSoldOut}`)) {
          targetContainer.classList.add(classes$l.variantSoldOut);
        } else {
          targetContainer.classList.remove(classes$l.variantSoldOut);
        }

        if (this.zoomCaptionElem.closest(`.${classes$l.variantUnavailable}`)) {
          targetContainer.classList.add(classes$l.variantUnavailable);
        } else {
          targetContainer.classList.remove(classes$l.variantUnavailable);
        }
      }

      captionHtml = captionHtml.replaceAll(classes$l.popupTitle, classes$l.popupTitleNew);
      targetContainer.innerHTML = captionHtml;
      return false;
    }
  }