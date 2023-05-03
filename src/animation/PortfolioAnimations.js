import gsap from "gsap";

export const PortfolioAnimations = () => {

  const worktitle = document.querySelector(".text-container");

  gsap.set(worktitle, {
    opacity: 0,
    y: 100,
  });

  gsap.to(worktitle, {
    opacity: 1,
    y: 0,
    stagger: 0.4,
    ease: "easeOutExpo",
    duration: 1.3,
    cursor: "pointer",
  });

  const images = document.querySelectorAll(".menu__item-image");

  images.forEach((image) => {
    gsap.set(image, {
      scale: 1,
    });

    image.addEventListener("mouseover", () => {
      gsap.to(image, {
        scale: 1.2,
        ease: "power2.out",
        duration: 0.3,
      });
    });

    image.addEventListener("mouseleave", () => {
      gsap.to(image, {
        scale: 1,
        ease: "power2.out",
        duration: 0.3,
      });
    });
  });

};



