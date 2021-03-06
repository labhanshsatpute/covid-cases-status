import React from 'react';
import './Home.css';

// / Global Statistics Card
const StatisticsCard = (props) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                <div className="card statistics-card shadow-sm" data-aos="zoom-in">
                    <div className="card-body pb-2">
                        <p className="mb-1 title">{props.title}</p>
                        <h1 className="font-weight-bold">{props.statistics.toLocaleString()}</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

class Home extends React.Component {

    // Initilize Constructor
    constructor(props) {
        super(props);
        this.state = {
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0,
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0,
            countryList: [],
            stateData: [],
            countryData: [],
        };
    }

    // fetch Global Data
    fetchSummary() {
        fetch("https://api.covid19api.com/summary").
        then( (jsonFormat)=> {
            return jsonFormat.json();
        }).
        then( (actualData)=> {
            this.setState({ NewConfirmed: (actualData.Global.NewConfirmed)});
            this.setState({ NewDeaths: (actualData.Global.NewDeaths)});
            this.setState({ NewRecovered: (actualData.Global.NewRecovered)});
            this.setState({ TotalConfirmed: (actualData.Global.TotalConfirmed)});
            this.setState({ TotalDeaths: (actualData.Global.TotalDeaths)});
            this.setState({ TotalRecovered: (actualData.Global.TotalRecovered)});
        }).
        catch((error)=> {
            throw(error);
        });
    }

    fetchGraph() {
        fetch("https://api.covid19api.com/summary").
        then( (jsonFormat)=> {
            return jsonFormat.json();
        }).
        then( (actualData)=> {
            console.log(actualData);
        }).
        catch((error)=> {
            throw(error);
        });
    }

    // Getting Selected Country From Form
    fetchFormData() {
        let selectedCountry = document.getElementById('select-country').value;
        selectedCountry = selectedCountry.toLowerCase();
        if (selectedCountry == "none") {
            alert("Please Select Country");
        }
        this.fetchCountry("https://api.covid19api.com/dayone/country/" + selectedCountry);
        this.fetchStates("https://api.covid19api.com/live/country/" + selectedCountry + "/status/confirmed/date/2020-01-21T13:13:30Z");
    }

    // Fetch Country List
    fetchcountryList() {
        fetch("https://api.covid19api.com/countries").
        then( (jsonFormat)=> {
            return jsonFormat.json();
        }).
        then( (actualData)=> {
            for (let i = 0; i < actualData.length; i++)
            {
                this.setState({ countryList: this.state.countryList.concat(actualData[i].Country)});
                this.setState({ countryList: this.state.countryList.sort()})
            }
        }).
        catch((error)=> {
            throw(error);
        });
    }

    // Fetch States Data
    fetchStates(url) {
        fetch(url).
        then( (jsonFormat)=> {
            return jsonFormat.json();
        }).
        then( (actualData)=> {
            this.setState({ stateData: []});
            if (actualData.length > 0) {
                let fetchedStatesArray = [];
                for (let i = actualData.length - 1; i > 0; i--) {
                    if (!fetchedStatesArray.includes(actualData[i].Province)) {
                        fetchedStatesArray.push(actualData[i].Province);
                        this.setState({ stateData: this.state.stateData.concat(actualData[i])});
                    }
                }
            }  
        }).
        catch((error)=> {
            throw(error);  
        });
    }

    // Fetch Country Data
    fetchCountry(url) {
        fetch(url).
        then( (jsonFormat)=> {
            return jsonFormat.json();
        }).
        then( (actualData)=> {
            if (actualData.length > 1) {
                console.log(actualData);
                this.setState({ countryData: []});
                this.setState({ countryData: this.state.countryData.concat(actualData[actualData.length - 1])}); 
            }
        }).
        catch((error)=> {
            throw(error);
        });
    }


    componentDidMount() {
        this.fetchSummary();
        this.fetchcountryList();
        this.fetchGraph();
    }

