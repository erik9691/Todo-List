import "./style.css";
import { Start } from "./display.js";
import { CreateProject, CreateTodo, LoadFromStorage } from "./logic.js";

LoadFromStorage();
Start();