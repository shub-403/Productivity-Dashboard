const time = document.querySelector(".time");
const ampm = document.querySelector(".amPm");
const dayName = document.querySelector(".day");
const monthName = document.querySelector(".month");
const dateNum = document.querySelector(".date");
const year = document.querySelector(".year");
const nightVideo = document.querySelector(".nightVideo");
const dayVideo = document.querySelector(".dayVideo");

let hour12 = true;

function makeClock(n) {
  return String(n).padStart(2, "0");
}

function clock() {
  const date = new Date();

  let hour = date.getHours();  
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  year.textContent = date.getFullYear();

  dateNum.textContent = date.getDate();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "Febrary",
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

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  dayName.textContent = day;
  monthName.textContent = month;
  let period = "";

  if (hour12) {
    period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;    
  }

  if (period === "PM" && hour >= 7) {
    nightVideo.classList.remove("hidden");
    nightVideo.classList.add("block");
    dayVideo.classList.add("hidden");
    dayVideo.classList.remove("block");
  } else {
    nightVideo.classList.remove("block");
    nightVideo.classList.add("hidden");
    dayVideo.classList.add("block");
    dayVideo.classList.remove("hidden");
  }

  time.textContent = `${makeClock(hour)}:${makeClock(minutes)}:${makeClock(seconds)}`;
  ampm.textContent = period;
}

clock();
setInterval(clock, 1000);