    render() {

        // States Data Card
        const stateData = this.state.stateData.map(function(data, index) {
            if (data.Province == "") {
                data.Province = data.Country;
            }
            return (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 p-3" data-aos="zoom-in">
                    <div className="card shadow-sm state-data-card">
                        <div className="card-body">
                            <h5 className="mr-auto font-weight-bold">{data.Province.toLocaleString()}</h5>
                            <hr className="mt-1 mb-2"/>
                            <p className="mb-1">Active : {data.Active.toLocaleString()}</p>
                            <p className="mb-1">Confirmed : {data.Confirmed.toLocaleString()}</p>
                            <p className="mb-1">Deaths : {data.Deaths.toLocaleString()}</p>
                            <p className="mb-0">Recovered : {data.Recovered.toLocaleString()}</p>
                        </div>
                    </div>
                </div> 
            );
        });

        // Country Data (Start)
        const countryData = this.state.countryData.map(function(data, index) {
            let date =  data.Date;
            date = date.toString();
            date = date.slice(0,-10);
            return (
                <div key={index} className="card shadow-sm country-data-card bg-white">
                    <div className="card-body pb-2">

                        <p className="text-blue float-right">Updated on {date}</p>
                        <img src={"https://flagcdn.com/36x27/" + data.CountryCode.toLowerCase() + ".png"} className="d-inline-block mr-2 mt-n3 img-thumbnail" alt={data.Country}/>
                        <h2 className="text-blue d-inline-block font-weight-bolder">{data.Country}</h2>

                        <hr/>
                        <div className="row mt-2">
                            <div className="col-lg-3 col-md-3 col-sm-6 p-3" data-aos="fade-up">
                                <div className="card country-data-card-details border-warning shadow-sm">
                                    <div className="card-header text-center bg-warning">
                                        <p className="text-white mb-0">Confirmed</p> 
                                    </div>
                                    <div className="card-body text-center pb-2">
                                        <h4 className="text-blue font-weight-bold">{data.Confirmed.toLocaleString()}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 p-3">
                                <div className="card country-data-card-details border-danger shadow-sm" data-aos="fade-up">
                                    <div className="card-header text-center bg-danger">
                                        <p className="text-white mb-0">Deaths</p> 
                                    </div>
                                    <div className="card-body text-center pb-2">
                                        <h4 className="text-blue font-weight-bold">{data.Deaths.toLocaleString()}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 p-3">
                                <div className="card country-data-card-details border-primary shadow-sm" data-aos="fade-up">
                                    <div className="card-header text-center bg-primary">
                                        <p className="text-white mb-0">Active</p> 
                                    </div>
                                    <div className="card-body text-center pb-2">
                                        <h4 className="text-blue font-weight-bold">{data.Active.toLocaleString()}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 p-3">
                                <div className="card country-data-card-details border-success shadow-sm" data-aos="fade-up">
                                    <div className="card-header text-center bg-success">
                                        <p className="text-white mb-0">Recovered</p> 
                                    </div>
                                    <div className="card-body text-center pb-2">
                                        <h4 className="text-blue font-weight-bold">{data.Recovered.toLocaleString()}</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr/>

                        <div className="row">
                            {stateData}
                        </div>
                        
                    </div>
                </div>
            );
        });
        // Country Data (End)

        return (
            <React.Fragment>
                <section id="home-section">
                    <br/>
                    <div className="container">

                        {/* Introduction (Start) */}
                        <div className="row">
                            

                            <div className="col-lg-6 col-md-12 col-sm-1">
                                <br/>
                                <div className="text-lg-left text-md-center text-sm-center text-center">
                                    <p className="text-blue font-weight-bold mb-0" data-aos="fade-right" data-aos-delay="100">Stay Home Stay Safe</p>
                                    <hr className="w-50"/>
                                    <h1 className="font-weight-bold display-4 text-blue" data-aos="fade-right" data-aos-delay="250">COVID - 19 <br/> Cases Statistics</h1>
                                    <hr className="w-100 mx-lg-0 mx-md-auto mx-sm-auto"/>
                                    <p className="text-blue" data-aos="fade-right" data-aos-delay="350">Get real time world wide corona virus <br/> cases statistics</p>
                                    <a href="#Statistics" className="btn btn-theme-1 mt-2 px-4 shadow-sm" data-aos="fade-right" data-aos-delay="400">Get Started<img src="assets/icons/arrow-right.svg" alt="arrow-right-icon" className="btn-icon"/></a>
                                    <br/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 float-left card-body text-center">
                                <br/>
                                <img src="assets/images/img-1.svg" className="img-fluid doctors-img mx-auto" alt="doctors-image" data-aos="fade-left" data-aos-delay="500"/>
                            </div>
                        </div>
                        {/* Introduction (End) */}

                        {/* Global Statistics (Start) */}
                        <div className="container" data-aos="fade-up">
                            <h2 className="text-blue font-weight-bold">Global Statistics</h2>
                            <hr className="w-25"/>
                            <div className="row">
                                <StatisticsCard title="New Confirmed" statistics={this.state.NewConfirmed}/>
                                <StatisticsCard title="New Deaths" statistics={this.state.NewDeaths}/>
                                <StatisticsCard title="New Recovered" statistics={this.state.NewRecovered}/>
                                <StatisticsCard title="Total Confirmed" statistics={this.state.TotalConfirmed}/>
                                <StatisticsCard title="Total Deaths" statistics={this.state.TotalDeaths}/>
                                <StatisticsCard title="Total Recovered" statistics={this.state.TotalRecovered}/>
                            </div>
                        </div>
                        {/* Global Statistics (Start) */}


                        {/* Country Search Box (Start) */}
                        <div className="card shadow-sm select-country" data-aos="fade-up">
                            <div className="card-body">
                                <div className="d-flex">
                                    <select name="country"className="custom-select w-75 custom-select-lg" id="select-country" required> 
                                        <option value="none" selected disabled>Select Country</option>
                                        {this.state.countryList.map( (item,index)=>
                                            <option key={index} value={item}>{item}</option>
                                        )}
                                    </select>
                                    <button onClick={ ()=> this.fetchFormData()} className="btn btn-theme-1 w-25 shadow-sm">Search</button>
                                </div>
                            </div>
                        </div>
                        {/* Country Search Box (End) */}

                        {/* Country Data Card (Start) */}
                        <div className="mt-5" data-aos="fade-up">
                            {countryData}
                        </div>
                        {/* Country Data Card (End) */}
                        
                    </div>
                    <br/>
                </section>
            </React.Fragment>
        );
    }
};

export default Home;