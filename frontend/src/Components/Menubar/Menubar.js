import './Menubar.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                  <Link to={'/About'} className='submenu-nav'>
                    Identity
                  </Link>
                  <Link to={'/About'} className='submenu-nav'>
                    Vision
                  </Link>
                  <Link to={'/About'} className='submenu-nav'>
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
                  <Link to='/Bags' className='submenu-nav'>
                    Bags
                  </Link>
                  <Link to='/Gifts' className='submenu-nav'>
                    Gifts
                  </Link>
                  <Link to='/Tableware' className='submenu-nav'>
                    Tableware
                  </Link>
                  <Link to='/Storage' className='submenu-nav'>
                    Storage
                  </Link>
                </div>
                <div className='smd'>
                  <div className='submenu-col-div'>
                    <Link to='/Accessories' className='submenu-nav'>
                      Accessories
                      </Link>
                    <Link to='/Stationary' className='submenu-nav'>
                      Stationary
                      </Link>
                    <Link to='/Promotional' className='submenu-nav'>
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
                className='menu-dropdown product-dropdown '
                onMouseEnter={this.dropFabric}
                onMouseLeave={this.dropFabric}
                onClick={this.dropProduct}
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
                    to='/OurFabric'
                    className='submenu-nav'
                    onClick={this.dropFabric}
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
                    <Link to='/Hemp' className='submenu-nav'>
                      Hemp
                      </Link>
                    <Link to='/Recycled' className='submenu-nav'>
                      Recycled
                      </Link>
                    <Link to='/Organic' className='submenu-nav'>
                      Organic
                      </Link>
                  </div>
                </div>
                <div className='submenu-col-div'>
                  <Link to='/Cotton' className='submenu-nav'>
                    Cotton
                  </Link>
                  <Link to='/Felt' className='submenu-nav'>
                    Felt
                  </Link>
                  <Link to='/Linen' className='submenu-nav'>
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
