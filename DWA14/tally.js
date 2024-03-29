import { LitElement } from ": https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js"
 console.log("test")
export class CounterApp extends LitElement {
static styles = css`
:host {
display: block;
text-align: center;
font-family:Tahoma;
}

button {
font-size: 10px;
padding: 10px 10px;
margin: 10px;
color: blue;
}
`;

static properties = {
count: { type: Number },
state: { type: '' },
};

constructor() {
super();
this.count = 1;
this.state = 'Normal';
}

increase() {
this.count ++;
this.updateState();
}

decrease() {
this.count--;
this.updateState();
}

updateState() {
if (this.count === 1) {
this.state = 'Minimum Number'; 
} 

else if (this.count === 15){
this.state ='Maximum Number'; 
  
}

else  {
this.state = 'Normal';
}
}



render() {
return html`
<h1>Counter App</h1>
<p>Counter: ${this.count}</p>
<p>Status: ${this.state}</p>
<button onclick="${this.increase}">Increase</button>
<button onclick="${this.decrease}">Decrease</button>
`;
}
}

customElements.define('counter-app', CounterApp);