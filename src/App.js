import './App.css';
import Header from './navItems/header/Header';
import { useState, useEffect, lazy, Suspense } from 'react';
import Toggle from './components/darkmode/Toggle';
import { createContext } from 'react';
import { AuthContextProvider } from './pages/authContext/AuthContext';
import { AnimatePresence } from 'framer-motion';
import OpeningAnimation from './components/home/openingAnimations/OpeningAnimation';
import Loading from './blogItems/loading/Loading';
const MainRoutes = lazy(() => import('./components/routes/MainRoutes'));


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsAnimationFinished(true);
  //   }, 5000); // 5000ms is the duration of the animation
  //   return () => clearTimeout(timeout);
  // }, []);

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className="App" id={theme}>
      {/* {!isAnimationFinished && <OpeningAnimation />}
      {isAnimationFinished && (
        <> */}
          <AuthContextProvider initial={false}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              <Header />
              <Suspense fallback={<Loading height={100}/>}>
                <AnimatePresence wait>
                  <MainRoutes />
                </AnimatePresence>
              </Suspense>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </ThemeContext.Provider>
          </AuthContextProvider>
        {/* </>
      )} */}
    </div>
  );
}

export default App;