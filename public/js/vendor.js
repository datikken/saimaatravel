/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){return null!=n&&i.call(n,r)},x=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},_=Math.pow(2,53)-1,A=b("length"),w=function(n){var r=A(n);return"number"==typeof r&&0<=r&&r<=_};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var O=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!w(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(n,r,t){var e=(w(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!w(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return w(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=x(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=w(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return w(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=w(n)?h.clone(n):h.values(n),u=A(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var k=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=k(function(n,r,t){j(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=k(function(n,r,t){n[t]=r}),h.countBy=k(function(n,r,t){j(n,t)?n[t]++:n[t]=1});var S=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(S):w(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:w(n)?n.length:h.keys(n).length},h.partition=k(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){return null==n||n.length<1?null==r?void 0:[]:null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var M=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=A(n);i<o;i++){var a=n[i];if(w(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else M(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return M(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=A(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(M(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=A(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=M(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,A).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=A(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var F=function(i){return function(n,r,t){r=d(r,t);for(var e=A(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=F(1),h.findLastIndex=F(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=A(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var E=function(i,o,a){return function(n,r,t){var e=0,u=A(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=E(1,h.findIndex,h.sortedIndex),h.lastIndexOf=E(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return N(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return N(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=M(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return j(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var I=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(n,r){var t=T.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(j(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=T[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)j(n,t)&&r.push(t);return I&&B(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return I&&B(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var R=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=R(h.allKeys),h.extendOwn=h.assign=R(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var q,K,z=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=z,r=M(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(M(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=R(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},q=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&K(n,r,t,e)},K=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!q(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!j(r,l)||!q(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return q(n,r)},h.isEmpty=function(n){return null==n||(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return j(n,"callee")});var D=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return j(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return x(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?x(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=h.invert(L),W=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=W(L),h.unescape=W(P),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var C=0;h.uniqueId=function(n){var r=++C+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,$=function(n){return"\\"+U[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||J).source,(n.interpolate||J).source,(n.evaluate||J).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(V,$),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var G=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),G(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],G(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return G(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

/**
 * jQuery.query - Query String Modification and Creation for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/8/13
 *
 * @author Blair Mitchelmore
 * @version 2.2.3
 *
 **/
new function(settings) { 
  // Various Settings
  var $separator = settings.separator || '&';
  var $spaces = settings.spaces === false ? false : true;
  var $suffix = settings.suffix === false ? '' : '[]';
  var $prefix = settings.prefix === false ? false : true;
  var $hash = $prefix ? settings.hash === true ? "#" : "?" : "";
  var $numbers = settings.numbers === false ? false : true;

  jQuery.query = new function() {
    var is = function(o, t) {
      return o != undefined && o !== null && (!!t ? o.constructor == t : true);
    };
    var parse = function(path) {
      var m, rx = /\[([^[]*)\]/g, match = /^([^[]+)(\[.*\])?$/.exec(path), base = match[1], tokens = [];
      while (m = rx.exec(match[2])) tokens.push(m[1]);
      return [base, tokens];
    };
    var set = function(target, tokens, value) {
      var o, token = tokens.shift();
      if (typeof target != 'object') target = null;
      if (token === "") {
        if (!target) target = [];
        if (is(target, Array)) {
          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
        } else if (is(target, Object)) {
          var i = 0;
          while (target[i++] != null);
          target[--i] = tokens.length == 0 ? value : set(target[i], tokens.slice(0), value);
        } else {
          target = [];
          target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));
        }
      } else if (token && token.match(/^\s*[0-9]+\s*$/)) {
        var index = parseInt(token, 10);
        if (!target) target = [];
        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
      } else if (token) {
        var index = token.replace(/^\s*|\s*$/g, "");
        if (!target) target = {};
        if (is(target, Array)) {
          var temp = {};
          for (var i = 0; i < target.length; ++i) {
            temp[i] = target[i];
          }
          target = temp;
        }
        target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);
      } else {
        return value;
      }
      return target;
    };
    
    var queryObject = function(a) {
      var self = this;
      self.keys = {};
      
      if (a.queryObject) {
        jQuery.each(a.get(), function(key, val) {
          self.SET(key, val);
        });
      } else {
        self.parseNew.apply(self, arguments);
      }
      return self;
    };
    
    queryObject.prototype = {
      queryObject: true,
      parseNew: function(){
        var self = this;
        self.keys = {};
        jQuery.each(arguments, function() {
          var q = "" + this;
          q = q.replace(/^[?#]/,''); // remove any leading ? || #
          q = q.replace(/[;&]$/,''); // remove any trailing & || ;
          if ($spaces) q = q.replace(/[+]/g,' '); // replace +'s with spaces
          
          jQuery.each(q.split(/[&;]/), function(){
            var key = decodeURIComponent(this.split('=')[0] || "");
            var val = decodeURIComponent(this.split('=')[1] || "");
            
            if (!key) return;
            
            if ($numbers) {
              if (/^[+-]?[0-9]+\.[0-9]*$/.test(val)) // simple float regex
                val = parseFloat(val);
              else if (/^[+-]?[1-9][0-9]*$/.test(val)) // simple int regex
                val = parseInt(val, 10);
            }
            
            val = (!val && val !== 0) ? true : val;
            
            self.SET(key, val);
          });
        });
        return self;
      },
      has: function(key, type) {
        var value = this.get(key);
        return is(value, type);
      },
      GET: function(key) {
        if (!is(key)) return this.keys;
        var parsed = parse(key), base = parsed[0], tokens = parsed[1];
        var target = this.keys[base];
        while (target != null && tokens.length != 0) {
          target = target[tokens.shift()];
        }
        return typeof target == 'number' ? target : target || "";
      },
      get: function(key) {
        var target = this.GET(key);
        if (is(target, Object))
          return jQuery.extend(true, {}, target);
        else if (is(target, Array))
          return target.slice(0);
        return target;
      },
      SET: function(key, val) {
        var value = !is(val) ? null : val;
        var parsed = parse(key), base = parsed[0], tokens = parsed[1];
        var target = this.keys[base];
        this.keys[base] = set(target, tokens.slice(0), value);
        return this;
      },
      set: function(key, val) {
        return this.copy().SET(key, val);
      },
      REMOVE: function(key, val) {
        if (val) {
          var target = this.GET(key);
          if (is(target, Array)) {
            for (tval in target) {
                target[tval] = target[tval].toString();
            }
            var index = $.inArray(val, target);
            if (index >= 0) {
              key = target.splice(index, 1);
              key = key[index];
            } else {
              return;
            }
          } else if (val != target) {
              return;
          }
        }
        return this.SET(key, null).COMPACT();
      },
      remove: function(key, val) {
        return this.copy().REMOVE(key, val);
      },
      EMPTY: function() {
        var self = this;
        jQuery.each(self.keys, function(key, value) {
          delete self.keys[key];
        });
        return self;
      },
      load: function(url) {
        var hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
        var search = url.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
        return new queryObject(url.length == search.length ? '' : search, url.length == hash.length ? '' : hash);
      },
      empty: function() {
        return this.copy().EMPTY();
      },
      copy: function() {
        return new queryObject(this);
      },
      COMPACT: function() {
        function build(orig) {
          var obj = typeof orig == "object" ? is(orig, Array) ? [] : {} : orig;
          if (typeof orig == 'object') {
            function add(o, key, value) {
              if (is(o, Array))
                o.push(value);
              else
                o[key] = value;
            }
            jQuery.each(orig, function(key, value) {
              if (!is(value)) return true;
              add(obj, key, build(value));
            });
          }
          return obj;
        }
        this.keys = build(this.keys);
        return this;
      },
      compact: function() {
        return this.copy().COMPACT();
      },
      toString: function() {
        var i = 0, queryString = [], chunks = [], self = this;
        var encode = function(str) {
          str = str + "";
          str = encodeURIComponent(str);
          if ($spaces) str = str.replace(/%20/g, "+");
          return str;
        };
        var addFields = function(arr, key, value) {
          if (!is(value) || value === false) return;
          var o = [encode(key)];
          if (value !== true) {
            o.push("=");
            o.push(encode(value));
          }
          arr.push(o.join(""));
        };
        var build = function(obj, base) {
          var newKey = function(key) {
            return !base || base == "" ? [key].join("") : [base, "[", key, "]"].join("");
          };
          jQuery.each(obj, function(key, value) {
            if (typeof value == 'object') 
              build(value, newKey(key));
            else
              addFields(chunks, newKey(key), value);
          });
        };
        
        build(this.keys);
        
        if (chunks.length > 0) queryString.push($hash);
        queryString.push(chunks.join($separator));
        
        return queryString.join("");
      }
    };
    
    return new queryObject(location.search, location.hash);
  };
}(jQuery.query || {}); // Pass in jQuery.query as settings object

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scrollLock"] = factory();
	else
		root["scrollLock"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/tools.js
var argumentAsArray = function argumentAsArray(argument) {
  return Array.isArray(argument) ? argument : [argument];
};
var isElement = function isElement(target) {
  return target instanceof Node;
};
var isElementList = function isElementList(nodeList) {
  return nodeList instanceof NodeList;
};
var eachNode = function eachNode(nodeList, callback) {
  if (nodeList && callback) {
    nodeList = isElementList(nodeList) ? nodeList : [nodeList];

    for (var i = 0; i < nodeList.length; i++) {
      if (callback(nodeList[i], i, nodeList.length) === true) {
        break;
      }
    }
  }
};
var throwError = function throwError(message) {
  return console.error("[scroll-lock] ".concat(message));
};
var arrayAsSelector = function arrayAsSelector(array) {
  if (Array.isArray(array)) {
    var selector = array.join(', ');
    return selector;
  }
};
var nodeListAsArray = function nodeListAsArray(nodeList) {
  var nodes = [];
  eachNode(nodeList, function (node) {
    return nodes.push(node);
  });
  return nodes;
};
var findParentBySelector = function findParentBySelector($el, selector) {
  var self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

  if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
    return $el;
  }

  while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {
    ;
  }

  return $el;
};
var elementHasSelector = function elementHasSelector($el, selector) {
  var $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
  return has;
};
var elementHasOverflowHidden = function elementHasOverflowHidden($el) {
  if ($el) {
    var computedStyle = getComputedStyle($el);
    var overflowIsHidden = computedStyle.overflow === 'hidden';
    return overflowIsHidden;
  }
};
var elementScrollTopOnStart = function elementScrollTopOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    return scrollTop <= 0;
  }
};
var elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    var scrollHeight = $el.scrollHeight;
    var scrollTopWithHeight = scrollTop + $el.offsetHeight;
    return scrollTopWithHeight >= scrollHeight;
  }
};
var elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    return scrollLeft <= 0;
  }
};
var elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    var scrollWidth = $el.scrollWidth;
    var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
    return scrollLeftWithWidth >= scrollWidth;
  }
};
var elementIsScrollableField = function elementIsScrollableField($el) {
  var selector = 'textarea, [contenteditable="true"]';
  return elementHasSelector($el, selector);
};
var elementIsInputRange = function elementIsInputRange($el) {
  var selector = 'input[type="range"]';
  return elementHasSelector($el, selector);
};
// CONCATENATED MODULE: ./src/scroll-lock.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disablePageScroll", function() { return disablePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePageScroll", function() { return enablePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollState", function() { return getScrollState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQueueScrollLocks", function() { return clearQueueScrollLocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetScrollBarWidth", function() { return scroll_lock_getTargetScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", function() { return scroll_lock_getCurrentTargetScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageScrollBarWidth", function() { return getPageScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", function() { return getCurrentPageScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScrollableTarget", function() { return scroll_lock_addScrollableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollableTarget", function() { return scroll_lock_removeScrollableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScrollableSelector", function() { return scroll_lock_addScrollableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollableSelector", function() { return scroll_lock_removeScrollableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLockableTarget", function() { return scroll_lock_addLockableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLockableSelector", function() { return scroll_lock_addLockableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFillGapMethod", function() { return scroll_lock_setFillGapMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFillGapTarget", function() { return scroll_lock_addFillGapTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFillGapTarget", function() { return scroll_lock_removeFillGapTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFillGapSelector", function() { return scroll_lock_addFillGapSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFillGapSelector", function() { return scroll_lock_removeFillGapSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refillGaps", function() { return refillGaps; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
var TOUCH_DIRECTION_DETECT_OFFSET = 3;
var state = {
  scroll: true,
  queue: 0,
  scrollableSelectors: ['[data-scroll-lock-scrollable]'],
  lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
  fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
  fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
  //
  startTouchY: 0,
  startTouchX: 0
};
var disablePageScroll = function disablePageScroll(target) {
  if (state.queue <= 0) {
    state.scroll = false;
    scroll_lock_hideLockableOverflow();
    fillGaps();
  }

  scroll_lock_addScrollableTarget(target);
  state.queue++;
};
var enablePageScroll = function enablePageScroll(target) {
  state.queue > 0 && state.queue--;

  if (state.queue <= 0) {
    state.scroll = true;
    scroll_lock_showLockableOverflow();
    unfillGaps();
  }

  scroll_lock_removeScrollableTarget(target);
};
var getScrollState = function getScrollState() {
  return state.scroll;
};
var clearQueueScrollLocks = function clearQueueScrollLocks() {
  state.queue = 0;
};
var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
  var onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var currentOverflowYProperty = $target.style.overflowY;

    if (onlyExists) {
      if (!getScrollState()) {
        $target.style.overflowY = $target.dataset.scrollLockSavedOverflowYProperty;
      }
    } else {
      $target.style.overflowY = 'scroll';
    }

    var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
    $target.style.overflowY = currentOverflowYProperty;
    return width;
  } else {
    return 0;
  }
};
var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
  if (isElement($target)) {
    if ($target === document.body) {
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      var currentWidth = windowWidth - documentWidth;
      return currentWidth;
    } else {
      var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
      var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
      $target.style.borderLeftWidth = '0px';
      $target.style.borderRightWidth = '0px';

      var _currentWidth = $target.offsetWidth - $target.clientWidth;

      $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
      $target.style.borderRightWidth = borderRightWidthCurrentProperty;
      return _currentWidth;
    }
  } else {
    return 0;
  }
};
var getPageScrollBarWidth = function getPageScrollBarWidth() {
  var onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
};
var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
  return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
};
var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.dataset.scrollLockScrollable = '';
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          delete $target.dataset.scrollLockScrollable;
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors.push(selector);
    });
  }
};
var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors = state.scrollableSelectors.filter(function (sSelector) {
        return sSelector !== selector;
      });
    });
  }
};
var scroll_lock_addLockableTarget = function addLockableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.dataset.scrollLockLockable = '';
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }
  }
};
var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.lockableSelectors.push(selector);
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }

    scroll_lock_addFillGapSelector(selector);
  }
};
var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
  if (method) {
    if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
      state.fillGapMethod = method;
      refillGaps();
    } else {
      var methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
      throwError("\"".concat(method, "\" method is not available!\nAvailable fill gap methods: ").concat(methods, "."));
    }
  }
};
var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.dataset.scrollLockFillGap = '';

          if (!state.scroll) {
            scroll_lock_fillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          delete $target.dataset.scrollLockFillGap;

          if (!state.scroll) {
            scroll_lock_unfillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.fillGapSelectors.push(selector);

      if (!state.scroll) {
        scroll_lock_fillGapSelector(selector);
      }
    });
  }
};
var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.fillGapSelectors = state.fillGapSelectors.filter(function (fSelector) {
        return fSelector !== selector;
      });

      if (!state.scroll) {
        scroll_lock_unfillGapSelector(selector);
      }
    });
  }
};
var refillGaps = function refillGaps() {
  if (!state.scroll) {
    fillGaps();
  }
};

var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_hideLockableOverflowSelector(selector);
};

var scroll_lock_showLockableOverflow = function showLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_showLockableOverflowSelector(selector);
};

var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_hideLockableOverflowTarget($target);
  });
};

var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_showLockableOverflowTarget($target);
  });
};

var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
  if (isElement($target) && $target.dataset.scrollLockLocked !== 'true') {
    var computedStyle = window.getComputedStyle($target);
    $target.dataset.scrollLockSavedOverflowYProperty = computedStyle.overflowY;
    $target.dataset.scrollLockSavedInlineOverflowProperty = $target.style.overflow;
    $target.dataset.scrollLockSavedInlineOverflowYProperty = $target.style.overflowY;
    $target.style.overflow = 'hidden';
    $target.dataset.scrollLockLocked = 'true';
  }
};

var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
  if (isElement($target) && $target.dataset.scrollLockLocked === 'true') {
    $target.style.overflow = $target.dataset.scrollLockSavedInlineOverflowProperty;
    $target.style.overflowY = $target.dataset.scrollLockSavedInlineOverflowYProperty;
    delete $target.dataset.scrollLockSavedOverflowYProperty;
    delete $target.dataset.scrollLockSavedInlineOverflowProperty;
    delete $target.dataset.scrollLockSavedInlineOverflowYProperty;
    delete $target.dataset.scrollLockLocked;
  }
};

var fillGaps = function fillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_fillGapSelector(selector);
  });
};

var unfillGaps = function unfillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_unfillGapSelector(selector);
  });
};

var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  var isLockable = state.lockableSelectors.indexOf(selector) !== -1;
  eachNode($targets, function ($target) {
    scroll_lock_fillGapTarget($target, isLockable);
  });
};

var scroll_lock_fillGapTarget = function fillGapTarget($target) {
  var isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var scrollBarWidth;

    if ($target.dataset.scrollLockLockable === '' || isLockable) {
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
    } else {
      var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
    }

    if ($target.dataset.scrollLockFilledGap === 'true') {
      scroll_lock_unfillGapTarget($target);
    }

    var computedStyle = window.getComputedStyle($target);
    $target.dataset.scrollLockFilledGap = 'true';
    $target.dataset.scrollLockCurrentFillGapMethod = state.fillGapMethod;

    if (state.fillGapMethod === 'margin') {
      var currentMargin = parseFloat(computedStyle.marginRight);
      $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
    } else if (state.fillGapMethod === 'width') {
      $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'max-width') {
      $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'padding') {
      var currentPadding = parseFloat(computedStyle.paddingRight);
      $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
    }
  }
};

var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_unfillGapTarget($target);
  });
};

var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
  if (isElement($target)) {
    if ($target.dataset.scrollLockFilledGap === 'true') {
      var currentFillGapMethod = $target.dataset.scrollLockCurrentFillGapMethod;
      delete $target.dataset.scrollLockFilledGap;
      delete $target.dataset.scrollLockCurrentFillGapMethod;

      if (currentFillGapMethod === 'margin') {
        $target.style.marginRight = "";
      } else if (currentFillGapMethod === 'width') {
        $target.style.width = "";
      } else if (currentFillGapMethod === 'max-width') {
        $target.style.maxWidth = "";
      } else if (currentFillGapMethod === 'padding') {
        $target.style.paddingRight = "";
      }
    }
  }
};

var onResize = function onResize(e) {
  refillGaps();
};

var onTouchStart = function onTouchStart(e) {
  if (!state.scroll) {
    state.startTouchY = e.touches[0].clientY;
    state.startTouchX = e.touches[0].clientX;
  }
};

var scroll_lock_onTouchMove = function onTouchMove(e) {
  if (!state.scroll) {
    var startTouchY = state.startTouchY,
        startTouchX = state.startTouchX;
    var currentClientY = e.touches[0].clientY;
    var currentClientX = e.touches[0].clientX;

    if (e.touches.length < 2) {
      var selector = arrayAsSelector(state.scrollableSelectors);
      var direction = {
        up: startTouchY < currentClientY,
        down: startTouchY > currentClientY,
        left: startTouchX < currentClientX,
        right: startTouchX > currentClientX
      };
      var directionWithOffset = {
        up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
        down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
        left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
        right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
      };

      var handle = function handle($el) {
        var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if ($el) {
          var parentScrollableEl = findParentBySelector($el, selector, false);

          if (elementIsInputRange($el)) {
            return false;
          }

          if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
            var prevent = false;

            if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
              if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                prevent = true;
              }
            } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
              if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                prevent = true;
              }
            } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
              prevent = true;
            }

            if (prevent) {
              if (parentScrollableEl) {
                handle(parentScrollableEl, true);
              } else {
                e.preventDefault();
              }
            }
          } else {
            handle(parentScrollableEl);
          }
        } else {
          e.preventDefault();
        }
      };

      handle(e.target);
    }
  }
};

var onTouchEnd = function onTouchEnd(e) {
  if (!state.scroll) {
    state.startTouchY = 0;
    state.startTouchX = 0;
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', onResize);
}

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', onTouchStart);
  document.addEventListener('touchmove', scroll_lock_onTouchMove, {
    passive: false
  });
  document.addEventListener('touchend', onTouchEnd);
}

var deprecatedMethods = {
  hide: function hide(target) {
    throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
    disablePageScroll(target);
  },
  show: function show(target) {
    throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
    enablePageScroll(target);
  },
  toggle: function toggle(target) {
    throwError('"toggle" is deprecated! Do not use it.');

    if (getScrollState()) {
      disablePageScroll();
    } else {
      enablePageScroll(target);
    }
  },
  getState: function getState() {
    throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
    return getScrollState();
  },
  getWidth: function getWidth() {
    throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
    return getPageScrollBarWidth();
  },
  getCurrentWidth: function getCurrentWidth() {
    throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
    return getCurrentPageScrollBarWidth();
  },
  setScrollableTargets: function setScrollableTargets(target) {
    throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
    scroll_lock_addScrollableTarget(target);
  },
  setFillGapSelectors: function setFillGapSelectors(selector) {
    throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
    scroll_lock_addFillGapSelector(selector);
  },
  setFillGapTargets: function setFillGapTargets(target) {
    throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
    scroll_lock_addFillGapTarget(target);
  },
  clearQueue: function clearQueue() {
    throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
    clearQueueScrollLocks();
  }
};

var scrollLock = _objectSpread({
  disablePageScroll: disablePageScroll,
  enablePageScroll: enablePageScroll,
  getScrollState: getScrollState,
  clearQueueScrollLocks: clearQueueScrollLocks,
  getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
  getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
  getPageScrollBarWidth: getPageScrollBarWidth,
  getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
  addScrollableSelector: scroll_lock_addScrollableSelector,
  removeScrollableSelector: scroll_lock_removeScrollableSelector,
  addScrollableTarget: scroll_lock_addScrollableTarget,
  removeScrollableTarget: scroll_lock_removeScrollableTarget,
  addLockableSelector: scroll_lock_addLockableSelector,
  addLockableTarget: scroll_lock_addLockableTarget,
  addFillGapSelector: scroll_lock_addFillGapSelector,
  removeFillGapSelector: scroll_lock_removeFillGapSelector,
  addFillGapTarget: scroll_lock_addFillGapTarget,
  removeFillGapTarget: scroll_lock_removeFillGapTarget,
  setFillGapMethod: scroll_lock_setFillGapMethod,
  refillGaps: refillGaps,
  _state: state
}, deprecatedMethods);

/* harmony default export */ var scroll_lock = __webpack_exports__["default"] = (scrollLock);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi8xanF1ZXJ5Lm1pbi5qcyIsImxpYi8xdW5kZXJzY29yZS1taW4uanMiLCJsaWIvYWpheGZvcm0uanMiLCJsaWIvanF1ZXJ5LnF1ZXJ5LW9iamVjdC5qcyIsImxpYi9tYWdpbmZpYy5wb3B1cC5taW4uanMiLCJsaWIvb3dsLmNhcm91c2VsLmpzIiwibGliL3Njcm9sbC1sb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeDNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjMuNC4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKEMsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9W10sRT1DLmRvY3VtZW50LHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHM9dC5zbGljZSxnPXQuY29uY2F0LHU9dC5wdXNoLGk9dC5pbmRleE9mLG49e30sbz1uLnRvU3RyaW5nLHY9bi5oYXNPd25Qcm9wZXJ0eSxhPXYudG9TdHJpbmcsbD1hLmNhbGwoT2JqZWN0KSx5PXt9LG09ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUubm9kZVR5cGV9LHg9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PT1lLndpbmRvd30sYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNC4xXCIsaz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgay5mbi5pbml0KGUsdCl9LHA9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO2Z1bmN0aW9uIGQoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9ay5mbj1rLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6ayxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9ay5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIGsuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGsubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKyhlPDA/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soMDw9biYmbjx0P1t0aGlzW25dXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDp1LHNvcnQ6dC5zb3J0LHNwbGljZTp0LnNwbGljZX0say5leHRlbmQ9ay5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG8sYT1hcmd1bWVudHNbMF18fHt9LHM9MSx1PWFyZ3VtZW50cy5sZW5ndGgsbD0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBhJiYobD1hLGE9YXJndW1lbnRzW3NdfHx7fSxzKyspLFwib2JqZWN0XCI9PXR5cGVvZiBhfHxtKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSlyPWVbdF0sXCJfX3Byb3RvX19cIiE9PXQmJmEhPT1yJiYobCYmciYmKGsuaXNQbGFpbk9iamVjdChyKXx8KGk9QXJyYXkuaXNBcnJheShyKSkpPyhuPWFbdF0sbz1pJiYhQXJyYXkuaXNBcnJheShuKT9bXTppfHxrLmlzUGxhaW5PYmplY3Qobik/bjp7fSxpPSExLGFbdF09ay5leHRlbmQobCxvLHIpKTp2b2lkIDAhPT1yJiYoYVt0XT1yKSk7cmV0dXJuIGF9LGsuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKGYrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoZSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQsbjtyZXR1cm4hKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09by5jYWxsKGUpKSYmKCEodD1yKGUpKXx8XCJmdW5jdGlvblwiPT10eXBlb2Yobj12LmNhbGwodCxcImNvbnN0cnVjdG9yXCIpJiZ0LmNvbnN0cnVjdG9yKSYmYS5jYWxsKG4pPT09bCl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlLHQpe2IoZSx7bm9uY2U6dCYmdC5ub25jZX0pfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKGQoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LHRyaW06ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjooZStcIlwiKS5yZXBsYWNlKHAsXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYoZChPYmplY3QoZSkpP2subWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6dS5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOmkuY2FsbCh0LGUsbil9LG1lcmdlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSt0Lmxlbmd0aCxyPTAsaT1lLmxlbmd0aDtyPG47cisrKWVbaSsrXT10W3JdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1bXSxpPTAsbz1lLmxlbmd0aCxhPSFuO2k8bztpKyspIXQoZVtpXSxpKSE9PWEmJnIucHVzaChlW2ldKTtyZXR1cm4gcn0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89MCxhPVtdO2lmKGQoZSkpZm9yKHI9ZS5sZW5ndGg7bzxyO28rKyludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtlbHNlIGZvcihvIGluIGUpbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7cmV0dXJuIGcuYXBwbHkoW10sYSl9LGd1aWQ6MSxzdXBwb3J0Onl9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihrLmZuW1N5bWJvbC5pdGVyYXRvcl09dFtTeW1ib2wuaXRlcmF0b3JdKSxrLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe25bXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO3ZhciBoPWZ1bmN0aW9uKG4pe3ZhciBlLGQsYixvLGksaCxmLGcsdyx1LGwsVCxDLGEsRSx2LHMsYyx5LGs9XCJzaXp6bGVcIisxKm5ldyBEYXRlLG09bi5kb2N1bWVudCxTPTAscj0wLHA9dWUoKSx4PXVlKCksTj11ZSgpLEE9dWUoKSxEPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYobD0hMCksMH0saj17fS5oYXNPd25Qcm9wZXJ0eSx0PVtdLHE9dC5wb3AsTD10LnB1c2gsSD10LnB1c2gsTz10LnNsaWNlLFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFI9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEk9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLFc9XCJcXFxcW1wiK00rXCIqKFwiK0krXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitNK1wiKlxcXFxdXCIsJD1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrVytcIikqKXwuKilcXFxcKXwpXCIsRj1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLEI9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChNK1wifD5cIiksWD1uZXcgUmVnRXhwKCQpLFY9bmV3IFJlZ0V4cChcIl5cIitJK1wiJFwiKSxHPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrSStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitJK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrSStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitXKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIiskKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L0hUTUwkL2ksUT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLEo9L15oXFxkJC9pLEs9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGVlPS9bK35dLyx0ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTStcIj98KFwiK00rXCIpfC4pXCIsXCJpZ1wiKSxuZT1mdW5jdGlvbihlLHQsbil7dmFyIHI9XCIweFwiK3QtNjU1MzY7cmV0dXJuIHIhPXJ8fG4/dDpyPDA/U3RyaW5nLmZyb21DaGFyQ29kZShyKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKHI+PjEwfDU1Mjk2LDEwMjMmcnw1NjMyMCl9LHJlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGllPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCJcXHVmZmZkXCI6ZS5zbGljZSgwLC0xKStcIlxcXFxcIitlLmNoYXJDb2RlQXQoZS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2V9LG9lPWZ1bmN0aW9uKCl7VCgpfSxhZT1iZShmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuZGlzYWJsZWQmJlwiZmllbGRzZXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7SC5hcHBseSh0PU8uY2FsbChtLmNoaWxkTm9kZXMpLG0uY2hpbGROb2RlcyksdFttLmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlKXtIPXthcHBseTp0Lmxlbmd0aD9mdW5jdGlvbihlLHQpe0wuYXBwbHkoZSxPLmNhbGwodCkpfTpmdW5jdGlvbihlLHQpe3ZhciBuPWUubGVuZ3RoLHI9MDt3aGlsZShlW24rK109dFtyKytdKTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBzZSh0LGUsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmPWUmJmUub3duZXJEb2N1bWVudCxwPWU/ZS5ub2RlVHlwZTo5O2lmKG49bnx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIHR8fCF0fHwxIT09cCYmOSE9PXAmJjExIT09cClyZXR1cm4gbjtpZighciYmKChlP2Uub3duZXJEb2N1bWVudHx8ZTptKSE9PUMmJlQoZSksZT1lfHxDLEUpKXtpZigxMSE9PXAmJih1PVouZXhlYyh0KSkpaWYoaT11WzFdKXtpZig5PT09cCl7aWYoIShhPWUuZ2V0RWxlbWVudEJ5SWQoaSkpKXJldHVybiBuO2lmKGEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNlIGlmKGYmJihhPWYuZ2V0RWxlbWVudEJ5SWQoaSkpJiZ5KGUsYSkmJmEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNle2lmKHVbMl0pcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpKSxuO2lmKChpPXVbM10pJiZkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKSksbn1pZihkLnFzYSYmIUFbdCtcIiBcIl0mJighdnx8IXYudGVzdCh0KSkmJigxIT09cHx8XCJvYmplY3RcIiE9PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe2lmKGM9dCxmPWUsMT09PXAmJlUudGVzdCh0KSl7KHM9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1zLnJlcGxhY2UocmUsaWUpOmUuc2V0QXR0cmlidXRlKFwiaWRcIixzPWspLG89KGw9aCh0KSkubGVuZ3RoO3doaWxlKG8tLSlsW29dPVwiI1wiK3MrXCIgXCIreGUobFtvXSk7Yz1sLmpvaW4oXCIsXCIpLGY9ZWUudGVzdCh0KSYmeWUoZS5wYXJlbnROb2RlKXx8ZX10cnl7cmV0dXJuIEguYXBwbHkobixmLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZSl7QSh0LCEwKX1maW5hbGx5e3M9PT1rJiZlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKEIsXCIkMVwiKSxlLG4scil9ZnVuY3Rpb24gdWUoKXt2YXIgcj1bXTtyZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3JldHVybiByLnB1c2godCtcIiBcIik+Yi5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbci5zaGlmdCgpXSxlW3QrXCIgXCJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW2tdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gZmUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxyPW4ubGVuZ3RoO3doaWxlKHItLSliLmF0dHJIYW5kbGVbbltyXV09dH1mdW5jdGlvbiBwZShlLHQpe3ZhciBuPXQmJmUscj1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmZS50eXBlPT09dH19ZnVuY3Rpb24gaGUobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09dHx8XCJidXR0b25cIj09PXQpJiZlLnR5cGU9PT1ufX1mdW5jdGlvbiBnZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJmb3JtXCJpbiBlP2UucGFyZW50Tm9kZSYmITE9PT1lLmRpc2FibGVkP1wibGFiZWxcImluIGU/XCJsYWJlbFwiaW4gZS5wYXJlbnROb2RlP2UucGFyZW50Tm9kZS5kaXNhYmxlZD09PXQ6ZS5kaXNhYmxlZD09PXQ6ZS5pc0Rpc2FibGVkPT09dHx8ZS5pc0Rpc2FibGVkIT09IXQmJmFlKGUpPT09dDplLmRpc2FibGVkPT09dDpcImxhYmVsXCJpbiBlJiZlLmRpc2FibGVkPT09dH19ZnVuY3Rpb24gdmUoYSl7cmV0dXJuIGxlKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKFtdLGUubGVuZ3RoLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pfSl9ZnVuY3Rpb24geWUoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfWZvcihlIGluIGQ9c2Uuc3VwcG9ydD17fSxpPXNlLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUubmFtZXNwYWNlVVJJLG49KGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiFZLnRlc3QodHx8biYmbi5ub2RlTmFtZXx8XCJIVE1MXCIpfSxUPXNlLnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lP2Uub3duZXJEb2N1bWVudHx8ZTptO3JldHVybiByIT09QyYmOT09PXIubm9kZVR5cGUmJnIuZG9jdW1lbnRFbGVtZW50JiYoYT0oQz1yKS5kb2N1bWVudEVsZW1lbnQsRT0haShDKSxtIT09QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixvZSwhMSk6bi5hdHRhY2hFdmVudCYmbi5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsb2UpKSxkLmF0dHJpYnV0ZXM9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPVwiaVwiLCFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGQuZ2V0RWxlbWVudHNCeVRhZ05hbWU9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoQy5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPUsudGVzdChDLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGQuZ2V0QnlJZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5pZD1rLCFDLmdldEVsZW1lbnRzQnlOYW1lfHwhQy5nZXRFbGVtZW50c0J5TmFtZShrKS5sZW5ndGh9KSxkLmdldEJ5SWQ/KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlTm9kZSYmZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIHQmJnQudmFsdWU9PT1ufX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuLHIsaSxvPXQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYobyl7aWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb107aT10LmdldEVsZW1lbnRzQnlOYW1lKGUpLHI9MDt3aGlsZShvPWlbcisrXSlpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXX1yZXR1cm5bXX19KSxiLmZpbmQuVEFHPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOmQucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7d2hpbGUobj1vW2krK10pMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30sYi5maW5kLkNMQVNTPWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZFKXJldHVybiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZSl9LHM9W10sdj1bXSwoZC5xc2E9Sy50ZXN0KEMucXVlcnlTZWxlY3RvckFsbCkpJiYoY2UoZnVuY3Rpb24oZSl7YS5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIraytcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK2srXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnYucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHx2LnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrUitcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIitrK1wiLV1cIikubGVuZ3RofHx2LnB1c2goXCJ+PVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHYucHVzaChcIjpjaGVja2VkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIraytcIisqXCIpLmxlbmd0aHx8di5wdXNoKFwiLiMuK1srfl1cIil9KSxjZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnYucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksdi5wdXNoKFwiLC4qOlwiKX0pKSwoZC5tYXRjaGVzU2VsZWN0b3I9Sy50ZXN0KGM9YS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikpJiZjZShmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLCQpfSksdj12Lmxlbmd0aCYmbmV3IFJlZ0V4cCh2LmpvaW4oXCJ8XCIpKSxzPXMubGVuZ3RoJiZuZXcgUmVnRXhwKHMuam9pbihcInxcIikpLHQ9Sy50ZXN0KGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHk9dHx8Sy50ZXN0KGEuY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0sRD10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PT1DfHxlLm93bmVyRG9jdW1lbnQ9PT1tJiZ5KG0sZSk/LTE6dD09PUN8fHQub3duZXJEb2N1bWVudD09PW0mJnkobSx0KT8xOnU/UCh1LGUpLVAodSx0KTowOjQmbj8tMToxKX06ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gbD0hMCwwO3ZhciBuLHI9MCxpPWUucGFyZW50Tm9kZSxvPXQucGFyZW50Tm9kZSxhPVtlXSxzPVt0XTtpZighaXx8IW8pcmV0dXJuIGU9PT1DPy0xOnQ9PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9wZShhW3JdLHNbcl0pOmFbcl09PT1tPy0xOnNbcl09PT1tPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKChlLm93bmVyRG9jdW1lbnR8fGUpIT09QyYmVChlKSxkLm1hdGNoZXNTZWxlY3RvciYmRSYmIUFbdCtcIiBcIl0mJighc3x8IXMudGVzdCh0KSkmJighdnx8IXYudGVzdCh0KSkpdHJ5e3ZhciBuPWMuY2FsbChlLHQpO2lmKG58fGQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChlKXtBKHQsITApfXJldHVybiAwPHNlKHQsQyxudWxsLFtlXSkubGVuZ3RofSxzZS5jb250YWlucz1mdW5jdGlvbihlLHQpe3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT09QyYmVChlKSx5KGUsdCl9LHNlLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9PUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZqLmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIUUpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IUU/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShyZSxpZSl9LHNlLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0wLGk9MDtpZihsPSFkLmRldGVjdER1cGxpY2F0ZXMsdT0hZC5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChEKSxsKXt3aGlsZSh0PWVbaSsrXSl0PT09ZVtpXSYmKHI9bi5wdXNoKGkpKTt3aGlsZShyLS0pZS5zcGxpY2UobltyXSwxKX1yZXR1cm4gdT1udWxsLGV9LG89c2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9byh0KTtyZXR1cm4gbn0sKGI9c2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86bGUsbWF0Y2g6RyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZSh0ZSxuZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIEcuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9cFtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmcChlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKG4scixpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9c2UuYXR0cihlLG4pO3JldHVybiBudWxsPT10P1wiIT1cIj09PXI6IXJ8fCh0Kz1cIlwiLFwiPVwiPT09cj90PT09aTpcIiE9XCI9PT1yP3QhPT1pOlwiXj1cIj09PXI/aSYmMD09PXQuaW5kZXhPZihpKTpcIio9XCI9PT1yP2kmJi0xPHQuaW5kZXhPZihpKTpcIiQ9XCI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6XCJ+PVwiPT09cj8tMTwoXCIgXCIrdC5yZXBsYWNlKEYsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpOlwifD1cIj09PXImJih0PT09aXx8dC5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx2KXt2YXIgeT1cIm50aFwiIT09aC5zbGljZSgwLDMpLG09XCJsYXN0XCIhPT1oLnNsaWNlKC00KSx4PVwib2YtdHlwZVwiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT12P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9eSE9PW0/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsYz1lLnBhcmVudE5vZGUsZj14JiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscD0hbiYmIXgsZD0hMTtpZihjKXtpZih5KXt3aGlsZShsKXthPWU7d2hpbGUoYT1hW2xdKWlmKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSlyZXR1cm4hMTt1PWw9XCJvbmx5XCI9PT1oJiYhdSYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKHU9W20/Yy5maXJzdENoaWxkOmMubGFzdENoaWxkXSxtJiZwKXtkPShzPShyPShpPShvPShhPWMpW2tdfHwoYVtrXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1TJiZyWzFdKSYmclsyXSxhPXMmJmMuY2hpbGROb2Rlc1tzXTt3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bUyxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlba118fChhW2tdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PVMmJnJbMV0pLCExPT09ZCl3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKSYmKytkJiYocCYmKChpPShvPWFba118fChhW2tdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF09W1MsZF0pLGE9PT1lKSlicmVhaztyZXR1cm4oZC09dik9PT1nfHxkJWc9PTAmJjA8PWQvZ319fSxQU0VVRE86ZnVuY3Rpb24oZSxvKXt2YXIgdCxhPWIucHNldWRvc1tlXXx8Yi5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gYVtrXT9hKG8pOjE8YS5sZW5ndGg/KHQ9W2UsZSxcIlwiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoQixcIiQxXCIpKTtyZXR1cm4gc1trXT9sZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvPXMoZSxudWxsLHIsW10pLGE9ZS5sZW5ndGg7d2hpbGUoYS0tKShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByWzBdPWUscyhyLG51bGwsbixpKSxyWzBdPW51bGwsIWkucG9wKCl9fSksaGFzOmxlKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSxjb250YWluczpsZShmdW5jdGlvbih0KXtyZXR1cm4gdD10LnJlcGxhY2UodGUsbmUpLGZ1bmN0aW9uKGUpe3JldHVybi0xPChlLnRleHRDb250ZW50fHxvKGUpKS5pbmRleE9mKHQpfX0pLGxhbmc6bGUoZnVuY3Rpb24obil7cmV0dXJuIFYudGVzdChufHxcIlwiKXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PUU/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGUuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4odD10LnRvTG93ZXJDYXNlKCkpPT09bnx8MD09PXQuaW5kZXhPZihuK1wiLVwiKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFiLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gSi50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnZlKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp2ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6dmUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBiZShzLGUsdCl7dmFyIHU9ZS5kaXIsbD1lLm5leHQsYz1sfHx1LGY9dCYmXCJwYXJlbnROb2RlXCI9PT1jLHA9cisrO3JldHVybiBlLmZpcnN0P2Z1bmN0aW9uKGUsdCxuKXt3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpcmV0dXJuIHMoZSx0LG4pO3JldHVybiExfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9W1MscF07aWYobil7d2hpbGUoZT1lW3VdKWlmKCgxPT09ZS5ub2RlVHlwZXx8ZikmJnMoZSx0LG4pKXJldHVybiEwfWVsc2Ugd2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKWlmKGk9KG89ZVtrXXx8KGVba109e30pKVtlLnVuaXF1ZUlEXXx8KG9bZS51bmlxdWVJRF09e30pLGwmJmw9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpZT1lW3VdfHxlO2Vsc2V7aWYoKHI9aVtjXSkmJnJbMF09PT1TJiZyWzFdPT09cClyZXR1cm4gYVsyXT1yWzJdO2lmKChpW2NdPWEpWzJdPXMoZSx0LG4pKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB3ZShpKXtyZXR1cm4gMTxpLmxlbmd0aD9mdW5jdGlvbihlLHQsbil7dmFyIHI9aS5sZW5ndGg7d2hpbGUoci0tKWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHYseSxlKXtyZXR1cm4gdiYmIXZba10mJih2PUNlKHYpKSx5JiYheVtrXSYmKHk9Q2UoeSxlKSksbGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9W10sdT1bXSxsPXQubGVuZ3RoLGM9ZXx8ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylzZShlLHRbcl0sbik7cmV0dXJuIG59KGh8fFwiKlwiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/eXx8KGU/ZDpsfHx2KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx2KXtpPVRlKHAsdSksdihpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYoeXx8ZCl7aWYoeSl7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7eShudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9eT9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx5P3kobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gRWUoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVtcIiBcIl0scz1vPzE6MCx1PWJlKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09aX0sYSwhMCksbD1iZShmdW5jdGlvbihlKXtyZXR1cm4tMTxQKGksZSl9LGEsITApLGM9W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj0hbyYmKG58fHQhPT13KXx8KChpPXQpLm5vZGVUeXBlP3UoZSx0LG4pOmwoZSx0LG4pKTtyZXR1cm4gaT1udWxsLHJ9XTtzPHI7cysrKWlmKHQ9Yi5yZWxhdGl2ZVtlW3NdLnR5cGVdKWM9W2JlKHdlKGMpLHQpXTtlbHNle2lmKCh0PWIuZmlsdGVyW2Vbc10udHlwZV0uYXBwbHkobnVsbCxlW3NdLm1hdGNoZXMpKVtrXSl7Zm9yKG49KytzO248cjtuKyspaWYoYi5yZWxhdGl2ZVtlW25dLnR5cGVdKWJyZWFrO3JldHVybiBDZSgxPHMmJndlKGMpLDE8cyYmeGUoZS5zbGljZSgwLHMtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbcy0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShCLFwiJDFcIiksdCxzPG4mJkVlKGUuc2xpY2UocyxuKSksbjxyJiZFZShlPWUuc2xpY2UobikpLG48ciYmeGUoZSkpfWMucHVzaCh0KX1yZXR1cm4gd2UoYyl9cmV0dXJuIG1lLnByb3RvdHlwZT1iLmZpbHRlcnM9Yi5wc2V1ZG9zLGIuc2V0RmlsdGVycz1uZXcgbWUsaD1zZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw9eFtlK1wiIFwiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKEIsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSksYi5maWx0ZXIpIShyPUdbb10uZXhlYyhhKSl8fHVbb10mJiEocj11W29dKHIpKXx8KG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOm8sbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9zZS5lcnJvcihlKTp4KGUscykuc2xpY2UoMCl9LGY9c2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHYseSxtLHgscixpPVtdLG89W10sYT1OW2UrXCIgXCJdO2lmKCFhKXt0fHwodD1oKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkoYT1FZSh0W25dKSlba10/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1OKGUsKHY9byxtPTA8KHk9aSkubGVuZ3RoLHg9MDx2Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9Uys9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PT1DfHx0fHxpKTtsIT09ZyYmbnVsbCE9KG89ZFtsXSk7bCsrKXtpZih4JiZvKXthPTAsdHx8by5vd25lckRvY3VtZW50PT09Q3x8KFQobyksbj0hRSk7d2hpbGUocz12W2ErK10paWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoUz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXthPTA7d2hpbGUocz15W2ErK10pcyhjLGYsdCxuKTtpZihlKXtpZigwPHUpd2hpbGUobC0tKWNbbF18fGZbbF18fChmW2xdPXEuY2FsbChyKSk7Zj1UZShmKX1ILmFwcGx5KHIsZiksaSYmIWUmJjA8Zi5sZW5ndGgmJjE8dSt5Lmxlbmd0aCYmc2UudW5pcXVlU29ydChyKX1yZXR1cm4gaSYmKFM9aCx3PXApLGN9LG0/bGUocik6cikpKS5zZWxlY3Rvcj1lfXJldHVybiBhfSxnPXNlLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJlwiSURcIj09PShhPW9bMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZFJiZiLnJlbGF0aXZlW29bMV0udHlwZV0pe2lmKCEodD0oYi5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtsJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZShvLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDt3aGlsZShpLS0pe2lmKGE9b1tpXSxiLnJlbGF0aXZlW3M9YS50eXBlXSlicmVhaztpZigodT1iLmZpbmRbc10pJiYocj11KGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSxlZS50ZXN0KG9bMF0udHlwZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UoaSwxKSwhKGU9ci5sZW5ndGgmJnhlKG8pKSlyZXR1cm4gSC5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIUUsbiwhdHx8ZWUudGVzdChlKSYmeWUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPWsuc3BsaXQoXCJcIikuc29ydChEKS5qb2luKFwiXCIpPT09ayxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGZlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8ZmUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGZlKFIsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksc2V9KEMpO2suZmluZD1oLGsuZXhwcj1oLnNlbGVjdG9ycyxrLmV4cHJbXCI6XCJdPWsuZXhwci5wc2V1ZG9zLGsudW5pcXVlU29ydD1rLnVuaXF1ZT1oLnVuaXF1ZVNvcnQsay50ZXh0PWguZ2V0VGV4dCxrLmlzWE1MRG9jPWguaXNYTUwsay5jb250YWlucz1oLmNvbnRhaW5zLGsuZXNjYXBlU2VsZWN0b3I9aC5lc2NhcGU7dmFyIFQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJmsoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxTPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxOPWsuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIEQ9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gaihlLG4scil7cmV0dXJuIG0obik/ay5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9rLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6XCJzdHJpbmdcIiE9dHlwZW9mIG4/ay5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSk6ay5maWx0ZXIobixlLHIpfWsuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9rLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOmsuZmluZC5tYXRjaGVzKGUsay5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxrLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhrKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZihrLmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKWsuZmluZChlLGlbdF0sbik7cmV0dXJuIDE8cj9rLnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFqKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJk4udGVzdChlKT9rKGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIHEsTD0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoay5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8cSxcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiYzPD1lLmxlbmd0aD9bbnVsbCxlLG51bGxdOkwuZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2Ygaz90WzBdOnQsay5tZXJnZSh0aGlzLGsucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6RSwhMCkpLEQudGVzdChyWzFdKSYmay5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpbSh0aGlzW3JdKT90aGlzW3JdKHRbcl0pOnRoaXMuYXR0cihyLHRbcl0pO3JldHVybiB0aGlzfXJldHVybihpPUUuZ2V0RWxlbWVudEJ5SWQoclsyXSkpJiYodGhpc1swXT1pLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoayk6ay5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT1rLmZuLHE9ayhFKTt2YXIgSD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxPPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2Z1bmN0aW9uIFAoZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfWsuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9ayhlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihrLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmayhlKTtpZighTi50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhPy0xPGEuaW5kZXgobik6MT09PW4ubm9kZVR5cGUmJmsuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soMTxvLmxlbmd0aD9rLnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2kuY2FsbChrKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soay51bmlxdWVTb3J0KGsubWVyZ2UodGhpcy5nZXQoKSxrKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLGsuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gVChlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gVChlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBQKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gUChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gVChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBUKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBUKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBTKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmNvbnRlbnREb2N1bWVudD9lLmNvbnRlbnREb2N1bWVudDooQShlLFwidGVtcGxhdGVcIikmJihlPWUuY29udGVudHx8ZSksay5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKHIsaSl7ay5mbltyXT1mdW5jdGlvbihlLHQpe3ZhciBuPWsubWFwKHRoaXMsaSxlKTtyZXR1cm5cIlVudGlsXCIhPT1yLnNsaWNlKC01KSYmKHQ9ZSksdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWsuZmlsdGVyKHQsbikpLDE8dGhpcy5sZW5ndGgmJihPW3JdfHxrLnVuaXF1ZVNvcnQobiksSC50ZXN0KHIpJiZuLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIFI9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIE0oZSl7cmV0dXJuIGV9ZnVuY3Rpb24gSShlKXt0aHJvdyBlfWZ1bmN0aW9uIFcoZSx0LG4scil7dmFyIGk7dHJ5e2UmJm0oaT1lLnByb21pc2UpP2kuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmbShpPWUudGhlbik/aS5jYWxsKGUsdCxuKTp0LmFwcGx5KHZvaWQgMCxbZV0uc2xpY2UocikpfWNhdGNoKGUpe24uYXBwbHkodm9pZCAwLFtlXSl9fWsuQ2FsbGJhY2tzPWZ1bmN0aW9uKHIpe3ZhciBlLG47cj1cInN0cmluZ1wiPT10eXBlb2Ygcj8oZT1yLG49e30say5lYWNoKGUubWF0Y2goUil8fFtdLGZ1bmN0aW9uKGUsdCl7blt0XT0hMH0pLG4pOmsuZXh0ZW5kKHt9LHIpO3ZhciBpLHQsbyxhLHM9W10sdT1bXSxsPS0xLGM9ZnVuY3Rpb24oKXtmb3IoYT1hfHxyLm9uY2Usbz1pPSEwO3UubGVuZ3RoO2w9LTEpe3Q9dS5zaGlmdCgpO3doaWxlKCsrbDxzLmxlbmd0aCkhMT09PXNbbF0uYXBwbHkodFswXSx0WzFdKSYmci5zdG9wT25GYWxzZSYmKGw9cy5sZW5ndGgsdD0hMSl9ci5tZW1vcnl8fCh0PSExKSxpPSExLGEmJihzPXQ/W106XCJcIil9LGY9e2FkZDpmdW5jdGlvbigpe3JldHVybiBzJiYodCYmIWkmJihsPXMubGVuZ3RoLTEsdS5wdXNoKHQpKSxmdW5jdGlvbiBuKGUpe2suZWFjaChlLGZ1bmN0aW9uKGUsdCl7bSh0KT9yLnVuaXF1ZSYmZi5oYXModCl8fHMucHVzaCh0KTp0JiZ0Lmxlbmd0aCYmXCJzdHJpbmdcIiE9PXcodCkmJm4odCl9KX0oYXJndW1lbnRzKSx0JiYhaSYmYygpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gay5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciBuO3doaWxlKC0xPChuPWsuaW5BcnJheSh0LHMsbikpKXMuc3BsaWNlKG4sMSksbjw9bCYmbC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlPy0xPGsuaW5BcnJheShlLHMpOjA8cy5sZW5ndGh9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIHMmJihzPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSxzPXQ9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFzfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGE9dT1bXSx0fHxpfHwocz10PVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhYX0sZmlyZVdpdGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYXx8KHQ9W2UsKHQ9dHx8W10pLnNsaWNlP3Quc2xpY2UoKTp0XSx1LnB1c2godCksaXx8YygpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFvfX07cmV0dXJuIGZ9LGsuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihlKXt2YXIgbz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLGsuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLGsuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixrLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLGsuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLGsuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksay5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGk9XCJwZW5kaW5nXCIsYT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gaX0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIHMuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGEudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGk9YXJndW1lbnRzO3JldHVybiBrLkRlZmVycmVkKGZ1bmN0aW9uKHIpe2suZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49bShpW3RbNF1dKSYmaVt0WzRdXTtzW3RbMV1dKGZ1bmN0aW9uKCl7dmFyIGU9biYmbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmbShlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKHIubm90aWZ5KS5kb25lKHIucmVzb2x2ZSkuZmFpbChyLnJlamVjdCk6clt0WzBdK1wiV2l0aFwiXSh0aGlzLG4/W2VdOmFyZ3VtZW50cyl9KX0pLGk9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbih0LG4scil7dmFyIHU9MDtmdW5jdGlvbiBsKGksbyxhLHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXMscj1hcmd1bWVudHMsZT1mdW5jdGlvbigpe3ZhciBlLHQ7aWYoIShpPHUpKXtpZigoZT1hLmFwcGx5KG4scikpPT09by5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTt0PWUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJmUudGhlbixtKHQpP3M/dC5jYWxsKGUsbCh1LG8sTSxzKSxsKHUsbyxJLHMpKToodSsrLHQuY2FsbChlLGwodSxvLE0scyksbCh1LG8sSSxzKSxsKHUsbyxNLG8ubm90aWZ5V2l0aCkpKTooYSE9PU0mJihuPXZvaWQgMCxyPVtlXSksKHN8fG8ucmVzb2x2ZVdpdGgpKG4scikpfX0sdD1zP2U6ZnVuY3Rpb24oKXt0cnl7ZSgpfWNhdGNoKGUpe2suRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmay5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsdC5zdGFja1RyYWNlKSx1PD1pKzEmJihhIT09SSYmKG49dm9pZCAwLHI9W2VdKSxvLnJlamVjdFdpdGgobixyKSl9fTtpP3QoKTooay5EZWZlcnJlZC5nZXRTdGFja0hvb2smJih0LnN0YWNrVHJhY2U9ay5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksQy5zZXRUaW1lb3V0KHQpKX19cmV0dXJuIGsuRGVmZXJyZWQoZnVuY3Rpb24oZSl7b1swXVszXS5hZGQobCgwLGUsbShyKT9yOk0sZS5ub3RpZnlXaXRoKSksb1sxXVszXS5hZGQobCgwLGUsbSh0KT90Ok0pKSxvWzJdWzNdLmFkZChsKDAsZSxtKG4pP246SSkpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP2suZXh0ZW5kKGUsYSk6YX19LHM9e307cmV0dXJuIGsuZWFjaChvLGZ1bmN0aW9uKGUsdCl7dmFyIG49dFsyXSxyPXRbNV07YVt0WzFdXT1uLmFkZCxyJiZuLmFkZChmdW5jdGlvbigpe2k9cn0sb1szLWVdWzJdLmRpc2FibGUsb1szLWVdWzNdLmRpc2FibGUsb1swXVsyXS5sb2NrLG9bMF1bM10ubG9jayksbi5hZGQodFszXS5maXJlKSxzW3RbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIHNbdFswXStcIldpdGhcIl0odGhpcz09PXM/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxzW3RbMF0rXCJXaXRoXCJdPW4uZmlyZVdpdGh9KSxhLnByb21pc2UocyksZSYmZS5jYWxsKHMscyksc30sd2hlbjpmdW5jdGlvbihlKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHQ9bixyPUFycmF5KHQpLGk9cy5jYWxsKGFyZ3VtZW50cyksbz1rLkRlZmVycmVkKCksYT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7clt0XT10aGlzLGlbdF09MTxhcmd1bWVudHMubGVuZ3RoP3MuY2FsbChhcmd1bWVudHMpOmUsLS1ufHxvLnJlc29sdmVXaXRoKHIsaSl9fTtpZihuPD0xJiYoVyhlLG8uZG9uZShhKHQpKS5yZXNvbHZlLG8ucmVqZWN0LCFuKSxcInBlbmRpbmdcIj09PW8uc3RhdGUoKXx8bShpW3RdJiZpW3RdLnRoZW4pKSlyZXR1cm4gby50aGVuKCk7d2hpbGUodC0tKVcoaVt0XSxhKHQpLG8ucmVqZWN0KTtyZXR1cm4gby5wcm9taXNlKCl9fSk7dmFyICQ9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87ay5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGUsdCl7Qy5jb25zb2xlJiZDLmNvbnNvbGUud2FybiYmZSYmJC50ZXN0KGUubmFtZSkmJkMuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrZS5tZXNzYWdlLGUuc3RhY2ssdCl9LGsucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oZSl7Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZX0pfTt2YXIgRj1rLkRlZmVycmVkKCk7ZnVuY3Rpb24gQigpe0UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQiksay5yZWFkeSgpfWsuZm4ucmVhZHk9ZnVuY3Rpb24oZSl7cmV0dXJuIEYudGhlbihlKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGUpe2sucmVhZHlFeGNlcHRpb24oZSl9KSx0aGlzfSxrLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihlKXsoITA9PT1lPy0tay5yZWFkeVdhaXQ6ay5pc1JlYWR5KXx8KGsuaXNSZWFkeT0hMCkhPT1lJiYwPC0tay5yZWFkeVdhaXR8fEYucmVzb2x2ZVdpdGgoRSxba10pfX0pLGsucmVhZHkudGhlbj1GLnRoZW4sXCJjb21wbGV0ZVwiPT09RS5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PUUucmVhZHlTdGF0ZSYmIUUuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP0Muc2V0VGltZW91dChrLnJlYWR5KTooRS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSk7dmFyIF89ZnVuY3Rpb24oZSx0LG4scixpLG8sYSl7dmFyIHM9MCx1PWUubGVuZ3RoLGw9bnVsbD09bjtpZihcIm9iamVjdFwiPT09dyhuKSlmb3IocyBpbiBpPSEwLG4pXyhlLHQscyxuW3NdLCEwLG8sYSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYoaT0hMCxtKHIpfHwoYT0hMCksbCYmKGE/KHQuY2FsbChlLHIpLHQ9bnVsbCk6KGw9dCx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbC5jYWxsKGsoZSksbil9KSksdCkpZm9yKDtzPHU7cysrKXQoZVtzXSxuLGE/cjpyLmNhbGwoZVtzXSxzLHQoZVtzXSxuKSkpO3JldHVybiBpP2U6bD90LmNhbGwoZSk6dT90KGVbMF0sbik6b30sej0vXi1tcy0vLFU9Ly0oW2Etel0pL2c7ZnVuY3Rpb24gWChlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9ZnVuY3Rpb24gVihlKXtyZXR1cm4gZS5yZXBsYWNlKHosXCJtcy1cIikucmVwbGFjZShVLFgpfXZhciBHPWZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZXx8OT09PWUubm9kZVR5cGV8fCErZS5ub2RlVHlwZX07ZnVuY3Rpb24gWSgpe3RoaXMuZXhwYW5kbz1rLmV4cGFuZG8rWS51aWQrK31ZLnVpZD0xLFkucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LEcoZSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT10Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHRoaXMuZXhwYW5kbyx7dmFsdWU6dCxjb25maWd1cmFibGU6ITB9KSkpLHR9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT10aGlzLmNhY2hlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KWlbVih0KV09bjtlbHNlIGZvcihyIGluIHQpaVtWKHIpXT10W3JdO3JldHVybiBpfSxnZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLmNhY2hlKGUpOmVbdGhpcy5leHBhbmRvXSYmZVt0aGlzLmV4cGFuZG9dW1YodCldfSxhY2Nlc3M6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmdm9pZCAwPT09bj90aGlzLmdldChlLHQpOih0aGlzLnNldChlLHQsbiksdm9pZCAwIT09bj9uOnQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWVbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1yKXtpZih2b2lkIDAhPT10KXtuPSh0PUFycmF5LmlzQXJyYXkodCk/dC5tYXAoVik6KHQ9Vih0KSlpbiByP1t0XTp0Lm1hdGNoKFIpfHxbXSkubGVuZ3RoO3doaWxlKG4tLSlkZWxldGUgclt0W25dXX0odm9pZCAwPT09dHx8ay5pc0VtcHR5T2JqZWN0KHIpKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgZVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT10JiYhay5pc0VtcHR5T2JqZWN0KHQpfX07dmFyIFE9bmV3IFksSj1uZXcgWSxLPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxaPS9bQS1aXS9nO2Z1bmN0aW9uIGVlKGUsdCxuKXt2YXIgcixpO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShaLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj1cInRydWVcIj09PShpPW4pfHxcImZhbHNlXCIhPT1pJiYoXCJudWxsXCI9PT1pP251bGw6aT09PStpK1wiXCI/K2k6Sy50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fUouc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufWsuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBKLmhhc0RhdGEoZSl8fFEuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIEouYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe0oucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9fSksay5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1KLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVEuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXt0PWEubGVuZ3RoO3doaWxlKHQtLSlhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVYoci5zbGljZSg1KSksZWUobyxyLGlbcl0pKTtRLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe0ouc2V0KHRoaXMsbil9KTpfKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9Si5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1lZShvLG4pKT90OnZvaWQgMDt0aGlzLmVhY2goZnVuY3Rpb24oKXtKLnNldCh0aGlzLG4sZSl9KX0sbnVsbCxlLDE8YXJndW1lbnRzLmxlbmd0aCxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Si5yZW1vdmUodGhpcyxlKX0pfX0pLGsuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoZSlyZXR1cm4gdD0odHx8XCJmeFwiKStcInF1ZXVlXCIscj1RLmdldChlLHQpLG4mJighcnx8QXJyYXkuaXNBcnJheShuKT9yPVEuYWNjZXNzKGUsdCxrLm1ha2VBcnJheShuKSk6ci5wdXNoKG4pKSxyfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPWsucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89ay5fcXVldWVIb29rcyhlLHQpO1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSxmdW5jdGlvbigpe2suZGVxdWV1ZShlLHQpfSxvKSksIXImJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFEuZ2V0KGUsbil8fFEuYWNjZXNzKGUsbix7ZW1wdHk6ay5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtRLnJlbW92ZShlLFt0K1wicXVldWVcIixuXSl9KX0pfX0pLGsuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cImZ4XCIsZS0tKSxhcmd1bWVudHMubGVuZ3RoPGU/ay5xdWV1ZSh0aGlzWzBdLHQpOnZvaWQgMD09PW4/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1rLnF1ZXVlKHRoaXMsdCxuKTtrLl9xdWV1ZUhvb2tzKHRoaXMsdCksXCJmeFwiPT09dCYmXCJpbnByb2dyZXNzXCIhPT1lWzBdJiZrLmRlcXVldWUodGhpcyx0KX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtrLmRlcXVldWUodGhpcyxlKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTEsaT1rLkRlZmVycmVkKCksbz10aGlzLGE9dGhpcy5sZW5ndGgscz1mdW5jdGlvbigpey0tcnx8aS5yZXNvbHZlV2l0aChvLFtvXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjt3aGlsZShhLS0pKG49US5nZXQob1thXSxlK1wicXVldWVIb29rc1wiKSkmJm4uZW1wdHkmJihyKyssbi5lbXB0eS5hZGQocykpO3JldHVybiBzKCksaS5wcm9taXNlKHQpfX0pO3ZhciB0ZT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsbmU9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrdGUrXCIpKFthLXolXSopJFwiLFwiaVwiKSxyZT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0saWU9RS5kb2N1bWVudEVsZW1lbnQsb2U9ZnVuY3Rpb24oZSl7cmV0dXJuIGsuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfSxhZT17Y29tcG9zZWQ6ITB9O2llLmdldFJvb3ROb2RlJiYob2U9ZnVuY3Rpb24oZSl7cmV0dXJuIGsuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpfHxlLmdldFJvb3ROb2RlKGFlKT09PWUub3duZXJEb2N1bWVudH0pO3ZhciBzZT1mdW5jdGlvbihlLHQpe3JldHVyblwibm9uZVwiPT09KGU9dHx8ZSkuc3R5bGUuZGlzcGxheXx8XCJcIj09PWUuc3R5bGUuZGlzcGxheSYmb2UoZSkmJlwibm9uZVwiPT09ay5jc3MoZSxcImRpc3BsYXlcIil9LHVlPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYT17fTtmb3IobyBpbiB0KWFbb109ZS5zdHlsZVtvXSxlLnN0eWxlW29dPXRbb107Zm9yKG8gaW4gaT1uLmFwcGx5KGUscnx8W10pLHQpZS5zdHlsZVtvXT1hW29dO3JldHVybiBpfTtmdW5jdGlvbiBsZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIGsuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoay5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKGsuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJm5lLmV4ZWMoay5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKWsuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9MixrLnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIGNlPXt9O2Z1bmN0aW9uIGZlKGUsdCl7Zm9yKHZhciBuLHIsaSxvLGEscyx1LGw9W10sYz0wLGY9ZS5sZW5ndGg7YzxmO2MrKykocj1lW2NdKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGxbY109US5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFtjXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmc2UocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT1jZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9ay5jc3MobyxcImRpc3BsYXlcIiksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFwibm9uZVwiPT09dSYmKHU9XCJibG9ja1wiKSxjZVtzXT11KSkpKTpcIm5vbmVcIiE9PW4mJihsW2NdPVwibm9uZVwiLFEuc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1rLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBmZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBmZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe3NlKHRoaXMpP2sodGhpcykuc2hvdygpOmsodGhpcykuaGlkZSgpfSl9fSk7dmFyIHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGdlPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07ZnVuY3Rpb24gdmUoZSx0KXt2YXIgbjtyZXR1cm4gbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHR8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsP2UucXVlcnlTZWxlY3RvckFsbCh0fHxcIipcIik6W10sdm9pZCAwPT09dHx8dCYmQShlLHQpP2subWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24geWUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspUS5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8US5nZXQodFtuXSxcImdsb2JhbEV2YWxcIikpfWdlLm9wdGdyb3VwPWdlLm9wdGlvbixnZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkO3ZhciBtZSx4ZSxiZT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gd2UoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZihcIm9iamVjdFwiPT09dyhvKSlrLm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihiZS50ZXN0KG8pKXthPWF8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxzPShkZS5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PWdlW3NdfHxnZS5fZGVmYXVsdCxhLmlubmVySFRNTD11WzFdK2suaHRtbFByZWZpbHRlcihvKSt1WzJdLGM9dVswXTt3aGlsZShjLS0pYT1hLmxhc3RDaGlsZDtrLm1lcmdlKHAsYS5jaGlsZE5vZGVzKSwoYT1mLmZpcnN0Q2hpbGQpLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBwLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zi50ZXh0Q29udGVudD1cIlwiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihyJiYtMTxrLmluQXJyYXkobyxyKSlpJiZpLnB1c2gobyk7ZWxzZSBpZihsPW9lKG8pLGE9dmUoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxsJiZ5ZShhKSxuKXtjPTA7d2hpbGUobz1hW2MrK10paGUudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIGZ9bWU9RS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSwoeGU9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLHhlLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIikseGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxtZS5hcHBlbmRDaGlsZCh4ZSkseS5jaGVja0Nsb25lPW1lLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxtZS5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIseS5ub0Nsb25lQ2hlY2tlZD0hIW1lLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZTt2YXIgVGU9L15rZXkvLENlPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxFZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIGtlKCl7cmV0dXJuITB9ZnVuY3Rpb24gU2UoKXtyZXR1cm4hMX1mdW5jdGlvbiBOZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEUuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oXCJmb2N1c1wiPT09dCl9ZnVuY3Rpb24gQWUoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihzIGluXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpQWUoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1TZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gaygpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPWsuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7ay5ldmVudC5hZGQodGhpcyx0LGkscixuKX0pfWZ1bmN0aW9uIERlKGUsaSxvKXtvPyhRLnNldChlLGksITEpLGsuZXZlbnQuYWRkKGUsaSx7bmFtZXNwYWNlOiExLGhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPVEuZ2V0KHRoaXMsaSk7aWYoMSZlLmlzVHJpZ2dlciYmdGhpc1tpXSl7aWYoci5sZW5ndGgpKGsuZXZlbnQuc3BlY2lhbFtpXXx8e30pLmRlbGVnYXRlVHlwZSYmZS5zdG9wUHJvcGFnYXRpb24oKTtlbHNlIGlmKHI9cy5jYWxsKGFyZ3VtZW50cyksUS5zZXQodGhpcyxpLHIpLHQ9byh0aGlzLGkpLHRoaXNbaV0oKSxyIT09KG49US5nZXQodGhpcyxpKSl8fHQ/US5zZXQodGhpcyxpLCExKTpuPXt9LHIhPT1uKXJldHVybiBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKSxuLnZhbHVlfWVsc2Ugci5sZW5ndGgmJihRLnNldCh0aGlzLGkse3ZhbHVlOmsuZXZlbnQudHJpZ2dlcihrLmV4dGVuZChyWzBdLGsuRXZlbnQucHJvdG90eXBlKSxyLnNsaWNlKDEpLHRoaXMpfSksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSl9fSkpOnZvaWQgMD09PVEuZ2V0KGUsaSkmJmsuZXZlbnQuYWRkKGUsaSxrZSl9ay5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1RLmdldCh0KTtpZih2KXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZrLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGllLGkpLG4uZ3VpZHx8KG4uZ3VpZD1rLmd1aWQrKyksKHU9di5ldmVudHMpfHwodT12LmV2ZW50cz17fSksKGE9di5oYW5kbGUpfHwoYT12LmhhbmRsZT1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgayYmay5ldmVudC50cmlnZ2VyZWQhPT1lLnR5cGU/ay5ldmVudC5kaXNwYXRjaC5hcHBseSh0LGFyZ3VtZW50cyk6dm9pZCAwfSksbD0oZT0oZXx8XCJcIikubWF0Y2goUil8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9RWUuZXhlYyhlW2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9ay5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9ay5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPWsuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJmsuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwodCxyLGgsYSl8fHQuYWRkRXZlbnRMaXN0ZW5lciYmdC5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbCh0LGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSxrLmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9US5oYXNEYXRhKGUpJiZRLmdldChlKTtpZih2JiYodT12LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKFIpfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYoZD1nPShzPUVlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9ay5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx2LmhhbmRsZSl8fGsucmVtb3ZlRXZlbnQoZSxkLHYuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KWsuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7ay5pc0VtcHR5T2JqZWN0KHUpJiZRLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzPWsuZXZlbnQuZml4KGUpLHU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLGw9KFEuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVtzLnR5cGVdfHxbXSxjPWsuZXZlbnQuc3BlY2lhbFtzLnR5cGVdfHx7fTtmb3IodVswXT1zLHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXVbdF09YXJndW1lbnRzW3RdO2lmKHMuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyxzKSl7YT1rLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxzLGwpLHQ9MDt3aGlsZSgoaT1hW3QrK10pJiYhcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtzLmN1cnJlbnRUYXJnZXQ9aS5lbGVtLG49MDt3aGlsZSgobz1pLmhhbmRsZXJzW24rK10pJiYhcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXMucm5hbWVzcGFjZSYmITEhPT1vLm5hbWVzcGFjZSYmIXMucm5hbWVzcGFjZS50ZXN0KG8ubmFtZXNwYWNlKXx8KHMuaGFuZGxlT2JqPW8scy5kYXRhPW8uZGF0YSx2b2lkIDAhPT0ocj0oKGsuZXZlbnQuc3BlY2lhbFtvLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8by5oYW5kbGVyKS5hcHBseShpLmVsZW0sdSkpJiYhMT09PShzLnJlc3VsdD1yKSYmKHMucHJldmVudERlZmF1bHQoKSxzLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMscykscy5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscz1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiYxPD1lLmJ1dHRvbikpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoYVtpXT1yLm5lZWRzQ29udGV4dD8tMTxrKGksdGhpcykuaW5kZXgobCk6ay5maW5kKGksdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxhW2ldJiZvLnB1c2gocik7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxzfSxhZGRQcm9wOmZ1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGsuRXZlbnQucHJvdG90eXBlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDptKGUpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBlKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbdF19LHNldDpmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTplfSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVtrLmV4cGFuZG9dP2U6bmV3IGsuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7c2V0dXA6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmRGUodCxcImNsaWNrXCIsa2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkRlKHQsXCJjbGlja1wiKSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlEuZ2V0KHQsXCJjbGlja1wiKXx8QSh0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUucmVzdWx0JiZlLm9yaWdpbmFsRXZlbnQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19fSxrLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4pfSxrLkV2ZW50PWZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzIGluc3RhbmNlb2Ygay5FdmVudCkpcmV0dXJuIG5ldyBrLkV2ZW50KGUsdCk7ZSYmZS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9ZSx0aGlzLnR5cGU9ZS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWUuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09ZS5kZWZhdWx0UHJldmVudGVkJiYhMT09PWUucmV0dXJuVmFsdWU/a2U6U2UsdGhpcy50YXJnZXQ9ZS50YXJnZXQmJjM9PT1lLnRhcmdldC5ub2RlVHlwZT9lLnRhcmdldC5wYXJlbnROb2RlOmUudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1lLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWUucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWUsdCYmay5leHRlbmQodGhpcyx0KSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8RGF0ZS5ub3coKSx0aGlzW2suZXhwYW5kb109ITB9LGsuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjprLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpTZSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpTZSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpTZSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1rZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1rZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9a2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LGsuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjb2RlOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGUpe3ZhciB0PWUuYnV0dG9uO3JldHVybiBudWxsPT1lLndoaWNoJiZUZS50ZXN0KGUudHlwZSk/bnVsbCE9ZS5jaGFyQ29kZT9lLmNoYXJDb2RlOmUua2V5Q29kZTohZS53aGljaCYmdm9pZCAwIT09dCYmQ2UudGVzdChlLnR5cGUpPzEmdD8xOjImdD8zOjQmdD8yOjA6ZS53aGljaH19LGsuZXZlbnQuYWRkUHJvcCksay5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXtrLmV2ZW50LnNwZWNpYWxbZV09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIERlKHRoaXMsZSxOZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gRGUodGhpcyxlKSwhMH0sZGVsZWdhdGVUeXBlOnR9fSksay5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsaSl7ay5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6aSxiaW5kVHlwZTppLGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdCxuPWUucmVsYXRlZFRhcmdldCxyPWUuaGFuZGxlT2JqO3JldHVybiBuJiYobj09PXRoaXN8fGsuY29udGFpbnModGhpcyxuKSl8fChlLnR5cGU9ci5vcmlnVHlwZSx0PXIuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPWkpLHR9fX0pLGsuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gQWUodGhpcyxlLHQsbixyKX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBBZSh0aGlzLGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gcj1lLmhhbmRsZU9iaixrKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihyLm5hbWVzcGFjZT9yLm9yaWdUeXBlK1wiLlwiK3IubmFtZXNwYWNlOnIub3JpZ1R5cGUsci5zZWxlY3RvcixyLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1TZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ay5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIgamU9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2kscWU9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksTGU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxIZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gT2UoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJmsoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBQZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBSZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gTWUoZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9US5zZXQodCxvKSxsPW8uZXZlbnRzKSlmb3IoaSBpbiBkZWxldGUgYS5oYW5kbGUsYS5ldmVudHM9e30sbClmb3Iobj0wLHI9bFtpXS5sZW5ndGg7bjxyO24rKylrLmV2ZW50LmFkZCh0LGksbFtpXVtuXSk7Si5oYXNEYXRhKGUpJiYocz1KLmFjY2VzcyhlKSx1PWsuZXh0ZW5kKHt9LHMpLEouc2V0KHQsdSkpfX1mdW5jdGlvbiBJZShuLHIsaSxvKXtyPWcuYXBwbHkoW10scik7dmFyIGUsdCxhLHMsdSxsLGM9MCxmPW4ubGVuZ3RoLHA9Zi0xLGQ9clswXSxoPW0oZCk7aWYoaHx8MTxmJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmIXkuY2hlY2tDbG9uZSYmTGUudGVzdChkKSlyZXR1cm4gbi5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PW4uZXEoZSk7aCYmKHJbMF09ZC5jYWxsKHRoaXMsZSx0Lmh0bWwoKSkpLEllKHQscixpLG8pfSk7aWYoZiYmKHQ9KGU9d2UocixuWzBdLm93bmVyRG9jdW1lbnQsITEsbixvKSkuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9dCksdHx8bykpe2ZvcihzPShhPWsubWFwKHZlKGUsXCJzY3JpcHRcIiksUGUpKS5sZW5ndGg7YzxmO2MrKyl1PWUsYyE9PXAmJih1PWsuY2xvbmUodSwhMCwhMCkscyYmay5tZXJnZShhLHZlKHUsXCJzY3JpcHRcIikpKSxpLmNhbGwobltjXSx1LGMpO2lmKHMpZm9yKGw9YVthLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LGsubWFwKGEsUmUpLGM9MDtjPHM7YysrKXU9YVtjXSxoZS50ZXN0KHUudHlwZXx8XCJcIikmJiFRLmFjY2Vzcyh1LFwiZ2xvYmFsRXZhbFwiKSYmay5jb250YWlucyhsLHUpJiYodS5zcmMmJlwibW9kdWxlXCIhPT0odS50eXBlfHxcIlwiKS50b0xvd2VyQ2FzZSgpP2suX2V2YWxVcmwmJiF1Lm5vTW9kdWxlJiZrLl9ldmFsVXJsKHUuc3JjLHtub25jZTp1Lm5vbmNlfHx1LmdldEF0dHJpYnV0ZShcIm5vbmNlXCIpfSk6Yih1LnRleHRDb250ZW50LnJlcGxhY2UoSGUsXCJcIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gV2UoZSx0LG4pe2Zvcih2YXIgcixpPXQ/ay5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fGsuY2xlYW5EYXRhKHZlKHIpKSxyLnBhcmVudE5vZGUmJihuJiZvZShyKSYmeWUodmUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX1rLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKGplLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYz1lLmNsb25lTm9kZSghMCksZj1vZShlKTtpZighKHkubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fGsuaXNYTUxEb2MoZSkpKWZvcihhPXZlKGMpLHI9MCxpPShvPXZlKGUpKS5sZW5ndGg7cjxpO3IrKylzPW9bcl0sdT1hW3JdLHZvaWQgMCxcImlucHV0XCI9PT0obD11Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpJiZwZS50ZXN0KHMudHlwZSk/dS5jaGVja2VkPXMuY2hlY2tlZDpcImlucHV0XCIhPT1sJiZcInRleHRhcmVhXCIhPT1sfHwodS5kZWZhdWx0VmFsdWU9cy5kZWZhdWx0VmFsdWUpO2lmKHQpaWYobilmb3Iobz1vfHx2ZShlKSxhPWF8fHZlKGMpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspTWUob1tyXSxhW3JdKTtlbHNlIE1lKGUsYyk7cmV0dXJuIDA8KGE9dmUoYyxcInNjcmlwdFwiKSkubGVuZ3RoJiZ5ZShhLCFmJiZ2ZShlLFwic2NyaXB0XCIpKSxjfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4scixpPWsuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKEcobikpe2lmKHQ9bltRLmV4cGFuZG9dKXtpZih0LmV2ZW50cylmb3IociBpbiB0LmV2ZW50cylpW3JdP2suZXZlbnQucmVtb3ZlKG4scik6ay5yZW1vdmVFdmVudChuLHIsdC5oYW5kbGUpO25bUS5leHBhbmRvXT12b2lkIDB9bltKLmV4cGFuZG9dJiYobltKLmV4cGFuZG9dPXZvaWQgMCl9fX0pLGsuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFdlKHRoaXMsZSwhMCl9LHJlbW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gV2UodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gXyh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP2sudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1lKX0pfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBJZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8T2UodGhpcyxlKS5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEllKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgdD1PZSh0aGlzLGUpO3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIEllKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIEllKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MDtudWxsIT0oZT10aGlzW3RdKTt0KyspMT09PWUubm9kZVR5cGUmJihrLmNsZWFuRGF0YSh2ZShlLCExKSksZS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsIT1lJiZlLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gay5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4gXyh0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbMF18fHt9LG49MCxyPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWUmJjE9PT10Lm5vZGVUeXBlKXJldHVybiB0LmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIXFlLnRlc3QoZSkmJiFnZVsoZGUuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXtlPWsuaHRtbFByZWZpbHRlcihlKTt0cnl7Zm9yKDtuPHI7bisrKTE9PT0odD10aGlzW25dfHx7fSkubm9kZVR5cGUmJihrLmNsZWFuRGF0YSh2ZSh0LCExKSksdC5pbm5lckhUTUw9ZSk7dD0wfWNhdGNoKGUpe319dCYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBuPVtdO3JldHVybiBJZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmVudE5vZGU7ay5pbkFycmF5KHRoaXMsbik8MCYmKGsuY2xlYW5EYXRhKHZlKHRoaXMpKSx0JiZ0LnJlcGxhY2VDaGlsZChlLHRoaXMpKX0sbil9fSksay5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsYSl7ay5mbltlXT1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1bXSxyPWsoZSksaT1yLmxlbmd0aC0xLG89MDtvPD1pO28rKyl0PW89PT1pP3RoaXM6dGhpcy5jbG9uZSghMCksayhyW29dKVthXSh0KSx1LmFwcGx5KG4sdC5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciAkZT1uZXcgUmVnRXhwKFwiXihcIit0ZStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxGZT1mdW5jdGlvbihlKXt2YXIgdD1lLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIHQmJnQub3BlbmVyfHwodD1DKSx0LmdldENvbXB1dGVkU3R5bGUoZSl9LEJlPW5ldyBSZWdFeHAocmUuam9pbihcInxcIiksXCJpXCIpO2Z1bmN0aW9uIF9lKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuc3R5bGU7cmV0dXJuKG49bnx8RmUoZSkpJiYoXCJcIiE9PShhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fG9lKGUpfHwoYT1rLnN0eWxlKGUsdCkpLCF5LnBpeGVsQm94U3R5bGVzKCkmJiRlLnRlc3QoYSkmJkJlLnRlc3QodCkmJihyPXMud2lkdGgsaT1zLm1pbldpZHRoLG89cy5tYXhXaWR0aCxzLm1pbldpZHRoPXMubWF4V2lkdGg9cy53aWR0aD1hLGE9bi53aWR0aCxzLndpZHRoPXIscy5taW5XaWR0aD1pLHMubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gemUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZih1KXtzLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsdS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLGllLmFwcGVuZENoaWxkKHMpLmFwcGVuZENoaWxkKHUpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZSh1KTtuPVwiMSVcIiE9PWUudG9wLGE9MTI9PT10KGUubWFyZ2luTGVmdCksdS5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLHUuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KHUub2Zmc2V0V2lkdGgvMyksaWUucmVtb3ZlQ2hpbGQocyksdT1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscz1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dS5zdHlsZSYmKHUuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLHUuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHkuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PXUuc3R5bGUuYmFja2dyb3VuZENsaXAsay5leHRlbmQoeSx7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxvfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxufSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGF9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGl9fSkpfSgpO3ZhciBVZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sWGU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFZlPXt9O2Z1bmN0aW9uIEdlKGUpe3ZhciB0PWsuY3NzUHJvcHNbZV18fFZlW2VdO3JldHVybiB0fHwoZSBpbiBYZT9lOlZlW2VdPWZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49VWUubGVuZ3RoO3doaWxlKG4tLSlpZigoZT1VZVtuXSt0KWluIFhlKXJldHVybiBlfShlKXx8ZSl9dmFyIFllPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxRZT0vXi0tLyxKZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sS2U9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifTtmdW5jdGlvbiBaZShlLHQsbil7dmFyIHI9bmUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIGV0KGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9ay5jc3MoZSxuK3JlW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT1rLmNzcyhlLFwicGFkZGluZ1wiK3JlW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPWsuY3NzKGUsXCJib3JkZXJcIityZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9ay5jc3MoZSxcInBhZGRpbmdcIityZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9ay5jc3MoZSxcImJvcmRlclwiK3JlW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz1rLmNzcyhlLFwiYm9yZGVyXCIrcmVbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmMDw9byYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiB0dChlLHQsbil7dmFyIHI9RmUoZSksaT0oIXkuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJlwiYm9yZGVyLWJveFwiPT09ay5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLG89aSxhPV9lKGUsdCxyKSxzPVwib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoJGUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT1cImF1dG9cIn1yZXR1cm4oIXkuYm94U2l6aW5nUmVsaWFibGUoKSYmaXx8XCJhdXRvXCI9PT1hfHwhcGFyc2VGbG9hdChhKSYmXCJpbmxpbmVcIj09PWsuY3NzKGUsXCJkaXNwbGF5XCIsITEscikpJiZlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoaT1cImJvcmRlci1ib3hcIj09PWsuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSwobz1zIGluIGUpJiYoYT1lW3NdKSksKGE9cGFyc2VGbG9hdChhKXx8MCkrZXQoZSx0LG58fChpP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLG8scixhKStcInB4XCJ9ZnVuY3Rpb24gbnQoZSx0LG4scixpKXtyZXR1cm4gbmV3IG50LnByb3RvdHlwZS5pbml0KGUsdCxuLHIsaSl9ay5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oZSx0KXtpZih0KXt2YXIgbj1fZShlLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09bj9cIjFcIjpufX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxncmlkQXJlYTohMCxncmlkQ29sdW1uOiEwLGdyaWRDb2x1bW5FbmQ6ITAsZ3JpZENvbHVtblN0YXJ0OiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3RhcnQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7fSxzdHlsZTpmdW5jdGlvbihlLHQsbixyKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBpLG8sYSxzPVYodCksdT1RZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1HZShzKSksYT1rLmNzc0hvb2tzW3RdfHxrLmNzc0hvb2tzW3NdLHZvaWQgMD09PW4pcmV0dXJuIGEmJlwiZ2V0XCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07XCJzdHJpbmdcIj09PShvPXR5cGVvZiBuKSYmKGk9bmUuZXhlYyhuKSkmJmlbMV0mJihuPWxlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PW4mJihcIm51bWJlclwiIT09b3x8dXx8KG4rPWkmJmlbM118fChrLmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLHkuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVYodCk7cmV0dXJuIFFlLnRlc3QodCl8fCh0PUdlKHMpKSwoYT1rLmNzc0hvb2tzW3RdfHxrLmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPV9lKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gS2UmJihpPUtlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLGsuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdSl7ay5jc3NIb29rc1t1XT17Z2V0OmZ1bmN0aW9uKGUsdCxuKXtpZih0KXJldHVybiFZZS50ZXN0KGsuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD90dChlLHUsbik6dWUoZSxKZSxmdW5jdGlvbigpe3JldHVybiB0dChlLHUsbil9KX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPUZlKGUpLG89IXkuc2Nyb2xsYm94U2l6ZSgpJiZcImFic29sdXRlXCI9PT1pLnBvc2l0aW9uLGE9KG98fG4pJiZcImJvcmRlci1ib3hcIj09PWsuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW4/ZXQoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit1WzBdLnRvVXBwZXJDYXNlKCkrdS5zbGljZSgxKV0tcGFyc2VGbG9hdChpW3VdKS1ldChlLHUsXCJib3JkZXJcIiwhMSxpKS0uNSkpLHMmJihyPW5lLmV4ZWModCkpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdV09dCx0PWsuY3NzKGUsdSkpLFplKDAsdCxzKX19fSksay5jc3NIb29rcy5tYXJnaW5MZWZ0PXplKHkucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChfZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC11ZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxrLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihpLG8pe2suY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTpbZV07dDw0O3QrKyluW2krcmVbdF0rb109clt0XXx8clt0LTJdfHxyWzBdO3JldHVybiBufX0sXCJtYXJnaW5cIiE9PWkmJihrLmNzc0hvb2tzW2krb10uc2V0PVplKX0pLGsuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gXyh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPUZlKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPWsuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj9rLnN0eWxlKGUsdCxuKTprLmNzcyhlLHQpfSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKGsuVHdlZW49bnQpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6bnQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8ay5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChrLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPW50LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpudC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1udC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9ay5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOm50LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319KS5pbml0LnByb3RvdHlwZT1udC5wcm90b3R5cGUsKG50LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PWsuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7ay5meC5zdGVwW2UucHJvcF0/ay5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8IWsuY3NzSG9va3NbZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW0dlKGUucHJvcCldP2UuZWxlbVtlLnByb3BdPWUubm93Omsuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19KS5zY3JvbGxUb3A9bnQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0say5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LGsuZng9bnQucHJvdG90eXBlLmluaXQsay5meC5zdGVwPXt9O3ZhciBydCxpdCxvdCxhdCxzdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sdXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBsdCgpe2l0JiYoITE9PT1FLmhpZGRlbiYmQy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/Qy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobHQpOkMuc2V0VGltZW91dChsdCxrLmZ4LmludGVydmFsKSxrLmZ4LnRpY2soKSl9ZnVuY3Rpb24gY3QoKXtyZXR1cm4gQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cnQ9dm9pZCAwfSkscnQ9RGF0ZS5ub3coKX1mdW5jdGlvbiBmdChlLHQpe3ZhciBuLHI9MCxpPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7cjw0O3IrPTItdClpW1wibWFyZ2luXCIrKG49cmVbcl0pXT1pW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihpLm9wYWNpdHk9aS53aWR0aD1lKSxpfWZ1bmN0aW9uIHB0KGUsdCxuKXtmb3IodmFyIHIsaT0oZHQudHdlZW5lcnNbdF18fFtdKS5jb25jYXQoZHQudHdlZW5lcnNbXCIqXCJdKSxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHI9aVtvXS5jYWxsKG4sdCxlKSlyZXR1cm4gcn1mdW5jdGlvbiBkdChvLGUsdCl7dmFyIG4sYSxyPTAsaT1kdC5wcmVmaWx0ZXJzLmxlbmd0aCxzPWsuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGEpcmV0dXJuITE7Zm9yKHZhciBlPXJ0fHxjdCgpLHQ9TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLWUpLG49MS0odC9sLmR1cmF0aW9ufHwwKSxyPTAsaT1sLnR3ZWVucy5sZW5ndGg7cjxpO3IrKylsLnR3ZWVuc1tyXS5ydW4obik7cmV0dXJuIHMubm90aWZ5V2l0aChvLFtsLG4sdF0pLG48MSYmaT90OihpfHxzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOm8scHJvcHM6ay5leHRlbmQoe30sZSksb3B0czprLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6ay5lYXNpbmcuX2RlZmF1bHR9LHQpLG9yaWdpbmFsUHJvcGVydGllczplLG9yaWdpbmFsT3B0aW9uczp0LHN0YXJ0VGltZTpydHx8Y3QoKSxkdXJhdGlvbjp0LmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihlLHQpe3ZhciBuPWsuVHdlZW4obyxsLm9wdHMsZSx0LGwub3B0cy5zcGVjaWFsRWFzaW5nW2VdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChuKSxufSxzdG9wOmZ1bmN0aW9uKGUpe3ZhciB0PTAsbj1lP2wudHdlZW5zLmxlbmd0aDowO2lmKGEpcmV0dXJuIHRoaXM7Zm9yKGE9ITA7dDxuO3QrKylsLnR3ZWVuc1t0XS5ydW4oMSk7cmV0dXJuIGU/KHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbCxlXSkpOnMucmVqZWN0V2l0aChvLFtsLGVdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IoIWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKGk9dFtyPVYobildLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9ay5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWR0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihrLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIGsubWFwKGMscHQsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLGsuZngudGltZXIoay5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1rLkFuaW1hdGlvbj1rLmV4dGVuZChkdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gbGUobi5lbGVtLGUsbmUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXttKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goUik7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLGR0LnR3ZWVuZXJzW25dPWR0LnR3ZWVuZXJzW25dfHxbXSxkdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJnNlKGUpLHY9US5nZXQoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBuLnF1ZXVlfHwobnVsbD09KGE9ay5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLGsucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8YS5lbXB0eS5maXJlKCl9KX0pKSx0KWlmKGk9dFtyXSxzdC50ZXN0KGkpKXtpZihkZWxldGUgdFtyXSxvPW98fFwidG9nZ2xlXCI9PT1pLGk9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09aXx8IXZ8fHZvaWQgMD09PXZbcl0pY29udGludWU7Zz0hMH1kW3JdPXYmJnZbcl18fGsuc3R5bGUoZSxyKX1pZigodT0hay5pc0VtcHR5T2JqZWN0KHQpKXx8IWsuaXNFbXB0eU9iamVjdChkKSlmb3IociBpbiBmJiYxPT09ZS5ub2RlVHlwZSYmKG4ub3ZlcmZsb3c9W2gub3ZlcmZsb3csaC5vdmVyZmxvd1gsaC5vdmVyZmxvd1ldLG51bGw9PShsPXYmJnYuZGlzcGxheSkmJihsPVEuZ2V0KGUsXCJkaXNwbGF5XCIpKSxcIm5vbmVcIj09PShjPWsuY3NzKGUsXCJkaXNwbGF5XCIpKSYmKGw/Yz1sOihmZShbZV0sITApLGw9ZS5zdHlsZS5kaXNwbGF5fHxsLGM9ay5jc3MoZSxcImRpc3BsYXlcIiksZmUoW2VdKSkpLChcImlubGluZVwiPT09Y3x8XCJpbmxpbmUtYmxvY2tcIj09PWMmJm51bGwhPWwpJiZcIm5vbmVcIj09PWsuY3NzKGUsXCJmbG9hdFwiKSYmKHV8fChwLmRvbmUoZnVuY3Rpb24oKXtoLmRpc3BsYXk9bH0pLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoZnVuY3Rpb24oKXtoLm92ZXJmbG93PW4ub3ZlcmZsb3dbMF0saC5vdmVyZmxvd1g9bi5vdmVyZmxvd1sxXSxoLm92ZXJmbG93WT1uLm92ZXJmbG93WzJdfSkpLHU9ITEsZCl1fHwodj9cImhpZGRlblwiaW4gdiYmKGc9di5oaWRkZW4pOnY9US5hY2Nlc3MoZSxcImZ4c2hvd1wiLHtkaXNwbGF5Omx9KSxvJiYodi5oaWRkZW49IWcpLGcmJmZlKFtlXSwhMCkscC5kb25lKGZ1bmN0aW9uKCl7Zm9yKHIgaW4gZ3x8ZmUoW2VdKSxRLnJlbW92ZShlLFwiZnhzaG93XCIpLGQpay5zdHlsZShlLHIsZFtyXSl9KSksdT1wdChnP3Zbcl06MCxyLHApLHIgaW4gdnx8KHZbcl09dS5zdGFydCxnJiYodS5lbmQ9dS5zdGFydCx1LnN0YXJ0PTApKX1dLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/ZHQucHJlZmlsdGVycy51bnNoaWZ0KGUpOmR0LnByZWZpbHRlcnMucHVzaChlKX19KSxrLnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT9rLmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fG0oZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIW0odCkmJnR9O3JldHVybiBrLmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIGsuZnguc3BlZWRzP3IuZHVyYXRpb249ay5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj1rLmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe20oci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJmsuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSxrLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihzZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1rLmlzRW1wdHlPYmplY3QodCksbz1rLnNwZWVkKGUsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIGU9ZHQodGhpcyxrLmV4dGVuZCh7fSx0KSxvKTsoaXx8US5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmUuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGksZSxvKXt2YXIgYT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG8pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgaSYmKG89ZSxlPWksaT12b2lkIDApLGUmJiExIT09aSYmdGhpcy5xdWV1ZShpfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPSEwLHQ9bnVsbCE9aSYmaStcInF1ZXVlSG9va3NcIixuPWsudGltZXJzLHI9US5nZXQodGhpcyk7aWYodClyW3RdJiZyW3RdLnN0b3AmJmEoclt0XSk7ZWxzZSBmb3IodCBpbiByKXJbdF0mJnJbdF0uc3RvcCYmdXQudGVzdCh0KSYmYShyW3RdKTtmb3IodD1uLmxlbmd0aDt0LS07KW5bdF0uZWxlbSE9PXRoaXN8fG51bGwhPWkmJm5bdF0ucXVldWUhPT1pfHwoblt0XS5hbmltLnN0b3AobyksZT0hMSxuLnNwbGljZSh0LDEpKTshZSYmb3x8ay5kZXF1ZXVlKHRoaXMsaSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiExIT09YSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PVEuZ2V0KHRoaXMpLG49dFthK1wicXVldWVcIl0scj10W2ErXCJxdWV1ZUhvb2tzXCJdLGk9ay50aW1lcnMsbz1uP24ubGVuZ3RoOjA7Zm9yKHQuZmluaXNoPSEwLGsucXVldWUodGhpcyxhLFtdKSxyJiZyLnN0b3AmJnIuc3RvcC5jYWxsKHRoaXMsITApLGU9aS5sZW5ndGg7ZS0tOylpW2VdLmVsZW09PT10aGlzJiZpW2VdLnF1ZXVlPT09YSYmKGlbZV0uYW5pbS5zdG9wKCEwKSxpLnNwbGljZShlLDEpKTtmb3IoZT0wO2U8bztlKyspbltlXSYmbltlXS5maW5pc2gmJm5bZV0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIHQuZmluaXNofSl9fSksay5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHIpe3ZhciBpPWsuZm5bcl07ay5mbltyXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoZnQociwhMCksZSx0LG4pfX0pLGsuZWFjaCh7c2xpZGVEb3duOmZ0KFwic2hvd1wiKSxzbGlkZVVwOmZ0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpmdChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUscil7ay5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSxrLnRpbWVycz1bXSxrLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj1rLnRpbWVycztmb3IocnQ9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxrLmZ4LnN0b3AoKSxydD12b2lkIDB9LGsuZngudGltZXI9ZnVuY3Rpb24oZSl7ay50aW1lcnMucHVzaChlKSxrLmZ4LnN0YXJ0KCl9LGsuZnguaW50ZXJ2YWw9MTMsay5meC5zdGFydD1mdW5jdGlvbigpe2l0fHwoaXQ9ITAsbHQoKSl9LGsuZnguc3RvcD1mdW5jdGlvbigpe2l0PW51bGx9LGsuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LGsuZm4uZGVsYXk9ZnVuY3Rpb24ocixlKXtyZXR1cm4gcj1rLmZ4JiZrLmZ4LnNwZWVkc1tyXXx8cixlPWV8fFwiZnhcIix0aGlzLnF1ZXVlKGUsZnVuY3Rpb24oZSx0KXt2YXIgbj1DLnNldFRpbWVvdXQoZSxyKTt0LnN0b3A9ZnVuY3Rpb24oKXtDLmNsZWFyVGltZW91dChuKX19KX0sb3Q9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYXQ9RS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSksb3QudHlwZT1cImNoZWNrYm94XCIseS5jaGVja09uPVwiXCIhPT1vdC52YWx1ZSx5Lm9wdFNlbGVjdGVkPWF0LnNlbGVjdGVkLChvdD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIsb3QudHlwZT1cInJhZGlvXCIseS5yYWRpb1ZhbHVlPVwidFwiPT09b3QudmFsdWU7dmFyIGh0LGd0PWsuZXhwci5hdHRySGFuZGxlO2suZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIF8odGhpcyxrLmF0dHIsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2sucmVtb3ZlQXR0cih0aGlzLGUpfSl9fSksay5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUuZ2V0QXR0cmlidXRlP2sucHJvcChlLHQsbik6KDE9PT1vJiZrLmlzWE1MRG9jKGUpfHwoaT1rLmF0dHJIb29rc1t0LnRvTG93ZXJDYXNlKCldfHwoay5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9odDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQgay5yZW1vdmVBdHRyKGUsdCk6aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuK1wiXCIpLG4pOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjpudWxsPT0ocj1rLmZpbmQuYXR0cihlLHQpKT92b2lkIDA6cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIXkucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmQShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10JiZ0Lm1hdGNoKFIpO2lmKGkmJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49aVtyKytdKWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLGh0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiExPT09dD9rLnJlbW92ZUF0dHIoZSxuKTplLnNldEF0dHJpYnV0ZShuLG4pLG59fSxrLmVhY2goay5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGUsdCl7dmFyIGE9Z3RbdF18fGsuZmluZC5hdHRyO2d0W3RdPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89dC50b0xvd2VyQ2FzZSgpO3JldHVybiBufHwoaT1ndFtvXSxndFtvXT1yLHI9bnVsbCE9YShlLHQsbik/bzpudWxsLGd0W29dPWkpLHJ9fSk7dmFyIHZ0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2kseXQ9L14oPzphfGFyZWEpJC9pO2Z1bmN0aW9uIG10KGUpe3JldHVybihlLm1hdGNoKFIpfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24geHQoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifWZ1bmN0aW9uIGJ0KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUubWF0Y2goUil8fFtdfWsuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIF8odGhpcyxrLnByb3AsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW2sucHJvcEZpeFtlXXx8ZV19KX19KSxrLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJmsuaXNYTUxEb2MoZSl8fCh0PWsucHJvcEZpeFt0XXx8dCxpPWsucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ay5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOnZ0LnRlc3QoZS5ub2RlTmFtZSl8fHl0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSkseS5vcHRTZWxlY3RlZHx8KGsucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxrLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7ay5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLGsuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2sodGhpcykuYWRkQ2xhc3ModC5jYWxsKHRoaXMsZSx4dCh0aGlzKSkpfSk7aWYoKGU9YnQodCkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPXh0KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK210KGkpK1wiIFwiKXthPTA7d2hpbGUobz1lW2ErK10pci5pbmRleE9mKFwiIFwiK28rXCIgXCIpPDAmJihyKz1vK1wiIFwiKTtpIT09KHM9bXQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7ayh0aGlzKS5yZW1vdmVDbGFzcyh0LmNhbGwodGhpcyxlLHh0KHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZigoZT1idCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9eHQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrbXQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSl3aGlsZSgtMTxyLmluZGV4T2YoXCIgXCIrbytcIiBcIikpcj1yLnJlcGxhY2UoXCIgXCIrbytcIiBcIixcIiBcIik7aSE9PShzPW10KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihpLHQpe3ZhciBvPXR5cGVvZiBpLGE9XCJzdHJpbmdcIj09PW98fEFycmF5LmlzQXJyYXkoaSk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0JiZhP3Q/dGhpcy5hZGRDbGFzcyhpKTp0aGlzLnJlbW92ZUNsYXNzKGkpOm0oaSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2sodGhpcykudG9nZ2xlQ2xhc3MoaS5jYWxsKHRoaXMsZSx4dCh0aGlzKSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQsbixyO2lmKGEpe3Q9MCxuPWsodGhpcykscj1idChpKTt3aGlsZShlPXJbdCsrXSluLmhhc0NsYXNzKGUpP24ucmVtb3ZlQ2xhc3MoZSk6bi5hZGRDbGFzcyhlKX1lbHNlIHZvaWQgMCE9PWkmJlwiYm9vbGVhblwiIT09b3x8KChlPXh0KHRoaXMpKSYmUS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixlKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGV8fCExPT09aT9cIlwiOlEuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPTA7dD1cIiBcIitlK1wiIFwiO3doaWxlKG49dGhpc1tyKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYtMTwoXCIgXCIrbXQoeHQobikpK1wiIFwiKS5pbmRleE9mKHQpKXJldHVybiEwO3JldHVybiExfX0pO3ZhciB3dD0vXFxyL2c7ay5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihuKXt2YXIgcixlLGksdD10aGlzWzBdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPW0obiksdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0OzE9PT10aGlzLm5vZGVUeXBlJiYobnVsbD09KHQ9aT9uLmNhbGwodGhpcyxlLGsodGhpcykudmFsKCkpOm4pP3Q9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgdD90Kz1cIlwiOkFycmF5LmlzQXJyYXkodCkmJih0PWsubWFwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksKHI9ay52YWxIb29rc1t0aGlzLnR5cGVdfHxrLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gciYmdm9pZCAwIT09ci5zZXQodGhpcyx0LFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPXQpKX0pKTp0PyhyPWsudmFsSG9va3NbdC50eXBlXXx8ay52YWxIb29rc1t0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJnZXRcImluIHImJnZvaWQgMCE9PShlPXIuZ2V0KHQsXCJ2YWx1ZVwiKSk/ZTpcInN0cmluZ1wiPT10eXBlb2YoZT10LnZhbHVlKT9lLnJlcGxhY2Uod3QsXCJcIik6bnVsbD09ZT9cIlwiOmU6dm9pZCAwfX0pLGsuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ay5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6bXQoay50ZXh0KGUpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPWUub3B0aW9ucyxvPWUuc2VsZWN0ZWRJbmRleCxhPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhQShuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9ayhuKS52YWwoKSxhKXJldHVybiB0O3MucHVzaCh0KX1yZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPWUub3B0aW9ucyxvPWsubWFrZUFycmF5KHQpLGE9aS5sZW5ndGg7d2hpbGUoYS0tKSgocj1pW2FdKS5zZWxlY3RlZD0tMTxrLmluQXJyYXkoay52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksay5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe2sudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD0tMTxrLmluQXJyYXkoayhlKS52YWwoKSx0KX19LHkuY2hlY2tPbnx8KGsudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX0pfSkseS5mb2N1c2luPVwib25mb2N1c2luXCJpbiBDO3ZhciBUdD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sQ3Q9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07ay5leHRlbmQoay5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmLHA9W258fEVdLGQ9di5jYWxsKGUsXCJ0eXBlXCIpP2UudHlwZTplLGg9di5jYWxsKGUsXCJuYW1lc3BhY2VcIik/ZS5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKG89Zj1hPW49bnx8RSwzIT09bi5ub2RlVHlwZSYmOCE9PW4ubm9kZVR5cGUmJiFUdC50ZXN0KGQray5ldmVudC50cmlnZ2VyZWQpJiYoLTE8ZC5pbmRleE9mKFwiLlwiKSYmKGQ9KGg9ZC5zcGxpdChcIi5cIikpLnNoaWZ0KCksaC5zb3J0KCkpLHU9ZC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrZCwoZT1lW2suZXhwYW5kb10/ZTpuZXcgay5FdmVudChkLFwib2JqZWN0XCI9PXR5cGVvZiBlJiZlKSkuaXNUcmlnZ2VyPXI/MjozLGUubmFtZXNwYWNlPWguam9pbihcIi5cIiksZS5ybmFtZXNwYWNlPWUubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGUucmVzdWx0PXZvaWQgMCxlLnRhcmdldHx8KGUudGFyZ2V0PW4pLHQ9bnVsbD09dD9bZV06ay5tYWtlQXJyYXkodCxbZV0pLGM9ay5ldmVudC5zcGVjaWFsW2RdfHx7fSxyfHwhYy50cmlnZ2VyfHwhMSE9PWMudHJpZ2dlci5hcHBseShuLHQpKSl7aWYoIXImJiFjLm5vQnViYmxlJiYheChuKSl7Zm9yKHM9Yy5kZWxlZ2F0ZVR5cGV8fGQsVHQudGVzdChzK2QpfHwobz1vLnBhcmVudE5vZGUpO287bz1vLnBhcmVudE5vZGUpcC5wdXNoKG8pLGE9bzthPT09KG4ub3duZXJEb2N1bWVudHx8RSkmJnAucHVzaChhLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvd3x8Qyl9aT0wO3doaWxlKChvPXBbaSsrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpZj1vLGUudHlwZT0xPGk/czpjLmJpbmRUeXBlfHxkLChsPShRLmdldChvLFwiZXZlbnRzXCIpfHx7fSlbZS50eXBlXSYmUS5nZXQobyxcImhhbmRsZVwiKSkmJmwuYXBwbHkobyx0KSwobD11JiZvW3VdKSYmbC5hcHBseSYmRyhvKSYmKGUucmVzdWx0PWwuYXBwbHkobyx0KSwhMT09PWUucmVzdWx0JiZlLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBlLnR5cGU9ZCxyfHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxjLl9kZWZhdWx0JiYhMSE9PWMuX2RlZmF1bHQuYXBwbHkocC5wb3AoKSx0KXx8IUcobil8fHUmJm0obltkXSkmJiF4KG4pJiYoKGE9blt1XSkmJihuW3VdPW51bGwpLGsuZXZlbnQudHJpZ2dlcmVkPWQsZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLmFkZEV2ZW50TGlzdGVuZXIoZCxDdCksbltkXSgpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5yZW1vdmVFdmVudExpc3RlbmVyKGQsQ3QpLGsuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxhJiYoblt1XT1hKSksZS5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9ay5leHRlbmQobmV3IGsuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7ay5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSxrLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtrLmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiBrLmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLHkuZm9jdXNpbnx8ay5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24obixyKXt2YXIgaT1mdW5jdGlvbihlKXtrLmV2ZW50LnNpbXVsYXRlKHIsZS50YXJnZXQsay5ldmVudC5maXgoZSkpfTtrLmV2ZW50LnNwZWNpYWxbcl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHQ9US5hY2Nlc3MoZSxyKTt0fHxlLmFkZEV2ZW50TGlzdGVuZXIobixpLCEwKSxRLmFjY2VzcyhlLHIsKHR8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyx0PVEuYWNjZXNzKGUsciktMTt0P1EuYWNjZXNzKGUscix0KTooZS5yZW1vdmVFdmVudExpc3RlbmVyKG4saSwhMCksUS5yZW1vdmUoZSxyKSl9fX0pO3ZhciBFdD1DLmxvY2F0aW9uLGt0PURhdGUubm93KCksU3Q9L1xcPy87ay5wYXJzZVhNTD1mdW5jdGlvbihlKXt2YXIgdDtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7dHJ5e3Q9KG5ldyBDLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX1jYXRjaChlKXt0PXZvaWQgMH1yZXR1cm4gdCYmIXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fGsuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrZSksdH07dmFyIE50PS9cXFtcXF0kLyxBdD0vXFxyP1xcbi9nLER0PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxqdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gcXQobixlLHIsaSl7dmFyIHQ7aWYoQXJyYXkuaXNBcnJheShlKSlrLmVhY2goZSxmdW5jdGlvbihlLHQpe3J8fE50LnRlc3Qobik/aShuLHQpOnF0KG4rXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT10P2U6XCJcIikrXCJdXCIsdCxyLGkpfSk7ZWxzZSBpZihyfHxcIm9iamVjdFwiIT09dyhlKSlpKG4sZSk7ZWxzZSBmb3IodCBpbiBlKXF0KG4rXCJbXCIrdCtcIl1cIixlW3RdLHIsaSl9ay5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1mdW5jdGlvbihlLHQpe3ZhciBuPW0odCk/dCgpOnQ7cltyLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKG51bGw9PWUpcmV0dXJuXCJcIjtpZihBcnJheS5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIWsuaXNQbGFpbk9iamVjdChlKSlrLmVhY2goZSxmdW5jdGlvbigpe2kodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IobiBpbiBlKXF0KG4sZVtuXSx0LGkpO3JldHVybiByLmpvaW4oXCImXCIpfSxrLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGsucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1rLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP2subWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIWsodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJmp0LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFEdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhcGUudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1rKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6QXJyYXkuaXNBcnJheShuKT9rLm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2UoQXQsXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZShBdCxcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgTHQ9LyUyMC9nLEh0PS8jLiokLyxPdD0vKFs/Jl0pXz1bXiZdKi8sUHQ9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxSdD0vXig/OkdFVHxIRUFEKSQvLE10PS9eXFwvXFwvLyxJdD17fSxXdD17fSwkdD1cIiovXCIuY29uY2F0KFwiKlwiKSxGdD1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Z1bmN0aW9uIEJ0KG8pe3JldHVybiBmdW5jdGlvbihlLHQpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9XCIqXCIpO3ZhciBuLHI9MCxpPWUudG9Mb3dlckNhc2UoKS5tYXRjaChSKXx8W107aWYobSh0KSl3aGlsZShuPWlbcisrXSlcIitcIj09PW5bMF0/KG49bi5zbGljZSgxKXx8XCIqXCIsKG9bbl09b1tuXXx8W10pLnVuc2hpZnQodCkpOihvW25dPW9bbl18fFtdKS5wdXNoKHQpfX1mdW5jdGlvbiBfdCh0LGksbyxhKXt2YXIgcz17fSx1PXQ9PT1XdDtmdW5jdGlvbiBsKGUpe3ZhciByO3JldHVybiBzW2VdPSEwLGsuZWFjaCh0W2VdfHxbXSxmdW5jdGlvbihlLHQpe3ZhciBuPXQoaSxvLGEpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBufHx1fHxzW25dP3U/IShyPW4pOnZvaWQgMDooaS5kYXRhVHlwZXMudW5zaGlmdChuKSxsKG4pLCExKX0pLHJ9cmV0dXJuIGwoaS5kYXRhVHlwZXNbMF0pfHwhc1tcIipcIl0mJmwoXCIqXCIpfWZ1bmN0aW9uIHp0KGUsdCl7dmFyIG4scixpPWsuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigoaVtuXT9lOnJ8fChyPXt9KSlbbl09dFtuXSk7cmV0dXJuIHImJmsuZXh0ZW5kKCEwLGUsciksZX1GdC5ocmVmPUV0LmhyZWYsay5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOkV0LmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8udGVzdChFdC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6JHQsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOmsucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0P3p0KHp0KGUsay5hamF4U2V0dGluZ3MpLHQpOnp0KGsuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkJ0KEl0KSxhamF4VHJhbnNwb3J0OkJ0KFd0KSxhamF4OmZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLHQ9dHx8e307dmFyIGMsZixwLG4sZCxyLGgsZyxpLG8sdj1rLmFqYXhTZXR1cCh7fSx0KSx5PXYuY29udGV4dHx8dixtPXYuY29udGV4dCYmKHkubm9kZVR5cGV8fHkuanF1ZXJ5KT9rKHkpOmsuZXZlbnQseD1rLkRlZmVycmVkKCksYj1rLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHc9di5zdGF0dXNDb2RlfHx7fSxhPXt9LHM9e30sdT1cImNhbmNlbGVkXCIsVD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGgpe2lmKCFuKXtuPXt9O3doaWxlKHQ9UHQuZXhlYyhwKSluW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl09KG5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXXx8W10pLmNvbmNhdCh0WzJdKX10PW5bZS50b0xvd2VyQ2FzZSgpK1wiIFwiXX1yZXR1cm4gbnVsbD09dD9udWxsOnQuam9pbihcIiwgXCIpfSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaD9wOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09aCYmKGU9c1tlLnRvTG93ZXJDYXNlKCldPXNbZS50b0xvd2VyQ2FzZSgpXXx8ZSxhW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWgmJih2Lm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihoKVQuYWx3YXlzKGVbVC5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpd1t0XT1bd1t0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8dTtyZXR1cm4gYyYmYy5hYm9ydCh0KSxsKDAsdCksdGhpc319O2lmKHgucHJvbWlzZShUKSx2LnVybD0oKGV8fHYudXJsfHxFdC5ocmVmKStcIlwiKS5yZXBsYWNlKE10LEV0LnByb3RvY29sK1wiLy9cIiksdi50eXBlPXQubWV0aG9kfHx0LnR5cGV8fHYubWV0aG9kfHx2LnR5cGUsdi5kYXRhVHlwZXM9KHYuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKFIpfHxbXCJcIl0sbnVsbD09di5jcm9zc0RvbWFpbil7cj1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtyLmhyZWY9di51cmwsci5ocmVmPXIuaHJlZix2LmNyb3NzRG9tYWluPUZ0LnByb3RvY29sK1wiLy9cIitGdC5ob3N0IT1yLnByb3RvY29sK1wiLy9cIityLmhvc3R9Y2F0Y2goZSl7di5jcm9zc0RvbWFpbj0hMH19aWYodi5kYXRhJiZ2LnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygdi5kYXRhJiYodi5kYXRhPWsucGFyYW0odi5kYXRhLHYudHJhZGl0aW9uYWwpKSxfdChJdCx2LHQsVCksaClyZXR1cm4gVDtmb3IoaSBpbihnPWsuZXZlbnQmJnYuZ2xvYmFsKSYmMD09ay5hY3RpdmUrKyYmay5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLHYudHlwZT12LnR5cGUudG9VcHBlckNhc2UoKSx2Lmhhc0NvbnRlbnQ9IVJ0LnRlc3Qodi50eXBlKSxmPXYudXJsLnJlcGxhY2UoSHQsXCJcIiksdi5oYXNDb250ZW50P3YuZGF0YSYmdi5wcm9jZXNzRGF0YSYmMD09PSh2LmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYodi5kYXRhPXYuZGF0YS5yZXBsYWNlKEx0LFwiK1wiKSk6KG89di51cmwuc2xpY2UoZi5sZW5ndGgpLHYuZGF0YSYmKHYucHJvY2Vzc0RhdGF8fFwic3RyaW5nXCI9PXR5cGVvZiB2LmRhdGEpJiYoZis9KFN0LnRlc3QoZik/XCImXCI6XCI/XCIpK3YuZGF0YSxkZWxldGUgdi5kYXRhKSwhMT09PXYuY2FjaGUmJihmPWYucmVwbGFjZShPdCxcIiQxXCIpLG89KFN0LnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitrdCsrK28pLHYudXJsPWYrbyksdi5pZk1vZGlmaWVkJiYoay5sYXN0TW9kaWZpZWRbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsay5sYXN0TW9kaWZpZWRbZl0pLGsuZXRhZ1tmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLGsuZXRhZ1tmXSkpLCh2LmRhdGEmJnYuaGFzQ29udGVudCYmITEhPT12LmNvbnRlbnRUeXBlfHx0LmNvbnRlbnRUeXBlKSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsdi5jb250ZW50VHlwZSksVC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsdi5kYXRhVHlwZXNbMF0mJnYuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0/di5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT12LmRhdGFUeXBlc1swXT9cIiwgXCIrJHQrXCI7IHE9MC4wMVwiOlwiXCIpOnYuYWNjZXB0c1tcIipcIl0pLHYuaGVhZGVycylULnNldFJlcXVlc3RIZWFkZXIoaSx2LmhlYWRlcnNbaV0pO2lmKHYuYmVmb3JlU2VuZCYmKCExPT09di5iZWZvcmVTZW5kLmNhbGwoeSxULHYpfHxoKSlyZXR1cm4gVC5hYm9ydCgpO2lmKHU9XCJhYm9ydFwiLGIuYWRkKHYuY29tcGxldGUpLFQuZG9uZSh2LnN1Y2Nlc3MpLFQuZmFpbCh2LmVycm9yKSxjPV90KFd0LHYsdCxUKSl7aWYoVC5yZWFkeVN0YXRlPTEsZyYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbVCx2XSksaClyZXR1cm4gVDt2LmFzeW5jJiYwPHYudGltZW91dCYmKGQ9Qy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7VC5hYm9ydChcInRpbWVvdXRcIil9LHYudGltZW91dCkpO3RyeXtoPSExLGMuc2VuZChhLGwpfWNhdGNoKGUpe2lmKGgpdGhyb3cgZTtsKC0xLGUpfX1lbHNlIGwoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gbChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9dDtofHwoaD0hMCxkJiZDLmNsZWFyVGltZW91dChkKSxjPXZvaWQgMCxwPXJ8fFwiXCIsVC5yZWFkeVN0YXRlPTA8ZT80OjAsaT0yMDA8PWUmJmU8MzAwfHwzMDQ9PT1lLG4mJihzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY29udGVudHMsdT1lLmRhdGFUeXBlczt3aGlsZShcIipcIj09PXVbMF0pdS5zaGlmdCgpLHZvaWQgMD09PXImJihyPWUubWltZVR5cGV8fHQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKHIpZm9yKGkgaW4gcylpZihzW2ldJiZzW2ldLnRlc3Qocikpe3UudW5zaGlmdChpKTticmVha31pZih1WzBdaW4gbilvPXVbMF07ZWxzZXtmb3IoaSBpbiBuKXtpZighdVswXXx8ZS5jb252ZXJ0ZXJzW2krXCIgXCIrdVswXV0pe289aTticmVha31hfHwoYT1pKX1vPW98fGF9aWYobylyZXR1cm4gbyE9PXVbMF0mJnUudW5zaGlmdChvKSxuW29dfSh2LFQsbikpLHM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX0odixzLFQsaSksaT8odi5pZk1vZGlmaWVkJiYoKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYoay5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYoay5ldGFnW2ZdPXUpKSwyMDQ9PT1lfHxcIkhFQURcIj09PXYudHlwZT9sPVwibm9jb250ZW50XCI6MzA0PT09ZT9sPVwibm90bW9kaWZpZWRcIjoobD1zLnN0YXRlLG89cy5kYXRhLGk9IShhPXMuZXJyb3IpKSk6KGE9bCwhZSYmbHx8KGw9XCJlcnJvclwiLGU8MCYmKGU9MCkpKSxULnN0YXR1cz1lLFQuc3RhdHVzVGV4dD0odHx8bCkrXCJcIixpP3gucmVzb2x2ZVdpdGgoeSxbbyxsLFRdKTp4LnJlamVjdFdpdGgoeSxbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW1QsdixpP286YV0pLGIuZmlyZVdpdGgoeSxbVCxsXSksZyYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtULHZdKSwtLWsuYWN0aXZlfHxrLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBUfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gay5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gay5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSxrLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsaSl7a1tpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLGsuYWpheChrLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0say5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksay5fZXZhbFVybD1mdW5jdGlvbihlLHQpe3JldHVybiBrLmFqYXgoe3VybDplLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oKXt9fSxkYXRhRmlsdGVyOmZ1bmN0aW9uKGUpe2suZ2xvYmFsRXZhbChlLHQpfX0pfSxrLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKG0oZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD1rKGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihuKXtyZXR1cm4gbShuKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7ayh0aGlzKS53cmFwSW5uZXIobi5jYWxsKHRoaXMsZSkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ayh0aGlzKSx0PWUuY29udGVudHMoKTt0Lmxlbmd0aD90LndyYXBBbGwobik6ZS5hcHBlbmQobil9KX0sd3JhcDpmdW5jdGlvbih0KXt2YXIgbj1tKHQpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7ayh0aGlzKS53cmFwQWxsKG4/dC5jYWxsKHRoaXMsZSk6dCl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtrKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLGsuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hay5leHByLnBzZXVkb3MudmlzaWJsZShlKX0say5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LGsuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEMuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIFV0PXswOjIwMCwxMjIzOjIwNH0sWHQ9ay5hamF4U2V0dGluZ3MueGhyKCk7eS5jb3JzPSEhWHQmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBYdCx5LmFqYXg9WHQ9ISFYdCxrLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oaSl7dmFyIG8sYTtpZih5LmNvcnN8fFh0JiYhaS5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS54aHIoKTtpZihyLm9wZW4oaS50eXBlLGkudXJsLGkuYXN5bmMsaS51c2VybmFtZSxpLnBhc3N3b3JkKSxpLnhockZpZWxkcylmb3IobiBpbiBpLnhockZpZWxkcylyW25dPWkueGhyRmllbGRzW25dO2ZvcihuIGluIGkubWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlKGkubWltZVR5cGUpLGkuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKSxlKXIuc2V0UmVxdWVzdEhlYWRlcihuLGVbbl0pO289ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7byYmKG89YT1yLm9ubG9hZD1yLm9uZXJyb3I9ci5vbmFib3J0PXIub250aW1lb3V0PXIub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09ZT9yLmFib3J0KCk6XCJlcnJvclwiPT09ZT9cIm51bWJlclwiIT10eXBlb2Ygci5zdGF0dXM/dCgwLFwiZXJyb3JcIik6dChyLnN0YXR1cyxyLnN0YXR1c1RleHQpOnQoVXRbci5zdGF0dXNdfHxyLnN0YXR1cyxyLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oci5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHIucmVzcG9uc2VUZXh0P3tiaW5hcnk6ci5yZXNwb25zZX06e3RleHQ6ci5yZXNwb25zZVRleHR9LHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LHIub25sb2FkPW8oKSxhPXIub25lcnJvcj1yLm9udGltZW91dD1vKFwiZXJyb3JcIiksdm9pZCAwIT09ci5vbmFib3J0P3Iub25hYm9ydD1hOnIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXIucmVhZHlTdGF0ZSYmQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byYmYSgpfSl9LG89byhcImFib3J0XCIpO3RyeXtyLnNlbmQoaS5oYXNDb250ZW50JiZpLmRhdGF8fG51bGwpfWNhdGNoKGUpe2lmKG8pdGhyb3cgZX19LGFib3J0OmZ1bmN0aW9uKCl7byYmbygpfX19KSxrLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLGsuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBrLmdsb2JhbEV2YWwoZSksZX19fSksay5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSxrLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihuKXt2YXIgcixpO2lmKG4uY3Jvc3NEb21haW58fG4uc2NyaXB0QXR0cnMpcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXtyPWsoXCI8c2NyaXB0PlwiKS5hdHRyKG4uc2NyaXB0QXR0cnN8fHt9KS5wcm9wKHtjaGFyc2V0Om4uc2NyaXB0Q2hhcnNldCxzcmM6bi51cmx9KS5vbihcImxvYWQgZXJyb3JcIixpPWZ1bmN0aW9uKGUpe3IucmVtb3ZlKCksaT1udWxsLGUmJnQoXCJlcnJvclwiPT09ZS50eXBlPzQwNDoyMDAsZS50eXBlKX0pLEUuaGVhZC5hcHBlbmRDaGlsZChyWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtpJiZpKCl9fX0pO3ZhciBWdCxHdD1bXSxZdD0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO2suYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPUd0LnBvcCgpfHxrLmV4cGFuZG8rXCJfXCIra3QrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLGsuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoWXQudGVzdChlLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09KGUuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJll0LnRlc3QoZS5kYXRhKSYmXCJkYXRhXCIpO2lmKGF8fFwianNvbnBcIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoWXQsXCIkMVwiK3IpOiExIT09ZS5qc29ucCYmKGUudXJsKz0oU3QudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gb3x8ay5lcnJvcihyK1wiIHdhcyBub3QgY2FsbGVkXCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPVwianNvblwiLGk9Q1tyXSxDW3JdPWZ1bmN0aW9uKCl7bz1hcmd1bWVudHN9LG4uYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9rKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLEd0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSx5LmNyZWF0ZUhUTUxEb2N1bWVudD0oKFZ0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PVZ0LmNoaWxkTm9kZXMubGVuZ3RoKSxrLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/W106KFwiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwoeS5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1FLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PUUpLG89IW4mJltdLChpPUQuZXhlYyhlKSk/W3QuY3JlYXRlRWxlbWVudChpWzFdKV06KGk9d2UoW2VdLHQsbyksbyYmby5sZW5ndGgmJmsobykucmVtb3ZlKCksay5tZXJnZShbXSxpLmNoaWxkTm9kZXMpKSk7dmFyIHIsaSxvfSxrLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybi0xPHMmJihyPW10KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksMDxhLmxlbmd0aCYmay5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9rKFwiPGRpdj5cIikuYXBwZW5kKGsucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30say5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtrLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksay5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIGsuZ3JlcChrLnRpbWVycyxmdW5jdGlvbihlKXtyZXR1cm4gdD09PWUuZWxlbX0pLmxlbmd0aH0say5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9ay5jc3MoZSxcInBvc2l0aW9uXCIpLGM9ayhlKSxmPXt9O1wic3RhdGljXCI9PT1sJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Yy5vZmZzZXQoKSxvPWsuY3NzKGUsXCJ0b3BcIiksdT1rLmNzcyhlLFwibGVmdFwiKSwoXCJhYnNvbHV0ZVwiPT09bHx8XCJmaXhlZFwiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoXCJhdXRvXCIpPyhhPShyPWMucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksbSh0KSYmKHQ9dC5jYWxsKGUsbixrLmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYoZi50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYoZi5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxmKTpjLmNzcyhmKX19LGsuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihlKXtrLm9mZnNldC5zZXRPZmZzZXQodGhpcyx0LGUpfSk7dmFyIGUsbixyPXRoaXNbMF07cmV0dXJuIHI/ci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6ZS50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OmUubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH06dm9pZCAwfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1rLmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09ay5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPWsoZSkub2Zmc2V0KCkpLnRvcCs9ay5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9ay5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC1rLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1rLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09ay5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fGllfSl9fSksay5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7ay5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gXyh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxrLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7ay5jc3NIb29rc1tuXT16ZSh5LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybiB0PV9lKGUsbiksJGUudGVzdCh0KT9rKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnR9KX0pLGsuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLHMpe2suZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OnMsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24ocixvKXtrLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gXyh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtyZXR1cm4geChlKT8wPT09by5pbmRleE9mKFwib3V0ZXJcIik/ZVtcImlubmVyXCIrYV06ZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09ZS5ub2RlVHlwZT8ocj1lLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChlLmJvZHlbXCJzY3JvbGxcIithXSxyW1wic2Nyb2xsXCIrYV0sZS5ib2R5W1wib2Zmc2V0XCIrYV0scltcIm9mZnNldFwiK2FdLHJbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PW4/ay5jc3MoZSx0LGkpOmsuc3R5bGUoZSx0LG4saSl9LHMsbj9lOnZvaWQgMCxuKX19KX0pLGsuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSxuKXtrLmZuW25dPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA8YXJndW1lbnRzLmxlbmd0aD90aGlzLm9uKG4sbnVsbCxlLHQpOnRoaXMudHJpZ2dlcihuKX19KSxrLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksay5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX19KSxrLnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLG0oZSkpcmV0dXJuIHI9cy5jYWxsKGFyZ3VtZW50cywyKSwoaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQocy5jYWxsKGFyZ3VtZW50cykpKX0pLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8ay5ndWlkKyssaX0say5ob2xkUmVhZHk9ZnVuY3Rpb24oZSl7ZT9rLnJlYWR5V2FpdCsrOmsucmVhZHkoITApfSxrLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxrLnBhcnNlSlNPTj1KU09OLnBhcnNlLGsubm9kZU5hbWU9QSxrLmlzRnVuY3Rpb249bSxrLmlzV2luZG93PXgsay5jYW1lbENhc2U9VixrLnR5cGU9dyxrLm5vdz1EYXRlLm5vdyxrLmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD1rLnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGt9KTt2YXIgUXQ9Qy5qUXVlcnksSnQ9Qy4kO3JldHVybiBrLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PWsmJihDLiQ9SnQpLGUmJkMualF1ZXJ5PT09ayYmKEMualF1ZXJ5PVF0KSxrfSxlfHwoQy5qUXVlcnk9Qy4kPWspLGt9KTsiLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjkuMVxuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxOCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4hZnVuY3Rpb24oKXt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZiYmc2VsZnx8XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbCYmZ2xvYmFsfHx0aGlzfHx7fSxyPW4uXyxlPUFycmF5LnByb3RvdHlwZSxvPU9iamVjdC5wcm90b3R5cGUscz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sP1N5bWJvbC5wcm90b3R5cGU6bnVsbCx1PWUucHVzaCxjPWUuc2xpY2UscD1vLnRvU3RyaW5nLGk9by5oYXNPd25Qcm9wZXJ0eSx0PUFycmF5LmlzQXJyYXksYT1PYmplY3Qua2V5cyxsPU9iamVjdC5jcmVhdGUsZj1mdW5jdGlvbigpe30saD1mdW5jdGlvbihuKXtyZXR1cm4gbiBpbnN0YW5jZW9mIGg/bjp0aGlzIGluc3RhbmNlb2YgaD92b2lkKHRoaXMuX3dyYXBwZWQ9bik6bmV3IGgobil9O1widW5kZWZpbmVkXCI9PXR5cGVvZiBleHBvcnRzfHxleHBvcnRzLm5vZGVUeXBlP24uXz1oOihcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9aCksZXhwb3J0cy5fPWgpLGguVkVSU0lPTj1cIjEuOS4xXCI7dmFyIHYseT1mdW5jdGlvbih1LGksbil7aWYodm9pZCAwPT09aSlyZXR1cm4gdTtzd2l0Y2gobnVsbD09bj8zOm4pe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHUuY2FsbChpLG4pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4scix0KXtyZXR1cm4gdS5jYWxsKGksbixyLHQpfTtjYXNlIDQ6cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3JldHVybiB1LmNhbGwoaSxuLHIsdCxlKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHUuYXBwbHkoaSxhcmd1bWVudHMpfX0sZD1mdW5jdGlvbihuLHIsdCl7cmV0dXJuIGguaXRlcmF0ZWUhPT12P2guaXRlcmF0ZWUobixyKTpudWxsPT1uP2guaWRlbnRpdHk6aC5pc0Z1bmN0aW9uKG4pP3kobixyLHQpOmguaXNPYmplY3QobikmJiFoLmlzQXJyYXkobik/aC5tYXRjaGVyKG4pOmgucHJvcGVydHkobil9O2guaXRlcmF0ZWU9dj1mdW5jdGlvbihuLHIpe3JldHVybiBkKG4sciwxLzApfTt2YXIgZz1mdW5jdGlvbih1LGkpe3JldHVybiBpPW51bGw9PWk/dS5sZW5ndGgtMToraSxmdW5jdGlvbigpe2Zvcih2YXIgbj1NYXRoLm1heChhcmd1bWVudHMubGVuZ3RoLWksMCkscj1BcnJheShuKSx0PTA7dDxuO3QrKylyW3RdPWFyZ3VtZW50c1t0K2ldO3N3aXRjaChpKXtjYXNlIDA6cmV0dXJuIHUuY2FsbCh0aGlzLHIpO2Nhc2UgMTpyZXR1cm4gdS5jYWxsKHRoaXMsYXJndW1lbnRzWzBdLHIpO2Nhc2UgMjpyZXR1cm4gdS5jYWxsKHRoaXMsYXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSxyKX12YXIgZT1BcnJheShpKzEpO2Zvcih0PTA7dDxpO3QrKyllW3RdPWFyZ3VtZW50c1t0XTtyZXR1cm4gZVtpXT1yLHUuYXBwbHkodGhpcyxlKX19LG09ZnVuY3Rpb24obil7aWYoIWguaXNPYmplY3QobikpcmV0dXJue307aWYobClyZXR1cm4gbChuKTtmLnByb3RvdHlwZT1uO3ZhciByPW5ldyBmO3JldHVybiBmLnByb3RvdHlwZT1udWxsLHJ9LGI9ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1uP3ZvaWQgMDpuW3JdfX0saj1mdW5jdGlvbihuLHIpe3JldHVybiBudWxsIT1uJiZpLmNhbGwobixyKX0seD1mdW5jdGlvbihuLHIpe2Zvcih2YXIgdD1yLmxlbmd0aCxlPTA7ZTx0O2UrKyl7aWYobnVsbD09bilyZXR1cm47bj1uW3JbZV1dfXJldHVybiB0P246dm9pZCAwfSxfPU1hdGgucG93KDIsNTMpLTEsQT1iKFwibGVuZ3RoXCIpLHc9ZnVuY3Rpb24obil7dmFyIHI9QShuKTtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgciYmMDw9ciYmcjw9X307aC5lYWNoPWguZm9yRWFjaD1mdW5jdGlvbihuLHIsdCl7dmFyIGUsdTtpZihyPXkocix0KSx3KG4pKWZvcihlPTAsdT1uLmxlbmd0aDtlPHU7ZSsrKXIobltlXSxlLG4pO2Vsc2V7dmFyIGk9aC5rZXlzKG4pO2ZvcihlPTAsdT1pLmxlbmd0aDtlPHU7ZSsrKXIobltpW2VdXSxpW2VdLG4pfXJldHVybiBufSxoLm1hcD1oLmNvbGxlY3Q9ZnVuY3Rpb24obixyLHQpe3I9ZChyLHQpO2Zvcih2YXIgZT0hdyhuKSYmaC5rZXlzKG4pLHU9KGV8fG4pLmxlbmd0aCxpPUFycmF5KHUpLG89MDtvPHU7bysrKXt2YXIgYT1lP2Vbb106bztpW29dPXIoblthXSxhLG4pfXJldHVybiBpfTt2YXIgTz1mdW5jdGlvbihjKXtyZXR1cm4gZnVuY3Rpb24obixyLHQsZSl7dmFyIHU9Mzw9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gZnVuY3Rpb24obixyLHQsZSl7dmFyIHU9IXcobikmJmgua2V5cyhuKSxpPSh1fHxuKS5sZW5ndGgsbz0wPGM/MDppLTE7Zm9yKGV8fCh0PW5bdT91W29dOm9dLG8rPWMpOzA8PW8mJm88aTtvKz1jKXt2YXIgYT11P3Vbb106bzt0PXIodCxuW2FdLGEsbil9cmV0dXJuIHR9KG4seShyLGUsNCksdCx1KX19O2gucmVkdWNlPWguZm9sZGw9aC5pbmplY3Q9TygxKSxoLnJlZHVjZVJpZ2h0PWguZm9sZHI9TygtMSksaC5maW5kPWguZGV0ZWN0PWZ1bmN0aW9uKG4scix0KXt2YXIgZT0odyhuKT9oLmZpbmRJbmRleDpoLmZpbmRLZXkpKG4scix0KTtpZih2b2lkIDAhPT1lJiYtMSE9PWUpcmV0dXJuIG5bZV19LGguZmlsdGVyPWguc2VsZWN0PWZ1bmN0aW9uKG4sZSxyKXt2YXIgdT1bXTtyZXR1cm4gZT1kKGUsciksaC5lYWNoKG4sZnVuY3Rpb24obixyLHQpe2UobixyLHQpJiZ1LnB1c2gobil9KSx1fSxoLnJlamVjdD1mdW5jdGlvbihuLHIsdCl7cmV0dXJuIGguZmlsdGVyKG4saC5uZWdhdGUoZChyKSksdCl9LGguZXZlcnk9aC5hbGw9ZnVuY3Rpb24obixyLHQpe3I9ZChyLHQpO2Zvcih2YXIgZT0hdyhuKSYmaC5rZXlzKG4pLHU9KGV8fG4pLmxlbmd0aCxpPTA7aTx1O2krKyl7dmFyIG89ZT9lW2ldOmk7aWYoIXIobltvXSxvLG4pKXJldHVybiExfXJldHVybiEwfSxoLnNvbWU9aC5hbnk9ZnVuY3Rpb24obixyLHQpe3I9ZChyLHQpO2Zvcih2YXIgZT0hdyhuKSYmaC5rZXlzKG4pLHU9KGV8fG4pLmxlbmd0aCxpPTA7aTx1O2krKyl7dmFyIG89ZT9lW2ldOmk7aWYocihuW29dLG8sbikpcmV0dXJuITB9cmV0dXJuITF9LGguY29udGFpbnM9aC5pbmNsdWRlcz1oLmluY2x1ZGU9ZnVuY3Rpb24obixyLHQsZSl7cmV0dXJuIHcobil8fChuPWgudmFsdWVzKG4pKSwoXCJudW1iZXJcIiE9dHlwZW9mIHR8fGUpJiYodD0wKSwwPD1oLmluZGV4T2YobixyLHQpfSxoLmludm9rZT1nKGZ1bmN0aW9uKG4sdCxlKXt2YXIgdSxpO3JldHVybiBoLmlzRnVuY3Rpb24odCk/aT10OmguaXNBcnJheSh0KSYmKHU9dC5zbGljZSgwLC0xKSx0PXRbdC5sZW5ndGgtMV0pLGgubWFwKG4sZnVuY3Rpb24obil7dmFyIHI9aTtpZighcil7aWYodSYmdS5sZW5ndGgmJihuPXgobix1KSksbnVsbD09bilyZXR1cm47cj1uW3RdfXJldHVybiBudWxsPT1yP3I6ci5hcHBseShuLGUpfSl9KSxoLnBsdWNrPWZ1bmN0aW9uKG4scil7cmV0dXJuIGgubWFwKG4saC5wcm9wZXJ0eShyKSl9LGgud2hlcmU9ZnVuY3Rpb24obixyKXtyZXR1cm4gaC5maWx0ZXIobixoLm1hdGNoZXIocikpfSxoLmZpbmRXaGVyZT1mdW5jdGlvbihuLHIpe3JldHVybiBoLmZpbmQobixoLm1hdGNoZXIocikpfSxoLm1heD1mdW5jdGlvbihuLGUscil7dmFyIHQsdSxpPS0xLzAsbz0tMS8wO2lmKG51bGw9PWV8fFwibnVtYmVyXCI9PXR5cGVvZiBlJiZcIm9iamVjdFwiIT10eXBlb2YgblswXSYmbnVsbCE9bilmb3IodmFyIGE9MCxjPShuPXcobik/bjpoLnZhbHVlcyhuKSkubGVuZ3RoO2E8YzthKyspbnVsbCE9KHQ9blthXSkmJmk8dCYmKGk9dCk7ZWxzZSBlPWQoZSxyKSxoLmVhY2gobixmdW5jdGlvbihuLHIsdCl7dT1lKG4scix0KSwobzx1fHx1PT09LTEvMCYmaT09PS0xLzApJiYoaT1uLG89dSl9KTtyZXR1cm4gaX0saC5taW49ZnVuY3Rpb24obixlLHIpe3ZhciB0LHUsaT0xLzAsbz0xLzA7aWYobnVsbD09ZXx8XCJudW1iZXJcIj09dHlwZW9mIGUmJlwib2JqZWN0XCIhPXR5cGVvZiBuWzBdJiZudWxsIT1uKWZvcih2YXIgYT0wLGM9KG49dyhuKT9uOmgudmFsdWVzKG4pKS5sZW5ndGg7YTxjO2ErKyludWxsIT0odD1uW2FdKSYmdDxpJiYoaT10KTtlbHNlIGU9ZChlLHIpLGguZWFjaChuLGZ1bmN0aW9uKG4scix0KXsoKHU9ZShuLHIsdCkpPG98fHU9PT0xLzAmJmk9PT0xLzApJiYoaT1uLG89dSl9KTtyZXR1cm4gaX0saC5zaHVmZmxlPWZ1bmN0aW9uKG4pe3JldHVybiBoLnNhbXBsZShuLDEvMCl9LGguc2FtcGxlPWZ1bmN0aW9uKG4scix0KXtpZihudWxsPT1yfHx0KXJldHVybiB3KG4pfHwobj1oLnZhbHVlcyhuKSksbltoLnJhbmRvbShuLmxlbmd0aC0xKV07dmFyIGU9dyhuKT9oLmNsb25lKG4pOmgudmFsdWVzKG4pLHU9QShlKTtyPU1hdGgubWF4KE1hdGgubWluKHIsdSksMCk7Zm9yKHZhciBpPXUtMSxvPTA7bzxyO28rKyl7dmFyIGE9aC5yYW5kb20obyxpKSxjPWVbb107ZVtvXT1lW2FdLGVbYV09Y31yZXR1cm4gZS5zbGljZSgwLHIpfSxoLnNvcnRCeT1mdW5jdGlvbihuLGUscil7dmFyIHU9MDtyZXR1cm4gZT1kKGUsciksaC5wbHVjayhoLm1hcChuLGZ1bmN0aW9uKG4scix0KXtyZXR1cm57dmFsdWU6bixpbmRleDp1KyssY3JpdGVyaWE6ZShuLHIsdCl9fSkuc29ydChmdW5jdGlvbihuLHIpe3ZhciB0PW4uY3JpdGVyaWEsZT1yLmNyaXRlcmlhO2lmKHQhPT1lKXtpZihlPHR8fHZvaWQgMD09PXQpcmV0dXJuIDE7aWYodDxlfHx2b2lkIDA9PT1lKXJldHVybi0xfXJldHVybiBuLmluZGV4LXIuaW5kZXh9KSxcInZhbHVlXCIpfTt2YXIgaz1mdW5jdGlvbihvLHIpe3JldHVybiBmdW5jdGlvbihlLHUsbil7dmFyIGk9cj9bW10sW11dOnt9O3JldHVybiB1PWQodSxuKSxoLmVhY2goZSxmdW5jdGlvbihuLHIpe3ZhciB0PXUobixyLGUpO28oaSxuLHQpfSksaX19O2guZ3JvdXBCeT1rKGZ1bmN0aW9uKG4scix0KXtqKG4sdCk/blt0XS5wdXNoKHIpOm5bdF09W3JdfSksaC5pbmRleEJ5PWsoZnVuY3Rpb24obixyLHQpe25bdF09cn0pLGguY291bnRCeT1rKGZ1bmN0aW9uKG4scix0KXtqKG4sdCk/blt0XSsrOm5bdF09MX0pO3ZhciBTPS9bXlxcdWQ4MDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXXxbXFx1ZDgwMC1cXHVkZmZmXS9nO2gudG9BcnJheT1mdW5jdGlvbihuKXtyZXR1cm4gbj9oLmlzQXJyYXkobik/Yy5jYWxsKG4pOmguaXNTdHJpbmcobik/bi5tYXRjaChTKTp3KG4pP2gubWFwKG4saC5pZGVudGl0eSk6aC52YWx1ZXMobik6W119LGguc2l6ZT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09bj8wOncobik/bi5sZW5ndGg6aC5rZXlzKG4pLmxlbmd0aH0saC5wYXJ0aXRpb249ayhmdW5jdGlvbihuLHIsdCl7blt0PzA6MV0ucHVzaChyKX0sITApLGguZmlyc3Q9aC5oZWFkPWgudGFrZT1mdW5jdGlvbihuLHIsdCl7cmV0dXJuIG51bGw9PW58fG4ubGVuZ3RoPDE/bnVsbD09cj92b2lkIDA6W106bnVsbD09cnx8dD9uWzBdOmguaW5pdGlhbChuLG4ubGVuZ3RoLXIpfSxoLmluaXRpYWw9ZnVuY3Rpb24obixyLHQpe3JldHVybiBjLmNhbGwobiwwLE1hdGgubWF4KDAsbi5sZW5ndGgtKG51bGw9PXJ8fHQ/MTpyKSkpfSxoLmxhc3Q9ZnVuY3Rpb24obixyLHQpe3JldHVybiBudWxsPT1ufHxuLmxlbmd0aDwxP251bGw9PXI/dm9pZCAwOltdOm51bGw9PXJ8fHQ/bltuLmxlbmd0aC0xXTpoLnJlc3QobixNYXRoLm1heCgwLG4ubGVuZ3RoLXIpKX0saC5yZXN0PWgudGFpbD1oLmRyb3A9ZnVuY3Rpb24obixyLHQpe3JldHVybiBjLmNhbGwobixudWxsPT1yfHx0PzE6cil9LGguY29tcGFjdD1mdW5jdGlvbihuKXtyZXR1cm4gaC5maWx0ZXIobixCb29sZWFuKX07dmFyIE09ZnVuY3Rpb24obixyLHQsZSl7Zm9yKHZhciB1PShlPWV8fFtdKS5sZW5ndGgsaT0wLG89QShuKTtpPG87aSsrKXt2YXIgYT1uW2ldO2lmKHcoYSkmJihoLmlzQXJyYXkoYSl8fGguaXNBcmd1bWVudHMoYSkpKWlmKHIpZm9yKHZhciBjPTAsbD1hLmxlbmd0aDtjPGw7KWVbdSsrXT1hW2MrK107ZWxzZSBNKGEscix0LGUpLHU9ZS5sZW5ndGg7ZWxzZSB0fHwoZVt1KytdPWEpfXJldHVybiBlfTtoLmZsYXR0ZW49ZnVuY3Rpb24obixyKXtyZXR1cm4gTShuLHIsITEpfSxoLndpdGhvdXQ9ZyhmdW5jdGlvbihuLHIpe3JldHVybiBoLmRpZmZlcmVuY2UobixyKX0pLGgudW5pcT1oLnVuaXF1ZT1mdW5jdGlvbihuLHIsdCxlKXtoLmlzQm9vbGVhbihyKXx8KGU9dCx0PXIscj0hMSksbnVsbCE9dCYmKHQ9ZCh0LGUpKTtmb3IodmFyIHU9W10saT1bXSxvPTAsYT1BKG4pO288YTtvKyspe3ZhciBjPW5bb10sbD10P3QoYyxvLG4pOmM7ciYmIXQ/KG8mJmk9PT1sfHx1LnB1c2goYyksaT1sKTp0P2guY29udGFpbnMoaSxsKXx8KGkucHVzaChsKSx1LnB1c2goYykpOmguY29udGFpbnModSxjKXx8dS5wdXNoKGMpfXJldHVybiB1fSxoLnVuaW9uPWcoZnVuY3Rpb24obil7cmV0dXJuIGgudW5pcShNKG4sITAsITApKX0pLGguaW50ZXJzZWN0aW9uPWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1bXSx0PWFyZ3VtZW50cy5sZW5ndGgsZT0wLHU9QShuKTtlPHU7ZSsrKXt2YXIgaT1uW2VdO2lmKCFoLmNvbnRhaW5zKHIsaSkpe3ZhciBvO2ZvcihvPTE7bzx0JiZoLmNvbnRhaW5zKGFyZ3VtZW50c1tvXSxpKTtvKyspO289PT10JiZyLnB1c2goaSl9fXJldHVybiByfSxoLmRpZmZlcmVuY2U9ZyhmdW5jdGlvbihuLHIpe3JldHVybiByPU0ociwhMCwhMCksaC5maWx0ZXIobixmdW5jdGlvbihuKXtyZXR1cm4haC5jb250YWlucyhyLG4pfSl9KSxoLnVuemlwPWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1uJiZoLm1heChuLEEpLmxlbmd0aHx8MCx0PUFycmF5KHIpLGU9MDtlPHI7ZSsrKXRbZV09aC5wbHVjayhuLGUpO3JldHVybiB0fSxoLnppcD1nKGgudW56aXApLGgub2JqZWN0PWZ1bmN0aW9uKG4scil7Zm9yKHZhciB0PXt9LGU9MCx1PUEobik7ZTx1O2UrKylyP3RbbltlXV09cltlXTp0W25bZV1bMF1dPW5bZV1bMV07cmV0dXJuIHR9O3ZhciBGPWZ1bmN0aW9uKGkpe3JldHVybiBmdW5jdGlvbihuLHIsdCl7cj1kKHIsdCk7Zm9yKHZhciBlPUEobiksdT0wPGk/MDplLTE7MDw9dSYmdTxlO3UrPWkpaWYocihuW3VdLHUsbikpcmV0dXJuIHU7cmV0dXJuLTF9fTtoLmZpbmRJbmRleD1GKDEpLGguZmluZExhc3RJbmRleD1GKC0xKSxoLnNvcnRlZEluZGV4PWZ1bmN0aW9uKG4scix0LGUpe2Zvcih2YXIgdT0odD1kKHQsZSwxKSkociksaT0wLG89QShuKTtpPG87KXt2YXIgYT1NYXRoLmZsb29yKChpK28pLzIpO3QoblthXSk8dT9pPWErMTpvPWF9cmV0dXJuIGl9O3ZhciBFPWZ1bmN0aW9uKGksbyxhKXtyZXR1cm4gZnVuY3Rpb24obixyLHQpe3ZhciBlPTAsdT1BKG4pO2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0KTA8aT9lPTA8PXQ/dDpNYXRoLm1heCh0K3UsZSk6dT0wPD10P01hdGgubWluKHQrMSx1KTp0K3UrMTtlbHNlIGlmKGEmJnQmJnUpcmV0dXJuIG5bdD1hKG4scildPT09cj90Oi0xO2lmKHIhPXIpcmV0dXJuIDA8PSh0PW8oYy5jYWxsKG4sZSx1KSxoLmlzTmFOKSk/dCtlOi0xO2Zvcih0PTA8aT9lOnUtMTswPD10JiZ0PHU7dCs9aSlpZihuW3RdPT09cilyZXR1cm4gdDtyZXR1cm4tMX19O2guaW5kZXhPZj1FKDEsaC5maW5kSW5kZXgsaC5zb3J0ZWRJbmRleCksaC5sYXN0SW5kZXhPZj1FKC0xLGguZmluZExhc3RJbmRleCksaC5yYW5nZT1mdW5jdGlvbihuLHIsdCl7bnVsbD09ciYmKHI9bnx8MCxuPTApLHR8fCh0PXI8bj8tMToxKTtmb3IodmFyIGU9TWF0aC5tYXgoTWF0aC5jZWlsKChyLW4pL3QpLDApLHU9QXJyYXkoZSksaT0wO2k8ZTtpKyssbis9dCl1W2ldPW47cmV0dXJuIHV9LGguY2h1bms9ZnVuY3Rpb24obixyKXtpZihudWxsPT1yfHxyPDEpcmV0dXJuW107Zm9yKHZhciB0PVtdLGU9MCx1PW4ubGVuZ3RoO2U8dTspdC5wdXNoKGMuY2FsbChuLGUsZSs9cikpO3JldHVybiB0fTt2YXIgTj1mdW5jdGlvbihuLHIsdCxlLHUpe2lmKCEoZSBpbnN0YW5jZW9mIHIpKXJldHVybiBuLmFwcGx5KHQsdSk7dmFyIGk9bShuLnByb3RvdHlwZSksbz1uLmFwcGx5KGksdSk7cmV0dXJuIGguaXNPYmplY3Qobyk/bzppfTtoLmJpbmQ9ZyhmdW5jdGlvbihyLHQsZSl7aWYoIWguaXNGdW5jdGlvbihyKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQmluZCBtdXN0IGJlIGNhbGxlZCBvbiBhIGZ1bmN0aW9uXCIpO3ZhciB1PWcoZnVuY3Rpb24obil7cmV0dXJuIE4ocix1LHQsdGhpcyxlLmNvbmNhdChuKSl9KTtyZXR1cm4gdX0pLGgucGFydGlhbD1nKGZ1bmN0aW9uKHUsaSl7dmFyIG89aC5wYXJ0aWFsLnBsYWNlaG9sZGVyLGE9ZnVuY3Rpb24oKXtmb3IodmFyIG49MCxyPWkubGVuZ3RoLHQ9QXJyYXkociksZT0wO2U8cjtlKyspdFtlXT1pW2VdPT09bz9hcmd1bWVudHNbbisrXTppW2VdO2Zvcig7bjxhcmd1bWVudHMubGVuZ3RoOyl0LnB1c2goYXJndW1lbnRzW24rK10pO3JldHVybiBOKHUsYSx0aGlzLHRoaXMsdCl9O3JldHVybiBhfSksKGgucGFydGlhbC5wbGFjZWhvbGRlcj1oKS5iaW5kQWxsPWcoZnVuY3Rpb24obixyKXt2YXIgdD0ocj1NKHIsITEsITEpKS5sZW5ndGg7aWYodDwxKXRocm93IG5ldyBFcnJvcihcImJpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXNcIik7Zm9yKDt0LS07KXt2YXIgZT1yW3RdO25bZV09aC5iaW5kKG5bZV0sbil9fSksaC5tZW1vaXplPWZ1bmN0aW9uKGUsdSl7dmFyIGk9ZnVuY3Rpb24obil7dmFyIHI9aS5jYWNoZSx0PVwiXCIrKHU/dS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6bik7cmV0dXJuIGoocix0KXx8KHJbdF09ZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpLHJbdF19O3JldHVybiBpLmNhY2hlPXt9LGl9LGguZGVsYXk9ZyhmdW5jdGlvbihuLHIsdCl7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gbi5hcHBseShudWxsLHQpfSxyKX0pLGguZGVmZXI9aC5wYXJ0aWFsKGguZGVsYXksaCwxKSxoLnRocm90dGxlPWZ1bmN0aW9uKHQsZSx1KXt2YXIgaSxvLGEsYyxsPTA7dXx8KHU9e30pO3ZhciBmPWZ1bmN0aW9uKCl7bD0hMT09PXUubGVhZGluZz8wOmgubm93KCksaT1udWxsLGM9dC5hcHBseShvLGEpLGl8fChvPWE9bnVsbCl9LG49ZnVuY3Rpb24oKXt2YXIgbj1oLm5vdygpO2x8fCExIT09dS5sZWFkaW5nfHwobD1uKTt2YXIgcj1lLShuLWwpO3JldHVybiBvPXRoaXMsYT1hcmd1bWVudHMscjw9MHx8ZTxyPyhpJiYoY2xlYXJUaW1lb3V0KGkpLGk9bnVsbCksbD1uLGM9dC5hcHBseShvLGEpLGl8fChvPWE9bnVsbCkpOml8fCExPT09dS50cmFpbGluZ3x8KGk9c2V0VGltZW91dChmLHIpKSxjfTtyZXR1cm4gbi5jYW5jZWw9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoaSksbD0wLGk9bz1hPW51bGx9LG59LGguZGVib3VuY2U9ZnVuY3Rpb24odCxlLHUpe3ZhciBpLG8sYT1mdW5jdGlvbihuLHIpe2k9bnVsbCxyJiYobz10LmFwcGx5KG4scikpfSxuPWcoZnVuY3Rpb24obil7aWYoaSYmY2xlYXJUaW1lb3V0KGkpLHUpe3ZhciByPSFpO2k9c2V0VGltZW91dChhLGUpLHImJihvPXQuYXBwbHkodGhpcyxuKSl9ZWxzZSBpPWguZGVsYXkoYSxlLHRoaXMsbik7cmV0dXJuIG99KTtyZXR1cm4gbi5jYW5jZWw9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoaSksaT1udWxsfSxufSxoLndyYXA9ZnVuY3Rpb24obixyKXtyZXR1cm4gaC5wYXJ0aWFsKHIsbil9LGgubmVnYXRlPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiFuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LGguY29tcG9zZT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cyxlPXQubGVuZ3RoLTE7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciBuPWUscj10W2VdLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtuLS07KXI9dFtuXS5jYWxsKHRoaXMscik7cmV0dXJuIHJ9fSxoLmFmdGVyPWZ1bmN0aW9uKG4scil7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoLS1uPDEpcmV0dXJuIHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0saC5iZWZvcmU9ZnVuY3Rpb24obixyKXt2YXIgdDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gMDwtLW4mJih0PXIuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxuPD0xJiYocj1udWxsKSx0fX0saC5vbmNlPWgucGFydGlhbChoLmJlZm9yZSwyKSxoLnJlc3RBcmd1bWVudHM9Zzt2YXIgST0he3RvU3RyaW5nOm51bGx9LnByb3BlcnR5SXNFbnVtZXJhYmxlKFwidG9TdHJpbmdcIiksVD1bXCJ2YWx1ZU9mXCIsXCJpc1Byb3RvdHlwZU9mXCIsXCJ0b1N0cmluZ1wiLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixcImhhc093blByb3BlcnR5XCIsXCJ0b0xvY2FsZVN0cmluZ1wiXSxCPWZ1bmN0aW9uKG4scil7dmFyIHQ9VC5sZW5ndGgsZT1uLmNvbnN0cnVjdG9yLHU9aC5pc0Z1bmN0aW9uKGUpJiZlLnByb3RvdHlwZXx8byxpPVwiY29uc3RydWN0b3JcIjtmb3IoaihuLGkpJiYhaC5jb250YWlucyhyLGkpJiZyLnB1c2goaSk7dC0tOykoaT1UW3RdKWluIG4mJm5baV0hPT11W2ldJiYhaC5jb250YWlucyhyLGkpJiZyLnB1c2goaSl9O2gua2V5cz1mdW5jdGlvbihuKXtpZighaC5pc09iamVjdChuKSlyZXR1cm5bXTtpZihhKXJldHVybiBhKG4pO3ZhciByPVtdO2Zvcih2YXIgdCBpbiBuKWoobix0KSYmci5wdXNoKHQpO3JldHVybiBJJiZCKG4scikscn0saC5hbGxLZXlzPWZ1bmN0aW9uKG4pe2lmKCFoLmlzT2JqZWN0KG4pKXJldHVybltdO3ZhciByPVtdO2Zvcih2YXIgdCBpbiBuKXIucHVzaCh0KTtyZXR1cm4gSSYmQihuLHIpLHJ9LGgudmFsdWVzPWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1oLmtleXMobiksdD1yLmxlbmd0aCxlPUFycmF5KHQpLHU9MDt1PHQ7dSsrKWVbdV09bltyW3VdXTtyZXR1cm4gZX0saC5tYXBPYmplY3Q9ZnVuY3Rpb24obixyLHQpe3I9ZChyLHQpO2Zvcih2YXIgZT1oLmtleXMobiksdT1lLmxlbmd0aCxpPXt9LG89MDtvPHU7bysrKXt2YXIgYT1lW29dO2lbYV09cihuW2FdLGEsbil9cmV0dXJuIGl9LGgucGFpcnM9ZnVuY3Rpb24obil7Zm9yKHZhciByPWgua2V5cyhuKSx0PXIubGVuZ3RoLGU9QXJyYXkodCksdT0wO3U8dDt1KyspZVt1XT1bclt1XSxuW3JbdV1dXTtyZXR1cm4gZX0saC5pbnZlcnQ9ZnVuY3Rpb24obil7Zm9yKHZhciByPXt9LHQ9aC5rZXlzKG4pLGU9MCx1PXQubGVuZ3RoO2U8dTtlKyspcltuW3RbZV1dXT10W2VdO3JldHVybiByfSxoLmZ1bmN0aW9ucz1oLm1ldGhvZHM9ZnVuY3Rpb24obil7dmFyIHI9W107Zm9yKHZhciB0IGluIG4paC5pc0Z1bmN0aW9uKG5bdF0pJiZyLnB1c2godCk7cmV0dXJuIHIuc29ydCgpfTt2YXIgUj1mdW5jdGlvbihjLGwpe3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO2lmKGwmJihuPU9iamVjdChuKSkscjwyfHxudWxsPT1uKXJldHVybiBuO2Zvcih2YXIgdD0xO3Q8cjt0KyspZm9yKHZhciBlPWFyZ3VtZW50c1t0XSx1PWMoZSksaT11Lmxlbmd0aCxvPTA7bzxpO28rKyl7dmFyIGE9dVtvXTtsJiZ2b2lkIDAhPT1uW2FdfHwoblthXT1lW2FdKX1yZXR1cm4gbn19O2guZXh0ZW5kPVIoaC5hbGxLZXlzKSxoLmV4dGVuZE93bj1oLmFzc2lnbj1SKGgua2V5cyksaC5maW5kS2V5PWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGUsdT1oLmtleXMobiksaT0wLG89dS5sZW5ndGg7aTxvO2krKylpZihyKG5bZT11W2ldXSxlLG4pKXJldHVybiBlfTt2YXIgcSxLLHo9ZnVuY3Rpb24obixyLHQpe3JldHVybiByIGluIHR9O2gucGljaz1nKGZ1bmN0aW9uKG4scil7dmFyIHQ9e30sZT1yWzBdO2lmKG51bGw9PW4pcmV0dXJuIHQ7aC5pc0Z1bmN0aW9uKGUpPygxPHIubGVuZ3RoJiYoZT15KGUsclsxXSkpLHI9aC5hbGxLZXlzKG4pKTooZT16LHI9TShyLCExLCExKSxuPU9iamVjdChuKSk7Zm9yKHZhciB1PTAsaT1yLmxlbmd0aDt1PGk7dSsrKXt2YXIgbz1yW3VdLGE9bltvXTtlKGEsbyxuKSYmKHRbb109YSl9cmV0dXJuIHR9KSxoLm9taXQ9ZyhmdW5jdGlvbihuLHQpe3ZhciByLGU9dFswXTtyZXR1cm4gaC5pc0Z1bmN0aW9uKGUpPyhlPWgubmVnYXRlKGUpLDE8dC5sZW5ndGgmJihyPXRbMV0pKToodD1oLm1hcChNKHQsITEsITEpLFN0cmluZyksZT1mdW5jdGlvbihuLHIpe3JldHVybiFoLmNvbnRhaW5zKHQscil9KSxoLnBpY2sobixlLHIpfSksaC5kZWZhdWx0cz1SKGguYWxsS2V5cywhMCksaC5jcmVhdGU9ZnVuY3Rpb24obixyKXt2YXIgdD1tKG4pO3JldHVybiByJiZoLmV4dGVuZE93bih0LHIpLHR9LGguY2xvbmU9ZnVuY3Rpb24obil7cmV0dXJuIGguaXNPYmplY3Qobik/aC5pc0FycmF5KG4pP24uc2xpY2UoKTpoLmV4dGVuZCh7fSxuKTpufSxoLnRhcD1mdW5jdGlvbihuLHIpe3JldHVybiByKG4pLG59LGguaXNNYXRjaD1mdW5jdGlvbihuLHIpe3ZhciB0PWgua2V5cyhyKSxlPXQubGVuZ3RoO2lmKG51bGw9PW4pcmV0dXJuIWU7Zm9yKHZhciB1PU9iamVjdChuKSxpPTA7aTxlO2krKyl7dmFyIG89dFtpXTtpZihyW29dIT09dVtvXXx8IShvIGluIHUpKXJldHVybiExfXJldHVybiEwfSxxPWZ1bmN0aW9uKG4scix0LGUpe2lmKG49PT1yKXJldHVybiAwIT09bnx8MS9uPT0xL3I7aWYobnVsbD09bnx8bnVsbD09cilyZXR1cm4hMTtpZihuIT1uKXJldHVybiByIT1yO3ZhciB1PXR5cGVvZiBuO3JldHVybihcImZ1bmN0aW9uXCI9PT11fHxcIm9iamVjdFwiPT09dXx8XCJvYmplY3RcIj09dHlwZW9mIHIpJiZLKG4scix0LGUpfSxLPWZ1bmN0aW9uKG4scix0LGUpe24gaW5zdGFuY2VvZiBoJiYobj1uLl93cmFwcGVkKSxyIGluc3RhbmNlb2YgaCYmKHI9ci5fd3JhcHBlZCk7dmFyIHU9cC5jYWxsKG4pO2lmKHUhPT1wLmNhbGwocikpcmV0dXJuITE7c3dpdGNoKHUpe2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOmNhc2VcIltvYmplY3QgU3RyaW5nXVwiOnJldHVyblwiXCIrbj09XCJcIityO2Nhc2VcIltvYmplY3QgTnVtYmVyXVwiOnJldHVybituIT0rbj8rciE9K3I6MD09K24/MS8rbj09MS9yOituPT0rcjtjYXNlXCJbb2JqZWN0IERhdGVdXCI6Y2FzZVwiW29iamVjdCBCb29sZWFuXVwiOnJldHVybituPT0rcjtjYXNlXCJbb2JqZWN0IFN5bWJvbF1cIjpyZXR1cm4gcy52YWx1ZU9mLmNhbGwobik9PT1zLnZhbHVlT2YuY2FsbChyKX12YXIgaT1cIltvYmplY3QgQXJyYXldXCI9PT11O2lmKCFpKXtpZihcIm9iamVjdFwiIT10eXBlb2Ygbnx8XCJvYmplY3RcIiE9dHlwZW9mIHIpcmV0dXJuITE7dmFyIG89bi5jb25zdHJ1Y3RvcixhPXIuY29uc3RydWN0b3I7aWYobyE9PWEmJiEoaC5pc0Z1bmN0aW9uKG8pJiZvIGluc3RhbmNlb2YgbyYmaC5pc0Z1bmN0aW9uKGEpJiZhIGluc3RhbmNlb2YgYSkmJlwiY29uc3RydWN0b3JcImluIG4mJlwiY29uc3RydWN0b3JcImluIHIpcmV0dXJuITF9ZT1lfHxbXTtmb3IodmFyIGM9KHQ9dHx8W10pLmxlbmd0aDtjLS07KWlmKHRbY109PT1uKXJldHVybiBlW2NdPT09cjtpZih0LnB1c2gobiksZS5wdXNoKHIpLGkpe2lmKChjPW4ubGVuZ3RoKSE9PXIubGVuZ3RoKXJldHVybiExO2Zvcig7Yy0tOylpZighcShuW2NdLHJbY10sdCxlKSlyZXR1cm4hMX1lbHNle3ZhciBsLGY9aC5rZXlzKG4pO2lmKGM9Zi5sZW5ndGgsaC5rZXlzKHIpLmxlbmd0aCE9PWMpcmV0dXJuITE7Zm9yKDtjLS07KWlmKGw9ZltjXSwhaihyLGwpfHwhcShuW2xdLHJbbF0sdCxlKSlyZXR1cm4hMX1yZXR1cm4gdC5wb3AoKSxlLnBvcCgpLCEwfSxoLmlzRXF1YWw9ZnVuY3Rpb24obixyKXtyZXR1cm4gcShuLHIpfSxoLmlzRW1wdHk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW58fCh3KG4pJiYoaC5pc0FycmF5KG4pfHxoLmlzU3RyaW5nKG4pfHxoLmlzQXJndW1lbnRzKG4pKT8wPT09bi5sZW5ndGg6MD09PWgua2V5cyhuKS5sZW5ndGgpfSxoLmlzRWxlbWVudD1mdW5jdGlvbihuKXtyZXR1cm4hKCFufHwxIT09bi5ub2RlVHlwZSl9LGguaXNBcnJheT10fHxmdW5jdGlvbihuKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1wLmNhbGwobil9LGguaXNPYmplY3Q9ZnVuY3Rpb24obil7dmFyIHI9dHlwZW9mIG47cmV0dXJuXCJmdW5jdGlvblwiPT09cnx8XCJvYmplY3RcIj09PXImJiEhbn0saC5lYWNoKFtcIkFyZ3VtZW50c1wiLFwiRnVuY3Rpb25cIixcIlN0cmluZ1wiLFwiTnVtYmVyXCIsXCJEYXRlXCIsXCJSZWdFeHBcIixcIkVycm9yXCIsXCJTeW1ib2xcIixcIk1hcFwiLFwiV2Vha01hcFwiLFwiU2V0XCIsXCJXZWFrU2V0XCJdLGZ1bmN0aW9uKHIpe2hbXCJpc1wiK3JdPWZ1bmN0aW9uKG4pe3JldHVybiBwLmNhbGwobik9PT1cIltvYmplY3QgXCIrcitcIl1cIn19KSxoLmlzQXJndW1lbnRzKGFyZ3VtZW50cyl8fChoLmlzQXJndW1lbnRzPWZ1bmN0aW9uKG4pe3JldHVybiBqKG4sXCJjYWxsZWVcIil9KTt2YXIgRD1uLmRvY3VtZW50JiZuLmRvY3VtZW50LmNoaWxkTm9kZXM7XCJmdW5jdGlvblwiIT10eXBlb2YvLi8mJlwib2JqZWN0XCIhPXR5cGVvZiBJbnQ4QXJyYXkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIEQmJihoLmlzRnVuY3Rpb249ZnVuY3Rpb24obil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbnx8ITF9KSxoLmlzRmluaXRlPWZ1bmN0aW9uKG4pe3JldHVybiFoLmlzU3ltYm9sKG4pJiZpc0Zpbml0ZShuKSYmIWlzTmFOKHBhcnNlRmxvYXQobikpfSxoLmlzTmFOPWZ1bmN0aW9uKG4pe3JldHVybiBoLmlzTnVtYmVyKG4pJiZpc05hTihuKX0saC5pc0Jvb2xlYW49ZnVuY3Rpb24obil7cmV0dXJuITA9PT1ufHwhMT09PW58fFwiW29iamVjdCBCb29sZWFuXVwiPT09cC5jYWxsKG4pfSxoLmlzTnVsbD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09PW59LGguaXNVbmRlZmluZWQ9ZnVuY3Rpb24obil7cmV0dXJuIHZvaWQgMD09PW59LGguaGFzPWZ1bmN0aW9uKG4scil7aWYoIWguaXNBcnJheShyKSlyZXR1cm4gaihuLHIpO2Zvcih2YXIgdD1yLmxlbmd0aCxlPTA7ZTx0O2UrKyl7dmFyIHU9cltlXTtpZihudWxsPT1ufHwhaS5jYWxsKG4sdSkpcmV0dXJuITE7bj1uW3VdfXJldHVybiEhdH0saC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uXz1yLHRoaXN9LGguaWRlbnRpdHk9ZnVuY3Rpb24obil7cmV0dXJuIG59LGguY29uc3RhbnQ9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG59fSxoLm5vb3A9ZnVuY3Rpb24oKXt9LGgucHJvcGVydHk9ZnVuY3Rpb24ocil7cmV0dXJuIGguaXNBcnJheShyKT9mdW5jdGlvbihuKXtyZXR1cm4geChuLHIpfTpiKHIpfSxoLnByb3BlcnR5T2Y9ZnVuY3Rpb24ocil7cmV0dXJuIG51bGw9PXI/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKG4pe3JldHVybiBoLmlzQXJyYXkobik/eChyLG4pOnJbbl19fSxoLm1hdGNoZXI9aC5tYXRjaGVzPWZ1bmN0aW9uKHIpe3JldHVybiByPWguZXh0ZW5kT3duKHt9LHIpLGZ1bmN0aW9uKG4pe3JldHVybiBoLmlzTWF0Y2gobixyKX19LGgudGltZXM9ZnVuY3Rpb24obixyLHQpe3ZhciBlPUFycmF5KE1hdGgubWF4KDAsbikpO3I9eShyLHQsMSk7Zm9yKHZhciB1PTA7dTxuO3UrKyllW3VdPXIodSk7cmV0dXJuIGV9LGgucmFuZG9tPWZ1bmN0aW9uKG4scil7cmV0dXJuIG51bGw9PXImJihyPW4sbj0wKSxuK01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooci1uKzEpKX0saC5ub3c9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9O3ZhciBMPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiN4Mjc7XCIsXCJgXCI6XCImI3g2MDtcIn0sUD1oLmludmVydChMKSxXPWZ1bmN0aW9uKHIpe3ZhciB0PWZ1bmN0aW9uKG4pe3JldHVybiByW25dfSxuPVwiKD86XCIraC5rZXlzKHIpLmpvaW4oXCJ8XCIpK1wiKVwiLGU9UmVnRXhwKG4pLHU9UmVnRXhwKG4sXCJnXCIpO3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbj1udWxsPT1uP1wiXCI6XCJcIituLGUudGVzdChuKT9uLnJlcGxhY2UodSx0KTpufX07aC5lc2NhcGU9VyhMKSxoLnVuZXNjYXBlPVcoUCksaC5yZXN1bHQ9ZnVuY3Rpb24obixyLHQpe2guaXNBcnJheShyKXx8KHI9W3JdKTt2YXIgZT1yLmxlbmd0aDtpZighZSlyZXR1cm4gaC5pc0Z1bmN0aW9uKHQpP3QuY2FsbChuKTp0O2Zvcih2YXIgdT0wO3U8ZTt1Kyspe3ZhciBpPW51bGw9PW4/dm9pZCAwOm5bclt1XV07dm9pZCAwPT09aSYmKGk9dCx1PWUpLG49aC5pc0Z1bmN0aW9uKGkpP2kuY2FsbChuKTppfXJldHVybiBufTt2YXIgQz0wO2gudW5pcXVlSWQ9ZnVuY3Rpb24obil7dmFyIHI9KytDK1wiXCI7cmV0dXJuIG4/bityOnJ9LGgudGVtcGxhdGVTZXR0aW5ncz17ZXZhbHVhdGU6LzwlKFtcXHNcXFNdKz8pJT4vZyxpbnRlcnBvbGF0ZTovPCU9KFtcXHNcXFNdKz8pJT4vZyxlc2NhcGU6LzwlLShbXFxzXFxTXSs/KSU+L2d9O3ZhciBKPS8oLileLyxVPXtcIidcIjpcIidcIixcIlxcXFxcIjpcIlxcXFxcIixcIlxcclwiOlwiclwiLFwiXFxuXCI6XCJuXCIsXCJcXHUyMDI4XCI6XCJ1MjAyOFwiLFwiXFx1MjAyOVwiOlwidTIwMjlcIn0sVj0vXFxcXHwnfFxccnxcXG58XFx1MjAyOHxcXHUyMDI5L2csJD1mdW5jdGlvbihuKXtyZXR1cm5cIlxcXFxcIitVW25dfTtoLnRlbXBsYXRlPWZ1bmN0aW9uKGksbixyKXshbiYmciYmKG49ciksbj1oLmRlZmF1bHRzKHt9LG4saC50ZW1wbGF0ZVNldHRpbmdzKTt2YXIgdCxlPVJlZ0V4cChbKG4uZXNjYXBlfHxKKS5zb3VyY2UsKG4uaW50ZXJwb2xhdGV8fEopLnNvdXJjZSwobi5ldmFsdWF0ZXx8Sikuc291cmNlXS5qb2luKFwifFwiKStcInwkXCIsXCJnXCIpLG89MCxhPVwiX19wKz0nXCI7aS5yZXBsYWNlKGUsZnVuY3Rpb24obixyLHQsZSx1KXtyZXR1cm4gYSs9aS5zbGljZShvLHUpLnJlcGxhY2UoViwkKSxvPXUrbi5sZW5ndGgscj9hKz1cIicrXFxuKChfX3Q9KFwiK3IrXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI6dD9hKz1cIicrXFxuKChfX3Q9KFwiK3QrXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjplJiYoYSs9XCInO1xcblwiK2UrXCJcXG5fX3ArPSdcIiksbn0pLGErPVwiJztcXG5cIixuLnZhcmlhYmxlfHwoYT1cIndpdGgob2JqfHx7fSl7XFxuXCIrYStcIn1cXG5cIiksYT1cInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIitcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIrYStcInJldHVybiBfX3A7XFxuXCI7dHJ5e3Q9bmV3IEZ1bmN0aW9uKG4udmFyaWFibGV8fFwib2JqXCIsXCJfXCIsYSl9Y2F0Y2gobil7dGhyb3cgbi5zb3VyY2U9YSxufXZhciB1PWZ1bmN0aW9uKG4pe3JldHVybiB0LmNhbGwodGhpcyxuLGgpfSxjPW4udmFyaWFibGV8fFwib2JqXCI7cmV0dXJuIHUuc291cmNlPVwiZnVuY3Rpb24oXCIrYytcIil7XFxuXCIrYStcIn1cIix1fSxoLmNoYWluPWZ1bmN0aW9uKG4pe3ZhciByPWgobik7cmV0dXJuIHIuX2NoYWluPSEwLHJ9O3ZhciBHPWZ1bmN0aW9uKG4scil7cmV0dXJuIG4uX2NoYWluP2gocikuY2hhaW4oKTpyfTtoLm1peGluPWZ1bmN0aW9uKHQpe3JldHVybiBoLmVhY2goaC5mdW5jdGlvbnModCksZnVuY3Rpb24obil7dmFyIHI9aFtuXT10W25dO2gucHJvdG90eXBlW25dPWZ1bmN0aW9uKCl7dmFyIG49W3RoaXMuX3dyYXBwZWRdO3JldHVybiB1LmFwcGx5KG4sYXJndW1lbnRzKSxHKHRoaXMsci5hcHBseShoLG4pKX19KSxofSxoLm1peGluKGgpLGguZWFjaChbXCJwb3BcIixcInB1c2hcIixcInJldmVyc2VcIixcInNoaWZ0XCIsXCJzb3J0XCIsXCJzcGxpY2VcIixcInVuc2hpZnRcIl0sZnVuY3Rpb24ocil7dmFyIHQ9ZVtyXTtoLnByb3RvdHlwZVtyXT1mdW5jdGlvbigpe3ZhciBuPXRoaXMuX3dyYXBwZWQ7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpLFwic2hpZnRcIiE9PXImJlwic3BsaWNlXCIhPT1yfHwwIT09bi5sZW5ndGh8fGRlbGV0ZSBuWzBdLEcodGhpcyxuKX19KSxoLmVhY2goW1wiY29uY2F0XCIsXCJqb2luXCIsXCJzbGljZVwiXSxmdW5jdGlvbihuKXt2YXIgcj1lW25dO2gucHJvdG90eXBlW25dPWZ1bmN0aW9uKCl7cmV0dXJuIEcodGhpcyxyLmFwcGx5KHRoaXMuX3dyYXBwZWQsYXJndW1lbnRzKSl9fSksaC5wcm90b3R5cGUudmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd3JhcHBlZH0saC5wcm90b3R5cGUudmFsdWVPZj1oLnByb3RvdHlwZS50b0pTT049aC5wcm90b3R5cGUudmFsdWUsaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gU3RyaW5nKHRoaXMuX3dyYXBwZWQpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcInVuZGVyc2NvcmVcIixbXSxmdW5jdGlvbigpe3JldHVybiBofSl9KCk7IiwiLyohXG4gKiBqUXVlcnkgRm9ybSBQbHVnaW5cbiAqIHZlcnNpb246IDMuNTEuMC0yMDE0LjA2LjIwXG4gKiBSZXF1aXJlcyBqUXVlcnkgdjEuNSBvciBsYXRlclxuICogQ29weXJpZ2h0IChjKSAyMDE0IE0uIEFsc3VwXG4gKiBFeGFtcGxlcyBhbmQgZG9jdW1lbnRhdGlvbiBhdDogaHR0cDovL21hbHN1cC5jb20vanF1ZXJ5L2Zvcm0vXG4gKiBQcm9qZWN0IHJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYWxzdXAvZm9ybVxuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFsc3VwL2Zvcm0jY29weXJpZ2h0LWFuZC1saWNlbnNlXG4gKi9cbiFmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKTplKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnk/alF1ZXJ5OndpbmRvdy5aZXB0byl9KGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7dmFyIHI9dC5kYXRhO3QuaXNEZWZhdWx0UHJldmVudGVkKCl8fCh0LnByZXZlbnREZWZhdWx0KCksZSh0LnRhcmdldCkuYWpheFN1Ym1pdChyKSl9ZnVuY3Rpb24gcih0KXt2YXIgcj10LnRhcmdldCxhPWUocik7aWYoIWEuaXMoXCJbdHlwZT1zdWJtaXRdLFt0eXBlPWltYWdlXVwiKSl7dmFyIG49YS5jbG9zZXN0KFwiW3R5cGU9c3VibWl0XVwiKTtpZigwPT09bi5sZW5ndGgpcmV0dXJuO3I9blswXX12YXIgaT10aGlzO2lmKGkuY2xrPXIsXCJpbWFnZVwiPT1yLnR5cGUpaWYodm9pZCAwIT09dC5vZmZzZXRYKWkuY2xrX3g9dC5vZmZzZXRYLGkuY2xrX3k9dC5vZmZzZXRZO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5mbi5vZmZzZXQpe3ZhciBvPWEub2Zmc2V0KCk7aS5jbGtfeD10LnBhZ2VYLW8ubGVmdCxpLmNsa195PXQucGFnZVktby50b3B9ZWxzZSBpLmNsa194PXQucGFnZVgtci5vZmZzZXRMZWZ0LGkuY2xrX3k9dC5wYWdlWS1yLm9mZnNldFRvcDtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5jbGs9aS5jbGtfeD1pLmNsa195PW51bGx9LDEwMCl9ZnVuY3Rpb24gYSgpe2lmKGUuZm4uYWpheFN1Ym1pdC5kZWJ1Zyl7dmFyIHQ9XCJbanF1ZXJ5LmZvcm1dIFwiK0FycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoYXJndW1lbnRzLFwiXCIpO3dpbmRvdy5jb25zb2xlJiZ3aW5kb3cuY29uc29sZS5sb2c/d2luZG93LmNvbnNvbGUubG9nKHQpOndpbmRvdy5vcGVyYSYmd2luZG93Lm9wZXJhLnBvc3RFcnJvciYmd2luZG93Lm9wZXJhLnBvc3RFcnJvcih0KX19dmFyIG49e307bi5maWxlYXBpPXZvaWQgMCE9PWUoXCI8aW5wdXQgdHlwZT0nZmlsZScvPlwiKS5nZXQoMCkuZmlsZXMsbi5mb3JtZGF0YT12b2lkIDAhPT13aW5kb3cuRm9ybURhdGE7dmFyIGk9ISFlLmZuLnByb3A7ZS5mbi5hdHRyMj1mdW5jdGlvbigpe2lmKCFpKXJldHVybiB0aGlzLmF0dHIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBlPXRoaXMucHJvcC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGUmJmUuanF1ZXJ5fHxcInN0cmluZ1wiPT10eXBlb2YgZT9lOnRoaXMuYXR0ci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZm4uYWpheFN1Ym1pdD1mdW5jdGlvbih0KXtmdW5jdGlvbiByKHIpe3ZhciBhLG4saT1lLnBhcmFtKHIsdC50cmFkaXRpb25hbCkuc3BsaXQoXCImXCIpLG89aS5sZW5ndGgscz1bXTtmb3IoYT0wO28+YTthKyspaVthXT1pW2FdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSxuPWlbYV0uc3BsaXQoXCI9XCIpLHMucHVzaChbZGVjb2RlVVJJQ29tcG9uZW50KG5bMF0pLGRlY29kZVVSSUNvbXBvbmVudChuWzFdKV0pO3JldHVybiBzfWZ1bmN0aW9uIG8oYSl7Zm9yKHZhciBuPW5ldyBGb3JtRGF0YSxpPTA7aTxhLmxlbmd0aDtpKyspbi5hcHBlbmQoYVtpXS5uYW1lLGFbaV0udmFsdWUpO2lmKHQuZXh0cmFEYXRhKXt2YXIgbz1yKHQuZXh0cmFEYXRhKTtmb3IoaT0wO2k8by5sZW5ndGg7aSsrKW9baV0mJm4uYXBwZW5kKG9baV1bMF0sb1tpXVsxXSl9dC5kYXRhPW51bGw7dmFyIHM9ZS5leHRlbmQoITAse30sZS5hamF4U2V0dGluZ3MsdCx7Y29udGVudFR5cGU6ITEscHJvY2Vzc0RhdGE6ITEsY2FjaGU6ITEsdHlwZTp1fHxcIlBPU1RcIn0pO3QudXBsb2FkUHJvZ3Jlc3MmJihzLnhocj1mdW5jdGlvbigpe3ZhciByPWUuYWpheFNldHRpbmdzLnhocigpO3JldHVybiByLnVwbG9hZCYmci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsZnVuY3Rpb24oZSl7dmFyIHI9MCxhPWUubG9hZGVkfHxlLnBvc2l0aW9uLG49ZS50b3RhbDtlLmxlbmd0aENvbXB1dGFibGUmJihyPU1hdGguY2VpbChhL24qMTAwKSksdC51cGxvYWRQcm9ncmVzcyhlLGEsbixyKX0sITEpLHJ9KSxzLmRhdGE9bnVsbDt2YXIgYz1zLmJlZm9yZVNlbmQ7cmV0dXJuIHMuYmVmb3JlU2VuZD1mdW5jdGlvbihlLHIpe3IuZGF0YT10LmZvcm1EYXRhP3QuZm9ybURhdGE6bixjJiZjLmNhbGwodGhpcyxlLHIpfSxlLmFqYXgocyl9ZnVuY3Rpb24gcyhyKXtmdW5jdGlvbiBuKGUpe3ZhciB0PW51bGw7dHJ5e2UuY29udGVudFdpbmRvdyYmKHQ9ZS5jb250ZW50V2luZG93LmRvY3VtZW50KX1jYXRjaChyKXthKFwiY2Fubm90IGdldCBpZnJhbWUuY29udGVudFdpbmRvdyBkb2N1bWVudDogXCIrcil9aWYodClyZXR1cm4gdDt0cnl7dD1lLmNvbnRlbnREb2N1bWVudD9lLmNvbnRlbnREb2N1bWVudDplLmRvY3VtZW50fWNhdGNoKHIpe2EoXCJjYW5ub3QgZ2V0IGlmcmFtZS5jb250ZW50RG9jdW1lbnQ6IFwiK3IpLHQ9ZS5kb2N1bWVudH1yZXR1cm4gdH1mdW5jdGlvbiBvKCl7ZnVuY3Rpb24gdCgpe3RyeXt2YXIgZT1uKGcpLnJlYWR5U3RhdGU7YShcInN0YXRlID0gXCIrZSksZSYmXCJ1bmluaXRpYWxpemVkXCI9PWUudG9Mb3dlckNhc2UoKSYmc2V0VGltZW91dCh0LDUwKX1jYXRjaChyKXthKFwiU2VydmVyIGFib3J0OiBcIixyLFwiIChcIixyLm5hbWUsXCIpXCIpLHMoayksaiYmY2xlYXJUaW1lb3V0KGopLGo9dm9pZCAwfX12YXIgcj1mLmF0dHIyKFwidGFyZ2V0XCIpLGk9Zi5hdHRyMihcImFjdGlvblwiKSxvPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLGM9Zi5hdHRyKFwiZW5jdHlwZVwiKXx8Zi5hdHRyKFwiZW5jb2RpbmdcIil8fG87dy5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIixwKSwoIXV8fC9wb3N0L2kudGVzdCh1KSkmJncuc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsXCJQT1NUXCIpLGkhPW0udXJsJiZ3LnNldEF0dHJpYnV0ZShcImFjdGlvblwiLG0udXJsKSxtLnNraXBFbmNvZGluZ092ZXJyaWRlfHx1JiYhL3Bvc3QvaS50ZXN0KHUpfHxmLmF0dHIoe2VuY29kaW5nOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLGVuY3R5cGU6XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJ9KSxtLnRpbWVvdXQmJihqPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtUPSEwLHMoRCl9LG0udGltZW91dCkpO3ZhciBsPVtdO3RyeXtpZihtLmV4dHJhRGF0YSlmb3IodmFyIGQgaW4gbS5leHRyYURhdGEpbS5leHRyYURhdGEuaGFzT3duUHJvcGVydHkoZCkmJmwucHVzaChlLmlzUGxhaW5PYmplY3QobS5leHRyYURhdGFbZF0pJiZtLmV4dHJhRGF0YVtkXS5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikmJm0uZXh0cmFEYXRhW2RdLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/ZSgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJyttLmV4dHJhRGF0YVtkXS5uYW1lKydcIj4nKS52YWwobS5leHRyYURhdGFbZF0udmFsdWUpLmFwcGVuZFRvKHcpWzBdOmUoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicrZCsnXCI+JykudmFsKG0uZXh0cmFEYXRhW2RdKS5hcHBlbmRUbyh3KVswXSk7bS5pZnJhbWVUYXJnZXR8fHYuYXBwZW5kVG8oXCJib2R5XCIpLGcuYXR0YWNoRXZlbnQ/Zy5hdHRhY2hFdmVudChcIm9ubG9hZFwiLHMpOmcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixzLCExKSxzZXRUaW1lb3V0KHQsMTUpO3RyeXt3LnN1Ym1pdCgpfWNhdGNoKGgpe3ZhciB4PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLnN1Ym1pdDt4LmFwcGx5KHcpfX1maW5hbGx5e3cuc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsaSksdy5zZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIsYykscj93LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLHIpOmYucmVtb3ZlQXR0cihcInRhcmdldFwiKSxlKGwpLnJlbW92ZSgpfX1mdW5jdGlvbiBzKHQpe2lmKCF4LmFib3J0ZWQmJiFGKXtpZihNPW4oZyksTXx8KGEoXCJjYW5ub3QgYWNjZXNzIHJlc3BvbnNlIGRvY3VtZW50XCIpLHQ9ayksdD09PUQmJngpcmV0dXJuIHguYWJvcnQoXCJ0aW1lb3V0XCIpLHZvaWQgUy5yZWplY3QoeCxcInRpbWVvdXRcIik7aWYodD09ayYmeClyZXR1cm4geC5hYm9ydChcInNlcnZlciBhYm9ydFwiKSx2b2lkIFMucmVqZWN0KHgsXCJlcnJvclwiLFwic2VydmVyIGFib3J0XCIpO2lmKE0mJk0ubG9jYXRpb24uaHJlZiE9bS5pZnJhbWVTcmN8fFQpe2cuZGV0YWNoRXZlbnQ/Zy5kZXRhY2hFdmVudChcIm9ubG9hZFwiLHMpOmcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixzLCExKTt2YXIgcixpPVwic3VjY2Vzc1wiO3RyeXtpZihUKXRocm93XCJ0aW1lb3V0XCI7dmFyIG89XCJ4bWxcIj09bS5kYXRhVHlwZXx8TS5YTUxEb2N1bWVudHx8ZS5pc1hNTERvYyhNKTtpZihhKFwiaXNYbWw9XCIrbyksIW8mJndpbmRvdy5vcGVyYSYmKG51bGw9PT1NLmJvZHl8fCFNLmJvZHkuaW5uZXJIVE1MKSYmLS1PKXJldHVybiBhKFwicmVxdWVpbmcgb25Mb2FkIGNhbGxiYWNrLCBET00gbm90IGF2YWlsYWJsZVwiKSx2b2lkIHNldFRpbWVvdXQocywyNTApO3ZhciB1PU0uYm9keT9NLmJvZHk6TS5kb2N1bWVudEVsZW1lbnQ7eC5yZXNwb25zZVRleHQ9dT91LmlubmVySFRNTDpudWxsLHgucmVzcG9uc2VYTUw9TS5YTUxEb2N1bWVudD9NLlhNTERvY3VtZW50Ok0sbyYmKG0uZGF0YVR5cGU9XCJ4bWxcIikseC5nZXRSZXNwb25zZUhlYWRlcj1mdW5jdGlvbihlKXt2YXIgdD17XCJjb250ZW50LXR5cGVcIjptLmRhdGFUeXBlfTtyZXR1cm4gdFtlLnRvTG93ZXJDYXNlKCldfSx1JiYoeC5zdGF0dXM9TnVtYmVyKHUuZ2V0QXR0cmlidXRlKFwic3RhdHVzXCIpKXx8eC5zdGF0dXMseC5zdGF0dXNUZXh0PXUuZ2V0QXR0cmlidXRlKFwic3RhdHVzVGV4dFwiKXx8eC5zdGF0dXNUZXh0KTt2YXIgYz0obS5kYXRhVHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKSxsPS8oanNvbnxzY3JpcHR8dGV4dCkvLnRlc3QoYyk7aWYobHx8bS50ZXh0YXJlYSl7dmFyIGY9TS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRleHRhcmVhXCIpWzBdO2lmKGYpeC5yZXNwb25zZVRleHQ9Zi52YWx1ZSx4LnN0YXR1cz1OdW1iZXIoZi5nZXRBdHRyaWJ1dGUoXCJzdGF0dXNcIikpfHx4LnN0YXR1cyx4LnN0YXR1c1RleHQ9Zi5nZXRBdHRyaWJ1dGUoXCJzdGF0dXNUZXh0XCIpfHx4LnN0YXR1c1RleHQ7ZWxzZSBpZihsKXt2YXIgcD1NLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJlXCIpWzBdLGg9TS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07cD94LnJlc3BvbnNlVGV4dD1wLnRleHRDb250ZW50P3AudGV4dENvbnRlbnQ6cC5pbm5lclRleHQ6aCYmKHgucmVzcG9uc2VUZXh0PWgudGV4dENvbnRlbnQ/aC50ZXh0Q29udGVudDpoLmlubmVyVGV4dCl9fWVsc2VcInhtbFwiPT1jJiYheC5yZXNwb25zZVhNTCYmeC5yZXNwb25zZVRleHQmJih4LnJlc3BvbnNlWE1MPVgoeC5yZXNwb25zZVRleHQpKTt0cnl7RT1fKHgsYyxtKX1jYXRjaCh5KXtpPVwicGFyc2VyZXJyb3JcIix4LmVycm9yPXI9eXx8aX19Y2F0Y2goeSl7YShcImVycm9yIGNhdWdodDogXCIseSksaT1cImVycm9yXCIseC5lcnJvcj1yPXl8fGl9eC5hYm9ydGVkJiYoYShcInVwbG9hZCBhYm9ydGVkXCIpLGk9bnVsbCkseC5zdGF0dXMmJihpPXguc3RhdHVzPj0yMDAmJnguc3RhdHVzPDMwMHx8MzA0PT09eC5zdGF0dXM/XCJzdWNjZXNzXCI6XCJlcnJvclwiKSxcInN1Y2Nlc3NcIj09PWk/KG0uc3VjY2VzcyYmbS5zdWNjZXNzLmNhbGwobS5jb250ZXh0LEUsXCJzdWNjZXNzXCIseCksUy5yZXNvbHZlKHgucmVzcG9uc2VUZXh0LFwic3VjY2Vzc1wiLHgpLGQmJmUuZXZlbnQudHJpZ2dlcihcImFqYXhTdWNjZXNzXCIsW3gsbV0pKTppJiYodm9pZCAwPT09ciYmKHI9eC5zdGF0dXNUZXh0KSxtLmVycm9yJiZtLmVycm9yLmNhbGwobS5jb250ZXh0LHgsaSxyKSxTLnJlamVjdCh4LFwiZXJyb3JcIixyKSxkJiZlLmV2ZW50LnRyaWdnZXIoXCJhamF4RXJyb3JcIixbeCxtLHJdKSksZCYmZS5ldmVudC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3gsbV0pLGQmJiEtLWUuYWN0aXZlJiZlLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSxtLmNvbXBsZXRlJiZtLmNvbXBsZXRlLmNhbGwobS5jb250ZXh0LHgsaSksRj0hMCxtLnRpbWVvdXQmJmNsZWFyVGltZW91dChqKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bS5pZnJhbWVUYXJnZXQ/di5hdHRyKFwic3JjXCIsbS5pZnJhbWVTcmMpOnYucmVtb3ZlKCkseC5yZXNwb25zZVhNTD1udWxsfSwxMDApfX19dmFyIGMsbCxtLGQscCx2LGcseCx5LGIsVCxqLHc9ZlswXSxTPWUuRGVmZXJyZWQoKTtpZihTLmFib3J0PWZ1bmN0aW9uKGUpe3guYWJvcnQoZSl9LHIpZm9yKGw9MDtsPGgubGVuZ3RoO2wrKyljPWUoaFtsXSksaT9jLnByb3AoXCJkaXNhYmxlZFwiLCExKTpjLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtpZihtPWUuZXh0ZW5kKCEwLHt9LGUuYWpheFNldHRpbmdzLHQpLG0uY29udGV4dD1tLmNvbnRleHR8fG0scD1cImpxRm9ybUlPXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksbS5pZnJhbWVUYXJnZXQ/KHY9ZShtLmlmcmFtZVRhcmdldCksYj12LmF0dHIyKFwibmFtZVwiKSxiP3A9Yjp2LmF0dHIyKFwibmFtZVwiLHApKToodj1lKCc8aWZyYW1lIG5hbWU9XCInK3ArJ1wiIHNyYz1cIicrbS5pZnJhbWVTcmMrJ1wiIC8+Jyksdi5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6XCItMTAwMHB4XCIsbGVmdDpcIi0xMDAwcHhcIn0pKSxnPXZbMF0seD17YWJvcnRlZDowLHJlc3BvbnNlVGV4dDpudWxsLHJlc3BvbnNlWE1MOm51bGwsc3RhdHVzOjAsc3RhdHVzVGV4dDpcIm4vYVwiLGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe30sZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oKXt9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oKXt9LGFib3J0OmZ1bmN0aW9uKHQpe3ZhciByPVwidGltZW91dFwiPT09dD9cInRpbWVvdXRcIjpcImFib3J0ZWRcIjthKFwiYWJvcnRpbmcgdXBsb2FkLi4uIFwiK3IpLHRoaXMuYWJvcnRlZD0xO3RyeXtnLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQmJmcuY29udGVudFdpbmRvdy5kb2N1bWVudC5leGVjQ29tbWFuZChcIlN0b3BcIil9Y2F0Y2gobil7fXYuYXR0cihcInNyY1wiLG0uaWZyYW1lU3JjKSx4LmVycm9yPXIsbS5lcnJvciYmbS5lcnJvci5jYWxsKG0uY29udGV4dCx4LHIsdCksZCYmZS5ldmVudC50cmlnZ2VyKFwiYWpheEVycm9yXCIsW3gsbSxyXSksbS5jb21wbGV0ZSYmbS5jb21wbGV0ZS5jYWxsKG0uY29udGV4dCx4LHIpfX0sZD1tLmdsb2JhbCxkJiYwPT09ZS5hY3RpdmUrKyYmZS5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLGQmJmUuZXZlbnQudHJpZ2dlcihcImFqYXhTZW5kXCIsW3gsbV0pLG0uYmVmb3JlU2VuZCYmbS5iZWZvcmVTZW5kLmNhbGwobS5jb250ZXh0LHgsbSk9PT0hMSlyZXR1cm4gbS5nbG9iYWwmJmUuYWN0aXZlLS0sUy5yZWplY3QoKSxTO2lmKHguYWJvcnRlZClyZXR1cm4gUy5yZWplY3QoKSxTO3k9dy5jbGsseSYmKGI9eS5uYW1lLGImJiF5LmRpc2FibGVkJiYobS5leHRyYURhdGE9bS5leHRyYURhdGF8fHt9LG0uZXh0cmFEYXRhW2JdPXkudmFsdWUsXCJpbWFnZVwiPT15LnR5cGUmJihtLmV4dHJhRGF0YVtiK1wiLnhcIl09dy5jbGtfeCxtLmV4dHJhRGF0YVtiK1wiLnlcIl09dy5jbGtfeSkpKTt2YXIgRD0xLGs9MixBPWUoXCJtZXRhW25hbWU9Y3NyZi10b2tlbl1cIikuYXR0cihcImNvbnRlbnRcIiksTD1lKFwibWV0YVtuYW1lPWNzcmYtcGFyYW1dXCIpLmF0dHIoXCJjb250ZW50XCIpO0wmJkEmJihtLmV4dHJhRGF0YT1tLmV4dHJhRGF0YXx8e30sbS5leHRyYURhdGFbTF09QSksbS5mb3JjZVN5bmM/bygpOnNldFRpbWVvdXQobywxMCk7dmFyIEUsTSxGLE89NTAsWD1lLnBhcnNlWE1MfHxmdW5jdGlvbihlLHQpe3JldHVybiB3aW5kb3cuQWN0aXZlWE9iamVjdD8odD1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksdC5hc3luYz1cImZhbHNlXCIsdC5sb2FkWE1MKGUpKTp0PShuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpLHQmJnQuZG9jdW1lbnRFbGVtZW50JiZcInBhcnNlcmVycm9yXCIhPXQuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lP3Q6bnVsbH0sQz1lLnBhcnNlSlNPTnx8ZnVuY3Rpb24oZSl7cmV0dXJuIHdpbmRvdy5ldmFsKFwiKFwiK2UrXCIpXCIpfSxfPWZ1bmN0aW9uKHQscixhKXt2YXIgbj10LmdldFJlc3BvbnNlSGVhZGVyKFwiY29udGVudC10eXBlXCIpfHxcIlwiLGk9XCJ4bWxcIj09PXJ8fCFyJiZuLmluZGV4T2YoXCJ4bWxcIik+PTAsbz1pP3QucmVzcG9uc2VYTUw6dC5yZXNwb25zZVRleHQ7cmV0dXJuIGkmJlwicGFyc2VyZXJyb3JcIj09PW8uZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lJiZlLmVycm9yJiZlLmVycm9yKFwicGFyc2VyZXJyb3JcIiksYSYmYS5kYXRhRmlsdGVyJiYobz1hLmRhdGFGaWx0ZXIobyxyKSksXCJzdHJpbmdcIj09dHlwZW9mIG8mJihcImpzb25cIj09PXJ8fCFyJiZuLmluZGV4T2YoXCJqc29uXCIpPj0wP289QyhvKTooXCJzY3JpcHRcIj09PXJ8fCFyJiZuLmluZGV4T2YoXCJqYXZhc2NyaXB0XCIpPj0wKSYmZS5nbG9iYWxFdmFsKG8pKSxvfTtyZXR1cm4gU31pZighdGhpcy5sZW5ndGgpcmV0dXJuIGEoXCJhamF4U3VibWl0OiBza2lwcGluZyBzdWJtaXQgcHJvY2VzcyAtIG5vIGVsZW1lbnQgc2VsZWN0ZWRcIiksdGhpczt2YXIgdSxjLGwsZj10aGlzO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dD17c3VjY2Vzczp0fTp2b2lkIDA9PT10JiYodD17fSksdT10LnR5cGV8fHRoaXMuYXR0cjIoXCJtZXRob2RcIiksYz10LnVybHx8dGhpcy5hdHRyMihcImFjdGlvblwiKSxsPVwic3RyaW5nXCI9PXR5cGVvZiBjP2UudHJpbShjKTpcIlwiLGw9bHx8d2luZG93LmxvY2F0aW9uLmhyZWZ8fFwiXCIsbCYmKGw9KGwubWF0Y2goL14oW14jXSspLyl8fFtdKVsxXSksdD1lLmV4dGVuZCghMCx7dXJsOmwsc3VjY2VzczplLmFqYXhTZXR0aW5ncy5zdWNjZXNzLHR5cGU6dXx8ZS5hamF4U2V0dGluZ3MudHlwZSxpZnJhbWVTcmM6L15odHRwcy9pLnRlc3Qod2luZG93LmxvY2F0aW9uLmhyZWZ8fFwiXCIpP1wiamF2YXNjcmlwdDpmYWxzZVwiOlwiYWJvdXQ6YmxhbmtcIn0sdCk7dmFyIG09e307aWYodGhpcy50cmlnZ2VyKFwiZm9ybS1wcmUtc2VyaWFsaXplXCIsW3RoaXMsdCxtXSksbS52ZXRvKXJldHVybiBhKFwiYWpheFN1Ym1pdDogc3VibWl0IHZldG9lZCB2aWEgZm9ybS1wcmUtc2VyaWFsaXplIHRyaWdnZXJcIiksdGhpcztpZih0LmJlZm9yZVNlcmlhbGl6ZSYmdC5iZWZvcmVTZXJpYWxpemUodGhpcyx0KT09PSExKXJldHVybiBhKFwiYWpheFN1Ym1pdDogc3VibWl0IGFib3J0ZWQgdmlhIGJlZm9yZVNlcmlhbGl6ZSBjYWxsYmFja1wiKSx0aGlzO3ZhciBkPXQudHJhZGl0aW9uYWw7dm9pZCAwPT09ZCYmKGQ9ZS5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpO3ZhciBwLGg9W10sdj10aGlzLmZvcm1Ub0FycmF5KHQuc2VtYW50aWMsaCk7aWYodC5kYXRhJiYodC5leHRyYURhdGE9dC5kYXRhLHA9ZS5wYXJhbSh0LmRhdGEsZCkpLHQuYmVmb3JlU3VibWl0JiZ0LmJlZm9yZVN1Ym1pdCh2LHRoaXMsdCk9PT0hMSlyZXR1cm4gYShcImFqYXhTdWJtaXQ6IHN1Ym1pdCBhYm9ydGVkIHZpYSBiZWZvcmVTdWJtaXQgY2FsbGJhY2tcIiksdGhpcztpZih0aGlzLnRyaWdnZXIoXCJmb3JtLXN1Ym1pdC12YWxpZGF0ZVwiLFt2LHRoaXMsdCxtXSksbS52ZXRvKXJldHVybiBhKFwiYWpheFN1Ym1pdDogc3VibWl0IHZldG9lZCB2aWEgZm9ybS1zdWJtaXQtdmFsaWRhdGUgdHJpZ2dlclwiKSx0aGlzO3ZhciBnPWUucGFyYW0odixkKTtwJiYoZz1nP2crXCImXCIrcDpwKSxcIkdFVFwiPT10LnR5cGUudG9VcHBlckNhc2UoKT8odC51cmwrPSh0LnVybC5pbmRleE9mKFwiP1wiKT49MD9cIiZcIjpcIj9cIikrZyx0LmRhdGE9bnVsbCk6dC5kYXRhPWc7dmFyIHg9W107aWYodC5yZXNldEZvcm0mJngucHVzaChmdW5jdGlvbigpe2YucmVzZXRGb3JtKCl9KSx0LmNsZWFyRm9ybSYmeC5wdXNoKGZ1bmN0aW9uKCl7Zi5jbGVhckZvcm0odC5pbmNsdWRlSGlkZGVuKX0pLCF0LmRhdGFUeXBlJiZ0LnRhcmdldCl7dmFyIHk9dC5zdWNjZXNzfHxmdW5jdGlvbigpe307eC5wdXNoKGZ1bmN0aW9uKHIpe3ZhciBhPXQucmVwbGFjZVRhcmdldD9cInJlcGxhY2VXaXRoXCI6XCJodG1sXCI7ZSh0LnRhcmdldClbYV0ocikuZWFjaCh5LGFyZ3VtZW50cyl9KX1lbHNlIHQuc3VjY2VzcyYmeC5wdXNoKHQuc3VjY2Vzcyk7aWYodC5zdWNjZXNzPWZ1bmN0aW9uKGUscixhKXtmb3IodmFyIG49dC5jb250ZXh0fHx0aGlzLGk9MCxvPXgubGVuZ3RoO28+aTtpKyspeFtpXS5hcHBseShuLFtlLHIsYXx8ZixmXSl9LHQuZXJyb3Ipe3ZhciBiPXQuZXJyb3I7dC5lcnJvcj1mdW5jdGlvbihlLHIsYSl7dmFyIG49dC5jb250ZXh0fHx0aGlzO2IuYXBwbHkobixbZSxyLGEsZl0pfX1pZih0LmNvbXBsZXRlKXt2YXIgVD10LmNvbXBsZXRlO3QuY29tcGxldGU9ZnVuY3Rpb24oZSxyKXt2YXIgYT10LmNvbnRleHR8fHRoaXM7VC5hcHBseShhLFtlLHIsZl0pfX12YXIgaj1lKFwiaW5wdXRbdHlwZT1maWxlXTplbmFibGVkXCIsdGhpcykuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuXCJcIiE9PWUodGhpcykudmFsKCl9KSx3PWoubGVuZ3RoPjAsUz1cIm11bHRpcGFydC9mb3JtLWRhdGFcIixEPWYuYXR0cihcImVuY3R5cGVcIik9PVN8fGYuYXR0cihcImVuY29kaW5nXCIpPT1TLGs9bi5maWxlYXBpJiZuLmZvcm1kYXRhO2EoXCJmaWxlQVBJIDpcIitrKTt2YXIgQSxMPSh3fHxEKSYmIWs7dC5pZnJhbWUhPT0hMSYmKHQuaWZyYW1lfHxMKT90LmNsb3NlS2VlcEFsaXZlP2UuZ2V0KHQuY2xvc2VLZWVwQWxpdmUsZnVuY3Rpb24oKXtBPXModil9KTpBPXModik6QT0od3x8RCkmJms/byh2KTplLmFqYXgodCksZi5yZW1vdmVEYXRhKFwianF4aHJcIikuZGF0YShcImpxeGhyXCIsQSk7Zm9yKHZhciBFPTA7RTxoLmxlbmd0aDtFKyspaFtFXT1udWxsO3JldHVybiB0aGlzLnRyaWdnZXIoXCJmb3JtLXN1Ym1pdC1ub3RpZnlcIixbdGhpcyx0XSksdGhpc30sZS5mbi5hamF4Rm9ybT1mdW5jdGlvbihuKXtpZihuPW58fHt9LG4uZGVsZWdhdGlvbj1uLmRlbGVnYXRpb24mJmUuaXNGdW5jdGlvbihlLmZuLm9uKSwhbi5kZWxlZ2F0aW9uJiYwPT09dGhpcy5sZW5ndGgpe3ZhciBpPXtzOnRoaXMuc2VsZWN0b3IsYzp0aGlzLmNvbnRleHR9O3JldHVybiFlLmlzUmVhZHkmJmkucz8oYShcIkRPTSBub3QgcmVhZHksIHF1ZXVpbmcgYWpheEZvcm1cIiksZShmdW5jdGlvbigpe2UoaS5zLGkuYykuYWpheEZvcm0obil9KSx0aGlzKTooYShcInRlcm1pbmF0aW5nOyB6ZXJvIGVsZW1lbnRzIGZvdW5kIGJ5IHNlbGVjdG9yXCIrKGUuaXNSZWFkeT9cIlwiOlwiIChET00gbm90IHJlYWR5KVwiKSksdGhpcyl9cmV0dXJuIG4uZGVsZWdhdGlvbj8oZShkb2N1bWVudCkub2ZmKFwic3VibWl0LmZvcm0tcGx1Z2luXCIsdGhpcy5zZWxlY3Rvcix0KS5vZmYoXCJjbGljay5mb3JtLXBsdWdpblwiLHRoaXMuc2VsZWN0b3Iscikub24oXCJzdWJtaXQuZm9ybS1wbHVnaW5cIix0aGlzLnNlbGVjdG9yLG4sdCkub24oXCJjbGljay5mb3JtLXBsdWdpblwiLHRoaXMuc2VsZWN0b3IsbixyKSx0aGlzKTp0aGlzLmFqYXhGb3JtVW5iaW5kKCkuYmluZChcInN1Ym1pdC5mb3JtLXBsdWdpblwiLG4sdCkuYmluZChcImNsaWNrLmZvcm0tcGx1Z2luXCIsbixyKX0sZS5mbi5hamF4Rm9ybVVuYmluZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnVuYmluZChcInN1Ym1pdC5mb3JtLXBsdWdpbiBjbGljay5mb3JtLXBsdWdpblwiKX0sZS5mbi5mb3JtVG9BcnJheT1mdW5jdGlvbih0LHIpe3ZhciBhPVtdO2lmKDA9PT10aGlzLmxlbmd0aClyZXR1cm4gYTt2YXIgaSxvPXRoaXNbMF0scz10aGlzLmF0dHIoXCJpZFwiKSx1PXQ/by5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIik6by5lbGVtZW50cztpZih1JiYhL01TSUUgWzY3OF0vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJih1PWUodSkuZ2V0KCkpLHMmJihpPWUoJzppbnB1dFtmb3JtPVwiJytzKydcIl0nKS5nZXQoKSxpLmxlbmd0aCYmKHU9KHV8fFtdKS5jb25jYXQoaSkpKSwhdXx8IXUubGVuZ3RoKXJldHVybiBhO3ZhciBjLGwsZixtLGQscCxoO2ZvcihjPTAscD11Lmxlbmd0aDtwPmM7YysrKWlmKGQ9dVtjXSxmPWQubmFtZSxmJiYhZC5kaXNhYmxlZClpZih0JiZvLmNsayYmXCJpbWFnZVwiPT1kLnR5cGUpby5jbGs9PWQmJihhLnB1c2goe25hbWU6Zix2YWx1ZTplKGQpLnZhbCgpLHR5cGU6ZC50eXBlfSksYS5wdXNoKHtuYW1lOmYrXCIueFwiLHZhbHVlOm8uY2xrX3h9LHtuYW1lOmYrXCIueVwiLHZhbHVlOm8uY2xrX3l9KSk7ZWxzZSBpZihtPWUuZmllbGRWYWx1ZShkLCEwKSxtJiZtLmNvbnN0cnVjdG9yPT1BcnJheSlmb3IociYmci5wdXNoKGQpLGw9MCxoPW0ubGVuZ3RoO2g+bDtsKyspYS5wdXNoKHtuYW1lOmYsdmFsdWU6bVtsXX0pO2Vsc2UgaWYobi5maWxlYXBpJiZcImZpbGVcIj09ZC50eXBlKXtyJiZyLnB1c2goZCk7dmFyIHY9ZC5maWxlcztpZih2Lmxlbmd0aClmb3IobD0wO2w8di5sZW5ndGg7bCsrKWEucHVzaCh7bmFtZTpmLHZhbHVlOnZbbF0sdHlwZTpkLnR5cGV9KTtlbHNlIGEucHVzaCh7bmFtZTpmLHZhbHVlOlwiXCIsdHlwZTpkLnR5cGV9KX1lbHNlIG51bGwhPT1tJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbSYmKHImJnIucHVzaChkKSxhLnB1c2goe25hbWU6Zix2YWx1ZTptLHR5cGU6ZC50eXBlLHJlcXVpcmVkOmQucmVxdWlyZWR9KSk7aWYoIXQmJm8uY2xrKXt2YXIgZz1lKG8uY2xrKSx4PWdbMF07Zj14Lm5hbWUsZiYmIXguZGlzYWJsZWQmJlwiaW1hZ2VcIj09eC50eXBlJiYoYS5wdXNoKHtuYW1lOmYsdmFsdWU6Zy52YWwoKX0pLGEucHVzaCh7bmFtZTpmK1wiLnhcIix2YWx1ZTpvLmNsa194fSx7bmFtZTpmK1wiLnlcIix2YWx1ZTpvLmNsa195fSkpfXJldHVybiBhfSxlLmZuLmZvcm1TZXJpYWxpemU9ZnVuY3Rpb24odCl7cmV0dXJuIGUucGFyYW0odGhpcy5mb3JtVG9BcnJheSh0KSl9LGUuZm4uZmllbGRTZXJpYWxpemU9ZnVuY3Rpb24odCl7dmFyIHI9W107cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBhPXRoaXMubmFtZTtpZihhKXt2YXIgbj1lLmZpZWxkVmFsdWUodGhpcyx0KTtpZihuJiZuLmNvbnN0cnVjdG9yPT1BcnJheSlmb3IodmFyIGk9MCxvPW4ubGVuZ3RoO28+aTtpKyspci5wdXNoKHtuYW1lOmEsdmFsdWU6bltpXX0pO2Vsc2UgbnVsbCE9PW4mJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuJiZyLnB1c2goe25hbWU6dGhpcy5uYW1lLHZhbHVlOm59KX19KSxlLnBhcmFtKHIpfSxlLmZuLmZpZWxkVmFsdWU9ZnVuY3Rpb24odCl7Zm9yKHZhciByPVtdLGE9MCxuPXRoaXMubGVuZ3RoO24+YTthKyspe3ZhciBpPXRoaXNbYV0sbz1lLmZpZWxkVmFsdWUoaSx0KTtudWxsPT09b3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIG98fG8uY29uc3RydWN0b3I9PUFycmF5JiYhby5sZW5ndGh8fChvLmNvbnN0cnVjdG9yPT1BcnJheT9lLm1lcmdlKHIsbyk6ci5wdXNoKG8pKX1yZXR1cm4gcn0sZS5maWVsZFZhbHVlPWZ1bmN0aW9uKHQscil7dmFyIGE9dC5uYW1lLG49dC50eXBlLGk9dC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7aWYodm9pZCAwPT09ciYmKHI9ITApLHImJighYXx8dC5kaXNhYmxlZHx8XCJyZXNldFwiPT1ufHxcImJ1dHRvblwiPT1ufHwoXCJjaGVja2JveFwiPT1ufHxcInJhZGlvXCI9PW4pJiYhdC5jaGVja2VkfHwoXCJzdWJtaXRcIj09bnx8XCJpbWFnZVwiPT1uKSYmdC5mb3JtJiZ0LmZvcm0uY2xrIT10fHxcInNlbGVjdFwiPT1pJiYtMT09dC5zZWxlY3RlZEluZGV4KSlyZXR1cm4gbnVsbDtpZihcInNlbGVjdFwiPT1pKXt2YXIgbz10LnNlbGVjdGVkSW5kZXg7aWYoMD5vKXJldHVybiBudWxsO2Zvcih2YXIgcz1bXSx1PXQub3B0aW9ucyxjPVwic2VsZWN0LW9uZVwiPT1uLGw9Yz9vKzE6dS5sZW5ndGgsZj1jP286MDtsPmY7ZisrKXt2YXIgbT11W2ZdO2lmKG0uc2VsZWN0ZWQpe3ZhciBkPW0udmFsdWU7aWYoZHx8KGQ9bS5hdHRyaWJ1dGVzJiZtLmF0dHJpYnV0ZXMudmFsdWUmJiFtLmF0dHJpYnV0ZXMudmFsdWUuc3BlY2lmaWVkP20udGV4dDptLnZhbHVlKSxjKXJldHVybiBkO3MucHVzaChkKX19cmV0dXJuIHN9cmV0dXJuIGUodCkudmFsKCl9LGUuZm4uY2xlYXJGb3JtPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtlKFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhXCIsdGhpcykuY2xlYXJGaWVsZHModCl9KX0sZS5mbi5jbGVhckZpZWxkcz1lLmZuLmNsZWFySW5wdXRzPWZ1bmN0aW9uKHQpe3ZhciByPS9eKD86Y29sb3J8ZGF0ZXxkYXRldGltZXxlbWFpbHxtb250aHxudW1iZXJ8cGFzc3dvcmR8cmFuZ2V8c2VhcmNofHRlbHx0ZXh0fHRpbWV8dXJsfHdlZWspJC9pO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGUsbj10aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtyLnRlc3QoYSl8fFwidGV4dGFyZWFcIj09bj90aGlzLnZhbHVlPVwiXCI6XCJjaGVja2JveFwiPT1hfHxcInJhZGlvXCI9PWE/dGhpcy5jaGVja2VkPSExOlwic2VsZWN0XCI9PW4/dGhpcy5zZWxlY3RlZEluZGV4PS0xOlwiZmlsZVwiPT1hPy9NU0lFLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpP2UodGhpcykucmVwbGFjZVdpdGgoZSh0aGlzKS5jbG9uZSghMCkpOmUodGhpcykudmFsKFwiXCIpOnQmJih0PT09ITAmJi9oaWRkZW4vLnRlc3QoYSl8fFwic3RyaW5nXCI9PXR5cGVvZiB0JiZlKHRoaXMpLmlzKHQpKSYmKHRoaXMudmFsdWU9XCJcIil9KX0sZS5mbi5yZXNldEZvcm09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7KFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMucmVzZXR8fFwib2JqZWN0XCI9PXR5cGVvZiB0aGlzLnJlc2V0JiYhdGhpcy5yZXNldC5ub2RlVHlwZSkmJnRoaXMucmVzZXQoKX0pfSxlLmZuLmVuYWJsZT1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITApLHRoaXMuZWFjaChmdW5jdGlvbigpe3RoaXMuZGlzYWJsZWQ9IWV9KX0sZS5mbi5zZWxlY3RlZD1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITApLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciByPXRoaXMudHlwZTtpZihcImNoZWNrYm94XCI9PXJ8fFwicmFkaW9cIj09cil0aGlzLmNoZWNrZWQ9dDtlbHNlIGlmKFwib3B0aW9uXCI9PXRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgYT1lKHRoaXMpLnBhcmVudChcInNlbGVjdFwiKTt0JiZhWzBdJiZcInNlbGVjdC1vbmVcIj09YVswXS50eXBlJiZhLmZpbmQoXCJvcHRpb25cIikuc2VsZWN0ZWQoITEpLHRoaXMuc2VsZWN0ZWQ9dH19KX0sZS5mbi5hamF4U3VibWl0LmRlYnVnPSExfSk7XG4iLCIvKipcbiAqIGpRdWVyeS5xdWVyeSAtIFF1ZXJ5IFN0cmluZyBNb2RpZmljYXRpb24gYW5kIENyZWF0aW9uIGZvciBqUXVlcnlcbiAqIFdyaXR0ZW4gYnkgQmxhaXIgTWl0Y2hlbG1vcmUgKGJsYWlyIERPVCBtaXRjaGVsbW9yZSBBVCBnbWFpbCBET1QgY29tKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIFdURlBMIChodHRwOi8vc2FtLnpveS5vcmcvd3RmcGwvKS5cbiAqIERhdGU6IDIwMDkvOC8xM1xuICpcbiAqIEBhdXRob3IgQmxhaXIgTWl0Y2hlbG1vcmVcbiAqIEB2ZXJzaW9uIDIuMi4zXG4gKlxuICoqL1xubmV3IGZ1bmN0aW9uKHNldHRpbmdzKSB7IFxuICAvLyBWYXJpb3VzIFNldHRpbmdzXG4gIHZhciAkc2VwYXJhdG9yID0gc2V0dGluZ3Muc2VwYXJhdG9yIHx8ICcmJztcbiAgdmFyICRzcGFjZXMgPSBzZXR0aW5ncy5zcGFjZXMgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuICB2YXIgJHN1ZmZpeCA9IHNldHRpbmdzLnN1ZmZpeCA9PT0gZmFsc2UgPyAnJyA6ICdbXSc7XG4gIHZhciAkcHJlZml4ID0gc2V0dGluZ3MucHJlZml4ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcbiAgdmFyICRoYXNoID0gJHByZWZpeCA/IHNldHRpbmdzLmhhc2ggPT09IHRydWUgPyBcIiNcIiA6IFwiP1wiIDogXCJcIjtcbiAgdmFyICRudW1iZXJzID0gc2V0dGluZ3MubnVtYmVycyA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG5cbiAgalF1ZXJ5LnF1ZXJ5ID0gbmV3IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpcyA9IGZ1bmN0aW9uKG8sIHQpIHtcbiAgICAgIHJldHVybiBvICE9IHVuZGVmaW5lZCAmJiBvICE9PSBudWxsICYmICghIXQgPyBvLmNvbnN0cnVjdG9yID09IHQgOiB0cnVlKTtcbiAgICB9O1xuICAgIHZhciBwYXJzZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIHZhciBtLCByeCA9IC9cXFsoW15bXSopXFxdL2csIG1hdGNoID0gL14oW15bXSspKFxcWy4qXFxdKT8kLy5leGVjKHBhdGgpLCBiYXNlID0gbWF0Y2hbMV0sIHRva2VucyA9IFtdO1xuICAgICAgd2hpbGUgKG0gPSByeC5leGVjKG1hdGNoWzJdKSkgdG9rZW5zLnB1c2gobVsxXSk7XG4gICAgICByZXR1cm4gW2Jhc2UsIHRva2Vuc107XG4gICAgfTtcbiAgICB2YXIgc2V0ID0gZnVuY3Rpb24odGFyZ2V0LCB0b2tlbnMsIHZhbHVlKSB7XG4gICAgICB2YXIgbywgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9ICdvYmplY3QnKSB0YXJnZXQgPSBudWxsO1xuICAgICAgaWYgKHRva2VuID09PSBcIlwiKSB7XG4gICAgICAgIGlmICghdGFyZ2V0KSB0YXJnZXQgPSBbXTtcbiAgICAgICAgaWYgKGlzKHRhcmdldCwgQXJyYXkpKSB7XG4gICAgICAgICAgdGFyZ2V0LnB1c2godG9rZW5zLmxlbmd0aCA9PSAwID8gdmFsdWUgOiBzZXQobnVsbCwgdG9rZW5zLnNsaWNlKDApLCB2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzKHRhcmdldCwgT2JqZWN0KSkge1xuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICB3aGlsZSAodGFyZ2V0W2krK10gIT0gbnVsbCk7XG4gICAgICAgICAgdGFyZ2V0Wy0taV0gPSB0b2tlbnMubGVuZ3RoID09IDAgPyB2YWx1ZSA6IHNldCh0YXJnZXRbaV0sIHRva2Vucy5zbGljZSgwKSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldCA9IFtdO1xuICAgICAgICAgIHRhcmdldC5wdXNoKHRva2Vucy5sZW5ndGggPT0gMCA/IHZhbHVlIDogc2V0KG51bGwsIHRva2Vucy5zbGljZSgwKSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0b2tlbiAmJiB0b2tlbi5tYXRjaCgvXlxccypbMC05XStcXHMqJC8pKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRva2VuLCAxMCk7XG4gICAgICAgIGlmICghdGFyZ2V0KSB0YXJnZXQgPSBbXTtcbiAgICAgICAgdGFyZ2V0W2luZGV4XSA9IHRva2Vucy5sZW5ndGggPT0gMCA/IHZhbHVlIDogc2V0KHRhcmdldFtpbmRleF0sIHRva2Vucy5zbGljZSgwKSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbikge1xuICAgICAgICB2YXIgaW5kZXggPSB0b2tlbi5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCBcIlwiKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHRhcmdldCA9IHt9O1xuICAgICAgICBpZiAoaXModGFyZ2V0LCBBcnJheSkpIHtcbiAgICAgICAgICB2YXIgdGVtcCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0ZW1wW2ldID0gdGFyZ2V0W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldFtpbmRleF0gPSB0b2tlbnMubGVuZ3RoID09IDAgPyB2YWx1ZSA6IHNldCh0YXJnZXRbaW5kZXhdLCB0b2tlbnMuc2xpY2UoMCksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICBcbiAgICB2YXIgcXVlcnlPYmplY3QgPSBmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLmtleXMgPSB7fTtcbiAgICAgIFxuICAgICAgaWYgKGEucXVlcnlPYmplY3QpIHtcbiAgICAgICAgalF1ZXJ5LmVhY2goYS5nZXQoKSwgZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgICAgICBzZWxmLlNFVChrZXksIHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5wYXJzZU5ldy5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBcbiAgICBxdWVyeU9iamVjdC5wcm90b3R5cGUgPSB7XG4gICAgICBxdWVyeU9iamVjdDogdHJ1ZSxcbiAgICAgIHBhcnNlTmV3OiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYua2V5cyA9IHt9O1xuICAgICAgICBqUXVlcnkuZWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBxID0gXCJcIiArIHRoaXM7XG4gICAgICAgICAgcSA9IHEucmVwbGFjZSgvXls/I10vLCcnKTsgLy8gcmVtb3ZlIGFueSBsZWFkaW5nID8gfHwgI1xuICAgICAgICAgIHEgPSBxLnJlcGxhY2UoL1s7Jl0kLywnJyk7IC8vIHJlbW92ZSBhbnkgdHJhaWxpbmcgJiB8fCA7XG4gICAgICAgICAgaWYgKCRzcGFjZXMpIHEgPSBxLnJlcGxhY2UoL1srXS9nLCcgJyk7IC8vIHJlcGxhY2UgKydzIHdpdGggc3BhY2VzXG4gICAgICAgICAgXG4gICAgICAgICAgalF1ZXJ5LmVhY2gocS5zcGxpdCgvWyY7XS8pLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudCh0aGlzLnNwbGl0KCc9JylbMF0gfHwgXCJcIik7XG4gICAgICAgICAgICB2YXIgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMuc3BsaXQoJz0nKVsxXSB8fCBcIlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFrZXkpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCRudW1iZXJzKSB7XG4gICAgICAgICAgICAgIGlmICgvXlsrLV0/WzAtOV0rXFwuWzAtOV0qJC8udGVzdCh2YWwpKSAvLyBzaW1wbGUgZmxvYXQgcmVnZXhcbiAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICAgIGVsc2UgaWYgKC9eWystXT9bMS05XVswLTldKiQvLnRlc3QodmFsKSkgLy8gc2ltcGxlIGludCByZWdleFxuICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YWwgPSAoIXZhbCAmJiB2YWwgIT09IDApID8gdHJ1ZSA6IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VsZi5TRVQoa2V5LCB2YWwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9LFxuICAgICAgaGFzOiBmdW5jdGlvbihrZXksIHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIGlzKHZhbHVlLCB0eXBlKTtcbiAgICAgIH0sXG4gICAgICBHRVQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoIWlzKGtleSkpIHJldHVybiB0aGlzLmtleXM7XG4gICAgICAgIHZhciBwYXJzZWQgPSBwYXJzZShrZXkpLCBiYXNlID0gcGFyc2VkWzBdLCB0b2tlbnMgPSBwYXJzZWRbMV07XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmtleXNbYmFzZV07XG4gICAgICAgIHdoaWxlICh0YXJnZXQgIT0gbnVsbCAmJiB0b2tlbnMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRbdG9rZW5zLnNoaWZ0KCldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09ICdudW1iZXInID8gdGFyZ2V0IDogdGFyZ2V0IHx8IFwiXCI7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuR0VUKGtleSk7XG4gICAgICAgIGlmIChpcyh0YXJnZXQsIE9iamVjdCkpXG4gICAgICAgICAgcmV0dXJuIGpRdWVyeS5leHRlbmQodHJ1ZSwge30sIHRhcmdldCk7XG4gICAgICAgIGVsc2UgaWYgKGlzKHRhcmdldCwgQXJyYXkpKVxuICAgICAgICAgIHJldHVybiB0YXJnZXQuc2xpY2UoMCk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9LFxuICAgICAgU0VUOiBmdW5jdGlvbihrZXksIHZhbCkge1xuICAgICAgICB2YXIgdmFsdWUgPSAhaXModmFsKSA/IG51bGwgOiB2YWw7XG4gICAgICAgIHZhciBwYXJzZWQgPSBwYXJzZShrZXkpLCBiYXNlID0gcGFyc2VkWzBdLCB0b2tlbnMgPSBwYXJzZWRbMV07XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmtleXNbYmFzZV07XG4gICAgICAgIHRoaXMua2V5c1tiYXNlXSA9IHNldCh0YXJnZXQsIHRva2Vucy5zbGljZSgwKSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkoKS5TRVQoa2V5LCB2YWwpO1xuICAgICAgfSxcbiAgICAgIFJFTU9WRTogZnVuY3Rpb24oa2V5LCB2YWwpIHtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLkdFVChrZXkpO1xuICAgICAgICAgIGlmIChpcyh0YXJnZXQsIEFycmF5KSkge1xuICAgICAgICAgICAgZm9yICh0dmFsIGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFt0dmFsXSA9IHRhcmdldFt0dmFsXS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluZGV4ID0gJC5pbkFycmF5KHZhbCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGtleSA9IHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICBrZXkgPSBrZXlbaW5kZXhdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsICE9IHRhcmdldCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLlNFVChrZXksIG51bGwpLkNPTVBBQ1QoKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkoKS5SRU1PVkUoa2V5LCB2YWwpO1xuICAgICAgfSxcbiAgICAgIEVNUFRZOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBqUXVlcnkuZWFjaChzZWxmLmtleXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZi5rZXlzW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH0sXG4gICAgICBsb2FkOiBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgdmFyIGhhc2ggPSB1cmwucmVwbGFjZSgvXi4qP1sjXSguKz8pKD86XFw/LispPyQvLCBcIiQxXCIpO1xuICAgICAgICB2YXIgc2VhcmNoID0gdXJsLnJlcGxhY2UoL14uKj9bP10oLis/KSg/OiMuKyk/JC8sIFwiJDFcIik7XG4gICAgICAgIHJldHVybiBuZXcgcXVlcnlPYmplY3QodXJsLmxlbmd0aCA9PSBzZWFyY2gubGVuZ3RoID8gJycgOiBzZWFyY2gsIHVybC5sZW5ndGggPT0gaGFzaC5sZW5ndGggPyAnJyA6IGhhc2gpO1xuICAgICAgfSxcbiAgICAgIGVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weSgpLkVNUFRZKCk7XG4gICAgICB9LFxuICAgICAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgcXVlcnlPYmplY3QodGhpcyk7XG4gICAgICB9LFxuICAgICAgQ09NUEFDVDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkKG9yaWcpIHtcbiAgICAgICAgICB2YXIgb2JqID0gdHlwZW9mIG9yaWcgPT0gXCJvYmplY3RcIiA/IGlzKG9yaWcsIEFycmF5KSA/IFtdIDoge30gOiBvcmlnO1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkKG8sIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGlzKG8sIEFycmF5KSlcbiAgICAgICAgICAgICAgICBvLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChvcmlnLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmICghaXModmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgYWRkKG9iaiwga2V5LCBidWlsZCh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlzID0gYnVpbGQodGhpcy5rZXlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgY29tcGFjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcHkoKS5DT01QQUNUKCk7XG4gICAgICB9LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSA9IDAsIHF1ZXJ5U3RyaW5nID0gW10sIGNodW5rcyA9IFtdLCBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgIHN0ciA9IHN0ciArIFwiXCI7XG4gICAgICAgICAgc3RyID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cik7XG4gICAgICAgICAgaWYgKCRzcGFjZXMpIHN0ciA9IHN0ci5yZXBsYWNlKC8lMjAvZywgXCIrXCIpO1xuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBhZGRGaWVsZHMgPSBmdW5jdGlvbihhcnIsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICBpZiAoIWlzKHZhbHVlKSB8fCB2YWx1ZSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgICB2YXIgbyA9IFtlbmNvZGUoa2V5KV07XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBvLnB1c2goXCI9XCIpO1xuICAgICAgICAgICAgby5wdXNoKGVuY29kZSh2YWx1ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhcnIucHVzaChvLmpvaW4oXCJcIikpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgYnVpbGQgPSBmdW5jdGlvbihvYmosIGJhc2UpIHtcbiAgICAgICAgICB2YXIgbmV3S2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gIWJhc2UgfHwgYmFzZSA9PSBcIlwiID8gW2tleV0uam9pbihcIlwiKSA6IFtiYXNlLCBcIltcIiwga2V5LCBcIl1cIl0uam9pbihcIlwiKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGpRdWVyeS5lYWNoKG9iaiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JykgXG4gICAgICAgICAgICAgIGJ1aWxkKHZhbHVlLCBuZXdLZXkoa2V5KSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGFkZEZpZWxkcyhjaHVua3MsIG5ld0tleShrZXkpLCB2YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBidWlsZCh0aGlzLmtleXMpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNodW5rcy5sZW5ndGggPiAwKSBxdWVyeVN0cmluZy5wdXNoKCRoYXNoKTtcbiAgICAgICAgcXVlcnlTdHJpbmcucHVzaChjaHVua3Muam9pbigkc2VwYXJhdG9yKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbihcIlwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBuZXcgcXVlcnlPYmplY3QobG9jYXRpb24uc2VhcmNoLCBsb2NhdGlvbi5oYXNoKTtcbiAgfTtcbn0oalF1ZXJ5LnF1ZXJ5IHx8IHt9KTsgLy8gUGFzcyBpbiBqUXVlcnkucXVlcnkgYXMgc2V0dGluZ3Mgb2JqZWN0XG4iLCIvKiEgTWFnbmlmaWMgUG9wdXAgLSB2MS4xLjAgLSAyMDE2LTAyLTIwXG4qIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL1xuKiBDb3B5cmlnaHQgKGMpIDIwMTYgRG1pdHJ5IFNlbWVub3Y7ICovXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6YShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOndpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0byl9KGZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPVwiQ2xvc2VcIixpPVwiQmVmb3JlQ2xvc2VcIixqPVwiQWZ0ZXJDbG9zZVwiLGs9XCJCZWZvcmVBcHBlbmRcIixsPVwiTWFya3VwUGFyc2VcIixtPVwiT3BlblwiLG49XCJDaGFuZ2VcIixvPVwibWZwXCIscD1cIi5cIitvLHE9XCJtZnAtcmVhZHlcIixyPVwibWZwLXJlbW92aW5nXCIscz1cIm1mcC1wcmV2ZW50LWNsb3NlXCIsdD1mdW5jdGlvbigpe30sdT0hIXdpbmRvdy5qUXVlcnksdj1hKHdpbmRvdyksdz1mdW5jdGlvbihhLGMpe2IuZXYub24obythK3AsYyl9LHg9ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZi5jbGFzc05hbWU9XCJtZnAtXCIrYixkJiYoZi5pbm5lckhUTUw9ZCksZT9jJiZjLmFwcGVuZENoaWxkKGYpOihmPWEoZiksYyYmZi5hcHBlbmRUbyhjKSksZn0seT1mdW5jdGlvbihjLGQpe2IuZXYudHJpZ2dlckhhbmRsZXIobytjLGQpLGIuc3QuY2FsbGJhY2tzJiYoYz1jLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpK2Muc2xpY2UoMSksYi5zdC5jYWxsYmFja3NbY10mJmIuc3QuY2FsbGJhY2tzW2NdLmFwcGx5KGIsYS5pc0FycmF5KGQpP2Q6W2RdKSl9LHo9ZnVuY3Rpb24oYyl7cmV0dXJuIGM9PT1nJiZiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bnx8KGIuY3VyclRlbXBsYXRlLmNsb3NlQnRuPWEoYi5zdC5jbG9zZU1hcmt1cC5yZXBsYWNlKFwiJXRpdGxlJVwiLGIuc3QudENsb3NlKSksZz1jKSxiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bn0sQT1mdW5jdGlvbigpe2EubWFnbmlmaWNQb3B1cC5pbnN0YW5jZXx8KGI9bmV3IHQsYi5pbml0KCksYS5tYWduaWZpY1BvcHVwLmluc3RhbmNlPWIpfSxCPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikuc3R5bGUsYj1bXCJtc1wiLFwiT1wiLFwiTW96XCIsXCJXZWJraXRcIl07aWYodm9pZCAwIT09YS50cmFuc2l0aW9uKXJldHVybiEwO2Zvcig7Yi5sZW5ndGg7KWlmKGIucG9wKCkrXCJUcmFuc2l0aW9uXCJpbiBhKXJldHVybiEwO3JldHVybiExfTt0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6dCxpbml0OmZ1bmN0aW9uKCl7dmFyIGM9bmF2aWdhdG9yLmFwcFZlcnNpb247Yi5pc0xvd0lFPWIuaXNJRTg9ZG9jdW1lbnQuYWxsJiYhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcixiLmlzQW5kcm9pZD0vYW5kcm9pZC9naS50ZXN0KGMpLGIuaXNJT1M9L2lwaG9uZXxpcGFkfGlwb2QvZ2kudGVzdChjKSxiLnN1cHBvcnRzVHJhbnNpdGlvbj1CKCksYi5wcm9iYWJseU1vYmlsZT1iLmlzQW5kcm9pZHx8Yi5pc0lPU3x8LyhPcGVyYSBNaW5pKXxLaW5kbGV8d2ViT1N8QmxhY2tCZXJyeXwoT3BlcmEgTW9iaSl8KFdpbmRvd3MgUGhvbmUpfElFTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxkPWEoZG9jdW1lbnQpLGIucG9wdXBzQ2FjaGU9e319LG9wZW46ZnVuY3Rpb24oYyl7dmFyIGU7aWYoYy5pc09iaj09PSExKXtiLml0ZW1zPWMuaXRlbXMudG9BcnJheSgpLGIuaW5kZXg9MDt2YXIgZyxoPWMuaXRlbXM7Zm9yKGU9MDtlPGgubGVuZ3RoO2UrKylpZihnPWhbZV0sZy5wYXJzZWQmJihnPWcuZWxbMF0pLGc9PT1jLmVsWzBdKXtiLmluZGV4PWU7YnJlYWt9fWVsc2UgYi5pdGVtcz1hLmlzQXJyYXkoYy5pdGVtcyk/Yy5pdGVtczpbYy5pdGVtc10sYi5pbmRleD1jLmluZGV4fHwwO2lmKGIuaXNPcGVuKXJldHVybiB2b2lkIGIudXBkYXRlSXRlbUhUTUwoKTtiLnR5cGVzPVtdLGY9XCJcIixjLm1haW5FbCYmYy5tYWluRWwubGVuZ3RoP2IuZXY9Yy5tYWluRWwuZXEoMCk6Yi5ldj1kLGMua2V5PyhiLnBvcHVwc0NhY2hlW2Mua2V5XXx8KGIucG9wdXBzQ2FjaGVbYy5rZXldPXt9KSxiLmN1cnJUZW1wbGF0ZT1iLnBvcHVwc0NhY2hlW2Mua2V5XSk6Yi5jdXJyVGVtcGxhdGU9e30sYi5zdD1hLmV4dGVuZCghMCx7fSxhLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsYyksYi5maXhlZENvbnRlbnRQb3M9XCJhdXRvXCI9PT1iLnN0LmZpeGVkQ29udGVudFBvcz8hYi5wcm9iYWJseU1vYmlsZTpiLnN0LmZpeGVkQ29udGVudFBvcyxiLnN0Lm1vZGFsJiYoYi5zdC5jbG9zZU9uQ29udGVudENsaWNrPSExLGIuc3QuY2xvc2VPbkJnQ2xpY2s9ITEsYi5zdC5zaG93Q2xvc2VCdG49ITEsYi5zdC5lbmFibGVFc2NhcGVLZXk9ITEpLGIuYmdPdmVybGF5fHwoYi5iZ092ZXJsYXk9eChcImJnXCIpLm9uKFwiY2xpY2tcIitwLGZ1bmN0aW9uKCl7Yi5jbG9zZSgpfSksYi53cmFwPXgoXCJ3cmFwXCIpLmF0dHIoXCJ0YWJpbmRleFwiLC0xKS5vbihcImNsaWNrXCIrcCxmdW5jdGlvbihhKXtiLl9jaGVja0lmQ2xvc2UoYS50YXJnZXQpJiZiLmNsb3NlKCl9KSxiLmNvbnRhaW5lcj14KFwiY29udGFpbmVyXCIsYi53cmFwKSksYi5jb250ZW50Q29udGFpbmVyPXgoXCJjb250ZW50XCIpLGIuc3QucHJlbG9hZGVyJiYoYi5wcmVsb2FkZXI9eChcInByZWxvYWRlclwiLGIuY29udGFpbmVyLGIuc3QudExvYWRpbmcpKTt2YXIgaT1hLm1hZ25pZmljUG9wdXAubW9kdWxlcztmb3IoZT0wO2U8aS5sZW5ndGg7ZSsrKXt2YXIgaj1pW2VdO2o9ai5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStqLnNsaWNlKDEpLGJbXCJpbml0XCIral0uY2FsbChiKX15KFwiQmVmb3JlT3BlblwiKSxiLnN0LnNob3dDbG9zZUJ0biYmKGIuc3QuY2xvc2VCdG5JbnNpZGU/KHcobCxmdW5jdGlvbihhLGIsYyxkKXtjLmNsb3NlX3JlcGxhY2VXaXRoPXooZC50eXBlKX0pLGYrPVwiIG1mcC1jbG9zZS1idG4taW5cIik6Yi53cmFwLmFwcGVuZCh6KCkpKSxiLnN0LmFsaWduVG9wJiYoZis9XCIgbWZwLWFsaWduLXRvcFwiKSxiLmZpeGVkQ29udGVudFBvcz9iLndyYXAuY3NzKHtvdmVyZmxvdzpiLnN0Lm92ZXJmbG93WSxvdmVyZmxvd1g6XCJoaWRkZW5cIixvdmVyZmxvd1k6Yi5zdC5vdmVyZmxvd1l9KTpiLndyYXAuY3NzKHt0b3A6di5zY3JvbGxUb3AoKSxwb3NpdGlvbjpcImFic29sdXRlXCJ9KSwoYi5zdC5maXhlZEJnUG9zPT09ITF8fFwiYXV0b1wiPT09Yi5zdC5maXhlZEJnUG9zJiYhYi5maXhlZENvbnRlbnRQb3MpJiZiLmJnT3ZlcmxheS5jc3Moe2hlaWdodDpkLmhlaWdodCgpLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn0pLGIuc3QuZW5hYmxlRXNjYXBlS2V5JiZkLm9uKFwia2V5dXBcIitwLGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiZiLmNsb3NlKCl9KSx2Lm9uKFwicmVzaXplXCIrcCxmdW5jdGlvbigpe2IudXBkYXRlU2l6ZSgpfSksYi5zdC5jbG9zZU9uQ29udGVudENsaWNrfHwoZis9XCIgbWZwLWF1dG8tY3Vyc29yXCIpLGYmJmIud3JhcC5hZGRDbGFzcyhmKTt2YXIgaz1iLndIPXYuaGVpZ2h0KCksbj17fTtpZihiLmZpeGVkQ29udGVudFBvcyYmYi5faGFzU2Nyb2xsQmFyKGspKXt2YXIgbz1iLl9nZXRTY3JvbGxiYXJTaXplKCk7byYmKG4ubWFyZ2luUmlnaHQ9byl9Yi5maXhlZENvbnRlbnRQb3MmJihiLmlzSUU3P2EoXCJib2R5LCBodG1sXCIpLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik6bi5vdmVyZmxvdz1cImhpZGRlblwiKTt2YXIgcj1iLnN0Lm1haW5DbGFzcztyZXR1cm4gYi5pc0lFNyYmKHIrPVwiIG1mcC1pZTdcIiksciYmYi5fYWRkQ2xhc3NUb01GUChyKSxiLnVwZGF0ZUl0ZW1IVE1MKCkseShcIkJ1aWxkQ29udHJvbHNcIiksYShcImh0bWxcIikuY3NzKG4pLGIuYmdPdmVybGF5LmFkZChiLndyYXApLnByZXBlbmRUbyhiLnN0LnByZXBlbmRUb3x8YShkb2N1bWVudC5ib2R5KSksYi5fbGFzdEZvY3VzZWRFbD1kb2N1bWVudC5hY3RpdmVFbGVtZW50LHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmNvbnRlbnQ/KGIuX2FkZENsYXNzVG9NRlAocSksYi5fc2V0Rm9jdXMoKSk6Yi5iZ092ZXJsYXkuYWRkQ2xhc3MocSksZC5vbihcImZvY3VzaW5cIitwLGIuX29uRm9jdXNJbil9LDE2KSxiLmlzT3Blbj0hMCxiLnVwZGF0ZVNpemUoaykseShtKSxjfSxjbG9zZTpmdW5jdGlvbigpe2IuaXNPcGVuJiYoeShpKSxiLmlzT3Blbj0hMSxiLnN0LnJlbW92YWxEZWxheSYmIWIuaXNMb3dJRSYmYi5zdXBwb3J0c1RyYW5zaXRpb24/KGIuX2FkZENsYXNzVG9NRlAociksc2V0VGltZW91dChmdW5jdGlvbigpe2IuX2Nsb3NlKCl9LGIuc3QucmVtb3ZhbERlbGF5KSk6Yi5fY2xvc2UoKSl9LF9jbG9zZTpmdW5jdGlvbigpe3koaCk7dmFyIGM9citcIiBcIitxK1wiIFwiO2lmKGIuYmdPdmVybGF5LmRldGFjaCgpLGIud3JhcC5kZXRhY2goKSxiLmNvbnRhaW5lci5lbXB0eSgpLGIuc3QubWFpbkNsYXNzJiYoYys9Yi5zdC5tYWluQ2xhc3MrXCIgXCIpLGIuX3JlbW92ZUNsYXNzRnJvbU1GUChjKSxiLmZpeGVkQ29udGVudFBvcyl7dmFyIGU9e21hcmdpblJpZ2h0OlwiXCJ9O2IuaXNJRTc/YShcImJvZHksIGh0bWxcIikuY3NzKFwib3ZlcmZsb3dcIixcIlwiKTplLm92ZXJmbG93PVwiXCIsYShcImh0bWxcIikuY3NzKGUpfWQub2ZmKFwia2V5dXBcIitwK1wiIGZvY3VzaW5cIitwKSxiLmV2Lm9mZihwKSxiLndyYXAuYXR0cihcImNsYXNzXCIsXCJtZnAtd3JhcFwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksYi5iZ092ZXJsYXkuYXR0cihcImNsYXNzXCIsXCJtZnAtYmdcIiksYi5jb250YWluZXIuYXR0cihcImNsYXNzXCIsXCJtZnAtY29udGFpbmVyXCIpLCFiLnN0LnNob3dDbG9zZUJ0bnx8Yi5zdC5jbG9zZUJ0bkluc2lkZSYmYi5jdXJyVGVtcGxhdGVbYi5jdXJySXRlbS50eXBlXSE9PSEwfHxiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0biYmYi5jdXJyVGVtcGxhdGUuY2xvc2VCdG4uZGV0YWNoKCksYi5zdC5hdXRvRm9jdXNMYXN0JiZiLl9sYXN0Rm9jdXNlZEVsJiZhKGIuX2xhc3RGb2N1c2VkRWwpLmZvY3VzKCksYi5jdXJySXRlbT1udWxsLGIuY29udGVudD1udWxsLGIuY3VyclRlbXBsYXRlPW51bGwsYi5wcmV2SGVpZ2h0PTAseShqKX0sdXBkYXRlU2l6ZTpmdW5jdGlvbihhKXtpZihiLmlzSU9TKXt2YXIgYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGgsZD13aW5kb3cuaW5uZXJIZWlnaHQqYztiLndyYXAuY3NzKFwiaGVpZ2h0XCIsZCksYi53SD1kfWVsc2UgYi53SD1hfHx2LmhlaWdodCgpO2IuZml4ZWRDb250ZW50UG9zfHxiLndyYXAuY3NzKFwiaGVpZ2h0XCIsYi53SCkseShcIlJlc2l6ZVwiKX0sdXBkYXRlSXRlbUhUTUw6ZnVuY3Rpb24oKXt2YXIgYz1iLml0ZW1zW2IuaW5kZXhdO2IuY29udGVudENvbnRhaW5lci5kZXRhY2goKSxiLmNvbnRlbnQmJmIuY29udGVudC5kZXRhY2goKSxjLnBhcnNlZHx8KGM9Yi5wYXJzZUVsKGIuaW5kZXgpKTt2YXIgZD1jLnR5cGU7aWYoeShcIkJlZm9yZUNoYW5nZVwiLFtiLmN1cnJJdGVtP2IuY3Vyckl0ZW0udHlwZTpcIlwiLGRdKSxiLmN1cnJJdGVtPWMsIWIuY3VyclRlbXBsYXRlW2RdKXt2YXIgZj1iLnN0W2RdP2Iuc3RbZF0ubWFya3VwOiExO3koXCJGaXJzdE1hcmt1cFBhcnNlXCIsZiksZj9iLmN1cnJUZW1wbGF0ZVtkXT1hKGYpOmIuY3VyclRlbXBsYXRlW2RdPSEwfWUmJmUhPT1jLnR5cGUmJmIuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwibWZwLVwiK2UrXCItaG9sZGVyXCIpO3ZhciBnPWJbXCJnZXRcIitkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Quc2xpY2UoMSldKGMsYi5jdXJyVGVtcGxhdGVbZF0pO2IuYXBwZW5kQ29udGVudChnLGQpLGMucHJlbG9hZGVkPSEwLHkobixjKSxlPWMudHlwZSxiLmNvbnRhaW5lci5wcmVwZW5kKGIuY29udGVudENvbnRhaW5lcikseShcIkFmdGVyQ2hhbmdlXCIpfSxhcHBlbmRDb250ZW50OmZ1bmN0aW9uKGEsYyl7Yi5jb250ZW50PWEsYT9iLnN0LnNob3dDbG9zZUJ0biYmYi5zdC5jbG9zZUJ0bkluc2lkZSYmYi5jdXJyVGVtcGxhdGVbY109PT0hMD9iLmNvbnRlbnQuZmluZChcIi5tZnAtY2xvc2VcIikubGVuZ3RofHxiLmNvbnRlbnQuYXBwZW5kKHooKSk6Yi5jb250ZW50PWE6Yi5jb250ZW50PVwiXCIseShrKSxiLmNvbnRhaW5lci5hZGRDbGFzcyhcIm1mcC1cIitjK1wiLWhvbGRlclwiKSxiLmNvbnRlbnRDb250YWluZXIuYXBwZW5kKGIuY29udGVudCl9LHBhcnNlRWw6ZnVuY3Rpb24oYyl7dmFyIGQsZT1iLml0ZW1zW2NdO2lmKGUudGFnTmFtZT9lPXtlbDphKGUpfTooZD1lLnR5cGUsZT17ZGF0YTplLHNyYzplLnNyY30pLGUuZWwpe2Zvcih2YXIgZj1iLnR5cGVzLGc9MDtnPGYubGVuZ3RoO2crKylpZihlLmVsLmhhc0NsYXNzKFwibWZwLVwiK2ZbZ10pKXtkPWZbZ107YnJlYWt9ZS5zcmM9ZS5lbC5hdHRyKFwiZGF0YS1tZnAtc3JjXCIpLGUuc3JjfHwoZS5zcmM9ZS5lbC5hdHRyKFwiaHJlZlwiKSl9cmV0dXJuIGUudHlwZT1kfHxiLnN0LnR5cGV8fFwiaW5saW5lXCIsZS5pbmRleD1jLGUucGFyc2VkPSEwLGIuaXRlbXNbY109ZSx5KFwiRWxlbWVudFBhcnNlXCIsZSksYi5pdGVtc1tjXX0sYWRkR3JvdXA6ZnVuY3Rpb24oYSxjKXt2YXIgZD1mdW5jdGlvbihkKXtkLm1mcEVsPXRoaXMsYi5fb3BlbkNsaWNrKGQsYSxjKX07Y3x8KGM9e30pO3ZhciBlPVwiY2xpY2subWFnbmlmaWNQb3B1cFwiO2MubWFpbkVsPWEsYy5pdGVtcz8oYy5pc09iaj0hMCxhLm9mZihlKS5vbihlLGQpKTooYy5pc09iaj0hMSxjLmRlbGVnYXRlP2Eub2ZmKGUpLm9uKGUsYy5kZWxlZ2F0ZSxkKTooYy5pdGVtcz1hLGEub2ZmKGUpLm9uKGUsZCkpKX0sX29wZW5DbGljazpmdW5jdGlvbihjLGQsZSl7dmFyIGY9dm9pZCAwIT09ZS5taWRDbGljaz9lLm1pZENsaWNrOmEubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5taWRDbGljaztpZihmfHwhKDI9PT1jLndoaWNofHxjLmN0cmxLZXl8fGMubWV0YUtleXx8Yy5hbHRLZXl8fGMuc2hpZnRLZXkpKXt2YXIgZz12b2lkIDAhPT1lLmRpc2FibGVPbj9lLmRpc2FibGVPbjphLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMuZGlzYWJsZU9uO2lmKGcpaWYoYS5pc0Z1bmN0aW9uKGcpKXtpZighZy5jYWxsKGIpKXJldHVybiEwfWVsc2UgaWYodi53aWR0aCgpPGcpcmV0dXJuITA7Yy50eXBlJiYoYy5wcmV2ZW50RGVmYXVsdCgpLGIuaXNPcGVuJiZjLnN0b3BQcm9wYWdhdGlvbigpKSxlLmVsPWEoYy5tZnBFbCksZS5kZWxlZ2F0ZSYmKGUuaXRlbXM9ZC5maW5kKGUuZGVsZWdhdGUpKSxiLm9wZW4oZSl9fSx1cGRhdGVTdGF0dXM6ZnVuY3Rpb24oYSxkKXtpZihiLnByZWxvYWRlcil7YyE9PWEmJmIuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwibWZwLXMtXCIrYyksZHx8XCJsb2FkaW5nXCIhPT1hfHwoZD1iLnN0LnRMb2FkaW5nKTt2YXIgZT17c3RhdHVzOmEsdGV4dDpkfTt5KFwiVXBkYXRlU3RhdHVzXCIsZSksYT1lLnN0YXR1cyxkPWUudGV4dCxiLnByZWxvYWRlci5odG1sKGQpLGIucHJlbG9hZGVyLmZpbmQoXCJhXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXthLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpfSksYi5jb250YWluZXIuYWRkQ2xhc3MoXCJtZnAtcy1cIithKSxjPWF9fSxfY2hlY2tJZkNsb3NlOmZ1bmN0aW9uKGMpe2lmKCFhKGMpLmhhc0NsYXNzKHMpKXt2YXIgZD1iLnN0LmNsb3NlT25Db250ZW50Q2xpY2ssZT1iLnN0LmNsb3NlT25CZ0NsaWNrO2lmKGQmJmUpcmV0dXJuITA7aWYoIWIuY29udGVudHx8YShjKS5oYXNDbGFzcyhcIm1mcC1jbG9zZVwiKXx8Yi5wcmVsb2FkZXImJmM9PT1iLnByZWxvYWRlclswXSlyZXR1cm4hMDtpZihjPT09Yi5jb250ZW50WzBdfHxhLmNvbnRhaW5zKGIuY29udGVudFswXSxjKSl7aWYoZClyZXR1cm4hMH1lbHNlIGlmKGUmJmEuY29udGFpbnMoZG9jdW1lbnQsYykpcmV0dXJuITA7cmV0dXJuITF9fSxfYWRkQ2xhc3NUb01GUDpmdW5jdGlvbihhKXtiLmJnT3ZlcmxheS5hZGRDbGFzcyhhKSxiLndyYXAuYWRkQ2xhc3MoYSl9LF9yZW1vdmVDbGFzc0Zyb21NRlA6ZnVuY3Rpb24oYSl7dGhpcy5iZ092ZXJsYXkucmVtb3ZlQ2xhc3MoYSksYi53cmFwLnJlbW92ZUNsYXNzKGEpfSxfaGFzU2Nyb2xsQmFyOmZ1bmN0aW9uKGEpe3JldHVybihiLmlzSUU3P2QuaGVpZ2h0KCk6ZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpPihhfHx2LmhlaWdodCgpKX0sX3NldEZvY3VzOmZ1bmN0aW9uKCl7KGIuc3QuZm9jdXM/Yi5jb250ZW50LmZpbmQoYi5zdC5mb2N1cykuZXEoMCk6Yi53cmFwKS5mb2N1cygpfSxfb25Gb2N1c0luOmZ1bmN0aW9uKGMpe3JldHVybiBjLnRhcmdldD09PWIud3JhcFswXXx8YS5jb250YWlucyhiLndyYXBbMF0sYy50YXJnZXQpP3ZvaWQgMDooYi5fc2V0Rm9jdXMoKSwhMSl9LF9wYXJzZU1hcmt1cDpmdW5jdGlvbihiLGMsZCl7dmFyIGU7ZC5kYXRhJiYoYz1hLmV4dGVuZChkLmRhdGEsYykpLHkobCxbYixjLGRdKSxhLmVhY2goYyxmdW5jdGlvbihjLGQpe2lmKHZvaWQgMD09PWR8fGQ9PT0hMSlyZXR1cm4hMDtpZihlPWMuc3BsaXQoXCJfXCIpLGUubGVuZ3RoPjEpe3ZhciBmPWIuZmluZChwK1wiLVwiK2VbMF0pO2lmKGYubGVuZ3RoPjApe3ZhciBnPWVbMV07XCJyZXBsYWNlV2l0aFwiPT09Zz9mWzBdIT09ZFswXSYmZi5yZXBsYWNlV2l0aChkKTpcImltZ1wiPT09Zz9mLmlzKFwiaW1nXCIpP2YuYXR0cihcInNyY1wiLGQpOmYucmVwbGFjZVdpdGgoYShcIjxpbWc+XCIpLmF0dHIoXCJzcmNcIixkKS5hdHRyKFwiY2xhc3NcIixmLmF0dHIoXCJjbGFzc1wiKSkpOmYuYXR0cihlWzFdLGQpfX1lbHNlIGIuZmluZChwK1wiLVwiK2MpLmh0bWwoZCl9KX0sX2dldFNjcm9sbGJhclNpemU6ZnVuY3Rpb24oKXtpZih2b2lkIDA9PT1iLnNjcm9sbGJhclNpemUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6IDk5cHg7IGhlaWdodDogOTlweDsgb3ZlcmZsb3c6IHNjcm9sbDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC05OTk5cHg7XCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKSxiLnNjcm9sbGJhclNpemU9YS5vZmZzZXRXaWR0aC1hLmNsaWVudFdpZHRoLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSl9cmV0dXJuIGIuc2Nyb2xsYmFyU2l6ZX19LGEubWFnbmlmaWNQb3B1cD17aW5zdGFuY2U6bnVsbCxwcm90bzp0LnByb3RvdHlwZSxtb2R1bGVzOltdLG9wZW46ZnVuY3Rpb24oYixjKXtyZXR1cm4gQSgpLGI9Yj9hLmV4dGVuZCghMCx7fSxiKTp7fSxiLmlzT2JqPSEwLGIuaW5kZXg9Y3x8MCx0aGlzLmluc3RhbmNlLm9wZW4oYil9LGNsb3NlOmZ1bmN0aW9uKCl7cmV0dXJuIGEubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSYmYS5tYWduaWZpY1BvcHVwLmluc3RhbmNlLmNsb3NlKCl9LHJlZ2lzdGVyTW9kdWxlOmZ1bmN0aW9uKGIsYyl7Yy5vcHRpb25zJiYoYS5tYWduaWZpY1BvcHVwLmRlZmF1bHRzW2JdPWMub3B0aW9ucyksYS5leHRlbmQodGhpcy5wcm90byxjLnByb3RvKSx0aGlzLm1vZHVsZXMucHVzaChiKX0sZGVmYXVsdHM6e2Rpc2FibGVPbjowLGtleTpudWxsLG1pZENsaWNrOiExLG1haW5DbGFzczpcIlwiLHByZWxvYWRlcjohMCxmb2N1czpcIlwiLGNsb3NlT25Db250ZW50Q2xpY2s6ITEsY2xvc2VPbkJnQ2xpY2s6ITAsY2xvc2VCdG5JbnNpZGU6ITAsc2hvd0Nsb3NlQnRuOiEwLGVuYWJsZUVzY2FwZUtleTohMCxtb2RhbDohMSxhbGlnblRvcDohMSxyZW1vdmFsRGVsYXk6MCxwcmVwZW5kVG86bnVsbCxmaXhlZENvbnRlbnRQb3M6XCJhdXRvXCIsZml4ZWRCZ1BvczpcImF1dG9cIixvdmVyZmxvd1k6XCJhdXRvXCIsY2xvc2VNYXJrdXA6JzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWNsb3NlXCI+JiMyMTU7PC9idXR0b24+Jyx0Q2xvc2U6XCJDbG9zZSAoRXNjKVwiLHRMb2FkaW5nOlwiTG9hZGluZy4uLlwiLGF1dG9Gb2N1c0xhc3Q6ITB9fSxhLmZuLm1hZ25pZmljUG9wdXA9ZnVuY3Rpb24oYyl7QSgpO3ZhciBkPWEodGhpcyk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMpaWYoXCJvcGVuXCI9PT1jKXt2YXIgZSxmPXU/ZC5kYXRhKFwibWFnbmlmaWNQb3B1cFwiKTpkWzBdLm1hZ25pZmljUG9wdXAsZz1wYXJzZUludChhcmd1bWVudHNbMV0sMTApfHwwO2YuaXRlbXM/ZT1mLml0ZW1zW2ddOihlPWQsZi5kZWxlZ2F0ZSYmKGU9ZS5maW5kKGYuZGVsZWdhdGUpKSxlPWUuZXEoZykpLGIuX29wZW5DbGljayh7bWZwRWw6ZX0sZCxmKX1lbHNlIGIuaXNPcGVuJiZiW2NdLmFwcGx5KGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTtlbHNlIGM9YS5leHRlbmQoITAse30sYyksdT9kLmRhdGEoXCJtYWduaWZpY1BvcHVwXCIsYyk6ZFswXS5tYWduaWZpY1BvcHVwPWMsYi5hZGRHcm91cChkLGMpO3JldHVybiBkfTt2YXIgQyxELEUsRj1cImlubGluZVwiLEc9ZnVuY3Rpb24oKXtFJiYoRC5hZnRlcihFLmFkZENsYXNzKEMpKS5kZXRhY2goKSxFPW51bGwpfTthLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoRix7b3B0aW9uczp7aGlkZGVuQ2xhc3M6XCJoaWRlXCIsbWFya3VwOlwiXCIsdE5vdEZvdW5kOlwiQ29udGVudCBub3QgZm91bmRcIn0scHJvdG86e2luaXRJbmxpbmU6ZnVuY3Rpb24oKXtiLnR5cGVzLnB1c2goRiksdyhoK1wiLlwiK0YsZnVuY3Rpb24oKXtHKCl9KX0sZ2V0SW5saW5lOmZ1bmN0aW9uKGMsZCl7aWYoRygpLGMuc3JjKXt2YXIgZT1iLnN0LmlubGluZSxmPWEoYy5zcmMpO2lmKGYubGVuZ3RoKXt2YXIgZz1mWzBdLnBhcmVudE5vZGU7ZyYmZy50YWdOYW1lJiYoRHx8KEM9ZS5oaWRkZW5DbGFzcyxEPXgoQyksQz1cIm1mcC1cIitDKSxFPWYuYWZ0ZXIoRCkuZGV0YWNoKCkucmVtb3ZlQ2xhc3MoQykpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIil9ZWxzZSBiLnVwZGF0ZVN0YXR1cyhcImVycm9yXCIsZS50Tm90Rm91bmQpLGY9YShcIjxkaXY+XCIpO3JldHVybiBjLmlubGluZUVsZW1lbnQ9ZixmfXJldHVybiBiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpLGIuX3BhcnNlTWFya3VwKGQse30sYyksZH19fSk7dmFyIEgsST1cImFqYXhcIixKPWZ1bmN0aW9uKCl7SCYmYShkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhIKX0sSz1mdW5jdGlvbigpe0ooKSxiLnJlcSYmYi5yZXEuYWJvcnQoKX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEkse29wdGlvbnM6e3NldHRpbmdzOm51bGwsY3Vyc29yOlwibWZwLWFqYXgtY3VyXCIsdEVycm9yOic8YSBocmVmPVwiJXVybCVcIj5UaGUgY29udGVudDwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nfSxwcm90bzp7aW5pdEFqYXg6ZnVuY3Rpb24oKXtiLnR5cGVzLnB1c2goSSksSD1iLnN0LmFqYXguY3Vyc29yLHcoaCtcIi5cIitJLEspLHcoXCJCZWZvcmVDaGFuZ2UuXCIrSSxLKX0sZ2V0QWpheDpmdW5jdGlvbihjKXtIJiZhKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKEgpLGIudXBkYXRlU3RhdHVzKFwibG9hZGluZ1wiKTt2YXIgZD1hLmV4dGVuZCh7dXJsOmMuc3JjLHN1Y2Nlc3M6ZnVuY3Rpb24oZCxlLGYpe3ZhciBnPXtkYXRhOmQseGhyOmZ9O3koXCJQYXJzZUFqYXhcIixnKSxiLmFwcGVuZENvbnRlbnQoYShnLmRhdGEpLEkpLGMuZmluaXNoZWQ9ITAsSigpLGIuX3NldEZvY3VzKCksc2V0VGltZW91dChmdW5jdGlvbigpe2Iud3JhcC5hZGRDbGFzcyhxKX0sMTYpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIikseShcIkFqYXhDb250ZW50QWRkZWRcIil9LGVycm9yOmZ1bmN0aW9uKCl7SigpLGMuZmluaXNoZWQ9Yy5sb2FkRXJyb3I9ITAsYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGIuc3QuYWpheC50RXJyb3IucmVwbGFjZShcIiV1cmwlXCIsYy5zcmMpKX19LGIuc3QuYWpheC5zZXR0aW5ncyk7cmV0dXJuIGIucmVxPWEuYWpheChkKSxcIlwifX19KTt2YXIgTCxNPWZ1bmN0aW9uKGMpe2lmKGMuZGF0YSYmdm9pZCAwIT09Yy5kYXRhLnRpdGxlKXJldHVybiBjLmRhdGEudGl0bGU7dmFyIGQ9Yi5zdC5pbWFnZS50aXRsZVNyYztpZihkKXtpZihhLmlzRnVuY3Rpb24oZCkpcmV0dXJuIGQuY2FsbChiLGMpO2lmKGMuZWwpcmV0dXJuIGMuZWwuYXR0cihkKXx8XCJcIn1yZXR1cm5cIlwifTthLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoXCJpbWFnZVwiLHtvcHRpb25zOnttYXJrdXA6JzxkaXYgY2xhc3M9XCJtZnAtZmlndXJlXCI+PGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PjxmaWd1cmU+PGRpdiBjbGFzcz1cIm1mcC1pbWdcIj48L2Rpdj48ZmlnY2FwdGlvbj48ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj48ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+PGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+PC9kaXY+PC9maWdjYXB0aW9uPjwvZmlndXJlPjwvZGl2PicsY3Vyc29yOlwibWZwLXpvb20tb3V0LWN1clwiLHRpdGxlU3JjOlwidGl0bGVcIix2ZXJ0aWNhbEZpdDohMCx0RXJyb3I6JzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nfSxwcm90bzp7aW5pdEltYWdlOmZ1bmN0aW9uKCl7dmFyIGM9Yi5zdC5pbWFnZSxkPVwiLmltYWdlXCI7Yi50eXBlcy5wdXNoKFwiaW1hZ2VcIiksdyhtK2QsZnVuY3Rpb24oKXtcImltYWdlXCI9PT1iLmN1cnJJdGVtLnR5cGUmJmMuY3Vyc29yJiZhKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKGMuY3Vyc29yKX0pLHcoaCtkLGZ1bmN0aW9uKCl7Yy5jdXJzb3ImJmEoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoYy5jdXJzb3IpLHYub2ZmKFwicmVzaXplXCIrcCl9KSx3KFwiUmVzaXplXCIrZCxiLnJlc2l6ZUltYWdlKSxiLmlzTG93SUUmJncoXCJBZnRlckNoYW5nZVwiLGIucmVzaXplSW1hZ2UpfSxyZXNpemVJbWFnZTpmdW5jdGlvbigpe3ZhciBhPWIuY3Vyckl0ZW07aWYoYSYmYS5pbWcmJmIuc3QuaW1hZ2UudmVydGljYWxGaXQpe3ZhciBjPTA7Yi5pc0xvd0lFJiYoYz1wYXJzZUludChhLmltZy5jc3MoXCJwYWRkaW5nLXRvcFwiKSwxMCkrcGFyc2VJbnQoYS5pbWcuY3NzKFwicGFkZGluZy1ib3R0b21cIiksMTApKSxhLmltZy5jc3MoXCJtYXgtaGVpZ2h0XCIsYi53SC1jKX19LF9vbkltYWdlSGFzU2l6ZTpmdW5jdGlvbihhKXthLmltZyYmKGEuaGFzU2l6ZT0hMCxMJiZjbGVhckludGVydmFsKEwpLGEuaXNDaGVja2luZ0ltZ1NpemU9ITEseShcIkltYWdlSGFzU2l6ZVwiLGEpLGEuaW1nSGlkZGVuJiYoYi5jb250ZW50JiZiLmNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJtZnAtbG9hZGluZ1wiKSxhLmltZ0hpZGRlbj0hMSkpfSxmaW5kSW1hZ2VTaXplOmZ1bmN0aW9uKGEpe3ZhciBjPTAsZD1hLmltZ1swXSxlPWZ1bmN0aW9uKGYpe0wmJmNsZWFySW50ZXJ2YWwoTCksTD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3JldHVybiBkLm5hdHVyYWxXaWR0aD4wP3ZvaWQgYi5fb25JbWFnZUhhc1NpemUoYSk6KGM+MjAwJiZjbGVhckludGVydmFsKEwpLGMrKyx2b2lkKDM9PT1jP2UoMTApOjQwPT09Yz9lKDUwKToxMDA9PT1jJiZlKDUwMCkpKX0sZil9O2UoMSl9LGdldEltYWdlOmZ1bmN0aW9uKGMsZCl7dmFyIGU9MCxmPWZ1bmN0aW9uKCl7YyYmKGMuaW1nWzBdLmNvbXBsZXRlPyhjLmltZy5vZmYoXCIubWZwbG9hZGVyXCIpLGM9PT1iLmN1cnJJdGVtJiYoYi5fb25JbWFnZUhhc1NpemUoYyksYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSksYy5oYXNTaXplPSEwLGMubG9hZGVkPSEwLHkoXCJJbWFnZUxvYWRDb21wbGV0ZVwiKSk6KGUrKywyMDA+ZT9zZXRUaW1lb3V0KGYsMTAwKTpnKCkpKX0sZz1mdW5jdGlvbigpe2MmJihjLmltZy5vZmYoXCIubWZwbG9hZGVyXCIpLGM9PT1iLmN1cnJJdGVtJiYoYi5fb25JbWFnZUhhc1NpemUoYyksYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGgudEVycm9yLnJlcGxhY2UoXCIldXJsJVwiLGMuc3JjKSkpLGMuaGFzU2l6ZT0hMCxjLmxvYWRlZD0hMCxjLmxvYWRFcnJvcj0hMCl9LGg9Yi5zdC5pbWFnZSxpPWQuZmluZChcIi5tZnAtaW1nXCIpO2lmKGkubGVuZ3RoKXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO2ouY2xhc3NOYW1lPVwibWZwLWltZ1wiLGMuZWwmJmMuZWwuZmluZChcImltZ1wiKS5sZW5ndGgmJihqLmFsdD1jLmVsLmZpbmQoXCJpbWdcIikuYXR0cihcImFsdFwiKSksYy5pbWc9YShqKS5vbihcImxvYWQubWZwbG9hZGVyXCIsZikub24oXCJlcnJvci5tZnBsb2FkZXJcIixnKSxqLnNyYz1jLnNyYyxpLmlzKFwiaW1nXCIpJiYoYy5pbWc9Yy5pbWcuY2xvbmUoKSksaj1jLmltZ1swXSxqLm5hdHVyYWxXaWR0aD4wP2MuaGFzU2l6ZT0hMDpqLndpZHRofHwoYy5oYXNTaXplPSExKX1yZXR1cm4gYi5fcGFyc2VNYXJrdXAoZCx7dGl0bGU6TShjKSxpbWdfcmVwbGFjZVdpdGg6Yy5pbWd9LGMpLGIucmVzaXplSW1hZ2UoKSxjLmhhc1NpemU/KEwmJmNsZWFySW50ZXJ2YWwoTCksYy5sb2FkRXJyb3I/KGQuYWRkQ2xhc3MoXCJtZnAtbG9hZGluZ1wiKSxiLnVwZGF0ZVN0YXR1cyhcImVycm9yXCIsaC50RXJyb3IucmVwbGFjZShcIiV1cmwlXCIsYy5zcmMpKSk6KGQucmVtb3ZlQ2xhc3MoXCJtZnAtbG9hZGluZ1wiKSxiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpKSxkKTooYi51cGRhdGVTdGF0dXMoXCJsb2FkaW5nXCIpLGMubG9hZGluZz0hMCxjLmhhc1NpemV8fChjLmltZ0hpZGRlbj0hMCxkLmFkZENsYXNzKFwibWZwLWxvYWRpbmdcIiksYi5maW5kSW1hZ2VTaXplKGMpKSxkKX19fSk7dmFyIE4sTz1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1OJiYoTj12b2lkIDAhPT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKS5zdHlsZS5Nb3pUcmFuc2Zvcm0pLE59O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShcInpvb21cIix7b3B0aW9uczp7ZW5hYmxlZDohMSxlYXNpbmc6XCJlYXNlLWluLW91dFwiLGR1cmF0aW9uOjMwMCxvcGVuZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaXMoXCJpbWdcIik/YTphLmZpbmQoXCJpbWdcIil9fSxwcm90bzp7aW5pdFpvb206ZnVuY3Rpb24oKXt2YXIgYSxjPWIuc3Quem9vbSxkPVwiLnpvb21cIjtpZihjLmVuYWJsZWQmJmIuc3VwcG9ydHNUcmFuc2l0aW9uKXt2YXIgZSxmLGc9Yy5kdXJhdGlvbixqPWZ1bmN0aW9uKGEpe3ZhciBiPWEuY2xvbmUoKS5yZW1vdmVBdHRyKFwic3R5bGVcIikucmVtb3ZlQXR0cihcImNsYXNzXCIpLmFkZENsYXNzKFwibWZwLWFuaW1hdGVkLWltYWdlXCIpLGQ9XCJhbGwgXCIrYy5kdXJhdGlvbi8xZTMrXCJzIFwiK2MuZWFzaW5nLGU9e3Bvc2l0aW9uOlwiZml4ZWRcIix6SW5kZXg6OTk5OSxsZWZ0OjAsdG9wOjAsXCItd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHlcIjpcImhpZGRlblwifSxmPVwidHJhbnNpdGlvblwiO3JldHVybiBlW1wiLXdlYmtpdC1cIitmXT1lW1wiLW1vei1cIitmXT1lW1wiLW8tXCIrZl09ZVtmXT1kLGIuY3NzKGUpLGJ9LGs9ZnVuY3Rpb24oKXtiLmNvbnRlbnQuY3NzKFwidmlzaWJpbGl0eVwiLFwidmlzaWJsZVwiKX07dyhcIkJ1aWxkQ29udHJvbHNcIitkLGZ1bmN0aW9uKCl7aWYoYi5fYWxsb3dab29tKCkpe2lmKGNsZWFyVGltZW91dChlKSxiLmNvbnRlbnQuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLGE9Yi5fZ2V0SXRlbVRvWm9vbSgpLCFhKXJldHVybiB2b2lkIGsoKTtmPWooYSksZi5jc3MoYi5fZ2V0T2Zmc2V0KCkpLGIud3JhcC5hcHBlbmQoZiksZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zi5jc3MoYi5fZ2V0T2Zmc2V0KCEwKSksZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmLnJlbW92ZSgpLGE9Zj1udWxsLHkoXCJab29tQW5pbWF0aW9uRW5kZWRcIil9LDE2KX0sZyl9LDE2KX19KSx3KGkrZCxmdW5jdGlvbigpe2lmKGIuX2FsbG93Wm9vbSgpKXtpZihjbGVhclRpbWVvdXQoZSksYi5zdC5yZW1vdmFsRGVsYXk9ZywhYSl7aWYoYT1iLl9nZXRJdGVtVG9ab29tKCksIWEpcmV0dXJuO2Y9aihhKX1mLmNzcyhiLl9nZXRPZmZzZXQoITApKSxiLndyYXAuYXBwZW5kKGYpLGIuY29udGVudC5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIiksc2V0VGltZW91dChmdW5jdGlvbigpe2YuY3NzKGIuX2dldE9mZnNldCgpKX0sMTYpfX0pLHcoaCtkLGZ1bmN0aW9uKCl7Yi5fYWxsb3dab29tKCkmJihrKCksZiYmZi5yZW1vdmUoKSxhPW51bGwpfSl9fSxfYWxsb3dab29tOmZ1bmN0aW9uKCl7cmV0dXJuXCJpbWFnZVwiPT09Yi5jdXJySXRlbS50eXBlfSxfZ2V0SXRlbVRvWm9vbTpmdW5jdGlvbigpe3JldHVybiBiLmN1cnJJdGVtLmhhc1NpemU/Yi5jdXJySXRlbS5pbWc6ITF9LF9nZXRPZmZzZXQ6ZnVuY3Rpb24oYyl7dmFyIGQ7ZD1jP2IuY3Vyckl0ZW0uaW1nOmIuc3Quem9vbS5vcGVuZXIoYi5jdXJySXRlbS5lbHx8Yi5jdXJySXRlbSk7dmFyIGU9ZC5vZmZzZXQoKSxmPXBhcnNlSW50KGQuY3NzKFwicGFkZGluZy10b3BcIiksMTApLGc9cGFyc2VJbnQoZC5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSwxMCk7ZS50b3AtPWEod2luZG93KS5zY3JvbGxUb3AoKS1mO3ZhciBoPXt3aWR0aDpkLndpZHRoKCksaGVpZ2h0Oih1P2QuaW5uZXJIZWlnaHQoKTpkWzBdLm9mZnNldEhlaWdodCktZy1mfTtyZXR1cm4gTygpP2hbXCItbW96LXRyYW5zZm9ybVwiXT1oLnRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIitlLmxlZnQrXCJweCxcIitlLnRvcCtcInB4KVwiOihoLmxlZnQ9ZS5sZWZ0LGgudG9wPWUudG9wKSxofX19KTt2YXIgUD1cImlmcmFtZVwiLFE9XCIvL2Fib3V0OmJsYW5rXCIsUj1mdW5jdGlvbihhKXtpZihiLmN1cnJUZW1wbGF0ZVtQXSl7dmFyIGM9Yi5jdXJyVGVtcGxhdGVbUF0uZmluZChcImlmcmFtZVwiKTtjLmxlbmd0aCYmKGF8fChjWzBdLnNyYz1RKSxiLmlzSUU4JiZjLmNzcyhcImRpc3BsYXlcIixhP1wiYmxvY2tcIjpcIm5vbmVcIikpfX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFAse29wdGlvbnM6e21hcmt1cDonPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+PGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PjxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgc3JjPVwiLy9hYm91dDpibGFua1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT48L2Rpdj4nLHNyY0FjdGlvbjpcImlmcmFtZV9zcmNcIixwYXR0ZXJuczp7eW91dHViZTp7aW5kZXg6XCJ5b3V0dWJlLmNvbVwiLGlkOlwidj1cIixzcmM6XCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTFcIn0sdmltZW86e2luZGV4OlwidmltZW8uY29tL1wiLGlkOlwiL1wiLHNyYzpcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTFcIn0sZ21hcHM6e2luZGV4OlwiLy9tYXBzLmdvb2dsZS5cIixzcmM6XCIlaWQlJm91dHB1dD1lbWJlZFwifX19LHByb3RvOntpbml0SWZyYW1lOmZ1bmN0aW9uKCl7Yi50eXBlcy5wdXNoKFApLHcoXCJCZWZvcmVDaGFuZ2VcIixmdW5jdGlvbihhLGIsYyl7YiE9PWMmJihiPT09UD9SKCk6Yz09PVAmJlIoITApKX0pLHcoaCtcIi5cIitQLGZ1bmN0aW9uKCl7UigpfSl9LGdldElmcmFtZTpmdW5jdGlvbihjLGQpe3ZhciBlPWMuc3JjLGY9Yi5zdC5pZnJhbWU7YS5lYWNoKGYucGF0dGVybnMsZnVuY3Rpb24oKXtyZXR1cm4gZS5pbmRleE9mKHRoaXMuaW5kZXgpPi0xPyh0aGlzLmlkJiYoZT1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5pZD9lLnN1YnN0cihlLmxhc3RJbmRleE9mKHRoaXMuaWQpK3RoaXMuaWQubGVuZ3RoLGUubGVuZ3RoKTp0aGlzLmlkLmNhbGwodGhpcyxlKSksZT10aGlzLnNyYy5yZXBsYWNlKFwiJWlkJVwiLGUpLCExKTp2b2lkIDB9KTt2YXIgZz17fTtyZXR1cm4gZi5zcmNBY3Rpb24mJihnW2Yuc3JjQWN0aW9uXT1lKSxiLl9wYXJzZU1hcmt1cChkLGcsYyksYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSxkfX19KTt2YXIgUz1mdW5jdGlvbihhKXt2YXIgYz1iLml0ZW1zLmxlbmd0aDtyZXR1cm4gYT5jLTE/YS1jOjA+YT9jK2E6YX0sVD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGEucmVwbGFjZSgvJWN1cnIlL2dpLGIrMSkucmVwbGFjZSgvJXRvdGFsJS9naSxjKX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFwiZ2FsbGVyeVwiLHtvcHRpb25zOntlbmFibGVkOiExLGFycm93TWFya3VwOic8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1hcnJvdyBtZnAtYXJyb3ctJWRpciVcIj48L2J1dHRvbj4nLHByZWxvYWQ6WzAsMl0sbmF2aWdhdGVCeUltZ0NsaWNrOiEwLGFycm93czohMCx0UHJldjpcIlByZXZpb3VzIChMZWZ0IGFycm93IGtleSlcIix0TmV4dDpcIk5leHQgKFJpZ2h0IGFycm93IGtleSlcIix0Q291bnRlcjpcIiVjdXJyJSBvZiAldG90YWwlXCJ9LHByb3RvOntpbml0R2FsbGVyeTpmdW5jdGlvbigpe3ZhciBjPWIuc3QuZ2FsbGVyeSxlPVwiLm1mcC1nYWxsZXJ5XCI7cmV0dXJuIGIuZGlyZWN0aW9uPSEwLGMmJmMuZW5hYmxlZD8oZis9XCIgbWZwLWdhbGxlcnlcIix3KG0rZSxmdW5jdGlvbigpe2MubmF2aWdhdGVCeUltZ0NsaWNrJiZiLndyYXAub24oXCJjbGlja1wiK2UsXCIubWZwLWltZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGIuaXRlbXMubGVuZ3RoPjE/KGIubmV4dCgpLCExKTp2b2lkIDB9KSxkLm9uKFwia2V5ZG93blwiK2UsZnVuY3Rpb24oYSl7Mzc9PT1hLmtleUNvZGU/Yi5wcmV2KCk6Mzk9PT1hLmtleUNvZGUmJmIubmV4dCgpfSl9KSx3KFwiVXBkYXRlU3RhdHVzXCIrZSxmdW5jdGlvbihhLGMpe2MudGV4dCYmKGMudGV4dD1UKGMudGV4dCxiLmN1cnJJdGVtLmluZGV4LGIuaXRlbXMubGVuZ3RoKSl9KSx3KGwrZSxmdW5jdGlvbihhLGQsZSxmKXt2YXIgZz1iLml0ZW1zLmxlbmd0aDtlLmNvdW50ZXI9Zz4xP1QoYy50Q291bnRlcixmLmluZGV4LGcpOlwiXCJ9KSx3KFwiQnVpbGRDb250cm9sc1wiK2UsZnVuY3Rpb24oKXtpZihiLml0ZW1zLmxlbmd0aD4xJiZjLmFycm93cyYmIWIuYXJyb3dMZWZ0KXt2YXIgZD1jLmFycm93TWFya3VwLGU9Yi5hcnJvd0xlZnQ9YShkLnJlcGxhY2UoLyV0aXRsZSUvZ2ksYy50UHJldikucmVwbGFjZSgvJWRpciUvZ2ksXCJsZWZ0XCIpKS5hZGRDbGFzcyhzKSxmPWIuYXJyb3dSaWdodD1hKGQucmVwbGFjZSgvJXRpdGxlJS9naSxjLnROZXh0KS5yZXBsYWNlKC8lZGlyJS9naSxcInJpZ2h0XCIpKS5hZGRDbGFzcyhzKTtlLmNsaWNrKGZ1bmN0aW9uKCl7Yi5wcmV2KCl9KSxmLmNsaWNrKGZ1bmN0aW9uKCl7Yi5uZXh0KCl9KSxiLmNvbnRhaW5lci5hcHBlbmQoZS5hZGQoZikpfX0pLHcobitlLGZ1bmN0aW9uKCl7Yi5fcHJlbG9hZFRpbWVvdXQmJmNsZWFyVGltZW91dChiLl9wcmVsb2FkVGltZW91dCksYi5fcHJlbG9hZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2IucHJlbG9hZE5lYXJieUltYWdlcygpLGIuX3ByZWxvYWRUaW1lb3V0PW51bGx9LDE2KX0pLHZvaWQgdyhoK2UsZnVuY3Rpb24oKXtkLm9mZihlKSxiLndyYXAub2ZmKFwiY2xpY2tcIitlKSxiLmFycm93UmlnaHQ9Yi5hcnJvd0xlZnQ9bnVsbH0pKTohMX0sbmV4dDpmdW5jdGlvbigpe2IuZGlyZWN0aW9uPSEwLGIuaW5kZXg9UyhiLmluZGV4KzEpLGIudXBkYXRlSXRlbUhUTUwoKX0scHJldjpmdW5jdGlvbigpe2IuZGlyZWN0aW9uPSExLGIuaW5kZXg9UyhiLmluZGV4LTEpLGIudXBkYXRlSXRlbUhUTUwoKX0sZ29UbzpmdW5jdGlvbihhKXtiLmRpcmVjdGlvbj1hPj1iLmluZGV4LGIuaW5kZXg9YSxiLnVwZGF0ZUl0ZW1IVE1MKCl9LHByZWxvYWROZWFyYnlJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgYSxjPWIuc3QuZ2FsbGVyeS5wcmVsb2FkLGQ9TWF0aC5taW4oY1swXSxiLml0ZW1zLmxlbmd0aCksZT1NYXRoLm1pbihjWzFdLGIuaXRlbXMubGVuZ3RoKTtmb3IoYT0xO2E8PShiLmRpcmVjdGlvbj9lOmQpO2ErKyliLl9wcmVsb2FkSXRlbShiLmluZGV4K2EpO2ZvcihhPTE7YTw9KGIuZGlyZWN0aW9uP2Q6ZSk7YSsrKWIuX3ByZWxvYWRJdGVtKGIuaW5kZXgtYSl9LF9wcmVsb2FkSXRlbTpmdW5jdGlvbihjKXtpZihjPVMoYyksIWIuaXRlbXNbY10ucHJlbG9hZGVkKXt2YXIgZD1iLml0ZW1zW2NdO2QucGFyc2VkfHwoZD1iLnBhcnNlRWwoYykpLHkoXCJMYXp5TG9hZFwiLGQpLFwiaW1hZ2VcIj09PWQudHlwZSYmKGQuaW1nPWEoJzxpbWcgY2xhc3M9XCJtZnAtaW1nXCIgLz4nKS5vbihcImxvYWQubWZwbG9hZGVyXCIsZnVuY3Rpb24oKXtkLmhhc1NpemU9ITB9KS5vbihcImVycm9yLm1mcGxvYWRlclwiLGZ1bmN0aW9uKCl7ZC5oYXNTaXplPSEwLGQubG9hZEVycm9yPSEwLHkoXCJMYXp5TG9hZEVycm9yXCIsZCl9KS5hdHRyKFwic3JjXCIsZC5zcmMpKSxkLnByZWxvYWRlZD0hMH19fX0pO3ZhciBVPVwicmV0aW5hXCI7YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFUse29wdGlvbnM6e3JlcGxhY2VTcmM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3JjLnJlcGxhY2UoL1xcLlxcdyskLyxmdW5jdGlvbihhKXtyZXR1cm5cIkAyeFwiK2F9KX0scmF0aW86MX0scHJvdG86e2luaXRSZXRpbmE6ZnVuY3Rpb24oKXtpZih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xKXt2YXIgYT1iLnN0LnJldGluYSxjPWEucmF0aW87Yz1pc05hTihjKT9jKCk6YyxjPjEmJih3KFwiSW1hZ2VIYXNTaXplLlwiK1UsZnVuY3Rpb24oYSxiKXtiLmltZy5jc3Moe1wibWF4LXdpZHRoXCI6Yi5pbWdbMF0ubmF0dXJhbFdpZHRoL2Msd2lkdGg6XCIxMDAlXCJ9KX0pLHcoXCJFbGVtZW50UGFyc2UuXCIrVSxmdW5jdGlvbihiLGQpe2Quc3JjPWEucmVwbGFjZVNyYyhkLGMpfSkpfX19fSksQSgpfSk7XG4iLCIvKipcbiAqIE93bCBDYXJvdXNlbCB2Mi4zLjRcbiAqIENvcHlyaWdodCAyMDEzLTIwMTggRGF2aWQgRGV1dHNjaFxuICogTGljZW5zZWQgdW5kZXI6IFNFRSBMSUNFTlNFIElOIGh0dHBzOi8vZ2l0aHViLmNvbS9Pd2xDYXJvdXNlbDIvT3dsQ2Fyb3VzZWwyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuLyoqXG4gKiBPd2wgY2Fyb3VzZWxcbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIEB0b2RvIExhenkgTG9hZCBJY29uXG4gKiBAdG9kbyBwcmV2ZW50IGFuaW1hdGlvbmVuZCBidWJsaW5nXG4gKiBAdG9kbyBpdGVtc1NjYWxlVXBcbiAqIEB0b2RvIFRlc3QgWmVwdG9cbiAqIEB0b2RvIHN0YWdlUGFkZGluZyBjYWxjdWxhdGUgd3JvbmcgYWN0aXZlIGNsYXNzZXNcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGNhcm91c2VsLlxuXHQgKiBAY2xhc3MgVGhlIE93bCBDYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeX0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGNyZWF0ZSB0aGUgY2Fyb3VzZWwgZm9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnNcblx0ICovXG5cdGZ1bmN0aW9uIE93bChlbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNldHRpbmdzIGZvciB0aGUgY2Fyb3VzZWwuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBvcHRpb25zIHNldCBieSB0aGUgY2FsbGVyIGluY2x1ZGluZyBkZWZhdWx0cy5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE93bC5EZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0XHQvKipcblx0XHQgKiBQbHVnaW4gZWxlbWVudC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHQvKipcblx0XHQgKiBQcm94aWVkIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlcyB0byB0aGUgcnVubmluZyBwbHVnaW5zIG9mIHRoaXMgY2Fyb3VzZWwuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3BsdWdpbnMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnRseSBzdXBwcmVzc2VkIGV2ZW50cyB0byBwcmV2ZW50IHRoZW0gZnJvbSBiZWluZyByZXRyaWdnZXJlZC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3VwcmVzcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWJzb2x1dGUgY3VycmVudCBwb3NpdGlvbi5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY3VycmVudCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9zcGVlZCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDb29yZGluYXRlcyBvZiBhbGwgaXRlbXMgaW4gcGl4ZWwuXG5cdFx0ICogQHRvZG8gVGhlIG5hbWUgb2YgdGhpcyBtZW1iZXIgaXMgbWlzc2xlYWRpbmcuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2Nvb3JkaW5hdGVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGJyZWFrcG9pbnQuXG5cdFx0ICogQHRvZG8gUmVhbCBtZWRpYSBxdWVyaWVzIHdvdWxkIGJlIG5pY2UuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCB3aWR0aCBvZiB0aGUgcGx1Z2luIGVsZW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy5fd2lkdGggPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIHJlYWwgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2l0ZW1zID0gW107XG5cblx0XHQvKipcblx0XHQgKiBBbGwgY2xvbmVkIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jbG9uZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIE1lcmdlIHZhbHVlcyBvZiBhbGwgaXRlbXMuXG5cdFx0ICogQHRvZG8gTWF5YmUgdGhpcyBjb3VsZCBiZSBwYXJ0IG9mIGEgcGx1Z2luLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9tZXJnZXJzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBXaWR0aHMgb2YgYWxsIGl0ZW1zLlxuXHRcdCAqL1xuXHRcdHRoaXMuX3dpZHRocyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogSW52YWxpZGF0ZWQgcGFydHMgd2l0aGluIHRoZSB1cGRhdGUgcHJvY2Vzcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faW52YWxpZGF0ZWQgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIE9yZGVyZWQgbGlzdCBvZiB3b3JrZXJzIGZvciB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3BpcGUgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUgaW5mb3JtYXRpb24gZm9yIHRoZSBkcmFnIG9wZXJhdGlvbi5cblx0XHQgKiBAdG9kbyAjMjYxXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2RyYWcgPSB7XG5cdFx0XHR0aW1lOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiBudWxsLFxuXHRcdFx0cG9pbnRlcjogbnVsbCxcblx0XHRcdHN0YWdlOiB7XG5cdFx0XHRcdHN0YXJ0OiBudWxsLFxuXHRcdFx0XHRjdXJyZW50OiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0ZGlyZWN0aW9uOiBudWxsXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUgaW5mb3JtYXRpb24gYW5kIHRoZWlyIHRhZ3MuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3RhdGVzID0ge1xuXHRcdFx0Y3VycmVudDoge30sXG5cdFx0XHR0YWdzOiB7XG5cdFx0XHRcdCdpbml0aWFsaXppbmcnOiBbICdidXN5JyBdLFxuXHRcdFx0XHQnYW5pbWF0aW5nJzogWyAnYnVzeScgXSxcblx0XHRcdFx0J2RyYWdnaW5nJzogWyAnaW50ZXJhY3RpbmcnIF1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0JC5lYWNoKFsgJ29uUmVzaXplJywgJ29uVGhyb3R0bGVkUmVzaXplJyBdLCAkLnByb3h5KGZ1bmN0aW9uKGksIGhhbmRsZXIpIHtcblx0XHRcdHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdID0gJC5wcm94eSh0aGlzW2hhbmRsZXJdLCB0aGlzKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQkLmVhY2goT3dsLlBsdWdpbnMsICQucHJveHkoZnVuY3Rpb24oa2V5LCBwbHVnaW4pIHtcblx0XHRcdHRoaXMuX3BsdWdpbnNba2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsga2V5LnNsaWNlKDEpXVxuXHRcdFx0XHQ9IG5ldyBwbHVnaW4odGhpcyk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0JC5lYWNoKE93bC5Xb3JrZXJzLCAkLnByb3h5KGZ1bmN0aW9uKHByaW9yaXR5LCB3b3JrZXIpIHtcblx0XHRcdHRoaXMuX3BpcGUucHVzaCh7XG5cdFx0XHRcdCdmaWx0ZXInOiB3b3JrZXIuZmlsdGVyLFxuXHRcdFx0XHQncnVuJzogJC5wcm94eSh3b3JrZXIucnVuLCB0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5zZXR1cCgpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wuRGVmYXVsdHMgPSB7XG5cdFx0aXRlbXM6IDMsXG5cdFx0bG9vcDogZmFsc2UsXG5cdFx0Y2VudGVyOiBmYWxzZSxcblx0XHRyZXdpbmQ6IGZhbHNlLFxuXHRcdGNoZWNrVmlzaWJpbGl0eTogdHJ1ZSxcblxuXHRcdG1vdXNlRHJhZzogdHJ1ZSxcblx0XHR0b3VjaERyYWc6IHRydWUsXG5cdFx0cHVsbERyYWc6IHRydWUsXG5cdFx0ZnJlZURyYWc6IGZhbHNlLFxuXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHN0YWdlUGFkZGluZzogMCxcblxuXHRcdG1lcmdlOiBmYWxzZSxcblx0XHRtZXJnZUZpdDogdHJ1ZSxcblx0XHRhdXRvV2lkdGg6IGZhbHNlLFxuXG5cdFx0c3RhcnRQb3NpdGlvbjogMCxcblx0XHRydGw6IGZhbHNlLFxuXG5cdFx0c21hcnRTcGVlZDogMjUwLFxuXHRcdGZsdWlkU3BlZWQ6IGZhbHNlLFxuXHRcdGRyYWdFbmRTcGVlZDogZmFsc2UsXG5cblx0XHRyZXNwb25zaXZlOiB7fSxcblx0XHRyZXNwb25zaXZlUmVmcmVzaFJhdGU6IDIwMCxcblx0XHRyZXNwb25zaXZlQmFzZUVsZW1lbnQ6IHdpbmRvdyxcblxuXHRcdGZhbGxiYWNrRWFzaW5nOiAnc3dpbmcnLFxuXHRcdHNsaWRlVHJhbnNpdGlvbjogJycsXG5cblx0XHRpbmZvOiBmYWxzZSxcblxuXHRcdG5lc3RlZEl0ZW1TZWxlY3RvcjogZmFsc2UsXG5cdFx0aXRlbUVsZW1lbnQ6ICdkaXYnLFxuXHRcdHN0YWdlRWxlbWVudDogJ2RpdicsXG5cblx0XHRyZWZyZXNoQ2xhc3M6ICdvd2wtcmVmcmVzaCcsXG5cdFx0bG9hZGVkQ2xhc3M6ICdvd2wtbG9hZGVkJyxcblx0XHRsb2FkaW5nQ2xhc3M6ICdvd2wtbG9hZGluZycsXG5cdFx0cnRsQ2xhc3M6ICdvd2wtcnRsJyxcblx0XHRyZXNwb25zaXZlQ2xhc3M6ICdvd2wtcmVzcG9uc2l2ZScsXG5cdFx0ZHJhZ0NsYXNzOiAnb3dsLWRyYWcnLFxuXHRcdGl0ZW1DbGFzczogJ293bC1pdGVtJyxcblx0XHRzdGFnZUNsYXNzOiAnb3dsLXN0YWdlJyxcblx0XHRzdGFnZU91dGVyQ2xhc3M6ICdvd2wtc3RhZ2Utb3V0ZXInLFxuXHRcdGdyYWJDbGFzczogJ293bC1ncmFiJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnVtZXJhdGlvbiBmb3Igd2lkdGguXG5cdCAqIEBwdWJsaWNcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBlbnVtIHtTdHJpbmd9XG5cdCAqL1xuXHRPd2wuV2lkdGggPSB7XG5cdFx0RGVmYXVsdDogJ2RlZmF1bHQnLFxuXHRcdElubmVyOiAnaW5uZXInLFxuXHRcdE91dGVyOiAnb3V0ZXInXG5cdH07XG5cblx0LyoqXG5cdCAqIEVudW1lcmF0aW9uIGZvciB0eXBlcy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcmVhZG9ubHlcblx0ICogQGVudW0ge1N0cmluZ31cblx0ICovXG5cdE93bC5UeXBlID0ge1xuXHRcdEV2ZW50OiAnZXZlbnQnLFxuXHRcdFN0YXRlOiAnc3RhdGUnXG5cdH07XG5cblx0LyoqXG5cdCAqIENvbnRhaW5zIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5QbHVnaW5zID0ge307XG5cblx0LyoqXG5cdCAqIExpc3Qgb2Ygd29ya2VycyBpbnZvbHZlZCBpbiB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdCAqL1xuXHRPd2wuV29ya2VycyA9IFsge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX3dpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IHRoaXMuX2l0ZW1zICYmIHRoaXMuX2l0ZW1zW3RoaXMucmVsYXRpdmUodGhpcy5fY3VycmVudCldO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2xvbmVkJykucmVtb3ZlKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgbWFyZ2luID0gdGhpcy5zZXR0aW5ncy5tYXJnaW4gfHwgJycsXG5cdFx0XHRcdGdyaWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsXG5cdFx0XHRcdHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsLFxuXHRcdFx0XHRjc3MgPSB7XG5cdFx0XHRcdFx0J3dpZHRoJzogJ2F1dG8nLFxuXHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IHJ0bCA/IG1hcmdpbiA6ICcnLFxuXHRcdFx0XHRcdCdtYXJnaW4tcmlnaHQnOiBydGwgPyAnJyA6IG1hcmdpblxuXHRcdFx0XHR9O1xuXG5cdFx0XHQhZ3JpZCAmJiB0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmNzcyhjc3MpO1xuXG5cdFx0XHRjYWNoZS5jc3MgPSBjc3M7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgd2lkdGggPSAodGhpcy53aWR0aCgpIC8gdGhpcy5zZXR0aW5ncy5pdGVtcykudG9GaXhlZCgzKSAtIHRoaXMuc2V0dGluZ3MubWFyZ2luLFxuXHRcdFx0XHRtZXJnZSA9IG51bGwsXG5cdFx0XHRcdGl0ZXJhdG9yID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHR3aWR0aHMgPSBbXTtcblxuXHRcdFx0Y2FjaGUuaXRlbXMgPSB7XG5cdFx0XHRcdG1lcmdlOiBmYWxzZSxcblx0XHRcdFx0d2lkdGg6IHdpZHRoXG5cdFx0XHR9O1xuXG5cdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRtZXJnZSA9IHRoaXMuX21lcmdlcnNbaXRlcmF0b3JdO1xuXHRcdFx0XHRtZXJnZSA9IHRoaXMuc2V0dGluZ3MubWVyZ2VGaXQgJiYgTWF0aC5taW4obWVyZ2UsIHRoaXMuc2V0dGluZ3MuaXRlbXMpIHx8IG1lcmdlO1xuXG5cdFx0XHRcdGNhY2hlLml0ZW1zLm1lcmdlID0gbWVyZ2UgPiAxIHx8IGNhY2hlLml0ZW1zLm1lcmdlO1xuXG5cdFx0XHRcdHdpZHRoc1tpdGVyYXRvcl0gPSAhZ3JpZCA/IHRoaXMuX2l0ZW1zW2l0ZXJhdG9yXS53aWR0aCgpIDogd2lkdGggKiBtZXJnZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fd2lkdGhzID0gd2lkdGhzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjbG9uZXMgPSBbXSxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLl9pdGVtcyxcblx0XHRcdFx0c2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLFxuXHRcdFx0XHQvLyBUT0RPOiBTaG91bGQgYmUgY29tcHV0ZWQgZnJvbSBudW1iZXIgb2YgbWluIHdpZHRoIGl0ZW1zIGluIHN0YWdlXG5cdFx0XHRcdHZpZXcgPSBNYXRoLm1heChzZXR0aW5ncy5pdGVtcyAqIDIsIDQpLFxuXHRcdFx0XHRzaXplID0gTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIDIpICogMixcblx0XHRcdFx0cmVwZWF0ID0gc2V0dGluZ3MubG9vcCAmJiBpdGVtcy5sZW5ndGggPyBzZXR0aW5ncy5yZXdpbmQgPyB2aWV3IDogTWF0aC5tYXgodmlldywgc2l6ZSkgOiAwLFxuXHRcdFx0XHRhcHBlbmQgPSAnJyxcblx0XHRcdFx0cHJlcGVuZCA9ICcnO1xuXG5cdFx0XHRyZXBlYXQgLz0gMjtcblxuXHRcdFx0d2hpbGUgKHJlcGVhdCA+IDApIHtcblx0XHRcdFx0Ly8gU3dpdGNoIHRvIG9ubHkgdXNpbmcgYXBwZW5kZWQgY2xvbmVzXG5cdFx0XHRcdGNsb25lcy5wdXNoKHRoaXMubm9ybWFsaXplKGNsb25lcy5sZW5ndGggLyAyLCB0cnVlKSk7XG5cdFx0XHRcdGFwcGVuZCA9IGFwcGVuZCArIGl0ZW1zW2Nsb25lc1tjbG9uZXMubGVuZ3RoIC0gMV1dWzBdLm91dGVySFRNTDtcblx0XHRcdFx0Y2xvbmVzLnB1c2godGhpcy5ub3JtYWxpemUoaXRlbXMubGVuZ3RoIC0gMSAtIChjbG9uZXMubGVuZ3RoIC0gMSkgLyAyLCB0cnVlKSk7XG5cdFx0XHRcdHByZXBlbmQgPSBpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXVswXS5vdXRlckhUTUwgKyBwcmVwZW5kO1xuXHRcdFx0XHRyZXBlYXQgLT0gMTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY2xvbmVzID0gY2xvbmVzO1xuXG5cdFx0XHQkKGFwcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLmFwcGVuZFRvKHRoaXMuJHN0YWdlKTtcblx0XHRcdCQocHJlcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLnByZXBlbmRUbyh0aGlzLiRzdGFnZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsID8gMSA6IC0xLFxuXHRcdFx0XHRzaXplID0gdGhpcy5fY2xvbmVzLmxlbmd0aCArIHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdFx0aXRlcmF0b3IgPSAtMSxcblx0XHRcdFx0cHJldmlvdXMgPSAwLFxuXHRcdFx0XHRjdXJyZW50ID0gMCxcblx0XHRcdFx0Y29vcmRpbmF0ZXMgPSBbXTtcblxuXHRcdFx0d2hpbGUgKCsraXRlcmF0b3IgPCBzaXplKSB7XG5cdFx0XHRcdHByZXZpb3VzID0gY29vcmRpbmF0ZXNbaXRlcmF0b3IgLSAxXSB8fCAwO1xuXHRcdFx0XHRjdXJyZW50ID0gdGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUoaXRlcmF0b3IpXSArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdFx0XHRjb29yZGluYXRlcy5wdXNoKHByZXZpb3VzICsgY3VycmVudCAqIHJ0bCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHBhZGRpbmcgPSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyxcblx0XHRcdFx0Y29vcmRpbmF0ZXMgPSB0aGlzLl9jb29yZGluYXRlcyxcblx0XHRcdFx0Y3NzID0ge1xuXHRcdFx0XHRcdCd3aWR0aCc6IE1hdGguY2VpbChNYXRoLmFicyhjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXSkpICsgcGFkZGluZyAqIDIsXG5cdFx0XHRcdFx0J3BhZGRpbmctbGVmdCc6IHBhZGRpbmcgfHwgJycsXG5cdFx0XHRcdFx0J3BhZGRpbmctcmlnaHQnOiBwYWRkaW5nIHx8ICcnXG5cdFx0XHRcdH07XG5cblx0XHRcdHRoaXMuJHN0YWdlLmNzcyhjc3MpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIGl0ZXJhdG9yID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuJHN0YWdlLmNoaWxkcmVuKCk7XG5cblx0XHRcdGlmIChncmlkICYmIGNhY2hlLml0ZW1zLm1lcmdlKSB7XG5cdFx0XHRcdHdoaWxlIChpdGVyYXRvci0tKSB7XG5cdFx0XHRcdFx0Y2FjaGUuY3NzLndpZHRoID0gdGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUoaXRlcmF0b3IpXTtcblx0XHRcdFx0XHRpdGVtcy5lcShpdGVyYXRvcikuY3NzKGNhY2hlLmNzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZ3JpZCkge1xuXHRcdFx0XHRjYWNoZS5jc3Mud2lkdGggPSBjYWNoZS5pdGVtcy53aWR0aDtcblx0XHRcdFx0aXRlbXMuY3NzKGNhY2hlLmNzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdpdGVtcycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoIDwgMSAmJiB0aGlzLiRzdGFnZS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IGNhY2hlLmN1cnJlbnQgPyB0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmluZGV4KGNhY2hlLmN1cnJlbnQpIDogMDtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSBNYXRoLm1heCh0aGlzLm1pbmltdW0oKSwgTWF0aC5taW4odGhpcy5tYXhpbXVtKCksIGNhY2hlLmN1cnJlbnQpKTtcblx0XHRcdHRoaXMucmVzZXQoY2FjaGUuY3VycmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdwb3NpdGlvbicgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXModGhpcy5fY3VycmVudCkpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAncG9zaXRpb24nLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCA/IDEgOiAtMSxcblx0XHRcdFx0cGFkZGluZyA9IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nICogMixcblx0XHRcdFx0YmVnaW4gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMuY3VycmVudCgpKSArIHBhZGRpbmcsXG5cdFx0XHRcdGVuZCA9IGJlZ2luICsgdGhpcy53aWR0aCgpICogcnRsLFxuXHRcdFx0XHRpbm5lciwgb3V0ZXIsIG1hdGNoZXMgPSBbXSwgaSwgbjtcblxuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRpbm5lciA9IHRoaXMuX2Nvb3JkaW5hdGVzW2kgLSAxXSB8fCAwO1xuXHRcdFx0XHRvdXRlciA9IE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzW2ldKSArIHBhZGRpbmcgKiBydGw7XG5cblx0XHRcdFx0aWYgKCh0aGlzLm9wKGlubmVyLCAnPD0nLCBiZWdpbikgJiYgKHRoaXMub3AoaW5uZXIsICc+JywgZW5kKSkpXG5cdFx0XHRcdFx0fHwgKHRoaXMub3Aob3V0ZXIsICc8JywgYmVnaW4pICYmIHRoaXMub3Aob3V0ZXIsICc+JywgZW5kKSkpIHtcblx0XHRcdFx0XHRtYXRjaGVzLnB1c2goaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignOmVxKCcgKyBtYXRjaGVzLmpvaW4oJyksIDplcSgnKSArICcpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNlbnRlcicpLnJlbW92ZUNsYXNzKCdjZW50ZXInKTtcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMuY3VycmVudCgpKS5hZGRDbGFzcygnY2VudGVyJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IF07XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB0aGUgc3RhZ2UgRE9NIGVsZW1lbnRcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaW5pdGlhbGl6ZVN0YWdlID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy4kc3RhZ2UgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy4nICsgdGhpcy5zZXR0aW5ncy5zdGFnZUNsYXNzKTtcblxuXHRcdC8vIGlmIHRoZSBzdGFnZSBpcyBhbHJlYWR5IGluIHRoZSBET00sIGdyYWIgaXQgYW5kIHNraXAgc3RhZ2UgaW5pdGlhbGl6YXRpb25cblx0XHRpZiAodGhpcy4kc3RhZ2UubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZ0NsYXNzKTtcblxuXHRcdC8vIGNyZWF0ZSBzdGFnZVxuXHRcdHRoaXMuJHN0YWdlID0gJCgnPCcgKyB0aGlzLnNldHRpbmdzLnN0YWdlRWxlbWVudCArICc+Jywge1xuXHRcdFx0XCJjbGFzc1wiOiB0aGlzLnNldHRpbmdzLnN0YWdlQ2xhc3Ncblx0XHR9KS53cmFwKCAkKCAnPGRpdi8+Jywge1xuXHRcdFx0XCJjbGFzc1wiOiB0aGlzLnNldHRpbmdzLnN0YWdlT3V0ZXJDbGFzc1xuXHRcdH0pKTtcblxuXHRcdC8vIGFwcGVuZCBzdGFnZVxuXHRcdHRoaXMuJGVsZW1lbnQuYXBwZW5kKHRoaXMuJHN0YWdlLnBhcmVudCgpKTtcblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlIGl0ZW0gRE9NIGVsZW1lbnRzXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmluaXRpYWxpemVJdGVtcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciAkaXRlbXMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5vd2wtaXRlbScpO1xuXG5cdFx0Ly8gaWYgdGhlIGl0ZW1zIGFyZSBhbHJlYWR5IGluIHRoZSBET00sIGdyYWIgdGhlbSBhbmQgc2tpcCBpdGVtIGluaXRpYWxpemF0aW9uXG5cdFx0aWYgKCRpdGVtcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX2l0ZW1zID0gJGl0ZW1zLmdldCgpLm1hcChmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRcdHJldHVybiAkKGl0ZW0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuX21lcmdlcnMgPSB0aGlzLl9pdGVtcy5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gYXBwZW5kIGNvbnRlbnRcblx0XHR0aGlzLnJlcGxhY2UodGhpcy4kZWxlbWVudC5jaGlsZHJlbigpLm5vdCh0aGlzLiRzdGFnZS5wYXJlbnQoKSkpO1xuXG5cdFx0Ly8gY2hlY2sgdmlzaWJpbGl0eVxuXHRcdGlmICh0aGlzLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHQvLyB1cGRhdGUgdmlld1xuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGludmFsaWRhdGUgd2lkdGhcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgnd2lkdGgnKTtcblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50XG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcylcblx0XHRcdC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGVkQ2xhc3MpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW50ZXIoJ2luaXRpYWxpemluZycpO1xuXHRcdHRoaXMudHJpZ2dlcignaW5pdGlhbGl6ZScpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLnNldHRpbmdzLnJ0bENsYXNzLCB0aGlzLnNldHRpbmdzLnJ0bCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGggJiYgIXRoaXMuaXMoJ3ByZS1sb2FkaW5nJykpIHtcblx0XHRcdHZhciBpbWdzLCBuZXN0ZWRTZWxlY3Rvciwgd2lkdGg7XG5cdFx0XHRpbWdzID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbWcnKTtcblx0XHRcdG5lc3RlZFNlbGVjdG9yID0gdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgPyAnLicgKyB0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3RvciA6IHVuZGVmaW5lZDtcblx0XHRcdHdpZHRoID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihuZXN0ZWRTZWxlY3Rvcikud2lkdGgoKTtcblxuXHRcdFx0aWYgKGltZ3MubGVuZ3RoICYmIHdpZHRoIDw9IDApIHtcblx0XHRcdFx0dGhpcy5wcmVsb2FkQXV0b1dpZHRoSW1hZ2VzKGltZ3MpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhbGl6ZVN0YWdlKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplSXRlbXMoKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50SGFuZGxlcnMoKTtcblxuXHRcdHRoaXMubGVhdmUoJ2luaXRpYWxpemluZycpO1xuXHRcdHRoaXMudHJpZ2dlcignaW5pdGlhbGl6ZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogQHJldHVybnMge0Jvb2xlYW59IHZpc2liaWxpdHkgb2YgJGVsZW1lbnRcblx0ICogICAgICAgICAgICAgICAgICAgIGlmIHlvdSBrbm93IHRoZSBjYXJvdXNlbCB3aWxsIGFsd2F5cyBiZSB2aXNpYmxlIHlvdSBjYW4gc2V0IGBjaGVja1Zpc2liaWxpdHlgIHRvIGBmYWxzZWAgdG9cblx0ICogICAgICAgICAgICAgICAgICAgIHByZXZlbnQgdGhlIGV4cGVuc2l2ZSBicm93c2VyIGxheW91dCBmb3JjZWQgcmVmbG93IHRoZSAkZWxlbWVudC5pcygnOnZpc2libGUnKSBkb2VzXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnNldHRpbmdzLmNoZWNrVmlzaWJpbGl0eVxuXHRcdFx0PyB0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpXG5cdFx0XHQ6IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHVwcyB0aGUgY3VycmVudCBzZXR0aW5ncy5cblx0ICogQHRvZG8gUmVtb3ZlIHJlc3BvbnNpdmUgY2xhc3Nlcy4gV2h5IHNob3VsZCBhZGFwdGl2ZSBkZXNpZ25zIGJlIGJyb3VnaHQgaW50byBJRTg/XG5cdCAqIEB0b2RvIFN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgYnkgdXNpbmcgYG1hdGNoTWVkaWFgIHdvdWxkIGJlIG5pY2UuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0KCksXG5cdFx0XHRvdmVyd3JpdGVzID0gdGhpcy5vcHRpb25zLnJlc3BvbnNpdmUsXG5cdFx0XHRtYXRjaCA9IC0xLFxuXHRcdFx0c2V0dGluZ3MgPSBudWxsO1xuXG5cdFx0aWYgKCFvdmVyd3JpdGVzKSB7XG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkLmVhY2gob3ZlcndyaXRlcywgZnVuY3Rpb24oYnJlYWtwb2ludCkge1xuXHRcdFx0XHRpZiAoYnJlYWtwb2ludCA8PSB2aWV3cG9ydCAmJiBicmVha3BvaW50ID4gbWF0Y2gpIHtcblx0XHRcdFx0XHRtYXRjaCA9IE51bWJlcihicmVha3BvaW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3ZlcndyaXRlc1ttYXRjaF0pO1xuXHRcdFx0aWYgKHR5cGVvZiBzZXR0aW5ncy5zdGFnZVBhZGRpbmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0c2V0dGluZ3Muc3RhZ2VQYWRkaW5nID0gc2V0dGluZ3Muc3RhZ2VQYWRkaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgc2V0dGluZ3MucmVzcG9uc2l2ZTtcblxuXHRcdFx0Ly8gcmVzcG9uc2l2ZSBjbGFzc1xuXHRcdFx0aWYgKHNldHRpbmdzLnJlc3BvbnNpdmVDbGFzcykge1xuXHRcdFx0XHR0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJyxcblx0XHRcdFx0XHR0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQ2xhc3MgKyAnLSlcXFxcUytcXFxccycsICdnJyksICckMScgKyBtYXRjaClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3NldHRpbmdzJywgdmFsdWU6IHNldHRpbmdzIH0gfSk7XG5cdFx0dGhpcy5fYnJlYWtwb2ludCA9IG1hdGNoO1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblx0XHR0aGlzLmludmFsaWRhdGUoJ3NldHRpbmdzJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2VkJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAnc2V0dGluZ3MnLCB2YWx1ZTogdGhpcy5zZXR0aW5ncyB9IH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIG9wdGlvbiBsb2dpYyBpZiBuZWNlc3NlcnkuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUub3B0aW9uc0xvZ2ljID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoKSB7XG5cdFx0XHR0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5tZXJnZSA9IGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUHJlcGFyZXMgYW4gaXRlbSBiZWZvcmUgYWRkLlxuXHQgKiBAdG9kbyBSZW5hbWUgZXZlbnQgcGFyYW1ldGVyIGBjb250ZW50YCB0byBgaXRlbWAuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH0gLSBUaGUgaXRlbSBjb250YWluZXIuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZXBhcmUgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dmFyIGV2ZW50ID0gdGhpcy50cmlnZ2VyKCdwcmVwYXJlJywgeyBjb250ZW50OiBpdGVtIH0pO1xuXG5cdFx0aWYgKCFldmVudC5kYXRhKSB7XG5cdFx0XHRldmVudC5kYXRhID0gJCgnPCcgKyB0aGlzLnNldHRpbmdzLml0ZW1FbGVtZW50ICsgJy8+Jylcblx0XHRcdFx0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5pdGVtQ2xhc3MpLmFwcGVuZChpdGVtKVxuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncHJlcGFyZWQnLCB7IGNvbnRlbnQ6IGV2ZW50LmRhdGEgfSk7XG5cblx0XHRyZXR1cm4gZXZlbnQuZGF0YTtcblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgdmlldy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRuID0gdGhpcy5fcGlwZS5sZW5ndGgsXG5cdFx0XHRmaWx0ZXIgPSAkLnByb3h5KGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXNbcF0gfSwgdGhpcy5faW52YWxpZGF0ZWQpLFxuXHRcdFx0Y2FjaGUgPSB7fTtcblxuXHRcdHdoaWxlIChpIDwgbikge1xuXHRcdFx0aWYgKHRoaXMuX2ludmFsaWRhdGVkLmFsbCB8fCAkLmdyZXAodGhpcy5fcGlwZVtpXS5maWx0ZXIsIGZpbHRlcikubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLl9waXBlW2ldLnJ1bihjYWNoZSk7XG5cdFx0XHR9XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0dGhpcy5faW52YWxpZGF0ZWQgPSB7fTtcblxuXHRcdCF0aGlzLmlzKCd2YWxpZCcpICYmIHRoaXMuZW50ZXIoJ3ZhbGlkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSB2aWV3LlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7T3dsLldpZHRofSBbZGltZW5zaW9uPU93bC5XaWR0aC5EZWZhdWx0XSAtIFRoZSBkaW1lbnNpb24gdG8gcmV0dXJuLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSB3aWR0aCBvZiB0aGUgdmlldyBpbiBwaXhlbC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihkaW1lbnNpb24pIHtcblx0XHRkaW1lbnNpb24gPSBkaW1lbnNpb24gfHwgT3dsLldpZHRoLkRlZmF1bHQ7XG5cdFx0c3dpdGNoIChkaW1lbnNpb24pIHtcblx0XHRcdGNhc2UgT3dsLldpZHRoLklubmVyOlxuXHRcdFx0Y2FzZSBPd2wuV2lkdGguT3V0ZXI6XG5cdFx0XHRcdHJldHVybiB0aGlzLl93aWR0aDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLl93aWR0aCAtIHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nICogMiArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUmVmcmVzaGVzIHRoZSBjYXJvdXNlbCBwcmltYXJpbHkgZm9yIGFkYXB0aXZlIHB1cnBvc2VzLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVudGVyKCdyZWZyZXNoaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyZWZyZXNoJyk7XG5cblx0XHR0aGlzLnNldHVwKCk7XG5cblx0XHR0aGlzLm9wdGlvbnNMb2dpYygpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKTtcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpO1xuXG5cdFx0dGhpcy5sZWF2ZSgncmVmcmVzaGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVmcmVzaGVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aW5kb3cgYHJlc2l6ZWAgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUub25UaHJvdHRsZWRSZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuXHRcdHRoaXMucmVzaXplVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl9oYW5kbGVycy5vblJlc2l6ZSwgdGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlUmVmcmVzaFJhdGUpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2luZG93IGByZXNpemVgIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLl9pdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fd2lkdGggPT09IHRoaXMuJGVsZW1lbnQud2lkdGgoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pc1Zpc2libGUoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuZW50ZXIoJ3Jlc2l6aW5nJyk7XG5cblx0XHRpZiAodGhpcy50cmlnZ2VyKCdyZXNpemUnKS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuXHRcdFx0dGhpcy5sZWF2ZSgncmVzaXppbmcnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ3dpZHRoJyk7XG5cblx0XHR0aGlzLnJlZnJlc2goKTtcblxuXHRcdHRoaXMubGVhdmUoJ3Jlc2l6aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyZXNpemVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBldmVudCBoYW5kbGVycy5cblx0ICogQHRvZG8gQ2hlY2sgYG1zUG9pbnRlckVuYWJsZWRgXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50SGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCArICcub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25UcmFuc2l0aW9uRW5kLCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSAhPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMub24od2luZG93LCAncmVzaXplJywgdGhpcy5faGFuZGxlcnMub25UaHJvdHRsZWRSZXNpemUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLm1vdXNlRHJhZykge1xuXHRcdFx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZHJhZ0NsYXNzKTtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCdtb3VzZWRvd24ub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnU3RhcnQsIHRoaXMpKTtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCdkcmFnc3RhcnQub3dsLmNvcmUgc2VsZWN0c3RhcnQub3dsLmNvcmUnLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlIH0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnRvdWNoRHJhZyl7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigndG91Y2hzdGFydC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdTdGFydCwgdGhpcykpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ3RvdWNoY2FuY2VsLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ0VuZCwgdGhpcykpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBgdG91Y2hzdGFydGAgYW5kIGBtb3VzZWRvd25gIGV2ZW50cy5cblx0ICogQHRvZG8gSG9yaXpvbnRhbCBzd2lwZSB0aHJlc2hvbGQgYXMgb3B0aW9uXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgc3RhZ2UgPSBudWxsO1xuXG5cdFx0aWYgKGV2ZW50LndoaWNoID09PSAzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCQuc3VwcG9ydC50cmFuc2Zvcm0pIHtcblx0XHRcdHN0YWdlID0gdGhpcy4kc3RhZ2UuY3NzKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC8uKlxcKHxcXCl8IC9nLCAnJykuc3BsaXQoJywnKTtcblx0XHRcdHN0YWdlID0ge1xuXHRcdFx0XHR4OiBzdGFnZVtzdGFnZS5sZW5ndGggPT09IDE2ID8gMTIgOiA0XSxcblx0XHRcdFx0eTogc3RhZ2Vbc3RhZ2UubGVuZ3RoID09PSAxNiA/IDEzIDogNV1cblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWdlID0gdGhpcy4kc3RhZ2UucG9zaXRpb24oKTtcblx0XHRcdHN0YWdlID0ge1xuXHRcdFx0XHR4OiB0aGlzLnNldHRpbmdzLnJ0bCA/XG5cdFx0XHRcdFx0c3RhZ2UubGVmdCArIHRoaXMuJHN0YWdlLndpZHRoKCkgLSB0aGlzLndpZHRoKCkgKyB0aGlzLnNldHRpbmdzLm1hcmdpbiA6XG5cdFx0XHRcdFx0c3RhZ2UubGVmdCxcblx0XHRcdFx0eTogc3RhZ2UudG9wXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzKCdhbmltYXRpbmcnKSkge1xuXHRcdFx0JC5zdXBwb3J0LnRyYW5zZm9ybSA/IHRoaXMuYW5pbWF0ZShzdGFnZS54KSA6IHRoaXMuJHN0YWdlLnN0b3AoKVxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcywgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpO1xuXG5cdFx0dGhpcy5zcGVlZCgwKTtcblxuXHRcdHRoaXMuX2RyYWcudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdHRoaXMuX2RyYWcudGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXHRcdHRoaXMuX2RyYWcuc3RhZ2Uuc3RhcnQgPSBzdGFnZTtcblx0XHR0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQgPSBzdGFnZTtcblx0XHR0aGlzLl9kcmFnLnBvaW50ZXIgPSB0aGlzLnBvaW50ZXIoZXZlbnQpO1xuXG5cdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAub3dsLmNvcmUgdG91Y2hlbmQub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnRW5kLCB0aGlzKSk7XG5cblx0XHQkKGRvY3VtZW50KS5vbmUoJ21vdXNlbW92ZS5vd2wuY29yZSB0b3VjaG1vdmUub3dsLmNvcmUnLCAkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHR2YXIgZGVsdGEgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLCB0aGlzLnBvaW50ZXIoZXZlbnQpKTtcblxuXHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZS5vd2wuY29yZSB0b3VjaG1vdmUub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnTW92ZSwgdGhpcykpO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGEueCkgPCBNYXRoLmFicyhkZWx0YS55KSAmJiB0aGlzLmlzKCd2YWxpZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5lbnRlcignZHJhZ2dpbmcnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHJhZycpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgYHRvdWNobW92ZWAgYW5kIGBtb3VzZW1vdmVgIGV2ZW50cy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25EcmFnTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIG1pbmltdW0gPSBudWxsLFxuXHRcdFx0bWF4aW11bSA9IG51bGwsXG5cdFx0XHRwdWxsID0gbnVsbCxcblx0XHRcdGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSksXG5cdFx0XHRzdGFnZSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnN0YWdlLnN0YXJ0LCBkZWx0YSk7XG5cblx0XHRpZiAoIXRoaXMuaXMoJ2RyYWdnaW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0bWluaW11bSA9IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpO1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkgKyAxKSAtIG1pbmltdW07XG5cdFx0XHRzdGFnZS54ID0gKCgoc3RhZ2UueCAtIG1pbmltdW0pICUgbWF4aW11bSArIG1heGltdW0pICUgbWF4aW11bSkgKyBtaW5pbXVtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtaW5pbXVtID0gdGhpcy5zZXR0aW5ncy5ydGwgPyB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpKSA6IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpO1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuc2V0dGluZ3MucnRsID8gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSkgOiB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpKTtcblx0XHRcdHB1bGwgPSB0aGlzLnNldHRpbmdzLnB1bGxEcmFnID8gLTEgKiBkZWx0YS54IC8gNSA6IDA7XG5cdFx0XHRzdGFnZS54ID0gTWF0aC5tYXgoTWF0aC5taW4oc3RhZ2UueCwgbWluaW11bSArIHB1bGwpLCBtYXhpbXVtICsgcHVsbCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50ID0gc3RhZ2U7XG5cblx0XHR0aGlzLmFuaW1hdGUoc3RhZ2UueCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGB0b3VjaGVuZGAgYW5kIGBtb3VzZXVwYCBldmVudHMuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHRvZG8gVGhyZXNob2xkIGZvciBjbGljayBldmVudFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25EcmFnRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgZGVsdGEgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLCB0aGlzLnBvaW50ZXIoZXZlbnQpKSxcblx0XHRcdHN0YWdlID0gdGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50LFxuXHRcdFx0ZGlyZWN0aW9uID0gZGVsdGEueCA+IDAgXiB0aGlzLnNldHRpbmdzLnJ0bCA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cblx0XHQkKGRvY3VtZW50KS5vZmYoJy5vd2wuY29yZScpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzKTtcblxuXHRcdGlmIChkZWx0YS54ICE9PSAwICYmIHRoaXMuaXMoJ2RyYWdnaW5nJykgfHwgIXRoaXMuaXMoJ3ZhbGlkJykpIHtcblx0XHRcdHRoaXMuc3BlZWQodGhpcy5zZXR0aW5ncy5kcmFnRW5kU3BlZWQgfHwgdGhpcy5zZXR0aW5ncy5zbWFydFNwZWVkKTtcblx0XHRcdHRoaXMuY3VycmVudCh0aGlzLmNsb3Nlc3Qoc3RhZ2UueCwgZGVsdGEueCAhPT0gMCA/IGRpcmVjdGlvbiA6IHRoaXMuX2RyYWcuZGlyZWN0aW9uKSk7XG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0XHR0aGlzLl9kcmFnLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRlbHRhLngpID4gMyB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuX2RyYWcudGltZSA+IDMwMCkge1xuXHRcdFx0XHR0aGlzLl9kcmFnLnRhcmdldC5vbmUoJ2NsaWNrLm93bC5jb3JlJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzKCdkcmFnZ2luZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5sZWF2ZSgnZHJhZ2dpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2RyYWdnZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY2xvc2VzdCBpdGVtIGZvciBhIGNvb3JkaW5hdGUuXG5cdCAqIEB0b2RvIFNldHRpbmcgYGZyZWVEcmFnYCBtYWtlcyBgY2xvc2VzdGAgbm90IHJldXNhYmxlLiBTZWUgIzE2NS5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gY29vcmRpbmF0ZSAtIFRoZSBjb29yZGluYXRlIGluIHBpeGVsLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0gVGhlIGRpcmVjdGlvbiB0byBjaGVjayBmb3IgdGhlIGNsb3Nlc3QgaXRlbS4gRXRoZXIgYGxlZnRgIG9yIGByaWdodGAuXG5cdCAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGNsb3Nlc3QgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUsIGRpcmVjdGlvbikge1xuXHRcdHZhciBwb3NpdGlvbiA9IC0xLFxuXHRcdFx0cHVsbCA9IDMwLFxuXHRcdFx0d2lkdGggPSB0aGlzLndpZHRoKCksXG5cdFx0XHRjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMoKTtcblxuXHRcdGlmICghdGhpcy5zZXR0aW5ncy5mcmVlRHJhZykge1xuXHRcdFx0Ly8gY2hlY2sgY2xvc2VzdCBpdGVtXG5cdFx0XHQkLmVhY2goY29vcmRpbmF0ZXMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG5cdFx0XHRcdC8vIG9uIGEgbGVmdCBwdWxsLCBjaGVjayBvbiBjdXJyZW50IGluZGV4XG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyAmJiBjb29yZGluYXRlID4gdmFsdWUgLSBwdWxsICYmIGNvb3JkaW5hdGUgPCB2YWx1ZSArIHB1bGwpIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGluZGV4O1xuXHRcdFx0XHQvLyBvbiBhIHJpZ2h0IHB1bGwsIGNoZWNrIG9uIHByZXZpb3VzIGluZGV4XG5cdFx0XHRcdC8vIHRvIGRvIHNvLCBzdWJ0cmFjdCB3aWR0aCBmcm9tIHZhbHVlIGFuZCBzZXQgcG9zaXRpb24gPSBpbmRleCArIDFcblx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcgJiYgY29vcmRpbmF0ZSA+IHZhbHVlIC0gd2lkdGggLSBwdWxsICYmIGNvb3JkaW5hdGUgPCB2YWx1ZSAtIHdpZHRoICsgcHVsbCkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gaW5kZXggKyAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJzwnLCB2YWx1ZSlcblx0XHRcdFx0XHQmJiB0aGlzLm9wKGNvb3JkaW5hdGUsICc+JywgY29vcmRpbmF0ZXNbaW5kZXggKyAxXSAhPT0gdW5kZWZpbmVkID8gY29vcmRpbmF0ZXNbaW5kZXggKyAxXSA6IHZhbHVlIC0gd2lkdGgpKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IGluZGV4ICsgMSA6IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvbiA9PT0gLTE7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdC8vIG5vbiBsb29wIGJvdW5kcmllc1xuXHRcdFx0aWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJz4nLCBjb29yZGluYXRlc1t0aGlzLm1pbmltdW0oKV0pKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gY29vcmRpbmF0ZSA9IHRoaXMubWluaW11bSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc8JywgY29vcmRpbmF0ZXNbdGhpcy5tYXhpbXVtKCldKSkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1heGltdW0oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zaXRpb247XG5cdH07XG5cblx0LyoqXG5cdCAqIEFuaW1hdGVzIHRoZSBzdGFnZS5cblx0ICogQHRvZG8gIzI3MFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWxzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuXHRcdHZhciBhbmltYXRlID0gdGhpcy5zcGVlZCgpID4gMDtcblxuXHRcdHRoaXMuaXMoJ2FuaW1hdGluZycpICYmIHRoaXMub25UcmFuc2l0aW9uRW5kKCk7XG5cblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0dGhpcy5lbnRlcignYW5pbWF0aW5nJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYW5zbGF0ZScpO1xuXHRcdH1cblxuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNmb3JtM2QgJiYgJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyBjb29yZGluYXRlICsgJ3B4LDBweCwwcHgpJyxcblx0XHRcdFx0dHJhbnNpdGlvbjogKHRoaXMuc3BlZWQoKSAvIDEwMDApICsgJ3MnICsgKFxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3Muc2xpZGVUcmFuc2l0aW9uID8gJyAnICsgdGhpcy5zZXR0aW5ncy5zbGlkZVRyYW5zaXRpb24gOiAnJ1xuXHRcdFx0XHQpXG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKGFuaW1hdGUpIHtcblx0XHRcdHRoaXMuJHN0YWdlLmFuaW1hdGUoe1xuXHRcdFx0XHRsZWZ0OiBjb29yZGluYXRlICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5zcGVlZCgpLCB0aGlzLnNldHRpbmdzLmZhbGxiYWNrRWFzaW5nLCAkLnByb3h5KHRoaXMub25UcmFuc2l0aW9uRW5kLCB0aGlzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XG5cdFx0XHRcdGxlZnQ6IGNvb3JkaW5hdGUgKyAncHgnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoZSBjYXJvdXNlbCBpcyBpbiBhIHNwZWNpZmljIHN0YXRlIG9yIG5vdC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIC0gVGhlIHN0YXRlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSBUaGUgZmxhZyB3aGljaCBpbmRpY2F0ZXMgaWYgdGhlIGNhcm91c2VsIGlzIGJ1c3kuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmlzID0gZnVuY3Rpb24oc3RhdGUpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhdGVzLmN1cnJlbnRbc3RhdGVdICYmIHRoaXMuX3N0YXRlcy5jdXJyZW50W3N0YXRlXSA+IDA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgbmV3IGFic29sdXRlIHBvc2l0aW9uIG9yIG5vdGhpbmcgdG8gbGVhdmUgaXQgdW5jaGFuZ2VkLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcblxuXHRcdGlmICh0aGlzLl9jdXJyZW50ICE9PSBwb3NpdGlvbikge1xuXHRcdFx0dmFyIGV2ZW50ID0gdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdwb3NpdGlvbicsIHZhbHVlOiBwb3NpdGlvbiB9IH0pO1xuXG5cdFx0XHRpZiAoZXZlbnQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUoZXZlbnQuZGF0YSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2N1cnJlbnQgPSBwb3NpdGlvbjtcblxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdwb3NpdGlvbicsIHZhbHVlOiB0aGlzLl9jdXJyZW50IH0gfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEludmFsaWRhdGVzIHRoZSBnaXZlbiBwYXJ0IG9mIHRoZSB1cGRhdGUgcm91dGluZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtwYXJ0XSAtIFRoZSBwYXJ0IHRvIGludmFsaWRhdGUuXG5cdCAqIEByZXR1cm5zIHtBcnJheS48U3RyaW5nPn0gLSBUaGUgaW52YWxpZGF0ZWQgcGFydHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmludmFsaWRhdGUgPSBmdW5jdGlvbihwYXJ0KSB7XG5cdFx0aWYgKCQudHlwZShwYXJ0KSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuX2ludmFsaWRhdGVkW3BhcnRdID0gdHJ1ZTtcblx0XHRcdHRoaXMuaXMoJ3ZhbGlkJykgJiYgdGhpcy5sZWF2ZSgndmFsaWQnKTtcblx0XHR9XG5cdFx0cmV0dXJuICQubWFwKHRoaXMuX2ludmFsaWRhdGVkLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiBpIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBuZXcgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24pO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9zcGVlZCA9IDA7XG5cdFx0dGhpcy5fY3VycmVudCA9IHBvc2l0aW9uO1xuXG5cdFx0dGhpcy5zdXBwcmVzcyhbICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlZCcgXSk7XG5cblx0XHR0aGlzLmFuaW1hdGUodGhpcy5jb29yZGluYXRlcyhwb3NpdGlvbikpO1xuXG5cdFx0dGhpcy5yZWxlYXNlKFsgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGVkJyBdKTtcblx0fTtcblxuXHQvKipcblx0ICogTm9ybWFsaXplcyBhbiBhYnNvbHV0ZSBvciBhIHJlbGF0aXZlIHBvc2l0aW9uIG9mIGFuIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIG9yIHJlbGF0aXZlIHBvc2l0aW9uIHRvIG5vcm1hbGl6ZS5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgcmVsYXRpdmUgb3Igbm90LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBub3JtYWxpemVkIHBvc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbihwb3NpdGlvbiwgcmVsYXRpdmUpIHtcblx0XHR2YXIgbiA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdG0gPSByZWxhdGl2ZSA/IDAgOiB0aGlzLl9jbG9uZXMubGVuZ3RoO1xuXG5cdFx0aWYgKCF0aGlzLmlzTnVtZXJpYyhwb3NpdGlvbikgfHwgbiA8IDEpIHtcblx0XHRcdHBvc2l0aW9uID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IG4gKyBtKSB7XG5cdFx0XHRwb3NpdGlvbiA9ICgocG9zaXRpb24gLSBtIC8gMikgJSBuICsgbikgJSBuICsgbSAvIDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBhbiBpdGVtIGludG8gYSByZWxhdGl2ZSBvbmUuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIHRvIGNvbnZlcnQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGNvbnZlcnRlZCBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVsYXRpdmUgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uIC09IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG1heGltdW0gcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWF4aW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG5cdFx0dmFyIHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncyxcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGgsXG5cdFx0XHRpdGVyYXRvcixcblx0XHRcdHJlY2lwcm9jYWxJdGVtc1dpZHRoLFxuXHRcdFx0ZWxlbWVudFdpZHRoO1xuXG5cdFx0aWYgKHNldHRpbmdzLmxvb3ApIHtcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMiArIHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIGlmIChzZXR0aW5ncy5hdXRvV2lkdGggfHwgc2V0dGluZ3MubWVyZ2UpIHtcblx0XHRcdGl0ZXJhdG9yID0gdGhpcy5faXRlbXMubGVuZ3RoO1xuXHRcdFx0aWYgKGl0ZXJhdG9yKSB7XG5cdFx0XHRcdHJlY2lwcm9jYWxJdGVtc1dpZHRoID0gdGhpcy5faXRlbXNbLS1pdGVyYXRvcl0ud2lkdGgoKTtcblx0XHRcdFx0ZWxlbWVudFdpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuXHRcdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRcdHJlY2lwcm9jYWxJdGVtc1dpZHRoICs9IHRoaXMuX2l0ZW1zW2l0ZXJhdG9yXS53aWR0aCgpICsgdGhpcy5zZXR0aW5ncy5tYXJnaW47XG5cdFx0XHRcdFx0aWYgKHJlY2lwcm9jYWxJdGVtc1dpZHRoID4gZWxlbWVudFdpZHRoKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1heGltdW0gPSBpdGVyYXRvciArIDE7XG5cdFx0fSBlbHNlIGlmIChzZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdG1heGltdW0gPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gc2V0dGluZ3MuaXRlbXM7XG5cdFx0fVxuXG5cdFx0aWYgKHJlbGF0aXZlKSB7XG5cdFx0XHRtYXhpbXVtIC09IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1heChtYXhpbXVtLCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgbWluaW11bSBwb3NpdGlvbiBmb3IgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZT1mYWxzZV0gLSBXaGV0aGVyIHRvIHJldHVybiBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvciBhIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5taW5pbXVtID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcblx0XHRyZXR1cm4gcmVsYXRpdmUgPyAwIDogdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDI7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcmV0dXJuIHtqUXVlcnl8QXJyYXkuPGpRdWVyeT59IC0gVGhlIGl0ZW0gYXQgdGhlIGdpdmVuIHBvc2l0aW9uIG9yIGFsbCBpdGVtcyBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLml0ZW1zID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKCk7XG5cdFx0fVxuXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm4ge2pRdWVyeXxBcnJheS48alF1ZXJ5Pn0gLSBUaGUgaXRlbSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gb3IgYWxsIGl0ZW1zIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWVyZ2VycyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9tZXJnZXJzLnNsaWNlKCk7XG5cdFx0fVxuXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHRoaXMuX21lcmdlcnNbcG9zaXRpb25dO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbnMgb2YgY2xvbmVzIGZvciBhbiBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPE51bWJlcj59IC0gVGhlIGFic29sdXRlIHBvc2l0aW9ucyBvZiBjbG9uZXMgZm9yIHRoZSBpdGVtIG9yIGFsbCBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmNsb25lcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0dmFyIG9kZCA9IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyLFxuXHRcdFx0ZXZlbiA9IG9kZCArIHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdG1hcCA9IGZ1bmN0aW9uKGluZGV4KSB7IHJldHVybiBpbmRleCAlIDIgPT09IDAgPyBldmVuICsgaW5kZXggLyAyIDogb2RkIC0gKGluZGV4ICsgMSkgLyAyIH07XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nsb25lcywgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gbWFwKGkpIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiAkLm1hcCh0aGlzLl9jbG9uZXMsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIHYgPT09IHBvc2l0aW9uID8gbWFwKGkpIDogbnVsbCB9KTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0cyB0aGUgY3VycmVudCBhbmltYXRpb24gc3BlZWQuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcyBvciBub3RoaW5nIHRvIGxlYXZlIGl0IHVuY2hhbmdlZC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgY3VycmVudCBhbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5zcGVlZCA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0aWYgKHNwZWVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX3NwZWVkID0gc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3NwZWVkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjb29yZGluYXRlIG9mIGFuIGl0ZW0uXG5cdCAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIGlzIG1pc3NsZWFuZGluZy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gd2l0aGluIGBtaW5pbXVtKClgIGFuZCBgbWF4aW11bSgpYC5cblx0ICogQHJldHVybnMge051bWJlcnxBcnJheS48TnVtYmVyPn0gLSBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgaXRlbSBpbiBwaXhlbCBvciBhbGwgY29vcmRpbmF0ZXMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmNvb3JkaW5hdGVzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgbXVsdGlwbGllciA9IDEsXG5cdFx0XHRuZXdQb3NpdGlvbiA9IHBvc2l0aW9uIC0gMSxcblx0XHRcdGNvb3JkaW5hdGU7XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nvb3JkaW5hdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGNvb3JkaW5hdGUsIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvb3JkaW5hdGVzKGluZGV4KTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnJ0bCkge1xuXHRcdFx0XHRtdWx0aXBsaWVyID0gLTE7XG5cdFx0XHRcdG5ld1Bvc2l0aW9uID0gcG9zaXRpb24gKyAxO1xuXHRcdFx0fVxuXG5cdFx0XHRjb29yZGluYXRlID0gdGhpcy5fY29vcmRpbmF0ZXNbcG9zaXRpb25dO1xuXHRcdFx0Y29vcmRpbmF0ZSArPSAodGhpcy53aWR0aCgpIC0gY29vcmRpbmF0ZSArICh0aGlzLl9jb29yZGluYXRlc1tuZXdQb3NpdGlvbl0gfHwgMCkpIC8gMiAqIG11bHRpcGxpZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvb3JkaW5hdGUgPSB0aGlzLl9jb29yZGluYXRlc1tuZXdQb3NpdGlvbl0gfHwgMDtcblx0XHR9XG5cblx0XHRjb29yZGluYXRlID0gTWF0aC5jZWlsKGNvb3JkaW5hdGUpO1xuXG5cdFx0cmV0dXJuIGNvb3JkaW5hdGU7XG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZXMgdGhlIHNwZWVkIGZvciBhIHRyYW5zbGF0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBzdGFydCBpdGVtLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gdG8gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIHRhcmdldCBpdGVtLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2ZhY3Rvcj11bmRlZmluZWRdIC0gVGhlIHRpbWUgZmFjdG9yIGluIG1pbGxpc2Vjb25kcy5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2xhdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbihmcm9tLCB0bywgZmFjdG9yKSB7XG5cdFx0aWYgKGZhY3RvciA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguYWJzKHRvIC0gZnJvbSksIDEpLCA2KSAqIE1hdGguYWJzKChmYWN0b3IgfHwgdGhpcy5zZXR0aW5ncy5zbWFydFNwZWVkKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgc3BlY2lmaWVkIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHNwZWVkKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQoKSxcblx0XHRcdHJldmVydCA9IG51bGwsXG5cdFx0XHRkaXN0YW5jZSA9IHBvc2l0aW9uIC0gdGhpcy5yZWxhdGl2ZShjdXJyZW50KSxcblx0XHRcdGRpcmVjdGlvbiA9IChkaXN0YW5jZSA+IDApIC0gKGRpc3RhbmNlIDwgMCksXG5cdFx0XHRpdGVtcyA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdG1pbmltdW0gPSB0aGlzLm1pbmltdW0oKSxcblx0XHRcdG1heGltdW0gPSB0aGlzLm1heGltdW0oKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdGlmICghdGhpcy5zZXR0aW5ncy5yZXdpbmQgJiYgTWF0aC5hYnMoZGlzdGFuY2UpID4gaXRlbXMgLyAyKSB7XG5cdFx0XHRcdGRpc3RhbmNlICs9IGRpcmVjdGlvbiAqIC0xICogaXRlbXM7XG5cdFx0XHR9XG5cblx0XHRcdHBvc2l0aW9uID0gY3VycmVudCArIGRpc3RhbmNlO1xuXHRcdFx0cmV2ZXJ0ID0gKChwb3NpdGlvbiAtIG1pbmltdW0pICUgaXRlbXMgKyBpdGVtcykgJSBpdGVtcyArIG1pbmltdW07XG5cblx0XHRcdGlmIChyZXZlcnQgIT09IHBvc2l0aW9uICYmIHJldmVydCAtIGRpc3RhbmNlIDw9IG1heGltdW0gJiYgcmV2ZXJ0IC0gZGlzdGFuY2UgPiAwKSB7XG5cdFx0XHRcdGN1cnJlbnQgPSByZXZlcnQgLSBkaXN0YW5jZTtcblx0XHRcdFx0cG9zaXRpb24gPSByZXZlcnQ7XG5cdFx0XHRcdHRoaXMucmVzZXQoY3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnJld2luZCkge1xuXHRcdFx0bWF4aW11bSArPSAxO1xuXHRcdFx0cG9zaXRpb24gPSAocG9zaXRpb24gJSBtYXhpbXVtICsgbWF4aW11bSkgJSBtYXhpbXVtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3NpdGlvbiA9IE1hdGgubWF4KG1pbmltdW0sIE1hdGgubWluKG1heGltdW0sIHBvc2l0aW9uKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zcGVlZCh0aGlzLmR1cmF0aW9uKGN1cnJlbnQsIHBvc2l0aW9uLCBzcGVlZCkpO1xuXHRcdHRoaXMuY3VycmVudChwb3NpdGlvbik7XG5cblx0XHRpZiAodGhpcy5pc1Zpc2libGUoKSkge1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgbmV4dCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0c3BlZWQgPSBzcGVlZCB8fCBmYWxzZTtcblx0XHR0aGlzLnRvKHRoaXMucmVsYXRpdmUodGhpcy5jdXJyZW50KCkpICsgMSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHByZXZpb3VzIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xuXHRcdHRoaXMudG8odGhpcy5yZWxhdGl2ZSh0aGlzLmN1cnJlbnQoKSkgLSAxLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGVuZCBvZiBhbiBhbmltYXRpb24uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG5cdFx0Ly8gaWYgY3NzMiBhbmltYXRpb24gdGhlbiBldmVudCBvYmplY3QgaXMgdW5kZWZpbmVkXG5cdFx0aWYgKGV2ZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHQvLyBDYXRjaCBvbmx5IG93bC1zdGFnZSB0cmFuc2l0aW9uRW5kIGV2ZW50XG5cdFx0XHRpZiAoKGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50Lm9yaWdpbmFsVGFyZ2V0KSAhPT0gdGhpcy4kc3RhZ2UuZ2V0KDApKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmxlYXZlKCdhbmltYXRpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3RyYW5zbGF0ZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB2aWV3cG9ydCB3aWR0aC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gVGhlIHdpZHRoIGluIHBpeGVsLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS52aWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB3aWR0aDtcblx0XHRpZiAodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCYXNlRWxlbWVudCAhPT0gd2luZG93KSB7XG5cdFx0XHR3aWR0aCA9ICQodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCYXNlRWxlbWVudCkud2lkdGgoKTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoKSB7XG5cdFx0XHR3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkge1xuXHRcdFx0d2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybignQ2FuIG5vdCBkZXRlY3Qgdmlld3BvcnQgd2lkdGguJyk7XG5cdFx0fVxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHQvKipcblx0ICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgY29udGVudC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgbmV3IGNvbnRlbnQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihjb250ZW50KSB7XG5cdFx0dGhpcy4kc3RhZ2UuZW1wdHkoKTtcblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xuXG5cdFx0aWYgKGNvbnRlbnQpIHtcblx0XHRcdGNvbnRlbnQgPSAoY29udGVudCBpbnN0YW5jZW9mIGpRdWVyeSkgPyBjb250ZW50IDogJChjb250ZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpIHtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmZpbmQoJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdGNvbnRlbnQuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDE7XG5cdFx0fSkuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG5cdFx0XHRpdGVtID0gdGhpcy5wcmVwYXJlKGl0ZW0pO1xuXHRcdFx0dGhpcy4kc3RhZ2UuYXBwZW5kKGl0ZW0pO1xuXHRcdFx0dGhpcy5faXRlbXMucHVzaChpdGVtKTtcblx0XHRcdHRoaXMuX21lcmdlcnMucHVzaChpdGVtLmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5yZXNldCh0aGlzLmlzTnVtZXJpYyh0aGlzLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24pID8gdGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uIDogMCk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZHMgYW4gaXRlbS5cblx0ICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgaXRlbSBjb250ZW50IHRvIGFkZC5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSBpdGVtIG90aGVyd2lzZSB0aGUgaXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIHBvc2l0aW9uKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpO1xuXG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5faXRlbXMubGVuZ3RoIDogdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdGNvbnRlbnQgPSBjb250ZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGVudCA6ICQoY29udGVudCk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2FkZCcsIHsgY29udGVudDogY29udGVudCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXG5cdFx0Y29udGVudCA9IHRoaXMucHJlcGFyZShjb250ZW50KTtcblxuXHRcdGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5faXRlbXMubGVuZ3RoID09PSAwICYmIHRoaXMuJHN0YWdlLmFwcGVuZChjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLl9pdGVtc1twb3NpdGlvbiAtIDFdLmFmdGVyKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMucHVzaChjb250ZW50KTtcblx0XHRcdHRoaXMuX21lcmdlcnMucHVzaChjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXS5iZWZvcmUoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5zcGxpY2UocG9zaXRpb24sIDAsIGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5fbWVyZ2Vycy5zcGxpY2UocG9zaXRpb24sIDAsIGNvbnRlbnQuZmluZCgnW2RhdGEtbWVyZ2VdJykuYWRkQmFjaygnW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pdGVtc1tjdXJyZW50XSAmJiB0aGlzLnJlc2V0KHRoaXMuX2l0ZW1zW2N1cnJlbnRdLmluZGV4KCkpO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGRlZCcsIHsgY29udGVudDogY29udGVudCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGFuIGl0ZW0gYnkgaXRzIHBvc2l0aW9uLlxuXHQgKiBAdG9kbyBVc2UgYGl0ZW1gIGluc3RlYWQgb2YgYGNvbnRlbnRgIGZvciB0aGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB0byByZW1vdmUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlJywgeyBjb250ZW50OiB0aGlzLl9pdGVtc1twb3NpdGlvbl0sIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuXHRcdHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXS5yZW1vdmUoKTtcblx0XHR0aGlzLl9pdGVtcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHRcdHRoaXMuX21lcmdlcnMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblxuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlZCcsIHsgY29udGVudDogbnVsbCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBQcmVsb2FkcyBpbWFnZXMgd2l0aCBhdXRvIHdpZHRoLlxuXHQgKiBAdG9kbyBSZXBsYWNlIGJ5IGEgbW9yZSBnZW5lcmljIGFwcHJvYWNoXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJlbG9hZEF1dG9XaWR0aEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xuXHRcdGltYWdlcy5lYWNoKCQucHJveHkoZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5lbnRlcigncHJlLWxvYWRpbmcnKTtcblx0XHRcdGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdFx0JChuZXcgSW1hZ2UoKSkub25lKCdsb2FkJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGVsZW1lbnQuYXR0cignc3JjJywgZS50YXJnZXQuc3JjKTtcblx0XHRcdFx0ZWxlbWVudC5jc3MoJ29wYWNpdHknLCAxKTtcblx0XHRcdFx0dGhpcy5sZWF2ZSgncHJlLWxvYWRpbmcnKTtcblx0XHRcdFx0IXRoaXMuaXMoJ3ByZS1sb2FkaW5nJykgJiYgIXRoaXMuaXMoJ2luaXRpYWxpemluZycpICYmIHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSwgdGhpcykpLmF0dHIoJ3NyYycsIGVsZW1lbnQuYXR0cignc3JjJykgfHwgZWxlbWVudC5hdHRyKCdkYXRhLXNyYycpIHx8IGVsZW1lbnQuYXR0cignZGF0YS1zcmMtcmV0aW5hJykpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMuJGVsZW1lbnQub2ZmKCcub3dsLmNvcmUnKTtcblx0XHR0aGlzLiRzdGFnZS5vZmYoJy5vd2wuY29yZScpO1xuXHRcdCQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlICE9PSBmYWxzZSkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcblx0XHRcdHRoaXMub2ZmKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZXJzLm9uVGhyb3R0bGVkUmVzaXplKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpIGluIHRoaXMuX3BsdWdpbnMpIHtcblx0XHRcdHRoaXMuX3BsdWdpbnNbaV0uZGVzdHJveSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2xvbmVkJykucmVtb3ZlKCk7XG5cblx0XHR0aGlzLiRzdGFnZS51bndyYXAoKTtcblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmNvbnRlbnRzKCkudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS51bndyYXAoKTtcblx0XHR0aGlzLiRzdGFnZS5yZW1vdmUoKTtcblx0XHR0aGlzLiRlbGVtZW50XG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZ0NsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkZWRDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucnRsQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmRyYWdDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgdGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzICsgJy1cXFxcUytcXFxccycsICdnJyksICcnKSlcblx0XHRcdC5yZW1vdmVEYXRhKCdvd2wuY2Fyb3VzZWwnKTtcblx0fTtcblxuXHQvKipcblx0ICogT3BlcmF0b3JzIHRvIGNhbGN1bGF0ZSByaWdodC10by1sZWZ0IGFuZCBsZWZ0LXRvLXJpZ2h0LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbYV0gLSBUaGUgbGVmdCBzaWRlIG9wZXJhbmQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbb10gLSBUaGUgb3BlcmF0b3IuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbYl0gLSBUaGUgcmlnaHQgc2lkZSBvcGVyYW5kLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vcCA9IGZ1bmN0aW9uKGEsIG8sIGIpIHtcblx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGw7XG5cdFx0c3dpdGNoIChvKSB7XG5cdFx0XHRjYXNlICc8Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPiBiIDogYSA8IGI7XG5cdFx0XHRjYXNlICc+Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPCBiIDogYSA+IGI7XG5cdFx0XHRjYXNlICc+PSc6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhIDw9IGIgOiBhID49IGI7XG5cdFx0XHRjYXNlICc8PSc6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhID49IGIgOiBhIDw9IGI7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEF0dGFjaGVzIHRvIGFuIGludGVybmFsIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgc291cmNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZXZlbnQgaGFuZGxlciB0byBhdHRhY2guXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FwdHVyZSAtIFdldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGhhbmRsZWQgYXQgdGhlIGNhcHR1cmluZyBwaGFzZSBvciBub3QuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG5cdFx0aWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KSB7XG5cdFx0XHRlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRGV0YWNoZXMgZnJvbSBhbiBpbnRlcm5hbCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHNvdXJjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGF0dGFjaGVkIGV2ZW50IGhhbmRsZXIgdG8gZGV0YWNoLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGNhcHR1cmUgLSBXZXRoZXIgdGhlIGF0dGFjaGVkIGV2ZW50IGhhbmRsZXIgd2FzIHJlZ2lzdGVyZWQgYXMgYSBjYXB0dXJpbmcgbGlzdGVuZXIgb3Igbm90LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcblx0XHRpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKTtcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcblx0XHRcdGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBhIHB1YmxpYyBldmVudC5cblx0ICogQHRvZG8gUmVtb3ZlIGBzdGF0dXNgLCBgcmVsYXRlZFRhcmdldGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0geyp9IFtkYXRhPW51bGxdIC0gVGhlIGV2ZW50IGRhdGEuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZXNwYWNlPWNhcm91c2VsXSAtIFRoZSBldmVudCBuYW1lc3BhY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbc3RhdGVdIC0gVGhlIHN0YXRlIHdoaWNoIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VudGVyPWZhbHNlXSAtIEluZGljYXRlcyBpZiB0aGUgY2FsbCBlbnRlcnMgdGhlIHNwZWNpZmllZCBzdGF0ZSBvciBub3QuXG5cdCAqIEByZXR1cm5zIHtFdmVudH0gLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24obmFtZSwgZGF0YSwgbmFtZXNwYWNlLCBzdGF0ZSwgZW50ZXIpIHtcblx0XHR2YXIgc3RhdHVzID0ge1xuXHRcdFx0aXRlbTogeyBjb3VudDogdGhpcy5faXRlbXMubGVuZ3RoLCBpbmRleDogdGhpcy5jdXJyZW50KCkgfVxuXHRcdH0sIGhhbmRsZXIgPSAkLmNhbWVsQ2FzZShcblx0XHRcdCQuZ3JlcChbICdvbicsIG5hbWUsIG5hbWVzcGFjZSBdLCBmdW5jdGlvbih2KSB7IHJldHVybiB2IH0pXG5cdFx0XHRcdC5qb2luKCctJykudG9Mb3dlckNhc2UoKVxuXHRcdCksIGV2ZW50ID0gJC5FdmVudChcblx0XHRcdFsgbmFtZSwgJ293bCcsIG5hbWVzcGFjZSB8fCAnY2Fyb3VzZWwnIF0uam9pbignLicpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHQkLmV4dGVuZCh7IHJlbGF0ZWRUYXJnZXQ6IHRoaXMgfSwgc3RhdHVzLCBkYXRhKVxuXHRcdCk7XG5cblx0XHRpZiAoIXRoaXMuX3N1cHJlc3NbbmFtZV0pIHtcblx0XHRcdCQuZWFjaCh0aGlzLl9wbHVnaW5zLCBmdW5jdGlvbihuYW1lLCBwbHVnaW4pIHtcblx0XHRcdFx0aWYgKHBsdWdpbi5vblRyaWdnZXIpIHtcblx0XHRcdFx0XHRwbHVnaW4ub25UcmlnZ2VyKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMucmVnaXN0ZXIoeyB0eXBlOiBPd2wuVHlwZS5FdmVudCwgbmFtZTogbmFtZSB9KTtcblx0XHRcdHRoaXMuJGVsZW1lbnQudHJpZ2dlcihldmVudCk7XG5cblx0XHRcdGlmICh0aGlzLnNldHRpbmdzICYmIHR5cGVvZiB0aGlzLnNldHRpbmdzW2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3NbaGFuZGxlcl0uY2FsbCh0aGlzLCBldmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnRlcnMgYSBzdGF0ZS5cblx0ICogQHBhcmFtIG5hbWUgLSBUaGUgc3RhdGUgbmFtZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuZW50ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0JC5lYWNoKFsgbmFtZSBdLmNvbmNhdCh0aGlzLl9zdGF0ZXMudGFnc1tuYW1lXSB8fCBbXSksICQucHJveHkoZnVuY3Rpb24oaSwgbmFtZSkge1xuXHRcdFx0aWYgKHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0gPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSsrO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogTGVhdmVzIGEgc3RhdGUuXG5cdCAqIEBwYXJhbSBuYW1lIC0gVGhlIHN0YXRlIG5hbWUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmxlYXZlID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdCQuZWFjaChbIG5hbWUgXS5jb25jYXQodGhpcy5fc3RhdGVzLnRhZ3NbbmFtZV0gfHwgW10pLCAkLnByb3h5KGZ1bmN0aW9uKGksIG5hbWUpIHtcblx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdLS07XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYW4gZXZlbnQgb3Igc3RhdGUuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCAtIFRoZSBldmVudCBvciBzdGF0ZSB0byByZWdpc3Rlci5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0XHRpZiAob2JqZWN0LnR5cGUgPT09IE93bC5UeXBlLkV2ZW50KSB7XG5cdFx0XHRpZiAoISQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0pIHtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXSA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoISQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0ub3dsKSB7XG5cdFx0XHRcdHZhciBfZGVmYXVsdCA9ICQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0uX2RlZmF1bHQ7XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0uX2RlZmF1bHQgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKF9kZWZhdWx0ICYmIF9kZWZhdWx0LmFwcGx5ICYmICghZS5uYW1lc3BhY2UgfHwgZS5uYW1lc3BhY2UuaW5kZXhPZignb3dsJykgPT09IC0xKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9kZWZhdWx0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBlLm5hbWVzcGFjZSAmJiBlLm5hbWVzcGFjZS5pbmRleE9mKCdvd2wnKSA+IC0xO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLm93bCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvYmplY3QudHlwZSA9PT0gT3dsLlR5cGUuU3RhdGUpIHtcblx0XHRcdGlmICghdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9IG9iamVjdC50YWdzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdLmNvbmNhdChvYmplY3QudGFncyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9ICQuZ3JlcCh0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0sICQucHJveHkoZnVuY3Rpb24odGFnLCBpKSB7XG5cdFx0XHRcdHJldHVybiAkLmluQXJyYXkodGFnLCB0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0pID09PSBpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU3VwcHJlc3NlcyBldmVudHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gZXZlbnRzIC0gVGhlIGV2ZW50cyB0byBzdXBwcmVzcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuc3VwcHJlc3MgPSBmdW5jdGlvbihldmVudHMpIHtcblx0XHQkLmVhY2goZXZlbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBldmVudCkge1xuXHRcdFx0dGhpcy5fc3VwcmVzc1tldmVudF0gPSB0cnVlO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVsZWFzZXMgc3VwcHJlc3NlZCBldmVudHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gZXZlbnRzIC0gVGhlIGV2ZW50cyB0byByZWxlYXNlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24oZXZlbnRzKSB7XG5cdFx0JC5lYWNoKGV2ZW50cywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgZXZlbnQpIHtcblx0XHRcdGRlbGV0ZSB0aGlzLl9zdXByZXNzW2V2ZW50XTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdW5pZmllZCBwb2ludGVyIGNvb3JkaW5hdGVzIGZyb20gZXZlbnQuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAgZXZlbnQuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gQ29udGFpbnMgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgb2YgY3VycmVudCBwb2ludGVyIHBvc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wb2ludGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgcmVzdWx0ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cblx0XHRldmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG5cdFx0ZXZlbnQgPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID9cblx0XHRcdGV2ZW50LnRvdWNoZXNbMF0gOiBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggP1xuXHRcdFx0XHRldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuXG5cdFx0aWYgKGV2ZW50LnBhZ2VYKSB7XG5cdFx0XHRyZXN1bHQueCA9IGV2ZW50LnBhZ2VYO1xuXHRcdFx0cmVzdWx0LnkgPSBldmVudC5wYWdlWTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0LnggPSBldmVudC5jbGllbnRYO1xuXHRcdFx0cmVzdWx0LnkgPSBldmVudC5jbGllbnRZO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGEgTnVtYmVyIG9yIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGEgTnVtYmVyXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdHxBcnJheXxCb29sZWFufFJlZ0V4cHxGdW5jdGlvbnxTeW1ib2x9IC0gVGhlIGlucHV0IHRvIGJlIHRlc3RlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSBBbiBpbmRpY2F0aW9uIGlmIHRoZSBpbnB1dCBpcyBhIE51bWJlciBvciBjYW4gYmUgY29lcmNlZCB0byBhIE51bWJlclxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pc051bWVyaWMgPSBmdW5jdGlvbihudW1iZXIpIHtcblx0XHRyZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobnVtYmVyKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIHZlY3RvcnMuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gLSBUaGUgZmlyc3QgdmVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gLSBUaGUgc2Vjb25kIHZlY3Rvci5cblx0ICogQHJldHVybnMge09iamVjdH0gLSBUaGUgZGlmZmVyZW5jZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBzZWNvbmQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0eDogZmlyc3QueCAtIHNlY29uZC54LFxuXHRcdFx0eTogZmlyc3QueSAtIHNlY29uZC55XG5cdFx0fTtcblx0fTtcblxuXHQvKipcblx0ICogVGhlIGpRdWVyeSBQbHVnaW4gZm9yIHRoZSBPd2wgQ2Fyb3VzZWxcblx0ICogQHRvZG8gTmF2aWdhdGlvbiBwbHVnaW4gYG5leHRgIGFuZCBgcHJldmBcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0JC5mbi5vd2xDYXJvdXNlbCA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRkYXRhID0gJHRoaXMuZGF0YSgnb3dsLmNhcm91c2VsJyk7XG5cblx0XHRcdGlmICghZGF0YSkge1xuXHRcdFx0XHRkYXRhID0gbmV3IE93bCh0aGlzLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbik7XG5cdFx0XHRcdCR0aGlzLmRhdGEoJ293bC5jYXJvdXNlbCcsIGRhdGEpO1xuXG5cdFx0XHRcdCQuZWFjaChbXG5cdFx0XHRcdFx0J25leHQnLCAncHJldicsICd0bycsICdkZXN0cm95JywgJ3JlZnJlc2gnLCAncmVwbGFjZScsICdhZGQnLCAncmVtb3ZlJ1xuXHRcdFx0XHRdLCBmdW5jdGlvbihpLCBldmVudCkge1xuXHRcdFx0XHRcdGRhdGEucmVnaXN0ZXIoeyB0eXBlOiBPd2wuVHlwZS5FdmVudCwgbmFtZTogZXZlbnQgfSk7XG5cdFx0XHRcdFx0ZGF0YS4kZWxlbWVudC5vbihldmVudCArICcub3dsLmNhcm91c2VsLmNvcmUnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnJlbGF0ZWRUYXJnZXQgIT09IHRoaXMpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdXBwcmVzcyhbIGV2ZW50IF0pO1xuXHRcdFx0XHRcdFx0XHRkYXRhW2V2ZW50XS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnJlbGVhc2UoWyBldmVudCBdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkYXRhKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyAmJiBvcHRpb24uY2hhckF0KDApICE9PSAnXycpIHtcblx0XHRcdFx0ZGF0YVtvcHRpb25dLmFwcGx5KGRhdGEsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSBqUXVlcnkgUGx1Z2luXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IgPSBPd2w7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBBdXRvUmVmcmVzaCBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG8gcmVmcmVzaCBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgQXV0byBSZWZyZXNoIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQXV0b1JlZnJlc2ggPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBSZWZyZXNoIGludGVydmFsLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2ludGVydmFsID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IHZpc2libGUgb3Igbm90LlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl92aXNpYmxlID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b1JlZnJlc2gpIHtcblx0XHRcdFx0XHR0aGlzLndhdGNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b1JlZnJlc2guRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9SZWZyZXNoLkRlZmF1bHRzID0ge1xuXHRcdGF1dG9SZWZyZXNoOiB0cnVlLFxuXHRcdGF1dG9SZWZyZXNoSW50ZXJ2YWw6IDUwMFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBXYXRjaGVzIHRoZSBlbGVtZW50LlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuX2ludGVydmFsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlzaWJsZSA9IHRoaXMuX2NvcmUuaXNWaXNpYmxlKCk7XG5cdFx0dGhpcy5faW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoJC5wcm94eSh0aGlzLnJlZnJlc2gsIHRoaXMpLCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoSW50ZXJ2YWwpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWZyZXNoZXMgdGhlIGVsZW1lbnQuXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9jb3JlLmlzVmlzaWJsZSgpID09PSB0aGlzLl92aXNpYmxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlzaWJsZSA9ICF0aGlzLl92aXNpYmxlO1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC50b2dnbGVDbGFzcygnb3dsLWhpZGRlbicsICF0aGlzLl92aXNpYmxlKTtcblxuXHRcdHRoaXMuX3Zpc2libGUgJiYgKHRoaXMuX2NvcmUuaW52YWxpZGF0ZSgnd2lkdGgnKSAmJiB0aGlzLl9jb3JlLnJlZnJlc2goKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkF1dG9SZWZyZXNoID0gQXV0b1JlZnJlc2g7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBMYXp5IFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBsYXp5IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBMYXp5IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgTGF6eSA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxyZWFkeSBsb2FkZWQgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtBcnJheS48alF1ZXJ5Pn1cblx0XHQgKi9cblx0XHR0aGlzLl9sb2FkZWQgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCBjaGFuZ2Uub3dsLmNhcm91c2VsIHJlc2l6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICghZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMuX2NvcmUuc2V0dGluZ3MgfHwgIXRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHx8IGUudHlwZSA9PSAnaW5pdGlhbGl6ZWQnKSB7XG5cdFx0XHRcdFx0dmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRcdG4gPSAoc2V0dGluZ3MuY2VudGVyICYmIE1hdGguY2VpbChzZXR0aW5ncy5pdGVtcyAvIDIpIHx8IHNldHRpbmdzLml0ZW1zKSxcblx0XHRcdFx0XHRcdGkgPSAoKHNldHRpbmdzLmNlbnRlciAmJiBuICogLTEpIHx8IDApLFxuXHRcdFx0XHRcdFx0cG9zaXRpb24gPSAoZS5wcm9wZXJ0eSAmJiBlLnByb3BlcnR5LnZhbHVlICE9PSB1bmRlZmluZWQgPyBlLnByb3BlcnR5LnZhbHVlIDogdGhpcy5fY29yZS5jdXJyZW50KCkpICsgaSxcblx0XHRcdFx0XHRcdGNsb25lcyA9IHRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bG9hZCA9ICQucHJveHkoZnVuY3Rpb24oaSwgdikgeyB0aGlzLmxvYWQodikgfSwgdGhpcyk7XG5cdFx0XHRcdFx0Ly9UT0RPOiBOZWVkIGRvY3VtZW50YXRpb24gZm9yIHRoaXMgbmV3IG9wdGlvblxuXHRcdFx0XHRcdGlmIChzZXR0aW5ncy5sYXp5TG9hZEVhZ2VyID4gMCkge1xuXHRcdFx0XHRcdFx0biArPSBzZXR0aW5ncy5sYXp5TG9hZEVhZ2VyO1xuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGNhcm91c2VsIGlzIGxvb3BpbmcgYWxzbyBwcmVsb2FkIGltYWdlcyB0aGF0IGFyZSB0byB0aGUgXCJsZWZ0XCJcblx0XHRcdFx0XHRcdGlmIChzZXR0aW5ncy5sb29wKSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uIC09IHNldHRpbmdzLmxhenlMb2FkRWFnZXI7XG4gICAgICAgICAgICAgIG4rKztcbiAgICAgICAgICAgIH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aGlsZSAoaSsrIDwgbikge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkKGNsb25lcyAvIDIgKyB0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSk7XG5cdFx0XHRcdFx0XHRjbG9uZXMgJiYgJC5lYWNoKHRoaXMuX2NvcmUuY2xvbmVzKHRoaXMuX2NvcmUucmVsYXRpdmUocG9zaXRpb24pKSwgbG9hZCk7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbisrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IHRoZSBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTGF6eS5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRMYXp5LkRlZmF1bHRzID0ge1xuXHRcdGxhenlMb2FkOiBmYWxzZSxcblx0XHRsYXp5TG9hZEVhZ2VyOiAwXG5cdH07XG5cblx0LyoqXG5cdCAqIExvYWRzIGFsbCByZXNvdXJjZXMgb2YgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdExhenkucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciAkaXRlbSA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEocG9zaXRpb24pLFxuXHRcdFx0JGVsZW1lbnRzID0gJGl0ZW0gJiYgJGl0ZW0uZmluZCgnLm93bC1sYXp5Jyk7XG5cblx0XHRpZiAoISRlbGVtZW50cyB8fCAkLmluQXJyYXkoJGl0ZW0uZ2V0KDApLCB0aGlzLl9sb2FkZWQpID4gLTEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQkZWxlbWVudHMuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG5cdFx0XHR2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpLCBpbWFnZSxcbiAgICAgICAgICAgICAgICB1cmwgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxICYmICRlbGVtZW50LmF0dHIoJ2RhdGEtc3JjLXJldGluYScpKSB8fCAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYycpIHx8ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG5cblx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignbG9hZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cblx0XHRcdGlmICgkZWxlbWVudC5pcygnaW1nJykpIHtcblx0XHRcdFx0JGVsZW1lbnQub25lKCdsb2FkLm93bC5sYXp5JywgJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ29wYWNpdHknLCAxKTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cdFx0XHRcdH0sIHRoaXMpKS5hdHRyKCdzcmMnLCB1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkZWxlbWVudC5pcygnc291cmNlJykpIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5vbmUoJ2xvYWQub3dsLmxhenknLCAkLnByb3h5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcykpLmF0dHIoJ3NyY3NldCcsIHVybCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmNzcyh7XG5cdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoXCInICsgdXJsICsgJ1wiKScsXG5cdFx0XHRcdFx0XHQnb3BhY2l0eSc6ICcxJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignbG9hZGVkJywgeyBlbGVtZW50OiAkZWxlbWVudCwgdXJsOiB1cmwgfSwgJ2xhenknKTtcblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRcdGltYWdlLnNyYyA9IHVybDtcblx0XHRcdH1cblx0XHR9LCB0aGlzKSk7XG5cblx0XHR0aGlzLl9sb2FkZWQucHVzaCgkaXRlbS5nZXQoMCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRMYXp5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuaGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuaGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkxhenkgPSBMYXp5O1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b0hlaWdodCBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYXV0byBoZWlnaHQgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG8gSGVpZ2h0IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQXV0b0hlaWdodCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdHRoaXMuX3ByZXZpb3VzSGVpZ2h0ID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgcmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0KSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicpe1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2xvYWRlZC5vd2wubGF6eSc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0XG5cdFx0XHRcdFx0JiYgZS5lbGVtZW50LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLmluZGV4KCkgPT09IHRoaXMuX2NvcmUuY3VycmVudCgpKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBdXRvSGVpZ2h0LkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0XHR0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcblx0XHR2YXIgcmVmVGhpcyA9IHRoaXM7XG5cblx0XHQvLyBUaGVzZSBjaGFuZ2VzIGhhdmUgYmVlbiB0YWtlbiBmcm9tIGEgUFIgYnkgZ2F2cm9jaGVsZWdub3UgcHJvcG9zZWQgaW4gIzE1NzVcblx0XHQvLyBhbmQgaGF2ZSBiZWVuIG1hZGUgY29tcGF0aWJsZSB3aXRoIHRoZSBsYXRlc3QgalF1ZXJ5IHZlcnNpb25cblx0XHQkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChyZWZUaGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQpIHtcblx0XHRcdFx0cmVmVGhpcy51cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEF1dG9yZXNpemUgdGhlIGhlaWdodCBvZiB0aGUgY2Fyb3VzZWwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuXHRcdC8vIFdoZW4gY2Fyb3VzZWwgaGFzIGltYWdlcywgdGhlIGhlaWdodCBpcyBkZXBlbmRlbnQgb24gdGhlIHdpZHRoXG5cdFx0Ly8gYW5kIHNob3VsZCBhbHNvIGNoYW5nZSBvbiByZXNpemVcblx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHJlZlRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCkge1xuXHRcdFx0XHRpZiAocmVmVGhpcy5faW50ZXJ2YWxJZCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHJlZlRoaXMuX2ludGVydmFsSWQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVmVGhpcy5faW50ZXJ2YWxJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmVmVGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9IZWlnaHQuRGVmYXVsdHMgPSB7XG5cdFx0YXV0b0hlaWdodDogZmFsc2UsXG5cdFx0YXV0b0hlaWdodENsYXNzOiAnb3dsLWhlaWdodCdcblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgdmlldy5cblx0ICovXG5cdEF1dG9IZWlnaHQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzdGFydCA9IHRoaXMuX2NvcmUuX2N1cnJlbnQsXG5cdFx0XHRlbmQgPSBzdGFydCArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbXMsXG5cdFx0XHRsYXp5TG9hZEVuYWJsZWQgPSB0aGlzLl9jb3JlLnNldHRpbmdzLmxhenlMb2FkLFxuXHRcdFx0dmlzaWJsZSA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkudG9BcnJheSgpLnNsaWNlKHN0YXJ0LCBlbmQpLFxuXHRcdFx0aGVpZ2h0cyA9IFtdLFxuXHRcdFx0bWF4aGVpZ2h0ID0gMDtcblxuXHRcdCQuZWFjaCh2aXNpYmxlLCBmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdFx0aGVpZ2h0cy5wdXNoKCQoaXRlbSkuaGVpZ2h0KCkpO1xuXHRcdH0pO1xuXG5cdFx0bWF4aGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7XG5cblx0XHRpZiAobWF4aGVpZ2h0IDw9IDEgJiYgbGF6eUxvYWRFbmFibGVkICYmIHRoaXMuX3ByZXZpb3VzSGVpZ2h0KSB7XG5cdFx0XHRtYXhoZWlnaHQgPSB0aGlzLl9wcmV2aW91c0hlaWdodDtcblx0XHR9XG5cblx0XHR0aGlzLl9wcmV2aW91c0hlaWdodCA9IG1heGhlaWdodDtcblxuXHRcdHRoaXMuX2NvcmUuJHN0YWdlLnBhcmVudCgpXG5cdFx0XHQuaGVpZ2h0KG1heGhlaWdodClcblx0XHRcdC5hZGRDbGFzcyh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHRDbGFzcyk7XG5cdH07XG5cblx0QXV0b0hlaWdodC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT09ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BdXRvSGVpZ2h0ID0gQXV0b0hlaWdodDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIFZpZGVvIFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB2aWRlbyBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgVmlkZW8gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBWaWRlbyA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIENhY2hlIGFsbCB2aWRlbyBVUkxzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3ZpZGVvcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBwbGF5aW5nIGl0ZW0uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5fcGxheWluZyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHRvZG8gVGhlIGNsb25lZCBjb250ZW50IHJlbW92YWxlIGlzIHRvbyBsYXRlXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUucmVnaXN0ZXIoeyB0eXBlOiAnc3RhdGUnLCBuYW1lOiAncGxheWluZycsIHRhZ3M6IFsgJ2ludGVyYWN0aW5nJyBdIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZXNpemUub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvICYmIHRoaXMuaXNJbkZ1bGxTY3JlZW4oKSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5pcygncmVzaXppbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUuJHN0YWdlLmZpbmQoJy5jbG9uZWQgLm93bC12aWRlby1mcmFtZScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nICYmIHRoaXMuX3BsYXlpbmcpIHtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICghZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgJGVsZW1lbnQgPSAkKGUuY29udGVudCkuZmluZCgnLm93bC12aWRlbycpO1xuXG5cdFx0XHRcdGlmICgkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRcdHRoaXMuZmV0Y2goJGVsZW1lbnQsICQoZS5jb250ZW50KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVmlkZW8uRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbignY2xpY2sub3dsLnZpZGVvJywgJy5vd2wtdmlkZW8tcGxheS1pY29uJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHR0aGlzLnBsYXkoZSk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFZpZGVvLkRlZmF1bHRzID0ge1xuXHRcdHZpZGVvOiBmYWxzZSxcblx0XHR2aWRlb0hlaWdodDogZmFsc2UsXG5cdFx0dmlkZW9XaWR0aDogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgdmlkZW8gSUQgYW5kIHRoZSB0eXBlIChZb3VUdWJlL1ZpbWVvL3Z6YWFyIG9ubHkpLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IGNvbnRhaW5pbmcgdGhlIHZpZGVvIGRhdGEuXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBpdGVtIC0gVGhlIGl0ZW0gY29udGFpbmluZyB0aGUgdmlkZW8uXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbih0YXJnZXQsIGl0ZW0pIHtcblx0XHRcdHZhciB0eXBlID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICh0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3ZpbWVvJztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRhcmdldC5hdHRyKCdkYXRhLXZ6YWFyLWlkJykpIHtcblx0XHRcdFx0XHRcdHJldHVybiAndnphYXInXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAneW91dHViZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSgpLFxuXHRcdFx0XHRpZCA9IHRhcmdldC5hdHRyKCdkYXRhLXZpbWVvLWlkJykgfHwgdGFyZ2V0LmF0dHIoJ2RhdGEteW91dHViZS1pZCcpIHx8IHRhcmdldC5hdHRyKCdkYXRhLXZ6YWFyLWlkJyksXG5cdFx0XHRcdHdpZHRoID0gdGFyZ2V0LmF0dHIoJ2RhdGEtd2lkdGgnKSB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvV2lkdGgsXG5cdFx0XHRcdGhlaWdodCA9IHRhcmdldC5hdHRyKCdkYXRhLWhlaWdodCcpIHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MudmlkZW9IZWlnaHQsXG5cdFx0XHRcdHVybCA9IHRhcmdldC5hdHRyKCdocmVmJyk7XG5cblx0XHRpZiAodXJsKSB7XG5cblx0XHRcdC8qXG5cdFx0XHRcdFx0UGFyc2VzIHRoZSBpZCdzIG91dCBvZiB0aGUgZm9sbG93aW5nIHVybHMgKGFuZCBwcm9iYWJseSBtb3JlKTpcblx0XHRcdFx0XHRodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTppZFxuXHRcdFx0XHRcdGh0dHBzOi8veW91dHUuYmUvOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly92aW1lby5jb20vOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly92aW1lby5jb20vY2hhbm5lbHMvOmNoYW5uZWwvOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly92aW1lby5jb20vZ3JvdXBzLzpncm91cC92aWRlb3MvOmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly9hcHAudnphYXIuY29tL3ZpZGVvcy86aWRcblxuXHRcdFx0XHRcdFZpc3VhbCBleGFtcGxlOiBodHRwczovL3JlZ2V4cGVyLmNvbS8jKGh0dHAlM0ElN0NodHRwcyUzQSU3QyklNUMlMkYlNUMlMkYocGxheWVyLiU3Q3d3dy4lN0NhcHAuKSUzRih2aW1lbyU1Qy5jb20lN0N5b3V0dShiZSU1Qy5jb20lN0MlNUMuYmUlN0NiZSU1Qy5nb29nbGVhcGlzJTVDLmNvbSklN0N2emFhciU1Qy5jb20pJTVDJTJGKHZpZGVvJTVDJTJGJTdDdmlkZW9zJTVDJTJGJTdDZW1iZWQlNUMlMkYlN0NjaGFubmVscyU1QyUyRi4lMkIlNUMlMkYlN0Nncm91cHMlNUMlMkYuJTJCJTVDJTJGJTdDd2F0Y2glNUMlM0Z2JTNEJTdDdiU1QyUyRiklM0YoJTVCQS1aYS16MC05Ll8lMjUtJTVEKikoJTVDJTI2JTVDUyUyQiklM0Zcblx0XHRcdCovXG5cblx0XHRcdGlkID0gdXJsLm1hdGNoKC8oaHR0cDp8aHR0cHM6fClcXC9cXC8ocGxheWVyLnx3d3cufGFwcC4pPyh2aW1lb1xcLmNvbXx5b3V0dShiZVxcLmNvbXxcXC5iZXxiZVxcLmdvb2dsZWFwaXNcXC5jb218YmVcXC1ub2Nvb2tpZVxcLmNvbSl8dnphYXJcXC5jb20pXFwvKHZpZGVvXFwvfHZpZGVvc1xcL3xlbWJlZFxcL3xjaGFubmVsc1xcLy4rXFwvfGdyb3Vwc1xcLy4rXFwvfHdhdGNoXFw/dj18dlxcLyk/KFtBLVphLXowLTkuXyUtXSopKFxcJlxcUyspPy8pO1xuXG5cdFx0XHRpZiAoaWRbM10uaW5kZXhPZigneW91dHUnKSA+IC0xKSB7XG5cdFx0XHRcdHR5cGUgPSAneW91dHViZSc7XG5cdFx0XHR9IGVsc2UgaWYgKGlkWzNdLmluZGV4T2YoJ3ZpbWVvJykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3ZpbWVvJztcblx0XHRcdH0gZWxzZSBpZiAoaWRbM10uaW5kZXhPZigndnphYXInKSA+IC0xKSB7XG5cdFx0XHRcdHR5cGUgPSAndnphYXInO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWaWRlbyBVUkwgbm90IHN1cHBvcnRlZC4nKTtcblx0XHRcdH1cblx0XHRcdGlkID0gaWRbNl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyB2aWRlbyBVUkwuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlkZW9zW3VybF0gPSB7XG5cdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0aWQ6IGlkLFxuXHRcdFx0d2lkdGg6IHdpZHRoLFxuXHRcdFx0aGVpZ2h0OiBoZWlnaHRcblx0XHR9O1xuXG5cdFx0aXRlbS5hdHRyKCdkYXRhLXZpZGVvJywgdXJsKTtcblxuXHRcdHRoaXMudGh1bWJuYWlsKHRhcmdldCwgdGhpcy5fdmlkZW9zW3VybF0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHZpZGVvIHRodW1ibmFpbC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIFRoZSB2aWRlbyBpbmZvIG9iamVjdC5cblx0ICogQHNlZSBgZmV0Y2hgXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUudGh1bWJuYWlsID0gZnVuY3Rpb24odGFyZ2V0LCB2aWRlbykge1xuXHRcdHZhciB0bkxpbmssXG5cdFx0XHRpY29uLFxuXHRcdFx0cGF0aCxcblx0XHRcdGRpbWVuc2lvbnMgPSB2aWRlby53aWR0aCAmJiB2aWRlby5oZWlnaHQgPyAnd2lkdGg6JyArIHZpZGVvLndpZHRoICsgJ3B4O2hlaWdodDonICsgdmlkZW8uaGVpZ2h0ICsgJ3B4OycgOiAnJyxcblx0XHRcdGN1c3RvbVRuID0gdGFyZ2V0LmZpbmQoJ2ltZycpLFxuXHRcdFx0c3JjVHlwZSA9ICdzcmMnLFxuXHRcdFx0bGF6eUNsYXNzID0gJycsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRjcmVhdGUgPSBmdW5jdGlvbihwYXRoKSB7XG5cdFx0XHRcdGljb24gPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby1wbGF5LWljb25cIj48L2Rpdj4nO1xuXG5cdFx0XHRcdGlmIChzZXR0aW5ncy5sYXp5TG9hZCkge1xuXHRcdFx0XHRcdHRuTGluayA9ICQoJzxkaXYvPicse1xuXHRcdFx0XHRcdFx0XCJjbGFzc1wiOiAnb3dsLXZpZGVvLXRuICcgKyBsYXp5Q2xhc3MsXG5cdFx0XHRcdFx0XHRcInNyY1R5cGVcIjogcGF0aFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRuTGluayA9ICQoICc8ZGl2Lz4nLCB7XG5cdFx0XHRcdFx0XHRcImNsYXNzXCI6IFwib3dsLXZpZGVvLXRuXCIsXG5cdFx0XHRcdFx0XHRcInN0eWxlXCI6ICdvcGFjaXR5OjE7YmFja2dyb3VuZC1pbWFnZTp1cmwoJyArIHBhdGggKyAnKSdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXJnZXQuYWZ0ZXIodG5MaW5rKTtcblx0XHRcdFx0dGFyZ2V0LmFmdGVyKGljb24pO1xuXHRcdFx0fTtcblxuXHRcdC8vIHdyYXAgdmlkZW8gY29udGVudCBpbnRvIG93bC12aWRlby13cmFwcGVyIGRpdlxuXHRcdHRhcmdldC53cmFwKCAkKCAnPGRpdi8+Jywge1xuXHRcdFx0XCJjbGFzc1wiOiBcIm93bC12aWRlby13cmFwcGVyXCIsXG5cdFx0XHRcInN0eWxlXCI6IGRpbWVuc2lvbnNcblx0XHR9KSk7XG5cblx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCkge1xuXHRcdFx0c3JjVHlwZSA9ICdkYXRhLXNyYyc7XG5cdFx0XHRsYXp5Q2xhc3MgPSAnb3dsLWxhenknO1xuXHRcdH1cblxuXHRcdC8vIGN1c3RvbSB0aHVtYm5haWxcblx0XHRpZiAoY3VzdG9tVG4ubGVuZ3RoKSB7XG5cdFx0XHRjcmVhdGUoY3VzdG9tVG4uYXR0cihzcmNUeXBlKSk7XG5cdFx0XHRjdXN0b21Ubi5yZW1vdmUoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG5cdFx0XHRwYXRoID0gXCIvL2ltZy55b3V0dWJlLmNvbS92aS9cIiArIHZpZGVvLmlkICsgXCIvaHFkZWZhdWx0LmpwZ1wiO1xuXHRcdFx0Y3JlYXRlKHBhdGgpO1xuXHRcdH0gZWxzZSBpZiAodmlkZW8udHlwZSA9PT0gJ3ZpbWVvJykge1xuXHRcdFx0JC5hamF4KHtcblx0XHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRcdHVybDogJy8vdmltZW8uY29tL2FwaS92Mi92aWRlby8nICsgdmlkZW8uaWQgKyAnLmpzb24nLFxuXHRcdFx0XHRqc29ucDogJ2NhbGxiYWNrJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29ucCcsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRwYXRoID0gZGF0YVswXS50aHVtYm5haWxfbGFyZ2U7XG5cdFx0XHRcdFx0Y3JlYXRlKHBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2emFhcicpIHtcblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHR1cmw6ICcvL3Z6YWFyLmNvbS9hcGkvdmlkZW9zLycgKyB2aWRlby5pZCArICcuanNvbicsXG5cdFx0XHRcdGpzb25wOiAnY2FsbGJhY2snLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb25wJyxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdHBhdGggPSBkYXRhLmZyYW1lZ3JhYl91cmw7XG5cdFx0XHRcdFx0Y3JlYXRlKHBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBjdXJyZW50IHZpZGVvLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcCcsIG51bGwsICd2aWRlbycpO1xuXHRcdHRoaXMuX3BsYXlpbmcuZmluZCgnLm93bC12aWRlby1mcmFtZScpLnJlbW92ZSgpO1xuXHRcdHRoaXMuX3BsYXlpbmcucmVtb3ZlQ2xhc3MoJ293bC12aWRlby1wbGF5aW5nJyk7XG5cdFx0dGhpcy5fcGxheWluZyA9IG51bGw7XG5cdFx0dGhpcy5fY29yZS5sZWF2ZSgncGxheWluZycpO1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcHBlZCcsIG51bGwsICd2aWRlbycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIGN1cnJlbnQgdmlkZW8uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCksXG5cdFx0XHRpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLFxuXHRcdFx0dmlkZW8gPSB0aGlzLl92aWRlb3NbaXRlbS5hdHRyKCdkYXRhLXZpZGVvJyldLFxuXHRcdFx0d2lkdGggPSB2aWRlby53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRoZWlnaHQgPSB2aWRlby5oZWlnaHQgfHwgdGhpcy5fY29yZS4kc3RhZ2UuaGVpZ2h0KCksXG5cdFx0XHRodG1sLFxuXHRcdFx0aWZyYW1lO1xuXG5cdFx0aWYgKHRoaXMuX3BsYXlpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9jb3JlLmVudGVyKCdwbGF5aW5nJyk7XG5cdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdwbGF5JywgbnVsbCwgJ3ZpZGVvJyk7XG5cblx0XHRpdGVtID0gdGhpcy5fY29yZS5pdGVtcyh0aGlzLl9jb3JlLnJlbGF0aXZlKGl0ZW0uaW5kZXgoKSkpO1xuXG5cdFx0dGhpcy5fY29yZS5yZXNldChpdGVtLmluZGV4KCkpO1xuXG5cdFx0aHRtbCA9ICQoICc8aWZyYW1lIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gd2Via2l0QWxsb3dGdWxsU2NyZWVuID48L2lmcmFtZT4nICk7XG5cdFx0aHRtbC5hdHRyKCAnaGVpZ2h0JywgaGVpZ2h0ICk7XG5cdFx0aHRtbC5hdHRyKCAnd2lkdGgnLCB3aWR0aCApO1xuXHRcdGlmICh2aWRlby50eXBlID09PSAneW91dHViZScpIHtcblx0XHRcdGh0bWwuYXR0ciggJ3NyYycsICcvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgdmlkZW8uaWQgKyAnP2F1dG9wbGF5PTEmcmVsPTAmdj0nICsgdmlkZW8uaWQgKTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2aW1lbycpIHtcblx0XHRcdGh0bWwuYXR0ciggJ3NyYycsICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJyArIHZpZGVvLmlkICsgJz9hdXRvcGxheT0xJyApO1xuXHRcdH0gZWxzZSBpZiAodmlkZW8udHlwZSA9PT0gJ3Z6YWFyJykge1xuXHRcdFx0aHRtbC5hdHRyKCAnc3JjJywgJy8vdmlldy52emFhci5jb20vJyArIHZpZGVvLmlkICsgJy9wbGF5ZXI/YXV0b3BsYXk9dHJ1ZScgKTtcblx0XHR9XG5cblx0XHRpZnJhbWUgPSAkKGh0bWwpLndyYXAoICc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLWZyYW1lXCIgLz4nICkuaW5zZXJ0QWZ0ZXIoaXRlbS5maW5kKCcub3dsLXZpZGVvJykpO1xuXG5cdFx0dGhpcy5fcGxheWluZyA9IGl0ZW0uYWRkQ2xhc3MoJ293bC12aWRlby1wbGF5aW5nJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIGFuIHZpZGVvIGlzIGN1cnJlbnRseSBpbiBmdWxsIHNjcmVlbiBtb2RlIG9yIG5vdC5cblx0ICogQHRvZG8gQmFkIHN0eWxlIGJlY2F1c2UgbG9va3MgbGlrZSBhIHJlYWRvbmx5IG1ldGhvZCBidXQgY2hhbmdlcyBtZW1iZXJzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLmlzSW5GdWxsU2NyZWVuID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fFxuXHRcdFx0XHRkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudDtcblxuXHRcdHJldHVybiBlbGVtZW50ICYmICQoZWxlbWVudCkucGFyZW50KCkuaGFzQ2xhc3MoJ293bC12aWRlby1mcmFtZScpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZignY2xpY2sub3dsLnZpZGVvJyk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5WaWRlbyA9IFZpZGVvO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQW5pbWF0ZSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYW5pbWF0ZSBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgTmF2aWdhdGlvbiBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IHNjb3BlIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEFuaW1hdGUgPSBmdW5jdGlvbihzY29wZSkge1xuXHRcdHRoaXMuY29yZSA9IHNjb3BlO1xuXHRcdHRoaXMuY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEFuaW1hdGUuRGVmYXVsdHMsIHRoaXMuY29yZS5vcHRpb25zKTtcblx0XHR0aGlzLnN3YXBwaW5nID0gdHJ1ZTtcblx0XHR0aGlzLnByZXZpb3VzID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMubmV4dCA9IHVuZGVmaW5lZDtcblxuXHRcdHRoaXMuaGFuZGxlcnMgPSB7XG5cdFx0XHQnY2hhbmdlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLnByZXZpb3VzID0gdGhpcy5jb3JlLmN1cnJlbnQoKTtcblx0XHRcdFx0XHR0aGlzLm5leHQgPSBlLnByb3BlcnR5LnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdkcmFnLm93bC5jYXJvdXNlbCBkcmFnZ2VkLm93bC5jYXJvdXNlbCB0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLnN3YXBwaW5nID0gZS50eXBlID09ICd0cmFuc2xhdGVkJztcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQndHJhbnNsYXRlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5zd2FwcGluZyAmJiAodGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZU91dCB8fCB0aGlzLmNvcmUub3B0aW9ucy5hbmltYXRlSW4pKSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FwKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdHRoaXMuY29yZS4kZWxlbWVudC5vbih0aGlzLmhhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBbmltYXRlLkRlZmF1bHRzID0ge1xuXHRcdGFuaW1hdGVPdXQ6IGZhbHNlLFxuXHRcdGFuaW1hdGVJbjogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogVG9nZ2xlcyB0aGUgYW5pbWF0aW9uIGNsYXNzZXMgd2hlbmV2ZXIgYW4gdHJhbnNsYXRpb25zIHN0YXJ0cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbnx1bmRlZmluZWR9XG5cdCAqL1xuXHRBbmltYXRlLnByb3RvdHlwZS5zd2FwID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAodGhpcy5jb3JlLnNldHRpbmdzLml0ZW1zICE9PSAxKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCEkLnN1cHBvcnQuYW5pbWF0aW9uIHx8ICEkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY29yZS5zcGVlZCgwKTtcblxuXHRcdHZhciBsZWZ0LFxuXHRcdFx0Y2xlYXIgPSAkLnByb3h5KHRoaXMuY2xlYXIsIHRoaXMpLFxuXHRcdFx0cHJldmlvdXMgPSB0aGlzLmNvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5wcmV2aW91cyksXG5cdFx0XHRuZXh0ID0gdGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMubmV4dCksXG5cdFx0XHRpbmNvbWluZyA9IHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlSW4sXG5cdFx0XHRvdXRnb2luZyA9IHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0O1xuXG5cdFx0aWYgKHRoaXMuY29yZS5jdXJyZW50KCkgPT09IHRoaXMucHJldmlvdXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAob3V0Z29pbmcpIHtcblx0XHRcdGxlZnQgPSB0aGlzLmNvcmUuY29vcmRpbmF0ZXModGhpcy5wcmV2aW91cykgLSB0aGlzLmNvcmUuY29vcmRpbmF0ZXModGhpcy5uZXh0KTtcblx0XHRcdHByZXZpb3VzLm9uZSgkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgY2xlYXIpXG5cdFx0XHRcdC5jc3MoIHsgJ2xlZnQnOiBsZWZ0ICsgJ3B4JyB9IClcblx0XHRcdFx0LmFkZENsYXNzKCdhbmltYXRlZCBvd2wtYW5pbWF0ZWQtb3V0Jylcblx0XHRcdFx0LmFkZENsYXNzKG91dGdvaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoaW5jb21pbmcpIHtcblx0XHRcdG5leHQub25lKCQuc3VwcG9ydC5hbmltYXRpb24uZW5kLCBjbGVhcilcblx0XHRcdFx0LmFkZENsYXNzKCdhbmltYXRlZCBvd2wtYW5pbWF0ZWQtaW4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoaW5jb21pbmcpO1xuXHRcdH1cblx0fTtcblxuXHRBbmltYXRlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKGUpIHtcblx0XHQkKGUudGFyZ2V0KS5jc3MoIHsgJ2xlZnQnOiAnJyB9IClcblx0XHRcdC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCBvd2wtYW5pbWF0ZWQtaW4nKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlSW4pXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVPdXQpO1xuXHRcdHRoaXMuY29yZS5vblRyYW5zaXRpb25FbmQoKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QW5pbWF0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLmhhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLmNvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuaGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkFuaW1hdGUgPSBBbmltYXRlO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b3BsYXkgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAYXV0aG9yIFRvbSBEZSBDYWx1d8OpXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYXV0b3BsYXkgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG9wbGF5IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gc2NvcGUgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQXV0b3BsYXkgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgYXV0b3BsYXkgdGltZW91dCBpZC5cblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NhbGwgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogRGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiB0aGUgcGx1Z2luLCB0aGlzIHZhcmlhYmxlIGNvbnRhaW5zIGVpdGhlclxuXHRcdCAqIHRoZSBzdGFydCB0aW1lIG9mIHRoZSB0aW1lciBvciB0aGUgY3VycmVudCB0aW1lciB2YWx1ZSBpZiBpdCdzXG5cdFx0ICogcGF1c2VkLiBTaW5jZSB3ZSBzdGFydCBpbiBhIHBhdXNlZCBzdGF0ZSB3ZSBpbml0aWFsaXplIHRoZSB0aW1lclxuXHRcdCAqIHZhbHVlLlxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fdGltZSA9IDA7XG5cblx0XHQvKipcblx0XHQgKiBTdG9yZXMgdGhlIHRpbWVvdXQgY3VycmVudGx5IHVzZWQuXG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl90aW1lb3V0ID0gMDtcblxuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyB3aGVuZXZlciB0aGUgYXV0b3BsYXkgaXMgcGF1c2VkLlxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3NldHRpbmdzJykge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3Bvc2l0aW9uJyAmJiB0aGlzLl9wYXVzZWQpIHtcblx0XHRcdFx0XHQvLyBSZXNldCB0aGUgdGltZXIuIFRoaXMgY29kZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgcG9zaXRpb25cblx0XHRcdFx0XHQvLyBvZiB0aGUgY2Fyb3VzZWwgd2FzIGNoYW5nZWQgdGhyb3VnaCB1c2VyIGludGVyYWN0aW9uLlxuXHRcdFx0XHRcdHRoaXMuX3RpbWUgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXkpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncGxheS5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKGUsIHQsIHMpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KHQsIHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdzdG9wLm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnbW91c2VvdmVyLm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSAmJiB0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdtb3VzZWxlYXZlLm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSAmJiB0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RvdWNoc3RhcnQub3dsLmNvcmUnOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQndG91Y2hlbmQub3dsLmNvcmUnOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b3BsYXkuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkuRGVmYXVsdHMgPSB7XG5cdFx0YXV0b3BsYXk6IGZhbHNlLFxuXHRcdGF1dG9wbGF5VGltZW91dDogNTAwMCxcblx0XHRhdXRvcGxheUhvdmVyUGF1c2U6IGZhbHNlLFxuXHRcdGF1dG9wbGF5U3BlZWQ6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc2xpZGUgYW5kIHNldCBhIHRpbWVvdXQgZm9yIHRoZSBuZXh0IHRyYW5zaXRpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBmb3IgdGhlIGFuaW1hdGlvbnMuXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdHRoaXMuX2NhbGwgPSB3aW5kb3cuc2V0VGltZW91dChcblx0XHRcdCQucHJveHkodGhpcy5fbmV4dCwgdGhpcywgc3BlZWQpLFxuXHRcdFx0dGhpcy5fdGltZW91dCAqIChNYXRoLnJvdW5kKHRoaXMucmVhZCgpIC8gdGhpcy5fdGltZW91dCkgKyAxKSAtIHRoaXMucmVhZCgpXG5cdFx0KTtcblxuXHRcdGlmICh0aGlzLl9jb3JlLmlzKCdpbnRlcmFjdGluZycpIHx8IGRvY3VtZW50LmhpZGRlbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9jb3JlLm5leHQoc3BlZWQgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheVNwZWVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkcyB0aGUgY3VycmVudCB0aW1lciB2YWx1ZSB3aGVuIHRoZSB0aW1lciBpcyBwbGF5aW5nLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMuX3RpbWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyB0aGUgYXV0b3BsYXkuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFt0aW1lb3V0XSAtIFRoZSBpbnRlcnZhbCBiZWZvcmUgdGhlIG5leHQgYW5pbWF0aW9uIHN0YXJ0cy5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkIGZvciB0aGUgYW5pbWF0aW9ucy5cblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24odGltZW91dCwgc3BlZWQpIHtcblx0XHR2YXIgZWxhcHNlZDtcblxuXHRcdGlmICghdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0dGhpcy5fY29yZS5lbnRlcigncm90YXRpbmcnKTtcblx0XHR9XG5cblx0XHR0aW1lb3V0ID0gdGltZW91dCB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5VGltZW91dDtcblxuXHRcdC8vIENhbGN1bGF0ZSB0aGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBsYXN0IHRyYW5zaXRpb24uIElmIHRoZSBjYXJvdXNlbFxuXHRcdC8vIHdhc24ndCBwbGF5aW5nIHRoaXMgY2FsY3VsYXRpb24gd2lsbCB5aWVsZCB6ZXJvLlxuXHRcdGVsYXBzZWQgPSBNYXRoLm1pbih0aGlzLl90aW1lICUgKHRoaXMuX3RpbWVvdXQgfHwgdGltZW91dCksIHRpbWVvdXQpO1xuXG5cdFx0aWYgKHRoaXMuX3BhdXNlZCkge1xuXHRcdFx0Ly8gU3RhcnQgdGhlIGNsb2NrLlxuXHRcdFx0dGhpcy5fdGltZSA9IHRoaXMucmVhZCgpO1xuXHRcdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENsZWFyIHRoZSBhY3RpdmUgdGltZW91dCB0byBhbGxvdyByZXBsYWNlbWVudC5cblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fY2FsbCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRqdXN0IHRoZSBvcmlnaW4gb2YgdGhlIHRpbWVyIHRvIG1hdGNoIHRoZSBuZXcgdGltZW91dCB2YWx1ZS5cblx0XHR0aGlzLl90aW1lICs9IHRoaXMucmVhZCgpICUgdGltZW91dCAtIGVsYXBzZWQ7XG5cblx0XHR0aGlzLl90aW1lb3V0ID0gdGltZW91dDtcblx0XHR0aGlzLl9jYWxsID0gd2luZG93LnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLl9uZXh0LCB0aGlzLCBzcGVlZCksIHRpbWVvdXQgLSBlbGFwc2VkKTtcblx0fTtcblxuXHQvKipcblx0ICogU3RvcHMgdGhlIGF1dG9wbGF5LlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHQvLyBSZXNldCB0aGUgY2xvY2suXG5cdFx0XHR0aGlzLl90aW1lID0gMDtcblx0XHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fY2FsbCk7XG5cdFx0XHR0aGlzLl9jb3JlLmxlYXZlKCdyb3RhdGluZycpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogUGF1c2VzIHRoZSBhdXRvcGxheS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykgJiYgIXRoaXMuX3BhdXNlZCkge1xuXHRcdFx0Ly8gUGF1c2UgdGhlIGNsb2NrLlxuXHRcdFx0dGhpcy5fdGltZSA9IHRoaXMucmVhZCgpO1xuXHRcdFx0dGhpcy5fcGF1c2VkID0gdHJ1ZTtcblxuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9jYWxsKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdHRoaXMuc3RvcCgpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuYXV0b3BsYXkgPSBBdXRvcGxheTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIG5hdmlnYXRpb24gcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIE5hdmlnYXRpb24gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWwuXG5cdCAqL1xuXHR2YXIgTmF2aWdhdGlvbiA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwbHVnaW4gaXMgaW5pdGlhbGl6ZWQgb3Igbm90LlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGN1cnJlbnQgcGFnaW5nIGluZGV4ZXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLl9wYWdlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIERPTSBlbGVtZW50cyBvZiB0aGUgdXNlciBpbnRlcmZhY2UuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29udHJvbHMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIE1hcmt1cCBmb3IgYW4gaW5kaWNhdG9yLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59XG5cdFx0ICovXG5cdFx0dGhpcy5fdGVtcGxhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBUaGUgY2Fyb3VzZWwgZWxlbWVudC5cblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLl9jb3JlLiRlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogT3ZlcnJpZGRlbiBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9vdmVycmlkZXMgPSB7XG5cdFx0XHRuZXh0OiB0aGlzLl9jb3JlLm5leHQsXG5cdFx0XHRwcmV2OiB0aGlzLl9jb3JlLnByZXYsXG5cdFx0XHR0bzogdGhpcy5fY29yZS50b1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGVtcGxhdGVzLnB1c2goJzxkaXYgY2xhc3M9XCInICsgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RDbGFzcyArICdcIj4nICtcblx0XHRcdFx0XHRcdCQoZS5jb250ZW50KS5maW5kKCdbZGF0YS1kb3RdJykuYWRkQmFjaygnW2RhdGEtZG90XScpLmF0dHIoJ2RhdGEtZG90JykgKyAnPC9kaXY+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2FkZGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMCwgdGhpcy5fdGVtcGxhdGVzLnBvcCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVtb3ZlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT0gJ3Bvc2l0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmICF0aGlzLl9pbml0aWFsaXplZCkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignaW5pdGlhbGl6ZScsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0XHR0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdpbml0aWFsaXplZCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2luaXRpYWxpemVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdyZWZyZXNoJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncmVmcmVzaGVkJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBOYXZpZ2F0aW9uLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqIEB0b2RvIFJlbmFtZSBgc2xpZGVCeWAgdG8gYG5hdkJ5YFxuXHQgKi9cblx0TmF2aWdhdGlvbi5EZWZhdWx0cyA9IHtcblx0XHRuYXY6IGZhbHNlLFxuXHRcdG5hdlRleHQ6IFtcblx0XHRcdCc8c3BhbiBhcmlhLWxhYmVsPVwiJyArICdQcmV2aW91cycgKyAnXCI+JiN4MjAzOTs8L3NwYW4+Jyxcblx0XHRcdCc8c3BhbiBhcmlhLWxhYmVsPVwiJyArICdOZXh0JyArICdcIj4mI3gyMDNhOzwvc3Bhbj4nXG5cdFx0XSxcblx0XHRuYXZTcGVlZDogZmFsc2UsXG5cdFx0bmF2RWxlbWVudDogJ2J1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cInByZXNlbnRhdGlvblwiJyxcblx0XHRuYXZDb250YWluZXI6IGZhbHNlLFxuXHRcdG5hdkNvbnRhaW5lckNsYXNzOiAnb3dsLW5hdicsXG5cdFx0bmF2Q2xhc3M6IFtcblx0XHRcdCdvd2wtcHJldicsXG5cdFx0XHQnb3dsLW5leHQnXG5cdFx0XSxcblx0XHRzbGlkZUJ5OiAxLFxuXHRcdGRvdENsYXNzOiAnb3dsLWRvdCcsXG5cdFx0ZG90c0NsYXNzOiAnb3dsLWRvdHMnLFxuXHRcdGRvdHM6IHRydWUsXG5cdFx0ZG90c0VhY2g6IGZhbHNlLFxuXHRcdGRvdHNEYXRhOiBmYWxzZSxcblx0XHRkb3RzU3BlZWQ6IGZhbHNlLFxuXHRcdGRvdHNDb250YWluZXI6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBsYXlvdXQgb2YgdGhlIHBsdWdpbiBhbmQgZXh0ZW5kcyB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgb3ZlcnJpZGUsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cblx0XHQvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgcmVsYXRpdmUgbmF2aWdhdGlvblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSA9IChzZXR0aW5ncy5uYXZDb250YWluZXIgPyAkKHNldHRpbmdzLm5hdkNvbnRhaW5lcilcblx0XHRcdDogJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDb250YWluZXJDbGFzcykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCkpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuXHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzBdKVxuXHRcdFx0Lmh0bWwoc2V0dGluZ3MubmF2VGV4dFswXSlcblx0XHRcdC5wcmVwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKVxuXHRcdFx0Lm9uKCdjbGljaycsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR0aGlzLnByZXYoc2V0dGluZ3MubmF2U3BlZWQpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdHRoaXMuX2NvbnRyb2xzLiRuZXh0ID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuXHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzFdKVxuXHRcdFx0Lmh0bWwoc2V0dGluZ3MubmF2VGV4dFsxXSlcblx0XHRcdC5hcHBlbmRUbyh0aGlzLl9jb250cm9scy4kcmVsYXRpdmUpXG5cdFx0XHQub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHRoaXMubmV4dChzZXR0aW5ncy5uYXZTcGVlZCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cblx0XHQvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgYWJzb2x1dGUgbmF2aWdhdGlvblxuXHRcdGlmICghc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdHRoaXMuX3RlbXBsYXRlcyA9IFsgJCgnPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCI+Jylcblx0XHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLmRvdENsYXNzKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpKVxuXHRcdFx0XHQucHJvcCgnb3V0ZXJIVE1MJykgXTtcblx0XHR9XG5cblx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUgPSAoc2V0dGluZ3MuZG90c0NvbnRhaW5lciA/ICQoc2V0dGluZ3MuZG90c0NvbnRhaW5lcilcblx0XHRcdDogJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5kb3RzQ2xhc3MpLmFwcGVuZFRvKHRoaXMuJGVsZW1lbnQpKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5vbignY2xpY2snLCAnYnV0dG9uJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgaW5kZXggPSAkKGUudGFyZ2V0KS5wYXJlbnQoKS5pcyh0aGlzLl9jb250cm9scy4kYWJzb2x1dGUpXG5cdFx0XHRcdD8gJChlLnRhcmdldCkuaW5kZXgoKSA6ICQoZS50YXJnZXQpLnBhcmVudCgpLmluZGV4KCk7XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy50byhpbmRleCwgc2V0dGluZ3MuZG90c1NwZWVkKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQvKiRlbC5vbignZm9jdXNpbicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JChkb2N1bWVudCkub2ZmKFwiLmNhcm91c2VsXCIpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bi5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYoZS5rZXlDb2RlID09IDM3KSB7XG5cdFx0XHRcdFx0JGVsLnRyaWdnZXIoJ3ByZXYub3dsJylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihlLmtleUNvZGUgPT0gMzkpIHtcblx0XHRcdFx0XHQkZWwudHJpZ2dlcignbmV4dC5vd2wnKVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTsqL1xuXG5cdFx0Ly8gb3ZlcnJpZGUgcHVibGljIG1ldGhvZHMgb2YgdGhlIGNhcm91c2VsXG5cdFx0Zm9yIChvdmVycmlkZSBpbiB0aGlzLl9vdmVycmlkZXMpIHtcblx0XHRcdHRoaXMuX2NvcmVbb3ZlcnJpZGVdID0gJC5wcm94eSh0aGlzW292ZXJyaWRlXSwgdGhpcyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIGNvbnRyb2wsIHByb3BlcnR5LCBvdmVycmlkZSwgc2V0dGluZ3M7XG5cdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAoY29udHJvbCBpbiB0aGlzLl9jb250cm9scykge1xuXHRcdFx0aWYgKGNvbnRyb2wgPT09ICckcmVsYXRpdmUnICYmIHNldHRpbmdzLm5hdkNvbnRhaW5lcikge1xuXHRcdFx0XHR0aGlzLl9jb250cm9sc1tjb250cm9sXS5odG1sKCcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xzW2NvbnRyb2xdLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKG92ZXJyaWRlIGluIHRoaXMub3ZlcmlkZXMpIHtcblx0XHRcdHRoaXMuX2NvcmVbb3ZlcnJpZGVdID0gdGhpcy5fb3ZlcnJpZGVzW292ZXJyaWRlXTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBpbnRlcm5hbCBzdGF0ZS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGksIGosIGssXG5cdFx0XHRsb3dlciA9IHRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoIC8gMixcblx0XHRcdHVwcGVyID0gbG93ZXIgKyB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoLFxuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2NvcmUubWF4aW11bSh0cnVlKSxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdHNpemUgPSBzZXR0aW5ncy5jZW50ZXIgfHwgc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLmRvdHNEYXRhXG5cdFx0XHRcdD8gMSA6IHNldHRpbmdzLmRvdHNFYWNoIHx8IHNldHRpbmdzLml0ZW1zO1xuXG5cdFx0aWYgKHNldHRpbmdzLnNsaWRlQnkgIT09ICdwYWdlJykge1xuXHRcdFx0c2V0dGluZ3Muc2xpZGVCeSA9IE1hdGgubWluKHNldHRpbmdzLnNsaWRlQnksIHNldHRpbmdzLml0ZW1zKTtcblx0XHR9XG5cblx0XHRpZiAoc2V0dGluZ3MuZG90cyB8fCBzZXR0aW5ncy5zbGlkZUJ5ID09ICdwYWdlJykge1xuXHRcdFx0dGhpcy5fcGFnZXMgPSBbXTtcblxuXHRcdFx0Zm9yIChpID0gbG93ZXIsIGogPSAwLCBrID0gMDsgaSA8IHVwcGVyOyBpKyspIHtcblx0XHRcdFx0aWYgKGogPj0gc2l6ZSB8fCBqID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fcGFnZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRzdGFydDogTWF0aC5taW4obWF4aW11bSwgaSAtIGxvd2VyKSxcblx0XHRcdFx0XHRcdGVuZDogaSAtIGxvd2VyICsgc2l6ZSAtIDFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpZiAoTWF0aC5taW4obWF4aW11bSwgaSAtIGxvd2VyKSA9PT0gbWF4aW11bSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGogPSAwLCArK2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0aiArPSB0aGlzLl9jb3JlLm1lcmdlcnModGhpcy5fY29yZS5yZWxhdGl2ZShpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEcmF3cyB0aGUgdXNlciBpbnRlcmZhY2UuXG5cdCAqIEB0b2RvIFRoZSBvcHRpb24gYGRvdHNEYXRhYCB3b250IHdvcmsuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZGlmZmVyZW5jZSxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdGRpc2FibGVkID0gdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aCA8PSBzZXR0aW5ncy5pdGVtcyxcblx0XHRcdGluZGV4ID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSksXG5cdFx0XHRsb29wID0gc2V0dGluZ3MubG9vcCB8fCBzZXR0aW5ncy5yZXdpbmQ7XG5cblx0XHR0aGlzLl9jb250cm9scy4kcmVsYXRpdmUudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIXNldHRpbmdzLm5hdiB8fCBkaXNhYmxlZCk7XG5cblx0XHRpZiAoc2V0dGluZ3MubmF2KSB7XG5cdFx0XHR0aGlzLl9jb250cm9scy4kcHJldmlvdXMudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIWxvb3AgJiYgaW5kZXggPD0gdGhpcy5fY29yZS5taW5pbXVtKHRydWUpKTtcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRuZXh0LnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFsb29wICYmIGluZGV4ID49IHRoaXMuX2NvcmUubWF4aW11bSh0cnVlKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFzZXR0aW5ncy5kb3RzIHx8IGRpc2FibGVkKTtcblxuXHRcdGlmIChzZXR0aW5ncy5kb3RzKSB7XG5cdFx0XHRkaWZmZXJlbmNlID0gdGhpcy5fcGFnZXMubGVuZ3RoIC0gdGhpcy5fY29udHJvbHMuJGFic29sdXRlLmNoaWxkcmVuKCkubGVuZ3RoO1xuXG5cdFx0XHRpZiAoc2V0dGluZ3MuZG90c0RhdGEgJiYgZGlmZmVyZW5jZSAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuaHRtbCh0aGlzLl90ZW1wbGF0ZXMuam9pbignJykpO1xuXHRcdFx0fSBlbHNlIGlmIChkaWZmZXJlbmNlID4gMCkge1xuXHRcdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuYXBwZW5kKG5ldyBBcnJheShkaWZmZXJlbmNlICsgMSkuam9pbih0aGlzLl90ZW1wbGF0ZXNbMF0pKTtcblx0XHRcdH0gZWxzZSBpZiAoZGlmZmVyZW5jZSA8IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmNoaWxkcmVuKCkuc2xpY2UoZGlmZmVyZW5jZSkucmVtb3ZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmNoaWxkcmVuKCkuZXEoJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcykpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEV4dGVuZHMgZXZlbnQgZGF0YS5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBvYmplY3Qgd2hpY2ggZ2V0cyB0aHJvd24uXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cblx0XHRldmVudC5wYWdlID0ge1xuXHRcdFx0aW5kZXg6ICQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpLFxuXHRcdFx0Y291bnQ6IHRoaXMuX3BhZ2VzLmxlbmd0aCxcblx0XHRcdHNpemU6IHNldHRpbmdzICYmIChzZXR0aW5ncy5jZW50ZXIgfHwgc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLmRvdHNEYXRhXG5cdFx0XHRcdD8gMSA6IHNldHRpbmdzLmRvdHNFYWNoIHx8IHNldHRpbmdzLml0ZW1zKVxuXHRcdH07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGN1cnJlbnQgcGFnZSBwb3NpdGlvbiBvZiB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpO1xuXHRcdHJldHVybiAkLmdyZXAodGhpcy5fcGFnZXMsICQucHJveHkoZnVuY3Rpb24ocGFnZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBwYWdlLnN0YXJ0IDw9IGN1cnJlbnQgJiYgcGFnZS5lbmQgPj0gY3VycmVudDtcblx0XHR9LCB0aGlzKSkucG9wKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGN1cnJlbnQgc3VjY2Vzb3IvcHJlZGVjZXNzb3IgcG9zaXRpb24uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oc3VjY2Vzc29yKSB7XG5cdFx0dmFyIHBvc2l0aW9uLCBsZW5ndGgsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cblx0XHRpZiAoc2V0dGluZ3Muc2xpZGVCeSA9PSAncGFnZScpIHtcblx0XHRcdHBvc2l0aW9uID0gJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcyk7XG5cdFx0XHRsZW5ndGggPSB0aGlzLl9wYWdlcy5sZW5ndGg7XG5cdFx0XHRzdWNjZXNzb3IgPyArK3Bvc2l0aW9uIDogLS1wb3NpdGlvbjtcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fcGFnZXNbKChwb3NpdGlvbiAlIGxlbmd0aCkgKyBsZW5ndGgpICUgbGVuZ3RoXS5zdGFydDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9zaXRpb24gPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKTtcblx0XHRcdGxlbmd0aCA9IHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGg7XG5cdFx0XHRzdWNjZXNzb3IgPyBwb3NpdGlvbiArPSBzZXR0aW5ncy5zbGlkZUJ5IDogcG9zaXRpb24gLT0gc2V0dGluZ3Muc2xpZGVCeTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zaXRpb247XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgbmV4dCBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZD1mYWxzZV0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuZ2V0UG9zaXRpb24odHJ1ZSksIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBwcmV2aW91cyBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZD1mYWxzZV0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuZ2V0UG9zaXRpb24oZmFsc2UpLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgc3BlY2lmaWVkIGl0ZW0gb3IgcGFnZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gb3IgcGFnZS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFuZGFyZD1mYWxzZV0gLSBXaGV0aGVyIHRvIHVzZSB0aGUgc3RhbmRhcmQgYmVoYXZpb3VyIG9yIG5vdC5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHNwZWVkLCBzdGFuZGFyZCkge1xuXHRcdHZhciBsZW5ndGg7XG5cblx0XHRpZiAoIXN0YW5kYXJkICYmIHRoaXMuX3BhZ2VzLmxlbmd0aCkge1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fcGFnZXMubGVuZ3RoO1xuXHRcdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuX3BhZ2VzWygocG9zaXRpb24gJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0uc3RhcnQsIHNwZWVkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHBvc2l0aW9uLCBzcGVlZCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5OYXZpZ2F0aW9uID0gTmF2aWdhdGlvbjtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEhhc2ggUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGhhc2ggcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEhhc2ggUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBIYXNoID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFzaCBpbmRleCBmb3IgdGhlIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhc2hlcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGNhcm91c2VsIGVsZW1lbnQuXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy5fY29yZS4kZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbiA9PT0gJ1VSTEhhc2gnKSB7XG5cdFx0XHRcdFx0JCh3aW5kb3cpLnRyaWdnZXIoJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHZhciBoYXNoID0gJChlLmNvbnRlbnQpLmZpbmQoJ1tkYXRhLWhhc2hdJykuYWRkQmFjaygnW2RhdGEtaGFzaF0nKS5hdHRyKCdkYXRhLWhhc2gnKTtcblxuXHRcdFx0XHRcdGlmICghaGFzaCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuX2hhc2hlc1toYXNoXSA9IGUuY29udGVudDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3Bvc2l0aW9uJykge1xuXHRcdFx0XHRcdHZhciBjdXJyZW50ID0gdGhpcy5fY29yZS5pdGVtcyh0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKSksXG5cdFx0XHRcdFx0XHRoYXNoID0gJC5tYXAodGhpcy5faGFzaGVzLCBmdW5jdGlvbihpdGVtLCBoYXNoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtID09PSBjdXJyZW50ID8gaGFzaCA6IG51bGw7XG5cdFx0XHRcdFx0XHR9KS5qb2luKCk7XG5cblx0XHRcdFx0XHRpZiAoIWhhc2ggfHwgd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkgPT09IGhhc2gpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgSGFzaC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIHRoZSBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXIgZm9yIGhhc2ggbmF2aWdhdGlvblxuXHRcdCQod2luZG93KS5vbignaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG5cdFx0XHRcdGl0ZW1zID0gdGhpcy5fY29yZS4kc3RhZ2UuY2hpbGRyZW4oKSxcblx0XHRcdFx0cG9zaXRpb24gPSB0aGlzLl9oYXNoZXNbaGFzaF0gJiYgaXRlbXMuaW5kZXgodGhpcy5faGFzaGVzW2hhc2hdKTtcblxuXHRcdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPT09IHRoaXMuX2NvcmUuY3VycmVudCgpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY29yZS50byh0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSwgZmFsc2UsIHRydWUpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRIYXNoLkRlZmF1bHRzID0ge1xuXHRcdFVSTGhhc2hMaXN0ZW5lcjogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0SGFzaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdCQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkhhc2ggPSBIYXNoO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogU3VwcG9ydCBQbHVnaW5cbiAqXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBWaXZpZCBQbGFuZXQgU29mdHdhcmUgR21iSFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdHZhciBzdHlsZSA9ICQoJzxzdXBwb3J0PicpLmdldCgwKS5zdHlsZSxcblx0XHRwcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLnNwbGl0KCcgJyksXG5cdFx0ZXZlbnRzID0ge1xuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRlbmQ6IHtcblx0XHRcdFx0XHRXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG5cdFx0XHRcdFx0TW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuXHRcdFx0XHRcdE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuXHRcdFx0XHRcdHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YW5pbWF0aW9uOiB7XG5cdFx0XHRcdGVuZDoge1xuXHRcdFx0XHRcdFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdFx0TW96QW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcblx0XHRcdFx0XHRPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0ZXN0cyA9IHtcblx0XHRcdGNzc3RyYW5zZm9ybXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0KCd0cmFuc2Zvcm0nKTtcblx0XHRcdH0sXG5cdFx0XHRjc3N0cmFuc2Zvcm1zM2Q6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0KCdwZXJzcGVjdGl2ZScpO1xuXHRcdFx0fSxcblx0XHRcdGNzc3RyYW5zaXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgndHJhbnNpdGlvbicpO1xuXHRcdFx0fSxcblx0XHRcdGNzc2FuaW1hdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISF0ZXN0KCdhbmltYXRpb24nKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdGZ1bmN0aW9uIHRlc3QocHJvcGVydHksIHByZWZpeGVkKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlLFxuXHRcdFx0dXBwZXIgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG5cdFx0JC5lYWNoKChwcm9wZXJ0eSArICcgJyArIHByZWZpeGVzLmpvaW4odXBwZXIgKyAnICcpICsgdXBwZXIpLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGksIHByb3BlcnR5KSB7XG5cdFx0XHRpZiAoc3R5bGVbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVzdWx0ID0gcHJlZml4ZWQgPyBwcm9wZXJ0eSA6IHRydWU7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBwcmVmaXhlZChwcm9wZXJ0eSkge1xuXHRcdHJldHVybiB0ZXN0KHByb3BlcnR5LCB0cnVlKTtcblx0fVxuXG5cdGlmICh0ZXN0cy5jc3N0cmFuc2l0aW9ucygpKSB7XG5cdFx0LyoganNoaW50IC1XMDUzICovXG5cdFx0JC5zdXBwb3J0LnRyYW5zaXRpb24gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCd0cmFuc2l0aW9uJykpXG5cdFx0JC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kID0gZXZlbnRzLnRyYW5zaXRpb24uZW5kWyAkLnN1cHBvcnQudHJhbnNpdGlvbiBdO1xuXHR9XG5cblx0aWYgKHRlc3RzLmNzc2FuaW1hdGlvbnMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC5hbmltYXRpb24gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCdhbmltYXRpb24nKSlcblx0XHQkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCA9IGV2ZW50cy5hbmltYXRpb24uZW5kWyAkLnN1cHBvcnQuYW5pbWF0aW9uIF07XG5cdH1cblxuXHRpZiAodGVzdHMuY3NzdHJhbnNmb3JtcygpKSB7XG5cdFx0LyoganNoaW50IC1XMDUzICovXG5cdFx0JC5zdXBwb3J0LnRyYW5zZm9ybSA9IG5ldyBTdHJpbmcocHJlZml4ZWQoJ3RyYW5zZm9ybScpKTtcblx0XHQkLnN1cHBvcnQudHJhbnNmb3JtM2QgPSB0ZXN0cy5jc3N0cmFuc2Zvcm1zM2QoKTtcblx0fVxuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzY3JvbGxMb2NrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNjcm9sbExvY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdG9vbHMuanNcbnZhciBhcmd1bWVudEFzQXJyYXkgPSBmdW5jdGlvbiBhcmd1bWVudEFzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJndW1lbnQpID8gYXJndW1lbnQgOiBbYXJndW1lbnRdO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsZW1lbnQodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBOb2RlO1xufTtcbnZhciBpc0VsZW1lbnRMaXN0ID0gZnVuY3Rpb24gaXNFbGVtZW50TGlzdChub2RlTGlzdCkge1xuICByZXR1cm4gbm9kZUxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdDtcbn07XG52YXIgZWFjaE5vZGUgPSBmdW5jdGlvbiBlYWNoTm9kZShub2RlTGlzdCwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGVMaXN0ICYmIGNhbGxiYWNrKSB7XG4gICAgbm9kZUxpc3QgPSBpc0VsZW1lbnRMaXN0KG5vZGVMaXN0KSA/IG5vZGVMaXN0IDogW25vZGVMaXN0XTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYWxsYmFjayhub2RlTGlzdFtpXSwgaSwgbm9kZUxpc3QubGVuZ3RoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgdGhyb3dFcnJvciA9IGZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4gY29uc29sZS5lcnJvcihcIltzY3JvbGwtbG9ja10gXCIuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG52YXIgYXJyYXlBc1NlbGVjdG9yID0gZnVuY3Rpb24gYXJyYXlBc1NlbGVjdG9yKGFycmF5KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHZhciBzZWxlY3RvciA9IGFycmF5LmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9XG59O1xudmFyIG5vZGVMaXN0QXNBcnJheSA9IGZ1bmN0aW9uIG5vZGVMaXN0QXNBcnJheShub2RlTGlzdCkge1xuICB2YXIgbm9kZXMgPSBbXTtcbiAgZWFjaE5vZGUobm9kZUxpc3QsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGVzLnB1c2gobm9kZSk7XG4gIH0pO1xuICByZXR1cm4gbm9kZXM7XG59O1xudmFyIGZpbmRQYXJlbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZmluZFBhcmVudEJ5U2VsZWN0b3IoJGVsLCBzZWxlY3Rvcikge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBkb2N1bWVudDtcblxuICBpZiAoc2VsZiAmJiBub2RlTGlzdEFzQXJyYXkoJHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmluZGV4T2YoJGVsKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gJGVsO1xuICB9XG5cbiAgd2hpbGUgKCgkZWwgPSAkZWwucGFyZW50RWxlbWVudCkgJiYgbm9kZUxpc3RBc0FycmF5KCRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5pbmRleE9mKCRlbCkgPT09IC0xKSB7XG4gICAgO1xuICB9XG5cbiAgcmV0dXJuICRlbDtcbn07XG52YXIgZWxlbWVudEhhc1NlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpIHtcbiAgdmFyICRyb290ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkb2N1bWVudDtcbiAgdmFyIGhhcyA9IG5vZGVMaXN0QXNBcnJheSgkcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuaW5kZXhPZigkZWwpICE9PSAtMTtcbiAgcmV0dXJuIGhhcztcbn07XG52YXIgZWxlbWVudEhhc092ZXJmbG93SGlkZGVuID0gZnVuY3Rpb24gZWxlbWVudEhhc092ZXJmbG93SGlkZGVuKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCRlbCk7XG4gICAgdmFyIG92ZXJmbG93SXNIaWRkZW4gPSBjb21wdXRlZFN0eWxlLm92ZXJmbG93ID09PSAnaGlkZGVuJztcbiAgICByZXR1cm4gb3ZlcmZsb3dJc0hpZGRlbjtcbiAgfVxufTtcbnZhciBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxUb3BPblN0YXJ0KCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gc2Nyb2xsVG9wIDw9IDA7XG4gIH1cbn07XG52YXIgZWxlbWVudFNjcm9sbFRvcE9uRW5kID0gZnVuY3Rpb24gZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gJGVsLnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gJGVsLnNjcm9sbEhlaWdodDtcbiAgICB2YXIgc2Nyb2xsVG9wV2l0aEhlaWdodCA9IHNjcm9sbFRvcCArICRlbC5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuIHNjcm9sbFRvcFdpdGhIZWlnaHQgPj0gc2Nyb2xsSGVpZ2h0O1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCA9IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHtcbiAgaWYgKCRlbCkge1xuICAgIGlmIChlbGVtZW50SGFzT3ZlcmZsb3dIaWRkZW4oJGVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSAkZWwuc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gc2Nyb2xsTGVmdCA8PSAwO1xuICB9XG59O1xudmFyIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQgPSBmdW5jdGlvbiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkge1xuICBpZiAoJGVsKSB7XG4gICAgaWYgKGVsZW1lbnRIYXNPdmVyZmxvd0hpZGRlbigkZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9ICRlbC5zY3JvbGxMZWZ0O1xuICAgIHZhciBzY3JvbGxXaWR0aCA9ICRlbC5zY3JvbGxXaWR0aDtcbiAgICB2YXIgc2Nyb2xsTGVmdFdpdGhXaWR0aCA9IHNjcm9sbExlZnQgKyAkZWwub2Zmc2V0V2lkdGg7XG4gICAgcmV0dXJuIHNjcm9sbExlZnRXaXRoV2lkdGggPj0gc2Nyb2xsV2lkdGg7XG4gIH1cbn07XG52YXIgZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkID0gZnVuY3Rpb24gZWxlbWVudElzU2Nyb2xsYWJsZUZpZWxkKCRlbCkge1xuICB2YXIgc2VsZWN0b3IgPSAndGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJztcbiAgcmV0dXJuIGVsZW1lbnRIYXNTZWxlY3RvcigkZWwsIHNlbGVjdG9yKTtcbn07XG52YXIgZWxlbWVudElzSW5wdXRSYW5nZSA9IGZ1bmN0aW9uIGVsZW1lbnRJc0lucHV0UmFuZ2UoJGVsKSB7XG4gIHZhciBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwicmFuZ2VcIl0nO1xuICByZXR1cm4gZWxlbWVudEhhc1NlbGVjdG9yKCRlbCwgc2VsZWN0b3IpO1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3Njcm9sbC1sb2NrLmpzXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGlzYWJsZVBhZ2VTY3JvbGxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkaXNhYmxlUGFnZVNjcm9sbDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZW5hYmxlUGFnZVNjcm9sbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGVuYWJsZVBhZ2VTY3JvbGw7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldFNjcm9sbFN0YXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2V0U2Nyb2xsU3RhdGU7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNsZWFyUXVldWVTY3JvbGxMb2Nrc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGNsZWFyUXVldWVTY3JvbGxMb2NrczsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0VGFyZ2V0U2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJnZXRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRQYWdlU2Nyb2xsQmFyV2lkdGg7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGhcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRDdXJyZW50UGFnZVNjcm9sbEJhcldpZHRoOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRTY3JvbGxhYmxlVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkU2Nyb2xsYWJsZVRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVUYXJnZXQ7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZFNjcm9sbGFibGVTZWxlY3RvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVRhcmdldFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX2FkZExvY2thYmxlVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhZGRMb2NrYWJsZVNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvcjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwic2V0RmlsbEdhcE1ldGhvZFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHNjcm9sbF9sb2NrX3NldEZpbGxHYXBNZXRob2Q7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFkZEZpbGxHYXBUYXJnZXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19hZGRGaWxsR2FwVGFyZ2V0OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwVGFyZ2V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfcmVtb3ZlRmlsbEdhcFRhcmdldDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYWRkRmlsbEdhcFNlbGVjdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFNlbGVjdG9yOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJyZW1vdmVGaWxsR2FwU2VsZWN0b3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwU2VsZWN0b3I7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInJlZmlsbEdhcHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZWZpbGxHYXBzOyB9KTtcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuXG52YXIgRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMgPSBbJ3BhZGRpbmcnLCAnbWFyZ2luJywgJ3dpZHRoJywgJ21heC13aWR0aCcsICdub25lJ107XG52YXIgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPSAzO1xudmFyIHN0YXRlID0ge1xuICBzY3JvbGw6IHRydWUsXG4gIHF1ZXVlOiAwLFxuICBzY3JvbGxhYmxlU2VsZWN0b3JzOiBbJ1tkYXRhLXNjcm9sbC1sb2NrLXNjcm9sbGFibGVdJ10sXG4gIGxvY2thYmxlU2VsZWN0b3JzOiBbJ2JvZHknLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBTZWxlY3RvcnM6IFsnYm9keScsICdbZGF0YS1zY3JvbGwtbG9jay1maWxsLWdhcF0nLCAnW2RhdGEtc2Nyb2xsLWxvY2stbG9ja2FibGVdJ10sXG4gIGZpbGxHYXBNZXRob2Q6IEZJTExfR0FQX0FWQUlMQUJMRV9NRVRIT0RTWzBdLFxuICAvL1xuICBzdGFydFRvdWNoWTogMCxcbiAgc3RhcnRUb3VjaFg6IDBcbn07XG52YXIgZGlzYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBkaXNhYmxlUGFnZVNjcm9sbCh0YXJnZXQpIHtcbiAgaWYgKHN0YXRlLnF1ZXVlIDw9IDApIHtcbiAgICBzdGF0ZS5zY3JvbGwgPSBmYWxzZTtcbiAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIGZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19hZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG4gIHN0YXRlLnF1ZXVlKys7XG59O1xudmFyIGVuYWJsZVBhZ2VTY3JvbGwgPSBmdW5jdGlvbiBlbmFibGVQYWdlU2Nyb2xsKHRhcmdldCkge1xuICBzdGF0ZS5xdWV1ZSA+IDAgJiYgc3RhdGUucXVldWUtLTtcblxuICBpZiAoc3RhdGUucXVldWUgPD0gMCkge1xuICAgIHN0YXRlLnNjcm9sbCA9IHRydWU7XG4gICAgc2Nyb2xsX2xvY2tfc2hvd0xvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB1bmZpbGxHYXBzKCk7XG4gIH1cblxuICBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCk7XG59O1xudmFyIGdldFNjcm9sbFN0YXRlID0gZnVuY3Rpb24gZ2V0U2Nyb2xsU3RhdGUoKSB7XG4gIHJldHVybiBzdGF0ZS5zY3JvbGw7XG59O1xudmFyIGNsZWFyUXVldWVTY3JvbGxMb2NrcyA9IGZ1bmN0aW9uIGNsZWFyUXVldWVTY3JvbGxMb2NrcygpIHtcbiAgc3RhdGUucXVldWUgPSAwO1xufTtcbnZhciBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgdmFyIG9ubHlFeGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgY3VycmVudE92ZXJmbG93WVByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5vdmVyZmxvd1k7XG5cbiAgICBpZiAob25seUV4aXN0cykge1xuICAgICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICAgICR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZID0gJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tTYXZlZE92ZXJmbG93WVByb3BlcnR5O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHNjcm9sbF9sb2NrX2dldEN1cnJlbnRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0KTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9IGN1cnJlbnRPdmVyZmxvd1lQcm9wZXJ0eTtcbiAgICByZXR1cm4gd2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoKCR0YXJnZXQpIHtcbiAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgIGlmICgkdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICB2YXIgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdmFyIGN1cnJlbnRXaWR0aCA9IHdpbmRvd1dpZHRoIC0gZG9jdW1lbnRXaWR0aDtcbiAgICAgIHJldHVybiBjdXJyZW50V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBib3JkZXJMZWZ0V2lkdGhDdXJyZW50UHJvcGVydHkgPSAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aDtcbiAgICAgIHZhciBib3JkZXJSaWdodFdpZHRoQ3VycmVudFByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoO1xuICAgICAgJHRhcmdldC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSAnMHB4JztcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9ICcwcHgnO1xuXG4gICAgICB2YXIgX2N1cnJlbnRXaWR0aCA9ICR0YXJnZXQub2Zmc2V0V2lkdGggLSAkdGFyZ2V0LmNsaWVudFdpZHRoO1xuXG4gICAgICAkdGFyZ2V0LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IGJvcmRlckxlZnRXaWR0aEN1cnJlbnRQcm9wZXJ0eTtcbiAgICAgICR0YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCA9IGJvcmRlclJpZ2h0V2lkdGhDdXJyZW50UHJvcGVydHk7XG4gICAgICByZXR1cm4gX2N1cnJlbnRXaWR0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG52YXIgZ2V0UGFnZVNjcm9sbEJhcldpZHRoID0gZnVuY3Rpb24gZ2V0UGFnZVNjcm9sbEJhcldpZHRoKCkge1xuICB2YXIgb25seUV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aChkb2N1bWVudC5ib2R5LCBvbmx5RXhpc3RzKTtcbn07XG52YXIgZ2V0Q3VycmVudFBhZ2VTY3JvbGxCYXJXaWR0aCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGgoKSB7XG4gIHJldHVybiBzY3JvbGxfbG9ja19nZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGgoZG9jdW1lbnQuYm9keSk7XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVUYXJnZXQgPSBmdW5jdGlvbiBhZGRTY3JvbGxhYmxlVGFyZ2V0KHRhcmdldCkge1xuICBpZiAodGFyZ2V0KSB7XG4gICAgdmFyIHRhcmdldHMgPSBhcmd1bWVudEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoJHRhcmdldHMpIHtcbiAgICAgIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgICAgICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgICAgICAgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tTY3JvbGxhYmxlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3dFcnJvcihcIlxcXCJcIi5jb25jYXQoJHRhcmdldCwgXCJcXFwiIGlzIG5vdCBhIEVsZW1lbnQuXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfcmVtb3ZlU2Nyb2xsYWJsZVRhcmdldCA9IGZ1bmN0aW9uIHJlbW92ZVNjcm9sbGFibGVUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICBkZWxldGUgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tTY3JvbGxhYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93RXJyb3IoXCJcXFwiXCIuY29uY2F0KCR0YXJnZXQsIFwiXFxcIiBpcyBub3QgYSBFbGVtZW50LlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVTZWxlY3RvciA9IGZ1bmN0aW9uIGFkZFNjcm9sbGFibGVTZWxlY3RvcihzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgc2VsZWN0b3JzID0gYXJndW1lbnRBc0FycmF5KHNlbGVjdG9yKTtcbiAgICBzZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlU2VsZWN0b3IgPSBmdW5jdGlvbiByZW1vdmVTY3JvbGxhYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLnNjcm9sbGFibGVTZWxlY3RvcnMgPSBzdGF0ZS5zY3JvbGxhYmxlU2VsZWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBzU2VsZWN0b3IgIT09IHNlbGVjdG9yO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVUYXJnZXQgPSBmdW5jdGlvbiBhZGRMb2NrYWJsZVRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgICR0YXJnZXQuZGF0YXNldC5zY3JvbGxMb2NrTG9ja2FibGUgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmICghZ2V0U2Nyb2xsU3RhdGUoKSkge1xuICAgICAgc2Nyb2xsX2xvY2tfaGlkZUxvY2thYmxlT3ZlcmZsb3coKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkTG9ja2FibGVTZWxlY3RvciA9IGZ1bmN0aW9uIGFkZExvY2thYmxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLmxvY2thYmxlU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFnZXRTY3JvbGxTdGF0ZSgpKSB7XG4gICAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHNjcm9sbF9sb2NrX2FkZEZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfc2V0RmlsbEdhcE1ldGhvZCA9IGZ1bmN0aW9uIHNldEZpbGxHYXBNZXRob2QobWV0aG9kKSB7XG4gIGlmIChtZXRob2QpIHtcbiAgICBpZiAoRklMTF9HQVBfQVZBSUxBQkxFX01FVEhPRFMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkge1xuICAgICAgc3RhdGUuZmlsbEdhcE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIHJlZmlsbEdhcHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1ldGhvZHMgPSBGSUxMX0dBUF9BVkFJTEFCTEVfTUVUSE9EUy5qb2luKCcsICcpO1xuICAgICAgdGhyb3dFcnJvcihcIlxcXCJcIi5jb25jYXQobWV0aG9kLCBcIlxcXCIgbWV0aG9kIGlzIG5vdCBhdmFpbGFibGUhXFxuQXZhaWxhYmxlIGZpbGwgZ2FwIG1ldGhvZHM6IFwiKS5jb25jYXQobWV0aG9kcywgXCIuXCIpKTtcbiAgICB9XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfYWRkRmlsbEdhcFRhcmdldCA9IGZ1bmN0aW9uIGFkZEZpbGxHYXBUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IGFyZ3VtZW50QXNBcnJheSh0YXJnZXQpO1xuICAgIHRhcmdldHMubWFwKGZ1bmN0aW9uICgkdGFyZ2V0cykge1xuICAgICAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgICAgIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICAgICAgICAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja0ZpbGxHYXAgPSAnJztcblxuICAgICAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgICAgICBzY3JvbGxfbG9ja19maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwVGFyZ2V0ID0gZnVuY3Rpb24gcmVtb3ZlRmlsbEdhcFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCkge1xuICAgIHZhciB0YXJnZXRzID0gYXJndW1lbnRBc0FycmF5KHRhcmdldCk7XG4gICAgdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKCR0YXJnZXRzKSB7XG4gICAgICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSkge1xuICAgICAgICAgIGRlbGV0ZSAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja0ZpbGxHYXA7XG5cbiAgICAgICAgICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgICAgICAgICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKFwiXFxcIlwiLmNvbmNhdCgkdGFyZ2V0LCBcIlxcXCIgaXMgbm90IGEgRWxlbWVudC5cIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBzY3JvbGxfbG9ja19hZGRGaWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiBhZGRGaWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IGFyZ3VtZW50QXNBcnJheShzZWxlY3Rvcik7XG4gICAgc2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG5cbiAgICAgIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG52YXIgc2Nyb2xsX2xvY2tfcmVtb3ZlRmlsbEdhcFNlbGVjdG9yID0gZnVuY3Rpb24gcmVtb3ZlRmlsbEdhcFNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHZhciBzZWxlY3RvcnMgPSBhcmd1bWVudEFzQXJyYXkoc2VsZWN0b3IpO1xuICAgIHNlbGVjdG9ycy5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzID0gc3RhdGUuZmlsbEdhcFNlbGVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGZTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZlNlbGVjdG9yICE9PSBzZWxlY3RvcjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgICAgICBzY3JvbGxfbG9ja191bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG52YXIgcmVmaWxsR2FwcyA9IGZ1bmN0aW9uIHJlZmlsbEdhcHMoKSB7XG4gIGlmICghc3RhdGUuc2Nyb2xsKSB7XG4gICAgZmlsbEdhcHMoKTtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX2hpZGVMb2NrYWJsZU92ZXJmbG93ID0gZnVuY3Rpb24gaGlkZUxvY2thYmxlT3ZlcmZsb3coKSB7XG4gIHZhciBzZWxlY3RvciA9IGFycmF5QXNTZWxlY3RvcihzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycyk7XG4gIHNjcm9sbF9sb2NrX2hpZGVMb2NrYWJsZU92ZXJmbG93U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93ID0gZnVuY3Rpb24gc2hvd0xvY2thYmxlT3ZlcmZsb3coKSB7XG4gIHZhciBzZWxlY3RvciA9IGFycmF5QXNTZWxlY3RvcihzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycyk7XG4gIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2hpZGVMb2NrYWJsZU92ZXJmbG93U2VsZWN0b3IgPSBmdW5jdGlvbiBoaWRlTG9ja2FibGVPdmVyZmxvd1NlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHZhciAkdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBlYWNoTm9kZSgkdGFyZ2V0cywgZnVuY3Rpb24gKCR0YXJnZXQpIHtcbiAgICBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KTtcbiAgfSk7XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfc2hvd0xvY2thYmxlT3ZlcmZsb3dTZWxlY3RvciA9IGZ1bmN0aW9uIHNob3dMb2NrYWJsZU92ZXJmbG93U2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdmFyICR0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgIHNjcm9sbF9sb2NrX3Nob3dMb2NrYWJsZU92ZXJmbG93VGFyZ2V0KCR0YXJnZXQpO1xuICB9KTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja19oaWRlTG9ja2FibGVPdmVyZmxvd1RhcmdldCA9IGZ1bmN0aW9uIGhpZGVMb2NrYWJsZU92ZXJmbG93VGFyZ2V0KCR0YXJnZXQpIHtcbiAgaWYgKGlzRWxlbWVudCgkdGFyZ2V0KSAmJiAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja0xvY2tlZCAhPT0gJ3RydWUnKSB7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkdGFyZ2V0KTtcbiAgICAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja1NhdmVkT3ZlcmZsb3dZUHJvcGVydHkgPSBjb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcbiAgICAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja1NhdmVkSW5saW5lT3ZlcmZsb3dQcm9wZXJ0eSA9ICR0YXJnZXQuc3R5bGUub3ZlcmZsb3c7XG4gICAgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tTYXZlZElubGluZU92ZXJmbG93WVByb3BlcnR5ID0gJHRhcmdldC5zdHlsZS5vdmVyZmxvd1k7XG4gICAgJHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICR0YXJnZXQuZGF0YXNldC5zY3JvbGxMb2NrTG9ja2VkID0gJ3RydWUnO1xuICB9XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfc2hvd0xvY2thYmxlT3ZlcmZsb3dUYXJnZXQgPSBmdW5jdGlvbiBzaG93TG9ja2FibGVPdmVyZmxvd1RhcmdldCgkdGFyZ2V0KSB7XG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkgJiYgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tMb2NrZWQgPT09ICd0cnVlJykge1xuICAgICR0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja1NhdmVkSW5saW5lT3ZlcmZsb3dQcm9wZXJ0eTtcbiAgICAkdGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICR0YXJnZXQuZGF0YXNldC5zY3JvbGxMb2NrU2F2ZWRJbmxpbmVPdmVyZmxvd1lQcm9wZXJ0eTtcbiAgICBkZWxldGUgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tTYXZlZE92ZXJmbG93WVByb3BlcnR5O1xuICAgIGRlbGV0ZSAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja1NhdmVkSW5saW5lT3ZlcmZsb3dQcm9wZXJ0eTtcbiAgICBkZWxldGUgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tTYXZlZElubGluZU92ZXJmbG93WVByb3BlcnR5O1xuICAgIGRlbGV0ZSAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja0xvY2tlZDtcbiAgfVxufTtcblxudmFyIGZpbGxHYXBzID0gZnVuY3Rpb24gZmlsbEdhcHMoKSB7XG4gIHN0YXRlLmZpbGxHYXBTZWxlY3RvcnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHVuZmlsbEdhcHMgPSBmdW5jdGlvbiB1bmZpbGxHYXBzKCkge1xuICBzdGF0ZS5maWxsR2FwU2VsZWN0b3JzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICBzY3JvbGxfbG9ja191bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBTZWxlY3RvciA9IGZ1bmN0aW9uIGZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgdmFyIGlzTG9ja2FibGUgPSBzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycy5pbmRleE9mKHNlbGVjdG9yKSAhPT0gLTE7XG4gIGVhY2hOb2RlKCR0YXJnZXRzLCBmdW5jdGlvbiAoJHRhcmdldCkge1xuICAgIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQoJHRhcmdldCwgaXNMb2NrYWJsZSk7XG4gIH0pO1xufTtcblxudmFyIHNjcm9sbF9sb2NrX2ZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiBmaWxsR2FwVGFyZ2V0KCR0YXJnZXQpIHtcbiAgdmFyIGlzTG9ja2FibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIGlmIChpc0VsZW1lbnQoJHRhcmdldCkpIHtcbiAgICB2YXIgc2Nyb2xsQmFyV2lkdGg7XG5cbiAgICBpZiAoJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tMb2NrYWJsZSA9PT0gJycgfHwgaXNMb2NrYWJsZSkge1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkdGFyZ2V0LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyICRsb2NrYWJsZVBhcmVudCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCR0YXJnZXQsIGFycmF5QXNTZWxlY3RvcihzdGF0ZS5sb2NrYWJsZVNlbGVjdG9ycykpO1xuICAgICAgc2Nyb2xsQmFyV2lkdGggPSBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCgkbG9ja2FibGVQYXJlbnQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICgkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja0ZpbGxlZEdhcCA9PT0gJ3RydWUnKSB7XG4gICAgICBzY3JvbGxfbG9ja191bmZpbGxHYXBUYXJnZXQoJHRhcmdldCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgkdGFyZ2V0KTtcbiAgICAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja0ZpbGxlZEdhcCA9ICd0cnVlJztcbiAgICAkdGFyZ2V0LmRhdGFzZXQuc2Nyb2xsTG9ja0N1cnJlbnRGaWxsR2FwTWV0aG9kID0gc3RhdGUuZmlsbEdhcE1ldGhvZDtcblxuICAgIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgdmFyIGN1cnJlbnRNYXJnaW4gPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQpO1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRNYXJnaW4gKyBzY3JvbGxCYXJXaWR0aCwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICR0YXJnZXQuc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIFwiLmNvbmNhdChzY3JvbGxCYXJXaWR0aCwgXCJweClcIik7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5maWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgJHRhcmdldC5zdHlsZS5tYXhXaWR0aCA9IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNjcm9sbEJhcldpZHRoLCBcInB4KVwiKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgdmFyIGN1cnJlbnRQYWRkaW5nID0gcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGN1cnJlbnRQYWRkaW5nICsgc2Nyb2xsQmFyV2lkdGgsIFwicHhcIik7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2Nyb2xsX2xvY2tfdW5maWxsR2FwU2VsZWN0b3IgPSBmdW5jdGlvbiB1bmZpbGxHYXBTZWxlY3RvcihzZWxlY3Rvcikge1xuICB2YXIgJHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgZWFjaE5vZGUoJHRhcmdldHMsIGZ1bmN0aW9uICgkdGFyZ2V0KSB7XG4gICAgc2Nyb2xsX2xvY2tfdW5maWxsR2FwVGFyZ2V0KCR0YXJnZXQpO1xuICB9KTtcbn07XG5cbnZhciBzY3JvbGxfbG9ja191bmZpbGxHYXBUYXJnZXQgPSBmdW5jdGlvbiB1bmZpbGxHYXBUYXJnZXQoJHRhcmdldCkge1xuICBpZiAoaXNFbGVtZW50KCR0YXJnZXQpKSB7XG4gICAgaWYgKCR0YXJnZXQuZGF0YXNldC5zY3JvbGxMb2NrRmlsbGVkR2FwID09PSAndHJ1ZScpIHtcbiAgICAgIHZhciBjdXJyZW50RmlsbEdhcE1ldGhvZCA9ICR0YXJnZXQuZGF0YXNldC5zY3JvbGxMb2NrQ3VycmVudEZpbGxHYXBNZXRob2Q7XG4gICAgICBkZWxldGUgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tGaWxsZWRHYXA7XG4gICAgICBkZWxldGUgJHRhcmdldC5kYXRhc2V0LnNjcm9sbExvY2tDdXJyZW50RmlsbEdhcE1ldGhvZDtcblxuICAgICAgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWFyZ2luJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICd3aWR0aCcpIHtcbiAgICAgICAgJHRhcmdldC5zdHlsZS53aWR0aCA9IFwiXCI7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRGaWxsR2FwTWV0aG9kID09PSAnbWF4LXdpZHRoJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLm1heFdpZHRoID0gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEZpbGxHYXBNZXRob2QgPT09ICdwYWRkaW5nJykge1xuICAgICAgICAkdGFyZ2V0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgb25SZXNpemUgPSBmdW5jdGlvbiBvblJlc2l6ZShlKSB7XG4gIHJlZmlsbEdhcHMoKTtcbn07XG5cbnZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgc3RhdGUuc3RhcnRUb3VjaFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgfVxufTtcblxudmFyIHNjcm9sbF9sb2NrX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHZhciBzdGFydFRvdWNoWSA9IHN0YXRlLnN0YXJ0VG91Y2hZLFxuICAgICAgICBzdGFydFRvdWNoWCA9IHN0YXRlLnN0YXJ0VG91Y2hYO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIHZhciBjdXJyZW50Q2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBhcnJheUFzU2VsZWN0b3Ioc3RhdGUuc2Nyb2xsYWJsZVNlbGVjdG9ycyk7XG4gICAgICB2YXIgZGlyZWN0aW9uID0ge1xuICAgICAgICB1cDogc3RhcnRUb3VjaFkgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgPiBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgbGVmdDogc3RhcnRUb3VjaFggPCBjdXJyZW50Q2xpZW50WCxcbiAgICAgICAgcmlnaHQ6IHN0YXJ0VG91Y2hYID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG4gICAgICB2YXIgZGlyZWN0aW9uV2l0aE9mZnNldCA9IHtcbiAgICAgICAgdXA6IHN0YXJ0VG91Y2hZICsgVE9VQ0hfRElSRUNUSU9OX0RFVEVDVF9PRkZTRVQgPCBjdXJyZW50Q2xpZW50WSxcbiAgICAgICAgZG93bjogc3RhcnRUb3VjaFkgLSBUT1VDSF9ESVJFQ1RJT05fREVURUNUX09GRlNFVCA+IGN1cnJlbnRDbGllbnRZLFxuICAgICAgICBsZWZ0OiBzdGFydFRvdWNoWCArIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUIDwgY3VycmVudENsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBzdGFydFRvdWNoWCAtIFRPVUNIX0RJUkVDVElPTl9ERVRFQ1RfT0ZGU0VUID4gY3VycmVudENsaWVudFhcbiAgICAgIH07XG5cbiAgICAgIHZhciBoYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoJGVsKSB7XG4gICAgICAgIHZhciBza2lwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgICBpZiAoJGVsKSB7XG4gICAgICAgICAgdmFyIHBhcmVudFNjcm9sbGFibGVFbCA9IGZpbmRQYXJlbnRCeVNlbGVjdG9yKCRlbCwgc2VsZWN0b3IsIGZhbHNlKTtcblxuICAgICAgICAgIGlmIChlbGVtZW50SXNJbnB1dFJhbmdlKCRlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2tpcCB8fCBlbGVtZW50SXNTY3JvbGxhYmxlRmllbGQoJGVsKSAmJiBmaW5kUGFyZW50QnlTZWxlY3RvcigkZWwsIHNlbGVjdG9yKSB8fCBlbGVtZW50SGFzU2VsZWN0b3IoJGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHZhciBwcmV2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U2Nyb2xsTGVmdE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsTGVmdE9uRW5kKCRlbCkpIHtcbiAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi51cCAmJiBlbGVtZW50U2Nyb2xsVG9wT25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbi5kb3duICYmIGVsZW1lbnRTY3JvbGxUb3BPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcHJldmVudCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSAmJiBlbGVtZW50U2Nyb2xsVG9wT25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgJiYgZWxlbWVudFNjcm9sbExlZnRPblN0YXJ0KCRlbCkgfHwgZGlyZWN0aW9uLnJpZ2h0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25FbmQoJGVsKSkge1xuICAgICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbldpdGhPZmZzZXQudXAgJiYgZWxlbWVudFNjcm9sbFRvcE9uU3RhcnQoJGVsKSB8fCBkaXJlY3Rpb25XaXRoT2Zmc2V0LmRvd24gJiYgZWxlbWVudFNjcm9sbFRvcE9uRW5kKCRlbCkgfHwgZGlyZWN0aW9uV2l0aE9mZnNldC5sZWZ0ICYmIGVsZW1lbnRTY3JvbGxMZWZ0T25TdGFydCgkZWwpIHx8IGRpcmVjdGlvbldpdGhPZmZzZXQucmlnaHQgJiYgZWxlbWVudFNjcm9sbExlZnRPbkVuZCgkZWwpKSB7XG4gICAgICAgICAgICAgIHByZXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldmVudCkge1xuICAgICAgICAgICAgICBpZiAocGFyZW50U2Nyb2xsYWJsZUVsKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlKHBhcmVudFNjcm9sbGFibGVFbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZShwYXJlbnRTY3JvbGxhYmxlRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZShlLnRhcmdldCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgb25Ub3VjaEVuZCA9IGZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICBpZiAoIXN0YXRlLnNjcm9sbCkge1xuICAgIHN0YXRlLnN0YXJ0VG91Y2hZID0gMDtcbiAgICBzdGF0ZS5zdGFydFRvdWNoWCA9IDA7XG4gIH1cbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgc2Nyb2xsX2xvY2tfb25Ub3VjaE1vdmUsIHtcbiAgICBwYXNzaXZlOiBmYWxzZVxuICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbn1cblxudmFyIGRlcHJlY2F0ZWRNZXRob2RzID0ge1xuICBoaWRlOiBmdW5jdGlvbiBoaWRlKHRhcmdldCkge1xuICAgIHRocm93RXJyb3IoJ1wiaGlkZVwiIGlzIGRlcHJlY2F0ZWQhIFVzZSBcImRpc2FibGVQYWdlU2Nyb2xsXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2Rpc2FibGVwYWdlc2Nyb2xsc2Nyb2xsYWJsZXRhcmdldCcpO1xuICAgIGRpc2FibGVQYWdlU2Nyb2xsKHRhcmdldCk7XG4gIH0sXG4gIHNob3c6IGZ1bmN0aW9uIHNob3codGFyZ2V0KSB7XG4gICAgdGhyb3dFcnJvcignXCJzaG93XCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZW5hYmxlUGFnZVNjcm9sbFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNlbmFibGVwYWdlc2Nyb2xsc2Nyb2xsYWJsZXRhcmdldCcpO1xuICAgIGVuYWJsZVBhZ2VTY3JvbGwodGFyZ2V0KTtcbiAgfSxcbiAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUodGFyZ2V0KSB7XG4gICAgdGhyb3dFcnJvcignXCJ0b2dnbGVcIiBpcyBkZXByZWNhdGVkISBEbyBub3QgdXNlIGl0LicpO1xuXG4gICAgaWYgKGdldFNjcm9sbFN0YXRlKCkpIHtcbiAgICAgIGRpc2FibGVQYWdlU2Nyb2xsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuYWJsZVBhZ2VTY3JvbGwodGFyZ2V0KTtcbiAgICB9XG4gIH0sXG4gIGdldFN0YXRlOiBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICB0aHJvd0Vycm9yKCdcImdldFN0YXRlXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiZ2V0U2Nyb2xsU3RhdGVcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjZ2V0c2Nyb2xsc3RhdGUnKTtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsU3RhdGUoKTtcbiAgfSxcbiAgZ2V0V2lkdGg6IGZ1bmN0aW9uIGdldFdpZHRoKCkge1xuICAgIHRocm93RXJyb3IoJ1wiZ2V0V2lkdGhcIiBpcyBkZXByZWNhdGVkISBVc2UgXCJnZXRQYWdlU2Nyb2xsQmFyV2lkdGhcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjZ2V0cGFnZXNjcm9sbGJhcndpZHRoJyk7XG4gICAgcmV0dXJuIGdldFBhZ2VTY3JvbGxCYXJXaWR0aCgpO1xuICB9LFxuICBnZXRDdXJyZW50V2lkdGg6IGZ1bmN0aW9uIGdldEN1cnJlbnRXaWR0aCgpIHtcbiAgICB0aHJvd0Vycm9yKCdcImdldEN1cnJlbnRXaWR0aFwiIGlzIGRlcHJlY2F0ZWQhIFVzZSBcImdldEN1cnJlbnRQYWdlU2Nyb2xsQmFyV2lkdGhcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjZ2V0Y3VycmVudHBhZ2VzY3JvbGxiYXJ3aWR0aCcpO1xuICAgIHJldHVybiBnZXRDdXJyZW50UGFnZVNjcm9sbEJhcldpZHRoKCk7XG4gIH0sXG4gIHNldFNjcm9sbGFibGVUYXJnZXRzOiBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlVGFyZ2V0cyh0YXJnZXQpIHtcbiAgICB0aHJvd0Vycm9yKCdcInNldFNjcm9sbGFibGVUYXJnZXRzXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiYWRkU2Nyb2xsYWJsZVRhcmdldFwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNhZGRzY3JvbGxhYmxldGFyZ2V0c2Nyb2xsYWJsZXRhcmdldCcpO1xuICAgIHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVUYXJnZXQodGFyZ2V0KTtcbiAgfSxcbiAgc2V0RmlsbEdhcFNlbGVjdG9yczogZnVuY3Rpb24gc2V0RmlsbEdhcFNlbGVjdG9ycyhzZWxlY3Rvcikge1xuICAgIHRocm93RXJyb3IoJ1wic2V0RmlsbEdhcFNlbGVjdG9yc1wiIGlzIGRlcHJlY2F0ZWQhIFVzZSBcImFkZEZpbGxHYXBTZWxlY3RvclwiIGluc3RlYWQuIFxcbiBodHRwczovL2dpdGh1Yi5jb20vRkwzTktFWS9zY3JvbGwtbG9jayNhZGRmaWxsZ2Fwc2VsZWN0b3JmaWxsZ2Fwc2VsZWN0b3InKTtcbiAgICBzY3JvbGxfbG9ja19hZGRGaWxsR2FwU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuICBzZXRGaWxsR2FwVGFyZ2V0czogZnVuY3Rpb24gc2V0RmlsbEdhcFRhcmdldHModGFyZ2V0KSB7XG4gICAgdGhyb3dFcnJvcignXCJzZXRGaWxsR2FwVGFyZ2V0c1wiIGlzIGRlcHJlY2F0ZWQhIFVzZSBcImFkZEZpbGxHYXBUYXJnZXRcIiBpbnN0ZWFkLiBcXG4gaHR0cHM6Ly9naXRodWIuY29tL0ZMM05LRVkvc2Nyb2xsLWxvY2sjYWRkZmlsbGdhcHRhcmdldGZpbGxnYXB0YXJnZXQnKTtcbiAgICBzY3JvbGxfbG9ja19hZGRGaWxsR2FwVGFyZ2V0KHRhcmdldCk7XG4gIH0sXG4gIGNsZWFyUXVldWU6IGZ1bmN0aW9uIGNsZWFyUXVldWUoKSB7XG4gICAgdGhyb3dFcnJvcignXCJjbGVhclF1ZXVlXCIgaXMgZGVwcmVjYXRlZCEgVXNlIFwiY2xlYXJRdWV1ZVNjcm9sbExvY2tzXCIgaW5zdGVhZC4gXFxuIGh0dHBzOi8vZ2l0aHViLmNvbS9GTDNOS0VZL3Njcm9sbC1sb2NrI2NsZWFycXVldWVzY3JvbGxsb2NrcycpO1xuICAgIGNsZWFyUXVldWVTY3JvbGxMb2NrcygpO1xuICB9XG59O1xuXG52YXIgc2Nyb2xsTG9jayA9IF9vYmplY3RTcHJlYWQoe1xuICBkaXNhYmxlUGFnZVNjcm9sbDogZGlzYWJsZVBhZ2VTY3JvbGwsXG4gIGVuYWJsZVBhZ2VTY3JvbGw6IGVuYWJsZVBhZ2VTY3JvbGwsXG4gIGdldFNjcm9sbFN0YXRlOiBnZXRTY3JvbGxTdGF0ZSxcbiAgY2xlYXJRdWV1ZVNjcm9sbExvY2tzOiBjbGVhclF1ZXVlU2Nyb2xsTG9ja3MsXG4gIGdldFRhcmdldFNjcm9sbEJhcldpZHRoOiBzY3JvbGxfbG9ja19nZXRUYXJnZXRTY3JvbGxCYXJXaWR0aCxcbiAgZ2V0Q3VycmVudFRhcmdldFNjcm9sbEJhcldpZHRoOiBzY3JvbGxfbG9ja19nZXRDdXJyZW50VGFyZ2V0U2Nyb2xsQmFyV2lkdGgsXG4gIGdldFBhZ2VTY3JvbGxCYXJXaWR0aDogZ2V0UGFnZVNjcm9sbEJhcldpZHRoLFxuICBnZXRDdXJyZW50UGFnZVNjcm9sbEJhcldpZHRoOiBnZXRDdXJyZW50UGFnZVNjcm9sbEJhcldpZHRoLFxuICBhZGRTY3JvbGxhYmxlU2VsZWN0b3I6IHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVTZWxlY3RvcixcbiAgcmVtb3ZlU2Nyb2xsYWJsZVNlbGVjdG9yOiBzY3JvbGxfbG9ja19yZW1vdmVTY3JvbGxhYmxlU2VsZWN0b3IsXG4gIGFkZFNjcm9sbGFibGVUYXJnZXQ6IHNjcm9sbF9sb2NrX2FkZFNjcm9sbGFibGVUYXJnZXQsXG4gIHJlbW92ZVNjcm9sbGFibGVUYXJnZXQ6IHNjcm9sbF9sb2NrX3JlbW92ZVNjcm9sbGFibGVUYXJnZXQsXG4gIGFkZExvY2thYmxlU2VsZWN0b3I6IHNjcm9sbF9sb2NrX2FkZExvY2thYmxlU2VsZWN0b3IsXG4gIGFkZExvY2thYmxlVGFyZ2V0OiBzY3JvbGxfbG9ja19hZGRMb2NrYWJsZVRhcmdldCxcbiAgYWRkRmlsbEdhcFNlbGVjdG9yOiBzY3JvbGxfbG9ja19hZGRGaWxsR2FwU2VsZWN0b3IsXG4gIHJlbW92ZUZpbGxHYXBTZWxlY3Rvcjogc2Nyb2xsX2xvY2tfcmVtb3ZlRmlsbEdhcFNlbGVjdG9yLFxuICBhZGRGaWxsR2FwVGFyZ2V0OiBzY3JvbGxfbG9ja19hZGRGaWxsR2FwVGFyZ2V0LFxuICByZW1vdmVGaWxsR2FwVGFyZ2V0OiBzY3JvbGxfbG9ja19yZW1vdmVGaWxsR2FwVGFyZ2V0LFxuICBzZXRGaWxsR2FwTWV0aG9kOiBzY3JvbGxfbG9ja19zZXRGaWxsR2FwTWV0aG9kLFxuICByZWZpbGxHYXBzOiByZWZpbGxHYXBzLFxuICBfc3RhdGU6IHN0YXRlXG59LCBkZXByZWNhdGVkTWV0aG9kcyk7XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNjcm9sbF9sb2NrID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoc2Nyb2xsTG9jayk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVtcImRlZmF1bHRcIl07XG59KTsiXX0=
