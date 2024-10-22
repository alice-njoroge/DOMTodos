//create my array of objects
let InitialTodos = [
    {id: 1, title: "Dokus Guken", done: false},
    {id: 2, title: "learn HTML", done: false},
    {id: 3, title: "laufe", done: false},
];
if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(InitialTodos));
}

let todos = JSON.parse(localStorage.getItem('todos')) || [];

// DOM node generator
function createTodoItem(todoData) {
    // <li><input type="checkbox"/> <label>Clean up</label></li>
    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'checkbox'

    const label = document.createElement('label');
    const labelTitle = document.createTextNode(todoData.title);
    label.appendChild(labelTitle)

    //Style the todos based on status
    updateCheckedFormElement(todoData, label, input);

    //listen for any status updates
    input.addEventListener("change", function () {
        todoData.done = input.checked //false or true
        localStorage.setItem('todos', JSON.stringify(todos))
        renderTodos(todos)
    })


    li.append(input, label);
    return li;
}
function updateCheckedFormElement (todoItem, label, input) {
    if (todoItem.done) {
        label.style.textDecoration = 'line-through'
        input.checked = true
    } else {
        label.style.textDecoration = 'none'
        input.checked = false
    }
}

function renderTodos(todos) {
    document.querySelector('.ul-wrapper').innerHTML = '';

    for (let todoData of todos) {
        const newTodDoItem = createTodoItem(todoData);
        document.querySelector('.ul-wrapper').appendChild(newTodDoItem)
    }
}

function addTodoItem(event) {
    event.preventDefault();
    const newID = +new Date();
    const title = document.querySelector('form > input').value;

    todos.push({id: newID, title: title, done: false});
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos)
}


document.querySelector('form').addEventListener('submit', addTodoItem);

renderTodos(todos)

//reload the page and persist data
//checkboxes need to work


