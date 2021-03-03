import React from 'react'
import './OurFabric.css'
import Carousel from 'react-bootstrap/Carousel'

function OurFabric() {
    return (
        <React.Fragment>
            <div className='fabric-section'>
                <Carousel className='hero-banner' indicators={false}>
                    <Carousel.Item interval={3000} className='hero-banner-img'>
                        <img
                            className='hero-banner-img'
                            src='./Images/HomeScreenImages/natural.png'
                            alt='herobanner1'
                        />
                        <Carousel.Caption className="caro">
                            OUR FABRIC
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000} className='hero-banner-img'>
                        <img
                            className='hero-banner-img'
                            src='./Images/HomeScreenImages/sustain.png'
                            alt='herobanner2'
                        />
                        <Carousel.Caption className="caro">
                            VISION
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000} className='hero-banner-img'>
                        <img
                            className='hero-banner-img'
                            src='./Images/HomeScreenImages/eco.png'
                            alt='herobanner3'
                        />
                        <Carousel.Caption className="caro eco-carousel-text">
                            TEAM
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='fabric-group'>
                    <div className='fab-col-1'>
                        <div className='fab-title'>Our Fabric</div>
                        <div className='fab-text'>
                            We have a vision to have our presence felt in homes and lives everywhere and to fulfill this goal,
                            we design and curate a wide variety of home décor and home furnishing products which cater to different
                            clients and brands worldwide.
                    </div>
                    </div>
                    <div className='fab-col-2'>
                        <div className='fab-img-col1'>
                            <img src='./Images/Fabric/cotton.png' alt='cotton-img' />
                            <img src='./Images/Fabric/hem.png' alt='hem-img' />
                        </div>
                        <div className='fab-img-col2'>
                            <img src='./Images/Fabric/yarn.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='cotton-section'>
                <div className=' fab-title cotton-title'>Cotton</div>
                <div className=' fab-text cotton-text'>
                    We have a vision to have our presence felt in homes and lives
                    everywhere and to fulfill this goal, we design and curate a wide
                    variety of home décor and home furnishing products which cater to
                    different clients and brands worldwide.
                </div>
            </div>
            <div className='felt-section'>
                <div className=' fab-title felt-title'>Felt</div>
                <div className=' fab-text felt-text'>
                    We have a vision to have our presence felt in homes and lives
                    everywhere and to fulfill this goal, we design and curate a wide
                    variety of home décor and home furnishing products which cater to
                    different clients and brands worldwide.
                </div>
            </div>
            <div className='linen-section'>
                <div className='linen-card'>
                    <div className='fab-title linen-title'>Linen</div>
                    <div className='fab-text linen-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                    </div>
                </div>
            </div>
            <div className='hemp-section'>
                <div className='hemp-row-one'>
                    <div className='fab-title hemp-title'>Hemp</div>'
                    <div className='fab-text hemp-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                    </div>
                </div>
                <div className='hemp-row-two'>
                    <img src='./Images/Fabric/hemp.png' alt='hemp-img' />
                </div>
            </div>
            <div className='fab-last'>
                <div className='recycle-col'>
                    <img src='./Images/Fabric/recycle.png' alt='recycle-img' />
                    <div className='fab-title rec-title'>Recycled</div>
                    <div className='fab-text rec-text'>
                        We have a vision to have our presence felt in homes and lives everywhere and to fulfill this goal,
                        we design and curate a wide variety of home décor and home furnishing products which cater
                        to different clients and brands worldwide.
                    </div>
                </div>
                <div className='organic-col'>
                    <img src='./Images/Fabric/organic.png' alt='organic-img' />
                    <div className='fab-title rec-title'>Organic</div>
                    <div className='fab-text rec-text'>
                        We have a vision to have our presence felt in homes and lives everywhere and to fulfill this goal,
                        we design and curate a wide variety of home décor and home furnishing products which
                        cater to different clients and brands worldwide.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurFabric
