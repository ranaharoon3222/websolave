import React from 'react'
import test1Stars from '../../assets/images/black-stars.png'
import test1ProfPic from '../../assets/images/carl.png'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <>
            <section className="testimonials">
                <div className="container">
                    <div className="testimoniasl-text">
                        <p>Testimonials</p>
                        <h2>What Are <span className='boldtext'>Customer </span>
                            Say About Us</h2>
                    </div>
                    <div className="testimonials-flex">
                        <TestimonialCard name='Carl Hooper' profPic={test1ProfPic} rating={test1Stars} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' />
                        <TestimonialCard name='Carl Hooper' profPic={test1ProfPic} rating={test1Stars} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' />
                        <TestimonialCard name='Carl Hooper' profPic={test1ProfPic} rating={test1Stars} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
