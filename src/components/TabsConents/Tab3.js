import React from 'react'
import box1img from '../../assets/images/Group 9.png'
import box2img from '../../assets/images/Group 8.png'
import box3img from '../../assets/images/Group 7.png'
import ImageBox from './ImageBox'

const Tab3 = () => {
    return (
        <>
            <ImageBox image={box1img} />
            <ImageBox image={box2img} />
            <ImageBox image={box3img} />
        </>
    )
}

export default Tab3
