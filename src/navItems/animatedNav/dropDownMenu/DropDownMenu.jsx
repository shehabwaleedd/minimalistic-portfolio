import React, { useState ,useEffect, useRef } from 'react';
import i18next from 'i18next';
import './DropDownMenu.css';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import {FaAngleDown} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const DropDownMenu = (Props) => {

  const handleLanguageExpanded = () => {
    Props.setLanguageExpanded(!Props.languageExpanded);
  };


  const smallScreen = window.innerWidth <= 414 ? true : false;




  let menuRef = useRef();

  useEffect(() => {
    i18next.changeLanguage(Props.language);
  }, [Props.language]);

  const handleLanguageChange = (newLanguage) => {
    Props.setLanguage(newLanguage);
    Props.setShouldReload(true);
  };

  const handleEnglishClick = () => {
    handleLanguageChange('en');
  };
  const handleGermanClick = () => {
    handleLanguageChange('de');
  };

  const handleFrenchClick = () => {
    handleLanguageChange('fr');
  };
  
  const handleArabicClick = () => {
    handleLanguageChange('ar');
  }

  return (
    <div className={`menu__container ${Props.isMenuVisible || Props.navOpen ? '' : 'hidden'}`} ref={menuRef}>
      {Props.isMobile ? (
        <div className="dropdown-menu">
          <div // Change button to div
            onClick={handleLanguageExpanded}
            className={Props.navOpen ? 'dropdown__icon spin' : 'dropdown__icon'}
          >
            <span onClick={handleLanguageExpanded}>
              {Props.language}
              <FaAngleDown />
              <AnimatePresence>
                {Props.languageExpanded && (
                  <motion.div
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 3, opacity: 1 }}
                    exit={{ x: 15, opacity: 0 }}
                    className="language__dropdown"
                    style={{
                      top: Props.navOpen ? "-3rem" : "3rem",
                      left: Props.navOpen ? Props.language === "ar" ? "-4rem" : "-8rem" : Props.language === "ar" ? "-6rem" : smallScreen ? "-10rem" : "-5rem",
                      flexDirection: Props.language === 'ar' ? 'row-reverse' : 'row',
                      width: "16rem"
                    }}
                  >
                    <div className="language__dropdown-link" onClick={handleEnglishClick}>
                      <span className="language__text">en</span>
                    </div>
                    <div className="language__dropdown-link" onClick={handleGermanClick}>
                      <span className="language__text">de</span>
                    </div>
                    <div className="language__dropdown-link" onClick={handleFrenchClick}>
                      <span className="language__text">fr</span>
                    </div>
                    <div className="language__dropdown-link" onClick={handleArabicClick}>
                      <span className="language__text">ar</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
            <div className={Props.navOpen ? 'language__dash spin' : 'language__dash'}></div>
          </div>
        </div>
      ) : (
        <div className="dropdown-menu">
          <div // Change button to div
            onClick={handleLanguageExpanded}
            className={Props.navOpen ? 'dropdown__icon spin' : 'dropdown__icon'}
          >
            <span onClick={handleLanguageExpanded}>
              {Props.language}
              <FaAngleDown />
              <AnimatePresence>
                {Props.languageExpanded && (
                  <motion.div
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 3, opacity: 1 }}
                    exit={{ x: 15, opacity: 0 }}
                    className="language__dropdown"
                    style={{
                      top: Props.navOpen ? "-3rem" : "",
                      left: Props.navOpen ? Props.language === "ar" ? "-10rem" : "-10rem" : Props.language === "ar" ? "4rem" : "-20rem",
                      flexDirection: Props.language === 'ar' ? 'row-reverse' : 'row'
                    }}
                  >
                    <div className="language__dropdown-link" onClick={handleEnglishClick}>
                      <span className="language__text">en</span>
                    </div>
                    <div className="language__dropdown-link" onClick={handleGermanClick}>
                      <span className="language__text">de</span>
                    </div>
                    <div className="language__dropdown-link" onClick={handleFrenchClick}>
                      <span className="language__text">fr</span>
                    </div>
                    <div className="language__dropdown-link" onClick={handleArabicClick}>
                      <span className="language__text">ar</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
            <div className={Props.navOpen ? 'language__dash spin' : 'language__dash'}></div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default DropDownMenu;
