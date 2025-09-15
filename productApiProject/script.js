"use strict";
let btn = document.querySelector("button");
let productList = document.querySelector("#productList");
let errorMsg = document.querySelector("#error");

btn.addEventListener("click", function () {
  console.log("get ");
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        //console.log(element);

        const card = document.createElement("div");
        card.classList.add("card");
        console.log(product);
        card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>Title : ${product.title}</h3>
                <p>Price : ${product.price}</p>
                <h4>Rate : ${product.rating.rate}</h4>
                <p class="description">Description : ${product.description}</p>
                <span class="read-more">Read More</span>
                `;

        const desc = card.querySelector(".description");
        const readbtn = card.querySelector(".read-more");

        readbtn.addEventListener("click", () => {
          desc.classList.toggle("expanded");
          readbtn.textContent = desc.classList.contains("expanded")
            ? "Read Less"
            : "Read More";
        });
        productList.appendChild(card);
      });
    })
    .catch((error) => {
      errorMsg.textContent =
        "⚠️ Failed to load products. Please try again later.";
      console.error(error);
    });
});
