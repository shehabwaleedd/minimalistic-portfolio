import React from 'react';
import About from "../about/About";
import Skills from '../skills/Skills';
import Services from '../services/Services';
import Pricing from '../pricing/Pricing';
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

import { Route, Routes } from 'react-router-dom';
import Contact from '../contact/Contact';
import { AnimatePresence } from 'framer-motion';


const MainRoutes = () => {


  return (
    <AnimatePresence>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
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
      </Routes>
    </AnimatePresence>
  )
}

export default MainRoutes