let navMenu = document.querySelector("#nav-menu");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", mobile);

function mobile() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", close));

function close() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

GitHubCalendar(".react-activity-calendar", "rsrajput03", { responsive: true });

document.getElementById("resume-button-2").onclick = () => {
  location.href = "\\Icons\\pdf\\Rohit-Rajput-Resume.pdf";
};
document.getElementById("resume-button-1").onclick = () => {
  location.href = "\\Icons\\pdf\\Rohit-Rajput-Resume.pdf";
};
