import _ from 'lodash';
import initialiseWebsite from './website.js';
import createParagraph from './createPara.js';

// Note to self: this thing wasn't working cause the script needs to be written in the lodash component

function component() {
    const element = document.createElement('div');
    element.classList.add("component")

    // Lodash, now imported by this script
    element.innerHTML = "boo";

    // element.appendChild(createParagraph(Testing));

    return element;
}



document.body.appendChild(component());