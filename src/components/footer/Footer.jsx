import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shehab Waleed</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">Services</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
            <p><strong id="mono">Address:</strong> 2 Abdulrahman Al Adawi - Imbaba, Egypt</p>
            <p><strong id="mono">freelancing hours:</strong>   08:00 - 12:00. Mon - Sat</p>
            <p><strong id="mono">phone number:</strong>   +201023288200</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/shehabwaleedd/" className="footer__social-link" target='_blank'><i class="uil uil-instagram"></i></a>
            <a href="https://facebook/shehabwaleedd" className="footer__social-link" target='_blank'><i class="bx bxl-facebook"></i></a>
            <a href="https://www.twitter.com/in/waleedjr_/" className="footer__social-link" target='_blank'><i class="bx bxl-twitter"></i></a>
            <a href="https://www.linkedin.com/in/shehabwaleedd/" className="footer__social-link" target='_blank'><i class="bx bxl-linkedin"></i></a>
            <a href="https://www.youtube.com/channel/UCP2o3R5yqenBaZfsQjB-HJw" className="footer__social-link" target='_blank'><i class="bx bxl-youtube"></i></a>
            <a href="https://github.com/shehabwaleedd" className="footer__social-link" target='_blank'><i class="bx bxl-github"></i></a>
            
          </div>
        </div>
        <div className="footer__copyright">
          <small>2023</small>
          <small>&copy; Shehab Waleed. All Right Reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer