import nav from './nav';
import { top, bottom, footer } from './footer';
import makeButton from './button';
import { makeColorStyle, red } from './button-styles';
import './footer.css';
import './button.css';

const button = makeButton('Yay! my first button!');
button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(nav());
