gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const heroHeaderText = new SplitText(".hero-header", { types: "chars" }).chars;
const momentsHeaderText = new SplitText(".h2-large.moments-header", {
  types: "chars"
}).chars;
const momentsBodyText = new SplitText(".hp-moments-text", {
  types: "lines"
}).lines;

window.onload = function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    document.querySelector(".preloader-wrapper").style.display = "block";
    gsap.to(".page-wrapper", {
      opacity: 1
    });
    function updateProgress() {
      let progress = Math.round(this.progress() * 1000).toString();
      document.querySelector(".preloader-num").textContent = progress.padStart(
        4,
        "0"
      );
    }
    let mmPre = gsap.matchMedia();
    let tl = gsap.timeline({});

    tl.to(".preloader-progress", {
      width: "100%",
      duration: 10,
      ease: "power2.inOut",
      onUpdate: updateProgress,
      delay: 2
    });
    mmPre.add("(min-width: 480px)", () => {
      tl.to(
        ".preloader-main-content",
        {
          x: "65vw",
          duration: 10,
          ease: "power2.inOut"
        },
        "<"
      );
    });
    mmPre.add("(max-width: 479px)", () => {
      tl.to(
        ".preloader-main-content",
        {
          x: "20vw",
          duration: 10,
          ease: "power2.inOut"
        },
        "<"
      );
    });
    tl.to(
      ".preloader-text-1",
      {
        opacity: 0,
        ease: "power2.inOut"
      },
      "<"
    ).to(
      ".preloader-text-2",
      {
        opacity: 1,
        ease: "power2.inOut"
      },
      "<"
    );
    const preloaderItems = [
      ...document.querySelectorAll(".preloader-portfolio-cc-item")
    ];
    preloaderItems.map((preloaderItem) => {
      const preImg = [
        ...preloaderItem.querySelectorAll(".preloader-portfolio-img")
      ];
      let imgNum = preloaderItems.indexOf(preloaderItem) + 1;
      preImg[0].setAttribute("data-flip-id", `img${imgNum}`);
    });

    let tl2 = gsap.timeline();
    preloaderItems.map((preloaderItem) => {
      const preImg = [
        ...preloaderItem.querySelectorAll(".preloader-portfolio-img")
      ];
      let preloaderInd = preloaderItems.indexOf(preloaderItem) + 1;
      tl2
        .to(preImg, {
          opacity: 1,
          ease: "power2.inOut",
          stagger: 0.3,
          duration: 0.3
        })
        .to(
          preImg,
          {
            opacity: 0,
            ease: "power2.inOut",
            stagger: 0.3,
            duration: 0.3
          },
          ">0.5"
        );
      if (preloaderInd === 1) {
        tl2.to(
          preImg[0],
          {
            x: "-2rem",
            y: "-6.5rem"
          },
          ">"
        );
      } else if (preloaderInd === 2) {
        tl2.to(
          preImg[0],
          {
            x: "2rem",
            y: "-6rem"
          },
          ">"
        );
      } else if (preloaderInd === 3) {
        tl2.to(
          preImg[0],
          {
            x: "10rem",
            y: "-5rem"
          },
          ">"
        );
      } else if (preloaderInd === 4) {
        tl2.to(
          preImg[0],
          {
            x: "0rem",
            y: "0rem"
          },
          ">"
        );
      } else if (preloaderInd === 5) {
        tl2.to(
          preImg[0],
          {
            x: "4rem",
            y: "1rem"
          },
          ">"
        );
      } else if (preloaderInd === 6) {
        tl2.to(
          preImg[0],
          {
            x: "9rem",
            y: "-0.5rem"
          },
          ">"
        );
      }
    });

    preloaderItems
      .map((preloaderItem) => {
        const preImg = [
          ...preloaderItem.querySelectorAll(".preloader-portfolio-img")
        ];
        let imgNum = preloaderItems.indexOf(preloaderItem) + 1;
        tl2.to(
          preImg[0],
          {
            opacity: 1,
            duration: 0.2,
            ease: "power3.out"
          },
          ">"
        );
      })
      .to(
        ".preloader-bottom",
        {
          opacity: 0,
          duration: 0.2,
          ease: "power3.out"
        },
        ">"
      )
      .to(
        ".preloader-bar",
        {
          opacity: 0,
          duration: 0.2,
          delay: 1,
          ease: "power3.out",
          onComplete: () => {
            let state = Flip.getState(".preloader-portfolio-img[data-flip-id]");
            Flip.from(state, {
              targets: ".hp-port-img",
              duration: 0.8,
              stagger: { each: 0.2 },
              ease: "power1.inOut"
            });
          }
        },
        ">"
      );
    document.querySelector("body").click();
    tl2.to(".preloader-wrapper", { opacity: 0 }, ">");
    tl2.set(".preloader-wrapper", { display: "none" }, ">");
    localStorage.setItem("hasCodeRunBefore", true);
  } else {
    document.querySelector(".preloader-wrapper").style.display = "none";
    gsap.to(".page-wrapper", {
      opacity: 1
    });
  }
};

