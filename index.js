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


let resume1 = document.getElementById("resume-link-1")
resume1.onclick =()=>{
    window.open("https://drive.google.com/file/d/1OuJwvvtVAUcXrGb24_iYCqOWX3Dvr9l5/view")
}

let resume2 = document.getElementById("resume-button-2")
resume2.onclick =()=>{
    window.open("https://drive.google.com/file/d/1OuJwvvtVAUcXrGb24_iYCqOWX3Dvr9l5/view")
}




