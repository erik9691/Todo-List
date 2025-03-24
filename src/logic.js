export {Todo, Project};

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