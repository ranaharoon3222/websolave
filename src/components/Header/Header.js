import React from 'react'
import haederLogo from '../../assets/images/header-logo.png'
import phoneIcon from '../../assets/icons/phoneIcon.png'
import emailIcon from '../../assets/icons/emailIcon.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const toggleMobileNav = () => {
        document.querySelector('.menu-icon-3').classList.toggle('opened');
        document.querySelector('.nav-flex').classList.toggle('opened');
    }

    return (
        <>
            <header id="header">
                <div className="black-color">
                    <div className="header-top-flex">
                        <div className="header-top-text">
                            <p>Bringing your digital vision to life</p>
                        </div>
                        <div className="header-top-icons">
                            <p>Follow Us On: </p>
                            <div className="social-media-links">
                                <NavLink to='/'><i className="fa-brands fa-facebook-f"></i></NavLink>
                                <NavLink to='/'><i className="fa-brands fa-twitter"></i></NavLink>
                                <NavLink to='/'><i className="fa-brands fa-instagram"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-logo-content">
                    <div className="container">
                        <div className="logo-content-flex">
                            <div className="header-logo-width">
                                <NavLink to='/'>
                                    <img src={haederLogo} alt="lazy" />
                                </NavLink>
                            </div>
                            <div className="header-logo-width">
                                <div className="contact-icon-flex">
                                    <div className="contact-icon-width">
                                        <div className="phone-icon">
                                            <NavLink to='/'>
                                                <img src={phoneIcon} alt="lazy" />
                                            </NavLink>
                                        </div>
                                        <div className="phone-text">
                                            <NavLink to='/'>Call us Anytime</NavLink><br />
                                            <NavLink to='/'>+47 333 78 901</NavLink>
                                        </div>
                                    </div>
                                    <div className="contact-icon-width">
                                        <div className="phone-icon">
                                            <NavLink to='/'>
                                                <img src={emailIcon} alt="lazy" />
                                            </NavLink>
                                        </div>
                                        <div className="phone-text">
                                            <NavLink to='/'>Mail Us For Support</NavLink><br />
                                            <NavLink to='/'>support@web_designrr.com</NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-nav">
                            <div className="menu-icon menu-icon-3" onClick={toggleMobileNav}>
                                <div className="bar bar-1"></div>
                                <div className="bar bar-2"></div>
                                <div className="bar bar-3"></div>
                            </div>
                            <ul className="nav-flex">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/'>Portfolio</NavLink></li>
                                <li><NavLink to='/'>About</NavLink></li>
                                <li><NavLink to='/'>Service</NavLink></li>
                                <li><NavLink to='/'>Team</NavLink></li>
                                <li><NavLink to='/'>Testimonial</NavLink></li>
                                <li><NavLink to='/'>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header
