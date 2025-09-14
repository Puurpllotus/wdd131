const input = document.querySelector('#favchap');
const button = document.querySelector('button');

const list = document.querySelector('#list');
const feedback = document.querySelector('#feedback');

button.addEventListener('click', function () {
    // Check to make sure the input is not blank
    if (input.value.trim() !== '') {
        feedback.textContent = ''; // Clear any previous feedback messages

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
    // After the if block, clear the input and return focus to it.
    else {
        //Provide an error message if the input is blank
        feedback.textContent = 'Please enter a book and chapter.';
    }
    // Clear the input and return focus to it
    input.value = '';
    input.focus();
});
input.addEventListener('keyup', function (event) {
    // Check if the key pressed was the "Enter" key
    if (event.key === 'Enter') {
        // Programmatically click the "Add Chapter" button
        button.click();
    }
});
