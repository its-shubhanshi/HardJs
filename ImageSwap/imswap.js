"use strict";

let img = document.querySelectorAll("img");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let btn = document.querySelector("button");
for (let i = 0; i < img.length; i++) {
  img[i].style.width = "250px";
  img[i].style.height = "250px";
  img[i].style.border = "4px solid #3e0e0eff";
}

btn.addEventListener("click", function () {
  setTimeout(function () {
    let img1Src = img1.getAttribute("src");
    let img2Src = img2.getAttribute("src");
    img1.setAttribute("src", img2Src);
    img2.setAttribute("src", img1Src);
  }, 300);
});
