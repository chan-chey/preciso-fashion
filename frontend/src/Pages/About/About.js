import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './About.css';
function About() {
    return (
        <React.Fragment>
            <div className='about-section'>
                <Carousel className='hero-banner' indicators={false}>
                    <Carousel.Item interval={3000} className='hero-banner-img'>
                        <img
                            className='hero-banner-img'
                            src='./Images/HomeScreenImages/natural.png'
                            alt='herobanner1'
                        />
                        <Carousel.Caption className="caro">
                            IDENTITY
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

                <div className='about-container'>
                    <div className='about-col-one'>
                        <div className='abt-img-col1'>
                            <img src='./Images/About/abt1.png' alt='abt-img' />
                        </div>
                        <div className='abt-img-col2'>
                            <img src='./Images/About/abt.png' alt='abt-img' className='abt-col1-img2' />
                            <img src='./Images/About/abt.png' alt='abt-img' />
                        </div>
                    </div>
                    <div className='about-col-two'>
                        <div className='about-title'>Identity</div>
                        <div className='about-text'>
                            We have a vision to have our presence felt in homes and lives
                            everywhere and to fulfill this goal, we design and curate a wide
                            variety of home décor and home furnishing products which cater to
                            different clients and brands worldwide.
                        </div>
                    </div>
                </div>
            </div>
            <div className='vision-section'>
                <div className='vision-col-one'>
                    <div className='about-title'>Vision</div>
                    <div className='about-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                        </div>
                </div>
                <div className='vision-col-two'>
                    <div className='vision-img-col1'>
                        <img src='./Images/About/abt.png' alt='abt-img' className='vision-col1-img1' />
                        <img src='./Images/About/abt.png' alt='abt-img' />
                    </div>
                    <div className='vision-img-col2'>
                        <img src='./Images/About/abt1.png' alt='abt-img' />
                    </div>
                </div>
            </div>
            <div className='team-section'>
                <div className='team-col-one'>
                    <div className='team-row-one'>
                        <img src='./Images/About/abt1.png' alt='abt-img' />
                    </div>
                    <div className='team-row-two'>
                        <img src='./Images/About/abt.png' alt='abt-img' className='team-row2-img1' />
                        <img src='./Images/About/abt.png' alt='abt-img' />
                    </div>
                </div>
                <div className='team-col-two'>
                    <div className='about-title'>Team</div>
                    <div className='about-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        ariety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About