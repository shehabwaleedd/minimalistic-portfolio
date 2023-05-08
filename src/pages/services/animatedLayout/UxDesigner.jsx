
import React from "react";
import { motion } from "framer-motion";
import "./AnimatedLayout.css"
import { useTranslation } from 'react-i18next'



const UXDesigner = () => {
    const { t } = useTranslation()

    // Define the animation variants for the modal
    const modalVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            className="ux-designer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div className="ux__desginer__details" variants={modalVariants} initial="closed" animate="open">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="servicess__modal-title">{t("services__modal__title-UI/UX-designer")}</h3>
                <div className="servicess__modal-content">
                    <p className="servicess__modal-description">{t("services__modal__UI/UX-description")}</p>
                    <ul className="servicess__modal-services grid">
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="servicess__modal-info">{t("services__modal__UI/UX-designer-info-1")}</p>
                        </li>
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle servicess__modal-icon"></i>
                            <p className="servicess__modal-info">{t("services__modal__UI/UX-designer-info-2")}</p>
                        </li>
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle servicess__modal-icon"></i>
                            <p className="servicess__modal-info">{t("services__modal__UI/UX-designer-info-3")}</p>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default UXDesigner;


// import "./AnimatedLayout.css";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import ProductDesigner from "./ProductDesigner";
// import UXDesigner from "./UxDesigner";
// import VisualDesginer from "./VisualDesginer";

// const AnimatedLayout = () => {
//   const { t } = useTranslation();
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleTab = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const variants = {
//     open: {
//       width: "calc(100% - 6rem)",
//       transition: {
//         duration: 0.4,
//         ease: "easeInOut",
//       },
//     },
//     closed: {
//       width: "calc((100% - 6rem) / 3)",
//       transition: {
//         duration: 0.4,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const childVariants = {
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//     closed: {
//       opacity: 0,
//       y: -20,
//       transition: {
//         duration: 0.2,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.section className="servicess" id="services">
//       <div className="sectionn">
//         <motion.div
//           variants={variants}
//           animate={activeIndex === 0 ? "open" : "closed"}
//           initial="closed"
//           className={`card ${activeIndex === 0 ? "active" : "is-inactive"}`}
//           onClick={() => toggleTab(0)}
//         >
//           <motion.i
//             variants={childVariants}
//             animate={activeIndex === 0 ? "open" : "closed"}
//             className="uil uil-web-grid servicess__icon"
//           ></motion.i>
//           <motion.h3
//             variants={childVariants}
//             animate={activeIndex === 0 ? "open" : "closed"}
//             className="servicess__modal-title"
//           >
//             {t("services__modal-title-product-designer")}
//           </motion.h3>
//           {activeIndex === 0 && <ProductDesigner />}
//           <motion.p
//             variants={childVariants}
//             animate={activeIndex === 0 ? "open" : "closed"}
//           >
//             {t("services__modal__description-product-designer")}
//           </motion.p>
//         </motion.div>

//         <motion.div
//           variants={variants}
//           animate={activeIndex === 1 ? "open" : "closed"}
//           initial="closed"
//           className={`card ${activeIndex === 1 ? "active" : "is-inactive"}`}
//           onClick={() => toggleTab(1)}
//         >
//           <motion.i
//             variants={childVariants}
//             animate={activeIndex === 1 ? "open" : "closed"}
//             className="uil uil-web-grid servicess__icon"
//           ></motion.i>
//           <motion.h3
//             variants={childVariants}
//             animate={activeIndex === 1 ? "open" : "closed"}
//             className="servicess__modal-title"
//           >
//             {t("services__modal__title-UI/UX-designer")}
//           </motion.h3>
//           {activeIndex === 1 && <UXDesigner />}
//             <motion.p   variants={childVariants}
//             animate={activeIndex === 1 ? "open" : "closed"}>
//             {t("services__modal__description-UI/UX-designer")}
//             </motion.p>
//         </motion.div>

//         <motion.div 
//             variants={variants}
//             animate={activeIndex === 2 ? "open" : "closed"}
//             initial="closed"
//             className={`card ${activeIndex === 2 ? "active" : "is-inactive"}`}
//             onClick={() => toggleTab(2)}
//         >
//             <motion.i
//             variants={childVariants}
//             animate={activeIndex === 2 ? "open" : "closed"}
//             className="uil uil-web-grid servicess__icon"
//             ></motion.i>
//             <motion.h3
//             variants={childVariants}
//             animate={activeIndex === 2 ? "open" : "closed"}
//             className="servicess__modal-title"
//             >
//             {t("services__modal__title-visual-designer")}
//             </motion.h3>
//             {activeIndex === 2 && <VisualDesginer />}
//             <motion.p   variants={childVariants}
//             animate={activeIndex === 2 ? "open" : "closed"}>

//             {t("services__modal__description-visual-designer")}
//             </motion.p>
//         </motion.div>
//         </div>
//     </motion.section>
//     );
// };

// export default AnimatedLayout;