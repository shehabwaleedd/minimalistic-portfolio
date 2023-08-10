import React from 'react'
import { motion } from 'framer-motion'

const MobileDetailsDetails = ({ post, renderDetails, scrollYProgress }) => {
    return (
        <div className="project__img_container" style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", transform: "translateX(4rem)" }}>
            {post.mainTitle && renderDetails(post.mainTitle, post.mainTitleImg, post.mainTitle)}
            {post.video && (
                <motion.div className="project__details_details" >
                    <motion.div className="project__details-img">
                        <video src={post.video} loop="true" muted="true" playsInLine="playsinline" autoPlay="autoplay"></video>
                    </motion.div>
                </motion.div>
            )}
            {post.mainPageOnHover && renderDetails(post.mainPageOnHover, post.mainPageOnHoverImg, post.mainPageOnHover)}
            {post.mainTitleSubMenu && renderDetails(post.mainTitleSubMenu, post.mainTitleSubMenuImg, post.mainTitleSubMenu)}
            {post.projetTestimonials && renderDetails(post.projetTestimonials, post.projetTestimonialsImg, post.projetTestimonials)}
            {post.mainProjectsPage && renderDetails(post.mainProjectsPage, post.mainProjectsPageImg, post.mainProjectsPage)}
            {post.accountPage && renderDetails(post.accountPage, post.accountPageImg, post.accountPage)}
            {post.mainAboutPage && renderDetails(post.mainAboutPage, post.mainAboutPageImg, post.mainAboutPage)}
            {post.mainContactPage && renderDetails(post.mainContactPage, post.mainContactPageImg, post.mainContactPage)}
            {post.mainWorkPage && renderDetails(post.mainWorkPage, post.mainWorkPageImg, post.mainWorkPage)}
            {post.mainDarkMode && (
                <motion.div className="project__details_details">
                    <div className="project__details-text">
                        <h2>{post.mainDarkMode}</h2>
                    </div>
                    <motion.div className="project__details-img" style={{ scale: scrollYProgress }}>
                        <img src={post.mainDarkModeImg} alt={post.mainContactPage} />
                        <img src={post.mainDarkModeImg2} alt={post.mainContactPage} />
                        <img src={post.mainDarkModeImg3} alt={post.mainContactPage} />
                        <img src={post.mainDarkModeImg4} alt={post.mainContactPage} />
                    </motion.div>
                </motion.div>
            )}
            {post.collective && (
                <div className="project__details_details-light-mobile">
                    <motion.div className="project__details-text-mobile">
                        <h2 style={{ width: window.innerWidth >= 860 ? "" : "100vw", }}>{post.overView}</h2>
                    </motion.div>
                    <div className="project__details-img-light-mobile">
                        <img src={post.collective} alt={post.mainContactPage} loading='lazy' />
                    </div>
                </div>
            )}
            {post.mockup && (
                <div className="project__details-mockup">
                    <video src={post.mockup} muted autoPlay loop poster={post.image}></video>
                </div>
            )}
        </div>
    )
}

export default MobileDetailsDetails