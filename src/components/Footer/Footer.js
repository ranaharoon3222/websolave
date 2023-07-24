import React from 'react'
import headerLogo from '../../assets/images/header-logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-flex">
                    <div className="footer-col">
                        <img src={headerLogo} alt="lazy" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h5>Services</h5>
                            <li><NavLink>Ui Ux Design</NavLink></li>
                            <li><NavLink>Web Design</NavLink></li>
                            <li><NavLink>Graphic Design</NavLink></li>
                            <li><NavLink>Web Development</NavLink></li>
                            <li><NavLink>WordPress Design</NavLink></li>
                            <li><NavLink>Graphic Design</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h5>Services</h5>
                            <li><NavLink>Ui Ux Design</NavLink></li>
                            <li><NavLink>Web Design</NavLink></li>
                            <li><NavLink>Graphic Design</NavLink></li>
                            <li><NavLink>Web Development</NavLink></li>
                            <li><NavLink>WordPress Design</NavLink></li>
                            <li><NavLink>Graphic Design</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h5>Let's Connect</h5>
                            <div className="lets-connect">
                                <div className="lets-col">
                                    <NavLink><i className="fa-solid fa-phone"></i> +47 333 78 901</NavLink>
                                </div>
                                <div className="lets-col">
                                    <NavLink><i className="fa-solid fa-envelope"></i>
                                        support@web_designrr.com</NavLink>
                                </div>
                            </div>
                            <div className="fti-icons">
                                <NavLink><i className="fa-brands fa-facebook-f"></i></NavLink>
                                <NavLink><i className="fa-brands fa-twitter"></i></NavLink>
                                <NavLink><i className="fa-brands fa-instagram"></i></NavLink>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© Copyright 2023 by Web Designrrr</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
