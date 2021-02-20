import { React } from 'react'
import './Commitment.css'

const Commitment = () => {
    return (
        <div className='commitment-section'>
            <div className='container'>
                <div className='sum'>
                    <div className='commitment-title'>Commitment</div>
                    <div className='commitment-text'>
                        We understand the value of the trust placed in us by our customers
                        and consider it to be of the utmost importance to stand by our
                        commitment. Keeping this in mind, we design and create new products,
                        ensure perfect quality and deliver as promised.
                        <br />
                        <br />
                        We make it a point to meet expectations and provide services that
                        establish a solid foundation for a long-standing business
                        relationship with our clients.
                    </div>
                    <div className='image-grid'>
                        <div className='grid-container'>
                            <img
                                src='./Images/HomeScreenImages/grid1.png'
                                alt='Avatar'
                                className='image'
                            />
                            <div className='overlay'>
                                <div className='text'>NEW</div>
                            </div>
                        </div>
                        <div className='grid-container'>
                            <img
                                src='./Images/HomeScreenImages/grid2.png'
                                alt='Avatar'
                                className='image'
                            />
                            <div className='overlay'>
                                <div className='text'>QUALITY</div>
                            </div>
                        </div>
                        <div className='grid-container'>
                            <img
                                src='./Images/HomeScreenImages/grid3.png'
                                alt='Avatar'
                                className='image'
                            />
                            <div className='overlay'>
                                <div className='text'>DELIVERY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Commitment
