import React, { Component } from 'react'
import './MobileMenu.css'

export default class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNav: false
        };
    }
    hamburger = () => {
        this.setState({ mobileNav: true })
    }
    hamburgerC = () => {
        this.setState({ mobileNav: false })
    }
    render() {
        return (
            <React.Fragment>
                <img src='./Images/HomeScreenImages/close.svg' style={{ width: "20px", height: "20px" }} className='hamp' onClick={this.hamburger} />
                {this.state.mobileNav ? <div style={{ height: "100vh", width: "100%", background: "white", position: "absolute", top: "0", left: "0", zIndex: "10" }} onClick={this.hamburgerC}>hi</div> : null}
            </React.Fragment>
        )
    }
}
