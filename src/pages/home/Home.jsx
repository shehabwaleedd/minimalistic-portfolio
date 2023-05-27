import React, { useEffect} from 'react';
import './Home.css';
import Main from './main/Main';
import { HomeAnimations } from '../../animation/HomeAnimations';


const Home = () => {



  useEffect(() => {


      HomeAnimations();


  }, []);

  return (
    <section>
      <div className="containererr" >
        {/* <div className="block b-1"></div>
        <div className="block b-2"></div>
        <div className="block b-3"></div>
        <div className="block b-4"></div>
        <div className="block b-5"></div>
        <div className="block b-6"></div>
        <div className="block b-7"></div> */}
      </div>
      <div className="overlay"></div>
      <div className="main__containerr">
        <Main />
      </div>
    </section>
  );
};

export default Home;
