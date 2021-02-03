import React from 'react';
import './Products.css';

const Products = () =>{
    return(
        <>
        <div >
            <div className='section'>
                <div className='hero-banner'><img src="./Images/HomeScreenImages/hero-banner.png" alt='herobanner' className='hero-banner-img'/></div>
                <div className='products-container'>
                    <div className="product-wrap-one">
                        <span className='fine-line top-line'/>
                            <div className="product-title">Products</div>
                            <div className="product-text">
                                We have a vision to have our presence felt in homes and lives everywhere and 
                                to fulfill this goal, we design and curate a wide variety of home décor and home 
                                furnishing products which cater to different clients and brands worldwide. <br/><br/>Products 
                                such as bags, home décor, stationery and promotional gifts form a major part of our offerings.
                            </div>
                        <span className='fine-line bottom-line'/>
                    </div>
                    <div className="product-wrap-two">
                        <div className='product-img-col-one'>
                            <div className='product-row-one'><img src='./Images/HomeScreenImages/product1.png' alt='product-img1' className='product-image1'/></div>
                            <div className='product-row-two'><img src='./Images/HomeScreenImages/product2.png' alt='product-img2' className='product-image2'/> <img src='./Images/HomeScreenImages/product3.png' alt='product-img3' className='product-image3'/></div>
                        </div>
                        <div className='product-img-col-two'><img src='./Images/HomeScreenImages/product4.png' alt='product-image4'className='product-image4'/></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Products;