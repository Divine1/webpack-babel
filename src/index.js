import button from './button';
import './style.css';
import textbox from './textbox'

console.log("in index.js --save hey")

var aaa = ['a' , 'b' , 'c' , 'd ' ];

aaa.forEach( (element,index ) => {
    console.log("element ", element)
});

button()
var div = textbox("my div");
console.log(div)
document.body.appendChild(div)
