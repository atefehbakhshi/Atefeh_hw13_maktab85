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
  tasksContainer.innerHTML = "";
  readList(tasks);
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
    start: createdDate,
    end: endDate.value,
    status: "task",
    id: new Date().getTime(),
  };
}
// Read
function readList(usertask) {
  tasksContainer.innerHTML = "";
  doingTasksContainer.innerHTML = "";
  doneTasksContainer.innerHTML = "";
  usertask.forEach((item) => {
    const html = `
    <div class="user-task" id="${item.id}">
        <h4>${item.title}</h4>
        <p class="start-date">start: ${item.start}</p>
        <p class="end-date">end: ${item.end}</p>
        <p class="task-description display-none"> ${item.description}</p>
        <div class="action-buttons">
           <button>
                <span class="material-symbols-outlined remove"> remove </span>
            </button>
            <button>
                <span class="material-symbols-outlined info"> info </span>
            </button>
           <button >
                <span class="material-symbols-outlined done" > done </span>
           </button>
        </div>
    </div>
`;
    if (item.status === "task") {
      tasksContainer.insertAdjacentHTML("beforeend", html);
    }
    if (item.status === "doing") {
      doingTasksContainer.insertAdjacentHTML("beforeend", html);
    }
    if (item.status === "done") {
      doneTasksContainer.insertAdjacentHTML("beforeend", html);
    }
  });
}
readList(tasks);

// Edit
// Task
tasksContainer.addEventListener("click", (e) => {
  const taskId = e.composedPath()[3].id;
  const taskDescription = e.composedPath()[2].previousElementSibling;
  const selectedTask = tasks.find((item) => item.id === Number(taskId));

  if (e.target.classList.contains("done")) {
    selectedTask.status = "doing";
    readList(tasks);
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }
  if (e.target.classList.contains("remove")) {
    tasks.splice(tasks.indexOf(selectedTask), 1);
    readList(tasks);
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }
  if (e.target.classList.contains("info")) {
    taskDescription.classList.toggle("display-none");
  }
});
// Doing
doingTasksContainer.addEventListener("click", (e) => {
  const taskId = e.composedPath()[3].id;
  const taskDescription = e.composedPath()[2].previousElementSibling;
  const selectedTask = tasks.find((item) => item.id === Number(taskId));

  if (e.target.classList.contains("done")) {
    selectedTask.status = "done";
    readList(tasks);
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }
  if (e.target.classList.contains("remove")) {
    selectedTask.status = "task";
    readList(tasks);
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }
  if (e.target.classList.contains("info")) {
    taskDescription.classList.toggle("display-none");
  }
});
// Done
doneTasksContainer.addEventListener("click", (e) => {
  const taskId = e.composedPath()[3].id;
  const taskDescription = e.composedPath()[2].previousElementSibling;
  const selectedTask = tasks.find((item) => item.id === Number(taskId));

  if (e.target.classList.contains("done")) {
    tasks.splice(tasks.indexOf(selectedTask), 1);
    readList(tasks);
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }
  if (e.target.classList.contains("remove")) {
    selectedTask.status = "doing";
    readList(tasks);
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }
  if (e.target.classList.contains("info")) {
    taskDescription.classList.toggle("display-none");
  }
});

// Submit form
form.addEventListener("submit", createList);
