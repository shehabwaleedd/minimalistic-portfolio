import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
const DesktopDrop = ({ navOpen, language, handleLanguageExpanded, languageExpanded, handleEnglishClick, handleGermanClick, handleFrenchClick, handleArabicClick }) => {
    return (
        <div className="dropdown-menu">
            <div onClick={handleLanguageExpanded}className={navOpen ? 'dropdown__icon spin' : 'dropdown__icon'}>
                <span onClick={handleLanguageExpanded}>
                    {language}
                    <FaAngleDown />
                    <AnimatePresence>
                        {languageExpanded && (
                            <motion.div initial={{ x: 15, opacity: 0 }} animate={{ x: 3, opacity: 1 }} exit={{ x: 15, opacity: 0 }}
                                className="language__dropdown"
                                style={{ top: navOpen ? "-4rem" : "", left: navOpen ? language === "ar" ? "-8rem" : "-10rem" : language === "ar" ? "4rem" : "-20rem", flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                                <div className="language__dropdown-link" onClick={handleEnglishClick}>
                                    <span className="language__text" style={{ color: navOpen ? "var(--overlay-color)" : "var(--title-color)" }}>en</span>
                                </div>
                                <div className="language__dropdown-link" onClick={handleGermanClick}>
                                    <span className="language__text" style={{ color: navOpen ? "var(--overlay-color)" : "var(--title-color)" }}>de</span>
                                </div>
                                <div className="language__dropdown-link" onClick={handleFrenchClick}>
                                    <span className="language__text" style={{ color: navOpen ? "var(--overlay-color)" : "var(--title-color)" }}>fr</span>
                                </div>
                                <div className="language__dropdown-link" onClick={handleArabicClick}>
                                    <span className="language__text" style={{ color: navOpen ? "var(--overlay-color)" : "var(--title-color)" }}>ar</span>
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

export default DesktopDrop