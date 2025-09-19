"use strict";

function openFeatures() {
  let allElems = document.querySelectorAll(".elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let allfullElemBackBtn = document.querySelectorAll(".back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      //console.log(elem.id);
      //console.log(fullElemPage[elem.id]);
      fullElemPage[elem.id].style.display = "block";
    });
  });
  allfullElemBackBtn.forEach(function (back) {
    //console.log(allfullElemBackBtn[back]);
    back.addEventListener("click", function () {
      //console.log(back.id);
      fullElemPage[back.id].style.display = "none";
    });
  });
}
openFeatures();

function todoList() {
  let currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("task list is empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");

    var sum = "";
    currentTask.forEach(function (elem, idx) {
      //console.log(elem);
      sum =
        sum +
        `<div class="task">
              <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
              <button id=${idx}>Mark as Completed</button>
            </div>`;
    });
    allTask.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    let markCompletedBtn = document.querySelectorAll(".task button");
    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        //console.log(currentTask[btn.id]);
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  let form = document.querySelector(".addTask form");
  let taskinput = document.querySelector(".addTask form #task-input");
  let tasktextarea = document.querySelector(".addTask form textarea");
  let taskCheckBox = document.querySelector("#check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let todoInput = taskinput.value.trim();
    let todotextArea = tasktextarea.value.trim();
    let todocheck = taskCheckBox.checked;
    currentTask.push({
      task: todoInput,
      details: todotextArea,
      imp: todocheck,
    });
    console.log(currentTask);
    renderTask();
    taskinput.value = "";
    tasktextarea.value = "";
    todocheck = false;
  });
}
todoList();

function dailyPlan() {
  var hours = Array.from({ length: 18 }, function (_, idx) {
    return `${6 + idx}:00-${7 + idx}:00`;
  });
  //console.log(hours);

  let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  let wholeDaySum = "";

  hours.forEach(function (elem, idx) {
    let saveDataInput = dayPlanData[idx] || "";

    wholeDaySum =
      wholeDaySum +
      ` <div class="day-planner-time">
            <p>${elem}</p>
            <input id=${idx} type="text" placeholder="..." value="${saveDataInput}">
          </div>`;

    //console.log(wholeDaySum);
  });

  let dayPlanner = document.querySelector(".day-planner");
  dayPlanner.innerHTML = wholeDaySum;

  let dayPlannerInput = document.querySelectorAll(".day-planner input");
  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      console.log(elem.value);
      dayPlanData[elem.id] = elem.value;

      console.log(dayPlanData);
      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}
dailyPlan();

function motivationalQuote() {
  let motivationalQuoteContent = document.querySelector(".motivation-2 h1 ");
  let motivationAuthor = document.querySelector(".motivation-3 h2");
  async function fetchQuote() {
    try {
      let response = await fetch("https://quotes-api-self.vercel.app/quote");
      let data = await response.json();
      console.log(data);

      motivationalQuoteContent.innerHTML = data.quote;
      motivationAuthor.innerHTML = data.author;
    } catch (err) {
      console.log("error fetching quote :", err);
    }
  }
  fetchQuote();
}
motivationalQuote();

function pomodoroTimer() {
  let timer = document.querySelector(".pomo-timer h1");
  let startBtn = document.querySelector(".pomo-timer .start-timer");
  let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
  let resetBtn = document.querySelector(".pomo-timer .reset-timer");
  let session = document.querySelector(".pomodoro-fullpage .session");
  let isWorkSession = true;
  let totalSeconds = 25 * 60;
  let timerInterval = null;
  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${String(minutes).padStart("2", "0")}:${String(
      seconds
    ).padStart("2", "0")}`;
  }
  function startTimer() {
    clearInterval(timerInterval);
    if (isWorkSession) {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = false;
          clearInterval(timerInterval);
          timer.innerHTML = "05:00";
          session.innerHTML = "Take a Break";
          session.style.backgroundColor = "var(--blue)";
          totalSeconds = 5 * 60;
        }
      }, 1);
    } else {
      timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = true;
          clearInterval(timerInterval);
          timer.innerHTML = "25:00";
          session.innerHTML = "Work Session";
          session.style.backgroundColor = "var(--green)";
          totalSeconds = 25 * 60;
        }
      }, 10);
    }
  }
  function pauseTimer() {
    console.log("pause");
    clearInterval(timerInterval);
  }
  function resetTimer() {
    console.log("reset");

    totalSeconds = 25 * 60;
    clearInterval(timerInterval);
    // console.log(timerInterval);

    updateTimer();
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

pomodoroTimer();
