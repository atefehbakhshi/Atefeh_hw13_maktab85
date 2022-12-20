// Form
const form = document.querySelector("#task-form");
const inputTitle=document.querySelector('#title')
const inputDescription=document.querySelector('#description')
const inputEndDate=document.querySelector('#endDate')
// Bords
const tasksContainer = document.querySelector("#tasks-container");
const doingTasksContainer = document.querySelector("#doing-tasks-container");
const doneTasksContainer = document.querySelector("#done-tasks-container");

export {
  form,
  inputTitle,
  inputDescription,
  inputEndDate,
  tasksContainer,
  doingTasksContainer,
  doneTasksContainer,
};