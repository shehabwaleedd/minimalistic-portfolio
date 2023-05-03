import gsap from "gsap";
import anime from "animejs";
import { Expo } from "gsap/gsap-core";


export const OpeningAnimations = () => {
    const navbar = document.querySelector(".nav");
    const darkModeToggle = document.querySelector(".toggle__main");


    gsap.set(navbar, {
      display: "none",
    })

    gsap.set(darkModeToggle, {
      display: "none",
    })

    gsap.to(darkModeToggle, {
      x: 10,
      opacity: 1,
      ease: "expo.inOut",
      duration: 1,
      delay: 9.5,
      stagger: {
          amount: 0.08,
      }
    });

    gsap.to(navbar, {
      display: "block",
      y: -10,
      opacity: 1,
      ease: "expo.inOut",
      duration: 1,
      delay: 12,
      stagger: {
          amount: 0.08,
      }
    });

    gsap.to(".text-wrapper > div", 1, {
      x: "500",
      ease: Expo.easeInOut,
      delay: 1,
      stagger: 0.1,
    });

    gsap.to(".text-wrapper", 3, {
      y: -600,
      scale: 4.5,
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
      x: "-3500",
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
      translateY: [200, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 7000 + 40 * i,
    });
}
