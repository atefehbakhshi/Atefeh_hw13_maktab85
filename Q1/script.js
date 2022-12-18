import readList from "./read.js";
import createList from "./create.js";
import { taskBord, doingBord, doneBord } from "./transform.js";

// Form
const form = document.querySelector("#task-form");
const inputTitle=document.querySelector('#title')
const inputDescription=document.querySelector('#description')
const inputEndDate=document.querySelector('#endDate')
// Bords
const tasksContainer = document.querySelector("#tasks-container");
const doingTasksContainer = document.querySelector("#doing-tasks-container");
const doneTasksContainer = document.querySelector("#done-tasks-container");
let tasks = [];

export {
  form,
  inputTitle,
  inputDescription,
  inputEndDate,
  tasksContainer,
  doingTasksContainer,
  doneTasksContainer,
  tasks,
};

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
form.addEventListener("submit", createList);

// Transform
// 1. Task
tasksContainer.addEventListener("click", (e) => taskBord(e));
// 2. Doing
doingTasksContainer.addEventListener("click", (e) => doingBord(e));
// 3. Done
doneTasksContainer.addEventListener("click", (e) => doneBord(e));
