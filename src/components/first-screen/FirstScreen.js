import React from 'react';
import './Header.scss';
import {Logo} from "../logo/Logo";
import {Menu} from "../menu/Menu";
import {ButtonLogin} from "../button-login/ButtonLogin";

export const FirstScreen = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Logo/>
                </div>
                <div className="header__menu">
                    <Menu items={items}/>
                </div>
                <div className="header__login">
                    <ButtonLogin/>
                </div>
            </div>
        </div>
    );
}

