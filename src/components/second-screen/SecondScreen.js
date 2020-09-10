import React from 'react';
import './SecondScreen.scss';
import imgBoards from "./Boards.png";
import imgChatBot from "./ChatBot.png";
import imgDashboard from "./Dashboard.png";

export const SecondScreen = () => (
    <div className="second-screen">
        <div className="second-screen__container">
            <div className="second-screen__content">
                <img src={imgBoards} alt="Boards" className={'second-screen__boards'}/>
                <img src={imgChatBot} alt="ChatBot" className={'second-screen__chatBot'}/>
                <img src={imgDashboard} alt="Dashboard" className={'second-screen__dashboard'}/>
            </div>
        </div>
    </div>
);

