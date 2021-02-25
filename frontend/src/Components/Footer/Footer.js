import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-container'>
                <div className='footer-row'>
                    <div className='footer-col border-right ftr-pl'>
                        <div className='footer-wrap'>
                            <li>GROUP</li>
                            <a href="https://precisoconcepts.com/" target='_blank'><li>PRECISO CONCEPTS</li></a>
                            <li>PRECISO HOME</li>
                        </div>
                    </div>
                    <div className='footer-col border-right'>
                        <div className='footer-wrap'>
                            <a href="https://www.google.com/maps/place/PRECISO+CONCEPTS/@13.0721684,80.2050814,13z/data=!4m19!1m13!4m12!1m4!2m2!1d80.2095104!2d13.1039232!4e1!1m6!1m2!1s0x3a52672ae6050b63:0x356d0d8adc8c2c71!2sprecisoconcepts!2m2!1d80.2559663!2d13.0404497!3m4!1s0x3a52672ae6050b63:0x356d0d8adc8c2c71!8m2!3d13.0404497!4d80.2559663" target="_blank">
                                <li>LOCATION</li>
                            </a>
                            <li>LINKEDIN</li>
                            <Link to={'/ContactUs'}><li>ENQUIRY</li></Link>
                        </div>
                    </div>
                    <div className='footer-col border-right'>
                        <div className='footer-wrap'>
                            <li>FAQ</li>
                        </div>
                    </div>
                    <div className='footer-col'>
                        <div className='footer-wrap'>
                            <li>CAREER</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;