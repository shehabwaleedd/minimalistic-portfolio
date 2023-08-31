import React, { useState, useEffect } from 'react'
import "./Contact.scss"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../footer/Footer';
import MobileContact from './contactResponsive/mobileContact/MobileContact';
import DesktopContact from './contactResponsive/desktopContact/DesktopContact';
import RunAnimations from '../../animation/RunAnimations';
import { Helmet } from 'react-helmet-async';
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


  useEffect(() => {
    const hasContactShown = sessionStorage.getItem('hasContactShown');
    if (!hasContactShown) {
      RunAnimations(screen, body);
      sessionStorage.setItem('hasContactShown', 'true');
    }
  }, []);
  return (
    <section data-scroll-section>
      <Helmet>
        <title>Contact Us - Get in Touch with Our Creative Team</title>
        <meta
          name="description"
          content="Reach out to me and bring your ideas to life. Whether you need design, development, or consultation, i'm here to help. Contact us today to start your next project."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="contact__load-container">
        <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
      </div>
      {isMobile ? (
        <MobileContact language={language} body={body} screen={screen} name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} agreed={agreed} setAgreed={setAgreed} budget={budget} handleOptionChange={handleOptionChange} handleSubmit={handleSubmit} formErrors={formErrors} form={form} />
      ) : (
        <DesktopContact language={language} body={body} screen={screen} name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} agreed={agreed} setAgreed={setAgreed} budget={budget} handleOptionChange={handleOptionChange} handleSubmit={handleSubmit} formErrors={formErrors} form={form} />
      )}
      <Footer isMobile={isMobile} language={language} />
    </section>
  )
}

export default Contact