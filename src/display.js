export { Start, LoadProjects, ReloadCurrentTodos, currentSortDirection, currentTodoProject, currentSort};
import { CreateProject, CreateTodo, EditTodo, DeleteTodo, CompleteTodo, SortTodos, todoProjects } from "./logic.js";
import removeIcon from "./icons/remove.svg";
import editIcon from "./icons/edit.svg";
import sortAscending from "./icons/sort-ascending.svg";
import sortDescending from "./icons/sort-descending.svg";
import { format, differenceInCalendarDays } from "date-fns";

let currentView = "project";
let currentSortDirection = "ascending"
let currentTodoProject = 0;
let currentEditedTodo = 0;
let currentSort = "added";

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


function Start ()
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


function AddTodoToGrid (todo)
{
    const pTitle = document.createElement("p");
    const pDescription = document.createElement("p");
    const pDueDate = document.createElement("p");
    const imgEdit = document.createElement("img");
    const aEdit = document.createElement("a");
    const imgRemove = document.createElement("img");
    const aRemove = document.createElement("a");
    const inputCheckbox = document.createElement("input");

    pTitle.classList.add("title");
    pDescription.classList.add("description");
    pDueDate.classList.add("duedate");
    aEdit.classList.add("edit");
    aRemove.classList.add("remove");
    inputCheckbox.type = "checkbox";
    inputCheckbox.classList.add("todo-checkbox");

    pTitle.innerText = todo.title;
    pDescription.innerText = todo.description;
    pDueDate.innerText = format(todo.dueDate, "d MMM y p");
    imgEdit.src = editIcon;
    aEdit.href = "";
    imgRemove.src = removeIcon;
    aRemove.href = "";
    inputCheckbox.checked = todo.completed;

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    textContainer.appendChild(pTitle);
    textContainer.appendChild(pDescription);
    textContainer.appendChild(pDueDate);

    const divTodoItem = document.createElement("div");
    divTodoItem.classList.add("todo-item");
    divTodoItem.appendChild(inputCheckbox);
    divTodoItem.appendChild(textContainer);
    aEdit.appendChild(imgEdit);
    divTodoItem.appendChild(aEdit);
    aRemove.appendChild(imgRemove);
    divTodoItem.appendChild(aRemove);
    divTodoItem.id = todo.index;

    const todoGrid = document.querySelector(".todo-grid");
    todoGrid.appendChild(divTodoItem);

    ToggleHoverVisibilityTodo(divTodoItem);

    return divTodoItem;
}
function ClearGrid ()
{
    const todoGridItems = Array.from(document.querySelector(".todo-grid").childNodes);

    todoGridItems.forEach((item) =>
    {
        item.remove();
    });
}

function AddProjectToSidebar (project)
{
    const aSelect = document.createElement("a");
    const divProjectLink = document.createElement("div");
    const pProjectName = document.createElement("p");
    const imgProject = createHashtagSVG(project.color);
    const imgRemove = document.createElement("img");
    const aRemove = document.createElement("a");

    pProjectName.innerText = project.title;
    imgRemove.src = removeIcon;
    aRemove.classList.add("remove-project");
    aRemove.appendChild(imgRemove);

    divProjectLink.classList.add("sidebar-link", "project-link");
    divProjectLink.appendChild(imgProject);
    divProjectLink.appendChild(pProjectName);
    divProjectLink.appendChild(aRemove);
    divProjectLink.id = project.index;

    aSelect.href = "";
    aSelect.appendChild(divProjectLink);

    const sidebar = document.querySelector(".project-links");
    sidebar.appendChild(aSelect);

    ToggleHoverVisibilityProject(divProjectLink);

    return divProjectLink;
}
function ClearSideBar ()
{
    const sidebarProjects = Array.from(document.querySelectorAll(".project-link"));

    sidebarProjects.forEach((project) =>
    {
        project.parentNode.remove();
    });
}

function createHashtagSVG (color = "black") 
{
    const xmlns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("xmlns", xmlns);
    svg.setAttribute("viewBox", "0 0 24 24");

    const title = document.createElementNS(xmlns, "title");
    title.textContent = "pound";
    svg.appendChild(title);

    const path = document.createElementNS(xmlns, "path");
    path.setAttribute("d", "M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z");
    path.setAttribute("fill", color);
    svg.appendChild(path);

    return svg;
}

function AddSelectedColorListeners (link)
{
    link.addEventListener("click", function (e)
    {
        e.preventDefault();

        const sidebarLinks = document.querySelectorAll(".sidebar-link");

        sidebarLinks.forEach(link => 
        {
            link.classList.remove("selected");
        });

        e.target.classList.add("selected");
    });
}

function ToggleHoverVisibilityTodo(todo)
{
    todo.querySelector(".edit").style.visibility='hidden';
    todo.querySelector(".remove").style.visibility='hidden';

    todo.addEventListener("mouseover", function (e)
    {
        todo.querySelector(".edit").style.visibility='visible';
        todo.querySelector(".remove").style.visibility='visible';
    });
    todo.addEventListener("mouseout", function (e)
    {
        todo.querySelector(".edit").style.visibility='hidden';
        todo.querySelector(".remove").style.visibility='hidden';
    });
}

function ToggleHoverVisibilityProject(project)
{
    project.querySelector(".remove-project").style.visibility='hidden';

    const projects = document.querySelectorAll(".project-link");

    const revealButton = function(event) {event.target.closest(".project-link").querySelector(".remove-project").style.visibility='visible';}
    const hideButton = function(event) {event.target.closest(".project-link").querySelector(".remove-project").style.visibility='hidden';}

    project.addEventListener("mouseover", revealButton);
    project.addEventListener("mouseout", hideButton);

    if (projects.length === 1)
    {
        project.removeEventListener("mouseover", revealButton);
        project.removeEventListener("mouseout", hideButton);
    }
    else if (projects.length === 2)
    {
        projects[0].addEventListener("mouseover", revealButton);
        projects[0].addEventListener("mouseout", hideButton);
    }
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