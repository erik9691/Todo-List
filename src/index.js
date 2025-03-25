import "./style.css";
import { Start } from "./display.js";
import { CreateProject, CreateTodo } from "./logic.js";

Start();

CreateProject("Gym");
CreateTodo("Pullups","Do 5 sets of 7 pullups",new Date("March 24, 2025 16:30:00"));
CreateTodo("Squats","Do 3 sets of 30 squats",new Date("March 26, 2025 12:00:00"));
CreateTodo("Pushups","Do 4 sets of 25 pushups",new Date("March 23, 2025 09:45:00"));
CreateTodo("Dips","Do 6 sets of 5 dips",new Date("March 28, 2025 18:00:00"));