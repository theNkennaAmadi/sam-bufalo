//import gsap from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";

//inverting the menus
const menus = [...document.querySelectorAll(".menu-container")];
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sp-hero-img",
    start: "bottom 80%",
    end: "bottom 40%",
    onEnterBack: () => {
      menus.map((item) => {
        item.classList.add("menu-container");
      });
    },
    onLeave: () => {
      menus.map((item) => {
        item.classList.remove("menu-container");
      });
    },
    markers: false
  },

  defaults: { duration: 6, ease: "none" }
});

//scrolling
let mm = gsap.matchMedia();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sp-works-wrapper",
    start: "top 60%",
    end: "bottom 50%",
    scrub: 1,
    markers: false,
    onUpdate: (self) => {
      let progress = Math.round(self.progress * 100);
      console.log(progress);
      if (progress < 22) {
        gsap.to(".discover", { opacity: 1, duration: 1.5 });
      }
      if (progress === 22) {
        gsap.to(".discover", { opacity: 0, duration: 1.5 });
      }
      if (progress < 58) {
        gsap.to(".capture", { opacity: 1, duration: 1.5 });
      }
      if (progress === 58) {
        gsap.to(".capture", { opacity: 0, duration: 1.5 });
      }
    }
  },

  defaults: { duration: 6, ease: "none" }
});

mm.add("(min-width: 992px)", () => {
  tl2.fromTo(".sp-works", { x: "20rem" }, { x: "-60rem", y: "-55%" });
});

mm.add("(max-width: 991px) and (min-width: 768px) ", () => {
  tl2.fromTo(".sp-works", { x: "20rem" }, { x: "-55rem", y: "-55%" });
});

mm.add("(max-width: 767px) and (min-width: 480px)", () => {
  tl2.fromTo(".sp-works", { x: "20rem" }, { x: "-52rem", y: "-55%" });
});

mm.add("(max-width: 479px)", () => {
  tl2.fromTo(".sp-works", { x: "20rem" }, { x: "-49rem", y: "-55%" });
});

//faqs
const faqs = [...document.querySelectorAll(".sp-faq-content")];
const ans = [...document.querySelectorAll(".sp-faq-answer")];
const accordion = [...document.querySelectorAll(".accordion-vertical")];

let tl1 = gsap.timeline();
faqs.map((faq) => {
  faq.addEventListener("click", (e) => {
    let answer = faq.querySelector(".sp-faq-answer");
    let accord = faq.querySelector(".accordion-vertical");
    if (!faq.classList.contains("active")) {
      tl1.to(answer, {
        height: "auto"
      });
      tl1.to(
        accord,
        {
          scaleY: 0
        },
        "<"
      );
      faq.classList.add("active");
    } else {
      tl1.to(answer, {
        height: 0
      });
      tl1.to(
        accord,
        {
          scaleY: 1
        },
        "<"
      );
      faq.classList.remove("active");
    }
  });
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials-wrapper",
    start: "top top",
    end: "centre centre",
    scrub: 1,
    markers: false
  },

  defaults: { duration: 2, ease: "power3.inOut" }
});
