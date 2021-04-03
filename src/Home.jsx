import React from 'react';

class Home extends React.Component {

    fetchData() {
        fetch("https://api.covid19api.com/countries").
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

    render() {
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <button onClick={this.fetchData}>Fetch Data</button>
            </React.Fragment>
        );
    }
};

export default Home;