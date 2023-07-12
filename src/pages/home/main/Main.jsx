import React, { useEffect } from 'react'
import "./Main.scss"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BiRightArrowAlt } from 'react-icons/bi';
import DropDownMenu from '../../../navItems/animatedNav/dropDownMenu/DropDownMenu';
import { AnimatePresence, motion } from 'framer-motion';

const Main = (Props) => {


    const { t } = useTranslation()


    useEffect(() => {

        const helloWorld = document.querySelector('.main__content');

        function handleDoubleClick() {
            helloWorld.classList.toggle('selected');
        }

        helloWorld.addEventListener('dblclick', handleDoubleClick);

        // Clean up the event listener on unmount
        return () => {
            helloWorld.removeEventListener('dblclick', handleDoubleClick);

        };

    }, []);

    useEffect(() => {
        const handleResize = () => {
            Props.setIsMobile(window.innerWidth <= 468);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [Props]);





    return (
        <section className='main section'>
            {Props.isMobile ? (
                // Mobile view
                <div className="main__container container grid">
                    <div className="main__content" style={{ marginTop: Props.navOpen ? "5rem" : "0", }}>
                        <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "" }} className="main__titlee">{t("hey")}{t("my__name_im")} <span style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "" }} className="main__title-color">{t("my__name-first")}</span> <span style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "" }} > {t("my__name-last")}</span></h1>
                        <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "" }} className="main__subtitle">{t("my__intro")}</h1>
                    </div>
                    <div className="main__subcontent">
                        <p className="main__description" style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "1rem" : "" }}>{t("Introduction")}</p>
                    </div>
                    <div className="main__links">
                        <Link to='/projects' className="main__button button1">
                            <p style={{ fontFamily: Props.language === "ar" ? "Cairo" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "1rem" : "" }}>
                                <BiRightArrowAlt style={{ fontSize: "1rem", color: "var(--title-color)" }} />
                                {t("button__view_my_projects")}
                            </p>
                        </Link>
                        <Link to='/about' className="main__button button2">
                            <p style={{ fontFamily: Props.language === "ar" ? "Cairo" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "1rem" : "" }}>
                                <BiRightArrowAlt style={{ fontSize: "1rem", color: "var(--title-color)" }} />
                                {t("button__more__about_me")}
                            </p>
                        </Link>
                    </div>
                </div>
            ) : (
                    <motion.div className="main__container container grid" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -100 , transition: { delay: 0.3, staggerChildren: 1.5, duration: 2, ease: "easeInOut" }}}>
                        <div className="main__content" style={{ marginTop: Props.navOpen ? "0rem" : "0" }}>
                            <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "4rem" : "2.8rem" }} className="main__titlee">{t("hey")}{t("my__name_im")} <span style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "4rem" : "2.8rem" }} className="main__title-color">{t("my__name-first")}</span> <span style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "4rem" : "2.8rem" }} > {t("my__name-last")}</span></h1>
                            <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "4rem" : "2.8rem" }} className="main__subtitle">{t("my__intro")}</h1>
                        </div>
                        <div className="main__subcontent">
                            <p className="main__description" style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2rem" : "" }}>{t("Introduction")}</p>
                        </div>
                        <div className="main__links">
                            <Link to='/projects' className="main__button button1">
                                <p style={{ fontFamily: Props.language === "ar" ? "Cairo" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "1rem" : "" }}>
                                    <BiRightArrowAlt style={{ fontSize: "1rem", color: "var(--title-color)" }} />
                                    {t("button__view_my_projects")}
                                </p>
                            </Link>
                            <Link to='/about' className="main__button button2">
                                <p style={{ fontFamily: Props.language === "ar" ? "Cairo" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "1rem" : "" }}>
                                    <BiRightArrowAlt style={{ fontSize: "1rem", color: "var(--title-color)" }} />
                                    {t("button__more__about_me")}
                                </p>
                            </Link>
                        </div>
                    </motion.div>
            )
            }
        </section>
    )
}

export default Main