import React from 'react'
import { motion, useScroll } from 'framer-motion'
import ScrollAnimation from '../../../../../animation/ScrollAnimation/ScrollAnimation'
import { Link } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import { useRef } from 'react'
import DesktopDetailsDetails from './desktopDetailsRefactor/DesktopDetailsDetails'
import DesktopDetailsBrief from './desktopDetailsRefactor/DesktopDetailsBrief'
import DesktopDetailsNextProject from './desktopDetailsRefactor/DesktopDetailsNextProject'
import DesktopDetailsBackground from './desktopDetailsRefactor/DesktopDetailsBackground'



const DesktopDetails = ({ post, renderDetails, goToNextProject, nextTitleName, renderMissions }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });
    return (
        <motion.div ref={containerRef} initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
            <ScrollAnimation />
            <div className="project__details">
                <div className="project__card_details container">
                    <DesktopDetailsBackground post={post} />
                    <div className="project__image_container container">
                        <img src={post.image} width="100%" height="100%" alt={post.title} />
                    </div>
                    <motion.div className="project__details_post-text">
                        <Link to="/projects" className="project__back">
                            <IoChevronBack style={{ fontSize: "1.2rem", marginTop: "0.2rem", color: "var(--accent-color)" }} />
                            <h2>Back To Projects</h2>
                        </Link>
                        <h1 className='project__title'>{post.title}</h1>
                        <DesktopDetailsBrief post={post} />
                        <DesktopDetailsDetails post={post} renderDetails={renderDetails} scrollYProgress={scrollYProgress} renderMissions={renderMissions}  />
                    </motion.div>
                    <DesktopDetailsNextProject goToNextProject={goToNextProject} nextTitleName={nextTitleName} />
                </div>
            </div>

        </motion.div>
    )
}

export default DesktopDetails