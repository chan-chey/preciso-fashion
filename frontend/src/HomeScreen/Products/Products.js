import React from 'react';
import Menubar from '../../Components/Menubar/Menubar';
import './Products.css';

const Products = () =>{
    return(
        <>
        <Menubar/>
        <div >
            <div className='section'>
                <div className='hero-banner'><img src="./Images/HomeScreenImages/hero-banner.png" alt='herobanner' className='hero-banner-img'/></div>
                <div className='products-container'>
                    <div className="product-wrap-one">
                        <div className="product-title">products</div>
                        <div className="product-text">
                            We have a vision to have our presence felt in homes and lives everywhere and <br/>
                            to fulfill this goal, we design and curate a wide variety of home décor and <br/>home 
                            furnishing products which cater to different clients and brands<br/> worldwide.<br/> <br/>Products 
                            such as bags, home décor, stationery and promotional gifts form a <br/>major part of our offerings.
                        </div>
                    </div>
                    <div className="product-wrap-two">sftsae</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Products;