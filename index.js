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
  window.open("\\Icons\\pdf\\Rohit_Rajput_Resume.pdf",'_blank')
};



