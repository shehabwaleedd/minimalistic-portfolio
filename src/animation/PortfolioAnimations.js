import gsap from "gsap";

export const PortfolioAnimations = () => {

  const worktitle = document.querySelector(".scrollbarr");

  gsap.set(worktitle, {
    opacity: 0,
    y: 50,
  });
  
  gsap.to(worktitle, {
    opacity: 1,
    y: -10,
    stagger: 0.4,
    ease: "easeOutExpo",
    duration: 1.3,
    cursor: "pointer",
  });
};



