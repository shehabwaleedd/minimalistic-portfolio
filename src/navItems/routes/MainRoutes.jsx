import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MyStack from '../../pages/about/stack/MyStack';
import AboutPage from '../../pages/about/About';
import Portfolio from '../../pages/portfolio/Portfolio';
import { BlogHome } from '../siteHome/BlogHome';
import Contact from '../../pages/contact/Contact';
import Main from '../../pages/home/main/Main';
import AnimatedNav from '../animatedNav/AnimatedNav';
import ProjectDetails from '../../pages/portfolio/projectDetails/ProjectDetails';
import { useEffect } from 'react';
import { HomeAnimations } from '../../animation/HomeAnimations';
import { useState } from 'react';


const MainRoutes = (Props) => {

  const location = useLocation();
  const [locationState, setLocationState] = useState(location);


  useEffect(() => {
    const isHomePage = location.pathname === '/' || location.pathname === '/about'; // Assuming '/' is the home page route

    if (isHomePage) {
      const hasAnimationShown = localStorage.getItem('hasAnimationShown');

      if (!hasAnimationShown) {
        HomeAnimations();
        localStorage.setItem('hasAnimationShown', 'true');
      }

      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [location]);

    useEffect(() => {
    const notHome = location.pathname === '/';
    Props.setMenuVisible(notHome);
    console.log(notHome);
  }, []);



  return (
      <Routes>
        <Route path='/mystack' element={<MyStack shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path='/about' element={<AboutPage isMobile={Props.isMobile} setIsMobile={Props.setIsMobile}   isAbout={Props.isAbout} setIsAbout={Props.setIsAbout}  shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload}  navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path='/portfolio' element={<Portfolio isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload}navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path="/" element={<BlogHome location={location} isMobile={Props.isMobile} setIsMobile={Props.setIsMobile}   shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path="/contact" element={<Contact isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload}  navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path="/main" element={<Main shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload}navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path="/animatednav" element={<AnimatedNav location={locationState}/>} />
        <Route path="/projectDetails/:id" element={<ProjectDetails shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload}  navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
      </Routes>
  )
}

export default MainRoutes