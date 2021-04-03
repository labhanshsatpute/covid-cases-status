import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <main>
                <Home/>
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default App;

