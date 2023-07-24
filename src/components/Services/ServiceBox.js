import React from 'react'
import { NavLink } from 'react-router-dom'

const ServiceBox = ({ icon, title, description }) => {
    return (
        <div className="service-box">
            <div className="top-icon">
                <img src={icon} alt="lazy" />
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
            <NavLink>Read More <i className="fa-solid fa-arrow-right"></i></NavLink>
        </div>
    )
}

export default ServiceBox
