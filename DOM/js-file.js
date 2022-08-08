const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Creating a p element with red text
const redText = document.createElement('p');
redText.textContent = 'Hey I\'m red!';
redText.style.color = 'red';
document.getElementById('container').appendChild(redText);

//Creating an h3 element with blue text
const blueText = document.createElement('h3');
blueText.textContent = 'I\'m a blue h3!';
blueText.style.color = 'blue';
document.getElementById('container').appendChild(blueText);

//Creating a div with a black border with stuff in it
//Create the div first
const borderDiv = document.createElement("div");
borderDiv.style.border = "thick solid black";
borderDiv.style.backgroundColor = "pink";

//Creating each element inside of the div
const divHead = document.createElement('h1');
divHead.textContent = 'I\'m in a div';
//Putting it inside of the newly created div
borderDiv.appendChild(divHead);

const divPara = document.createElement('p');
divPara.textContent = 'ME TOO!';
borderDiv.appendChild(divPara);

//Must append the new div to the parent container
container.appendChild(borderDiv);


