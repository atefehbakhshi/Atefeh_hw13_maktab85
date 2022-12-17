"use strict";
import {
  tasksContainer,
  doingTasksContainer,
  doneTasksContainer,
  tasks,
  form,
} from "./domElements.js";
import readList from "./read.js";
import createList from "./create.js";
import { taskBord, doingBord, doneBord } from "./transform.js";

// Read
readList(tasks);

// Create
form.addEventListener("submit", createList);

// Edit
// 1. Task
tasksContainer.addEventListener("click", (e) => taskBord(e));
// 2. Doing
doingTasksContainer.addEventListener("click", (e) => doingBord(e));
// 3. Done
doneTasksContainer.addEventListener("click", (e) => doneBord(e));
