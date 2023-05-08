import React from 'react';
import Skills from '../skills/Skills';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Testimonials from '../testimonials/Testimonials';
import { BlogHome } from "../../navItems/siteHome/BlogHome";
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from '../contact/Contact';
import AboutPage from '../about/About';
import MyStack from '../about/stack/MyStack';
import Main from '../home/main/Main';
import AnimatedNav from '../../navItems/animatedNav/AnimatedNav';
import ProjectDetails from '../portfolio/projectDetails/ProjectDetails';


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