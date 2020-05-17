

// let about = document.getElementById("about-nav");
// let design = document.getElementById("design-nav");
// let logo = document.getElementById("logo-nav");
// let project = document.getElementById("project-nav");
// let more = document.getElementById("more-nav");

// about.addEventListener("click", function() {
//   window.location.href = "#about";
// });
//
// project.addEventListener("click", function() {
//   window.location.href = "#project";
// });
// more.addEventListener("click", function() {
//   window.location.href = "#more"
// });
// design.addEventListener("click", function() {
//   window.location.href = "design.html";
// });
// logo.addEventListener("click", function() {
//   window.location.href = "logo.html";
// });

// class HeaderTemplate extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `<div>
//     <nav role="navigation" class="header">
//       <div class="header-right">
//         <a href="index.html">Home</a>
//         <a class="active" href="about.html">About</a>
//         <a href="work.html">Work</a>
//         <!-- <a href="#contact">Contact</a> -->
//       </div>
//       <div class="logo">Danyale C.<br><span>Walker<span>
//       </div>
//     </nav>
//     </div>`;
//   }
// }


// Slideshow
// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }
//
// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }
//
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demodots");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " w3-white";
// }



class HeaderTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg header">
      <div class="navbar-brand logo">Danyale C.<br><span>Walker<span>
      </div>
      <button style="color:white;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">MENU</span>
      </button>

      <div class="collapse navbar-collapse justify-content-end header header-right" id="navbarSupportedContent" style="color: white">
        <ul class="nav justify-content-end navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="index0.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="work.html">Work</a>
      </li>
    </ul>
      </div>
    </nav>`;
  }
}

customElements.define('header-template', HeaderTemplate);


class FooterTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <hr>
    <footer>
      <div class="w3-cell-row">
        <div class="w3-container w3-col m5 w3-cell-top">
          <p class="contact">CONTACT</p>
          <p class="CTA">Please contact me if you would like to create a website that converts clicks to leads and increases you bottom line.</p>
          <p>Let's make something beautiful & profitable!!!</p>
        </div>

        <div class="w3-container w3-col m5  w3-cell-top">
          <div class="email"><a href="mailto:danyalecw@gmail.com">
            danyalecw@gmail.com</a></div>
            <div class="github"><a target="_blank" href="https://github.com/DanyaleCW">GitHub</a>
            </div>
              <div class="linkedin"><a target="_blank" href="https://www.linkedin.com/in/danyalecwalker">Linkedin</a>
                </div>
              <div class="codepen"><a target="_blank" href="https://codepen.io/danyalecw">CodePen</a>
                </div>
              <div class="twitter"><a target="_blank" href="https://twitter.com/DanyaleCWalker">Twitter</a>
              </div>
        </div>

      <div class="w3-container w3-col m2 w3-cell-top">
        <div class="links-sm">


          <div class="work"><a target="_blank" href="work.hmtl">Work</a>
          </div>
          <div class="about"><a target="_blank" href="about.html">About</a>
      </div>
    </div>
    </div>
    <div class="w3-cell-row">
      <div class="w3-container w3-col m5 w3-cell-top">
        <p class="copyright">© 2020 Design. Code. Surf. Studios, L.L.C. Brooklyn, N.Y. <br> All rights reserved.
      </div>
      <div class="w3-container w3-col  m5 w3-cell-top">
        <p class="copyright">Designed and Coded by Danyale C. Walker
      </div>
      <div class="w3-container w3-col m2 w3-cell-top">
        <p class="copyright">Made with <span class="heart">  &#10084; </span>in Brooklyn
          </div>
    </div>
    </footer>`;
  }
}

customElements.define('footer-template', FooterTemplate);

//PROJECTS

let present = document.getElementById("present");
present.addEventListener("click", function() {
  window.open("https://xd.adobe.com/view/346ccc60-7eed-4378-617a-fc2c6239bc93-425d/?fullscreen", "_blank")
});

let icecream = document.getElementById("icecream");
icecream.addEventListener("click", function() {
  window.open("https://codepen.io/danyalecw/full/ZPEraK", "_blank")
});

let port3 = document.getElementById("portfolio3");
portfolio3.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/Portfolio-V3/", "_blank")
});

let choco = document.getElementById("chocolate");
chocolate.addEventListener("click", function() {
  window.open("https://artboard.studio/present/5ebb22447b71d7001897ec6a/5eab867d49f5b20018d33d86", "_blank")
});

let port2 = document.getElementById("portfolio2");
portfolio2.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/Portfolio-V2/", "_blank")
});

let port1 = document.getElementById("portfolio1");
portfolio1.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/First-Portfolio/", "_blank")
});

let bubbles = document.getElementById("bubbles");
bubbles.addEventListener("click", function() {
  window.open("https://codepen.io/danyalecw/full/VRmBjv", "_blank")
});

let surf = document.getElementById("surf");
surf.addEventListener("click", function() {
  window.open("https://xd.adobe.com/view/d600ac6c-3391-4676-7a54-beebee25e2e9-a031/?fullscreen", "_blank")
});

let wine = document.getElementById("wine");
wine.addEventListener("click", function() {
  window.open("https://spark.adobe.com/post/rgxNwKN6lnBYP/", "_blank")
});

// let women = document.getElementById("women");
// women.addEventListener("click", function() {
//   window.open("https://xd.adobe.com/view/480faa9c-a432-458c-6ea4-7c85f7632ba8-3e3e/?fullscreen", "_blank")
// });


//
// let surf = document.getElementById("surf");
// surf.addEventListener("click", function() {
//   window.open("https://walker-rumblr.herokuapp.com/", "_blank")
// });
//
// let wanda = document.getElementById('wanda');
// wanda.addEventListener("click", function() {
//   window.open("https://wandas-panel.herokuapp.com/admins/sign_in", "_blank")
// });
//
// let out = document.getElementById('out');
// out.addEventListener("click", function() {
//   window.open("https://out-of-office-nyc.herokuapp.com/", "_blank")
// });
