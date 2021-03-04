import React from 'react'
import './OurProducts.css'
import Carousel from 'react-bootstrap/Carousel'

export default function OurProducts() {
    return (
        <React.Fragment>
            <Carousel className='hero-banner' indicators={false}>
                <Carousel.Item interval={3000} className='hero-banner-img'>
                    <img
                        className='hero-banner-img'
                        src='./Images/HomeScreenImages/natural.png'
                        alt='herobanner1'
                    />
                    <Carousel.Caption className="caro">
                        BAGS
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className='hero-banner-img'>
                    <img
                        className='hero-banner-img'
                        src='./Images/HomeScreenImages/sustain.png'
                        alt='herobanner2'
                    />
                    <Carousel.Caption className="caro">
                        GIFTS
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className='hero-banner-img'>
                    <img
                        className='hero-banner-img'
                        src='./Images/HomeScreenImages/eco.png'
                        alt='herobanner3'
                    />
                    <Carousel.Caption className="caro eco-carousel-text">
                        TABLEWARE
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='bag-section'>
                <div className='bag-col-1'>
                    <div className='OurProducts-title'>Bags</div>
                    <div className='OurProducts-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                    </div>
                </div>
                <div className='bag-col-2'>
                    <div className='prd-img-col1'>
                        <img src='./Images/Products/1.png' alt='prd-img' />
                        <img src='./Images/Products/2.png' alt='prd-img' />
                    </div>
                    <div className='prd-img-col2'>
                        <img src='./Images/Products/3.png' alt='prd-img' />
                    </div>
                </div>
            </div>
            <div className='gift-section'>
                <div className='OurProducts-title gift-title'>Gifts</div>
                <div className='OurProducts-text gift-text'>
                    We have a vision to have our presence felt in homes and lives everywhere and to fulfill this goal,
                    we design and curate a wide variety of home décor and home furnishing products which cater to different clients and brands worldwide.
                </div>
            </div>
            <div className='tab-section'>
                <div className='table-col1'><img src='./Images/Products/4.png' alt='prd-img' /></div>
                <div className='table-col2'>
                    <div className='OurProducts-title tab-title'>Tableware</div>
                    <div className='OurProducts-text'>
                        We have a vision to have our presence felt in homes and lives everywhere and to fulfill this goal,
                        we design and curate a wide variety of home décor and home furnishing products which cater to different clients and brands worldwide.
                    </div>
                </div>
            </div>
            <div className='storage-section'>
                <div className='str-col1'>
                    <div className='OurProducts-title'>Storage</div>
                    <div className='OurProducts-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to
                        different clients and brands worldwide.
                    </div>
                </div>
                <div className='str-col2'>
                    <img src='./Images/Products/5.png' alt='prd-img' />
                </div>
            </div>
            <div className='acc-section'>
                <div className='acc-col1'>
                    <div className='acc-row1'>
                        <img src='./Images/Products/6.png' alt='acc-img' />
                        <img src='./Images/Products/7.png' alt='acc-img' />
                    </div>
                    <div className='acc-row2'>
                        <img src='./Images/Products/8.png' alt='acc-img' />
                    </div>
                </div>
                <div className='acc-col2'>
                    <div className='OurProducts-title'>Accessories</div>
                    <div className='OurProducts-text'>
                        We have a vision to have our presence felt in homes and lives
                        everywhere and to fulfill this goal, we design and curate a wide
                        variety of home décor and home furnishing products which cater to different
                        clients and brands worldwide.
                    </div>
                </div>
            </div>
            <div className='storage-section'>
                <div className='str-col1'>
                    <div className='OurProducts-title'>Stationary</div>
                    <div className='OurProducts-text'>
                        We have a vision to have our presence felt in homes and lives everywhere and to fulfill this goal,
                        we design and curate a wide variety of home décor and home furnishing products which cater to different clients and brands worldwide.
                    </div>
                </div>
                <div className='str-col2'>
                    <img src='./Images/Products/5.png' alt='prd-img' />
                </div>
            </div>
            <div className='tab-section'>
                <div className='table-col1'><img src='./Images/Products/10.png' alt='prd-img' /></div>
                <div className='table-col2'>
                    <div className='OurProducts-title '>Promotional</div>
                    <div className='OurProducts-text'>
                        We have a vision to have our presence felt in homes and lives everywhere and to fulfill this goal,
                        we design and curate a wide variety of home décor and home furnishing products which cater to different clients and brands worldwide.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
