//import Example from './Example';
import '../css/app.css';
import Image from '../images/craig.jpg'
import printMe from './print.js';
import { cube } from './math.js';
import Slider from './slider.js';

const el = document.createElement('h1');
const myImage = document.createElement('img');
const slider = new Slider();

myImage.src = Image;

if (process.env.NODE_ENV !== 'production') {
  console.log('looks like you are in development mode');
}

el.innerHTML = [
  '5 cubed is equal to ' + cube(5)
].join('\n\n');

document.body.appendChild(el);
document.body.appendChild(myImage);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}