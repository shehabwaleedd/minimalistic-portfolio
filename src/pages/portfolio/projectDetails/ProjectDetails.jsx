import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Data";
import { motion } from 'framer-motion'
import "./ProjectDetails.scss";

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

        navigate(`/project/${projectsData[nextIndex].title}`);
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
                    transition={{ duration: 0.5, delay: 0.15}}  

                >
                    <img src={img} alt={alt} />
                </motion.div>
            </motion.div>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            {isMobile ? (
                <MobileDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} title={title} nextTitleName={nextTitleName}  />
            ) : isTablet ? (
                <TabletDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} title={title} nextTitleName={nextTitleName} />
            ) : (
                <DesktopDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} title={title} nextTitleName={nextTitleName} />
            )}
        </div>
    );
}

export default ProjectDetails;