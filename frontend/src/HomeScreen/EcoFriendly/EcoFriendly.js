import React from 'react';
import './EcoFriendly.css';

const EcoFriendly = () =>{
    return(
        <div className='section'>
            <div className='eco-container'>
                <div className='eco-wrap'>
                    <div className='eco-col-one'>
                        <img src='./Images/HomeScreenImages/eco1.png' alt='eco-bag' className='eco-img-one'/>
                        <img src='./Images/HomeScreenImages/eco2.png' alt='eco-bag' className='eco-img-two'/>
                    </div>
                    <div className='eco-col-two'>
                        <span className='border top-border'/>
                            <div className='eco-title'>Eco Friendly</div>
                            <div className='eco-text'>
                                The world is beautiful as we know it and to preserve this beauty, 
                                it’s important that we recognize the need to contribute towards a more 
                                sustainable future.
                                <br/> <br/> 
                                It is this inspiration which encourages us to use natural 
                                fabrics and accessories. We aspire to create eco-friendly and utilitarian products, 
                                wherever we can. 
                                <br/><br/> 
                                Hence the inception of “Akiiko”, a culmination of our efforts to 
                                create a simpler and cleaner tomorrow while providing our customers with home décor 
                                products that can add utility and aesthetic value to their lives.
                            </div>
                            <a href='/'><span className='eco-link'>Learn more &#x22D9;</span></a>
                        <span className='border bottom-border'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EcoFriendly;