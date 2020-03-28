import nav from './nav';
import { top, bottom, footer } from './footer';
import makeButton from './button';
import { makeColorStyle, red } from './button-styles';
import imageURL from './webpack-icon.jpg';
import makeImage from './image';
import './footer.css';
import './button.css';

const image = makeImage(imageURL);
const button = makeButton('Yay! my first button!');
button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);

console.log(nav());
