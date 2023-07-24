import React from 'react'
import box1img from '../../assets/images/Group 6.png'
import box2img from '../../assets/images/Group 5.png'
import box3img from '../../assets/images/Group 4.png'
import ImageBox from './ImageBox'

const Tab4 = () => {
    return (
        <>
            <ImageBox image={box1img} />
            <ImageBox image={box2img} />
            <ImageBox image={box3img} />
        </>
    )
}

export default Tab4
