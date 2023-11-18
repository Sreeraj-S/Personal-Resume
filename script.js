//Script to move navbar with page while scrolling
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navbar.classList.remove("active");
  });
});

//Script to Scroll Up using Button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Script To Pop in or reveal The elements of the website
window.addEventListener("scroll", reveal);

function reveal() {
  var rev = document.querySelectorAll(".reveal");

  for (var i = 0; i < rev.length; i++) {
    var winHeight = window.innerHeight;
    var revTop = rev[i].getBoundingClientRect().top;
    var revPoint = 50;

    if (revTop < winHeight - revPoint) {
      rev[i].classList.add("active");
    }
  }
}
