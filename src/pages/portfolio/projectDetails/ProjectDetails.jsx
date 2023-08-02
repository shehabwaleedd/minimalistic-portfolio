import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Data";
import { motion, useScroll } from 'framer-motion'
import "./ProjectDetails.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";
import MobileDetails from "./projectDetailsResponsive/mobileDetails/MobileDetails";
import TabletDetails from "./projectDetailsResponsive/tabletDetails/TabletDetails";
import DesktopDetails from "./projectDetailsResponsive/desktopDetails/DesktopDetails";

function ProjectDetails({ isMobile, isTablet }) {
    const { id } = useParams();
    const post = projectsData[id];
    const navigate = useNavigate();
    const goToNextProject = () => {
        const nextProjectId = (parseInt(id) + 1) % projectsData.length; // Calculate the next project id by taking modulo of the total number of projects
        navigate(`/projectDetails/${nextProjectId}`);
    };
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    const renderDetails = (title, img, alt) => {
        return (
            <motion.div className="project__details_details" ref={ref}>
                <motion.div className="project__details-text">
                    <h2 style={{ width: window.innerWidth >= 1060 ? "" : "100vw", }}>{title}</h2>
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
                <MobileDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} id={id} />
            ) : isTablet ? (
                <TabletDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} id={id} />
            ) : (
                <DesktopDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} id={id} />
            )}
        </div>
    );
}

export default ProjectDetails;