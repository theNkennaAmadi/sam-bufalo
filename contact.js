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
