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
                    <a href="#" className="navbar-brand text-blue">Corona Cases</a>
                    <a href="https://github.com/labhanshsatpute/covid-cases-status" target="_blank" className="nav-link ml-auto"data-toggle="tooltip" data-placement="top" title="Tooltip on top"><img src="assets/icons/github.svg" alt="contribute-in-githu"/></a>
                </div>
            </nav>  
        </React.Fragment>
    );
}

export default Navbar;