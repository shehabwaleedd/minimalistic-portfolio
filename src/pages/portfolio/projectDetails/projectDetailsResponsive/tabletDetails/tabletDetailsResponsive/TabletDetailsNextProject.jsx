import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const TabletDetailsNextProject = ({ nextTitleName, goToNextProject }) => {
    return (
        <div className="project__next_project">
            <div className="menu-item-wrapper">
                <div className="menu-arrow">
                    <BiRightArrowAlt style={{ fontSize: "2.3rem", marginTop: "0.4rem", color: "var(--title-color)" }} />
                </div>
                <div className="menu-text">
                    <div className="next__project">
                        <h3 onClick={goToNextProject}>Next Project</h3>
                    </div>
                </div>
            </div>
            <div className="project__next_project_name">
                <h3>{nextTitleName()}</h3>
            </div>
        </div>
    )
}

export default TabletDetailsNextProject