import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="card rounded-0 bg-light border-right-0 border-left-0">
                <div className="card-body footer-1 container">
                    <a href="index.html" className="card-link footer-link"><img src="assets/images/virus - small.svg" alt="covid-19" className="footer-icon"/> COVID - 19</a>
                    <a href="https://covid-19-apis.postman.com/"target="_blank"  className="card-link footer-link"><img src="assets/icons/globe.svg" alt="globe-icon" className="footer-icon"/> API</a>
                    <a href="https://github.com/labhanshsatpute/covid-cases-status"target="_blank"  className="card-link footer-link"><img src="assets/icons/github-dark.svg" alt="github-dark-icon" className="footer-icon"/> GitHub</a>
                </div>
                <div className="card-body footer-2">
                    <div className="container">
                        <a href="https://www.linkedin.com/in/labhanshsatpute/" className="card-link footer-link text-white d-lg-inline-block d-md-inline-block d-sm-block">Developed by Labhansh Satpute</a>
                        <div className="mt-3 d-lg-inline-block d-md-inline-block d-sm-block float-lg-right float-md-right float-sm-left mt-lg-0 my-md-2 my-sm-3">
                            <a href="https://www.facebook.com/labhansh.satpute.5" className="card-link d-inline-block"><img src="assets/icons/facebook.svg" alt="labhansh-satpute-facebook"/></a>
                            <a href="https://twitter.com/LabhanshSatpute" className="card-link d-inline-block"><img src="assets/icons/twitter.svg" alt="labhansh-satpute-twitter"/></a>
                            <a href="https://www.linkedin.com/in/labhanshsatpute/" className="card-link d-inline-block"><img src="assets/icons/linkedin.svg" alt="labhansh-satpute-linkedin"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;