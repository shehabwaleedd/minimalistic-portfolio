import gsap from "gsap";
import { Power3 } from "gsap";

export const HomeAnimations = () => {
  const container = document.querySelector(".containererr");
  const navbar = document.querySelector(".nav");
  const logo = document.querySelector(".logo");
  const menuToggle = document.querySelector(".menu-toggle");
  const darkModeToggle = document.querySelector(".toggle__main");
  const mainContainer = document.querySelector(".main__containerr");
  const dropDownMenu = document.querySelector('.dropdown-menu');
  const titleElements = document.querySelectorAll('.titles > div');

  gsap.set(logo, {
    y: 0,
    opacity: 0,
  });
  gsap.set(darkModeToggle, {
    x: 0,
    opacity: 0,
  });
  gsap.set(dropDownMenu, {
    opacity: 0,
    x: 15,
  });
  gsap.set(menuToggle, {
    opacity: 0,
    y: 10,
  });
  gsap.set(mainContainer, {
    opacity: 0,
    ease: "expo.out",
    y: -100,
  });

  const animateTitleElements = () => {
    return new Promise((resolve) => {
      titleElements.forEach((element, index) => {
        const delay = index * 1.5 + 1; // Delay the start animation by 2 seconds
        gsap.fromTo(
          element,
          {
            x: "0",
            ease: Power3.easeInOut,
            opacity: "0",
            duration: 0.8,
            transition: "ease", // Disable transition initially
          },
          {
            x: "0",
            ease: Power3.easeInOut,
            opacity: "1",
            duration: 0.8,
            delay,
            onComplete: () => {
              gsap.to(element, {
                x: "0",
                ease: Power3.easeInOut,
                opacity: "0",
                duration: 0.8,
                delay: 2,
                onComplete: index === titleElements.length - 1 ? resolve : null,
              });
            },
          }
        );
  
        // Enable transition after initial animation
        gsap.to(element, {
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          delay: delay, // Delay the transition enablement to match the animation delay
        });
      });
    });
  };
  
  
  
  

  const animateOtherElements = () => {
    gsap.to(mainContainer, {
      y: window.innerWidth > 1440 ? -0 : 0,
      opacity: 1,
      ease: "expo.inOut",
      duration: 3,
      delay: 0.5,
      stagger: 0.4,
    });

    // Rest of the animations
    gsap.to(container, {
      scale: "2",
      y: window.innerWidth > 1440 ? "100%" : "100%",
      ease: "expo.inOut",
      duration: 2,
    });
    gsap.to(menuToggle, {
      opacity: 1,
      y: 0,
      ease: "expo.inOut",
      duration: 1,
      delay: 3.5,
      stagger: 0.4,
    });
    gsap.to(navbar, {
      y: -10,
      opacity: 1,
      ease: "expo.inOut",
      duration: 1,
      delay: 2.5,
      stagger: {
        amount: 0.08,
      },
    });
    gsap.to(logo, {
      y: 0,
      opacity: 1,
      ease: "expo.inOut",
      duration: 1,
      delay: 2.4,
      stagger: {
        amount: 0.08,
      },
    });
    gsap.to(darkModeToggle, {
      x: 10,
      opacity: 1,
      ease: "expo.inOut",
      duration: 1,
      delay: 4,
      stagger: {
        amount: 0.08,
      },
    });
    gsap.to(dropDownMenu, {
      x: 0,
      opacity: 1,
      ease: "expo.inOut",
      duration: 1,
      delay: 5,
      stagger: {
        amount: 0.08,
      },
    });
  };

  animateTitleElements().then(() => {
    animateOtherElements();
  });
};
