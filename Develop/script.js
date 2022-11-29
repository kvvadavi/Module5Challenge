// Store CSS details in variable
var pastTime = document.querySelector(".past")
var presentTime = document.querySelector(".present")
var futureTime = document.querySelector(".future")

// Store div parent element
var divEl = document.querySelector(".container-fluid")

// console.log(divEl.children[0].children[1]) //Text Area
// console.log(divEl.children[0].children[2]) //Button Area

var hour9 = divEl.children[0].children[1]
var hour10 = divEl.children[1].children[1]
var hour11 = divEl.children[2].children[1]
var hour12 = divEl.children[3].children[1]
var hour13 = divEl.children[4].children[1]
var hour14 = divEl.children[5].children[1]
var hour15 = divEl.children[6].children[1]
var hour16 = divEl.children[7].children[1]
var hour17 = divEl.children[8].children[1]

var hour9Btn  = divEl.children[0].children[2]
var hour10Btn  = divEl.children[1].children[2]
var hour11Btn = divEl.children[2].children[2]
var hour12Btn = divEl.children[3].children[2]
var hour13Btn = divEl.children[4].children[2]
var hour14Btn = divEl.children[5].children[2]
var hour15Btn = divEl.children[6].children[2]
var hour16Btn = divEl.children[7].children[2]
var hour17Btn = divEl.children[8].children[2]

// Load local storage items
hour9.innerHTML = localStorage.getItem("9-hour")
hour10.innerHTML = localStorage.getItem("10-hour")
hour11.innerHTML = localStorage.getItem("11-hour")
hour12.innerHTML = localStorage.getItem("12-hour")
hour13.innerHTML = localStorage.getItem("13-hour")
hour14.innerHTML = localStorage.getItem("14-hour")
hour15.innerHTML = localStorage.getItem("15-hour")
hour16.innerHTML = localStorage.getItem("16-hour")
hour17.innerHTML = localStorage.getItem("17-hour")

// Current Day, Date and Year
var time = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(time);

// Store current hour in variable
var currentHour = moment().hours()
// console.log(currentHour)
// var pastHour = moment().hours(currentHour - 1).format("H")
// console.log(pastHour)
// var futureHour = moment().hours(currentHour + 1).format("H")
// console.log(futureHour)


// Initialize the varibles to run in FOR loop and set color based on time.
var fTime = null
var elID
var startTime = 9
var endTime = 17


for (var i = 9 ; i <= endTime; i++) {
  if (i < currentHour) {
    elID = 'hour-' + i
    fTime = document.getElementById(elID)
    fTime.className = "row time-block past"
  } else if (i == currentHour) {
    elID = 'hour-' + i
    fTime = document.getElementById(elID)
    fTime.className = "row time-block present"
  } else if (i > currentHour) {
    elID = 'hour-' + i
    fTime = document.getElementById(elID)
    fTime.className = "row time-block future"
  }
}



hour9Btn.addEventListener("click", am9Func);
function am9Func() {
  const value = hour9.value;
  localStorage.setItem("9-hour", value);
}

hour10Btn.addEventListener("click", am10Func);
function am10Func() {
  const value = hour10.value;
  localStorage.setItem("10-hour", value);
}

hour11Btn.addEventListener("click", am11Func);
function am11Func() {
  const value = hour11.value;
  localStorage.setItem("11-hour", value);
}

hour12Btn.addEventListener("click", pm12Func);
function pm12Func() {
  const value = hour12.value;
  localStorage.setItem("12-hour", value);
}

hour13Btn.addEventListener("click", pm13Func);
function pm13Func() {
  const value = hour13.value;
  localStorage.setItem("13-hour", value);
}

hour14Btn.addEventListener("click", pm14Func);
function pm14Func() {
  const value = hour14.value;
  localStorage.setItem("14-hour", value);
}

hour15Btn.addEventListener("click", pm15Func);
function pm15Func() {
  const value = hour15.value;
  localStorage.setItem("15-hour", value);
}

hour16Btn.addEventListener("click", pm16Func);
function pm16Func() {
  const value = hour16.value;
  localStorage.setItem("16-hour", value);
}

hour17Btn.addEventListener("click", pm17Func);
function pm17Func() {
  const value = hour17.value;
  localStorage.setItem("17-hour", value);
}