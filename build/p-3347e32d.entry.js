import{r as e,h as t,H as r,g as o,c as i}from"./p-5be02599.js";const n=class{constructor(t){e(this,t)}render(){return t(r,null,t("div",{id:"main-container"},t("slot",null)))}};n.style=":host{--background-color:deepskyblue;display:inline-block;-webkit-tap-highlight-color:transparent}#main-container{box-sizing:border-box;padding:.1rem .5rem;font-size:1rem;background-color:var(--background-color);user-select:none;border-radius:10px;transition:all 300ms ease}#main-container:hover{border-radius:5px}";const s=class{constructor(t){e(this,t),this.fill="default"}render(){return t(r,null,t("button",{id:"native-element",class:`fill-${this.fill}`},t("slot",null)))}};s.style=":host{--color:deepskyblue;--secondary-color:white;--padding:.5rem;display:inline-block;-webkit-tap-highlight-color:transparent}#native-element{box-sizing:border-box;height:100%;width:100%;padding:var(--padding);cursor:pointer;font-size:1rem;border-radius:10px;user-select:none;display:flex;justify-content:center;align-items:center;transition:all 300ms ease}#native-element.fill-default{color:var(--secondary-color);background-color:var(--color);border:none}#native-element.fill-outline{position:relative;color:var(--color);background-color:transparent;border:none}#native-element.fill-outline::before{content:'';position:absolute;border-radius:10px;border:2px solid var(--color);top:0;left:0;height:calc(100% - 2px * 2);width:calc(100% - 2px * 2)}#native-element.fill-clear{color:var(--color);background-color:transparent;border:none}#native-element.fill-default:hover,#native-element.fill-outline:hover{box-shadow:0px 2px 5px 0px grey}#native-element.fill-clear:hover{transform:scale(1.1);text-shadow:0px 2px 5px grey}#native-element.fill-default:active,#native-element.fill-outline:active{box-shadow:inset 0px 2px 5px 0px grey}#native-element.fill-clear:active{transform:scale(.95);text-shadow:0px -1px 1px grey}";const a=class{constructor(t){e(this,t)}render(){return t(r,null,t("div",{id:"main-container"},t("slot",null)))}};a.style=":host{--background-color:rgb(250, 250, 250);display:inline-block;-webkit-tap-highlight-color:transparent}#main-container{box-sizing:border-box;height:100%;width:100%;padding:.5rem;background-color:var(--background-color);border-radius:10px;box-shadow:0px 1px 5px 0px grey;transition:all 300ms cubic-bezier(0.5, 0.65, 0.5, 0.35)}#main-container:hover{transform:translateY(-5px);box-shadow:0px 10px 10px 0px grey}";const l=class{constructor(t){e(this,t),this.isExpanded=!1}render(){return t(r,null,t("div",{id:"main-container",class:this.isExpanded?"expanded":""},t("slot",null)))}};l.style=":host{display:block}#main-container{height:auto;width:auto;transform:scaleY(0);transform-origin:top;transition:transform 300ms cubic-bezier(0.5, -0.45, 0.5, 1)}#main-container.expanded{transform:scaleY(1);transition:transform 300ms cubic-bezier(0.5, 0, 0.5, 1.45)}";const d=class{constructor(t){e(this,t)}rowsChanged(e){this.updateCSSVariable("--grid-template-rows",e)}columnsChanged(e){this.updateCSSVariable("--grid-template-columns",e)}rowGapChanged(e){this.updateCSSVariable("--grid-row-gap",e)}columnGapChanged(e){this.updateCSSVariable("--grid-column-gap",e)}connectedCallback(){this.rowsChanged(this.rows),this.columnsChanged(this.columns),this.rowGapChanged(this.rowGap),this.columnGapChanged(this.columnGap)}componentDidRender(){this.hostElement.querySelectorAll("*").forEach((e=>{e.style.setProperty("--grid-row",e.getAttribute("data-row")),e.style.setProperty("--grid-column",e.getAttribute("data-column")),e.style.setProperty("--grid-row-span",e.getAttribute("data-row-span")),e.style.setProperty("--grid-column-span",e.getAttribute("data-column-span"))}))}render(){return t(r,null,t("div",{id:"main-container"},t("slot",null)))}updateCSSVariable(e,t){this.hostElement.style.setProperty(e,t)}get hostElement(){return o(this)}static get watchers(){return{rows:["rowsChanged"],columns:["columnsChanged"],rowGap:["rowGapChanged"],columnGap:["columnGapChanged"]}}};d.style=":host{--grid-template-rows:unset;--grid-template-columns:unset;--grid-row-gap:unset;--grid-column-gap:unset;display:block}#main-container{display:grid;height:100%;width:100%;grid-template-rows:var(--grid-template-rows);grid-template-columns:var(--grid-template-columns);row-gap:var(--grid-row-gap);column-gap:var(--grid-column-gap)}::slotted(*){grid-row-start:var(--grid-row, auto);grid-row-end:span var(--grid-row-span, 1);grid-column-start:var(--grid-column, auto);grid-column-end:span var(--grid-column-span, 1);height:100%;width:100%}";const c=class{constructor(t){e(this,t),this.sChange=i(this,"sChange",7),this.sInput=i(this,"sInput",7)}render(){return t(r,null,t("input",{id:"native-element",value:this.value,placeholder:this.placeholder,onChange:e=>this.sChange.emit(e.currentTarget.value),onInput:e=>{this.value=e.currentTarget.value,this.sInput.emit(e)}}))}};c.style=":host{--border-color:lightgrey;--highlight-color:deepskyblue;display:inline-block;-webkit-tap-highlight-color:transparent}#native-element{box-sizing:border-box;outline:none;font-size:1rem;border-radius:10px;border:0;border-bottom:2px solid var(--border-color);padding:.5rem .5rem;transition:all 300ms cubic-bezier(0.22, 0.61, 0.36, 1)}#native-element:hover{box-shadow:inset 0px 1px 3px 0px grey}#native-element:focus{transform:scale(1.025);border-radius:5px;border-bottom:2px solid var(--highlight-color);box-shadow:inset 0px 3px 5px 0px grey}";const h=class{constructor(t){e(this,t),this.animationDuration=500,this.isHidden=!0}isHiddenChanged(e){var t,r;e?(null===(t=this.mainContainer)||void 0===t||t.classList.add("minimized"),setTimeout((()=>{var e;null===(e=this.mainContainer)||void 0===e||e.classList.add("hidden")}),this.animationDuration)):(null===(r=this.mainContainer)||void 0===r||r.classList.remove("hidden"),setTimeout((()=>{var e;null===(e=this.mainContainer)||void 0===e||e.classList.remove("minimized")})))}connectedCallback(){this.updateCSSVariable("--animation-duration",`${this.animationDuration}ms`)}render(){return t(r,null,t("div",{id:"main-container",class:"hidden minimized",ref:e=>this.mainContainer=e},t("slot",null)))}updateCSSVariable(e,t){this.hostElement.style.setProperty(e,t)}get hostElement(){return o(this)}static get watchers(){return{isHidden:["isHiddenChanged"]}}};h.style=":host{--animation-duration:unset;-webkit-tap-highlight-color:transparent}#main-container{display:block;position:fixed;top:50%;left:50%;height:200px;width:300px;padding:.5rem;transform:translateX(-50%) translateY(-50%) scale(1);background-color:rgba(255, 255, 255, .75);border-radius:10px;box-shadow:0px 10px 20px 0px grey;backdrop-filter:blur(25px);z-index:999;transition:transform var(--animation-duration) cubic-bezier(0.5, 0, 0.5, 1.45);transform-origin:0 0}#main-container.hidden{display:none}#main-container.minimized{transform:scale(0.001);transition:transform var(--animation-duration) cubic-bezier(0.5, -0.45, 0.5, 1)}";const p=class{constructor(t){e(this,t),this.sChange=i(this,"sChange",7),this.isDropdownHidden=!0,this.addDropdownDismissListenerToBodyElement=()=>{setTimeout((()=>{document.querySelector("body").addEventListener("click",this.dismissDropdown)}))},this.removeDropdownDismissListenerToBodyElement=()=>{document.querySelector("body").removeEventListener("click",this.dismissDropdown)},this.dismissDropdown=()=>{this.isDropdownHidden=!0}}get selectOptionElements(){return Array.from(this.hostElement.querySelectorAll("s-select-option"))}get selectedOptionElement(){return this.selectOptionElements.find((e=>e.value===this.value||e.innerText===this.value))}get actualValue(){return this.selectedOptionElement?this.value:void 0}isDropdownHiddenChanged(e){e?this.removeDropdownDismissListenerToBodyElement():this.addDropdownDismissListenerToBodyElement()}valueChanged(e){this.selectOptionElements.forEach((e=>{e.isSelected=e.value===this.value||e.innerText===this.value})),this.sChange.emit(e)}connectedCallback(){this.isDropdownHidden?this.removeDropdownDismissListenerToBodyElement():this.addDropdownDismissListenerToBodyElement()}render(){return t(r,null,t("div",{id:"select",class:this.isDropdownHidden?"dropdown-hidden":"",onClick:()=>this.isDropdownHidden=!this.isDropdownHidden},t("span",null,this.actualValue),!this.actualValue&&t("span",{id:"placeholder"},this.placeholder),t("s-button",{id:"dropdown-toggle-button",fill:"clear"},t("svg",{width:"1rem",height:"1rem",viewBox:"0 0 100 100"},t("path",{"stroke-width":"10px",stroke:"black",fill:"transparent",d:"M20,30 L50,70 L 80 30"}))),t("div",{id:"dropdown"},t("slot",null))))}get hostElement(){return o(this)}static get watchers(){return{isDropdownHidden:["isDropdownHiddenChanged"],value:["valueChanged"]}}};p.style=":host{--border-color:lightgrey;--highlight-color:deepskyblue;display:inline-block;-webkit-tap-highlight-color:transparent}#select{position:relative;box-sizing:border-box;background-color:white;outline:none;border-radius:5px;border:0;border-bottom:2px solid var(--highlight-color);padding:.5rem .5rem;user-select:none;z-index:999;transition:all 300ms cubic-bezier(0.22, 0.61, 0.36, 1)}#select:not(.dropdown-hidden){box-shadow:inset 0px 3px 5px 0px grey;transform:scale(1.025)}#select.dropdown-hidden{border-radius:10px;box-shadow:unset;transform:scale(1);border-bottom:2px solid var(--border-color)}#select.dropdown-hidden:hover{box-shadow:inset 0px 1px 3px 0px grey}#select #dropdown-toggle-button{--padding:0;float:right;margin-left:10px;transform:rotate(180deg);transition:transform 300ms cubic-bezier(0.5, 0, 0.5, 1.45)}#select.dropdown-hidden #dropdown-toggle-button{transform:rotate(0deg)}#select #dropdown-toggle-button svg path{stroke:var(--highlight-color);transition:stroke 300ms}#select.dropdown-hidden #dropdown-toggle-button svg path{stroke:black}#select #dropdown{box-sizing:border-box;position:absolute;width:100%;top:calc(100% + 5px);left:0;padding:0;border-radius:10px;background-color:rgba(250, 250, 250, .75);backdrop-filter:blur(15px);box-shadow:0px 10px 10px 0px grey;transform-origin:right top;transition:transform 300ms cubic-bezier(0.5, 0, 0.5, 1.45), box-shadow 300ms cubic-bezier(0.5, 0, 0.5, 1.45)}#select.dropdown-hidden #dropdown{transform:translateX(-.5rem) translateY(-25%) scaleX(0) scaleY(0);box-shadow:unset;transition:transform 300ms cubic-bezier(0.5, -0.45, 0.5, 1), box-shadow 300ms cubic-bezier(0.5, -0.45, 0.5, 1)}#select #placeholder{color:grey}";const g=class{constructor(t){e(this,t),this.isSelected=!1}get actualValue(){return this.value||this.hostElement.innerText}get parentSelectElement(){const e=this.hostElement.parentElement;return"s-select"===e.tagName.toLowerCase()?e:void 0}render(){return t(r,null,t("div",{id:"main-container",class:this.isSelected?"selected":"",onClick:()=>this.parentSelectElement.value=this.actualValue},t("slot",null)))}get hostElement(){return o(this)}};g.style=":host{--highlight-color:deepskyblue;display:block;-webkit-tap-highlight-color:transparent}#main-container{box-sizing:border-box;padding:.25rem .5rem;border-radius:10px;transform:scale(.95);cursor:pointer;transition:all 300ms cubic-bezier(0.22, 0.61, 0.36, 1)}#main-container:hover{background-color:rgba(100, 100, 100, .75);box-shadow:inset 0px 0px 30px 5px rgba(255, 255, 255, .75);transform:scale(1);transition:all 300ms cubic-bezier(0.55, 0.06, 0.68, 0.19)}#main-container.selected{color:var(--highlight-color)}";const u=class{constructor(t){e(this,t),this.sChange=i(this,"sChange",7),this.scale=1}scaleChanged(e){this.updateCSSVariable("--scale",e.toString())}connectedCallback(){this.updateCSSVariable("--scale",this.scale.toString())}render(){return t(r,null,t("input",{id:"native-element",type:"checkbox",onChange:e=>{this.checked=e.currentTarget.checked,this.sChange.emit(this.checked)}}))}updateCSSVariable(e,t){this.hostElement.style.setProperty(e,t)}get hostElement(){return o(this)}static get watchers(){return{scale:["scaleChanged"]}}};u.style=":host{--background-color:rgb(239, 239, 239);--highlight-color:deepskyblue;--scale:unset;display:inline-block;-webkit-tap-highlight-color:transparent}#native-element{position:relative;margin:0;height:calc(1rem * var(--scale));width:calc(2rem * var(--scale));background-color:var(--background-color);cursor:pointer;appearance:none;border-radius:50vh;transition:all 300ms}#native-element:checked{background-color:var(--highlight-color)}#native-element::before{content:'';transform:scale(.85);position:absolute;height:calc(1rem * var(--scale));width:calc(1rem * var(--scale));top:0;left:0;border-radius:50%;background-color:white;transition:all 300ms cubic-bezier(0.85, 0.02, 0.68, 1.7)}#native-element:hover{box-shadow:inset 0px 2px 5px 0px grey}#native-element:checked:before{transform:translateX(100%) scale(.85)}#native-element:hover::before{transform:translateY(-2px) scale(1);box-shadow:0px 2px 5px 0px grey}#native-element:hover:checked:before{transform:translateX(100%) translateY(-2px) scale(1);box-shadow:0px 2px 5px 0px grey}";const b=class{constructor(t){e(this,t)}render(){return t(r,null,t("slot",null))}};b.style=":host{font-family:Arial, Helvetica, sans-serif;-webkit-tap-highlight-color:transparent}";export{n as s_badge,s as s_button,a as s_card,l as s_collapse,d as s_grid,c as s_input,h as s_popover,p as s_select,g as s_select_option,u as s_toggle,b as s_ui}