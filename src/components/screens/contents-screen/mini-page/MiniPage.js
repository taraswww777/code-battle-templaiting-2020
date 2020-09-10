import React from 'react';
import './MiniPage.scss';
import {BtnBlue} from "../../../btns/btn-blue/BtnBlue";

export const MiniPage = ({title, description, btnText, onClick, imgSrc}) => (
    <div className="mini-page">
        <div className="mini-page__title">{title}</div>
        <div className="mini-page__description">{description}</div>
        <div className="mini-page__btn"><BtnBlue text={btnText}/></div>
        <div className="mini-page__img">{imgSrc}</div>
    </div>
);
