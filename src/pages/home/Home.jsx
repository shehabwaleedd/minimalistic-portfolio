import React from 'react';
import Main from './main/Main';
import './Home.css';
import { motion } from 'framer-motion';

const Home = ({ isMobile, setIsMobile, isAbout, setIsAbout, navOpen, language, setLanguage, languageExpanded, setLanguageExpanded, isTablet}) => {
  return (
    <motion.section className="homeee" >
      <div className="containererr"></div>
      {isMobile ? (
        <div className="titles">
          <div className="titled title-1" style={{ width: "100vw" }}>
            <h1 style={{ fontSize: "1.5rem", left: "3.5rem" }}>The Boy Who Lived</h1>
          </div>
        </div>
      ) : (
        <div className="titles">
          <div className="titled title-1">
            <h1>The Boy Who Lived</h1>
          </div>
        </div>
      )}
      <div className="overlay"></div>
      <div className="main__containerr">
        <Main isMobile={isMobile} isTablet={isTablet} navOpen={navOpen} language={language} />
      </div>
    </motion.section>
  );
};
export default Home;
