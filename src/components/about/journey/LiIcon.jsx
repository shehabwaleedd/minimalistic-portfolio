import React from 'react'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
          target: reference,
          offset: ["center end", "center center"]
        }
      )
      
  return (
    <figure className='absolute left-0 stroke-violet-400 '>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100' >
            <circle cx="75" cy="50" r="20" className='stroke-white-900 stroke-1 fill-none'/>
            <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-none ' style={{pathLength: scrollYProgress}}/>
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-violet-500'/>
        </svg>
    </figure>
  )
}

export default LiIcon