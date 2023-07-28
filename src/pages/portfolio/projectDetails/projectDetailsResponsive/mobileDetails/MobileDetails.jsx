import React from 'react'
import './MobileDetails.scss'
import ScrollAnimation from '../../../../../animation/ScrollAnimation/ScrollAnimation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { IoChevronBack } from 'react-icons/io5';
import projectsData from '../../../Data';

const MobileDetails = ({ post, renderDetails, goToNextProject, id }) => {
    return (
        <>
            <ScrollAnimation />
            <motion.div className="project__details" style={{ width: "100vw", touchAction: "pan-y", }} initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                <div className="project__card_details">
                    <motion.div
                        className="background__img"
                        initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
                        style={{ transform: "translateY(-40%)" }}
                    >
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="1200">
                            <defs>
                                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="500%"></stop>
                                    <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                fill={post.backgroundColor}
                                d="M22.1,-22.2C24.8,-19.5,20.3,-9.8,16.2,-4.1C12.2,1.7,8.6,3.3,5.9,6.8C3.3,10.4,1.7,15.8,-4.3,20.1C-10.2,24.3,-20.3,27.4,-25.7,23.9C-31,20.3,-31.5,10.2,-27.1,4.4C-22.6,-1.3,-13.3,-2.6,-7.9,-5.3C-2.6,-7.9,-1.3,-12,4.2,-16.2C9.8,-20.4,19.5,-24.8,22.1,-22.2Z"
                                transform="translate(45 50)"
                                strokeWidth="1px"
                                style={{ transition: "all 0.3s ease 0s", zIndex: "9999999999" }}
                                stroke={post.backgroundColor}
                            ></path>
                        </svg>
                    </motion.div>
                    <div className="project__image_container-mobile" style={{ width: "100vw", position: "relative", left: window.innerWidth <= 408 ? "" : "0.5rem", top: "2rem" }}>
                        <img
                            src={post.image}
                            alt={post.title}
                        />
                    </div>
                    <div className="project__details_post-text" style={{ transform: "translateX(-2rem)", }}>
                        <Link to="/projects" className="project__back">
                            <IoChevronBack style={{ fontSize: "1.2rem", marginTop: "0.2rem", color: "var(--accent-color)" }} />
                            <h2>Back To Projects</h2>
                        </Link>
                        <h1 style={{ fontSize: "1.5rem", width: "100vw" }}>{post.title}</h1>
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
                                <p style={{fontSize: "0.8rem"}}>{post.comment}</p>
                                <div className="project__links" style={{ width: "100vw", flexDirection: "column", borderTop: "0.5px solid var(--text-color)", }}>
                                    <div className={`project__link ${post.class}`} style={{ marginTop: "1rem" }}>
                                        <a href={`${post.website}`} target="__blank" style={{ fontSize: "1rem" }}><BiRightArrowAlt />View The Website</a>
                                    </div>
                                    <div className="project__link" style={{ marginTop: "1rem" }}>
                                        <a href={`${post.link}`} target="__blank" style={{ fontSize: "1rem" }}><BiRightArrowAlt />View The Code</a>
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
                    <div className="project__next_project" style={{ width: "100vw", left: "0", gap: "3rem", overflow: "visible" }}>
                        <div className="menu-item-wrapper" style={{ justifyContent: "space-between", width: "100vw" }}>
                            <div className="next__project" style={{ left: "0", width: "65vw" }}>
                                <h1 onClick={goToNextProject} style={{ fontSize: "0.8rem", letterSpacing: 0 }}>Next Project</h1>
                            </div>
                            <div className="project__next_project_name" style={{ width: "50vw" }}>
                                <h1 style={{ fontSize: "0.8rem", letterSpacing: 0 }}>{projectsData[(parseInt(id) + 1) % projectsData.length].title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default MobileDetails