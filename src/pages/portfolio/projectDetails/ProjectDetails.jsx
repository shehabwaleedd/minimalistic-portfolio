import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Data";
import { motion } from 'framer-motion'
import "./ProjectDetails.scss";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import MobileDetails from "./projectDetailsResponsive/mobileDetails/MobileDetails";
import TabletDetails from "./projectDetailsResponsive/tabletDetails/TabletDetails";
import DesktopDetails from "./projectDetailsResponsive/desktopDetails/DesktopDetails";

function ProjectDetails({ isMobile, isTablet }) {
    const { title } = useParams();
    const post = projectsData.find(project => project.title === title);
    const navigate = useNavigate();
    const goToNextProject = () => {
        const currentIndex = projectsData.findIndex(project => project.title === title);
        const nextIndex = (currentIndex + 1) % projectsData.length;

        navigate(`/projects/${projectsData[nextIndex].title}`);
    };
    const nextTitleName = () => {
        const currentIndex = projectsData.findIndex(project => project.title === title);
        const nextIndex = (currentIndex + 1) % projectsData.length;
        return projectsData[nextIndex].title;
    };
    const ref = useRef(null);


    const renderDetails = (title, img, alt) => {
        return (
            <motion.div className="project__details_details" ref={ref}>
                <motion.div className="project__details-text">
                    <h2 style={{ width: window.innerWidth >= 860 ? "" : "100vw", }}>{title}</h2>
                </motion.div>
                <motion.div className="project__details-img"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}>
                    <img src={img} alt={alt} width="100%" height="100%" />
                </motion.div>
            </motion.div>
        );
    };

    const renderMissions = (title) => {
        return (
            <motion.div className="project__details_missions" ref={ref}>
                <motion.div className="project__details-text">
                    <h2 style={{ width: window.innerWidth >= 860 ? "" : "100vw", }}>{title}</h2>
                </motion.div>
            </motion.div>
        )
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section>
            <Helmet>
                <title>{post.title} - Project Details</title>
                <meta name="title" content={`${post.title} - Project Details`} />
                <meta
                    name="description"
                    content={`Explore the details of ${post.title}, a creative project by our team. Discover how we brought this concept to life through design and development.`}/>
                <meta property="og:title" content={`${post.title} - Project Details`} />
                <meta property="og:description" content={`Explore the details of ${post.title}, a creative project by our team. Discover how we brought this concept to life through design and development.`} />
                <meta property="og:image" content={post.image} />
                <meta property="og:url" content={`https://shehabwaleed.com/projects/${post.title}`} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Shehab Waleed | Portfolio" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />
                <link rel="canonical" href={`https://shehabwaleed.com/projects/${post.title}`} />

            </Helmet>
            {isMobile ? (
                <MobileDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} title={title} nextTitleName={nextTitleName} />
            ) : isTablet ? (
                <TabletDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} title={title} nextTitleName={nextTitleName} />
            ) : (
                <DesktopDetails post={post} renderDetails={renderDetails} renderMissions={renderMissions} goToNextProject={goToNextProject} title={title} nextTitleName={nextTitleName}/>
            )}
        </section>
    );
}

export default ProjectDetails;