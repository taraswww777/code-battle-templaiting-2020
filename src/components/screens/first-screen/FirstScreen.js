import React from 'react';
import './FirstScreen.scss';
import {BtnBlue} from "../../btns/btn-blue/BtnBlue";
import {BtnWhite} from "../../btns/btn-white/BtnWhite";

export const FirstScreen = () => {
    return (
        <div className="first-screen">
            <div className="first-screen__container">
                <div className="first-screen__title">
                    <div className="first-screen__title-first-word">Work</div>
                    <div className="first-screen__title-second-word">fast</div>
                </div>
                <div className="first-screen__description">
                    Most calendars are designed for teams. Slate is designed for
                    freelancers who want a simple way to plan their schedule.
                </div>
                <div className="first-screen__footer">
                    <div className="first-screen__btn">
                        <BtnBlue text={'Try For Free'}/>
                    </div>
                    <div className="first-screen__btn">
                        <BtnWhite text={'Learn More'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

