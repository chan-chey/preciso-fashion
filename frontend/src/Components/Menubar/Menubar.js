import './Menubar.css';
import React, { Component } from 'react'

export default class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropHomeDiv: false,
            dropAboutDiv: false,
            dropExpertDiv: false,
            dropBrandDiv: false,
            dropCollectionDiv: false
        }
    }
    dropHome = () => {
        const dropper = this.state.dropHomeDiv;
        this.setState({ dropAboutDiv: false })
        this.setState({ dropBrandDiv: false })
        this.setState({ dropExpertDiv: false })
        this.setState({ dropCollectionDiv: false })
        this.setState({ dropHomeDiv: !dropper })
    }
    dropAbout = () => {
        const dropper = this.state.dropAboutDiv;
        this.setState({ dropAboutDiv: !dropper })
        this.setState({ dropBrandDiv: false })
        this.setState({ dropExpertDiv: false })
        this.setState({ dropCollectionDiv: false })
        this.setState({ dropHomeDiv: false })
    }
    dropExpert = () => {
        const dropper = this.state.dropExpertDiv;
        this.setState({ dropExpertDiv: !dropper })
        this.setState({ dropAboutDiv: false })
        this.setState({ dropBrandDiv: false })
        this.setState({ dropCollectionDiv: false })
        this.setState({ dropHomeDiv: false })
    }
    dropBrand = () => {
        const dropper = this.state.dropBrandDiv;
        this.setState({ dropBrandDiv: !dropper })
        this.setState({ dropAboutDiv: false })
        this.setState({ dropExpertDiv: false })
        this.setState({ dropCollectionDiv: false })
        this.setState({ dropHomeDiv: false })
    }
    dropCollection = () => {
        const dropper = this.state.dropCollectionDiv;
        this.setState({ dropCollectionDiv: !dropper })
        this.setState({ dropAboutDiv: false })
        this.setState({ dropBrandDiv: false })
        this.setState({ dropExpertDiv: false })
        this.setState({ dropHomeDiv: false })
    }

    render() {


        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "85px";
            } else {
                document.getElementById("navbar").style.top = "0px";
            }
            prevScrollpos = currentScrollPos;
        }

        return (
            <React.Fragment>
                <div className='menu-wrap'>
                    <div className='web-logo'>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <a href='/'><img src='./Images/HomeScreenImages/logo.svg' alt='preciso-fashion-logo' className='logo-img' /></a>
                        </div>
                    </div>
                    <div className="nav-links" id='navbar'>
                        <a href='/' onMouseEnter={this.dropHome} onMouseLeave={this.dropHome} className="menu-link">HOME</a>
                        {
                            this.state.dropHomeDiv ?
                                <div className="menu-dropdown" onMouseLeave={this.dropHome}>home</div> : null
                        }



                        <a a href='/' onMouseEnter={this.dropAbout} className="menu-link">ABOUT US</a>
                        {
                            this.state.dropAboutDiv ?
                                <div className="menu-dropdown" onMouseLeave={this.dropAbout}>ABOUT</div> : null
                        }



                        <a href='/' onMouseEnter={this.dropExpert} className="menu-link">OUR EXPERTISE</a>
                        {
                            this.state.dropExpertDiv ?
                                <div className="menu-dropdown" onMouseLeave={this.dropExpert}>Expert</div> : null
                        }



                        <a href='/' className="menu-link">OUR BRANDS</a>
                        {
                            this.state.dropBrandDiv ?
                                <div className="menu-dropdown" onMouseLeave={this.dropAbout}>ABOUT</div> : null
                        }



                        <a href='/'>COLLECTIONS</a>
                        {
                            this.state.dropCollectionDiv ?
                                <div className="menu-dropdown" onMouseLeave={this.dropAbout}>ABOUT</div> : null
                        }



                        <a >CONTACT US</a>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}