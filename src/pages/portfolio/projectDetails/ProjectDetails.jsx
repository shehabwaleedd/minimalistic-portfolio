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
                    <h2>{title}</h2>
                </div>
                <div className="project__details-img">
                    <img src={img} alt={alt} />
                </div>
            </div>
        );
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
                                    src={post.image}
                                    alt={post.title}
                                />
                            </div>
                            <div className="project__details_post-text" style={{ transform: "translateX(-4rem)", }}>
                                <h1 style={{ fontSize: "1.5rem" }}>{post.title}</h1>
                                <div className="project__details-brief" style={{ flexDirection: "column", width: "90vw", justifyContent: "center", alignContent: "center" }}>
                                    <div className="category__date">
                                        <div className="categoryy">
                                            <h2>Category: </h2>
                                            <div className="category__list">
                                                <h2>{post.category[0]}</h2>
                                                <h2>{post.category[1]}</h2>
                                                <h2>{post.category[2]}</h2>
                                                <h2>{post.category[3]}</h2>
                                            </div>
                                        </div>
                                        <div className="datee">
                                            <h2>Year: </h2>
                                            <div className="datee__list">
                                                <h2>{post.date}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project__details-comment" style={{ width: "90vw", paddintTop: "5rem", }}>
                                        <p >{post.comment}</p>
                                        <div className="project__links" style={{ width: "80vw" }}>
                                            <div className={`project__link ${post.class}`}>
                                                <a href={`${post.link}`} target="__blank" style={{ fontSize: "0.8rem" }}><BiRightArrowAlt />View The Website</a>
                                            </div>
                                            <div className="project__link">
                                                <a href={`${post.link}`} target="__blank" style={{ fontSize: "0.8rem" }}><BiRightArrowAlt />View The Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project__img_container" style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column", transform: "translateX(4rem)" }}>
                                {post.mainTitle && renderDetails(post.mainTitle, post.mainTitleImg, post.mainTitle)}
                            {post.mainPageOnHover && renderDetails(post.mainPageOnHover, post.mainPageOnHoverImg, post.mainPageOnHover)}
                            {post.mainTitle2 && renderDetails(post.mainTitle2, post.mainTitleImg2, post.mainTitle2)}
                            {post.articleDetails && renderDetails(post.articleDetails, post.articleDetailsImg, post.articleDetails)}
                            {post.editPage && renderDetails(post.editPage, post.editPageImg, post.editPage)}
                            {post.createPost && renderDetails(post.createPost, post.createPostImg, post.createPost)}
                            {post.mainTitleSubMenu && renderDetails(post.mainTitleSubMenu, post.mainTitleSubMenuImg, post.mainTitleSubMenu)}
                            {post.projectLogins && renderDetails(post.projectLogins, post.projectLoginsImg, post.projectLogins)}
                            {post.registerPage && renderDetails(post.registerPage, post.registerPageImg, post.registerPage)}
                            {post.projetTestimonials && renderDetails(post.projetTestimonials, post.projetTestimonialsImg, post.projetTestimonials)}
                            {post.mainProjectsPage && renderDetails(post.mainProjectsPage, post.mainProjectsPageImg, post.mainProjectsPage)}
                            {post.accountPage && renderDetails(post.accountPage, post.accountPageImg, post.accountPage)}
                            {post.mainAboutPage && renderDetails(post.mainAboutPage, post.mainAboutPageImg, post.mainAboutPage)}
                            {post.mainContactPage && renderDetails(post.mainContactPage, post.mainContactPageImg, post.mainContactPage)}
                            {post.mainDarkMode && (
                                <div className="project__details_details">
                                    <div className="project__details-text">
                                        <h2>{post.mainDarkMode}</h2>
                                    </div>
                                    <div className="project__details-img">
                                        <img src={post.mainDarkModeImg} alt={post.mainContactPage} />
                                        <img src={post.mainDarkModeImg2} alt={post.mainContactPage} />
                                        <img src={post.mainDarkModeImg3} alt={post.mainContactPage} />
                                        <img src={post.mainDarkModeImg4} alt={post.mainContactPage} />
                                    </div>
                                </div>
                            )}
                            {post.lightMode && (
                                <div className="project__details_details">
                                    <div className="project__details-text">
                                        <h2>{post.lightMode}</h2>
                                    </div>
                                    <div className="project__details-img">
                                        <img src={post.lightModeImg1} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg2} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg3} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg4} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg5} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg6} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg7} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg8} alt={post.mainContactPage} />
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
                                        src={post.image}
                                        alt={post.title}
                                    />
                                </div>
                                <div className="project__details_post-text">
                                    <Link to="/projects" className="project__back">
                                        <IoChevronBack style={{ fontSize: "1.2rem", marginTop: "0.2rem", color: "var(--accent-color)" }} />
                                        <h2>Back To Projects</h2>
                                    </Link>
                                    <h1>{post.title}</h1>
                                    <div className="project__details-brief">
                                        <div className="category__date">
                                            <div className="categoryy">
                                                <h2>Category: </h2>
                                                <div className="category__list">
                                                    <h2>{post.category[0]}</h2>
                                                    <h2>{post.category[1]}</h2>
                                                    <h2>{post.category[2]}</h2>
                                                </div>
                                            </div>
                                            <div className="datee">
                                                <h2>Year: </h2>
                                                <div className="datee__list">
                                                    <h2>{post.date}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project__details-comment">
                                            <p>{post.comment}</p>
                                            <div className="project__links">
                                                <div className={`project__link ${post.class}`}>
                                                    <a href={`${post.link}`} target="__blank"><BiRightArrowAlt />View The Website</a>
                                                </div>
                                                <div className="project__link">
                                                    <a href={`${post.link}`} target="__blank"><BiRightArrowAlt />View The Code</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {post.mainTitle && renderDetails(post.mainTitle, post.mainTitleImg, post.mainTitle)}
                            {post.mainPageOnHover && renderDetails(post.mainPageOnHover, post.mainPageOnHoverImg, post.mainPageOnHover)}
                            {post.mainTitle2 && renderDetails(post.mainTitle2, post.mainTitleImg2, post.mainTitle2)}
                            {post.articleDetails && renderDetails(post.articleDetails, post.articleDetailsImg, post.articleDetails)}
                            {post.editPage && renderDetails(post.editPage, post.editPageImg, post.editPage)}
                            {post.createPost && renderDetails(post.createPost, post.createPostImg, post.createPost)}
                            {post.mainTitleSubMenu && renderDetails(post.mainTitleSubMenu, post.mainTitleSubMenuImg, post.mainTitleSubMenu)}
                            {post.projectLogins && renderDetails(post.projectLogins, post.projectLoginsImg, post.projectLogins)}
                            {post.registerPage && renderDetails(post.registerPage, post.registerPageImg, post.registerPage)}
                            {post.projetTestimonials && renderDetails(post.projetTestimonials, post.projetTestimonialsImg, post.projetTestimonials)}
                            {post.mainProjectsPage && renderDetails(post.mainProjectsPage, post.mainProjectsPageImg, post.mainProjectsPage)}
                            {post.accountPage && renderDetails(post.accountPage, post.accountPageImg, post.accountPage)}
                            {post.mainAboutPage && renderDetails(post.mainAboutPage, post.mainAboutPageImg, post.mainAboutPage)}
                            {post.mainContactPage && renderDetails(post.mainContactPage, post.mainContactPageImg, post.mainContactPage)}
                            {post.mainDarkMode && (
                                <div className="project__details_details">
                                    <div className="project__details-text">
                                        <h2>{post.mainDarkMode}</h2>
                                    </div>
                                    <div className="project__details-img">
                                        <img src={post.mainDarkModeImg} alt={post.mainContactPage} />
                                        <img src={post.mainDarkModeImg2} alt={post.mainContactPage} />
                                        <img src={post.mainDarkModeImg3} alt={post.mainContactPage} />
                                        <img src={post.mainDarkModeImg4} alt={post.mainContactPage} />
                                    </div>
                                </div>
                            )}
                            {post.lightMode && (
                                <div className="project__details_details">
                                    <div className="project__details-text">
                                        <h2>{post.lightMode}</h2>
                                    </div>
                                    <div className="project__details-img">
                                        <img src={post.lightModeImg1} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg2} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg3} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg4} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg5} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg6} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg7} alt={post.mainContactPage} />
                                        <img src={post.lightModeImg8} alt={post.mainContactPage} />
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