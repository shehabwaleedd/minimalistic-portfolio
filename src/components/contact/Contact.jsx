import React, { useState } from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import Socials from '../home/supplements/socials/Socials';
import ParralexContactAnimation from '../parralexTextAnimation/ParralexContactAnimation.tsx';




const Contact = () => {
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
  const { t } = useTranslation()

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
      // All fields are valid, submit the form or perform your desired action
      sendEmail(e); // Call your sendEmail function here or any other submission logic else {
      // Set the formErrors state to display error messages
      setFormErrors(errors);
    }
  };


  return (
    <motion.div className='contact_entire' initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.25, ease: "easeOut" }} exit={{ opacity: 1 }}>
      <ParralexContactAnimation />
      <section className='contact section' id='contact'>
        <div className="contact__container container grid">
          <div className="contact__content">
            <div className="contact__details">
              <h1>{t("contact__title1")}<br />{t("contact__title2")}<br />{t("contact__title3")}</h1>
            </div>
            <Socials />
            <div className="contact__info">
              <div className="contact__email">
                <h3>{t("contact__getInTouch")}</h3>
                <p><a href="mailto:shehabwaleedd@gmail.com">shehabwaleedd@gmail.com</a></p>
              </div>
              <div className="contact__location">
                <h3>{t("contact__location")}</h3>
                <p>{t("contact__location-cairo")} {t("contact__location-egypt")}</p>
              </div>
            </div>
          </div>
          <div className="contact__content">
            <form className="contact__form" onSubmit={handleSubmit} ref={form}>
              <div className="contact__merged">
                <input
                  type="text"
                  name="name"
                  className={`contact__form-input ${formErrors.name ? "error" : ""}`}
                  placeholder={t("contact__form__insert_name")} 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                <div className="custom-dropdown">
                  <select
                    className={`dropdown-select ${formErrors.budget ? "error" : ""}`}
                    name="budget"
                    value={budget}
                    onChange={handleOptionChange}
                    required
                  >
                    <option value="budget" disabled>
                      Budget
                    </option>
                    <option value="$100">$100</option>
                    <option value="$100-$500">$100 - $500</option>
                    <option value="$500-$1000">$500 - $1000</option>
                    <option value="$1000+">$1000+</option>
                  </select>
                  {formErrors.budget && <p className="error-message">{formErrors.budget}</p>}
                  <div className="dropdown-icon">▼</div>
                </div>
              </div>
              <div className="contact__form-div">
                <input
                  type="email"
                  name="email"
                  className={`contact__form-input ${formErrors.email ? "error" : ""}`}
                  placeholder={t("contact__form__insert_email")} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {formErrors.email && <p className="error-message">{formErrors.email}</p>}
              </div>
              <div className="contact__form-div contact__form-area">
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  className={`contact__form-input ${formErrors.message ? "error" : ""}`}
                  placeholder={t("contact__form__write_me_your_project")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                <div className="contact__form-line"></div>
              </div>
              <div className="contact__lower">
                <label className="contact__checkbox">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                  />
                  <p>I agree with the storage and processing of my personal data</p>
                </label>
                {formErrors.agreed && <p className="error-message">{formErrors.agreed}</p>}
                <button type="submit" className="contact__button">
                  {t("contact__button_submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact