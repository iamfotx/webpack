const getGsap = () => import('gsap');
const getLodashUniq = () => import('lodash-es/uniq'); // the only way to do code splitting for named exports
import nav from './nav';
import makeButton from './button';
import { makeColorStyle } from './button-styles';
import imageURL from './webpack-icon.jpg';
import makeImage from './image';
const getFooter = () => import(/* webpackChunkName: "footer"*/ './footer');
import './button.css';

const setButtonStyle = color => import(`./button-styles/${color}`);
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
    getLodashUniq().then(console.log);
    getGsap().then(console.log);
    setButtonStyle('red').then(({ default: style }) => {
        button.style = style;
    });
});
console.log(nav());
