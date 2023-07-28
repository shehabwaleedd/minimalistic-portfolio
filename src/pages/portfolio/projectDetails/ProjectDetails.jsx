import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Data";
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
    const renderDetails = (title, img, alt) => {
        return (
            <div className="project__details_details">
                <div className="project__details-text">
                    <h2 style={{ width: window.innerWidth >= 1060 ? "" : "100vw", }}>{title}</h2>
                </div>
                <div className="project__details-img">
                    <img src={img} alt={alt} />
                </div>
            </div>
        );
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {isMobile ? (
                <MobileDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} id={id} />
            ) : isTablet ? (
                <TabletDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} id={id} />
            ) : (
                <DesktopDetails post={post} renderDetails={renderDetails} goToNextProject={goToNextProject} id={id} />
            )}
        </>
    );
}

export default ProjectDetails;