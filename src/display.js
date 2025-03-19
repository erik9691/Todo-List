export {AddTodoToGrid, ClearGrid, AddProjectToSidebar};
import projectIcon from "./icons/project.svg";

function AddTodoToGrid (todo)
{
    const pTitle = document.createElement("p");
    const pDescription = document.createElement("p");
    const pDueDate = document.createElement("p");

    pTitle.classList.add("title");
    pDescription.classList.add("description");
    pDueDate.classList.add("duedate");

    pTitle.innerText = todo.title;
    pDescription.innerText = todo.description;
    pDueDate.innerText = todo.dueDate;

    const divTodoItem = document.createElement("div");
    divTodoItem.classList.add("todo-item");
    divTodoItem.appendChild(pTitle);
    divTodoItem.appendChild(pDescription);
    divTodoItem.appendChild(pDueDate);

    const todoGrid = document.querySelector(".todo-grid");
    todoGrid.appendChild(divTodoItem);
}

function ClearGrid ()
{
    const todoGridItems = Array.from(document.querySelector(".todo-grid").childNodes);

    todoGridItems.forEach((item) =>{
        item.remove();
    });
}

function AddProjectToSidebar (project)
{
    const a = document.createElement("a");
    const divProjectLink = document.createElement("div");
    const imgProject = document.createElement("img");
    const pProjectName = document.createElement("p");

    imgProject.src = projectIcon;
    imgProject.alt = "Project Icon"

    divProjectLink.classList.add("sidebar-link", "project-link");
    divProjectLink.appendChild(imgProject);
    pProjectName.innerText = project.title;
    divProjectLink.appendChild(pProjectName);
    divProjectLink.id = project.index;

    a.href = "";
    a.appendChild(divProjectLink);

    const sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(a);

    return divProjectLink;
}