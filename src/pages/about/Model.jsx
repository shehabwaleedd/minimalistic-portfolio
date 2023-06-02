import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./About.scss"
import cv from "../../assets/Shehab_Waleed.docx"

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


const Model = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <section className="about section">
      <div className="about__pic">
        <img src={require("../../assets/profile.jpg")} alt="profile" />
      </div>
      <div className='detailed__containerr'>
        <div className='detailed__row'>
          <div className="aboutttt__container containered">
            <div className="about__content">
              <h1>About</h1>
              <p>
                I am a young gentleman of twenty-four years, hailing from the bustling metropolis of Cairo, situated in the cradle of civilization, Egypt. My journey in the professional realm has been diverse and multifaceted, as I have explored various vocations in search of my true calling. Alas, it was in the domain of front-end development that my ardor for the craft was kindled. In addition to my proficiency in the art of coding, I possess the ability to converse fluently in three distinct languages, and I am perpetually consumed by a fervent desire to expand my horizons and acquire new knowledge.
              </p>
              <div className="cv__button">
                <button>
                  <i className='bx bx-down-arrow-alt scroll-down'></i>
                  <a href={cv} download>resume</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Model;

