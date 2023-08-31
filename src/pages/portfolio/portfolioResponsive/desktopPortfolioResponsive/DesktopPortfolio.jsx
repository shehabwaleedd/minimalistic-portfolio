import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import projectsData from '../../Data';


const DesktopPortfolio = ({ language, selectedImage, handleTextHover, handleTextLeave, body, screen}) => {
    const { t } = useTranslation();
    return (
        <motion.div>
            <motion.section className="portfolio" ref={(el) => (body = el)} initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
                <motion.div className="portfolio__container">
                    <motion.div className="menu">
                        <motion.div className="menu__item-image_wrapper" style={{ display: window.innerWidth <= 868 ? "none" : "block" }} initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
                            <div className="menu__item-image_inner">
                                {projectsData.map((image) => (
                                    <motion.div className={`image-wrapper ${image.classProject}`} key={image.id} >
                                        <img
                                            src={image.image}
                                            alt={image.title}
                                            className={selectedImage === image.image ? `menu__item-image.fade-in` : 'menu__item-image'}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div className="text-container" style={{ textAlign: language === "ar" ? "right" : "left" }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} exit={{ opacity: 0, y: 100, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
                            <motion.div className="workk__work">
                                <motion.h1 className='work__work-text' style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.3rem", fontSize: language === "ar" ? "4rem" : "", left: language === "ar" ? "25rem" : "0" }}>{t("portfolio__work_title")}</motion.h1>
                            </motion.div>
                            <AnimatePresence mode='wait'>
                                <motion.div className="scrollbarr" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { delay: 0.05, velocity: 2, staggerChildren: 1.5, duration: 0.3, ease: [0.42, 0, 0.58, 1] } }}>
                                    {projectsData.map((item, index) => (
                                        <motion.div className="work__title" key={index} onMouseOver={() => handleTextHover(item.id)} onMouseLeave={() => handleTextLeave()} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} exit={{ opacity: 0, y: 100, transition: { delay: 0.15, velocity: 2, staggerChildren: 1.5, duration: 0.75, ease: [0.42, 0, 0.58, 1] } }}>
                                            <motion.div className="menu-item-wrapper" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { velocity: 2, staggerChildren: 1.5, duration: 0.3, ease: [0.42, 0, 0.58, 1] } }}>
                                                <motion.div className="menu-arrow">
                                                    <BiRightArrowAlt style={{ fontSize: "2.3rem", marginTop: "1.75rem", color: "var(--title-color)" }} />
                                                </motion.div>
                                                <motion.div className="menu-text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { velocity: 2, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}>
                                                    <Link to={`/projects/${item.title}`}>
                                                        <motion.h1 data-text={item.title} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 100, transition: { velocity: 2, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}>{item.title}</motion.h1 >
                                                    </Link>
                                                    <div className="isNew" style={{ right: item.class === "shehab" ? "5rem" : item.class === "lelu" || item.class === "cairo" ? "2rem" : "" }}>
                                                        {item.workingOnIt && (
                                                            <h3 className='workingonit'>
                                                                Workin' On It
                                                            </h3>
                                                        )}
                                                        {item.newProject && (
                                                            <h3 className='newproject'>
                                                                New Project
                                                            </h3>
                                                        )}
                                                    </div>
                                                    <motion.div className="categories">
                                                        <motion.p>{item.category[0]}</motion.p>
                                                    </motion.div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

export default DesktopPortfolio