import React from 'react'

const TeamMember = ({ memberPic, job, name }) => {
    return (
        <div className="expert-col">
            <img src={memberPic} alt="lazy" />
            <p>{job}</p>
            <h3>{name}</h3>
        </div>
    )
}

export default TeamMember
