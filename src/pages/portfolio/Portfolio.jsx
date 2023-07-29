import React, { useEffect, useState, useRef } from 'react';
import './Portfolio.scss';
import projectsData from './Data';
import MobilePortfolio from './portfolioResponsive/mobilePortfolioResponsive/MobilePortfolio';
import TabletPortfolio from './portfolioResponsive/tabletPortfolioResponsive/TabletPortfolio';
import DesktopPortfolio from './portfolioResponsive/desktopPortfolioResponsive/DesktopPortfolio';
import RunAnimations from '../../animation/RunAnimations';
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
      RunAnimations(screen, body);
      sessionStorage.setItem('hasProjectsShown', 'true');
    }
  }, []);
  let screen = useRef(null);
  let body = useRef(null);

  return (
    <>
      <div className="projects__load-container">
        <div className="projects__load-screen" ref={(el) => (screen = el)}></div>
      </div>
      {isMobile ? (
        <MobilePortfolio language={language} body={body} screen={screen} />
      ) : isTablet ? (
        <TabletPortfolio language={language} body={body} screen={screen} />
      ) : (
        <DesktopPortfolio language={language} body={body} screen={screen} handleTextHover={handleTextHover} handleTextLeave={handleTextLeave} selectedImage={selectedImage} />
      )}
    </>
  );
}

export default Portfolio;

