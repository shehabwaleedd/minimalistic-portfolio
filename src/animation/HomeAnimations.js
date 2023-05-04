import gsap from "gsap";


export const HomeAnimations = () => {


  const container = document.querySelector(".containererr");
  const navbar = document.querySelector(".nav__menu");
  const logo = document.querySelector(".logo");
  const menuToggle = document.querySelector(".menu-toggle");
  const darkModeToggle = document.querySelector(".toggle__main");
  const mainContainer = document.querySelector(".main__containerr");
  const dropDownMenu = document.querySelector('.dropdown-menu');
  const overlay = document.querySelector('.overlay');

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

  gsap.set(overlay, {
    y: 0,
    opacity: 1,
  });
  gsap.set(menuToggle, {
    opacity: 0,
    y: 10,
  })

  gsap.set(mainContainer, {
    opacity: 0,
    ease: "expo.out",
    y: -100,
  })
  
  gsap.fromTo(
    container.children,
    { y: "110%",  },
    {
      y: "0%",
      ease: "expo.out",
      duration: 2,
      delay: 1,
      stagger: 0.4,
      onComplete: () => {
        // animation complete
        gsap.to(overlay, {
          y: "130%",
          ease: "expo.inOut",
          duration: 0.5,
        });
        gsap.to(mainContainer, {
          y:  window.innerWidth > 1440 ? -250 : -250,
          opacity: 1,
          ease: "expo.inOut",
          duration: 3,
          delay: 0.5,
          stagger: 0.4,
        });


        gsap.to(container, {
          scale: "2",
          y: window.innerWidth > 1440 ? "190%" : "160%",
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
        })
        gsap.to(navbar, {
          y: -10,
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
          delay: 2.4,
          stagger: {
            amount: 0.08,
          }
        });

        gsap.to(darkModeToggle, {
          x: 10,
          opacity: 1,
          ease: "expo.inOut",
          duration: 1,
          delay: 4,
          stagger: {
            amount: 0.08,
          }
        });

        gsap.to(dropDownMenu, {
          x: 0,
          opacity: 1,
          ease: "expo.inOut",
          duration: 1,
          delay: 5,
          stagger: {
            amount: 0.08,
          }
        });
      }
    }
  );


}