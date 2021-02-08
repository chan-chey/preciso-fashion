import { React } from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-container'>
                <div className='footer-row'>
                    <div className='footer-col border-right'>
                        <div className='footer-wrap'>
                            <li>GROUP</li>
                            <li>PRECISO CONCEPTS</li>
                            <li>PRECISO HOME</li>
                        </div>
                    </div>
                    <div className='footer-col border-right'>
                        <div className='footer-wrap'>
                            <li>LOCATION</li>
                            <li>LINKEDIN</li>
                            <li>ENQUIRY</li>
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