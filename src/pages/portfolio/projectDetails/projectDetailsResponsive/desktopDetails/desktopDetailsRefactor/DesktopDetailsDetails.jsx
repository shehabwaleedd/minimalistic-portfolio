import React from 'react'
import { motion } from 'framer-motion'
const DesktopDetailsDetails = ({ post, renderDetails, scrollYProgress }) => {
    return (
        <>
            {post.mainTitle && renderDetails(post.mainTitle, post.mainTitleImg, post.mainTitle)}
            {post.video && (
                <div className="project__details_details">
                    <div className="project__details-text">
                        <video src={post.video} muted autoPlay loop poster={post.image}></video>
                    </div>
                </div>
            )}
            {post.mainPageOnHover && renderDetails(post.mainPageOnHover, post.mainPageOnHoverImg, post.mainPageOnHover)}
            {post.mainTitle2 && renderDetails(post.mainTitle2, post.mainTitleImg2, post.mainTitle2)}
            {post.mainTitleSubMenu && renderDetails(post.mainTitleSubMenu, post.mainTitleSubMenuImg, post.mainTitleSubMenu)}
            {post.projetTestimonials && renderDetails(post.projetTestimonials, post.projetTestimonialsImg, post.projetTestimonials)}
            {post.mainProjectsPage && renderDetails(post.mainProjectsPage, post.mainProjectsPageImg, post.mainProjectsPage)}
            {post.accountPage && renderDetails(post.accountPage, post.accountPageImg, post.accountPage)}
            {post.mainAboutPage && renderDetails(post.mainAboutPage, post.mainAboutPageImg, post.mainAboutPage)}
            {post.mainContactPage && renderDetails(post.mainContactPage, post.mainContactPageImg, post.mainContactPage)}
            {post.mainWorkPage && renderDetails(post.mainWorkPage, post.mainWorkPageImg, post.mainWorkPage)}
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