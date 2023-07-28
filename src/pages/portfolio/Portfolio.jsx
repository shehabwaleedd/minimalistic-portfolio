import React, { useEffect, useState, useRef } from 'react';
import './Portfolio.scss';
import projectsData from './Data';
import { gsap } from "gsap";
import MobilePortfolio from './portfolioResponsive/mobilePortfolioResponsive/MobilePortfolio';
import TabletPortfolio from './portfolioResponsive/tabletPortfolioResponsive/TabletPortfolio';
import DesktopPortfolio from './portfolioResponsive/desktopPortfolioResponsive/DesktopPortfolio';
const Portfolio = ({ language, isMobile, isTablet }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleTextHover = (imageId) => {
    const selected = projectsData.find((image) => image.id === imageId);
    setSelectedImage(selected.image);
  }
  const handleTextLeave = () => {
    setSelectedImage(null);
  }
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
      {isMobile ? (
        <MobilePortfolio language={language} body={body} screen={screen}/>
      ) : isTablet ? (
          <TabletPortfolio language={language} body={body} screen={screen}/>
      ) : (
          <DesktopPortfolio language={language} body={body} screen={screen} handleTextHover={handleTextHover} handleTextLeave={handleTextLeave} selectedImage={selectedImage}/>
      )}
    </>
  );
}

export default Portfolio;

