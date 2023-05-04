import gsap from "gsap";
import anime from "animejs";
import { Expo } from "gsap/gsap-core";

export const OpeningAnimations = () => {
  const navbar = document.querySelector(".nav");
  const darkModeToggle = document.querySelector(".toggle__main");
  const multiplier = window.innerWidth > 1440 ? 1.5 : 1; // Example multiplier based on viewport width
  gsap.set(navbar, {
    display: "none",
  });

  gsap.set(darkModeToggle, {
    display: "none",
  });

 

  gsap.to(darkModeToggle, {
    x: 10 * multiplier,
    opacity: 1,
    ease: "expo.inOut",
    duration: 1,
    delay: 9.5,
    stagger: {
      amount: 0.08,
    },
  });

  gsap.to(navbar, {
    display: "block",
    y: -10 * multiplier,
    opacity: 1,
    ease: "expo.inOut",
    duration: 1,
    delay: 12,
    stagger: {
      amount: 0.08,
    },
  });

  gsap.to(".text-wrapper > div", 1, {
    x: 500 * multiplier,
    ease: Expo.easeInOut,
    delay: 1,
    stagger: 0.1,
  });

  gsap.to(".text-wrapper", 3, {
    y: -600 * multiplier,
    scale: 4.5 * multiplier,
    rotate: -90,
    ease: Expo.easeInOut,
    delay: 1.5,
  });

  gsap.to(".text", 1, {
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 3,
  });

  gsap.to(".text-wrapper > div", 4, {
    x: window.innerWidth > 1440 ? -5500 : -5000,
    ease: Expo.easeInOut,
    delay: 3.5,
    stagger: 0.05,
  });

  gsap.to(".text-containerr", 2, {
    bottom: "-100%",
    ease: Expo.easeInOut,
    delay: 6,
  });

  let textWrapper = document.querySelector(".headerr");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: ".headerr .letter",
    opacity: [0, 1],
    translateY: [200 * multiplier, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 7000 + 40 * i,
  });

  // adjust your animation properties for mobile view using media queries
const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  gsap.set(".text-wrapper > div", { x: 0 });
  gsap.set(".text-wrapper", { y: 0, scale: 1, rotate: 0 });
  gsap.set(".text-containerr", { bottom: 0 });

  gsap.to(".text-wrapper > div", 1, {
    x: 200,
    ease: Expo.easeInOut,
    delay: 1,
    stagger: 0.1,
  });

  gsap.to(".text-wrapper", 3, {
    y: 0,
    scale: 2,
    rotate: -90,
    ease: Expo.easeInOut,
    delay: 1.5,
  });

  gsap.to(".text-wrapper > div", 4, {
    x: -1350,
    ease: Expo.easeInOut,
    delay: 3.5,
    stagger: 0.05,
  });

  anime.timeline().add({
    targets: ".headerr .letter",
    opacity: [0, 1],
    translateY: [50, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 7000 + 40 * i,
  });
}
};