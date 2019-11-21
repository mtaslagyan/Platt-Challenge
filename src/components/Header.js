import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <SearchBar />
        </div>
    )
}

export default Header
