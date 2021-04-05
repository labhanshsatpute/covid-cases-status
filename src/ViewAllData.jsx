import React from 'react';
import './ViewAllData.css';

const StatisticsCard = (props) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
                <div className="card statistics-card">
                    <div className="card-body pb-2">
                        <p className="mb-1 title">{props.title}</p>
                        <h1>{props.statistics}</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

class ViewAllData extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0,
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0
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

    componentDidMount() {
        this.fetchSummary();
    }

    render() {
        return (
            <React.Fragment>
                <section id="view-section">
                    <br/>
                    <div className="container">

                        <h2 className="text-blue">All Statistics</h2>
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
                    <br/>
                </section>
            </React.Fragment>
        );
    }
};

export default ViewAllData;