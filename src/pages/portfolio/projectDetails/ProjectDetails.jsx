import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Data";
import "./ProjectDetails.scss";
import ScrollAnimation from "../../../animation/ScrollAnimation/ScrollAnimation";

function ProjectDetails() {
    const { id } = useParams();
    const project = projectsData[id];

    return (
        <>
            <ScrollAnimation />
            <div className="project__details container">
                <div className="project__card_details">
                    <div className="project__image_container">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project__details_post-text">
                        <div className="project__details_post-textanddate">
                            <h1>{project.title}</h1>
                            <p>{project.date}</p>
                        </div>
                        <div className="project__details-brief">
                            <h2>BRIEF:</h2>
                        </div>
                        <div className="project__details-comment">
                            <p>{project.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetails;