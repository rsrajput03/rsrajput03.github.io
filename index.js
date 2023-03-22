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

// document.getElementById("resume-button-2").onclick = () => {
//   window.open("\\Icons\\pdf\\Rohit-Rajput-Resume.pdf",'_blank')
// };

document
  .getElementById("resume-button-2")
  .addEventListener("click", function () {
    window.open("\\Icons\\pdf\\Rohit-Rajput-Resume.pdf", "_blank");
    event.preventDefault();
    downloadPDF("\\Icons\\pdf\\Rohit-Rajput-Resume.pdf");
  });

function downloadPDF(url) {
  var link = document.createElement("a");
  link.href = url;
  link.download = "Rohit_Rajput_Resume.pdf";
  link.dispatchEvent(new MouseEvent("click"));
}
