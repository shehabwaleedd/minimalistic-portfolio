import React from 'react'
import './Toggle.css'

const Toggle = (Props) => {

  return (
    <div className='toggle__main'>
        <div className='toggle__container'>
            <button onClick={Props.toggleTheme} className={Props.theme === "light" ? 'toggle__light' : "toggle__light toggle__active"}><i class="uil uil-sun"></i></button>
            <button onClick={Props.toggleTheme} className={Props.theme === "dark" ? 'toggle__dark' : "toggle__dark toggle__active"}><i class="uil uil-moon"></i></button>
        </div>
    </div>
  )
}

export default Toggle