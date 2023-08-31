import React from 'react'
import './MobileDetails.scss'
import ScrollAnimation from '../../../../../animation/ScrollAnimation/ScrollAnimation';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { useRef } from 'react'
import MobileDetailsDetails from './mobileDetailsRefactored/MobileDetailsDetails';
import MobileDetailsNextProject from './mobileDetailsRefactored/MobileDetailsNextProject';
import MobileDetailsBrief from './mobileDetailsRefactored/MobileDetailsBrief';
import MobileDetailsBackground from './mobileDetailsRefactored/MobileDetailsBackground';

const MobileDetails = ({ post, renderDetails, goToNextProject, nextTitleName }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });
    return (
        <>
            <ScrollAnimation />
            <motion.div ref={containerRef} className="project__details-mobile" style={{ width: "100vw", touchAction: "pan-y", }} initial={{ opacity: 0, y: -100, transition: { delay: 0.15, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
                <div className="project__card_details">
                    <MobileDetailsBackground post={post} />
                    <div className="project__image_container-mobile" style={{ width: "100vw", position: "relative", left: window.innerWidth <= 408 ? "" : "0.5rem", top: "2rem" }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            width="100%" height="100%"
                        />
                    </div>
                    <div className="project__details_post-text" style={{ transform: "translateX(-2rem)", }}>
                        <Link to="/projects" className="project__back">
                            <IoChevronBack style={{ fontSize: "1.2rem", marginTop: "0.2rem", color: "var(--accent-color)" }} />
                            <h2>Back To Projects</h2>
                        </Link>
                        <h1 style={{ fontSize: "1.5rem", width: "100vw" }}>{post.title}</h1>
                        <MobileDetailsBrief post={post} />
                        <MobileDetailsDetails post={post} renderDetails={renderDetails} scrollYProgress={scrollYProgress} />
                    </div>
                    <MobileDetailsNextProject nextTitleName={nextTitleName} goToNextProject={goToNextProject} />
                </div>
            </motion.div>
        </>
    )
}

export default MobileDetails