let portLinks = [...document.querySelectorAll(".hp-portfolio-img-wrapper")];
portLinks.map((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link.querySelector(".hp-portfolio-text"), {
      opacity: 1
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link.querySelector(".hp-portfolio-text"), {
      opacity: 0
    });
  });
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hp-moments-wrapper",
    scrub: true,
    pin: ".hp-hero-text",
    start: "top bottom",
    end: "top 30%"
  }
});
tl3.to(heroHeaderText, {
  opacity: 0,
  stagger: { each: 0.005, from: "random" }
});
tl3.set(".h2-large.moments-header", { opacity: 1 });
tl3.fromTo(
  momentsHeaderText,
  { opacity: 0 },
  {
    opacity: 1,
    stagger: { each: 0.005, from: "random" }
  }
);

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hp-moments-wrapper",
    scrub: true,
    start: "top 32%",
    end: "bottom bottom",
    onEnter: () => {
      document.querySelector("body").style.backgroundColor = "#514631";
      document.querySelector("body").style.color = "#eaeae2";
      document.querySelector(".mobile-menu-line").style.color = "#eaeae2";
    },
    onEnterBack: () => {
      document.querySelector("body").style.backgroundColor = "#514631";
      document.querySelector("body").style.color = "#eaeae2";
      document.querySelector(".mobile-menu-line").style.color = "#eaeae2";
    },
    onLeave: () => {
      document.querySelector("body").style.backgroundColor = "#bbb7ae";
      document.querySelector("body").style.color = "#000000";
      document.querySelector(".mobile-menu-line").style.color = "#000000";
    },
    onLeaveBack: () => {
      document.querySelector("body").style.backgroundColor = "#eaeae2";
      document.querySelector("body").style.color = "#000000";
      document.querySelector(".mobile-menu-line").style.color = "#000000";
    }
  }
});
tl4
  .to(".video-embed-wrapper", {
    x: "-40vw",
    y: "20%",
    ease: "power1.inOut"
  })
  .to(
    ".hp-moments-image",
    {
      y: "-40%",
      ease: "power1.inOut"
    },
    "<"
  )
  .to(
    ".hp-moments-image-2",
    {
      x: "-5vw",
      y: "-30%",
      ease: "power1.inOut"
    },
    "<"
  )
  .to(
    ".hp-moments-text-wrapper",
    {
      y: "-30%",
      ease: "power1.inOut"
    },
    "<"
  )
  .fromTo(
    momentsBodyText,
    { opacity: 0 },
    {
      opacity: 1,
      stagger: true
    },
    "<"
  );
let circles = [
  document.querySelector(".outer-circle.main"),
  document.querySelector(".outer-circle._3"),
  document.querySelector(".outer-circle._4"),
  document.querySelector(".outer-circle._5")
];
let mm7 = gsap.matchMedia();
mm7.add("(min-width: 480px)", () => {
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".hp-services-wrapper",
      scrub: true,
      start: "top 5%",
      end: "+=200%",
      pin: ".hp-services-wrapper"
    }
  });
  tl5
    .to(".hp-services-block", {
      opacity: 0
    })
    .to(
      ".outer-line-vertical",
      {
        scale: 0
      },
      "<"
    )
    .to(
      ".outer-line-horizontal",
      {
        scale: 0
      },
      "<"
    )
    .to(
      ".outer-circle.main",
      {
        width: "50vh",
        height: "50vh"
      },
      ">"
    )
    .to(
      ".outer-circle.main",
      {
        backgroundColor: "#000000",
        borderColor: "hsla(60, 14.71%, 90.62%, 0.15)"
      },
      ">"
    )
    .to(
      ".outer-circle._3",
      {
        opacity: 1,
        rotation: 180
      },
      ">"
    )
    .to(
      ".outer-circle._4",
      {
        opacity: 1,
        rotation: -180
      },
      ">"
    )
    .to(
      ".outer-circle._5",
      {
        opacity: 1
      },
      ">"
    )
    .to(
      ".camera-img",
      {
        opacity: 1,
        onComplete: () => {
          document.querySelector(".camera-img").classList.add("active");
        }
      },
      ">"
    )
    .to(
      circles,
      {
        x: "-18rem",
        y: "-18rem"
      },
      "<"
    )
    .to(
      ".hp-capture-grid",
      {
        display: "grid",
        opacity: 1
      },
      "<"
    )
    .to(
      ".sp-testimonials",
      {
        y: "-5rem"
      },
      ">"
    );
});

mm7.add("(max-width: 479px)", () => {
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".hp-services-wrapper",
      scrub: true,
      start: "top 10%",
      end: "+=200%",
      pin: ".hp-services-wrapper"
    }
  });

  tl5
    .to(".hp-services-block", {
      opacity: 0
    })
    .to(
      ".outer-line-vertical",
      {
        scale: 0
      },
      "<"
    )
    .to(
      ".outer-line-horizontal",
      {
        scale: 0
      },
      "<"
    )
    .to(
      ".outer-circle.main",
      {
        width: "80vw",
        height: "80vw"
      },
      ">"
    )
    .to(
      ".outer-circle.main",
      {
        backgroundColor: "#000000",
        borderColor: "hsla(60, 14.71%, 90.62%, 0.15)"
      },
      ">"
    )
    .to(
      ".outer-circle._3",
      {
        opacity: 1,
        rotation: 180
      },
      ">"
    )
    .to(
      ".outer-circle._4",
      {
        opacity: 1,
        rotation: -180
      },
      ">"
    )
    .to(
      ".outer-circle._5",
      {
        opacity: 1
      },
      ">"
    )
    .to(
      ".camera-img",
      {
        opacity: 1,
        onComplete: () => {
          document.querySelector(".camera-img").classList.add("active");
        }
      },
      ">"
    )
    .to(
      circles,
      {
        y: "-50vh"
      },
      "<"
    )
    .to(
      ".hp-capture-grid",
      {
        display: "grid",
        opacity: 1
      },
      "<"
    );
});
const links = [...document.querySelectorAll(".link-block")];
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
