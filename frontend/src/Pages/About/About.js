import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './About.css';
function About() {

    const myFunction = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
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

                <div className='about-container' id='identity'>
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
                        <div className='about-text hide-pg'>
                            Our identity is embedded in our ideas and philosophies and within all of our products. We like to identify
                            ourselves as innovators in the contemporary home décor market. We pride ourselves on our ability to provide
                            our clients with products and solutions that would not be found easily elsewhere. We like to distinguish ourselves and strive to do so
                            by curating and creating forward looking and fresh designs to fulfill the needs of a new society shaped by renewed
                            values and updated demands. With a sincere interest in developing communities, prioritising empathy is key as we ideate,
                            conceptualise and prototype the designs of the future.
                            Founded by Brajesh Gutgutia, a product designer and exporter of home decor items with 20+ years of experience,
                            Preciso Fashion is rooted in his ideologies, expertise and vision. His distinctive understanding of the nuanced
                            aesthetics of design and product that are appreciated globally, provide Preciso Fashion with a solid foundation.
                        </div>
                    </div>
                </div>
            </div>
            <div className='vision-section' id='vision'>
                <div className='vision-col-one'>
                    <div className='about-title'>Vision</div>
                    <div className='about-text'>
                        Powered by a fierce passion and unmatched vision, Preciso Fashion aims to make its presence<span id="dots">...</span><span id="more">
                            felt in homes and lives around the world by being a conduit to products of the highest quality and efficacy.
                            To bring this vision to life, it is imperative that we prioritise and practise a selection of indispensable values.
                            These values include precision, hardwork and a ‘can-do’ mindset where no goal is impossible to reach.
                            We envision highlighting and promoting various cultures across India wherein their craft is recognised in
                            global culture. Lastly, we want to become synonymous with functional and awe-inspiring products while solidly
                        setting our reputation as one of the foremost single point solutions for any design, production, packaging and operational assistance services.</span>
                        <button onclick={myFunction} id="myBtn">Read more</button>
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
            <div className='team-section' id='team'>
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
                        Preciso Fashion is equipped with a creative and resilient team.
                        Taking on multiple roles in the early days of the company,
                        our employees are capable and determined. Our most powerful asset is our technically sound creative department.
                        We have benefited from the synergic impact of a youthful and digitally adept team who work in tandem with executives
                        who have years of experience which enables them to understand the market and its needs.
                        The team at Preciso Fashion makes it a point to understand and instil the values of global culture.
                        This is because we find it imperative to think in a manner that is reflective of our client’s ideologies.
                        One vastly important quality that we prioritize above all else is the need to better ourselves along every
                        step of the way- we aspire to perfection and are inspired by determination.

                        Preciso Fashion houses a fantastic group of well-rounded individuals who are experts in their respective
                        fields and provide the organisation with the requisite creative and operational manpower to outdo our peers and more than
                        fulfil our obligations. Emphasizing on clear lines of communication and synergy inciting processes, we promote teamwork as our key strength.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About