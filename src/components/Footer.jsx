import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="card rounded-0 bg-light border-right-0 border-left-0">
                <div className="card-body footer-1 container">
                    <a href="index.html" className="card-link footer-link">Corona Virus Cases</a>
                    <a href="https://covid-19-apis.postman.com/"target="_blank"  className="card-link footer-link"><img src="assets/icons/globe.svg" alt="globe-icon" className="footer-icon"/> API</a>
                    <a href="https://github.com/labhanshsatpute/covid-cases-status"target="_blank"  className="card-link footer-link"><img src="assets/icons/github-dark.svg" alt="github-dark-icon" className="footer-icon"/> GitHub</a>
                </div>
                <div className="card-body footer-2">
                    <div className="container">
                        <a href="#" className="card-link footer-link text-white d-lg-inline-block d-md-inline-block d-sm-block">Developed by Labhansh Satpute</a>
                        <div className="d-lg-inline-block d-md-inline-block d-sm-block float-lg-right float-md-right float-sm-left">
                            <a href="#" className="card-link d-inline-block"><img src="assets/icons/facebook.svg" alt="labhansh-satpute-facebook"/></a>
                            <a href="#" className="card-link d-inline-block"><img src="assets/icons/twitter.svg" alt="labhansh-satpute-twitter"/></a>
                            <a href="#" className="card-link d-inline-block"><img src="assets/icons/linkedin.svg" alt="labhansh-satpute-linkedin"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;