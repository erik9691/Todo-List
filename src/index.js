import "./style.css";
import { Todo } from "./logic";
import { AddTodoToGrid } from "./display";

let todoItems = [];

const addTodoButton = document.querySelector(".add-todo-button")

function AddEventListeners ()
{
    addTodoButton.addEventListener("click", function (e)
    {
        todoItems.push(new Todo("Make Bread", "Yeah make that bread!", "10 of November"));
        todoItems.forEach(todo => {
            AddTodoToGrid(todo);
        });
    });
}

AddEventListeners();