import React from 'react'
import box1img from '../../assets/images/tabbing.png'
import box2img from '../../assets/images/all2.png'
import box3img from '../../assets/images/Group 10.png'
import ImageBox from './ImageBox'

const Tab2 = () => {
    return (
        <>
            <ImageBox image={box1img} />
            <ImageBox image={box2img} />
            <ImageBox image={box3img} />
        </>
    )
}

export default Tab2
