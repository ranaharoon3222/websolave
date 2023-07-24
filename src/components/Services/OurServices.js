import React from 'react'
import ServiceBox from './ServiceBox'
import srviceBoxImg1 from '../../assets/icons/icon9.png'




const OurServices = () => {

    return (
        <>
            <section className="our-services">
                <div className="container">
                    <h6>Our Expertise</h6>
                    <h2>Our <span className='boldtext'>Services</span></h2>
                    <div className="service-flex">
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices
