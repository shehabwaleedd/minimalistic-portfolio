import React, { useEffect } from "react";
import { OpeningAnimations } from "../../../animation/OpeningAnimations";
import "./OpeningAnimation.css";


function OpeningAnimation({ onAnimationComplete }) {

  useEffect(() => {

    OpeningAnimations();

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