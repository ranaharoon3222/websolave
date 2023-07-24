import React from 'react'

const ImageBox = ({ image }) => {
    return (
        <div className="image-box">
            <a href={image} data-fancybox="gallery" data-caption="Stylish Characters Design">
                <img src={image} alt="lazy" />
            </a>
            <p>Illustration Design</p>
            <h5>Stylish Characters Design</h5>
        </div>
    )
}

export default ImageBox
