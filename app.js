const scrollNews = document.querySelectorAll(".sc-news");

for (let i = 0; i < scrollNews.length; i++) {
  scrollNews[i].classList.add("active");
}

//OPENING AND CLOSING OF SIDE BAR
const aside = document.querySelector(".nav-container");
const navBtn = document.querySelector("#nav-toggle-btn");
// const dots = document.querySelector("#home-dots");

navBtn.addEventListener("click", () => {
  document.getElementById("home-dots").style.display = "none";
  if (aside.classList.contains("nav-container")) {
    aside.classList.toggle("nav-container-show");
  }
});
