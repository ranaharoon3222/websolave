import React from 'react'
import gitImg from '../../assets/images/get-in-touch.png'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <section className="get-in-touch">
                <div className="get-touch-flex">
                    <div className="get-col">
                        <div className="touch-text">
                            <p>Contact Now</p>
                            <h2>Get in touch with us</h2>
                        </div>
                        <form action="">
                            <div className="input-flex">
                                <div className="input-col">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="input-col">
                                    <input type="email" placeholder="Enter Email" />
                                </div>
                                <div className="input-col">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="input-col">
                                    <input type="tel" placeholder="Phone" />
                                </div>
                                <div className="input-col">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="submit-button">
                                <NavLink style={{ cursor: 'pointer' }}>Send Message <i className="fa-solid fa-arrow-right"></i></NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="get-col">
                        <img src={gitImg} alt="lazy" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
