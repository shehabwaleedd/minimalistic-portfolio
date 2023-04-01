import React from "react"
import "./blog.css"
import { blog } from "../../blogItems/assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"


export const Card = () => {

    return (
        <>
            <section className='blog section'>
                <h2 className="section__title">Blog</h2>
                <span className="section__subtitle">An Intellectual Blog Where You Find Me Talking About Everything</span>
                <div className='grid3 container'>
                    {blog.map((item) => (
                        <div className='post__box post__boxItems' key={item.id}>
                            <div className='blog__card_details'>
                                <Link to={`/details/${item.id}`} className='link'>
                                    <div className='post__img'>
                                        <img src={item.cover} alt='' />
                                    </div>
                                    <div className='post__tag'>
                                        <a href='/' className='post__hashtag' >#{item.category}</a>
                                    </div>
                                    <h3 className="post__title-name">{item.title}</h3>
                                </Link>
                                <p className="post__subtitle">{item.desc.slice(0, 90)}...</p>
                                <div className='post__date'>
                                    <label htmlFor=''>{item.date}</label>
                                    <label htmlFor=''>27</label>
                                    <label htmlFor=''>SHARE</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
