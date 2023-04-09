import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ScrollForMore from "./ScrollForMore";
import Experience from "../about/Experience";
import Education from "../about/Education";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
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
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='details__containerr fluid'>
        <div className='details__row'>
          <div className='details__top'>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details__detail'>
              <div className='details__mua'>MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className='details__model'>
              <motion.span className='details__first' variants={firstName}>
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>B</motion.span>
              </motion.span>
              <motion.span className='details__last' variants={lastName}>
                <motion.span variants={letter}>W</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>L</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>E</motion.span>
                <motion.span variants={letter}>D</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='details__bottom-row'>
          <div className='details__bottom'>
            <motion.div className='details__image-container-single'>
              <motion.div
                initial={{
                  y: "50vw",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                //   height: window.innerWidth > 1440 ? 800 : 400,
                height: 500,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='detailed__frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                   className='detailed__frame-single'
                    src={require("../../assets/profile5.jpg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                    //   y: window.innerWidth > 1440 ? -1200 : -600,
                    y: -400,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      <motion.div className='detailed__information' >
        <motion.div className='detailed__containerr containerr' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
          <motion.div className='detailed__row' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.8, type: "spring" }}>
            <motion.h2 className='detailed__title' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.8, type: "spring" }}>
              The insiration behind the <br /> change &  what it means.
            </motion.h2>
            <p>
            I am a young gentleman of twenty-four years, hailing from the bustling metropolis of Cairo, situated in the cradle of civilization, Egypt. My journey in the professional realm has been diverse and multifaceted, as I have explored various vocations in search of my true calling. Alas, it was in the domain of front-end development that my ardor for the craft was kindled. In addition to my proficiency in the art of coding, I possess the ability to converse fluently in three distinct languages, and I am perpetually consumed by a fervent desire to expand my horizons and acquire new knowledge.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
        <Education />
        <Experience />
    </motion.div>
  );
};

export default Model;
