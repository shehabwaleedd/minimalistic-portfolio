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

const MyStack = (Props) => {
  return (
    <section>
      {Props.isMobile ? (
        <div className='stack section' style={{ display: "none" }}>
        </div>
      ) : (
        <div className='stack section'>
          <div className="stack__container container">
            <div className="stack__icons">
              <BiLogoJavascript style={{ color: "var(--stack-accent-color)" }} />
              <BiLogoReact style={{ color: "var(--stack-accent-color)" }}/>
              <BiLogoTailwindCss style={{ color: "var(--stack-accent-color)" }}/>
              <BiLogoBootstrap style={{ color: "var(--stack-accent-color)" }}/>
              <BiLogoSass style={{ color: "var(--stack-accent-color)" }}/>
              <BiLogoFirebase style={{ color: "var(--stack-accent-color)" }}/>
              <BiLogoGithub style={{ color: "var(--stack-accent-color)" }}/>
              <BiLogoTypescript style={{ color: "var(--stack-accent-color)" }}/>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MyStack