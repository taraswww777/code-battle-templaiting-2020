import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";

export const App = () => {
    return (
        <div className="App">
            <header className="App__header">
                <Header/>
            </header>
        </div>
    );
}
