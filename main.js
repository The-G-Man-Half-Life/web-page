let newElement = document.createElement('h1');

let textNode = document.createTextNode('Adios tonotos');

newElement.appendChild(textNode);

let container = document.getElementById('container');

container.appendChild(newElement);

newElement.setAttribute('style','color:green; font-size:30px;')