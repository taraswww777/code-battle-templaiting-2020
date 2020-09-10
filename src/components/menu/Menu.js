import React from 'react';
import './Menu.scss';

export const Menu = ({items}) => (
    <div className="menu">
        <ul className="menu__list">
            {items.map(({title, href}) => (
                <li key={href} className="menu__item">
                    <a href={href} className="menu__link">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


