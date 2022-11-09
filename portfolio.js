//import gsap from "gsap";

let projects = [...document.querySelectorAll(".pp-img")];

projects.map((project) => {
  let tl = gsap.timeline({ paused: true });
  tl.to(project.querySelectorAll(".pp-other-cc-item"), {
    opacity: 1,
    ease: "power3.inOut",
    stagger: { each: 0.2 },
    onComplete: () => {
      tl.reverse();
    }
  });
  //add the event listener
  project.addEventListener("mouseenter", (e) => {
    tl.restart();
  });
  project.addEventListener("mouseleave", (e) => {
    //tl.reverse();
  });
});
