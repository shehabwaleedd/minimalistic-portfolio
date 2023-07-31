import React from 'react'
import "./Stack.scss"
import { BiLogoJavascript } from "react-icons/bi"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoBootstrap } from "react-icons/bi"
import { BiLogoSass } from "react-icons/bi"
import { BiLogoFirebase } from "react-icons/bi"
import { BiLogoGithub } from "react-icons/bi"
import { BiLogoTypescript } from "react-icons/bi"
import {motion} from "framer-motion"

const MyStack = (Props) => {
  return (
    <section>
      {Props.isMobile ? (
        <div className='stack section' style={{ display: "none" }}></div>
      ) : (
        <motion.div className='stack section'  initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y:0, transition: { delay: 0.7, duration: 2, ease: "easeInOut" }}}  exit={{ opacity: 0, transition: { delay: 0.4, duration: 1, ease: "easeInOut" } }}>
          <motion.div className="stack__container container"  initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.7, duration: 2, ease: "easeInOut" }}}  exit={{ opacity: 0, transition: { delay: 0.4, duration: 1} }}>
            <div className="stack__icons">
              <BiLogoJavascript style={{ color: "var(--nav-overlay-color)" }} />
              <BiLogoReact style={{ color: "var(--nav-overlay-color)" }}/>
              <BiLogoTailwindCss style={{ color: "var(--nav-overlay-color)" }}/>
              <BiLogoBootstrap style={{ color: "var(--nav-overlay-color)" }}/>
              <BiLogoSass style={{ color: "var(--nav-overlay-color)" }}/>
              <BiLogoFirebase style={{ color: "var(--nav-overlay-color)" }}/>
              <BiLogoGithub style={{ color: "var(--nav-overlay-color)" }}/>
              <BiLogoTypescript style={{ color: "var(--nav-overlay-color)" }}/>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default MyStack