import React from 'react';
import Main from './main/Main';
import './Home.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Home = ({ isMobile, navOpen, language, isTablet }) => {
  return (
    <motion.section className="homeee" >
      <Helmet>
        <title>Shehab Waleed - Frontend Developer & Freelancer</title>
        <meta
          name="description"
          content="Transform your vision into reality with Shehab Waleed, a passionate frontend developer and freelancer. From stunning designs to seamless development, I bring your ideas to life."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="main__containerr">
        <Main isMobile={isMobile} isTablet={isTablet} navOpen={navOpen} language={language} />
      </div>
    </motion.section>
  );
};
export default Home;
