"use strict";
let body = document.querySelector("body");
let buttonToggle = document.querySelector("#themeToggle");

let savedtheme = localStorage.getItem("themeName") || "dark";
body.className = savedtheme;
buttonToggle.checked = savedtheme === "light";
buttonToggle.addEventListener("change", function () {
  if (buttonToggle.checked) {
    body.className = "light";
    localStorage.setItem("themeName", "light");
  } else {
    body.className = "dark";
    localStorage.setItem("themeName", "dark");
  }
});
