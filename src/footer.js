import { red, blue } from './button-styles';
import './footer.css';

const top = document.createElement('div');
top.innerText = 'top of footer';
top.style = red;
const bottom = document.createElement('div');
bottom.innerText = 'bootom of footer';
bottom.style = blue;

const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
