import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIconEducation'
import { EducationData } from './Data'



const Details = ({ title, company, companyLink, time, location, comment }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justice-between'>
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className='capitalize font-bold text-2xl'>{title}&nbsp;</h3>
        <span className='captialize font-medium timelocation_text'>{time} | {location} </span>
        <p className='font-medium w-full mt-1'>{comment}</p>
      </motion.div>
    </li>
  )
}



const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )


  return (
    <div className="education">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">

        <motion.div style={{ scaleY: scrollYProgress }} className="absolute top-0 left-9 w-[4px] h-full bg-teal-800 origin-top" />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          {EducationData.map(( {id, title, time, location, comment }) => {
            return (
              <Details key={id} title={title} location={location} time={time} comment={comment}/>
            )
          }
          )}
        </ul>
      </div>
    </div>
  )
}

export default Education