import React from 'react'
import "./Nav.css"


const Nav = () => {

  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".navigation")
    if (this.scrollY <= 560) scrollUp.classList.add("show-scroll")
    else scrollUp.classList.remove("show-scroll")
  })


  return (
    <section className="navigation container">
      <div className="navigation__content">

          <ul className='navigation__list grid'>
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
          </ul>
      </div>
    </section>
  )
}

export default Nav