(this.webpackJsonpsoftui=this.webpackJsonpsoftui||[]).push([[0],{34:function(e,t,a){e.exports=a(75)},39:function(e,t,a){},40:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=(a(39),a(40),a(19)),s=a(29),i=a(20),l=a(21),u=a(22),h=a(30),d=a(23),m=a(31);function p(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var a,n,o="#";for(n=0;n<3;n++)a=parseInt(e.substr(2*n,2),16),o+=("00"+(a=Math.round(Math.min(Math.max(0,a+a*t),255)).toString(16))).substr(a.length);return o}function f(e){return(299*parseInt(e.substr(1,2),16)+587*parseInt(e.substr(3,2),16)+114*parseInt(e.substr(5,2),16))/1e3>=128?"#001f3f":"#F6F5F7"}var g=a(80),v=a(25),b=a(26),x=a(78),C=a(79);function E(){var e=Object(c.a)(["\n  position: absolute;\n  left: ",";\n  top: ",";\n  right: ",";\n  bottom: ",";\n  background: transparent;\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  border: 2px solid var(--textColor);\n  border-bottom-right-radius: ",";\n  border-bottom-left-radius: ",";\n  border-top-right-radius: ",";\n  border-top-left-radius: ",";\n\n  &.active {\n    background: #ffff00;\n  }\n"]);return E=function(){return e},e}g.a.registerLanguage("css",v.a);var S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={color:"#55b9f3",size:300,radius:80,maxRadius:150,shape:!0,distance:30,blur:60,activeLightSource:0,colorDifference:.15,maxSize:410},a.softElement=o.a.createRef(),a.colorInput=o.a.createRef(),a.codeContainer=o.a.createRef(),a.code=o.a.createRef(),a.body=document.getElementsByTagName("body")[0],a.lightSources=[],a.lightColor="",a.darkColor="",a.theme=!0,a.codeString="background: linear-gradient(145deg);\nbox-shadow: 30px 30px var(--blur) var(--lightColor), \n            -30px -30px var(--blur) var(--darkColor);",a.handleOnChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.setDistance=function(e){a.setState({distance:e.target.value,blur:2*e.target.value})},a.setSize=function(e){var t=e.target;a.setState({size:t.value,distance:Math.round(.1*t.value),blur:Math.round(.2*t.value),maxRadius:Math.round(t.value/2)})},a.validateColor=function(e){/^#[0-9A-F]{6}$/i.test(e.target.value)&&(a.handleOnChange(e),window.history.replaceState("homepage","Title","/"+e.target.value))},a.setColor=function(e){window.history.replaceState("homepage","Title","/"+e.target.value),a.handleOnChange(e)},a.setShape=function(e){a.setState({shape:e.target.dataset.value})},a.setLightSource=function(e){a.lightSources.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),a.setState({activeLightSource:parseInt(e.target.dataset.value)})},a.copyToClipboard=function(e){var t=a.codeContainer.current;t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),a.code.current.classList.add("copied"),setTimeout((function(){a.code.current.classList.remove("copied")}),1e3)},a.setColorFromRoute=function(){0!=window.location.hash&&/^#[0-9A-F]{6}$/i.test(window.location.hash)&&a.setState({color:window.location.hash})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.onpopstate=this.setColorFromRoute,this.setState({color:"#55b9f3"}),this.setColorFromRoute(),window.history.replaceState("homepage","Title","/"+this.state.color),this.lightSources=Object(s.a)(document.getElementsByClassName("light-source"));var e=window.outerWidth;e<1e3&&0!==e?e<800?e<680?this.setState({maxSize:180,size:150}):this.setState({maxSize:250,size:200}):this.setState({maxSize:350,size:250}):this.setState({maxSize:410,size:300})}},{key:"render",value:function(){var e=this.state,t=e.blur,a=e.color,n=e.size,r=e.radius,c=e.shape,s=e.distance,i=e.activeLightSource,l=e.colorDifference,u=e.maxSize,h=e.maxRadius;if(this.softElement.current){var d=145,m=30,v=30,b=p(a,-1*l),E=p(a,l),S=p(a,c?.07:-.1),y=p(a,c?-.1:.07);switch(i){case 1:m=s,v=s,d=145;break;case 2:m=-1*s,v=s,d=225;break;case 3:m=-1*s,v=-1*s,d=315;break;case 4:m=s,v=-1*s,d=45;break;default:m=s,v=s,d=145}this.colorInput.current.value=a,document.documentElement.style.cssText="\n        --positionX: ".concat(m,"px;\n        --positionXOpposite: ").concat(-1*m,"px;\n        --positionY: ").concat(v,"px;\n        --positionYOpposite: ").concat(-1*v,"px;\n        --angle: ").concat(d,"deg;\n        --blur: ").concat(t,"px;\n        --textColor: ").concat(f(a),";\n        --textColorOpposite: ").concat(a,";\n        --baseColor: ").concat(a,";\n        --darkColor: ").concat(b,";\n        --lightColor: ").concat(E,";\n        --firstGradientColor: ").concat(S,";\n        --secondGradientColor: ").concat(y,";\n      "),this.softElement.current.style.setProperty("--size",n+"px"),this.softElement.current.style.setProperty("--radius",r+"px"),"#001f3f"===f(a)?this.theme=!0:this.theme=!1,this.codeString="border-radius: ".concat(parseInt(r)===h?"50%":r+"px",";\nbackground: linear-gradient(").concat(d,"deg, ").concat(S,", ").concat(y,");\nbox-shadow: ").concat(m,"px ").concat(v,"px ").concat(t,"px ").concat(b,", \n            ").concat(-1*m,"px ").concat(-1*v,"px ").concat(t,"px ").concat(E,";")}return o.a.createElement("div",{className:"container App"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"preview"},o.a.createElement(w,{top:"0",bottom:"unset",right:"0",left:"unset","data-value":"2",onClick:this.setLightSource,className:"light-source"}),o.a.createElement(w,{top:"0",bottom:"unset",right:"unset",left:"0","data-value":"1",onClick:this.setLightSource,className:"light-source active"}),o.a.createElement(w,{top:"unset",bottom:"0",right:"0",left:"unset","data-value":"3",onClick:this.setLightSource,className:"light-source"}),o.a.createElement(w,{top:"unset",bottom:"0",right:"unset",left:"0","data-value":"4",onClick:this.setLightSource,className:"light-source"}),o.a.createElement("div",{ref:this.softElement,className:"soft-element soft-shadow"})),o.a.createElement("div",{className:"configuration soft-shadow"},o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"color"},"Pick a color:"),o.a.createElement("input",{type:"color",name:"color",onChange:this.setColor,placeholder:"#ffffff",value:a,id:"color"}),o.a.createElement("label",{htmlFor:"colorInput",style:{paddingLeft:"10px"}},"or"),o.a.createElement("input",{type:"text",placeholder:"#ffffff",name:"color",id:"colorInput",ref:this.colorInput,onChange:this.validateColor})),o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"size"},"Size: "),o.a.createElement("input",{type:"range",name:"size",value:n,onChange:this.setSize,min:"10",max:u,step:"1",id:"size"})),o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"radius"},"Radius: "),o.a.createElement("input",{type:"range",name:"radius",value:r,onChange:this.handleOnChange,min:"0",max:h,step:"1",id:"radius"})),o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"distance"},"Distance: "),o.a.createElement("input",{type:"range",name:"distance",value:s,onChange:this.setDistance,min:"5",max:"50",step:"1",id:"distance"})),o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"colorDifference"},"Intensity: "),o.a.createElement("input",{type:"range",name:"colorDifference",value:l,onChange:this.handleOnChange,min:"0.01",max:"0.6",step:"0.01",id:"colorDifference"})),o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"blur"},"Blur: "),o.a.createElement("input",{type:"range",name:"blur",value:t,onChange:this.handleOnChange,min:"0",max:"200",step:"1",id:"blur"})),o.a.createElement("div",{className:"row"},o.a.createElement("label",{htmlFor:"shape"},"Shape: "),o.a.createElement("div",{className:"shape-switch"},o.a.createElement("button",{className:c?"active":"",onClick:this.setShape,"data-value":" "},"Concave"),o.a.createElement("button",{className:c?"":"active",onClick:this.setShape,"data-value":""},"Convex"))),o.a.createElement("div",{className:"code-block ".concat(this.theme?"":"small"),ref:this.code},o.a.createElement("button",{className:"copy",onClick:this.copyToClipboard},"Copy"),o.a.createElement(g.a,{language:"css",style:this.theme?x.a:C.a},this.codeString),o.a.createElement("label",{htmlFor:"code-container",className:"hidden"},"hidden"),o.a.createElement("textarea",{id:"code-container",ref:this.codeContainer,value:this.codeString,readOnly:!0})))))}}]),t}(n.Component),w=b.a.div(E(),(function(e){return e.left}),(function(e){return e.top}),(function(e){return e.right}),(function(e){return e.bottom}),(function(e){return"unset"===e.right&&"unset"===e.bottom?"30px":"unset"}),(function(e){return"unset"===e.left&&"unset"===e.bottom?"30px":"unset"}),(function(e){return"unset"===e.right&&"unset"===e.top?"30px":"unset"}),(function(e){return"unset"===e.left&&"unset"===e.top?"30px":"unset"})),y=S,N=document.getElementById("root");N.hasChildNodes()?Object(r.hydrate)(o.a.createElement(y,null),N):Object(r.render)(o.a.createElement(y,null),N)}},[[34,1,2]]]);