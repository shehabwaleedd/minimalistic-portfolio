import React from 'react'
import { useState } from 'react'
import "./Scrollup.css"

const Scrollup = () => {


    window.addEventListener("scroll", function() {
        const scrollUp = this.document.querySelector(".scrollup")
        if (this.scrollY <= 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })


  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup