import React from 'react';
import '../sass/Header.scss'

const Header = () => (
    <header>
        <nav className='navigation'>
            <ul>
                <li><a href='#'>Home</a></li>

                <li><a href='#' >About</a></li>

            </ul>
        </nav>
    </header>
);

export default Header;