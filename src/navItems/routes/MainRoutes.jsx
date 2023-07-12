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



const MainRoutes = (Props) => {

  const location = useLocation();




  return (
    <Routes location={location} key={location.pathname} >

    </Routes>
  )
}

export default MainRoutes