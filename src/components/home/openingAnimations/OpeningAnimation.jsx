import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./OpeningAnimation.css";
import preLoaderAnim from "../../../animation/Animation";

function OpeningAnimation({ onAnimationComplete }) {

  // useEffect(() => {
  //   preLoaderAnim() 
  // }, [])

    
      return (
        <div className="preloader">
          <div className="texts-container">
            <h1>Shehab Waleed</h1>
            <p></p>
          </div>
        </div>
      );
}

export default OpeningAnimation;