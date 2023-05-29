import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MyStack from '../../pages/about/stack/MyStack';
import AboutPage from '../../pages/about/About';
import Skills from '../../pages/skills/Skills';
import Services from '../../pages/services/Services';
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
        <Route path='/mystack' element={<MyStack />} />
        <Route path='/about' element={<AboutPage imageDetails={imageDetails}/>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path="/" element={<BlogHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main" element={<Main navOpen={Props.navOpen}/>} />
        <Route path="/animatednav" element={<AnimatedNav />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />
      </Routes>
  )
}

export default MainRoutes