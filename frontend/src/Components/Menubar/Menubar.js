import './Menubar.css'
import React, { Component } from 'react'
import { HashLink as Link } from "react-router-hash-link";

export default class Menubar extends Component {


  constructor(props) {
    super(props)
    this.state = {
      dropAboutDiv: false,
      dropExpertDiv: false,
      dropBrandDiv: false,
      dropCollectionDiv: false,
      dropProductDiv: false,
      dropFabricDiv: false,
    }
  }

  dropAbout = () => {
    const dropper = this.state.dropAboutDiv
    this.setState({ dropAboutDiv: !dropper })
    this.setState({ dropBrandDiv: false })
    this.setState({ dropExpertDiv: false })
    this.setState({ dropProductDiv: false })
    this.setState({ dropCollectionDiv: false })
    this.setState({ dropFabricDiv: false })
  }
  dropExpert = () => {
    const dropper = this.state.dropExpertDiv
    this.setState({ dropExpertDiv: !dropper })
    this.setState({ dropAboutDiv: false })
    this.setState({ dropBrandDiv: false })
    this.setState({ dropProductDiv: false })
    this.setState({ dropCollectionDiv: false })
    this.setState({ dropFabricDiv: false })
  }
  dropBrand = () => {
    const dropper = this.state.dropBrandDiv
    this.setState({ dropBrandDiv: !dropper })
    this.setState({ dropAboutDiv: false })
    this.setState({ dropExpertDiv: false })
    this.setState({ dropProductDiv: false })
    this.setState({ dropCollectionDiv: false })
    this.setState({ dropFabricDiv: false })
  }
  dropCollection = () => {
    const dropper = this.state.dropCollectionDiv
    this.setState({ dropCollectionDiv: !dropper })
    this.setState({ dropAboutDiv: false })
    this.setState({ dropBrandDiv: false })
    this.setState({ dropExpertDiv: false })
    this.setState({ dropProductDiv: false })
    this.setState({ dropFabricDiv: false })
  }
  dropProduct = () => {
    const dropper = this.state.dropProductDiv
    this.setState({ dropProductDiv: !dropper })
    this.setState({ dropAboutDiv: false })
    this.setState({ dropBrandDiv: false })
    this.setState({ dropExpertDiv: false })
    this.setState({ dropCollectionDiv: false })
    this.setState({ dropFabricDiv: false })
  }
  dropFabric = () => {
    const dropper = this.state.dropFabricDiv
    this.setState({ dropFabricDiv: !dropper })
    this.setState({ dropAboutDiv: false })
    this.setState({ dropProductDiv: false })
    this.setState({ dropBrandDiv: false })
    this.setState({ dropExpertDiv: false })
    this.setState({ dropCollectionDiv: false })
  }

