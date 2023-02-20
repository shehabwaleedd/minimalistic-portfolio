import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonials.css"
import { Data } from './Data'
import { Navigation, Pagination } from "swiper";


const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="testimonials__container">
        {Data.map(({ id, image, title, comment, job }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} className="testimonial__img" />
              <h3 className="testimonial__name">{title} </h3>
              <span className="testimonial__job">{job}</span>
              <p className="testimonial__description">{comment}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials