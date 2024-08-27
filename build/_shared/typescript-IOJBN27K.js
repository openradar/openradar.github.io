import{c as v}from"/openradar.github.io/build/_shared/chunk-2NH4LW52.js";var K=v((G,D)=>{var f="[A-Za-z$_][0-9A-Za-z$_]*",M=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],C=["true","false","null","undefined","NaN","Infinity"],x=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],L=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],B=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],U=["arguments","this","super","console","window","document","localStorage","module","global"],w=[].concat(B,U,x,L);function $(e){return e?typeof e=="string"?e:e.source:null}function O(e){return R("(?=",e,")")}function R(...e){return e.map(t=>$(t)).join("")}function P(e){let d=(i,{after:S})=>{let A="</"+i[0].slice(1);return i.input.indexOf(A,S)!==-1},t=f,g={begin:"<>",end:"</>"},s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(i,S)=>{let A=i[0].length+i.index,y=i.input[A];if(y==="<"){S.ignoreMatch();return}y===">"&&(d(i,{after:A})||S.ignoreMatch())}},a={$pattern:f,keyword:M,literal:C,built_in:w},b="[0-9](_?[0-9])*",c=`\\.(${b})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",l={className:"number",variants:[{begin:`(\\b(${E})((${c})|\\.)?|(${c}))[eE][+-]?(${b})\\b`},{begin:`\\b(${E})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},n={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},u={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,n],subLanguage:"xml"}},r={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,n],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,n]},o={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},T=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,r,_,l,e.REGEXP_MODE];n.contains=T.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(T)});let I=[].concat(o,n.contains),m=I.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(I)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:m};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:m},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,r,_,o,l,{begin:R(/[{,\n]\s*/,O(R(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,t+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:t+O("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[o,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:m}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:g.begin,end:g.end},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:a,contains:["self",e.inherit(e.TITLE_MODE,{begin:t}),N],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[N,e.inherit(e.TITLE_MODE,{begin:t})]},{variants:[{begin:"\\."+t},{begin:"\\$"+t}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),"self",N]},{begin:"(get|set)\\s+(?="+t+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:t}),{begin:/\(\)/},N]},{begin:/\$[(.]/}]}}function k(e){let d=f,t={beginKeywords:"namespace",end:/\{/,excludeEnd:!0},g={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},s={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},a=["any","void","number","boolean","string","object","never","enum"],b=["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"],c={$pattern:f,keyword:M.concat(b),literal:C,built_in:w.concat(a)},E={className:"meta",begin:"@"+d},l=(r,_,p)=>{let o=r.contains.findIndex(T=>T.label===_);if(o===-1)throw new Error("can not find mode to replace");r.contains.splice(o,1,p)},n=P(e);Object.assign(n.keywords,c),n.exports.PARAMS_CONTAINS.push(E),n.contains=n.contains.concat([E,t,g]),l(n,"shebang",e.SHEBANG()),l(n,"use_strict",s);let u=n.contains.find(r=>r.className==="function");return u.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}D.exports=k});export default K();
