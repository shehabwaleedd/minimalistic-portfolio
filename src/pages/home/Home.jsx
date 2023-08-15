import React from 'react';
import Main from './main/Main';
import './Home.css';
import { motion } from 'framer-motion';

const Home = ({ isMobile, navOpen, language, isTablet }) => {
  return (
    <motion.section className="homeee" >
      <div className="main__containerr">
        <Main isMobile={isMobile} isTablet={isTablet} navOpen={navOpen} language={language} />
      </div>
    </motion.section>
  );
};
export default Home;
