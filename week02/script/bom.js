const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li');
li.textContent = input.value;
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
