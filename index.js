// Write your code here!
// removing main//
const main = document.querySelector('main#main');
main.remove();

// Create a new header element with an id of 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new header element
const yourName = 'Amina Farah'; 
newHeader.innerHTML = `${yourName} is the champion`;

// Add the new header element to the document
const body = document.querySelector('body');
body.appendChild(newHeader);
// Set the nodeName property of the new element