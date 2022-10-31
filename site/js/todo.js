const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteTodo(e) {
    const list = e.target.parentElement;
    todos = todos.filter(item => item.id !== parseInt(list.id));
    console.log(todos);
    saveTodos();
    list.remove();
}
function paintTodo(newTodoObj) {
    const newList = document.createElement("li");
    newList.id = newTodoObj.id;
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodoObj.text;
    const newButton = document.createElement("button");
    newButton.InnerHTML = "X";
    newButton.addEventListener("click", deleteTodo);
    newList.appendChild(newSpan);
    newList.appendChild(newButton);
    todoList.appendChild(newList);
}
function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
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
