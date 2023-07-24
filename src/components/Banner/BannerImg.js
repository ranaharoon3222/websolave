import React from 'react'
import customer from '../../assets/images/customers.png'

const BannerImg = ({ bgImage, className }) => {
    return (
        <>
            {/* <div className={className} style={{ minWidth: '100%' }}> */}
            <div className="banner-image" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="item">
                    <div className="container">
                        <h1>Creative solutions for your
                            digital needs</h1>
                        <p>We believe in the transformative power of exceptional design and development. Whether
                            it's crafting a
                            stunning website, creating engaging graphics, or developing robust digital solutions
                        </p>
                        <div className="search-bar">
                            <input type="" placeholder="Want a logo or a website design" /><i
                                className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="customers-flex">
                            <div className="customers-width">
                                <img src={customer} alt="lazy" />
                            </div>
                            <div className="customers-width">
                                <span>1200+ Happy Customers</span><br />
                                <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default BannerImg
