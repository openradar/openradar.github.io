import{b as u}from"/openradar.github.io/_preview/22/build/_shared/chunk-2NH4LW52.js";function i(e){for(var n;n=e.next();)if(n=="\\")e.next();else if(!p.test(n)){e.backUp(1);break}return e.current()}function o(e,n){if(e.eatSpace())return l="ws",null;if(e.match(d))return"number";var t=e.next();if(t=="\\"&&(t=e.next()),t=='"')return(n.tokenize=x)(e,n);if(t=="(")return l="open","bracket";if(t==")")return l="close","bracket";if(t==";")return e.skipToEnd(),l="ws","comment";if(/['`,@]/.test(t))return null;if(t=="|")return e.skipTo("|")?(e.next(),"variableName"):(e.skipToEnd(),"error");if(t=="#"){var t=e.next();return t=="("?(l="open","bracket"):/[+\-=\.']/.test(t)||/\d/.test(t)&&e.match(/^\d*#/)?null:t=="|"?(n.tokenize=s)(e,n):t==":"?(i(e),"meta"):t=="\\"?(e.next(),i(e),"string.special"):"error"}else{var r=i(e);return r=="."?null:(l="symbol",r=="nil"||r=="t"||r.charAt(0)==":"?"atom":n.lastType=="open"&&(f.test(r)||c.test(r))?"keyword":r.charAt(0)=="&"?"variableName.special":"variableName")}}function x(e,n){for(var t=!1,r;r=e.next();){if(r=='"'&&!t){n.tokenize=o;break}t=!t&&r=="\\"}return"string"}function s(e,n){for(var t,r;t=e.next();){if(t=="#"&&r=="|"){n.tokenize=o;break}r=t}return l="ws","comment"}var f,c,d,p,l,b,a=u(()=>{f=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,c=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,d=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,p=/[^\s'`,@()\[\]";]/;b={name:"commonlisp",startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:o}},token:function(e,n){e.sol()&&typeof n.ctx.indentTo!="number"&&(n.ctx.indentTo=n.ctx.start+1),l=null;var t=n.tokenize(e,n);return l!="ws"&&(n.ctx.indentTo==null?l=="symbol"&&c.test(e.current())?n.ctx.indentTo=n.ctx.start+e.indentUnit:n.ctx.indentTo="next":n.ctx.indentTo=="next"&&(n.ctx.indentTo=e.column()),n.lastType=l),l=="open"?n.ctx={prev:n.ctx,start:e.column(),indentTo:null}:l=="close"&&(n.ctx=n.ctx.prev||n.ctx),t},indent:function(e){var n=e.ctx.indentTo;return typeof n=="number"?n:e.ctx.start+1},languageData:{commentTokens:{line:";;",block:{open:"#|",close:"|#"}},closeBrackets:{brackets:["(","[","{",'"']}}}});a();export{b as commonLisp};
