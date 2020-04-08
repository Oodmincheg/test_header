import React from 'react'
import Navbar from './Navbar'
import Logo from './logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="react logo" className="logo-img"/>
                <h1>
                    Logo
                </h1>
            </div>
            
            <div>
                <input type="text" id="search" placeholder="search..."/>
            </div>
            <Navbar />
        </header>
    )
}

export default Header
