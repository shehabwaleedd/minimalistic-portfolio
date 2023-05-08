import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./About.css"


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
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='details__containerr fluid'>
        <div className='details__bottom-row'>
          <div className='details__bottom'>
            <motion.div className='details__image-container-single'>
              <motion.div
                initial={{
                //   x: "100vw",
                y: "100vw",
                  // width: imageDetails.width,
                  // height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                width: "100%",
                  height: window.innerWidth > 1440 ? 500 : 520,
                // height: 500,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='detailed__frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                   className='detailed__frame-single container'
                    src={require("../../assets/profile3.jpg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                    //   y: window.innerWidth > 1440 ? -1200 : -600,
                    y: -200,
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.6 } }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      <motion.div className='detailed__information '  >
        <motion.div className='detailed__containerr' initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
          <motion.div className='detailed__row' 
          initial={{ opacity: 0 }}
           whileInView={{ opacity: 1}}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ paddingTop: window.innerWidth > 1440 ? "1rem" : "5rem" }}
            >
            <p>
            I am a young gentleman of twenty-four years, hailing from the bustling metropolis of Cairo, situated in the cradle of civilization, Egypt. My journey in the professional realm has been diverse and multifaceted, as I have explored various vocations in search of my true calling. Alas, it was in the domain of front-end development that my ardor for the craft was kindled. In addition to my proficiency in the art of coding, I possess the ability to converse fluently in three distinct languages, and I am perpetually consumed by a fervent desire to expand my horizons and acquire new knowledge.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Model;

