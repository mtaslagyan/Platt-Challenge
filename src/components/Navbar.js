import React from 'react'
import Logo from '../images/img/logo.png';
import Search from '../images/ic/white/ic_search.png'
import Cart from '../images/ic/white/ic_shopping_cart.png'
import Person from '../images/ic/white/ic_person.png'
import Menu from '../images/ic/white/ic_menu.png'

const Navbar = () => {
    return (
        <div className="header-nav wrapper">
            <ul>
                <li className="header-brand__logo">
                    <a href=""><img src={Logo} /></a>
                </li>
                <li className="navbar-link__item"><a><img src={Search}/></a></li>
                <li className="navbar-link__item"><a><img src={Cart}/></a></li>
                <li className="navbar-link__item"><a><img src={Person}/></a></li>
                <li className="navbar-link__item"><a><img src={Menu}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar
