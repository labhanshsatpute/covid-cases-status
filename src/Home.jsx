import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Home.css';

const DataCard = () => {
    return (
        <React.Fragment>
            <div className="card w-100 shadow">
                <div className="card-body">
                    
                </div>
            </div>
        </React.Fragment>
    );
}


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            NewConfirmed: 0,
            TotalConfirmed: 0,
            TotalDeaths: 0,
            Date: 0,
            searchQuery: " ",
        };
    }

    fetchSummary() {
        fetch("https://api.covid19api.com/summary").
        then( (jsonFprmat)=> {
            return jsonFprmat.json();
        }).
        then( (actualData)=> {
            console.log(actualData);
            this.setState({ NewConfirmed: (actualData.Global.NewConfirmed)});
            this.setState({ TotalConfirmed: (actualData.Global.TotalConfirmed)});
            this.setState({ TotalDeaths: (actualData.Global.TotalDeaths)});
            this.setState({ Date: (actualData.Global.Date)});
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
                    <div className="container">

                        {/* Introduction (Start) */}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-1">
                                <div className="mt-3 text-lg-left text-md-left text-sm-center text-center">
                                    <h1 className="font-weight-bold display-4 text-blue">COVID - 19 <br/> Cases Statistics</h1>
                                    <p className="text-blue my-3">Get real time world wide corona virus <br/> cases statistics</p>
                                    <div className="mt-3">
                                        <a href="#" className="btn btn-theme-1 px-4 my-2 mr-3">Get Started<img src="assets/icons/arrow-right.svg" alt="arrow-right-icon" className="btn-icon ml-1"/></a>
                                        <a href="#" className="btn btn-theme-2 px-4 my-2 mr-3"><img src="assets/icons/search.svg" alt="search-icon" className="btn-icon mr-1"/> Search</a>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <img src="assets/images/img-1.svg" className="img-fluid" alt="doctors-image"/>
                            </div>
                        </div>
                        {/* Introduction (End) */}

                        {/* Statistics Overview (Start) */}
                        <div className="card overview-card mt-5">
                            <div className="card-body text-center pb-1">
                                <h5 className="text-light">Today's Statistics</h5>
                                <table className="table overview-table mt-3">
                                    <tbody>
                                    <tr>
                                        <td className="py-2 border-top-0 border-bottom-0 border-left-0">
                                            <h5 className="text-light mt-2">New Confirmed</h5>
                                            <h2 className="text-light mt-2">{this.state.NewConfirmed}</h2>
                                        </td>
                                        <td className="py-2 border-top-0 border-bottom-0">
                                            <h5 className="text-light mt-2">Total Confirmed</h5>
                                            <h2 className="text-light mt-2">{this.state.TotalConfirmed}</h2>
                                        </td>
                                        <td className="py-2 border-top-0 border-bottom-0 border-right-0">
                                            <h5 className="text-light mt-2">Total Deaths</h5>
                                            <h2 className="text-light mt-2">{this.state.TotalDeaths}</h2>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br/>
                        <Link to="/view"><a href="#" className="btn btn-theme-1 px-4 mx-auto text-center">View more</a></Link>
                        
                        <br/>
                        {/* Statistics Overview (Start) */}
                        
                    </div>
                    <br/>
                </section>
            </React.Fragment>
        );
    }
};

export default Home;