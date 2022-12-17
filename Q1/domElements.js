const form = document.querySelector("#task-form");
const tasksContainer = document.querySelector("#tasks-container");
const doingTasksContainer = document.querySelector("#doing-tasks-container");
const doneTasksContainer = document.querySelector("#done-tasks-container");
let tasks = [];

// Saved Tasks
function getTasksFromLocalStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("userTasks"));
  if (savedTasks) {
    tasks = savedTasks;
  }
}
getTasksFromLocalStorage();

export {
  form,
  tasksContainer,
  doingTasksContainer,
  doneTasksContainer,
  tasks,
};
