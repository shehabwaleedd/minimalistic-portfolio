
// import * as React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProgressiveImage from "react-progressive-image";
// import ScrollForMore from "./ScrollForMore";
// import Socials from "./Socials";
// import "./Home.css"

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

// const Home = ({ imageDetails, image }) => (
//   <>
//     <main>
//       <div className='about about__containerr'>
//         <div className='about__row center'>
//           <div className='image__container'>
//             <motion.div className='about__socials' initial={{ opacity: 0, x: -50}} animate={{opacity: 1, x:0, transition: { delay: 1, ...transition }}} exit={{ opacity: 1 }} transition={transition}>
//               <Socials />
//             </motion.div>
//             <div
//               className='about__thumbnail'
//               ref={image}
//               style={{
//                 width: imageDetails.width,
//                 height: imageDetails.height,
//               }}>
//               <motion.div className='about__frame' initial={{opacity: 0}} animate={{opacity: 1, transition: { delay: 0.5, ...transition }}} exit={{ y: "-5vh", transition: { delay: 0.5, ...transition }}}>
//                 <div className="frame__containerr">

//                   <Link to={`/about`}>

//                     <ProgressiveImage src={require("../../assets/profile5.jpg")} placeholder={require("../../assets/profile5.jpg")}>
//                       {(src) => (
//                         <motion.img src={src} alt='Shehab Waleed' whileHover={{ scale: 1.1 }} transition={transition}
//                         />
//                       )}
//                     </ProgressiveImage>
//                   </Link>
//                 </div>
//               </motion.div>
//               <motion.div
//               initial={{ opacity: 0, y: 50}} animate={{opacity: 1, y: 0, transition: { delay: 1, ...transition }}} 

//               exit={{ opacity: 0 }}
//               transition={transition}
//               className='about__information'>
//               <div className='about__title'>Shehab Waleed</div>
//               <div className='about__location'>
//                 <span>30°03'60.00" N </span>
//                 <span>31°12'60.00" E</span>
//               </div>
//             </motion.div>
//             </div>
//             <div className=""></div>
//           </div>
//         </div>
//       </div>
//     </main>
//   </>
// );

// export default Home;