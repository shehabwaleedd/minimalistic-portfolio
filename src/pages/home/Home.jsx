import React, { useEffect } from 'react';
import Main from './main/Main';
import "./Home.css"
import { useRef } from 'react';
import { HomeAnimations } from '../../animation/HomeAnimations';

const Home = (Props) => {

  useEffect(() => {

    HomeAnimations()
    
  }, []);

  return (
    <section>
      <div className="containererr">
      </div>
      <div className="titles">
        <div className="titled title-1">
          <h1>The Boy Who Lived</h1>
        </div>
      </div>
      <div className="overlay"></div>
      <div className="main__containerr">
        <Main
          isMobile={Props.isMobile}
          setIsMobile={Props.setIsMobile}
          isAbout={Props.isAbout}
          setIsAbout={Props.setIsAbout}
          navOpen={Props.navOpen}
          language={Props.language}
          setLanguage={Props.setLanguage}
          languageExpanded={Props.languageExpanded}
          setLanguageExpanded={Props.setLanguageExpanded}
        />
      </div>
    </section>
  );
};

export default Home;