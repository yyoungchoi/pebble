gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// header logo rotate
const rotate = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      scrub: true,
      start: "top top",
      end: "bottom+=20000",
    },
  })
  .to(".header .logo svg", {
    rotation: 360 * 5,
    duration: 5,
    ease: "none",
  });

introMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-main",
    start: "0% 0%",
    end: "100% 50%",
    // markers: true,
    scrub: 0,
  },
});
introMotion.to(".sc-main .contents", { "border-radius": 30, scale: 0.972 }, "a");
introMotion.to(".sc-main .text>span", { yPercent: -20 }, "a");

const introTxt2 = new SplitType(".sc-ride .title p", { types: "words" });

introMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-ride",
    start: "0% 0%",
    end: "100% 50%",
    // markers: true,
    scrub: 0,
  },
});
introMotion2.to(".sc-ride .ride-area", { "border-radius": 30, scale: 0.972 }, "a");
introMotion2.fromTo(".sc-ride .title .word", { yPercent: 80, stagger: 0.1 }, { yPercent: 0, stagger: 0.1 }, "a");

ScrollTrigger.matchMedia({
  "(max-width: 895px)": function () {
    gsap.set(".sc-ride .title .word:first-child", { display: "block" }, "a");
  },
});

const headTxt = new SplitType(".sc-text p", { types: "words, chars" });
gsap.set(".sc-text p .char", { opacity: 0 });
const textMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-text",
    start: "0% 50%",
    end: "100% 80%",
    scrub: 0,
  },
});
textMotion.to(".sc-text p:nth-child(1) .char", {
  opacity: 1,
  stagger: 0.1,
});
textMotion.to(
  ".sc-text p:nth-child(1) .char",
  {
    opacity: 0,
    stagger: 0.1,
  },
  "a"
);
textMotion.to(
  ".sc-text p:nth-child(2) .char",
  {
    opacity: 1,
    stagger: 0.1,
  },
  "a+=2.5"
);
const headTxt2 = new SplitType(".sc-text2 p", { types: "words, chars" });
gsap.set(".sc-text2 p .char", { opacity: 0 });
const textMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-text2",
    start: "0% 50%",
    end: "100% 80%",
    scrub: 0,
    // markers: true,
  },
});
textMotion2.fromTo(
  ".sc-text2 p .char",
  {
    opacity: 0.5,
    stagger: 0.1,
  },
  {
    opacity: 1,
    stagger: 0.1,
  }
);
const headTxt3 = new SplitType(".sc-text3 p", { types: "words, chars" });
gsap.set(".sc-text3 p .char", { opacity: 0 });
const textMotion3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-text3",
    start: "0% 50%",
    end: "100% 80%",
    scrub: 0,
  },
});
textMotion3.fromTo(
  ".sc-text3 p:nth-child(1) .char",
  {
    opacity: 0.5,
    stagger: 0.1,
  },
  {
    opacity: 1,
    stagger: 0.1,
  }
);
textMotion3.to(
  ".sc-text3 p:nth-child(1) .char",
  {
    opacity: 0,
    stagger: 0.1,
  },
  "a"
);
textMotion3.to(
  ".sc-text3 p:nth-child(2) .char",
  {
    opacity: 1,
    stagger: 0.1,
  },
  "a+=2"
);
const headTxt4 = new SplitType(".sc-text4 p", { types: "words, chars" });
gsap.set(".sc-text4 p .char", { opacity: 0 });
const textMotion4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-text4",
    start: "0% 50%",
    end: "100% 80%",
    scrub: 0,
    // markers: true,
  },
});
textMotion4.fromTo(
  ".sc-text4 p .char",
  {
    opacity: 0.5,
    stagger: 0.1,
  },
  {
    opacity: 1,
    stagger: 0.1,
  }
);
const headTxt5 = new SplitType(".sc-text5 p", { types: "words, chars" });
gsap.set(".sc-text5 p .char", { opacity: 0 });
const textMotion5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-text5",
    start: "0% 50%",
    end: "100% 80%",
    scrub: 0,
    // markers: true,
  },
});
textMotion5.fromTo(
  ".sc-text5 p .char",
  {
    opacity: 0.5,
    stagger: 0.1,
  },
  {
    opacity: 1,
    stagger: 0.1,
  }
);
// sc-onoff

const onoffMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-onoff",
    start: `50% 0%`,
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    ease: "power1.inOut",
  },
});
ScrollTrigger.matchMedia({
  "(max-width: 894px)": function () {
    $(".sc-onoff").removeClass("on");
    gsap.set(".sc-onoff .thumb1 .contents-txt", { left: "50%" });
    gsap.set(".sc-onoff .thumb2 .contents-txt", { left: "50%" });
    onoffMotion.to(".sc-onoff .thumb1 .img-box", { yPercent: -100, zIndex: 5, duration: 3 }, "a");
    onoffMotion.to(".sc-onoff .thumb1 .img-box img", { yPercent: 100, duration: 3 }, "a");
    onoffMotion.to(".sc-onoff .thumb1 .contents-txt", { opacity: 0, duration: 2 }, "a");
    onoffMotion.from(".sc-onoff .thumb1 .text-box", { y: "-10%", duration: 2 }, "=-6");
    onoffMotion.to(".sc-onoff .thumb1 .text-box", { y: "100%", duration: 2 });
    onoffMotion.to(".sc-onoff .thumb2 .img-box", { yPercent: -100, duration: 3 }, "a+5");
    onoffMotion.to(".sc-onoff .thumb2 .img-box img", { yPercent: 100, duration: 3 }, "a+5");
    onoffMotion.to(".sc-onoff .thumb2 .contents-txt", { opacity: 0, duration: 2 }, "a+5");
    onoffMotion.from(".sc-onoff .thumb2 .text-box", { y: "-10%", duration: 2 }, "=-4");
    onoffMotion.to(".sc-onoff .thumb2 .text-box", { y: "100%", duration: 2 }, "a+8");
  },
  "(min-width: 895px)": function () {
    $(".sc-onoff").addClass("on");
    gsap.set(".sc-onoff .thumb1 .img-box", { left: "-40%" });
    gsap.set(".sc-onoff .thumb1 .img-box img", { left: "40%" });
    gsap.set(".sc-onoff .thumb2 .img-box", { left: "50%" });
    gsap.set(".sc-onoff .thumb2 .img-box img", { left: "-50%" });
    $(".sc-onoff .thumb1 .img-box").on("mouseenter", function (e) {
      if ($(".sc-onoff").hasClass("on")) {
        hoverTl1 = gsap
          .timeline()
          .to(".sc-onoff .thumb1 .img-box", { left: "-30%" }, "a")
          .to(".sc-onoff .thumb1 .img-box img", { left: "30%" }, "a")
          .to(".sc-onoff .thumb1 .contents-txt", { left: "25%" }, "a")
          .to(".sc-onoff .thumb2 .img-box", { left: "60%" }, "a")
          .to(".sc-onoff .thumb2 .img-box img", { left: "-60%" }, "a")
          .to(".sc-onoff .thumb2 .contents-txt", { left: "80%" }, "a")
          .to(".sc-onoff .thumb2 .text-box", { y: "100%", zIndex: 0 }, "a")
          .to(".sc-onoff .thumb1 .text-box", { y: "0%", zIndex: 4 }, "a");
      }
    });
    $(".sc-onoff .thumb2 .img-box").on("mouseenter", function (e) {
      if ($(".sc-onoff").hasClass("on")) {
        hoverTl2 = gsap
          .timeline()
          .to(".sc-onoff .thumb1 .img-box", { left: "-50%" }, "a")
          .to(".sc-onoff .thumb1 .img-box img", { left: "50%" }, "a")
          .to(".sc-onoff .thumb1 .contents-txt", { left: "13%" }, "a")
          .to(".sc-onoff .thumb2 .img-box", { left: "40%" }, "a")
          .to(".sc-onoff .thumb2 .img-box img", { left: "-40%" }, "a")
          .to(".sc-onoff .thumb2 .contents-txt", { left: "60%" }, "a")
          .to(".sc-onoff .thumb2 .text-box", { y: "0%", zIndex: 4 }, "a")
          .to(".sc-onoff .thumb1 .text-box", { y: "100%", zIndex: 0 }, "a");
      }
    });
    if ($(".sc-onoff").hasClass("on")) {
      onoffMotion.to(".sc-onoff .thumb1 .text-box", { y: "300%", duration: 2, ease: "power1.in", zIndex: -1 }, "a");
      onoffMotion.to(".sc-onoff .thumb2 .text-box", { y: "300%", duration: 2, ease: "power1.in", zIndex: -1 }, "a");
    }
    onoffMotion.to(".sc-onoff .cont-inner .contents-txt", { opacity: 0, duration: 1 }, "a=-1");
    onoffMotion.to(".sc-onoff .thumb1 .img-box", { xPercent: -100, duration: 3 }, "a=+1");
    onoffMotion.to(".sc-onoff .thumb1 .img-box img", { xPercent: 100, duration: 3 }, "a=+1");
    onoffMotion.to(".sc-onoff .thumb2 .img-box", { xPercent: 100, duration: 3 }, "a=+1");
    onoffMotion.to(".sc-onoff .thumb2 .img-box img", { xPercent: -100, duration: 3 }, "a=+1");
  },
  all: function () {
    onoffMotion.to(".sc-onoff .thumb3 .text-box", { y: "0%", duration: 1 });
  },
});
// sc-introduce
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    var images = gsap.utils.toArray(".pc .item:not(:first-child)");
    $(images).each((i, target) => {
      gsap.set(target, { zIndex: i });
    });
    gsap.set(".sc-introduce .pc .item:not(:first-child)", { yPercent: 100 });
    gsap.set(".sc-introduce .pc .item:not(:first-child) img", { yPercent: -90 });
    ScrollTrigger.create({
      trigger: ".sc-introduce",
      start: "20% 50%",
      end: "100% 20%",
      // markers: true,
      onToggle: function () {
        $(".header .logo").toggleClass("on");
      },
    });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc-introduce",
        start: `0% -100%`,
        end: "100% 100%",
        scrub: 2,
      },
    });
    images.forEach((element, i) => {
      tl.to(`.sc-introduce .item:nth-child(${i + 2})`, { stagger: 1, yPercent: 0 }, i);
      tl.to(`.sc-introduce .item:nth-child(${i + 2}) img`, { yPercent: 0 }, i);
    });
    var introDesc = gsap.utils.toArray(".pc .desc-box");
    gsap.set(introDesc, { opacity: 0 });
    var desctl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc-introduce .intro-area",
        start: `0% 0%`,
        end: "100% 100%",
        scrub: 2,
        // markers: true,
      },
    });
    introDesc.forEach((element, i) => {
      desctl.to(`.desc-box:nth-child(${i + 1})`, { opacity: 1, duration: 1 }, i);
      desctl.to(`.desc-box:nth-child(${i})`, { opacity: 0, duration: 0.5 }, i);
    });
    var links = gsap.utils.toArray(".navi-list li");
    links.forEach((link, i) => {
      ScrollTrigger.create({
        trigger: ".sc-introduce",
        start: "top -" + window.innerHeight * (i + 0.5),
        end: "+=" + window.innerHeight,
        scrub: 2,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
        onToggle: (self) => {
          if (self.isActive) {
            setActive(i);
          }
        },
      });
    });
    function setActive(activeIndex) {
      links.forEach((link, index) => {
        var $link = $(link);
        if (index === activeIndex) {
          $link.addClass("text-dark-beige");
        } else {
          $link.removeClass("text-dark-beige");
        }
      });
      if (activeIndex >= 1 && activeIndex < links.length - 3) {
        var linkWidth = links[activeIndex].offsetWidth;
        var currentOffset = [activeIndex - 1] * linkWidth;
        gsap.to(".navi-list li", { duration: 0.3, x: -currentOffset, ease: "power1.inOut" });
      }
    }
  },
});
// sc-app
const apps = gsap.utils.toArray(".thumb-box:not(:last-child)");
$(".thumb-box:not(:last-child)").each(function (i, target) {
  gsap.set(target, { zIndex: i });
});

