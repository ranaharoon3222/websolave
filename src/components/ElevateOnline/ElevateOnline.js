import React from 'react'
import boyImg from '../../assets/images/boy.png'
import videoImg from '../../assets/images/video-image.png'
import paintImg from '../../assets/images/paint.png'
import psImg from '../../assets/images/ps.png'
import servicesImg from '../../assets/images/services.png'
import artImg from '../../assets/images/art.png'
import { NavLink } from 'react-router-dom'

const ElevateOnline = () => {
    return (
        <>
            <section className="elevate-online">
                <div className="container">
                    <div className="elevate-flex">
                        <div className="elevate-width">
                            <img src={boyImg} alt="lazy" />
                            <div className="girl-video" data-position>
                                <img src={videoImg} alt="lazy" />
                                <NavLink className="fancy-box-video" data-fancybox
                                    to="https://www.youtube.com/watch?v=K4TOrB7at0Y&ab_channel=StealthMediaLTD">
                                    <span> <i className="fa-solid fa-play"></i> </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="elevate-width">
                            <h6>About Us</h6>
                            <h2>Elevate your <strong> online
                                presence</strong> with our
                                expertise</h2>
                            <p>
                                We take pride in collaborating closely with our clients to truly understand
                                their unique needs and goals, and then leveraging our expertise to create
                                digital experiences that inspire and engage audiences. With Web Designrr
                                , you can trust that you're getting innovative.</p>
                            <div className="four-icons-flex">
                                <div className="icons">
                                    <div className="four-icons-width">
                                        <img src={paintImg} alt="lazy" />
                                    </div>
                                    <div className="four-icons-width">
                                        <img src={psImg} alt="lazy" />
                                    </div>
                                    <div className="four-icons-width">
                                        <img src={servicesImg} alt="lazy" />
                                    </div>
                                    <div className="four-icons-width">
                                        <img src={artImg} alt="lazy" />
                                    </div>
                                </div>
                                <div className="icons-text">
                                    <p>10+ Excellent Services</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ElevateOnline
