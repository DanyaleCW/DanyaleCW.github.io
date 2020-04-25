

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

class HeaderTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
    <nav role="navigation" class="header">
      <div class="header-right">
        <a href="index.html">Home</a>
        <a class="active" href="about.html">About</a>
        <a href="work.html">Work</a>
        <!-- <a href="#contact">Contact</a> -->
      </div>
      <div class="logo">Danyale C.<br><span>Walker<span>
      </div>
    </nav>
    </div>`;
  }
}

customElements.define('header-template', HeaderTemplate);


class FooterTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <div>
      <p class="text-sm">SOCIAL MEDIA</p>
    </div>
    <div class="sm">
      <div class="github"><a  target="_blank" href="https://github.com/DanyaleCW">Github</a>
      </div>
      <div><a target="_blank" href="https://www.linkedin.com/in/danyalecwalker">Linkedin</a>
        </div>
      <div><a target="_blank" href="https://codepen.io/danyalecw">CodePen</a>
        </div>
      <div class="twitter"><a target="_blank" href="https://twitter.com/DanyaleCWalker">Twitter</a>
      </div>
  </div>

    <p class="footer-contact">CONTACT</p>
    <p class="footer-CTA">I would <span class="heart">  &#10084;  </span> to hear from you. If you have any questions or want to collaborate on a project, please feel free  to contact me. Let's make magic.</p>
    <p class="email"><a href="mailto:danyalecw@gmail.com">
      danyalecw@gmail.com</a></p>
    <p class="phone"><a href="tel:+347-566-0530">
        347-566-0530</a></p>
    <p class="footer-bottom">© 2020 Design. Code. Surf. Studios, L.L.C. Brooklyn, N.Y. <br> All rights reserved.</p>
  </footer>`;
  }
}

customElements.define('footer-template', FooterTemplate);

//PROJECTS

let icecream = document.getElementById("icecream");
icecream.addEventListener("click", function() {
  window.open("https://codepen.io/danyalecw/full/ZPEraK", "_blank")
});

// let present = document.getElementById("present");
// present.addEventListener("click", function() {
//   window.open("https://xd.adobe.com/view/346ccc60-7eed-4378-617a-fc2c6239bc93-425d/?fullscreen", "_blank")
// });

let port3 = document.getElementById("portfolio3");
portfolio3.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/Portfolio-V3/", "_blank")
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
