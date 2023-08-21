import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import "./MobileDrop.css"
import { AnimatePresence, motion } from 'framer-motion'
const MobileDrop = ({ navOpen, language, handleLanguageExpanded, languageExpanded, handleEnglishClick, handleGermanClick, handleFrenchClick, handleArabicClick }) => {
    return (
        <div className={`${navOpen ? "dropdown-menu_mobile" : "dropdown-menu_mobile"}`}>
            <div
                onClick={handleLanguageExpanded}
                className={navOpen ? 'dropdown__icon_mobile spin' : 'dropdown__icon_mobile'}
                style={{ zIndex: 999999999, position: "relative" }}>
                <span onClick={handleLanguageExpanded}>
                    {language}
                    <FaAngleDown />
                    <AnimatePresence>
                        {languageExpanded && (
                            <motion.div initial={{ x: 15, opacity: 0 }} animate={{ x: 3, opacity: 1 }} exit={{ x: 15, opacity: 0 }} className="language__dropdown-mobile"
                                style={{ top: navOpen ? "2.5rem" : "4rem", right: navOpen ? language === "ar" ? "13rem" : "-1rem" : language === "ar" ? "-6rem" : "-3rem", width: "14rem", zIndex: 999999999, position: "relative"}}>
                                <div className="language__dropdown-link" onClick={handleEnglishClick}>
                                    <span className="language__text">en</span>
                                </div>
                                <div className="language__dropdown-link" onClick={handleGermanClick}>
                                    <span className="language__text">de</span>
                                </div>
                                <div className="language__dropdown-link" onClick={handleFrenchClick}>
                                    <span className="language__text">fr</span>
                                </div>
                                <div className="language__dropdown-link" onClick={handleArabicClick}>
                                    <span className="language__text">ar</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </span>
                <div className={navOpen ? 'language__dash spin' : 'language__dash'}></div>
            </div>
        </div>
    )
}

export default MobileDrop