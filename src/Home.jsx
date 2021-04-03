import React from 'react';
import './Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0
        };
    }

    fetchSummary() {
        fetch("https://api.covid19api.com/summary").
        then( (jsonFprmat)=> {
            return jsonFprmat.json();
        }).
        then( (actualData)=> {
            console.log(actualData);
        }).
        catch((error)=> {
            throw(error);
        });
    }

    componentDidMount() {
        this.fetchSummary();
    }

    render() {
        return (
            <React.Fragment>
                <section id="home-section">
                    <br/>
                    <div className="container card-body">
                        <a href="#" className="card-link text-blue logo">Covid Cases Status</a>
                    </div>
                    <br/>
                    <div className="container page">

                        {/* Introduction (Start) */}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-1">
                                <div className="mt-3 text-lg-left text-md-left text-sm-center text-center">
                                    <h1 className="font-weight-bold display-4 text-blue">COVID - 19 <br/> Cases Statistics</h1>
                                    <h5 className="text-blue my-3">Get real time world wide corona virus <br/> cases status</h5>
                                    <div className="mt-3">
                                        <a href="#" className="btn btn-theme-1 px-4 my-2 mr-3 shadow">Get Started</a>
                                        <a href="#" className="btn btn-theme-2 px-4 my-2 mr-3 shadow"><img src="assets/icons/search.svg" alt="search-icon" className="btn-icon"/> Search</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <img src="assets/images/img-1.png" className="img-fluid" alt="doctors-image"/>
                            </div>
                        </div>
                        {/* Introduction (End) */}

                        {/* Statistics Overview (Start) */}
                        <div className="card shadow overview-card mt-5">
                            <div className="card-body text-center pb-1">
                                <table className="table overview-table">
                                    <tr>
                                        <td className="p-3 border-top-0 border-bottom-0 border-left-0">
                                            <h5 className="text-light">Todays</h5>
                                            <h2 className="text-light mt-2">1,78,159</h2>
                                        </td>
                                        <td className="p-3 border-top-0 border-bottom-0">
                                            <h5 className="text-light">Total</h5>
                                            <h2 className="text-light mt-2">1,78,159</h2>
                                        </td>
                                        <td className="p-3 border-top-0 border-bottom-0 border-right-0">
                                            <h5 className="text-light">Death's</h5>
                                            <h2 className="text-light mt-2">1,78,159</h2>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <br/>
                        {/* Statistics Overview (Start) */}

                        {/* Search Bar (Start) */}
                        <div className="card bg-transparent search-box mt-5 shadow">
                            <div className="card-body p-2">
                                <div className="input-group-prepend input-group-append w-100">
                                    <a href="#" className="btn bg-transparent border-0"><img src="assets/icons/search.svg" alt="search-country"/></a>
                                    <input type="search" className="input-group-text w-100 bg-transparent border-0 text-left text-blue" placeholder="Search Countries"/>
                                    <button type="submit" className="btn btn-theme-1 px-4">Search</button>
                                </div>
                            </div>
                        </div>
                        {/* Search Bar (End) */}
                        
                    </div>
                    <br/>
                </section>
            </React.Fragment>
        );
    }
};

export default Home;