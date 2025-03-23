import "./style.css";
import { Todo, Project } from "./logic";
import { AddTodoToGrid, ClearGrid, AddProjectToSidebar, ClearSideBar, AddSelectedColorListeners} from "./display";

let todoProjects = [];
let currentTodoProject = 0;
let currentEditedTodo = 0;

const addTodoButton = document.querySelector(".add-todo-button");
const addTodoModal = document.querySelector(".add-todo-modal");
const closeTodoButton = document.querySelector(".close-todo-button");
const addTodoForm = document.querySelector(".add-todo-form");

const addProjectButton = document.querySelector(".add-project");
const addProjectModal = document.querySelector(".add-project-modal");
const closeProjectButton = document.querySelector(".close-project-button");
const addProjectForm = document.querySelector(".add-project-form");

const editTodoModal = document.querySelector(".edit-todo-modal");
const closeEditButton = document.querySelector(".close-edit-button");
const editTodoForm = document.querySelector(".edit-todo-form");

const sidebarLinks = document.querySelectorAll(".sidebar-link");

const allTodos = document.querySelector(".all-todos");

function AddEventListeners ()
{
    sidebarLinks.forEach(link => 
    {
        if (!link.classList.contains("add-project")) 
        {
            AddSelectedColorListeners(link);
        }
    });

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

        CreateTodo(todoTitle,todoDescription,todoDueDate);

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

        const projectTitle = document.querySelector('input[name="projectTitle"]').value;

        CreateProject(projectTitle);

        addProjectModal.close();
        addProjectForm.reset();
    });

    closeEditButton.addEventListener("click", function (e)
    {
        editTodoModal.close();
    });
    editTodoForm.addEventListener("submit", function (e)
    {
        e.preventDefault();

        const editTitle = document.querySelector('input[name="editTitle"]').value;
        const editDescription = document.querySelector('textarea[name="editDescription"]').value;
        const editDueDate = document.querySelector('input[name="editDueDate"]').value;

        todoProjects[currentTodoProject].todos.forEach(todo => 
        {
            if (todo.id === currentEditedTodo) 
            {
                EditTodo(todo, editTitle, editDescription, editDueDate);
            }
        });

        editTodoModal.close();
        editTodoForm.reset();
    });

    allTodos.addEventListener("click", function (e)
    {
        LoadAllTodos();
    });
}

function CreateProject(title)
{
    todoProjects.push(new Project(title));
    LoadProjects();
}

function LoadProjects()
{
    ClearSideBar();
    todoProjects.forEach(project => 
    {
        const selectProjectButton = AddProjectToSidebar(project);

        AddSelectedColorListeners(selectProjectButton.closest(".sidebar-link"));

        selectProjectButton.addEventListener("click", function (e)
        {
            e.preventDefault();

            todoProjects.forEach((project, i) => 
            {
                if (project.index === parseInt(e.target.closest("div").id)) 
                {
                    currentTodoProject = i;
                }
            });
            
            LoadTodos();
        });

        const removeProjectButton = selectProjectButton.querySelector(".remove-project");

        removeProjectButton.addEventListener("click", function (e)
        {
            e.preventDefault();

            todoProjects.forEach((project, i) => 
            {
                if (project.index === parseInt(e.target.closest("div").id)) 
                {
                    todoProjects.splice(i, 1)
                    LoadProjects();
                }
            });

            parseInt(e.target.parentElement.id)
        });
    });
}

function CreateTodo(title, description, dueDate)
{
    todoProjects[currentTodoProject].todos.push(new Todo(title, description, dueDate));

    LoadTodos();
}

function LoadTodos()
{
    ClearGrid();
    todoProjects[currentTodoProject].todos.forEach(todo => 
    {
        LoadTodo(todo);
    });
    addTodoButton.style.visibility='visible';
}

function LoadTodo(todo)
{
    const addedTodo = AddTodoToGrid(todo);

    const editTodoButton = addedTodo.querySelector(".edit");

    editTodoButton.addEventListener("click", function (e)
    {
        e.preventDefault();

        editTodoModal.showModal();

        document.querySelector('input[name="editTitle"]').value = todo.title;
        document.querySelector('textarea[name="editDescription"]').value = todo.description;
        document.querySelector('input[name="editDueDate"]').value = todo.date;

        currentEditedTodo = todo.id;
    });

    const removeTodoButton = addedTodo.querySelector(".remove");

    removeTodoButton.addEventListener("click", function (e)
    {
        e.preventDefault();

        DeleteTodo(todo);
    });
}

function EditTodo(todo, newTitle, newDescription, newDueDate)
{
    todo.title = newTitle;
    todo.description = newDescription;
    todo.dueDate = newDueDate;
    LoadTodos();
}

function DeleteTodo(todoToDelete)
{
    todoProjects[currentTodoProject].todos.forEach((todo, i) => 
    {
        if (todo === todoToDelete)
        {
            todoProjects[currentTodoProject].todos.splice(i, 1);
        }
    });
    LoadTodos();
}

function LoadAllTodos()
{
    ClearGrid();
    todoProjects.forEach(project => 
    {
        project.todos.forEach(todo => 
        {
            LoadTodo(todo);
        });
    });
    addTodoButton.style.visibility='hidden';
}

AddEventListeners();

CreateProject("Gym");
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 28, 2025 16:30:00"));
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 28, 2025 16:30:00"));
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 28, 2025 16:30:00"));
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 28, 2025 16:30:00"));

CreateProject("Gym");
CreateProject("Gym");