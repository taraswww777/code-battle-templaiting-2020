import React from 'react';
import './ContentsScreen.scss';
import {MiniPage} from "./mini-page/MiniPage";

export const ContentsScreen = () => {

    const pages = [
        {
            title: 'Work',
            description: 'Ever wondered if you\'re too reliant ' +
                'on a client for work? Slate helps ' +
                'you identify',
            btnText: 'Sign Up',
            onClick: () => console.log('Work'),
        },
        {
            title: 'Design with real data',
            description: 'Ever wondered if you\'re too reliant ' +
                'on a client for work? Slate helps ' +
                'you identify.',
            btnText: 'Try For Free',
            onClick: () => console.log('Design with real data'),
        }
    ];

    return (
        <div className="contents-screen">
            <div className="contents-screen__container">
                <div className="contents-screen__title">Contents</div>
                <div className="contents-screen__description">
                    We focus on ergonomics and meeting you where you work.
                    It's only a keystroke away.
                </div>
                <div className="contents-screen__pages">
                    {pages.map(({title, description, btnText, onClick, imgSrc}, index) => (
                        <div className="contents-screen__page" key={index}>
                            <MiniPage
                                title={title}
                                description={description}
                                btnText={btnText}
                                onClick={onClick}
                                imgSrc={imgSrc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