  render() {

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -80;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '63px'
      } else {
        document.getElementById('navbar').style.top = '-31vh'
      }
      prevScrollpos = currentScrollPos
    }

    return (
      <React.Fragment>
        <div className='menu-wrap'>
          <div className='web-logo'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <a href='/'>
                <img
                  src='./Images/HomeScreenImages/logo.svg'
                  alt='preciso-fashion-logo'
                  className='logo-img'
                />
              </a>
            </div>
          </div>
          <div className='nav-links' id='navbar'>
            <a href='/' className='menu-link'>
              HOME
            </a>

            <Link to={'/About'} a onMouseEnter={this.dropAbout} className='menu-link'>
              ABOUT US
            </Link>
            {this.state.dropAboutDiv ? (
              <div
                className='menu-dropdown'
                onMouseLeave={this.dropAbout}
              >
                <div className='submenu-col-one'>
                  <Link to={'/About/#identity'} className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Identity
                  </Link>
                  <Link to={'/About/#vision'} className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Vision
                  </Link>
                  <Link to={'/About/#team'} className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Team
                  </Link>
                </div>
                <div className='submenu-col-two'>
                  <div className='submenu-divider smd'>
                    <img
                      src='./Images/HomeScreenImages/abt-menu.png'
                      alt='submenu-img'
                    />
                  </div>

                </div>
              </div>
            ) : null}



            <a onMouseEnter={this.dropExpert} className='menu-link'>
              OUR EXPERTISE
            </a>
            {this.state.dropExpertDiv ? (
              <div
                className='menu-dropdown'
                onMouseLeave={this.dropExpert}
                onClick={this.dropHome}
              >
                <div className='submenu-col-one'>
                  <Link to='/Products' className='submenu-nav'>
                    Products
                  </Link>
                  <Link to='/Quality' className='submenu-nav'>
                    Quality
                  </Link>
                  <Link to='/Productions' className='submenu-nav'>
                    Productions
                  </Link>
                </div>
                <div className='submenu-col-two'>
                  <div className='submenu-divider smd'>
                    <img
                      src='./Images/HomeScreenImages/abt-menu.png'
                      alt='submenu-img'
                    />
                  </div>
                </div>
              </div>
            ) : null}

            <a onMouseEnter={this.dropBrand} className='menu-link'>
              OUR BRANDS
            </a>
            {this.state.dropBrandDiv ? (
              <div
                className='menu-dropdown'
                onMouseLeave={this.dropBrand}
                onClick={this.dropHome}
              >
                <div className='submenu-col-one'>
                  <Link to='/akiiko' className='submenu-nav'>
                    akiiko
                  </Link>
                </div>
                <div className='submenu-col-two'>
                  <div className='submenu-divider smd'>
                    <img
                      src='./Images/HomeScreenImages/abt-menu.png'
                      alt='submenu-img'
                    />
                  </div>
                </div>
              </div>
            ) : null}



            <a onMouseEnter={this.dropCollection}>COLLECTIONS</a>
            {this.state.dropCollectionDiv ? (
              <div
                className='menu-dropdown'
                onMouseLeave={this.dropCollection}
                onClick={this.dropCollection}
              >
                <div className='submenu-col-one'>
                  <Link
                    to='/OurProducts'
                    className='submenu-nav'
                    onClick={this.dropProduct}
                    onMouseEnter={this.dropProduct}
                  >
                    Our Products
                  </Link>
                  <Link
                    to='/OurFabric'
                    className='submenu-nav'
                    onClick={this.dropFabric}
                    onMouseEnter={this.dropFabric}
                  >
                    Our Fabric
                  </Link>
                  <Link to='/PrivateLabel' className='submenu-nav'>
                    Private Label
                  </Link>
                </div>
                <div className='submenu-col-two'>
                  <div className='submenu-divider smd'>
                    <img
                      src='./Images/HomeScreenImages/abt-menu.png'
                      alt='submenu-img'
                    />
                  </div>
                </div>
              </div>
            ) : null}



            {this.state.dropProductDiv ? (
              <div
                className='menu-dropdown product-dropdown'
                onMouseEnter={this.dropProduct}
                onClick={this.dropProduct}
              >
                <div className='submenu-col-div'>
                  <Link
                    to='/OurProducts'
                    className='submenu-nav'
                    onClick={this.dropProduct}
                  >
                    Our Products
                  </Link>
                  <Link
                    to='/OurFabric'
                    className='submenu-nav'
                    onClick={this.dropFabric}
                    onMouseEnter={this.dropFabric}
                    style={{ color: 'rgba(0,0,0,0.5)' }}
                  >
                    Our Fabric
                  </Link>
                  <Link
                    to='/PrivateLabel'
                    className='submenu-nav'
                    style={{ color: 'rgba(0,0,0,0.5)' }}
                  >
                    Private Label
                  </Link>
                </div>
                <div className='submenu-col-div sub-cont'>
                  <Link to='/OurProducts#bag' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Bags
                  </Link>
                  <Link to='/OurProducts/#gift' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Gifts
                  </Link>
                  <Link to='/OurProducts/#table' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Tableware
                  </Link>
                  <Link to='/OurProducts/#storage' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Storage
                  </Link>
                </div>
                <div className='smd'>
                  <div className='submenu-col-div'>
                    <Link to='/OurProducts/#accessory' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                      Accessories
                      </Link>
                    <Link to='/OurProducts/#stationery' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                      Stationery
                      </Link>
                    <Link to='/OurProducts/#promotional' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                      Promotional
                      </Link>
                  </div>
                </div>
                <div className='submenu-col-two '>
                  <div className='submenu-dividers  '>
                    <img
                      src='./Images/HomeScreenImages/submenu.png'
                      alt='submenu-img'
                    />
                  </div>
                </div>
              </div>
            ) : null}



            {this.state.dropFabricDiv ? (
              <div
                className='menu-dropdown product-dropdown'
                onMouseEnter={this.dropFabric}
                onMouseLeave={this.dropFabric}
                onClick={this.dropFabric}
              >
                <div className='submenu-col-div'>
                  <Link
                    to='/OurProducts'
                    className='submenu-nav'
                    style={{ color: 'rgba(0,0,0,0.5)' }}
                    onClick={this.dropProduct}
                    onMouseEnter={this.dropProduct}
                  >
                    Our Products
                  </Link>
                  <Link
                    to='/OurFabric/#fabric'
                    className='submenu-nav'
                    onClick={this.dropFabric}
                    scroll={el => scrollWithOffset(el)}
                  >
                    Our Fabric
                  </Link>
                  <Link
                    to='/PrivateLabel'
                    className='submenu-nav'
                    style={{ color: 'rgba(0,0,0,0.5)' }}
                  >
                    Private Label
                  </Link>
                </div>
                <div className='smd'>
                  <div className='submenu-col-div'>
                    <Link to='/OurFabric#hemp' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                      Hemp
                      </Link>
                    <Link to='/OurFabric#recycle' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                      Recycled
                      </Link>
                    <Link to='/OurFabric#organic' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                      Organic
                      </Link>
                  </div>
                </div>
                <div className='submenu-col-div'>
                  <Link to='/OurFabric#cotton' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Cotton
                  </Link>
                  <Link to='/OurFabric#felt' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Felt
                  </Link>
                  <Link to='/OurFabric#linen' className='submenu-nav' scroll={el => scrollWithOffset(el)}>
                    Linen
                  </Link>
                </div>
                <div className='submenu-col-two'>
                  <div className='submenu-dividers'>
                    <img
                      src='./Images/HomeScreenImages/submenu.png'
                      alt='submenu-img'
                    />
                  </div>
                </div>
              </div>
            ) : null}

            <Link to='/ContactUs'>CONTACT US</Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
