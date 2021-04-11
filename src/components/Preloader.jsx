import React from 'react';
import '../App.css';

const Preloader = (props) => {
    return (
        <React.Fragment>
            <section id="preloader-section" style={{display: (props.display)}}>
                <img src="assets/images/virus.svg" alt="corona-virus" className="img-fluid" id="preloader-img"/>
            </section>
        </React.Fragment>
    );
}

export default Preloader;