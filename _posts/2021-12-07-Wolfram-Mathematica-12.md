---
title: Wolfram Mathematica 12 Key Generator Online (Mathematica 在线激活码生成器)
author:
    name: Piyazon
    link: https://piyazon.top
date: 2021-12-07 18:10:00 +0800
categories: [Blogging, Tool]
tags: [Wolfram, Mathematica]
image:
    src: /jekyll/posts/wolfram-mathematica.png
    alt: Mathematica 12.0
---

<p class="alert alert-warning">
Only work for mathematica 12.* version
</p>

<p>Enter your MathID (xxxx-xxxxx-xxxxx) below and press <strong>Generate</strong>.</p>
<p><input type="text" id="mathId" placeholder="xxxx-xxxxx-xxxxx" style="
display: inline-block;
    width: 100%;
    padding: 0.25em;
    margin-bottom: 0.5em;
    color: #222831;
    background-color: #eff0f1;
    border: #cecfd1;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 13%);
"/></p>
<p><button id="generate" class="btn btn-primary">Generate</button></p>
<p id="result">Press <b>Generate</b>!</p>

<script type="text/javascript">function f1(t,e,r){for(var n=0;n<=7;n++){var o=e>>n&1;t=o+(t-o&-2)===t?t-o>>1:(r-o^t)>>1}return t}function genPassword(t,e){for(var r=t.length-1;r>=0;r--)e=f1(e,t.charCodeAt(r),67011);for(var n=0;42422!==f1(f1(e,255&n,67011),n>>8,67011);)if(++n>=65535)return"Error";var o=("0000"+(n=Math.floor(99999*(n+29434&65535)/65535)).toString(10)).slice(-5),a=parseInt(o.slice(0,-3)+o.slice(-2)+o.slice(-3,-2),10);for(a=f1(f1(0,255&(a=Math.ceil(a/99999*65535)),67147),a>>8,67147),r=t.length-1;r>=0;r--)a=f1(a,t.charCodeAt(r),67147);for(var i=0;42422!==f1(f1(a,255&i,67147),i>>8,67147);)if(++i>=65535)return"Error";var f=("0000"+(i=Math.floor(99999*(65535&i)/65535)).toString(10)).slice(-5);return f[3]+o[3]+o[1]+o[0]+"-"+f[4]+o[2]+f[0]+"-"+f[2]+o[4]+f[1]+"::1"}function checkMathId(t){if(16!=t.length)return!1;for(let e=0;e<t.length;e++)if(4===e||10===e){if("-"!==t[e])return!1}else if("0123456789".search(t[e])<0)return!1;return!0}function genActivationKey(){s="";for(let t=0;t<14;t++)s+=Math.floor(10*Math.random()),3!==t&&7!==t||(s+="-");return s}Array.prototype.getRandom=function(){return this[Math.floor(Math.random()*this.length)]},document.getElementById("generate").addEventListener("click",function(){var t=document.getElementById("mathId").value.trim();if(checkMathId(t)){var e=genActivationKey(),r=genPassword(t+"$1&"+e,[10690,12251,17649,24816,33360,35944,36412,42041,42635,44011,53799,56181,58536,59222,61041].getRandom());document.getElementById("result").innerHTML=`\n\t\t\t\t\t\t\t\t        <p>\n\t\t\t\t\t\t\t\t        <b>Activation Key</b>: ${e}\n\t\t\t\t\t\t\t\t        <br>\n\t\t\t\t\t\t\t\t        <b>Password</b>: ${r}\n\t\t\t\t\t\t\t\t        </p>\n\t\t\t\t\t\t\t\t        `}else document.getElementById("result").innerText="Bad MathID!"});</script>