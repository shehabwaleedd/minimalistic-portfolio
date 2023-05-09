// import React, { useState, useEffect, useRef } from "react";
// import "./Faq.css";
// import { gsap } from "gsap";
// import FaqData from "./Data";
// import { motion, AnimatePresence } from "framer-motion";
// const Faq = () => {

//   const [activeIndexLeft, setActiveIndexLeft] = useState(-1);
//   const [activeIndexRight, setActiveIndexRight] = useState(-1);

//   const handleClick = (index, side) => {
//     if (side === 'left') {
//       setActiveIndexLeft((prevIndex) => (prevIndex === index ? -1 : index));
//     } else if (side === 'right') {
//       setActiveIndexRight((prevIndex) => (prevIndex === index ? -1 : index));
//     }
//   };

//   return (
//     <section className="faq section">
//       <h2 className="section__title">FAQs</h2>
//       <span className="section__subtitle">Frequently Asked Questions</span>
//       <div className="faq__holder">
//         <div className="faq__holder-left">
//           {FaqData.slice(0, FaqData.length / 2).map((item, index) => (
//             <div className="faq__container container grid" key={index}>
//               <div className="faq__header" onClick={() => handleClick(index, 'left')}>
//                 <h3 className="faq__title">{item.id} - {item.question}</h3>
//                 <i className={`${activeIndexLeft === index ? 'uil uil-angle-up' : 'uil uil-angle-down'}`}></i>
//               </div>
//               <AnimatePresence mode='wait'>
//                 {activeIndexLeft === index && (
//                   <motion.div
//                     className="faq__text-container"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
//                     exit={{ height: 0, opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
//                   >
//                     <div className="faq__text">{item.answer}</div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//         <div className="faq__holder-right">
//           {FaqData.slice(FaqData.length / 2).map((item, index) => (
//             <div className="faq__container container grid" key={index}>
//               <div className="faq__header" onClick={() => handleClick(index, 'right')}>
//                 <h3 className="faq__title">{item.id} - {item.question}</h3>
//                 <i className={`${activeIndexRight === index ? 'uil uil-angle-up' : 'uil uil-angle-down'}`}></i>
//               </div>
//               <AnimatePresence>
//                 {activeIndexRight === index && (
//                   <motion.div
//                     className="faq__text-container"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
//                     transition={{
//                       duration: 1,
//                       ease: [0.16, 1, 0.3, 1], // cubic-bezier timing function
//                     }}
//                   >
//                     <div className="faq__text">{item.answer}</div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;

import React, { useState, useEffect, useRef } from "react";
import "./Faq.css";
import { gsap } from "gsap";
import FaqData from "./Data";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeIndexLeft, setActiveIndexLeft] = useState(-1);
  const [activeIndexRight, setActiveIndexRight] = useState(-1);
  const faqRef = useRef(null);

  useEffect(() => {
    const faqContainers = faqRef.current.querySelectorAll(".faq__container");

    faqContainers.forEach((container) => {
      const faqHeader = container.querySelector(".faq__header");
      const faqTextContainer = container.querySelector(".faq__text-container");

      gsap.set(faqTextContainer, { height: 0, opacity: 0 });

      faqHeader.addEventListener("click", () => {
        const isActive = container.classList.contains("active");

        faqContainers.forEach((c) => c.classList.remove("active"));

        if (!isActive) {
          container.classList.add("active");

          gsap.to(faqTextContainer, {
            height: "auto",
            opacity: 1,
            duration: 1,
            ease: "power4.inOut",
          });
        } else {
          gsap.to(faqTextContainer, {
            height: 0,
            opacity: 0,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => container.classList.remove("active"),
          });
        }
      });
    });
  }, []);

  const handleClick = (index, side) => {
    if (side === "left") {
      setActiveIndexLeft((prevIndex) => (prevIndex === index ? -1 : index));
    } else if (side === "right") {
      setActiveIndexRight((prevIndex) => (prevIndex === index ? -1 : index));
    }
  };

  return (
    <section className="faq section">
      <h2 className="section__title">Frequently Asked Questions</h2>
      <div className="faq__holder" ref={faqRef}>
        <div className="faq__holder-left">
          {FaqData.slice(0, FaqData.length / 2).map((item, index) => (
            <div
              className={`faq__container container grid ${activeIndexLeft === index ? "active" : ""
                }`}
              key={index}
            >
              <div className="faq__header" onClick={() => handleClick(index, "left")}>
                <h3 className="faq__title">{item.id} - {item.question}</h3>
                <i className={`uil ${activeIndexLeft === index ? "uil-angle-up" : "uil-angle-down"}`}></i>
              </div>
              <AnimatePresence>
                {activeIndexLeft === index && (
                  <motion.div
                    className="faq__text-container"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1], // cubic-bezier timing function
                    }}
                  >
                    <div className="faq__text">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="faq__holder-right">
          {FaqData.slice(FaqData.length / 2).map((item, index) => (
            <div
              className={`faq__container container grid ${activeIndexRight === index ? "active" : ""
                }`}
              key={index}
            >
              <div className="faq__header" onClick={() => handleClick(index, "right")}>
                <h3 className="faq__title">{item.id} - {item.question}</h3>
                <i className={`uil ${activeIndexRight === index ? "uil-angle-up" : "uil-angle-down"}`}></i>
              </div>
              <AnimatePresence>
                {activeIndexRight === index && (
                  <motion.div
                    className="faq__text-container"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1], // cubic-bezier timing function
                    }}
                  >
                    <div className="faq__text">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;