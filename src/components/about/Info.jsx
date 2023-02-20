import React from "react"

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle"> 1 Year </span>
            </div>
            <div className="about__box">
                <i class='bx bx-briefcase about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">7 Projects</span>
            </div>
            <div className="about__box">
                <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">24/7</span>
            </div>
        </div>
    )
}

export default Info