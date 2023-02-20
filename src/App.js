import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Scrollup from './components/scrollup/Scrollup';
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const trailer = document.getElementById("trailer");
  window.onmousemove = e => {
      const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientYtrailer.offsetHeight / 2;

      const keyFrames = {
          transform: `translate(${x}px, ${y}px)`
      }
      trailer.animate(keyFrames, {
          duration: 800,
          fill: "forwards"
      }) 
  }

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
      </main>
      <div id='trailer'>

      </div>
      <div data-aos="fade-down">
        <About />
      </div>
      <div data-aos="fade-down">
        <Skills />
      </div>
      <div data-aos="fade-down">
        <Services />
      </div>
      <div data-aos="fade-down">
        <Qualifications />
      </div>
      <div data-aos="fade-down">
        <Portfolio />
      </div>
      <div data-aos="fade-down">
        <Testimonials />
      </div>
      <div data-aos="fade-down">
        <Contact />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
      <Scrollup />


    </div>
  );
}

export default App;
