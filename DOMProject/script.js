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

function weatherFunctionality() {
  let apikey = "8e42a5abcf7148c184c151333233004";
  let city = "Lucknow";

  let header1Time = document.querySelector(".header1 h1");
  let header1Date = document.querySelector(".header1 h2");
  let header2Temp = document.querySelector(".header2 h2");
  let header2Condition = document.querySelector(".header2 h4");
  let precipitation = document.querySelector(".header2 .precipitration");
  let humidity = document.querySelector(".header2 .humidity");
  let wind = document.querySelector(".header2 .wind");

  let data = null;
  async function weatherAPICall() {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`
    );
    data = await response.json();

    console.log(data);

    header2Temp.innerHTML = `${data.current.temp_c}°C`;
    header2Condition.innerHTML = `${data.current.condition.text}`;
    wind.innerHTML = `Wind : ${data.current.wind_kph}%`;
    humidity.innerHTML = `Humidity : ${data.current.humidity}`;
    precipitation.innerHTML = `Heat Index : ${data.current.heatindex_c}%`;
  }
  weatherAPICall();

  function timeDate() {
    const totalDaysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "WednesDay",
      "ThursDay",
      "Friday",
      "SaturDay",
    ];
    const monthsNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = new Date();

    let dayofWeek = totalDaysOfWeek[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let tarik = date.getDate();
    let month = monthsNames[date.getMonth()];
    let year = date.getFullYear();

    header1Date.innerHTML = `${tarik} ${month}, ${year}`;
    if (hours > 12) {
      header1Time.innerHTML = `${dayofWeek}, ${String(hours - 12).padStart(
        "2",
        "0"
      )}:${String(seconds).padStart("2", "0")} PM `;
    } else {
      header1Time.innerHTML = `${dayofWeek}, ${String(hours).padStart(
        "2",
        "0"
      )}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart(
        "2",
        "0"
      )} AM`;
    }
  }
  setInterval(() => {
    timeDate();
  }, 1000);
}

weatherFunctionality();

function changeTheme() {
  let theme = document.querySelector(".theme");
  let rootElement = document.documentElement;
  let flag = 0;
  theme.addEventListener("click", function () {
    console.log(flag);

    if (flag == 0) {
      rootElement.style.setProperty("--pri", "#1f1e1dff");
      rootElement.style.setProperty("--sec", "#222831");
      rootElement.style.setProperty("--tri1", "#948979");
      rootElement.style.setProperty("--tri2", "#a8abb0ff");

      flag = 1;
    } else if (flag == 1) {
      rootElement.style.setProperty("--pri", "#F1EFEC");
      rootElement.style.setProperty("--sec", "#030303");
      rootElement.style.setProperty("--tri1", "#D4C9BE");
      rootElement.style.setProperty("--tri2", "#123458");
      flag = 2;
    } else if (flag == 2) {
      rootElement.style.setProperty("--pri", "#00215e");
      rootElement.style.setProperty("--sec", " #2c4e80");
      rootElement.style.setProperty("--tri1", "#481402");
      rootElement.style.setProperty("--tri2", "#ffc55a");
      flag = 0;
    }
  });
}
changeTheme();

function dailyGoals() {
  let currentGoals = [];

  if (localStorage.getItem("currentGoals")) {
    currentGoals = JSON.parse(localStorage.getItem("currentGoals"));
  } else {
    console.log("goals list is empty");
  }

  function renderGoals() {
    let allGoals = document.querySelector(".allGoals");

    var sum = "";
    currentGoals.forEach(function (elem, idx) {
      //console.log(elem);
      sum =
        sum +
        `<div class="goals">
              <h5>${elem.goal} <span class=${elem.imp}>imp</span></h5>
              <p>${elem.details}</p>
              <button id=${idx}><i class="ri-chat-check-line"></i></button>
            </div>`;
    });
    allGoals.innerHTML = sum;
    localStorage.setItem("currentGoals", JSON.stringify(currentGoals));

    let markCompletedBtn = document.querySelectorAll(".goals button");
    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        //console.log(currentTask[btn.id]);
        currentGoals.splice(btn.id, 1);
        renderGoals();
      });
    });
  }
  renderGoals();

  let form = document.querySelector(".addGoals form");
  let goalinput = document.querySelector(".addGoals form #goals-input");
  let goaltextarea = document.querySelector(".addGoals form textarea");
  let goalCheckBox = document.querySelector("#check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let goalsInput = goalinput.value.trim();
    let goalstextArea = goaltextarea.value.trim();
    let goalscheck = goalCheckBox.checked;
    currentGoals.push({
      goal: goalsInput,
      details: goalstextArea,
      imp: goalscheck,
    });
    console.log(currentGoals);
    renderGoals();
    goalinput.value = "";
    goaltextarea.value = "";
    goalscheck = false;
  });
}

dailyGoals();
