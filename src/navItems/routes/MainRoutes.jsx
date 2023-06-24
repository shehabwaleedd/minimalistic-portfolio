import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MyStack from '../../pages/about/stack/MyStack';
import AboutPage from '../../pages/about/About';
import Portfolio from '../../pages/portfolio/Portfolio';
import Testimonials from '../../pages/testimonials/Testimonials';
import { BlogHome } from '../siteHome/BlogHome';
import Contact from '../../pages/contact/Contact';
import Main from '../../pages/home/main/Main';
import AnimatedNav from '../animatedNav/AnimatedNav';
import ProjectDetails from '../../pages/portfolio/projectDetails/ProjectDetails';



const MainRoutes = (Props) => {

  const location = useLocation();
  const imageDetails = {
    width: 524,
    height: 650,
  };


  return (
      <Routes location={location} key={location.pathname}>
        <Route path='/mystack' element={<MyStack shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path='/about' element={<AboutPage isMobile={Props.isMobile} setIsMobile={Props.setIsMobile}   isAbout={Props.isAbout} setIsAbout={Props.setIsAbout}  shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path='/portfolio' element={<Portfolio isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path='/testimonials' element={<Testimonials shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload}/>} />
        <Route path="/" element={<BlogHome isMobile={Props.isMobile} setIsMobile={Props.setIsMobile}   shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path="/contact" element={<Contact isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path="/main" element={<Main shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
        <Route path="/animatednav" element={<AnimatedNav />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>} />
      </Routes>
  )
}

export default MainRoutes