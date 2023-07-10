import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../Data";
import "./ProjectDetails.scss";
import ScrollAnimation from "../../../animation/ScrollAnimation/ScrollAnimation";
import { BiRightArrowAlt } from "react-icons/bi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronBack } from "react-icons/io5";

function ProjectDetails(Props) {
    const { id } = useParams();
    const project = projectsData[id];
    const navigate = useNavigate();


    const goToNextProject = () => {
        const nextProjectId = (parseInt(id) + 1) % projectsData.length; // Calculate the next project id by taking modulo of the total number of projects
        navigate(`/projectDetails/${nextProjectId}`);
    };


    useEffect(() => {
        console.log("ProjectDetails component mounted");

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        // Clean-up function
        return () => {
            console.log("ProjectDetails component unmounted");
        };
    }, []);

    return (
        <>
            {Props.isMobile ? (
                <>
                    <ScrollAnimation />
                    <div key={id} className="project__details" style={{ width: "100vw", touchAction: "pan-y" }}>
                        <div className="project__card_details">
                            <div className="project__image_container" style={{ width: "100vw", position: "relative", left: "-5rem", top: "2rem" }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>
                            <div className="project__details_post-text" style={{ transform: "translateX(-4rem)", }}>
                                <h1 style={{ fontSize: "1.5rem" }}>{project.title}</h1>
                                <div className="project__details-brief" style={{ flexDirection: "column", width: "90vw", justifyContent: "center", alignContent: "center" }}>
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
                                    <div className="project__details-comment" style={{ width: "90vw", paddintTop: "5rem", }}>
                                        <p >{project.comment}</p>
                                        <div className="project__links" style={{ width: "80vw" }}>
                                            <div className={`project__link ${project.class}`}>
                                                <a href={`${project.link}`} target="__blank" style={{ fontSize: "0.8rem" }}><BiRightArrowAlt />View The Website</a>
                                            </div>
                                            <div className="project__link">
                                                <a href={`${project.link}`} target="__blank" style={{ fontSize: "0.8rem" }}><BiRightArrowAlt />View The Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project__img_container" style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", transform: "translateX(4rem)" }}>
                                    {project?.mainTitle && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project.mainTitle}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project.mainTitleImg} alt={project.mainTitle} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainTitle2 && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainTitle2}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainTitleImg2} alt={project.mainTitle2} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.projectLogins && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.projectLogins}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project.projectLoginsImg} alt={project.projectLogins} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.projetTestimonials && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.projectTestimonials}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.projectTestimonialsImg} alt={project.mainTitle} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainProjectPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainProjectsPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainProjectsPageImg} alt={project.mainProjectsPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainAboutPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainAboutPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainAboutPageImg} alt={project.mainAboutPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainContactPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainContactPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainContactPageImg} alt={project.mainContactPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainDarkMode && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainDarkMode}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainDarkModeImg} alt={project.mainContactPage} />
                                                <img src={project?.mainDarkModeImg2} alt={project.mainContactPage} />
                                                <img src={project?.mainDarkModeImg3} alt={project.mainContactPage} />
                                                <img src={project?.mainDarkModeImg4} alt={project.mainContactPage} />

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="project__next_project" style={{ width: "100%", left: "0", gap: "3rem", overflow: "visible" }}>
                                <div className="menu-item-wrapper" style={{ justifyContent: "space-between", width: "100vw" }}>
                                    <div className="next__project" style={{ left: "0", width: "35vw" }}>
                                        <h1 onClick={goToNextProject} style={{ fontSize: "0.8rem" }}>Next Project</h1>
                                    </div>
                                    <div className="project__next_project_name" style={{ width: "50vw" }}>
                                        <h1 style={{ fontSize: "0.8rem" }}>{projectsData[(parseInt(id) + 1) % projectsData.length].title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <AnimatePresence>
                    <motion.div key={id} initial={{ opacity: 0, y: -110 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} exit={{ opacity: 0 }}>
                        <ScrollAnimation />
                        <div className="project__details container">
                            <div className="project__card_details">
                                <div className="project__image_container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>
                                <div className="project__details_post-text">
                                    <Link to="/projects" className="project__back">
                                        <IoChevronBack style={{ fontSize: "1.2rem", marginTop: "0.2rem", color: "var(--accent-color)" }} />
                                        <h2>Back To Projects</h2>
                                    </Link>
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
                                    {project?.mainTitle && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project.mainTitle}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project.mainTitleImg} alt={project.mainTitle} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainPageOnHover && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainPageOnHover}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainPageOnHoverImg} alt={project.mainPageOnHover} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainTitle2 && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainTitle2}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainTitleImg2} alt={project.mainTitle2} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.articleDetails && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.articleDetails}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project.articleDetailsImg} alt={project.articleDetails} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.editPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.editPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project.editPageImg} alt={project.editPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.createPost && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.createPost}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project.createPostImg} alt={project.createPost} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainTitleSubMenu && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainTitleSubMenu}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project.mainTitleSubMenuImg} alt={project.mainTitleSubMenu} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.projectLogins && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.projectLogins}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project.projectLoginsImg} alt={project.projectLogins} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.registerPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.registerPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project.registerPageImg} alt={project.registerPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.projetTestimonials && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.projectTestimonials}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project?.projectTestimonialsImg} alt={project.mainTitle} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainProjectPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainProjectsPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img src={project?.mainProjectsPageImg} alt={project.mainProjectsPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.accountPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.accountPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project?.accountPageImg} alt={project.accountPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainAboutPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainAboutPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project?.mainAboutPageImg} alt={project.mainAboutPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainContactPage && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainContactPage}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project?.mainContactPageImg} alt={project.mainContactPage} />
                                            </div>
                                        </div>
                                    )}
                                    {project?.mainDarkMode && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.mainDarkMode}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project?.mainDarkModeImg} alt={project.mainContactPage} />
                                                <img  src={project?.mainDarkModeImg2} alt={project.mainContactPage} />
                                                <img  src={project?.mainDarkModeImg3} alt={project.mainContactPage} />
                                                <img  src={project?.mainDarkModeImg4} alt={project.mainContactPage} />

                                            </div>
                                        </div>
                                    )}
                                    {project?.lightMode && (
                                        <div className="project__details_details">
                                            <div className="project__details-text">
                                                <h2>{project?.lightMode}</h2>
                                            </div>
                                            <div className="project__details-img">
                                                <img  src={project?.lightModeImg1} alt={project.mainContactPage} />
                                                <img  src={project?.lightModeImg2} alt={project.mainContactPage} />
                                                <img  src={project?.lightModeImg3} alt={project.mainContactPage} />
                                                <img  src={project?.lightModeImg4} alt={project.mainContactPage} />
                                                <img  src={project?.lightModeImg5} alt={project.mainContactPage} />
                                                <img  src={project?.lightModeImg6} alt={project.mainContactPage} />
                                                <img  src={project?.lightModeImg7} alt={project.mainContactPage} />
                                                <img  src={project?.lightModeImg8} alt={project.mainContactPage} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="project__next_project">
                                    <div className="menu-item-wrapper">
                                        <div className="menu-arrow">
                                            <BiRightArrowAlt style={{ fontSize: "2.3rem", marginTop: "0.4rem", color: "var(--title-color)" }} />
                                        </div>
                                        <div className="menu-text">
                                            <div className="next__project">
                                                <h1 onClick={goToNextProject}>Next Project</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project__next_project_name">
                                        <h1>{projectsData[(parseInt(id) + 1) % projectsData.length].title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </>
    );
}

export default ProjectDetails;