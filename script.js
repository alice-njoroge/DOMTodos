//create my array of objects
const todos = [
    {id: 1, title: "Dokus Guken", done: false},
    {id: 2, title: "learn HTML", done: false},
    {id: 3, title: "laufe", done: false},
];

function createTodoItems(todoData) {
    // <li><input type="checkbox"/> <label>Clean up</label></li>
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox'

    const label = document.createElement('label');

    const labelTitle = document.createTextNode(todoData.title);
    label.appendChild(labelTitle)

    li.append(input, label);
    return li;
}

function renderTodos(todos) {
    document.querySelector('.ul-wrapper').innerHTML = '';

    for (let todoData of todos) {
        const newTodDoItem = createTodoItems(todoData);
        document.querySelector('.ul-wrapper').appendChild(newTodDoItem)
    }
}

function addTodoItem(event) {
    event.preventDefault();
    const newID = +new Date();
    const title = document.querySelector('form > input').value;

    todos.push({id: newID, title: title, done: false});
    renderTodos(todos)
}

document.querySelector('form').addEventListener('submit', addTodoItem)

renderTodos(todos)

//reload the page and persist data
//checkboxes need to work