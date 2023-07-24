import React from 'react'
import BannerImg from './BannerImg'
import bannerImg1 from '../../assets/images/colleagues-working.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {
    return (
        <section id='heroSlider'>
            <OwlCarousel items={1} className="owl-theme" loop nav margin={8} dots={false} >
                <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
                <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
                <BannerImg className='owl-item active' bgImage={bannerImg1} />
                <BannerImg className='owl-item' bgImage={bannerImg1} />
                <BannerImg className='owl-item' bgImage={bannerImg1} />
                <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
                <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
            </OwlCarousel >
        </section>
    )
}

export default Banner
