const e=document.querySelectorAll(".field-cell"),t=document.getElementsByClassName("message message-start"),n=document.getElementsByClassName("message message-win"),r=document.getElementsByClassName("message message-lose"),l=document.querySelector(".button"),o=document.getElementsByClassName("game-score");function a(){s.forEach((t,n)=>{t.forEach((t,r)=>{let l=e[4*n+r];l.textContent=t>0?t:"",l.className=`field-cell field-cell--${t}`})})}let s=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0,f="idle",c=[],h=[],d=2,m=!1;function u(){let e=[],t=0;if(s.forEach((r,l)=>{r.forEach((r,o)=>{if(0===r){let n={};n.x=l,n.y=o,e.push(n),t++}2048===r&&(f="win",n[0].classList.remove("hidden"),m=!1)})}),0===t&&!1===m&&(f="lose",r[0].classList.remove("hidden")),!0===m){if(M(),e.length<=2){let t=e[0].x,n=e[0].y;s[`${t}`][`${n}`]=d,i+=d}else for(let t=0;t<1;t++){let n=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());void 0===e.find(e=>e.x===n&&e.y===r)?t--:(s[`${n}`][`${r}`]=d,i+=d)}}return m=!1,s}function g(){let e=h.filter((e,t)=>0!==e);for(let t=0;t<e.length;t++)0!==e[t]&&e[t]===e[t+1]?(e[t]=2*e[t],e[t+1]=e[t+2]||0,t+2<e.length&&(e[t+2]=e[t+3]||0),e[e.length-1]=0,c.push(e[t]),m=!0):c.push(e[t]);for(let e=c.length;e<4;e++)c.push(0);if(!1===m){let e=0;for(let t of h)0===t&&e++,0!==t&&0!==e&&(m=!0)}return c}function M(){return 1>=Math.floor(10*Math.random())&&(d=4),d}l.addEventListener("click",e=>{l.innerHTML="Restart",l.className="button restart",t[0].classList.add("hidden"),f="playing",s=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0,function(){M();let e=Math.floor(4*Math.random()),t=Math.floor(4*Math.random());s[`${e}`][`${t}`]=d,i+=d;for(let n=0;n<1;n++){M();let r=Math.floor(4*Math.random()),l=Math.floor(4*Math.random());e===r||t===l?n--:(s[`${r}`][`${l}`]=d,i+=d)}}(),a(s),o[0].innerHTML=`${i}`}),document.addEventListener("keydown",e=>{if("playing"===f)switch(e.code){case"ArrowLeft":!function(){for(let e=0;e<s.length;e++)h=s[e],g(),s[e]=c,c=[];u(),a(),o[0].innerHTML=`${i}`}();break;case"ArrowRight":!function(){for(let e=0;e<s.length;e++)h=s[e].reverse(),g(),s[e]=c.reverse(),c=[];u(),a(),o[0].innerHTML=`${i}`}();break;case"ArrowUp":!function(){for(let e=0;e<s.length;e++)h=[s[0][e],s[1][e],s[2][e],s[3][e]],g(),s[0][e]=c[0],s[1][e]=c[1],s[2][e]=c[2],s[3][e]=c[3],c=[];u(),a(),o[0].innerHTML=`${i}`}();break;case"ArrowDown":!function(){for(let e=0;e<s.length;e++){let t=[s[0][e],s[1][e],s[2][e],s[3][e]];h=t.reverse(),g(),t=c.reverse(),s[0][e]=t[0],s[1][e]=t[1],s[2][e]=t[2],s[3][e]=t[3],c=[]}u(),a(),o[0].innerHTML=`${i}`}()}});
//# sourceMappingURL=index.99a7755e.js.map
