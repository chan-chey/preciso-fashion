import React from 'react'
import './OurFabric.css'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

function OurFabric() {
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <React.Fragment>
            <div className='fabric-section' id='#'>
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
                <div className='fabric-group' id='fabric'>
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

            <div className='cotton-section' id='cotton'>
                <div className=' fab-title cotton-title'>Cotton</div>
                <div className=' fab-text cotton-text'>
                    We have a vision to have our presence felt in homes and lives
                    everywhere and to fulfill this goal, we design and curate a wide
                    variety of home décor and home furnishing products which cater to
                    different clients and brands worldwide.
                </div>
            </div>

            <div className='felt-section' id='felt'>
                <div className='fab-col1'>
                    <img src='./Images/Fabric/felt.png' alt='felt-img' />
                </div>
                <div className='fab-col2'>
                    <div className='fab-title felt-title'>Felt</div>
                    <div className='fab-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing
                        products which cater to different clients and brands worldwide.
                    </div>
                </div>
            </div>

            <div className='linen-section' id='linen'>
                <div className='fab-col1'>
                    <div className='fab-title'>Linen</div>
                    <div className='fab-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                    </div>
                </div>
                <div className='fab-col2'>
                    <img src='./Images/Fabric/linen.png' alt='felt-img' />
                </div>
            </div>

            <div className='hemp-section' id='hemp'>
                <div className='fab-col1'>
                    <div className='hemp-row1'>
                        <img src='./Images/Fabric/1.png' alt='img' />
                        <img src='./Images/Fabric/2.png' alt='img' />
                    </div>
                    <div className='hemp-row2'>
                        <img src='./Images/Fabric/hemp.png' alt='img' />
                    </div>
                </div>
                <div className='fab-col2'>
                    <div className='fab-title '>Hemp</div>
                    <div className='fab-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                    </div>
                </div>
            </div>

            <div className='linen-section' id='organic'>
                <div className='fab-col1'>
                    <div className='fab-title'>Organic</div>
                    <div className='fab-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        iety of home décor and home furnishing products which cater
                        to different clients and brands worldwide.
                    </div>
                </div>
                <div className='fab-col2 org-col'>
                    <img src='./Images/Fabric/organic.png' alt='felt-img' className='org-img' />
                </div>
            </div>

            <div className='felt-section bc' id='recycle'>
                <div className='fab-col1 rec-col'>
                    <img src='./Images/Fabric/recycle.png' alt='felt-img' className='rec-img' />
                </div>
                <div className='fab-col2'>
                    <div className='fab-title felt-title'>Felt</div>
                    <div className='fab-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing
                        products which cater to different clients and brands worldwide.
                    </div>
                    <img src='./Images/Fabric/bc-top.svg' className='back-to-top' alt='bc-top-img' onClick={scrollToTop} />
                </div>
            </div>
        </React.Fragment >
    )
}

export default OurFabric
