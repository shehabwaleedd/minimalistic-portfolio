import React from 'react';
import Skills from '../skills/Skills';
import Services from '../services/Services';
import Qualifications from '../qualifications/Qualifications';
import Portfolio from '../portfolio/Portfolio';
import Testimonials from '../testimonials/Testimonials';
import CreatePost from "../../pages/createPost/CreatePost";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signUp/SignUp";
import PasswordReset from "../../pages/passwordReset/PasswordReset";
import { DetailsPages } from '../../blogItems/blog/blog/details/DetailsPages';
import { BlogHome } from "../../blogItems/home/BlogHome";
import EditPost from '../../blogItems/blog/blog/details/edit/EditPost';
import Blog from "../../blogItems/blog/blog/Blog";
import FilteredCategories from "../../blogItems/blog/filteredCategories/FilteredCategories"
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from '../contact/Contact';
import AboutPage from '../about/About';
import MyStack from '../about/stack/MyStack';
import Main from '../home/main/Main';
import AnimatedNav from '../../navItems/animatedNav/AnimatedNav';
import ProjectDetails from '../portfolio/projectDetails/ProjectDetails';


const MainRoutes = () => {

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
        <Route path='/qualifications' element={<Qualifications />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/details/:id" element={<DetailsPages />} />
        <Route path="/" element={<BlogHome />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filtered/:category" element={<FilteredCategories />} />
        <Route path="/main" element={<Main />} />
        <Route path="/animatednav" element={<AnimatedNav />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />
      </Routes>
  )
}

export default MainRoutes