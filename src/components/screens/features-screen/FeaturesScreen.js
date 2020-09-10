import React from 'react';
import './FeaturesScreen.scss';
import imgFrame from './Frame.png';

export const FeaturesScreen = () => {
    const items = [
        {
            id: 'spoon',
            icon: 'spoon',
            title: 'A single source <br/>of truth',
            description: 'When you add work to your</br>' +
                'Slate calendar we automatically</br>' +
                'calculate useful insights'
        }, {
            id: 'ufo',
            icon: 'ufo',
            title: 'Intuitive<br/>interface',
            description: 'When you add work to your</br>' +
                'Slate calendar we automatically</br>' +
                'calculate useful insights'
        }, {
            id: 'infinity',
            icon: 'infinity',
            title: 'Or with rules',
            description: 'When you add work to your</br>' +
                'Slate calendar we automatically</br>' +
                'calculate useful insights'
        },
    ];
    return (
        <div className="features">
            <div className="features-screen__container">
                <div className="features-screen__title">Features</div>
                <div className="features-screen__description">
                    Most calendars are designed for teams. Slate is designed for
                    freelancers who want a simple way to plan their schedule.
                </div>
                <div className="features-screen__img">
                    <img src={imgFrame} alt="Features"/>
                </div>

                <div className="features-screen__features">
                    <div className="features-screen__list">
                        {items.map(({id, icon, title, description}) => (
                            <div className={'features-screen__item'} key={id}>
                            <span className={[
                                'features-screen__item-icon',
                                `features-screen__item-icon--${icon}`,
                            ].join(' ')}/>
                                <div
                                    className={'features-screen__item-title'}
                                    dangerouslySetInnerHTML={{__html: title}}/>
                                <div
                                    className={'features-screen__item-description'}
                                    dangerouslySetInnerHTML={{__html: description}}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

