import React from 'react'
import './TabletDetails.scss'
import { motion } from 'framer-motion'
import ScrollAnimation from '../../../../../animation/ScrollAnimation/ScrollAnimation'
import { Link } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import TabletDetailsDetails from './tabletDetailsResponsive/TabletDetailsDetails'
import TabletDetailsBackground from './tabletDetailsResponsive/TabletDetailsBackground'
import TabletDetailsBrief from './tabletDetailsResponsive/TabletDetailsBrief'
import TabletDetailsNextProject from './tabletDetailsResponsive/TabletDetailsNextProject'

const TabletDetails = ({ post, renderDetails, goToNextProject, nextTitleName, scrollYProgress, containerRef }) => {
    return (
        <motion.div ref={containerRef} initial={{ opacity: 0, y: -100, transition: { delay: 0.1, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.14, velocity: 2, staggerChildren: 1.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}>
            <ScrollAnimation />
            <div className="project__details">
                <div className="project__card_details">
                    <TabletDetailsBackground post={post} />
                    <div className="project__image_container">
                        <img src={post.image} alt={post.title} width="100%" height="100%" loading='lazy'/>
                    </div>
                    <div className="project__details_post-text">
                        <Link to="/projects" className="project__back">
                            <IoChevronBack style={{ fontSize: "1.2rem", marginTop: "0.2rem", color: "var(--accent-color)" }} />
                            <h2>Back To Projects</h2>
                        </Link>
                        <h1>{post.title}</h1>
                        <TabletDetailsBrief post={post} />
                        <TabletDetailsDetails post={post} nextTitleName={nextTitleName} renderDetails={renderDetails} scrollYProgress={scrollYProgress}/>
                    </div>
                    <TabletDetailsNextProject goToNextProject={goToNextProject} nextTitleName={nextTitleName} />
                </div>
            </div>
        </motion.div>
    )
}

export default TabletDetails