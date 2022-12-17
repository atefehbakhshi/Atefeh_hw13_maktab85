import {
  tasksContainer,
  doingTasksContainer,
  doneTasksContainer,
} from "./domElements.js";

export default function readList(usertask) {
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
