import gsap from "gsap";

const RunAnimations = (screen, body) => {
    const tl = gsap.timeline();
    tl.to(screen, {
        duration: 0.5,
        height: "100%",
        top: "0%",
        ease: "power3.inOut",
    });
    tl.to(screen, {
        duration: 0.5,
        top: "100%",
        ease: "power3.inOut",
        delay: 0.1,
    });
    tl.set(screen, { top: "-100%" });
    gsap.to(body, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
        ease: "power4.inOut",
        delay: 1,
    });
};

export default RunAnimations;