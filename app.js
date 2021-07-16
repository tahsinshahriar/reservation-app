// Selectors

const form = document.querySelector('#registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const text = input.value;
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    li.appendChild(removeBtn);
    ul.appendChild(li);
    input.value = '';
});

ul.addEventListener('change', function (event) {
    const checkbox = event.target;
    const state = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    if (state === true) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});

ul.addEventListener('click', function (event) {
    if (event.target.tagName == 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.textContent == 'Remove') {
            ul.removeChild(li);
        } else if (button.textContent == 'Edit') {
            const firstChild = li.firstChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = firstChild.textContent;
            li.insertBefore(input, firstChild);
            li.removeChild(firstChild);
            button.textContent = 'Save';
        } else if (button.textContent == 'Save') {
            const input = li.firstChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'Edit';
        }
    }
});
