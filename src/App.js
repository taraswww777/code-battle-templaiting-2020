import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {FirstScreen} from "./components/screens/first-screen/FirstScreen";
import {SecondScreen} from "./components/screens/second-screen/SecondScreen";
import {FeaturesScreen} from "./components/screens/features-screen/FeaturesScreen";

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
            <div>
                <FeaturesScreen/>
            </div>
        </div>
    );
}
