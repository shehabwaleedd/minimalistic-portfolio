import React, { useEffect, useRef } from 'react';
import i18next from 'i18next';
import './DropDownMenu.css';
import MobileDrop from './dropResponsive/mobileDrop/MobileDrop';
import DesktopDrop from './dropResponsive/desktopDrop/DesktopDrop';

const DropDownMenu = ({ isMobile, isMenuVisible, navOpen, language, setLanguage, setShouldReload, setLanguageExpanded, languageExpanded }) => {

  const handleLanguageExpanded = () => {
    setLanguageExpanded(!languageExpanded);
  }
  let menuRef = useRef();
  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setShouldReload(true);
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
    // to make the menu disappear when the page isn't home page.
    <div className={`menu__container ${isMenuVisible || navOpen ? '' : 'hidden'}`} ref={menuRef}>
      {isMobile ? (
        <MobileDrop navOpen={navOpen} language={language} handleLanguageExpanded={handleLanguageExpanded} languageExpanded={languageExpanded} handleEnglishClick={handleEnglishClick} handleGermanClick={handleGermanClick} handleFrenchClick={handleFrenchClick} handleArabicClick={handleArabicClick} />
      ) : (
        <DesktopDrop navOpen={navOpen} language={language} handleLanguageExpanded={handleLanguageExpanded} languageExpanded={languageExpanded} handleEnglishClick={handleEnglishClick} handleGermanClick={handleGermanClick} handleFrenchClick={handleFrenchClick} handleArabicClick={handleArabicClick} />
      )}
    </div>
  );

};

export default DropDownMenu;
