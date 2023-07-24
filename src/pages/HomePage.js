import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import FiveLogos from '../components/FiveLogos/FiveLogos'
import RecentWork from '../components/Recent Works/RecentWork'
import TabsContainer from '../components/TabsConents/TabsContainer'
import ElevateOnline from '../components/ElevateOnline/ElevateOnline'
import OurServices from '../components/Services/OurServices'
import MobileResponsive from '../components/MobileResponsive/MobileResponsive'
import ExpertTeam from '../components/ExpertTeam/ExpertTeam'
import GotProject from '../components/GotProject/GotProject'
import Testimonials from '../components/Testimonials/Testimonials'
import Digital from '../components/Digital/Digital'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Banner />
                <FiveLogos />
                <RecentWork />
                <TabsContainer />
                <ElevateOnline />
                <OurServices />
                <MobileResponsive />
                <ExpertTeam />
                <GotProject />
                <Testimonials />
                <Digital />
                <Contact />
                <Footer />
            </main>
        </>
    )
}

export default HomePage
