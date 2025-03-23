export {AddTodoToGrid, ClearGrid, AddProjectToSidebar, ClearSideBar, AddSelectedColorListeners};
import removeIcon from "./icons/remove.svg";
import editIcon from "./icons/edit.svg";
import { format } from "date-fns";

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

    const todoGrid = document.querySelector(".todo-grid");
    todoGrid.appendChild(divTodoItem);

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

function ClearSideBar ()
{
    const sidebarProjects = Array.from(document.querySelectorAll(".project-link"));

    sidebarProjects.forEach((project) =>
    {
        project.parentNode.remove();
    });
}

function AddProjectToSidebar (project)
{
    const aSelect = document.createElement("a");
    const divProjectLink = document.createElement("div");
    const pProjectName = document.createElement("p");
    const imgProject = createHashtagSVG("rgb("+ Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")");
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

    return divProjectLink;
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
    console.log("ADDING LISTENER TO: "+link.classList);

    link.addEventListener("click", function (e)
    {
        e.preventDefault();

        const sidebarLinks = document.querySelectorAll(".sidebar-link");

        sidebarLinks.forEach(link => 
        {
            console.log("REMOVING CLASS FROM: "+link.classList);
            link.classList.remove("selected");
        });

        e.target.classList.add("selected");
        console.log("ADDING CLASS TO: "+ e.target.classList);
    });
}