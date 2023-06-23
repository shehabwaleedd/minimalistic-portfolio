import React from "react"
import Home from "../../pages/home/Home"
import { motion } from "framer-motion"


export const BlogHome = (Props) => {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <div>
          <motion.div>
            <Home isAbout={Props.isAbout} setIsAbout={Props.setIsAbout} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded}/>
          </motion.div>
    </div >
  )
}


