import React, { useState, useEffect } from 'react'
import "./Contact.scss"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import Footer from '../footer/Footer';
import MobileContact from './contactResponsive/mobileContact/MobileContact';
import DesktopContact from './contactResponsive/desktopContact/DesktopContact';
const Contact = ({ isMobile, language }) => {
  const form = useRef();
  const sendEmail = (e) => {
    emailjs.sendForm('service_5y7rll1', 'template_jdpz7a3', e.target, '4nyzjigYhVGMwCX0W')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("budget");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const handleOptionChange = (e) => {
    setBudget(e.target.value);
  };
  const handleSubmit = (e) => {
    // Validate form fields
    const errors = {};
    if (name.trim() === "") {
      errors.name = "Name is required";
    }
    if (budget === "budget") {
      errors.budget = "Please select a budget";
    }
    if (email.trim() === "") {
      errors.email = "Email is required";
    }
    if (message.trim() === "") {
      errors.message = "Message is required";
    }
    if (!agreed) {
      errors.agreed = "You must agree to the storage and processing of your personal data";
    }
    // Check if there are any errors
    if (
      !formErrors.name &&
      !formErrors.budget &&
      !formErrors.email &&
      !formErrors.message &&
      !formErrors.agreed
    ) {
      sendEmail(e); // Call your sendEmail function here or any other submission logic else {
      setFormErrors(errors);
    }
  };
  let screen = useRef(null);
  let body = useRef(null);
  const runAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      screen,
      { width: "0%", left: "100%" },
      {
        duration: 0.5,
        width: "100%",
        left: "0%",
        ease: "power3.inOut",
      }
    );
    tl.fromTo(
      screen,
      { left: "0%" },
      {
        duration: 0.5,
        left: "-100%",
        ease: "power3.inOut",
        delay: 0.1,
      }
    );
    tl.set(screen, { left: "100%" });
    gsap.to(body, {
      opacity: 1,
      duration: 0.3,
      pointerEvents: "auto",
      ease: "power4.inOut",
      delay: 1,
    });
  };

  useEffect(() => {
    const hasContactShown = sessionStorage.getItem('hasContactShown');
    if (!hasContactShown) {
      runAnimation();
      sessionStorage.setItem('hasContactShown', 'true');
    }
  }, []);
  return (
    <React.Fragment>
      <div className="contact__load-container">
        <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
      </div>
      {isMobile ? (
        <MobileContact language={language} body={body} screen={screen} name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} agreed={agreed} setAgreed={setAgreed} budget={budget} handleOptionChange={handleOptionChange} handleSubmit={handleSubmit} formErrors={formErrors} form={form} />
      ) : (
        <DesktopContact language={language} body={body} screen={screen} name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} agreed={agreed} setAgreed={setAgreed} budget={budget} handleOptionChange={handleOptionChange} handleSubmit={handleSubmit} formErrors={formErrors} form={form} />
      )}
      <Footer isMobile={isMobile} language={language} />
    </React.Fragment>
  )
}

export default Contact