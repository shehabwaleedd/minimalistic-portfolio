import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import "./MobileDrop.css"
import { AnimatePresence, motion } from 'framer-motion'
const MobileDrop = ({ navOpen, language, handleLanguageExpanded, languageExpanded, handleEnglishClick, handleGermanClick, handleFrenchClick, handleArabicClick }) => {
    return (
        <div className={`${navOpen ? "dropdown-menu_mobile" : "dropdown-menu_mobile"}`}>
            <div onClick={handleLanguageExpanded} className={navOpen ? 'dropdown__icon_mobile spin' : 'dropdown__icon_mobile'}
            >

                <span onClick={handleLanguageExpanded}>
                    {language}
                    <FaAngleDown />
                </span>
                    <AnimatePresence>
                        {languageExpanded && (
                            <motion.div initial={{ x: 15, opacity: 0 }} animate={{ x: 3, opacity: 1 }} exit={{ x: 15, opacity: 0 }} className="language__dropdown-mobile"
                                style={{ top: navOpen ? "2.5rem" : "4rem", right: navOpen ? language === "ar" ? "0rem" : "-1rem" : language === "ar" ? "-6rem" : "-3rem", width: "16rem"}}>
                                <div className="language__dropdown-link_mobile" onClick={handleEnglishClick}>
                                    <span className="language__text_mobile">en</span>
                                </div>
                                <div className="language__dropdown-link_mobile" onClick={handleGermanClick}>
                                    <span className="language__text_mobile">de</span>
                                </div>
                                <div className="language__dropdown-link_mobile" onClick={handleFrenchClick}>
                                    <span className="language__text_mobile">fr</span>
                                </div>
                                <div className="language__dropdown-link_mobile" onClick={handleArabicClick}>
                                    <span className="language__text_mobile">ar</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
            </div>
        </div>
    )
}

export default MobileDrop