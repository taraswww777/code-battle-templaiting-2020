import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {FirstScreen} from "./components/first-screen/FirstScreen";
import {SecondScreen} from "./components/second-screen/SecondScreen";

export const App = () => {
    return (
        <div className="App">
            <header className="App__header">
                <Header/>
            </header>
            <div>
                <FirstScreen/>
            </div>
            <div>
                <SecondScreen/>
            </div>
        </div>
    );
}
