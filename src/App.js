import './App.css';
import { useState, useEffect, useRef } from 'react';
import Toggle from './components/nav/darkmode/Toggle';
import { createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import ScrollUp from './components/scrollUp/ScrollUp';
import Cursor from './components/cursor/Cursor';
import i18next from 'i18next';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HomeAnimations } from './animation/HomeAnimations';
import Index from './animation/PreLoader';
import Routers from './routes/Routers';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');
  const [navOpen, setNavOpen] = useState(false)
  const [language, setLanguage] = useState(i18next.language);
  const [languageExpanded, setLanguageExpanded] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(true);
  const location = useLocation();
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [preLoaderAnimationShown, setPreLoaderAnimationShown] = useState(
    sessionStorage.getItem('hasAnimationShown')
  );
  useEffect(() => {
    if (shouldReload) {
      window.location.reload();
      setShouldReload(false);
    }
  }, [shouldReload]);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3500)
      }

    )()

  }, [])


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
      <div className="App" id={theme} ref={containerRef}>
        {isLoading && !preLoaderAnimationShown ? (
          <Index />
        ) : (
          <>
            <AnimatedNav location={location} setIsTablet={setIsTablet} isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} isMobile={isMobile} setIsMobile={setIsMobile} isAbout={isAbout} setIsAbout={setIsAbout} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} setNavOpen={setNavOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
            <Cursor />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname} >
                  <Route path='/*' element={<Routers isTablet={isTablet} isMobile={isMobile} navOpen={navOpen} language={language} />} />
                </Routes>
              </AnimatePresence>
              <ScrollUp />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </ThemeContext.Provider>
          </>
        )}
      </div>
    </>
  );
}

export default App;