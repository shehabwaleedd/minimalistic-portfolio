import gsap from "gsap";
import { TweenMax, Power3, Expo } from "gsap";


export const PreLoaderAnimations = () => {
    // Additional animations
    const titleElements = document.querySelectorAll('.titles > div');

    // Animate title elements
    TweenMax.staggerFrom(
        titleElements,
        0.8,
        {
            x: "-60",
            ease: Power3.easeInOut,
            opacity: "0",
        },
        2
    );

    TweenMax.staggerTo(
        titleElements,
        0.8,
        {
            x: "60",
            ease: Power3.easeInOut,
            delay: 1.2,
            opacity: "0",
        },
        2
    );
}