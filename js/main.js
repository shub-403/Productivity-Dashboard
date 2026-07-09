const sections = Array.from(document.querySelectorAll("section"));
const cards = document.querySelector(".cards-container");
const cardsDiv = document.querySelectorAll(".card");
const closeBtn = document.querySelectorAll(".close-btn");
const cardVideos = document.querySelectorAll(".card-video");
import { getData } from "./quote.js";

cardsDiv.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    e.target.children[0].play();

    card.addEventListener("mouseleave", (e) => {
      e.target.children[0].pause();
      e.target.children[0].currentTime = 0;
    });
  });
});

cards.addEventListener("click", (e) => {
  let clickedCard = e.target.parentElement.innerText;
  let sec = sections.find((section) => {
    return section.classList.contains(clickedCard);
  });
  if(sec){
    sec.classList.remove("absolute", "top-0", "right-0", "w-full", "h-full");
    sec.classList.add("hidden", "relative");
    sec.classList.remove("hidden", "relative");
    sec.classList.add("absolute", "top-0", "right-0", "w-full", "h-full");
  }

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.closest("section").classList.add("hidden");
    });
  });
  getData();
});
