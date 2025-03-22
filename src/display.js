export {AddTodoToGrid, ClearGrid, AddProjectToSidebar};
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

    pTitle.classList.add("title");
    pDescription.classList.add("description");
    pDueDate.classList.add("duedate");
    aEdit.classList.add("edit");
    aRemove.classList.add("remove");

    pTitle.innerText = todo.title;
    pDescription.innerText = todo.description;
    pDueDate.innerText = format(todo.dueDate, "PPpp");
    imgEdit.src = editIcon;
    aEdit.href = "";
    imgRemove.src = removeIcon;
    aRemove.href = "";

    const divTodoItem = document.createElement("div");
    divTodoItem.classList.add("todo-item");
    divTodoItem.appendChild(pTitle);
    divTodoItem.appendChild(pDescription);
    divTodoItem.appendChild(pDueDate);
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

    todoGridItems.forEach((item) =>{
        item.remove();
    });
}

function AddProjectToSidebar (project)
{
    const a = document.createElement("a");
    const divProjectLink = document.createElement("div");
    const pProjectName = document.createElement("p");
    const imgProject = createHashtagSVG("rgb("+ Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")");

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

function createHashtagSVG(color = "black") {
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
