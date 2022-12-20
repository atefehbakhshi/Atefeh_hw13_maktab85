import {
  form,
  tasksContainer,
  doingTasksContainer,
  doneTasksContainer,
} from "./variables.js";
import readList from "./read.js";
import createList from "./create.js";
import { taskBord, doingBord, doneBord } from "./transform.js";

let tasks = [];

// Saved Tasks
function getTasksFromLocalStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("userTasks"));
  if (savedTasks) {
    tasks = savedTasks;
  }
}
getTasksFromLocalStorage();

// Read
readList(tasks);

// Create
form.addEventListener("submit", (e) => createList(e, tasks));

// Transform
// 1. Task
tasksContainer.addEventListener("click", (e) => taskBord(e, tasks));
// 2. Doing
doingTasksContainer.addEventListener("click", (e) => doingBord(e, tasks));
// 3. Done
doneTasksContainer.addEventListener("click", (e) => doneBord(e, tasks));