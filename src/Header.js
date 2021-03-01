import React from 'react';
import './Header.css';
import Logo from './robinhood.svg';

function Header() {
    return (
        <div className='header__wrapper'>

            {/* L O G O */}
            <div className="header__logo">
                  <img src={Logo} width={25} alt='Logo SVG ' />
            </div>


            {/* SEARCH B A R */}
            <div className="header__search">
                <div className="header__searchContainer">
                    <input type='text'  placeholder='Search' />
                </div>
            </div>


            {/* M.E.N.U Items */}
            <div className="header__menuItems">
                <a href="#" >Free Stocks</a>
                <a href="#" >Portfolio</a>
                <a href="#" >Cash</a>
                <a href="#" >Free Stocks</a>
                <a href="#" >Messages</a>
                <a href="#" >Account</a>
            </div>
        </div>
    )
}

export default Header
