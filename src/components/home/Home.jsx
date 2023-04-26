import React, { useEffect } from "react";
import "./Home.css";
import "../../navItems/header/Header.css"
import { Animation2 } from "../../animation/Animation2";
import Main from "./main/Main";

const Home = () => {

  useEffect(() => {

    Animation2();

  }, []);



  return (
    <main>
      <div className="home__container" >
        <div className="block b-1"></div>
        <div className="block b-2"></div>
        <div className="block b-3"></div>
        <div className="block b-4"></div>
        <div className="block b-5"></div>
        <div className="block b-6"></div>
        <div className="block b-7"></div>
      </div>
      <div className="main__container" >
        <Main />
      </div>
      
    </main>
  );
};

export default Home;