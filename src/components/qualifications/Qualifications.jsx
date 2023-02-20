import React from 'react'
import "./Qualificaitions.css"
import { useState } from 'react';


const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active" : "qualification__button"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div> 
                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active" : "qualification__button"}>
                        <i  className="uil uil-briefcase-alt qualification__icon"></i>Experience
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
                                <h3 className="qualification__title">El-Geiza Secondary School</h3>
                                <span className="qualification__subtitle">Agouza</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2013 - 2016
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Business Adminstraion - Financial Accounting Major</h3>
                                <span className="qualification__subtitle">Cairo</span>
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
                                <h3 className="qualification__title">Cyber Security</h3>
                                <span className="qualification__subtitle">Sheikh Zayed/Beverly Hills</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IOS Development</h3>
                                <span className="qualification__subtitle">Cairo University</span>
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
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Smart Village</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2022 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">iOS Developer</h3>
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
                                <h3 className="qualification__title">Frontend Developer</h3>
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
                                <h3 className="qualification__title">Worker In A Purses' Factory </h3>
                                <span className="qualification__subtitle">Imbaba</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2011 - 2012
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Fixing Cars' Lights</h3>
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
                                <h3 className="qualification__title">Barber Assistant</h3>
                                <span className="qualification__subtitle">Sheikh Zayed/Beverly Hills</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>2013 - 2014
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AIESEC RNS</h3>
                                <span className="qualification__subtitle">Cairo University</span>
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
                                <h3 className="qualification__title">iOS Developer</h3>
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
                                <h3 className="qualification__title">Frontend Developer</h3>
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