import React, { useEffect } from 'react'
import './AnimatedNav.scss'

import MobileNavbar from './animatedNavResponsive/mobileNavbar/MobileNavbar'
import DesktopNavbar from './animatedNavResponsive/desktopNavbar/DesktopNavbar'

const AnimatedNav = ({ location, setIsTablet, isMobile, setIsMobile, isAbout, setIsAbout, setOpen, navOpen, setNavOpen, language, isMenuVisible, setLanguage, languageExpanded, setLanguageExpanded, setMenuVisible, shouldReload, setShouldReload }) => {



  useEffect(() => {

    setNavOpen(false); // Close the navbar when the location changes
    // eslint-disable-next-line 
  }, [location, setNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 935);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsTablet]);

  return (
    <nav className='nav'>
      {isMobile ? (
        <MobileNavbar isMobile={isMobile} setIsMobile={setIsMobile} isAbout={isAbout} setIsAbout={setIsAbout} setOpen={setOpen} navOpen={navOpen} setNavOpen={setNavOpen} language={language} isMenuVisible={isMenuVisible} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} setMenuVisible={setMenuVisible} shouldReload={shouldReload} setShouldReload={setShouldReload} />
      ) : (
        <DesktopNavbar isAbout={isAbout} setIsAbout={setIsAbout} isMobile={isMobile} setIsMobile={setIsMobile} setOpen={setOpen} navOpen={navOpen} setNavOpen={setNavOpen} language={language} isMenuVisible={isMenuVisible} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} setMenuVisible={setMenuVisible} shouldReload={shouldReload} setShouldReload={setShouldReload} />
      )}
    </nav>
  )
}


export default AnimatedNav