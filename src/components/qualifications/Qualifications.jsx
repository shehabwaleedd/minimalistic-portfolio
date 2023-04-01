 import React from 'react'
import "./Qualificaitions.css"
import { useState } from 'react';
import { useTranslation } from 'react-i18next'



const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    }
    const { t } = useTranslation()

    return (
        <section className="qualification section">
            <h2 className="section__title">{t("section__qualifications")}</h2>
            <span className="section__subtitle">{t("section__subtitle_qualifications")}</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active" : "qualification__button"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{t("qualification__button-education")}
                    </div> 
                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active" : "qualification__button"}>
                        <i  className="uil uil-briefcase-alt qualification__icon"></i>{t("qualification__button-experience")}
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-secondryschool")}</h3>
                                <span className="qualification__subtitle">Agouza</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2013 - 2016
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-business-admin")}</h3>
                                <span className="qualification__subtitle">{t("qualification__subtitle-cairo")}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-cyber")}</h3>
                                <span className="qualification__subtitle">Sheikh Zayed/Beverly Hills</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IOS {t("qualification__subtitle-developer")}</h3>
                                <span className="qualification__subtitle">{t("qualification__subtitle-university")}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web {t("qualification__subtitle-developer")}</h3>
                                <span className="qualification__subtitle">Smart Village</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">iOS {t("qualification__subtitle-developer")}</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-frontend")}</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-purses")}</h3>
                                <span className="qualification__subtitle">Imbaba</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2011 - 2012
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-fixingcars")}</h3>
                                <span className="qualification__subtitle">Imbaba</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2012 - 2013
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-barber")}</h3>
                                <span className="qualification__subtitle">Sheikh Zayed/Beverly Hills</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2013 - 2014
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AIESEC RNS</h3>
                                <span className="qualification__subtitle">{t("qualification__subtitle-university")}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2018 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Customer Support</h3>
                                <span className="qualification__subtitle">Smart Village</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2019 - 2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">iOS {t("qualification__subtitle-developer")}</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification__subtitle-frontend")}</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualifications