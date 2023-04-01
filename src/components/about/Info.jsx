import React from "react"
import { useTranslation } from 'react-i18next'


const Info = () => {

    const { t } = useTranslation()

    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">{t("about__expierence")}</h3>
                <span className="about__subtitle"> 1 {t("about__year")} </span>
            </div>
            <div className="about__box">
                <i class='bx bx-briefcase about__icon'></i>
                <h3 className="about__title">{t("about__completed")}</h3>
                <span className="about__subtitle">7 {t("about__projects")}</span>
            </div>
            <div className="about__box">
                <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">{t("about__support")}</h3>
                <span className="about__subtitle">24/7</span>
            </div>
        </div>
    )
}

export default Info