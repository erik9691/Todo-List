import "./style.css";
import { Todo, Project } from "./logic";
import { AddTodoToGrid, ClearGrid, AddProjectToSidebar, ClearSideBar, AddSelectedColorListeners} from "./display";
import { differenceInCalendarDays } from "date-fns";
import sortAscending from "./icons/sort-ascending.svg";
import sortDescending from "./icons/sort-descending.svg";

let todoProjects = [];
let currentTodoProject = 0;
let currentEditedTodo = 0;
let currentSort = "added";
let currentSortDirection = "ascending"
let currentView = "project";

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
const completedTodos = document.querySelector(".completed-todos");
const todayTodos = document.querySelector(".today-todos");
const upcomingTodos = document.querySelector(".upcoming-todos");

const sortSelect = document.querySelector("select[name='sortSelect']");
const sortOrder = document.querySelector(".sort-order");


//LOGIC
function CreateProject(title)
{
    todoProjects.push(new Project(title));
    LoadProjects();
}

function CreateTodo(title, description, dueDate)
{
    todoProjects[currentTodoProject].todos.push(new Todo(title, description, dueDate));

    ReloadCurrentTodos();
}

function EditTodo(todo, newTitle, newDescription, newDueDate)
{
    todo.title = newTitle;
    todo.description = newDescription;
    todo.dueDate = newDueDate;
    ReloadCurrentTodos();
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
    ReloadCurrentTodos();
}

function CompleteTodo(todoToComplete, value)
{
    todoProjects[currentTodoProject].todos.forEach((todo, i) => 
    {
        if (todo === todoToComplete)
        {
            todoProjects[currentTodoProject].todos[i].completed = value;
        }
    });
}


//DISPLAY
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
    completedTodos.addEventListener("click", function (e)
    {
        LoadCompletedTodos();
    });
    todayTodos.addEventListener("click", function (e)
    {
        LoadTodayTodos();
    });
    upcomingTodos.addEventListener("click", function (e)
    {
        LoadUpcomingTodos();
    });

    sortSelect.addEventListener("change", function (e)
    {
        currentSort = e.target.value;
        ReloadCurrentTodos();
    });
    sortOrder.addEventListener("click", function (e)
    {
        if (e.target.value === "ascending") 
        {
            e.target.value = "descending";
            currentSortDirection = e.target.value;
            e.target.src = sortDescending;
        }
        else
        {
            e.target.value = "ascending";
            currentSortDirection = e.target.value;
            e.target.src = sortAscending;
        }

        ReloadCurrentTodos();
    });
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
            
            LoadProjectTodos();
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

    const completeTodoCheckbox = addedTodo.querySelector(".todo-checkbox");

    completeTodoCheckbox.addEventListener("click", function (e)
    {
        CompleteTodo(todo, e.target.checked);
    });
}

function ReloadCurrentTodos()
{
    switch (currentView) 
    {
        case "all":
            LoadAllTodos();
            break;
        case "completed":
            LoadCompletedTodos();
            break;
        case "today":
            LoadTodayTodos();
            break;
        case "upcoming":
            LoadUpcomingTodos();
            break;
        case "project":
            LoadProjectTodos();
            break;
    }
}

function LoadProjectTodos()
{
    currentView = "project";
    ClearGrid();
    const todosToSort = [];

    todoProjects[currentTodoProject].todos.forEach(todo => 
    {
        todosToSort.push(todo);
    });

    const sortedTodos = SortTodos(todosToSort);

    sortedTodos.forEach(todo => 
    {
        LoadTodo(todo);
    });

    addTodoButton.style.visibility='visible';
}

function LoadAllTodos()
{
    currentView = "all";
    ClearGrid();
    const todosToSort = [];

    todoProjects.forEach(project => 
    {
        project.todos.forEach(todo => 
        {
            todosToSort.push(todo);
        });
    });

    const sortedTodos = SortTodos(todosToSort);

    sortedTodos.forEach(todo => 
    {
        LoadTodo(todo);
    });

    addTodoButton.style.visibility='hidden';
}

function LoadCompletedTodos()
{
    currentView = "completed";
    ClearGrid();
    const todosToSort = [];

    todoProjects.forEach(project => 
    {
        project.todos.forEach(todo => 
        {
            if (todo.completed) 
            {
                todosToSort.push(todo);
            }
        });
    });

    const sortedTodos = SortTodos(todosToSort);

    sortedTodos.forEach(todo => 
    {
        LoadTodo(todo);
    });

    addTodoButton.style.visibility='hidden';
}

function LoadTodayTodos()
{
    currentView = "today";
    ClearGrid();
    const todosToSort = [];

    todoProjects.forEach(project => 
    {
        project.todos.forEach(todo => 
        {
            if (differenceInCalendarDays(todo.dueDate,new Date) < 1) 
            {
                todosToSort.push(todo);
            }
        });
    });

    const sortedTodos = SortTodos(todosToSort);

    sortedTodos.forEach(todo => 
    {
        LoadTodo(todo);
    });

    addTodoButton.style.visibility='hidden';
}

function LoadUpcomingTodos()
{
    currentView = "upcoming";
    ClearGrid();
    const todosToSort = [];

    todoProjects.forEach(project => 
    {
        project.todos.forEach(todo => 
        {
            if (differenceInCalendarDays(todo.dueDate,new Date) < 7) 
            {
                todosToSort.push(todo);
            }
        });
    });

    const sortedTodos = SortTodos(todosToSort);

    sortedTodos.forEach(todo => 
    {
        LoadTodo(todo);
    });

    addTodoButton.style.visibility='hidden';
}

function SortTodos(todosToSort)
{
    let sortedTodos;

    switch (currentSort) 
    {
        case "added":
            if (currentSortDirection === "ascending") 
            {
                sortedTodos = todosToSort.toSorted((a, b) => a.index - b.index);
            }
            else
            {
                sortedTodos = todosToSort.toSorted((a, b) => b.index - a.index);
            }
            break;
        case "date":
            if (currentSortDirection === "ascending") 
            {
                sortedTodos = todosToSort.toSorted((a, b) => a.dueDate - b.dueDate);
            }
            else
            {
                sortedTodos = todosToSort.toSorted((a, b) => b.dueDate - a.dueDate);
            }
            break;
        case "completed":
            if (currentSortDirection === "ascending") 
            {
                sortedTodos = todosToSort.toSorted((a, b) => a.completed - b.completed);
            }
            else
            {
                sortedTodos = todosToSort.toSorted((a, b) => b.completed - a.completed);
            }
            break;
    }

    return sortedTodos;
}

AddEventListeners();

CreateProject("Gym");
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 24, 2025 16:30:00"));
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 26, 2025 16:30:00"));
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 23, 2025 16:30:00"));
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 28, 2025 16:30:00"));

CreateProject("Gym");
CreateProject("Gym");