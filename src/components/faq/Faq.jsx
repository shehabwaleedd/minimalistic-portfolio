import React, { useState, useEffect, useRef } from "react";
import "./Faq.css";
import { gsap } from "gsap";
import FaqData from "./Data";
import { motion } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const containersRef = useRef([]);

  useEffect(() => {
    containersRef.current.forEach((container) => {
      gsap.set(container.querySelector(".faq__text-container"), { height: 0, opacity: 0 });
    });
  }, []);

  const handleClick = (index) => {
    const container = containersRef.current[index];
    const textContainer = container.querySelector(".faq__text-container");
    const text = textContainer.querySelector(".faq__text");
  
    if (index === activeIndex) {
      gsap.to(textContainer, { height: 0, opacity: 0 });
      setActiveIndex(-1);
    } else {
      // Close any previously opened FAQ text containers
      containersRef.current.forEach((container, i) => {
        if (i !== index && i !== activeIndex) {
          gsap.to(container.querySelector(".faq__text-container"), { height: 0, opacity: 0 });
        }
      });
  
      gsap.to(textContainer, { height: "auto", opacity: 1 });
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq section">
      <h2 className="section__title">FAQs</h2>
      <span className="section__subtitle">Frequently Asked Questions</span>
      <div className="faq__holder">
        {FaqData.map((item, index) => (
          <motion.div
            className="faq__container container grid"
            key={index}
            layout
            ref={(element) => {
              containersRef.current[index] = element;
            }}
          >
            <div className="faq__header" onClick={() => handleClick(index)} layout>
              <h3 className="faq__title">{item.question}</h3>
              <i className={`${index === activeIndex ? "uil uil-angle-up" : "uil uil-angle-down"}`}></i>
            </div>
            <div className="faq__text-container">
              <div className="faq__text">{item.answer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faq;