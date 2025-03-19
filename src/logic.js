export {Todo, Project};

class Todo 
{
    constructor(title, description, dueDate, priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project 
{
    todos = [];
    static #lastindex = -1;
    index;

    constructor(title)
    {
        this.title = title;
        this.index = ++Project.#lastindex;
    }
}