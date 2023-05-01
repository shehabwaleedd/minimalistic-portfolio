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
  });

  const image = document.querySelectorAll(".menu__item-image_inner .menu__item-image");

  gsap.set(image, {
    x: -100,
  });

  gsap.to(image, {
    x: 0,
    stagger: 0.4,
    ease: "easeOutExpo",
    duration: 1.3,
  });
}


export const PortfolioAnimations2 = () => {

  const { gsap } = window;

  gsap.timeline().set(".menu", { autoAlpha: 1 })
    .from(".menu__item-innertext", {
      delay: 1,
      duration: 0.85,
      xPercent: 25,
      yPercent: 125,
      stagger: 0.095,
      skewY: gsap.utils.wrap([-8, 8]),
      ease: "expo.out",
    })


    .set(".menu", { pointerEvents: "all" });

  gsap.defaults({
    duration: 0.55,
    ease: "expo.out",
  })

  const menuItems = document.querySelectorAll(".menu__item");

  menuItems.forEach((menuItem) => {
    const imageWrapper = menuItem.querySelector(".menu__item-image_wrapper");
    const imageWrapperBounds = imageWrapper.getBoundingClientRect();
    let itemBounds = menuItem.getBoundingClientRect();

    const onMouseEnter = () => {

      gsap.set(imageWrapper, {
        scale: 0.8,
        xPercent: 25,
        yPercent: 50,
        rotation: -15,
      })

      gsap.to(imageWrapper, { opacity: 1, scale: 1, rotation: 0, yPercent: 0 })
    }

    const onMouseLeave = () => {
      gsap.to(imageWrapper, {
        scale: 0.8,
        xPercent: 25,
        yPercent: -50,
        rotation: -15,
        opacity: 0,
      })
    }

    const onMouseMove = ({ x, y }) => {
      let yOffset = itemBounds.top / imageWrapperBounds.height;
      yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

      gsap.to(imageWrapper, {
        duration: 1.25,
        x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
        y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
      })
    }

    menuItem.addEventListener("mouseenter", onMouseEnter);
    menuItem.addEventListener("mouseleave", onMouseLeave);
    menuItem.addEventListener("mousemove", onMouseMove);

    window.addEventListener("resize", () => {
      itemBounds = menuItem.getBoundingClientRect();
      }
    )
  })
}
