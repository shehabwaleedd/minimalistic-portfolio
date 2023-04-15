import React from 'react'
import "./Nav.css"
import { motion } from "framer-motion"

const Nav = () => {

  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".navigation")
    if (this.scrollY <= 560) scrollUp.classList.add("show-scroll")
    else scrollUp.classList.remove("show-scroll")
  })

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  
  return (
    <motion.section className="navigation containered" initial={{ opacity: 0, x: 50}} animate={{opacity: 1, x:0, transition: { delay: 1, ...transition }}} exit={{ opacity: 1 }} transition={transition}>
      <motion.div className="navigation__content" initial={{ opacity: 0, x: -50}} animate={{opacity: 1, x:0, transition: { delay: 1, ...transition }}} exit={{ opacity: 1 }} transition={transition}>

          <motion.ul className='navigation__list gridded' initial={{ opacity: 0, x: 50}} animate={{opacity: 1, x:0, transition: { delay: 1, ...transition }}} exit={{ opacity: 1 }} transition={transition}>
            <li className='nav__itemm'>
              <a href="#" className="navigation__link"><i class="uil uil-estate"></i></a>
            </li>
            <li className='nav__itemm'>
              <a href="#about" className="navigation__link"><i class='bx bx-user-circle'></i></a>
            </li>
            <li className='nav__itemm'>
              <a href="#skills" className="navigation__link"><i class='bx bx-brain' ></i></a>
            </li>
            <li className='nav__itemm'>
              <a href="#services" className="navigation__link"><i class='bx bx-code-curly'></i></a>
            </li>
            <li className='nav__itemm'>
              <a href="#portfolio" className="navigation__link"><i class='bx bx-briefcase' ></i></a>
            </li>
            <li className='nav__itemm'>
              <a href="#contact" className="navigation__link"><i class='bx bx-message-square-detail'></i></a>
            </li>
          </motion.ul>
      </motion.div>
    </motion.section>
  )
}

export default Nav