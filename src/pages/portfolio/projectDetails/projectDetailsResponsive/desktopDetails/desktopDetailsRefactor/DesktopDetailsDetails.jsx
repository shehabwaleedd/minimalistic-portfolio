import React from 'react'
import { motion } from 'framer-motion'
const DesktopDetailsDetails = ({ post, renderDetails, renderMissions, scrollYProgress }) => {
    return (
        <>
            {post.mission && renderMissions(post.mission)}
            {post.mainTitle && renderDetails(post.mainTitle, post.mainTitleImg, post.mainTitle)}
            {post.mission && renderMissions(post.challenge)}
            {post.video && (
                <div className="project__details_details">
                    <div className="project__details-text">
                        <video src={post.video} muted autoPlay loop poster={post.image}></video>
                    </div>
                </div>
            )}
            {post.mission && renderMissions(post.solution)}
            {post.collective && (
                <div className="project__details_details-light">
                    <motion.div className="project__details-text">
                        <h2 style={{ width: window.innerWidth >= 860 ? "" : "100vw", }}>{post.overView}</h2>
                    </motion.div>
                    <div className="project__details-img-light">
                        <img src={post.collective} width="100%" height="100%" alt="Collective Images Of The Project" loading='lazy' />
                    </div>
                </div>
            )}
            {post.mockup && (
                <div className="project__details-mockup">
                    <video src={post.mockup} muted autoPlay loop poster={post.image} alt={post.mockup}></video>
                </div>
            )}
        </>
    )
}

export default DesktopDetailsDetails