import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./OpeningAnimation.css";
import preLoaderAnim from "../../../animation/Animation";
import { TweenMax, TimelineMax, Power3, Power4, Expo } from "gsap";
import gsap from "gsap";
import anime from "animejs";
import Home from "../Home";



function OpeningAnimation({ onAnimationComplete }) {

  useEffect(() => {

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
  }, [])


  return (
    <div className="containerr">

      <div className="text-containerr"></div>
      <div className="text-wrapper">
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS
        </div>
        <div className="text">
        Abdelrahman Al Adawy Motafar3 Mn Shar3 Masged Al Hedaya Mn Qawymia Al Arabia Imbaba Giza Egypt 
        </div>
        <div className="text">
        build myself from the scratch needed no one. will always fight and be the best version of myself. 
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS
        </div>
        <div className="text">
        Shehab Waleed Ahmed El Mahdii Ibrahim Khalel
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS, Tailwind and Firebase
        </div>
        <div className="text">
        Shehab Waleed Ahmed El Mahdii Ibrahim Khalel
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS, Tailwind and Firebase
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS, Tailwind and Firebase.
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS, Tailwind and Firebase
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS, Tailwind and Firebase
        </div>
        <div className="text">
        self-taught Frontend Developer with experience in React, JavaScript, GSAP, Framer Motion, CSS, SASS, Tailwind and Firebase
        </div>
      </div>
      <div className="headerr"></div>
    </div>
  );
}

export default OpeningAnimation;