const gap = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-app",
    start: "50% 100%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
});
ScrollTrigger.matchMedia({
  "(min-width: 1229px)": function () {
    gap.to(".sc-app .app-wrap", { y: "-20rem" }, "a");

    gap.to(".sc-app .app-wrap .thumb-box.main", { position: "sticky", top: "24rem", delay: 1 }, "a=-1");
    gap.to(".sc-app .app-wrap .thumb-box.main", { width: "90vw", height: "90vh", duration: 1 }, "a+2");
    gap.to(".sc-app .app-wrap .thumb-box.main .badge", { yPercent: 150 });
    gap.fromTo(".sc-app .app-wrap", { gap: "40rem" }, { gap: "5rem" }, "a=-1");
    gap.to(".sc-app .app-wrap .thumb-box:nth-child(5) img", { opacity: 0 });
  },
  "(min-width:895px and max-width: 1228px)": function () {
    gap.to(".sc-app .app-wrap", { y: "-10rem" }, "a");

    gap.to(".sc-app .app-wrap .thumb-box.main", { position: "sticky", top: "14rem", delay: 1 }, "a=-1");
    gap.to(".sc-app .app-wrap .thumb-box.main", { width: "95vw", height: "95vh", duration: 1 }, "a+2");
    gap.fromTo(".sc-app .app-wrap", { gap: "40rem" }, { gap: "5rem" }, "a=-1");
    gap.to(".sc-app .app-wrap .thumb-box:nth-child(5) img", { opacity: 0 });
    gap.to(".sc-app .app-wrap .thumb-box.main .badge", { yPercent: 150 });
  },
});
const mainSlide = new Swiper(".sc-product .swiper", {
  loop: false,
  slidesPerView: 1.3,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
  },
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },

  on: {
    slideChange: function () {
      $(".swiper-slide").removeClass("on");
      $(".swiper-slide-active").addClass("on");
    },
  },
});
