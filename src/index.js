import "./style.css";
import { Todo } from "./logic";
import { AddTodoToGrid, ClearGrid } from "./display";

let todoItems = [];

const addTodoButton = document.querySelector(".add-todo-button");
const addTodoModal = document.querySelector(".add-todo-modal");
const closeTodoButton = document.querySelector(".close-todo-button");
const addTodoForm = document.querySelector(".add-todo-form");

function AddEventListeners ()
{
    addTodoButton.addEventListener("click", function (e)
    {
        addTodoModal.showModal();
    });
    closeTodoButton.addEventListener("click", function (e)
    {
        addTodoModal.close();
    });
    addTodoForm.addEventListener("submit", function (e)
    {
        e.preventDefault();

        const todoTitle = document.querySelector('input[name="todoTitle"]').value;
        const todoDescription = document.querySelector('textarea[name="todoDescription"]').value;
        const todoDueDate = document.querySelector('input[name="todoDueDate"]').value;

        todoItems.push(new Todo(todoTitle, todoDescription, todoDueDate))
        ClearGrid();
        todoItems.forEach(todo => {
            AddTodoToGrid(todo);
        });

        addTodoModal.close();
        addTodoForm.reset();
    });
}

AddEventListeners();