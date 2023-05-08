import './App.css';
import { useState, useEffect, lazy } from 'react';
import Toggle from './components/darkmode/Toggle';
import { createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningAnimation from './components/home/openingAnimations/OpeningAnimation';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import { HomeAnimations } from './animation/HomeAnimations';
import ScrollUp from './components/home/supplements/ScrollUp';
const MainRoutes = lazy(() => import('./components/routes/MainRoutes'));


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsAnimationFinished(true);
      HomeAnimations();
    }, 7500); // 8000ms is the duration of the animation
    return () => clearTimeout(timeout);

  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [navOpen]);

  useEffect(() => {
    // Disable scrolling for the first 15 seconds
    document.body.classList.add('no-scroll');
    const timeout = setTimeout(() => {
      document.body.classList.remove('no-scroll');
    }, 18000); // 15000ms = 15 seconds
  
    return () => clearTimeout(timeout);
  }, []);


 
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className="App" id={theme}>
      {!isAnimationFinished && <OpeningAnimation />}
      {isAnimationFinished && (
        <>
          <AnimatedNav navOpen={navOpen} setNavOpen={setNavOpen}/>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <AnimatePresence>
                  <MainRoutes />
                </AnimatePresence>
              <ScrollUp />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </ThemeContext.Provider>
          </>
      )
      }
    </div>
  );
}

export default App;