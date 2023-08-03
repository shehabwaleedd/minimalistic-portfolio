import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
const TabletDetailsBrief = ({ post }) => {
    return (
        <div className="project__details-brief">
            <div className="category__date">
                <div className="categoryy">
                    <h2>Category: </h2>
                    <div className="category__list">
                        <h2 style={{ fontSize: "0.9rem" }}>{post.category[0]}</h2>
                        <h2 style={{ fontSize: "1rem" }}>{post.category[1]}</h2>
                        <h2 style={{ fontSize: "1rem" }}>{post.category[2]}</h2>
                    </div>
                </div>
                <div className="datee">
                    <h2>Year: </h2>
                    <div className="datee__list">
                        <h2 style={{ fontSize: "1rem" }}>{post.date}</h2>
                    </div>
                </div>
            </div>
            <div className="project__details-comment">
                <p style={{ fontSize: "1rem" }}>{post.comment}</p>
                <div className="project__links">
                    <div className={`project__link ${post.class}`}>
                        <a style={{ fontSize: "1rem" }} href={`${post.website}`} target="__blank"><BiRightArrowAlt />View The Website</a>
                    </div>
                    {/* <div className="project__link">
                                        <a href={`${post.link}`} target="__blank"><BiRightArrowAlt />View The Code</a>
                                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default TabletDetailsBrief