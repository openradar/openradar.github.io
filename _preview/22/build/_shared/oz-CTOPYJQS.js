import{b as k}from"/openradar.github.io/_preview/22/build/_shared/chunk-2NH4LW52.js";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function i(e,n){if(e.eatSpace())return null;if(e.match(/[{}]/))return"bracket";if(e.match("[]"))return"keyword";if(e.match(z)||e.match(p))return"operator";if(e.match(m))return"atom";var t=e.match(g);if(t)return n.doInCurrentLine?n.doInCurrentLine=!1:n.currentIndent++,t[0]=="proc"||t[0]=="fun"?n.tokenize=y:t[0]=="class"?n.tokenize=w:t[0]=="meth"&&(n.tokenize=x),"keyword";if(e.match(d)||e.match(v))return"keyword";if(e.match(h))return n.currentIndent--,"keyword";var r=e.next();if(r=='"'||r=="'")return n.tokenize=b(r),n.tokenize(e,n);if(/[~\d]/.test(r)){if(r=="~")if(/^[0-9]/.test(e.peek())){if(e.next()=="0"&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}else return null;return r=="0"&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)?"number":null}return r=="%"?(e.skipToEnd(),"comment"):r=="/"&&e.eat("*")?(n.tokenize=a,a(e,n)):s.test(r)?"operator":(e.eatWhile(/\w/),"variable")}function w(e,n){return e.eatSpace()?null:(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/),n.tokenize=i,"type")}function x(e,n){return e.eatSpace()?null:(e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/),n.tokenize=i,"def")}function y(e,n){return e.eatSpace()?null:!n.hasPassedFirstStage&&e.eat("{")?(n.hasPassedFirstStage=!0,"bracket"):n.hasPassedFirstStage?(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/),n.hasPassedFirstStage=!1,n.tokenize=i,"def"):(n.tokenize=i,null)}function a(e,n){for(var t=!1,r;r=e.next();){if(r=="/"&&t){n.tokenize=i;break}t=r=="*"}return"comment"}function b(e){return function(n,t){for(var r=!1,u,c=!1;(u=n.next())!=null;){if(u==e&&!r){c=!0;break}r=!r&&u=="\\"}return(c||!r)&&(t.tokenize=i),"string"}}function I(){var e=f.concat(l);return new RegExp("[\\[\\]]|("+e.join("|")+")$")}var s,p,z,f,l,m,v,g,d,h,A,S=k(()=>{s=/[\^@!\|<>#~\.\*\-\+\\/,=]/,p=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/,z=/(:::)|(\.\.\.)|(=<:)|(>=:)/,f=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"],l=["end"],m=o(["true","false","nil","unit"]),v=o(["andthen","at","attr","declare","feat","from","lex","mod","div","mode","orelse","parser","prod","prop","scanner","self","syn","token"]),g=o(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]),d=o(f),h=o(l);A={name:"oz",startState:function(){return{tokenize:i,currentIndent:0,doInCurrentLine:!1,hasPassedFirstStage:!1}},token:function(e,n){return e.sol()&&(n.doInCurrentLine=0),n.tokenize(e,n)},indent:function(e,n,t){var r=n.replace(/^\s+|\s+$/g,"");return r.match(h)||r.match(d)||r.match(/(\[])/)?t.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*t.unit},languageData:{indentOnInut:I(),commentTokens:{line:"%",block:{open:"/*",close:"*/"}}}}});S();export{A as oz};
