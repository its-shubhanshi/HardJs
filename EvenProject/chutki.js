"use strict";

let btn = document.querySelector("button");
let main = document.querySelector("#main");
let srcArray = ["bheem.png", "bheem2.png", "chutki1.png", "bheemandchutki.png"];
btn.addEventListener("click", function () {
  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let rot = Math.random() * 360;
  console.log(x, y, rot);

  let img = document.createElement("img");
  let randomImg = Math.floor(Math.random() * srcArray.length);
  img.setAttribute("src", srcArray[randomImg]);
  img.style.position = "absolute";
  setTimeout(() => {
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.left = x + "%";
    img.style.top = y + "%";
    img.style.opacity = "1";
    img.style.transform = `rotate(${rot}deg) scale(0.95)`;
  }, 50);

  main.appendChild(img);
});
