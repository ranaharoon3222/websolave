import React from 'react'
import member1 from '../../assets/images/mitchel.png'
import member2 from '../../assets/images/marta.png'
import member3 from '../../assets/images/johnson.png'
import member4 from '../../assets/images/peter.png'
import TeamMember from './TeamMember'

const ExpertTeam = () => {
    return (
        <>
            <section className="expert-team">
                <div className="container">
                    <div className="expert-text">
                        <h6>Expert Team Members</h6>
                        <h2>Meet our <span className='boldtext'>Professional</span>
                            Team Members</h2>
                    </div>
                    <div className="expert-flex">
                        <TeamMember memberPic={member1} job='Sn. Ui Ux Designer' name='Mitchel Marsh' />
                        <TeamMember memberPic={member2} job='Web Designer' name='Marta Lopez' />
                        <TeamMember memberPic={member3} job='Web Developer' name='Elley Johnson' />
                        <TeamMember memberPic={member4} job='Sn. Graphic Designer' name='Peter Moe' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExpertTeam
