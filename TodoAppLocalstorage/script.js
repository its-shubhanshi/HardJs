"use strict";
let input = document.querySelector("input");
let addBtn = document.querySelector("#addBtn");
let taskShow = document.querySelector(".taskShow");
let tasks = JSON.parse(localStorage.getItem("saveTask")) || [];
console.log(tasks);

function renderTaskFn() {
  taskShow.innerHTML = "";
  let ul = document.createElement("ul");
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = `${task}`;
    ul.appendChild(li);
  });
  taskShow.appendChild(ul);
}
renderTaskFn();

addBtn.addEventListener("click", function () {
  let newTask = input.value.trim();
  if (newTask === "") {
    alert("Please add Task");
    return;
  }
  tasks.push(newTask);
  localStorage.setItem("saveTask", JSON.stringify(tasks));
  renderTaskFn();
  input.value = "";
  input.focus();
});
