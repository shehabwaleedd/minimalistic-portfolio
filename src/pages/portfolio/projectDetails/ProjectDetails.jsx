import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../Data";
import "./ProjectDetails.scss";
import ScrollAnimation from "../../../animation/ScrollAnimation/ScrollAnimation";
import { BiRightArrowAlt } from "react-icons/bi";
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
            {Props.isMobile ? (
                <>
                    <ScrollAnimation />
                    <motion.div className="project__details" style={{ width: "100vw", touchAction: "pan-y", }} initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                        <div className="project__card_details">
                        <motion.div
                                className="background__img"
                                initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
                                style={{ transform: "translateY(-40%)" }}
                            >
                                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="1200"                                >
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
                                        style={{ transition: "all 0.3s ease 0s", zIndex: "9999999999", filter: "blur(15px)" }}
                                        stroke={post.backgroundColor}
                                    ></path>
                                </svg>
                            </motion.div>
                            <div className="project__image_container" style={{ width: "100vw", position: "relative", left: window.innerWidth <= 408 ? "" : "0.5rem", top: "2rem" }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                />
                            </div>
                            <div className="project__details_post-text" style={{ transform: "translateX(-4rem)", }}>
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
                                        <p >{post.comment}</p>
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
                                    <div className="next__project" style={{ left: "0", width: "35vw" }}>
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
            ) : (
                <motion.div initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <ScrollAnimation />

                    <div className="project__details">
                        <div className="project__card_details">
                        <motion.div
                                className="background__img"
                                initial={{ opacity: 0, y: 100, transition: { delay: 0.1, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 1, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
                                style={{ transform: "translateY(-40%)" }}
                            >
                                <svg id="sw-js-blob-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1300" height="1000">
                                    <path
                                        fill={post.backgroundColor}
                                        d="M588.612548828125,0.7853403091430664C577.6177876790365,-4.842932224273682,554.4502563476562,-11.256544272104898,526.5706787109375,-0.7853403091430664C498.69110107421875,9.685863653818766,452.4869130452474,45.28795735041301,421.3350830078125,63.61256408691406C390.1832529703776,81.93717082341512,372.1204325358073,88.21989186604817,339.6596984863281,109.16230010986328C307.19896443684894,130.10470835367838,256.93717193603516,169.2408358256022,226.5706787109375,189.2670135498047C196.20418548583984,209.29319127400717,186.25655047098795,205.10470835367838,157.4607391357422,229.31936645507812C128.66492780049643,253.53402455647787,75.7853406270345,302.22511800130206,53.79581069946289,334.5549621582031C31.806280771891277,366.8848063151042,23.036648432413738,390.05235290527344,25.5235595703125,423.2984313964844C28.010470708211262,456.5445098876953,47.905759175618485,517.1466217041016,68.71727752685547,534.0314331054688C89.52879587809245,550.9162445068359,114.65968704223633,536.7800801595052,150.39266967773438,524.6072998046875C186.12565231323242,512.4345194498698,241.75391642252603,488.612548828125,283.11517333984375,460.9947509765625C324.47643025716144,433.376953125,362.04188537597656,396.07328542073566,398.5602111816406,358.9005126953125C435.0785369873047,321.72773996988934,473.0366465250651,276.1780090332031,502.2251281738281,237.95811462402344C531.4136098225912,199.73822021484375,558.6387481689453,163.74344952901205,573.6911010742188,129.58114624023438C588.7434539794922,95.4188429514567,590.0523376464844,54.45026254653931,592.5392456054688,32.98429489135742C595.0261535644531,11.518327236175537,599.6073099772135,6.4136128425598145,588.612548828125,0.7853403091430664C577.6177876790365,-4.842932224273682,554.4502563476562,-11.256544272104898,526.5706787109375,-0.7853403091430664"
                                        transform="matrix(-0.1736481776669302,-0.9848077530122082,0.9848077530122082,-0.1736481776669302,100.62834523882208,619.8551503766691)"
                                        strokeWidth="1px"
                                        style={{ transition: "all 0.3s ease 0s", zIndex: "9999999999", filter: "blur(53px)", border: "none" }}
                                        stroke={post.backgroundColor}
                                    ></path>
                                </svg>
                            </motion.div>
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
                                                <a href={`${post.website}`} target="__blank"><BiRightArrowAlt />View The Website</a>
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
            )}
        </>
    );
}

export default ProjectDetails;