import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../Data";
import "./ProjectDetails.scss";
import ScrollAnimation from "../../../animation/ScrollAnimation/ScrollAnimation";
import { BiRightArrowAlt } from "react-icons/bi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function ProjectDetails() {
    const { id } = useParams();
    const project = projectsData[id];

    return (
        <>
            <ScrollAnimation />
            <div className="project__details container">
                <div className="project__card_details">
                    <div className="project__image_container">
                        <LazyLoadImage
                            src={project.image}
                            alt={project.title}
                            effect="blur" 
                        />
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
                                <div className="project__links">
                                    <div className={`project__link ${project.class}`}>
                                        <a href={`${project.link}`} target="__blank"><BiRightArrowAlt />View The Website</a>
                                    </div>
                                    <div className="project__link">
                                        <a href={`${project.link}`} target="__blank"><BiRightArrowAlt />View The Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project__details_details">
                            <div className="project__details-text">
                                <h2>{project.mainTitle}</h2>
                            </div>
                            <div className="project__details-img">
                                <LazyLoadImage src={project.mainTitleImg} alt={project.mainTitle} effect="blur"/>
                            </div>
                        </div>
                        <div className="project__details_details">
                            <div className="project__details-text">
                                <h2>{project.mainTitle2}</h2>
                            </div>
                            <div className="project__details-img">
                                <LazyLoadImage effect="blur" src={project.mainTitleImg2} alt={project.mainTitle} />
                            </div>
                        </div>
                        <div className="project__details_details">
                            <div className="project__details-text">
                                <h2>{project.projectLogins}</h2>
                            </div>
                            <div className="project__details-img">
                                <LazyLoadImage effect="blur" src={project.projectLoginsImg} alt={project.mainTitle} />
                            </div>
                        </div>
                        <div className="project__details_details">
                            <div className="project__details-text">
                                <h2>{project.projectTestimonials}</h2>
                            </div>
                            <div className="project__details-img">
                                <LazyLoadImage effect="blur" src={project.projectTestimonialsImg} alt={project.mainTitle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetails;