//import gsap from "gsap";

let player;
const viewLink = document.querySelector(".np-link");
document.addEventListener("DOMContentLoaded", () => {
  player = Plyr.setup(".plyr__video-embed");
  const plyrs = [...document.querySelectorAll(".plyr")];
  viewLink.addEventListener("click", () => {
    player[0].play();
    player.click();
  });
  /*
  plyrs.map((plyr) => {
    plyr.addEventListener("mouseenter", () => {
      //console.log(player[0].elements.buttons.play[0]);
      player[0].play();
      plyr.click();
    });
    
  });
  */
});

const links = [...document.querySelectorAll(".link-block")];
links.push(document.querySelector(".np-link"));

links.map((link) => {
  link.addEventListener("mouseenter", (e) => {
    gsap.fromTo(
      e.target.querySelector(".link-line"),
      {
        x: "-110%"
      },
      {
        x: "0%",
        duration: 0.5
      }
    );
  });

  link.addEventListener("mouseleave", (e) => {
    gsap.to(e.target.querySelector(".link-line"), {
      x: "0%",
      duration: 0.5
    });
  });
});

//inverting the menus
const menus = [...document.querySelectorAll(".light-bg")];
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".np-hero",
    start: "bottom 80%",
    end: "bottom 40%",
    onEnterBack: () => {
      menus.map((item) => {
        item.classList.add("light-bg");
      });
    },
    onLeave: () => {
      menus.map((item) => {
        item.classList.remove("light-bg");
      });
    },
    markers: false
  },

  defaults: { duration: 6, ease: "none" }
});

const signUpBtns = [
  ...[
    document.querySelector("#sign-up-1"),
    document.querySelector("#sign-up-2"),
    document.querySelector("#sign-up-3")
  ]
];

window.onload = function () {
  const modal = document.querySelector(".fd-modal");
  const closeBtn = document.querySelector(".fd-modal__close");
  const newsletter = document.querySelector(".newsletter-pop-up");

  console.log(modal, closeBtn, newsletter);

  modal.classList.remove("fd-is-open");

  signUpBtns.map((btn) => {
    btn.addEventListener("click", () => {
      newsletter.classList.add("open");
      modal.classList.add("fd-is-open");
    });
  });

  closeBtn.addEventListener("click", () => {
    newsletter.classList.remove("open");
    modal.classList.remove("fd-is-open");
  });
};
