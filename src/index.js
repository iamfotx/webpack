import nav from './nav';
import { top, bottom, footer } from './footer';
import makeButton from './button';
import { makeColorStyle, red } from './button-styles';

const button = makeButton('Yay! my first button!');
button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(footer);

console.log(nav(), top, bottom);
