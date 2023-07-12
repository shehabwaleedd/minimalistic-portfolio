import React, { useEffect, useState, useRef } from 'react';
import './Portfolio.scss';
import projectsData from './Data';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';
import { BiRightArrowAlt } from 'react-icons/bi';

const Portfolio = (Props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTextHover = (imageId) => {
    const selected = projectsData.find((image) => image.id === imageId);
    setSelectedImage(selected.image);
  }

  const handleTextLeave = () => {
    setSelectedImage(null);
  }

  

  const { t } = useTranslation();

  useEffect(() => {
    const hasProjectsShown = sessionStorage.getItem('hasProjectsShown');

    if (!hasProjectsShown) {
      runAnimation();
      sessionStorage.setItem('hasProjectsShown', 'true');
    }
  }, []);

  let screen = useRef(null);
  let body = useRef(null);


  const runAnimation = () => {
    const tl = gsap.timeline();
    tl.to(screen, {
      duration: 0.5,
      height: "100%",
      top: "0%",
      ease: "power3.inOut",
    });
    tl.to(screen, {
      duration: 0.5,
      top: "-100%",
      ease: "power3.inOut",
      delay: 0.1,
    });
    tl.set(screen, { top: "100%" });
    gsap.to(body, {
      opacity: 1,
      duration: 0.3,
      pointerEvents: "auto",
      ease: "power4.inOut",
      delay: 1,
    });
  };


  return (
    <>
      {Props.isMobile ? (
        <React.Fragment>
          <div className="projects__load-container">
            <div className="projects__load-screen" ref={(el) => (screen = el)}></div>
          </div>
          <motion.section className="portfolio" ref={(el) => (body = el)}>
            <div className="portfolio__container" >
              <div className="menu">
                <motion.div className="text-container" style={{ textAlign: Props.language === "ar" ? "right" : "left" }}>
                  <div className="workk__work">
                    <h1 className='work__work-text' style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "", left: Props.language === "ar" ? "15rem" : "0" }}>{t("portfolio__work_title")}</h1>
                  </div>
                  <div className="scrollbarr">
                    {projectsData.map((item, index) => (
                      <div className="work__title" key={index} onMouseOver={() => handleTextHover(item.id)} onMouseLeave={() => handleTextLeave()} style={{ height: "4rem", gap: "2rem" }}>
                        <div className="menu-text">
                          <Link to={`/projectDetails/${index}`}><h1 data-text={item.title}>{item.title}</h1></Link>
                          <div className="categories">
                            <p>{item.category[0]}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </React.Fragment>
      ) : (
        <motion.div>
          <div className="projects__load-container">
            <div className="projects__load-screen" ref={(el) => (screen = el)}></div>
          </div>
          <motion.section className="portfolio" ref={(el) => (body = el)}  initial={{ opacity: 0}} animate={{ opacity: 1, y: 0 ,transition: { delay: 0.7, duration: 1, ease: [0.42, 0, 0.58, 1]}}} transition={{ duration: 2 }} exit={{ opacity: 0, y: -100 , transition: { delay: 0.3, staggerChildren: 1.5, duration: 2, ease: "easeInOut" }}}>
            <motion.div className="portfolio__container" >
              <motion.div className="menu">
                <motion.div className="menu__item-image_wrapper" exit={{ opacity: 0, y: -100 , transition: { delay: 0.3, staggerChildren: 1.5, duration: 2, ease: "easeInOut" }}}>
                  <div className="menu__item-image_inner">
                    {projectsData.map((image) => (
                      <motion.div className={`image-wrapper ${image.classProject}`} key={image.id} >
                        <img
                          src={image.image}
                          alt={image.title}
                          className={selectedImage === image.image ? `menu__item-image.fade-in` : 'menu__item-image'}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div className="text-container" style={{ textAlign: Props.language === "ar" ? "right" : "left" }}  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} exit={{ opacity: 0, y: -100 , transition: { delay: 0.3, staggerChildren: 1.5, duration: 2, ease: "easeInOut" }}}>
                  <motion.div className="workk__work">
                    <motion.h1 className='work__work-text' style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "", left: Props.language === "ar" ? "25rem" : "0" }}>{t("portfolio__work_title")}</motion.h1>
                  </motion.div>
                  <AnimatePresence mode='wait'>
                    <motion.div className="scrollbarr" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} exit={{ opacity: 0, y: -100 }}>
                      {projectsData.map((item, index) => (
                        <motion.div className="work__title" key={index} onMouseOver={() => handleTextHover(item.id)} onMouseLeave={() => handleTextLeave()}  initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} exit={{ opacity: 0,}}>
                          <motion.div className="menu-item-wrapper"  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} exit={{ opacity: 0}}>
                            <motion.div className="menu-arrow">
                              <BiRightArrowAlt style={{ fontSize: "2.3rem", marginTop: "1.75rem", color: "var(--title-color)" }} />
                            </motion.div>
                            <motion.div className="menu-text"  initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} exit={{ opacity: 0}}>
                              <Link to={`/projectDetails/${index}`}><h1 data-text={item.title}>{item.title}</h1></Link>
                              <motion.div className="categories">
                                <motion.p>{item.category[0]}</motion.p>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
      )}
    </>
  );
}

export default Portfolio;

