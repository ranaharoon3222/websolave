import React from 'react'
import textIcon from '../../assets/images/text.png'

const TestimonialCard = ({ profPic, rating, name, content }) => {
    return (
        <div className="testimonials-col">
            <div className="left-icon">
                <img src={textIcon} alt="lazy" />
            </div>
            <p>{content}</p>
            <div className="reviews-flex">
                <div className="review-col">
                    <img src={profPic} alt="lazy" />
                </div>
                <div className="review-col">
                    <h6>{name}</h6>
                    <img src={rating} alt="lazy" />
                </div>
            </div>

        </div>
    )
}

export default TestimonialCard
