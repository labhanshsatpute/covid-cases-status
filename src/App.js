import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Redirect to="/" />
                    </Switch>
                </main>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;

