"use strict";
let inputName = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector("#result");
btn.addEventListener("click", function () {
  let user = inputName.value.trim();
  if (user === "") {
    alert("⚠️ Please enter a GitHub username");
  } else {
    console.log(user);
    getUSer(user);
  }
});

function getUSer(username) {
  result.innerHTML = `<div class="loader"></div>`;

  let fetchData = fetch(`https://api.github.com/users/${username}`);
  fetchData
    .then((res) => {
      if (!res.ok) {
        throw new Error("User not found ❌");
      }
      return res.json();
    })
    .then((data) => {
      result.innerHTML = `
                       <img src="${data.avatar_url}" alt="${data.login}" />
                       <h2>${data.name || data.login}  </h2>  
                        <p>${data.bio || "No bio available"} </p>
                        <p>Repos : ${data.public_repos}</p>
                        <p>Followers : ${data.followers} | Following : ${
        data.following
      }</p>
                        <a href="${
                          data.html_url
                        }" target="_blank">View Profile</a>

            `;
    })
    .catch((err) => {
      result.innerHTML = `<p class="error">${err.message}</p>`;
    });
}
