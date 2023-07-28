import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
const MobileDrop = ({ navOpen, language, handleLanguageExpanded, languageExpanded, handleEnglishClick, handleGermanClick, handleFrenchClick, handleArabicClick}) => {
    return (
        <div className={`dropdown-menu`}>
            <div
                onClick={handleLanguageExpanded}
                className={navOpen ? 'dropdown__icon spin' : 'dropdown__icon'}
                style={{zIndex: 999999999}}>
                <span onClick={handleLanguageExpanded}>
                    {language}
                    <FaAngleDown />
                    <AnimatePresence>
                        {languageExpanded && (
                            <motion.div initial={{ x: 15, opacity: 0 }}animate={{ x: 3, opacity: 1 }}exit={{ x: 15, opacity: 0 }}className="language__dropdown"
                                style={{ top: navOpen ? "-3rem" : "3rem",right: navOpen ? language === "ar" ? "-10rem" : "10rem" : language === "ar" ? "-6rem" : "-6rem",width: "16rem",zIndex: 999999999, }}>
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