import nav from './nav';
import makeButton from './button';
import { makeColorStyle, red } from './button-styles';
import imageURL from './webpack-icon.jpg';
import makeImage from './image';
const getFooter = () => import('./footer');
import './button.css';

const image = makeImage(imageURL);
const button = makeButton('Yay! my first button!');
button.style = makeColorStyle('cyan');
document.body.appendChild(button);
document.body.appendChild(image);
button.addEventListener('click', function clickListener(e) {
    // show the footer here
    getFooter().then(({ footer }) => {
        document.body.appendChild(footer);
    });
});
console.log(nav());
