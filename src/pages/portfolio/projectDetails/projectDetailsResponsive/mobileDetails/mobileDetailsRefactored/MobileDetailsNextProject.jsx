import React from 'react'

const MobileDetailsNextProject = ({ nextTitleName, goToNextProject }) => {
    return (
        <div className="project__next_project" style={{ width: "100vw", left: "0", gap: "3rem", overflow: "visible" }}>
            <div className="menu-item-wrapper" style={{ justifyContent: "space-between", width: "100vw" }}>
                <div className="next__project" style={{ left: "0", width: "65vw" }}>
                    <h1 onClick={goToNextProject} style={{ fontSize: "0.8rem", letterSpacing: 0 }}>Next Project</h1>
                </div>
                <div className="project__next_project_name" style={{ width: "50vw" }}>
                    <h1 style={{ fontSize: "0.8rem", letterSpacing: 0 }}>{nextTitleName()}</h1>
                </div>
            </div>
        </div>
    )
}

export default MobileDetailsNextProject