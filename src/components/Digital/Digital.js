import React from 'react'
import believeBg from '../../assets/images/believe-banner.png'
import { NavLink } from 'react-router-dom'

const Digital = () => {
    return (
        <>
            <section className="digital">
                <div className="container">
                    <div className="digital-flex">
                        <div className="digital-col">
                            <h2>We Design digital experiences that drive excellent results</h2>
                        </div>
                        <div className="digital-col">
                            <p>Talk to us now</p>
                            <NavLink to='/'>+1 (561) 664-6455</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-believe" style={{ backgroundImage: `url(${believeBg})` }}>
                <div className="container">
                    <div className="believe-content">
                        <p>Get in touch with us anytime</p>
                        <h1>we believe that every
                            great project starts with a vision</h1>
                        <NavLink>Get A Quote <i className="fa-solid fa-arrow-right"></i></NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Digital
