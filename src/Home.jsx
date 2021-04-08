import React from 'react';
import './Home.css';

const StatisticsCard = (props) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                <div className="card statistics-card shadow-sm">
                    <div className="card-body pb-2">
                        <p className="mb-1 title">{props.title}</p>
                        <h1>{props.statistics}</h1>
                    </div>
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
            NewDeaths: 0,
            NewRecovered: 0,
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0,
            countryName: [],
            Province: [],
            stateData: [],
        };
    }

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

    fetchCountryName() {
        fetch("https://api.covid19api.com/countries").
        then( (jsonFormat)=> {
            return jsonFormat.json();
        }).
        then( (actualData)=> {
            for (let i = 0; i < actualData.length; i++)
            {
                this.setState({ countryName: this.state.countryName.concat(actualData[i].Country)});
                
            }
        }).
        catch((error)=> {
            throw(error);
        });
    }

    fetchCountryData() {
        let selectedCountry = document.getElementById('select-country').value;
        selectedCountry = selectedCountry.toLowerCase();
        if (selectedCountry == "none") {
            alert("Please Select Country");
        }
        let url = "https://api.covid19api.com/live/country/" +selectedCountry + "/status/confirmed/date/2020-01-21T13:13:30Z";
        this.fetchStates(url);
    }

    fetchStates(url) {
        fetch(url).
        then( (jsonFormat)=> {
            return jsonFormat.json();
        }).
        then( (actualData)=> {
            console.log(actualData);
            this.setState({ Province: []});
            this.setState({ stateData: []});
            for (let i = 0; i < actualData.length; i++) {
                if (!this.state.Province.includes(actualData[i].Province)) {
                    this.setState({ Province: this.state.Province.concat(actualData[i].Province)});
                    this.setState({ stateData: this.state.stateData.concat(actualData[i])});
                }
            } 

        }).
        catch((error)=> {
            throw(error);
        });
    }

    componentDidMount() {
        this.fetchSummary();
        this.fetchCountryName();
    }

    render() {

        const dataArray = this.state.stateData.map(function(data, index) {
            if (data.Province == "") {
                data.Province = data.Country;
            }
            return (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 p-2">
                    <div className="card shadow-sm state-data-card">
                        <div className="card-body">
                            <h5 className="mr-auto font-weight-bold">{data.Province}</h5>
                            <p className="mb-1">Active : {data.Active}</p>
                            <p className="mb-1">Confirmed : {data.Confirmed}</p>
                            <p className="mb-1">Deaths : {data.Deaths}</p>
                            <p className="mb-0">Recovered : {data.Recovered}</p>
                        </div>
                    </div>
                </div> 
            );
        });;

        return (
            <React.Fragment>
                <section id="home-section">
                    <br/>
                    <div className="container">

                        {/* Introduction (Start) */}
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 float-left card-body text-center">
                                <img src="assets/images/img-1.svg" className="img-fluid doctors-img mx-auto" alt="doctors-image"/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-1">
                                <br/>
                                <div className="text-lg-left text-md-center text-sm-center text-center">
                                    <p className="text-blue font-weight-bold mb-0">Stay Home Stay Safe</p>
                                    <hr className="w-50"/>
                                    <h1 className="font-weight-bold display-4 text-blue">COVID - 19 <br/> Cases Statistics</h1>
                                    <hr className="w-100 mx-lg-0 mx-md-auto mx-sm-auto"/>
                                    <p className="text-blue">Get real time world wide corona virus <br/> cases statistics</p>
                                    <a href="#Statistics" className="btn btn-theme-1 mt-2 px-4 shadow-sm">Get Started<img src="assets/icons/arrow-right.svg" alt="arrow-right-icon" className="btn-icon"/></a>
                                    <br/>
                                </div>
                            </div>
                            
                        </div>
                        {/* Introduction (End) */}

                        {/* Global Statistics (Start) */}
                        <div className="container" id="Statistics">
                            <h2 className="text-blue">Global Statistics</h2>
                            <hr className="w-25"/>
                            <div className="row mt-3">

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
                        <div>
                            
                            <form className="card form-group shadow-sm w-100" onSubmit={ (e)=> e.preventDefault()}>
                                <div className="card-body">
                                    <label htmlFor="country" className="text-blue">Search By Country</label>
                                    <div className="d-flex">
                                        <select name="country"className="custom-select w-75 mr-2" id="select-country" required> 
                                            <option value="none" selected disabled>Select Country</option>
                                            {this.state.countryName.map( (item,index)=>
                                                <option key={index} value={item}>{item}</option>
                                            )}
                                        </select>
                                        <button type="submit" onClick={ ()=> this.fetchCountryData()} className="btn btn-theme-1 w-25">Search</button>
                                    </div>
                                </div>
                            </form>
                            <br/>

                            <div className="row">
                                {dataArray}
                            </div>
                            
                        </div>
                        {/* Country Search Box (End) */}
                        
                        
                    </div>
                    <br/>
                </section>
            </React.Fragment>
        );
    }
};

export default Home;