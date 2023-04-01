import React from 'react'
import './Pricing.css'
import { Data } from './Data'

const Pricing = () => {
    return (
        <section className='pricing section'>
            <h2 className='section__title'>Pricing</h2>
            <span className="section__subtitle">Here is my pricing</span>
            <div className="pricing__container">
                {Data.map(({ id, title, price, description, box1, box2, box3, box4, box5, box6 }) => {
                    return (
                        <div className="pricing__content" id={id}>
                            <div className="pricing__box">
                                <h3 className="pricing__title">{title}</h3>
                                <h1 className='pricing__main'>{price}</h1>
                                <p className="pricing__description">{description}</p>
                            </div>
                            <div className="pricing__box">
                                <p>{box1}</p>
                                <p>{box2}</p>
                                <p>{box3}</p>
                                <p>{box4}</p>
                                <p>{box5}</p>
                                <p>{box6}</p>
                            </div>
                            <div className="pricing__box">
                                <a href='/' className="pricing__button button">Get Started</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Pricing