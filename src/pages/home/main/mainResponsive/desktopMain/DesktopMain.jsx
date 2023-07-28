import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BiRightArrowAlt } from 'react-icons/bi'
const DesktopMain = ({ navOpen, language }) => {
    const { t } = useTranslation()
    return (
        <motion.div className="main__container container grid" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, transition: { delay: 0.1, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}>
            <div className="main__content" style={{ marginTop: navOpen ? "0" : "0" }}>
                <h1 style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "4rem" : "2.8rem" }} className="main__titlee">{t("hey")}{t("my__name_im")}
                    <span style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "4rem" : "2.8rem" }} className="main__title-color">
                        {t("my__name-first")}
                    </span>
                    <span style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "4rem" : "2.8rem" }}>
                        {t("my__name-last")}
                    </span>
                </h1>
                <h1 style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "4rem" : "2.8rem" }} className="main__subtitle">
                    {t("my__intro")}
                </h1>
            </div>
            <div className="main__subcontent">
                <p className="main__description" style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2rem" : "" }}>{t("Introduction")}</p>
            </div>
            <div className="main__links">
                <Link to='/projects' className="main__button button1">
                    <p style={{ fontFamily: language === "ar" ? "Cairo" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "1rem" : "" }}>
                        <BiRightArrowAlt style={{ fontSize: "1rem", color: "var(--title-color)" }} />
                        {t("button__view_my_projects")}
                    </p>
                </Link>
                <Link to='/about' className="main__button button2">
                    <p style={{ fontFamily: language === "ar" ? "Cairo" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "1rem" : "" }}>
                        <BiRightArrowAlt style={{ fontSize: "1rem", color: "var(--title-color)" }} />
                        {t("button__more__about_me")}
                    </p>
                </Link>
            </div>
        </motion.div>
    )
}

export default DesktopMain