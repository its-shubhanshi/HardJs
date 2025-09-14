"use strict";
let textMsg = document.querySelector("#msg");
let notes = document.querySelector("#notes");
let saveBtn = document.querySelector("#saveBtn");
let clearBtn = document.querySelector("#clearBtn");
saveBtn.addEventListener("click", saveNote);
clearBtn.addEventListener("click", clearNote);

let noteSaved = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  notes.innerHTML = "";
  noteSaved.forEach((element, index) => {
    console.log(element);
    let p = document.createElement("p");
    let span = document.createElement("span");
    let textNode = document.createTextNode(element);
    p.appendChild(textNode);

    //edit btn
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      editNote(index);
    });
    span.appendChild(editBtn);

    //delete btn
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      deleteNote(index);
    });
    span.appendChild(delBtn);
    p.appendChild(span);
    notes.appendChild(p);
  });
}

let editIndex = null;
function saveNote() {
  let note = textMsg.value.trim();
  if (note !== "") {
    if (editIndex !== null) {
      noteSaved[editIndex] = note;
      editIndex = null;
    } else {
      noteSaved.push(note);
    }

    localStorage.setItem("notes", JSON.stringify(noteSaved));
    renderNotes();
    textMsg.value = "";
  }
}
// delete function
function deleteNote(index) {
  noteSaved.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteSaved));
  renderNotes();
}

// edit button

function editNote(index) {
  textMsg.value = noteSaved[index];
  editIndex = index;
}
renderNotes();

function clearNote() {
  noteSaved = [];
  localStorage.removeItem("notes");
  renderNotes();
}
