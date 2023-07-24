import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'

const FiveLogos = () => {
    return (
        <>
            <section className="five-logos">
                <div className="container">
                    <div className="five-logos-flex">
                        <div className="five-logos-width">
                            <img src={logo1} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo2} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo3} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo4} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo5} alt="lazy" />
                        </div>
                    </div>
                    <div className="mobile-logo-slider">
                        <OwlCarousel items={2} className="owl-theme" loop margin={8} dots={false}>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo1} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo2} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo3} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo4} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo5} alt="lazy" />
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div >
            </section >
        </>
    )
}

export default FiveLogos
