// var intViewportHeight = window.innerHeight;

let about = document.getElementById("about-nav");
let design = document.getElementById("design-nav");
let logo = document.getElementById("logo-nav");
let project = document.getElementById("project-nav");
let more = document.getElementById("more-nav");

about.addEventListener("click", function() {
  window.location.href = "#about";
});

project.addEventListener("click", function() {
  window.location.href = "#project";
});
more.addEventListener("click", function() {
  window.location.href = "#more"
});
// design.addEventListener("click", function() {
//   window.location.href = "design.html";
// });
// logo.addEventListener("click", function() {
//   window.location.href = "logo.html";
// });

//PROJECTS

let women = document.getElementById("women");
women.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/Herstorical-Women/main.html", "_blank")
});

let port2 = document.getElementById("portfolio2");
portfolio2.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/Portfolio-V2/", "_blank")
});

let port1 = document.getElementById("portfolio1");
portfolio1.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/First-Portfolio/", "_blank")
});

let icecream = document.getElementById("icecream");
icecream.addEventListener("click", function() {
  window.open("https://codepen.io/danyalecw/full/ZPEraK", "_blank")
});

let bubbles = document.getElementById("bubbles");
bubbles.addEventListener("click", function() {
  window.open("https://codepen.io/danyalecw/full/VRmBjv", "_blank")
});

let surf = document.getElementById("surf");
surf.addEventListener("click", function() {
  window.open("https://walker-rumblr.herokuapp.com/", "_blank")
});

let wanda = document.getElementById('wanda');
wanda.addEventListener("click", function() {
  window.open("https://wandas-panel.herokuapp.com/admins/sign_in", "_blank")
});

let out = document.getElementById('out');
out.addEventListener("click", function() {
  window.open("https://out-of-office-nyc.herokuapp.com/", "_blank")
});

//More
