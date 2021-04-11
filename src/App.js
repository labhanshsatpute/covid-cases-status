import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Preloader from './components/Preloader';

const App = () => {

    const [display,setDisplay] = useState("block");

    const HidePreloader = () => {
        setDisplay("none");
    }

    return (
        <React.Fragment>
            <Preloader display={display}/>
            <BrowserRouter>
                <Navbar/>
                <main onLoadCapture={HidePreloader}>
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

