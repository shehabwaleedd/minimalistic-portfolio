
// import anime from "animejs";
// import { gsap } from "gsap";

// export const Animation2 = () => {
//   const textWrapper = document.querySelector(".title");
//   textWrapper.innerHTML = textWrapper.textContent.replace(
//     /\S/g,
//     "<span class='letter'>$&</span>"
//   );

//   gsap.timeline().from(".title", {
//     y: -150,
//     opacity: 0,
//     display: "none",
//     ease: "easeOutExpo",
//     duration: 1.4,
//     stagger: {
//       amount: 0.03,
//       from: "start",
//     },
//   });

//   gsap.timeline().to(".title", {
//     y: -150,
//     opacity: 1,
//     display: "block",
//     ease: "easeOutExpo",
//     duration: 1.4,
//     stagger: {
//       amount: 0.03,
//       from: "start",
//     },
//     delay: 7.2,
//   });

//   const container = document.querySelector(".home__container");
//   const blocks = container.querySelectorAll(".block");

//   gsap.set(container, {
//     perspective: 800,
//     perspectiveOrigin: "50% 50%",
//   });

//   gsap.set(blocks, {
//     transformOrigin: "center bottom",
//   });

//   blocks.forEach((block, index) => {
//     gsap.set(block, {
//       z: -50 * index,
//       y: 100,
//       opacity: 0,
//     });

//     gsap.timeline()
//       .to(block, {
//         y: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 1,
//         delay: 1.5 + index * 0.5,
//       })
//       .to(block, {
//         y: -100,
//         opacity: 0,
//         ease: "power2.in",
//         duration: 1,
//         delay: 4.5 + index * 0.5,
//       });
//   });

//   gsap.from(".box", {
//     scale: 0.5,
//     opacity: 0,
//     ease: "back.out(1.4)",
//     duration: 1.5,
//     delay: 1,
//   });

//   gsap.to(".box", {
//     scale: 1.5,
//     ease: "back.in(1.4)",
//     duration: 1.5,
//     delay: 6,
//   });

//   gsap.from(".navbar > div", {
//     opacity: 0,
//     y: -100,
//     ease: "expo.inOut",
//     duration: 1.6,
//     delay: 7,
//     stagger: {
//       amount: 0.08,
//     },
//   });

//   gsap.from(".site-menu > div", {
//     opacity: 0,
//     y: -100,
//     ease: "power2.out",
//     duration: 1,
//     delay: 7.5,
//     stagger: {
//       amount: 0.1,
//     },
//   });
// };





import anime from "animejs";
import gsap from "gsap";

export const Animation2 = () => {
  const title = document.querySelector(".main__title");
  const images = document.querySelectorAll(".home__container > .block");
  const overlay = document.querySelector(".overlay");
  const navbar = document.querySelector(".nav__menu");
  const logo = document.querySelector(".nav__logo");
  const darkModeToggle = document.querySelector(".toggle__main");
  const main = document.querySelector(".main");


  // Set initial positions and opacity for images
  gsap.set(images, {
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    bottom: "50%",
    right: "50%",
    width: "400px",
    height: "300px",
    opacity: 0,
  });

    // Set initial position and opacity for overlay
    gsap.set(overlay, {
        y: 0,
        opacity: 1,
    });

    // Set initial position and opacity for navbar
    gsap.set(navbar,  {
        y: 0,
        opacity: 0,
    });

    // Set initial position and opacity for logo
    gsap.set(logo,  {
        y: 0,
        opacity: 0,
    });

    // Set initial position and opacity for dark mode toggle

    gsap.set(darkModeToggle,  {
        x: 0,
        opacity: 0,
    });

    // Use GSAP to animate title

    gsap.set(title, {
        opacity: 0,
        y: 0,
    });

    // set initial position and opacity for main content

    gsap.set(main, {
        opacity: 0,
        y: -800,
    });





  // Use GSAP to animate each image in sequence
  gsap.timeline()
    .to(images, {
      y: "-30%",
      opacity: 1,
      ease: "expo.out",
      duration: 1.2,
      stagger: 0.4,
      delay: 0.5,
    })
    .add(() => {
      // When all images have finished animating, use AnimeJS to scale and move container
      anime({
        targets: ".home__container",
        scale: 2,
        translateY: "30%",
        easing: "easeOutExpo",
        duration: 1000,
        complete: () => {
          // When container is finished animating, hide overlay
          gsap.to(overlay, {
            y: "100%",
            ease: "expo.inOut",
            duration: 0.5,
          });

            // When overlay is finished animating, animate navbar and logo
            gsap.to(navbar, {
                y: 0,
                opacity: 1,
                ease: "expo.inOut",
                duration: 1,
                delay: 2.5,
                stagger: {
                    amount: 0.08,
                }
            });

            gsap.to(logo, {
                y: 0,
                opacity: 1,
                ease: "expo.inOut",
                duration: 1,
                delay: 1.5,
                stagger: {
                    amount: 0.08,
                }
            });

            // When overlay is finished animating, animate dark mode toggle

            gsap.to(darkModeToggle, {
                x: 10,
                opacity: 1,
                ease: "expo.inOut",
                duration: 1,
                delay: 3.5,
                stagger: {
                    amount: 0.08,
                }
            });

            // When overlay is finished animating, animate title

            gsap.to(main, {
                y: -800,
                opacity: 1,
                width: "100%",

                ease: "expo.inOut",
                duration: 1,
                delay: 2.0,
                stagger: {
                    amount: 0.08,
                }
            });


        },
      });
    });

};