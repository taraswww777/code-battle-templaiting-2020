import React from 'react';
import './Logo.scss';
import imgSymbolA from './symbol-a.svg';
// import imgTopLine from './top-line.svg';

export const Logo = () => {
    return (
        <div className="logo">
            Battle L<img src={imgSymbolA} className="logo__symbol" alt="Battle Land"/>nd
        </div>
    );
}

