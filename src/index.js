import "./style.css";
import { Todo, Project } from "./logic";
import { AddTodoToGrid, ClearGrid, AddProjectToSidebar } from "./display";

let todoProjects = [];
let currentTodoProject = 0;

const addTodoButton = document.querySelector(".add-todo-button");
const addTodoModal = document.querySelector(".add-todo-modal");
const closeTodoButton = document.querySelector(".close-todo-button");
const addTodoForm = document.querySelector(".add-todo-form");

const addProjectButton = document.querySelector(".add-project");
const addProjectModal = document.querySelector(".add-project-modal");
const closeProjectButton = document.querySelector(".close-project-button");
const addProjectForm = document.querySelector(".add-project-form");


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

        todoProjects[currentTodoProject].todos.push(new Todo(todoTitle, todoDescription, todoDueDate));
        ClearGrid();
        todoProjects[currentTodoProject].todos.forEach(todo => {
            AddTodoToGrid(todo);
        });

        addTodoModal.close();
        addTodoForm.reset();
    });
    addProjectButton.addEventListener("click", function (e)
    {
        e.preventDefault();

        addProjectModal.showModal();
    });
    closeProjectButton.addEventListener("click", function (e)
    {
        addProjectModal.close();
    });
    addProjectForm.addEventListener("submit", function (e)
    {
        e.preventDefault();

        addProjectModal.showModal();

        const projectTitle = document.querySelector('input[name="projectTitle"]').value;

        todoProjects.push(new Project(projectTitle));

        let newProjectButton = AddProjectToSidebar(todoProjects.slice(-1)[0]);

        newProjectButton.addEventListener("click", function (e)
        {
            e.preventDefault();

            console.log(e.target.closest("div"));
            console.log(e.target.closest("div").id);
            currentTodoProject = parseInt(e.target.closest("div").id);
            console.log(currentTodoProject);

            ClearGrid();
            todoProjects[currentTodoProject].todos.forEach(todo => {
                AddTodoToGrid(todo);
            });
        });

        addProjectModal.close();
        addProjectForm.reset();
    });
    
}

AddEventListeners();