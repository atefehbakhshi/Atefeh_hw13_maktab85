import { inputTitle, inputDescription, inputEndDate, tasks } from "./script.js";
import readList from "./read.js";

// Task
function taskBord(e) {
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
    inputTitle.value = selectedTask.title;
    inputDescription.value = selectedTask.description;
    inputEndDate.value = selectedTask.end;
    readList(tasks);
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }
  if (e.target.classList.contains("info")) {
    taskDescription.classList.toggle("display-none");
  }
}

// Doing
function doingBord(e) {
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
}

// Done
function doneBord(e) {
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
}

export { taskBord, doingBord, doneBord };
