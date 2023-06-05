import './App.scss';
import { useState, useEffect } from 'react';
import Toggle from './components/nav/darkmode/Toggle';
import { createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import ScrollUp from './pages/home/supplements/ScrollUp';
import MainRoutes from './navItems/routes/MainRoutes';
import Footer from './pages/footer/Footer';
import Cursor from './components/cursor/Cursor';


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [navOpen, setNavOpen] = useState(false)


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
        <AnimatedNav navOpen={navOpen} setNavOpen={setNavOpen} />
        <Cursor />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <AnimatePresence>
            <MainRoutes />
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