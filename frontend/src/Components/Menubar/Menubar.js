import React from 'react';
import './Menubar.css';

const Menubar = () =>{
    var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "85px";
            } else {
                document.getElementById("navbar").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
            }

    return(
        <>
            <div>
                <div className='web-logo'>
                    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                        <img src='./Images/HomeScreenImages/logo.svg' alt='preciso-fashion-logo' className='logo-img'/>
                    </div>
                </div>
                <div className="nav-links" id='navbar'>
                    <a href='/'>HOME</a>
                    <a href='/'>ABOUT US</a>
                    <a href='/'>OUR EXPERTISE</a>
                    <a href='/'>OUR BRANDS</a>
                    <a href='/'>COLLECTIONS</a>
                </div>
            </div>
            <div style={{height:"100vh"}}></div>
            <div style={{height:"100vh"}}></div>
            <div style={{height:"100vh"}}></div>
        </>
    )
}
export default Menubar;