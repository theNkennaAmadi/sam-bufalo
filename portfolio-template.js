//import gsap from "gsap";

//import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//const images = [...document.querySelectorAll("img")];

//console.log(images);

const interObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        //console.log(entry.target);
        gsap.fromTo(
          entry.target,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut"
          }
        );
      }
    });
  },
  {
    threshold: 0.5
  }
);

images.forEach((image, index) => {
  image.section_index = index;
  interObserver.observe(image);
});

//const hero = document.querySelector(".ppt-hero");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ppt-hero.vertical",
    //markers: true,
    scrub: true,
    start: "top top",
    end: "bottom 80%"
  }
});

tl.to(".ppt-info-wrapper", {
  opacity: 0,
  duration: 0.3,
  ease: "power3.inOut"
});

tl.to(
  ".ppt-hero-img1",
  {
    height: "100%",
    ease: "power3.inOut"
  },
  "<"
);

tl.to(
  ".ppt-hero-img2",
  {
    height: "100%",
    opacity: 0,
    display: "none",
    ease: "power3.inOut"
  },
  "<"
);

/*
tl.to(
  ".ppt-other-img-cc-list-wrapper",
  {
    y: "-2.5%",
    ease: "power1.inOut"
  },
  "<"
);
*/

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ppt-hero.horizontal",
    //markers: true,
    scrub: true,
    start: "top top",
    end: "bottom 80%"
  }
});

tl2.to(".ppt-info-wrapper", {
  opacity: 0,
  duration: 0.3,
  ease: "power3.inOut"
});

tl2.to(
  ".ppt-hero-img1",
  {
    height: "100%",
    ease: "power3.inOut"
  },
  "<"
);

tl2.to(
  ".ppt-hero-img2",
  {
    height: "100%",
    opacity: 0,
    display: "none",
    ease: "power3.inOut"
  },
  "<"
);

/*
tl2.to(
  ".ppt-other-img-cc-list-wrapper",
  {
    y: "-2.5%",
    ease: "power1.inOut"
  },
  "<"
);
*/
