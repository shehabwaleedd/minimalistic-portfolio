// import React from 'react'
// import './Home.css'
// import Socials from './Socials'
// import Data from './Data'
// import ScrollDown from './ScrollDown'
// import { AnimatePresence, motion } from 'framer-motion'


// const Home = () => {
//   return (
//     <AnimatePresence>
//       <motion.div initial={{ x: "-100vw" }} animate={{ x: "0%" }} transition={{ duration: 0.95, ease: "easeOut" }} exit={{ opacity: 1, y: "-200vh" }}>
//         <section className='home section' id='home'>
//           <div className="home__container container grid">
//             <motion.div className="home__content grid" initial={{ x: "-100vw" }} animate={{ x: "0%" }} transition={{ duration: 0.95, ease: "easeOut" }} exit={{ opacity: 0 }}>
//               <Socials />
//               <div className="home__img"></div>
//               <Data />
//             </motion.div>
//             <ScrollDown />
//           </div>
//         </section>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default Home

import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import ScrollForMore from "./ScrollForMore";
import "./Home.css"

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='about about__containerr'>
        <div className='about__row center'>
          <div className='image__container'>
            <div
              className='about__thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='about__frame'>
              <ScrollForMore />
                <div className="frame__containerr">
                
                  <Link to={`/about`}>
                    
                    <ProgressiveImage src={require("../../assets/profile5.jpg")} placeholder={require("../../assets/profile5.jpg")}>
                      {(src) => (
                        <motion.img src={src} alt='Shehab Waleed' whileHover={{ scale: 1.5 }} transition={transition}
                        />
                        
                      )}
                      
                    </ProgressiveImage>
                    
                  </Link>
                  
                </div>
                
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='about__information'>
              <div className='about__title'>Shehab Waleed</div>
              <div className='about__location'>
                <span>30°03'60.00" N </span>
                <span>31°12'60.00" E</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
