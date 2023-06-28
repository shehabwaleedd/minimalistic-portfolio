import React, { useEffect, useState, useRef } from 'react';
import './Portfolio.scss';
import projectsData from './Data';
import { PortfolioAnimations } from '../../animation/PortfolioAnimations';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useTranslation } from 'react-i18next';

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
    PortfolioAnimations();
    runAnimation();
  }, []);

  let screen = useRef(null);
  let body = useRef(null);


  const runAnimation = () => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 0.5,
      height: "100%",
      top: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 0.5,
      top: "-100%",
      ease: Power3.easeInOut,
      delay: 0.1,
    });
    tl.set(screen, { top: "100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(1);
  };


  return (
    <>
      {Props.isMobile ? (
        <React.Fragment>
          <div className="projects__load-container">
            <div className="projects__load-screen" ref={(el) => (screen = el)}></div>
          </div>
          <section className="portfolio" ref={(el) => (body = el)}>
            <div className="portfolio__container" >
              <div className="menu">
                <motion.div className="text-container" style={{ textAlign: Props.language === "ar" ? "right" : "left" }}>
                  <div className="workk__work">
                    <h1 className='work__work-text' style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "", left: Props.language === "ar" ? "15rem" : "0" }}>{t("portfolio__work_title")}</h1>
                  </div>
                  <div className="scrollbarr">
                    {projectsData.map((item, index) => (
                      <div className="work__title" key={item.id} onMouseOver={() => handleTextHover(item.id)} onMouseLeave={() => handleTextLeave()}>
                          <div className="menu-text">
                            <Link to={`/projectDetails/${index}`}><h1 data-text={item.title}>{item.title}</h1></Link>
                            <div className="categories">
                              <p>{item.category[3]}</p>
                            </div>
                          </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="projects__load-container">
            <div className="projects__load-screen" ref={(el) => (screen = el)}></div>
          </div>
          <section className="portfolio" ref={(el) => (body = el)}>
            <div className="portfolio__container" >
              <div className="menu">
                <div className="menu__item-image_wrapper">
                  <div className="menu__item-image_inner">
                    {projectsData.map((image) => (
                      <div className="image-wrapper" key={image.id}>
                        <img
                          src={image.image}
                          alt={image.title}
                          className={selectedImage === image.image ? 'menu__item-image.fade-in' : 'menu__item-image'}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div className="text-container" style={{ textAlign: Props.language === "ar" ? "right" : "left" }}>
                  <div className="workk__work">
                    <h1 className='work__work-text' style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "", left: Props.language === "ar" ? "25rem" : "0" }}>{t("portfolio__work_title")}</h1>
                  </div>
                  <div className="scrollbarr">
                    {projectsData.map((item, index) => (
                      <div className="work__title" key={item.id} onMouseOver={() => handleTextHover(item.id)} onMouseLeave={() => handleTextLeave()}>
                        <div className="menu-item-wrapper">
                          <div className="menu-arrow">
                            <i className='bx bx-right-arrow-alt' ></i>
                          </div>
                          <div className="menu-text">
                            <Link to={`/projectDetails/${index}`}><h1 data-text={item.title}>{item.title}</h1></Link>
                            <div className="categories">
                              <p>{item.category[0]}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </>
  );
}

export default Portfolio;

