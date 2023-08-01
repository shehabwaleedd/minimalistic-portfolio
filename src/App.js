import './App.css';
import { useState, useEffect } from 'react';
import Toggle from './components/nav/darkmode/Toggle';
import { createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import ScrollUp from './components/scrollUp/ScrollUp';
import Cursor from './components/cursor/Cursor';
import i18next from 'i18next';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './pages/portfolio/projectDetails/ProjectDetails';
import AboutPage from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

import { HomeAnimations } from './animation/HomeAnimations';
import Home from './pages/home/Home';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');
  // const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [navOpen, setNavOpen] = useState(false)
  const [language, setLanguage] = useState(i18next.language);
  const [languageExpanded, setLanguageExpanded] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(true);
  const location = useLocation();


  // useEffect(() => {
  //   if (shouldReload) {
  //     window.location.reload();
  //   }
  // }, [shouldReload]);

  // useEffect(() => {

  //   const timeout = setTimeout(() => {
  //     setIsAnimationFinished(true);
  //     HomeAnimations();

  //   }, 8000); // 8000ms is the duration of the animation
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);



  // useEffect(() => {
  //   if (isAnimationFinished) {
  //     document.body.classList.add('no-scroll');
  //   } else {
  //     document.body.classList.remove('no-scroll');
  //   }
  // }, []);

  useEffect(() => {
    const isHomePage = location.pathname === '/' || location.pathname === '/about';

    if (isHomePage) {
      const hasAnimationShown = sessionStorage.getItem('hasAnimationShown');
      if (isMobile && navOpen) {
        document.body.classList.add('no-scroll')
      }
      if (!hasAnimationShown) {
        HomeAnimations();
        sessionStorage.setItem('hasAnimationShown', 'true');
      }

      if (isMobile) {
        document.body.classList.remove('no-scroll');
      }
      else {
        document.body.classList.add('no-scroll')
      }
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobile, location, navOpen]);

  useEffect(() => {
    const notHome = location.pathname === '/';
    setMenuVisible(notHome);
  }, [location.pathname]);

  useEffect(() => {
    const isAbout = location.pathname === '/about';
    setIsAbout(isAbout);
  }, [location.pathname]);





  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <div className="noise"></div>
      <div className="App" id={theme}>
        {/* {!isAnimationFinished && <OpeningAnimation />}
        {isAnimationFinished && (
          <> */}

        <AnimatedNav setIsTablet={setIsTablet} isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} isMobile={isMobile} setIsMobile={setIsMobile} isAbout={isAbout} setIsAbout={setIsAbout} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} setNavOpen={setNavOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
        <Cursor />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname} >
              <Route path='/about' key={location.pathname} element={<AboutPage isMobile={isMobile} language={language} isTablet={isTablet}/>} />
              <Route path='/projects' key={location.pathname} element={<Portfolio isTablet={isTablet} isMobile={isMobile} language={language} l />} />
              <Route path="/" element={<Home key={location.pathname} isTablet={isTablet} isMobile={isMobile} navOpen={navOpen} language={language} />} />
              <Route path="/contact" element={<Contact key={location.pathname} isTablet={isTablet} isMobile={isMobile} language={language} />} />
              <Route path="/projectDetails/:id" element={<ProjectDetails key={location.pathname} isTablet={isTablet} isMobile={isMobile} />} />
            </Routes>
          </AnimatePresence>
          <ScrollUp />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </ThemeContext.Provider>
        {/* </>
        )
        } */}
      </div>
    </>
  );
}

export default App;