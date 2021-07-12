import{r,h as o,H as n,c as s}from"./p-7870af10.js";const t=class{constructor(o){r(this,o)}render(){return o(n,null,o("div",{id:"main-container"},o("slot",null)))}};t.style=":host{display:inline-block;--background-color:deepskyblue}#main-container{box-sizing:border-box;padding:.1rem .5rem;background-color:var(--background-color);user-select:none;border-radius:10px;transition:all 300ms ease}#main-container:hover{transform:scale(1.1);border-radius:5px}";const a=class{constructor(o){r(this,o)}render(){return o(n,null,o("button",null,o("slot",null)))}};a.style=":host{--color:black;--background-color:rgb(239, 239, 239)}button{color:var(--color);background-color:var(--background-color);border:none;padding:10px;cursor:pointer;transition:all 300ms ease;border-radius:10px}button:hover{transform:translateY(-5px);box-shadow:0px 5px 5px 0px grey;transform:scale(1.05)}button:active{transform:translateY(-3px);box-shadow:0px 3px 3px 0px grey;transform:scale(1.025)}";const e=class{constructor(o){r(this,o)}render(){return o(n,null,o("div",{id:"main-container"},o("slot",null)))}};e.style=":host{display:inline-block;--background-color:rgb(250, 250, 250)}#main-container{box-sizing:border-box;height:100%;width:100%;padding:.5rem;background-color:var(--background-color);border-radius:10px;box-shadow:0px 5px 5px 0px grey;transition:all 300ms ease}#main-container:hover{transform:translateY(-5px);box-shadow:0px 10px 10px 0px grey}";const i=class{constructor(o){r(this,o),this.sChange=s(this,"sChange",7),this.sInput=s(this,"sInput",7)}render(){return o(n,null,o("input",{value:this.value,placeholder:this.placeholder,onChange:r=>this.sChange.emit(r.currentTarget.value),onInput:r=>{this.value=r.currentTarget.value,this.sInput.emit(r)}}))}};i.style=":host{--border-color:lightgrey;--highlight-color:deepskyblue}input{border:1px solid var(--border-color);outline:none;height:1.5rem;border-radius:10px;padding:0.25rem 0.5rem;transition:all 300ms ease}input:focus{transform:scale(1.025);border-radius:5px;border-bottom:2px solid var(--highlight-color)}";export{t as s_badge,a as s_button,e as s_card,i as s_input}