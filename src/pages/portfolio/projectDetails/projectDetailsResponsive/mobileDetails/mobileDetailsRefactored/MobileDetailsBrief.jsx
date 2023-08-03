import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const MobileDetailsBrief = ({ post }) => {
    return (
        <div className="project__details-brief" style={{ flexDirection: "column", width: "90vw", justifyContent: "center", alignContent: "center" }}>
            <div className="category__date">
                <div className="categoryy">
                    <h2>Category: </h2>
                    <div className="category__list">
                        <h2>{post.category[0]}</h2>
                        <h2>{post.category[1]}</h2>
                        <h2>{post.category[2]}</h2>
                        <h2>{post.category[3]}</h2>
                    </div>
                </div>
                <div className="datee">
                    <h2>Year: </h2>
                    <div className="datee__list">
                        <h2>{post.date}</h2>
                    </div>
                </div>
            </div>
            <div className="project__details-comment" style={{ width: "90vw", paddintTop: "5rem", }}>
                <p style={{ fontSize: "0.8rem" }}>{post.comment}</p>
                <div className="project__links" style={{ width: "100vw", flexDirection: "column", borderTop: "0.5px solid var(--text-color)", }}>
                    <div className={`project__link ${post.class}`} style={{ marginTop: "1rem" }}>
                        <a href={`${post.website}`} target="__blank" style={{ fontSize: "1rem" }}><BiRightArrowAlt />View The Website</a>
                    </div>
                    {/* <div className="project__link" style={{ marginTop: "1rem" }}>
                    <a href={`${post.link}`} target="__blank" style={{ fontSize: "1rem" }}><BiRightArrowAlt />View The Code</a>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default MobileDetailsBrief