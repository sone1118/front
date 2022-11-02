const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos = [];
const TODOS_KEY = "todos";

function handleCheck(e) {
    const parentList = e.target.parentElement.parentElement;
    parentList.classList.toggle("checked");
    todos = todos.map((ele) => ele.id === parseInt(parentList.id) ? {...ele, checked: !ele.checked} : ele);
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    const list = e.target.parentElement.parentElement;
    todos = todos.filter(item => item.id !== parseInt(list.id));
    console.log(todos);
    saveTodos();
    list.remove();
}

function paintTodo(newTodoObj) {
    const newList = document.createElement("li");
    newList.id = newTodoObj.id;
    newList.style = "background: transparent;"
    newList.classList.add("list-group-item");
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodoObj.text;

    if(newTodoObj.checked) newList.classList.add("checked");

    const buttons = document.createElement("div");
    const deleteButton = document.createElement("div");
    const checkButton = document.createElement("div");

    checkButton.classList.add("glyphicon");
    checkButton.classList.add("glyphicon-ok-circle");
    deleteButton.classList.add("glyphicon");
    deleteButton.classList.add("glyphicon-trash");

    deleteButton.addEventListener("click", deleteTodo);
    checkButton.addEventListener("click", handleCheck);

    buttons.appendChild(checkButton);
    buttons.appendChild(deleteButton);
    newList.appendChild(newSpan);
    newList.appendChild(buttons);
    todoList.appendChild(newList);
}
function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        checked: false,
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
