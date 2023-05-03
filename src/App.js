import './App.css';
import { useState, useEffect, lazy } from 'react';
import Toggle from './components/darkmode/Toggle';
import { createContext } from 'react';
import { AuthContextProvider } from './pages/authContext/AuthContext';
import { AnimatePresence } from 'framer-motion';
import OpeningAnimation from './components/home/openingAnimations/OpeningAnimation';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import { HomeAnimations } from './animation/HomeAnimations';
const MainRoutes = lazy(() => import('./components/routes/MainRoutes'));


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);


  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsAnimationFinished(true);
      HomeAnimations();
    }, 7500); // 8000ms is the duration of the animation
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
          <AnimatedNav />
          <AuthContextProvider initial={false}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <AnimatePresence>
                  <MainRoutes />
                </AnimatePresence>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </ThemeContext.Provider>
          </AuthContextProvider>
          </>
      )
      }
    </div>
  );
}

export default App;