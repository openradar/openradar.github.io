import{b as t}from"/openradar.github.io/_preview/22/build/_shared/chunk-2NH4LW52.js";function a(e){for(var n={},r=e.split(" "),o=0;o<r.length;++o)n[r[o]]=!0;return n}function l(e,n){var r;if(r=e.next(),r==='"')return n.tokenize=h,n.tokenize(e,n);if(r==="/"){if(e.eat("*"))return n.tokenize=b,n.tokenize(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}e.backUp(1);var o=e.match(/^(\w+)\s*\(/,!1);o!==null&&f.hasOwnProperty(o[1])&&n.scopes.push("bodied");var i=c(n);if(i==="bodied"&&r==="["&&n.scopes.pop(),(r==="["||r==="{"||r==="(")&&n.scopes.push(r),i=c(n),(i==="["&&r==="]"||i==="{"&&r==="}"||i==="("&&r===")")&&n.scopes.pop(),r===";")for(;i==="bodied";)n.scopes.pop(),i=c(n);return e.match(/\d+ *#/,!0,!1)?"qualifier":e.match(d,!0,!1)?"number":e.match(s,!0,!1)?"variableName.special":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(v,!0,!1)?(e.backUp(1),"variableName.function"):e.match(k,!0,!1)?"variable":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,!0,!1)?"operator":"error"}function h(e,n){for(var r,o=!1,i=!1;(r=e.next())!=null;){if(r==='"'&&!i){o=!0;break}i=!i&&r==="\\"}return o&&!i&&(n.tokenize=l),"string"}function b(e,n){for(var r,o;(o=e.next())!=null;){if(r==="*"&&o==="/"){n.tokenize=l;break}r=o}return"comment"}function c(e){var n=null;return e.scopes.length>0&&(n=e.scopes[e.scopes.length-1]),n}var f,p,u,d,k,s,v,T,g=t(()=>{f=a("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"),p="(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)",u="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)",d=new RegExp(p),k=new RegExp(u),s=new RegExp(u+"?_"+u),v=new RegExp(u+"\\s*\\(");T={name:"yacas",startState:function(){return{tokenize:l,scopes:[]}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},indent:function(e,n,r){if(e.tokenize!==l&&e.tokenize!==null)return null;var o=0;return(n==="]"||n==="];"||n==="}"||n==="};"||n===");")&&(o=-1),(e.scopes.length+o)*r.unit},languageData:{electricInput:/[{}\[\]()\;]/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}});g();export{T as yacas};
