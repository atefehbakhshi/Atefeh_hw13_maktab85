import { tasksContainer } from "./variables.js";
import readList from "./read.js";

export default function createList(e,tasks) {
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
