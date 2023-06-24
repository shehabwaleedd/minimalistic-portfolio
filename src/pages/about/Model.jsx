import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./About.scss"
import cv from "../../assets/Shehab_Waleed.docx"
import { t } from "i18next";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


const Model = (Props) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  // const [canScroll, setCanScroll] = useState(false);

  // useEffect(() => {
  //   if (canScroll === false) {
  //     document.querySelector("body").classList.add("no-scroll");
  //   } else {
  //     document.querySelector("body").classList.remove("no-scroll");
  //   }
  // }, [canScroll]);

  return (
    <section className="about section">
      <div className="about__pic">
        <img src={require("../../assets/profile.jpg")} alt="profile" />
      </div>
      {Props.isMobile ? (
        <div className='detailed__containerr'>
          <div className='detailed__row'>
            <div className="aboutttt__container containered">
              <div className="about__content" style={{ marginTop: Props.language === "fr" ? "10rem" : Props.language === "de" || Props.language === "en" ? "35rem" : "22rem" }}>
                <h1 style={{ textAlign: Props.language === "ar" ? "right" : "left", paddingRight: Props.language === "ar" ? "3rem" : "0", fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "fr" ? "2rem" : "3rem" }}>{t("navbar__about")}</h1>
                <p style={{ fontSize: Props.language === "fr" ? "0.8rem" : "0.8rem", fontFamily: Props.language === "ar" ? "Almarai" : "", textAlignLast: Props.language === "ar" ? "right" : "left" }}>
                  {t("about__description")}
                </p>
                <div className="cv__button" style={{ justifyContent: Props.language === "ar" ? "flex-end" : "flex-start", paddingRight: Props.language === "ar" ? "1rem" : "0rem", paddingBottom: "6rem"}}>
                  <button>
                    <i className='bx bx-down-arrow-alt scroll-down'></i>
                    <a href={cv} download>{t("about__resume")}</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='detailed__containerr'>
          <div className='detailed__row'>
            <div className="aboutttt__container containered">
              <div className="about__content" style={{ marginTop: Props.language === "fr" ? "10rem" : Props.language === "de" || Props.language === "en" ? "7rem" : "0" }}>
                <h1 style={{ textAlign: Props.language === "ar" ? "right" : "left", paddingRight: Props.language === "ar" ? "3rem" : "0", fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "fr" ? "2rem" : "3rem" }}>{t("navbar__about")}</h1>
                <p style={{ fontSize: Props.language === "fr" ? "0.8rem" : "0.8rem", fontFamily: Props.language === "ar" ? "Almarai" : "", textAlignLast: Props.language === "ar" ? "right" : "left" }}>
                  {t("about__description")}
                </p>
                <div className="cv__button" style={{ justifyContent: Props.language === "ar" ? "flex-end" : "flex-start", paddingRight: Props.language === "ar" ? "19rem" : "0rem" }}>
                  <button>
                    <i className='bx bx-down-arrow-alt scroll-down'></i>
                    <a href={cv} download>{t("about__resume")}</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Model;

