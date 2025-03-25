export { CreateProject, CreateTodo, EditTodo, DeleteTodo, CompleteTodo, SortTodos };
import { LoadProjects, ReloadCurrentTodos, currentSort, currentSortDirection, currentTodoProject } from "./display.js";
export let todoProjects = [];

class Todo 
{
    static #lastindex = -1;
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

    static #lastindex = -1;
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