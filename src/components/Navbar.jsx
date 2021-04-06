import React, { useState } from 'react';

const Navbar = () => {

    const [ block, none ] = useState("block");

    window.onscroll = function (e) {
        let scroll = window.scrollY;
        if (scroll > 50) {
            none("none");
        }
        else {
            none("block");
        }
        
    };
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand fixed-top" style={{display: block}} id="navbar">
                <div className="container card-body">
                    <a href="index.html" className="navbar-brand text-blue font-weight-bold"><img src="assets/images/virus.svg" alt="covid-19" className="mr-2"/>COVID-19</a>
                    <a href="https://github.com/labhanshsatpute/covid-cases-status" target="_blank" className="nav-link ml-auto"data-toggle="tooltip" data-placement="top" title="Tooltip on top"><img src="assets/icons/github.svg" alt="contribute-in-githu"/></a>
                </div>
            </nav>  
        </React.Fragment>
    );
}

export default Navbar;