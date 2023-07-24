import React from 'react'
import dottedBg from '../../assets/images/dottet-background.png'
import objectImg from '../../assets/images/Object.png'
import { NavLink } from 'react-router-dom'

const GotProject = () => {
    return (
        <>
            <section className="got-project" style={{ backgroundImage: `url(${dottedBg})` }}>
                <div className="container">
                    <div className="got-project-flex">
                        <div className="got-project-col">
                            <h2>Got a project
                                in your mind</h2>
                            <p>If you've got a project in mind, now is the time to turn that idea into
                                a reality. Whether it's a website, app, or graphic design project, taking
                                the first step towards making your vision a reality is often the hardest
                                part. But with the right team behind you, the process can be smooth
                                and stress-free.</p>
                            <NavLink>Talk To Us<i className="fa-solid fa-arrow-right"></i> </NavLink>
                        </div>
                        <div className="got-project-col">
                            <img src={objectImg} alt="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GotProject
