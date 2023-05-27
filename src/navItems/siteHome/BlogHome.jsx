import React from "react"
import Home from "../../pages/home/Home"
import { motion } from "framer-motion"


export const BlogHome = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <div>
          <motion.div>
            <Home imageDetails={imageDetails} />
          </motion.div>
    </div >
  )
}


