// take a string, the button label and return a button element

 const makeButton = (buttonName) => {
    const buttonLabel =  `Button: ${buttonName}`
    const button = document.createElement('button');
    button.innerText = buttonLabel;
    return button;
}

module.exports = makeButton;