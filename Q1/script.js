"use strict";
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

// Create task
function createList(e) {
  e.preventDefault();
  const newList = gatherDate(e);
  tasks.push(newList);
  localStorage.setItem("userTasks", JSON.stringify(tasks));
}

function gatherDate(e) {
  const { title, description, endDate } = e.target;
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const createdDate = `${year}-${month + 1}-${day}`;

  return {
    title: title.value,
    description: description.value,
    star: createdDate,
    end: endDate.value,
    status: "task",
  };
}
// Read
function readList(usertask) {
  usertask.forEach((item) => {
    const html = `
    <div class="user-task">
        <h4>${item.title}</h4>
        <p class="start-date">${item.start}</p>
        <p class="end-date">${item.end}</p>
        <div class="action-buttons">
           <button>
                <span class="material-symbols-outlined"> remove </span>
            </button>
            <button>
                <span class="material-symbols-outlined"> info </span>
            </button>
           <button>
                <span class="material-symbols-outlined"> done </span>
           </button>
        </div>
    </div>
`;
    if (item.status === "task") {
      tasksContainer.insertAdjacentHTML("beforeend", html);
    }
  });
}
readList(tasks);

// Submit form
form.addEventListener("submit", createList);
