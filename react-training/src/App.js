import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HeaderMenu from './components/HeaderMenu';
import Shibes from './components/Shibes';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderMenu/>
                <img src={logo} className="App-logo" alt="logo"/>
                <Shibes />
            </header>
            <Login/>
        </div>
    );
}

export default App;
