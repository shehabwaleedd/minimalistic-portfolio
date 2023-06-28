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
                        <h1>{project.title}</h1>
                        <div className="project__details-brief">
                            <div className="category__date">
                                <div className="categoryy">
                                    <h2>Category: </h2>
                                    <div className="category__list">
                                        <h2>{project.category[0]}</h2>
                                        <h2>{project.category[1]}</h2>
                                        <h2>{project.category[2]}</h2>
                                        <h2>{project.category[3]}</h2>
                                    </div>
                                </div>
                                <div className="datee">
                                    <h2>Year: </h2>
                                    <div className="datee__list">
                                        <h2>{project.date}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="project__details-comment">
                                <p>{project.comment}</p>
                                <a href={`${project.link}`} target="__blank"><i className='bx bx-right-arrow-alt'></i>View The Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetails;