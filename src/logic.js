export { CreateProject, CreateTodo, EditTodo, DeleteTodo, CompleteTodo, SortTodos, LoadFromStorage, DeleteProject};
import { LoadProjects, ReloadCurrentTodos, currentSort, currentSortDirection, currentTodoProject } from "./display.js";
export let todoProjects = [];

let lastLoadedProjectIndex = -1;
let lastLoadedTodoIndex = -1;

class Todo 
{
    static #lastindex = lastLoadedProjectIndex;
    index;

    completed = false;

    constructor(title, description, dueDate)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.index = ++Todo.#lastindex;
    }
}

class Project 
{
    todos = [];

    static #lastindex = lastLoadedTodoIndex;
    index;
    
    color = "rgb("+ Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";

    constructor(title)
    {
        this.title = title;
        this.index = ++Project.#lastindex;
    }
}

function CreateProject(title)
{
    todoProjects.push(new Project(title));
    LoadProjects();
    
    SaveToStorage();
}

function DeleteProject(projectToDelete)
{
    todoProjects.forEach((project, i) => 
    {
        if (project.index === projectToDelete.index) 
        {
            todoProjects.splice(i, 1)
            LoadProjects();
        }
    });

    SaveToStorage();
}

function CreateTodo(title, description, dueDate)
{
    todoProjects[currentTodoProject].todos.push(new Todo(title, description, dueDate));
    ReloadCurrentTodos();

    console.log(todoProjects);
    SaveToStorage();
}

function EditTodo(todo, newTitle, newDescription, newDueDate)
{
    todo.title = newTitle;
    todo.description = newDescription;
    todo.dueDate = newDueDate;
    ReloadCurrentTodos();

    SaveToStorage();
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

    SaveToStorage();
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

    SaveToStorage();
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

function SaveToStorage()
{
    localStorage.setItem("storedProject", JSON.stringify(todoProjects));
    localStorage.setItem("projectIndex", JSON.stringify(lastLoadedProjectIndex));
    localStorage.setItem("todoIndex", JSON.stringify(lastLoadedTodoIndex));
}

function LoadFromStorage()
{
    if (localStorage.getItem("storedProject") !== null) 
    {
        todoProjects = JSON.parse(localStorage.getItem("storedProject"));
        LoadProjects();
        //ReloadCurrentTodos();
    }
    if (localStorage.getItem("projectIndex") !== null) 
    {
       lastLoadedProjectIndex = JSON.parse(localStorage.getItem("projectIndex"));
    }
    if (localStorage.getItem("todoIndex") !== null) 
    {
        lastLoadedTodoIndex = JSON.parse(localStorage.getItem("todoIndex"));
    }
}