import "./AnimatedLayout.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProductDesigner from "./ProductDesigner";
import UXDesigner from "./UxDesigner";
import VisualDesginer from "./VisualDesginer";

const cardVariants = {
    open: {
      height: "100%",
      width: "18rem",
      gridRow: "auto",
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    closed: {
      height: "18rem",
      width: "18rem",
      gridRow: "auto",
      display: "flex",
      alignItems: "center",
      gridColumn: " span 2",
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

const childVariants = {
    open: {
        opacity: 0,
        display: "none",
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    closed: {
        opacity: 1,
        y: -10,
        x: -60,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

const AnimatedLayout = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleTab = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <motion.section className="servicess section" id="services">
            <h2 className="section__title">{t("section__services")}</h2>
            <span className="section__subtitle">{t("section__subtitle_services")}</span>
            <div className="sectionn">
                <motion.div
                    key={0}
                    className={`card ${activeIndex === 0 ? "active" : "is-inactive"} servicess__content`}
                    variants={cardVariants}
                    animate={activeIndex === 0 ? "open" : "closed"}
                    initial="closed"
                    onClick={() => toggleTab(0)}
                    exit="closed"
                >

                    <div>
                        <motion.i
                            variants={childVariants}
                            animate={activeIndex === 0 ? "open" : "closed"}
                            className="uil uil-web-grid services__icon"></motion.i>
                        <motion.h3
                            variants={childVariants}
                            animate={activeIndex === 0 ? "open" : "closed"}
                            className="services__title">{t("services__title-product-designer")} <br /> {t("services__modal__title-designer")}</motion.h3>
                    </div>
                    {activeIndex === 0 && <ProductDesigner />}
                    <motion.span
                        variants={childVariants}
                        animate={activeIndex === 0 ? "open" : "closed"}
                        className="servicess__button">{t("services__button")} <i className="uil uil-arrow-right servicess__button-icon"></i></motion.span>
                </motion.div>

                <motion.div
                    key={1}
                    className={`card ${activeIndex === 1 ? "active" : "is-inactive"} servicess__content`}
                    variants={cardVariants}
                    animate={activeIndex === 1 ? "open" : "closed"}
                    initial="closed"
                    onClick={() => toggleTab(1)}
                    exit="closed"
                >
                    <div>
                        <motion.i
                            variants={childVariants}
                            animate={activeIndex === 1 ? "open" : "closed"}
                            className="uil uil-arrow services__icon"></motion.i>
                        <motion.h3
                            variants={childVariants}
                            animate={activeIndex === 1 ? "open" : "closed"}
                            className="services__title">UI/UX <br /> {t("services__modal__title-designer")}</motion.h3>
                    </div>
                    {activeIndex === 1 && <UXDesigner />}
                    <motion.span
                        variants={childVariants}
                        animate={activeIndex === 1 ? "open" : "closed"}
                        className="servicess__button">{t("services__button")} <i className="uil uil-arrow-right servicess__button-icon"></i></motion.span>
                </motion.div>

                <motion.div
                    key={2}
                    className={`card ${activeIndex === 2 ? "active" : "is-inactive"} servicess__content`}
                    variants={cardVariants}
                    animate={activeIndex === 2 ? "open" : "closed"}
                    initial="closed"
                    onClick={() => toggleTab(2)}
                    exit={{ height: 0, transition: { duration: 2.3 } }}
                >
                    <div>
                        <motion.i
                            variants={childVariants}
                            animate={activeIndex === 2 ? "open" : "closed"}
                            className="uil uil-edit services__icon"></motion.i>
                        <motion.h3
                            variants={childVariants}
                            animate={activeIndex === 2 ? "open" : "closed"}
                            className="services__title">{t("services__title-visual-designer")} <br /> {t("services__modal__title-designer")}</motion.h3>
                    </div>
                    {activeIndex === 2 && <VisualDesginer />}
                    <motion.span
                        variants={childVariants}
                        animate={activeIndex === 2 ? "open" : "closed"}
                        className="servicess__button">{t("services__button")} <i className="uil uil-arrow-right servicess__button-icon"></i></motion.span>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AnimatedLayout