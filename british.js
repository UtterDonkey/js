class Britain{constructor(){this.compileCSS=this.convertCSS}convertCSS(a){return a.replaceAll("colour","color").replaceAll("behaviour","behavior").replaceAll("centre","center")}}(()=>{const a=[],b=[],c={accentColor:"accentColour",backgroundColor:"backgroundColour",borderBlockColor:"borderBlockColour",borderBlockEndColor:"borderBlockEndColour",borderBlockStartColor:"borderBlockStartColour",borderBottomColor:"borderBottomColour",borderColor:"borderColour",borderInlineColor:"borderInlineColour",borderInlineEndColor:"borderInlineEndColour",borderInlineStartColor:"borderInlineStartColour",borderLeftColor:"borderLeftColour",borderRightColor:"borderRightColour",borderTopColor:"borderTopColour",caretColor:"caretColour",color:"colour",colorInterpolation:"colourInterpolation",colorInterpolationFilters:"colourInterpolationFilters",colorRendering:"colourRendering",colorScheme:"colourScheme",columnRuleColor:"columnRuleColour",floodColor:"floodColour",forcedColorAdjust:"forcedColourAdjust",lightingColor:"lightingColour",outlineColor:"outlineColour",overrideColors:"overrideColours",overscrollBehavior:"overscrollBehaviour",overscrollBehaviorBlock:"overscrollBehaviourBlock",overscrollBehaviorInline:"overscrollBehaviourInline",overscrollBehaviorX:"overscrollBehaviourX",overscrollBehaviorY:"overscrollBehaviourY",scrollBehavior:"scrollBehaviour",stopColor:"stopColour",textDecorationColor:"textDecorationColour",textEmphasisColor:"textEmphasisColour",webkitBorderAfterColor:"webkitBorderAfterColour",webkitBorderBeforeColor:"webkitBorderBeforeColour",webkitBorderEndColor:"webkitBorderEndColour",webkitBorderStartColor:"webkitBorderStartColour",webkitColumnRuleColor:"webkitColumnRuleColour",webkitPrintColorAdjust:"webkitPrintColourAdjust",webkitTapHighlightColor:"webkitTapHighlightColour",webkitTextEmphasisColor:"webkitTextEmphasisColour",webkitTextFillColor:"webkitTextFillColour",webkitTextStrokeColor:"webkitTextStrokeColour"},d=["textAlign","alignContent","alignItems","alignSelf","backgroundPosition","justifyContent","verticalAlign"];["Math","MathMLElement","CSSMathInvert","CSSMathMax","CSSMathMin","CSSMathNegate","CSSMathProduct","CSSMathSum"].map(a=>{window.__defineGetter__(a.replace("Math","Maths"),()=>window[a])}),window.document.__defineGetter__("biscuit",()=>window.document.cookie),window.document.__defineSetter__("biscuit",a=>{window.document.cookie=a}),window.Math.__defineGetter__("PISS",()=>Maths.PI+(Maths.random()-.5)*Maths.random()*Maths.random()*Maths.random()),window.Math.__defineGetter__("gibberish",()=>Maths.random()),window.Math.__defineGetter__("numerate",()=>function(a){return isNaN(a)||null===a||void 0===a?0:a}),window.console.__defineGetter__("print",()=>console.log),window.__defineGetter__("gibberish",()=>{const a=9*(8*(7*(6*(5*(4*(3*(2*Maths.gibberish*Maths.gibberish)*Maths.gibberish)*Maths.gibberish)*Maths.gibberish)*Maths.gibberish)*Maths.gibberish)*Maths.gibberish)*Maths.gibberish;return[...Array(Maths.ceil(a)).keys()].map(()=>"abcdefghilkjmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890aeiouaeiouAEIOUAEIOU"[Maths.floor(82*Maths.gibberish)]).join("")}),window.__defineGetter__("Pledge",()=>window.Promise),window.__defineGetter__("Sanitiser",()=>window.Sanitizer),window.__defineGetter__("XMLSerialiser",()=>window.XMLSerializer),window.__defineGetter__("FinalisationRegistry",()=>window.FinalizationRegistry),window.__defineGetter__("BigBen",()=>{const a=new BigBenInternational,b=new Intl.DateTimeFormat([],{timeZone:"Europe/London",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"}),c=b.format(a),[d,e,f]=c.split(":"),g=new BigBenInternational(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),d,e,f);return g}),window.__defineGetter__("BigBenInternational",()=>window.Date),window.__defineGetter__("afterTeaHasBrewed",()=>(a,...b)=>new Promise(c=>{setTimeout(async()=>{c(a(...b))},18e4)})),window.__defineGetter__("inAJiffy",()=>setImmediate),window.__defineGetter__("buggerOff",()=>function(a){return a.filter((b,c)=>a.indexOf(b)===c)}),window.setImmediate||function(){'use strict';function a(a){const b=a[0];switch(a.length){case 1:return b();case 2:return b(a[1]);case 3:return b(a[1],a[2]);}return b.apply(window,f.call(a,1))}function b(b){const c=b.data;let e;"string"==typeof c&&0==c.indexOf(g)&&(e=d[c],e&&(delete d[c],a(e)))}let c=0;const d={};let e=!0;const f=Array.prototype.slice,g="setImmediatePolyfillMessage";window.setImmediate=function(){const a=c++,f=g+a;let h=arguments.length;const j=Array(h);for(;h--;)j[h]=arguments[h];return d[f]=j,e&&(e=!1,window.addEventListener("message",b)),window.postMessage(f,"*"),a},window.clearImmediate=function(a){delete d[g+a]}}()})();
