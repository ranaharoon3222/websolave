import React from 'react'
import ImageBox from './ImageBox'
import box1img from '../../assets/images/Group 3.png'
import box2img from '../../assets/images/Group 2.png'
import box3img from '../../assets/images/Group 4.png'

const Tab9 = () => {
    return (
        <>
            <ImageBox image={box1img} />
            <ImageBox image={box2img} />
            <ImageBox image={box3img} />
        </>
    )
}

export default Tab9
