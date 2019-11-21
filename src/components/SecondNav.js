import React from 'react'
import Categories from '../images/ic/black/ic_categories.png'
import Catalog from '../images/ic/black/ic_playlist_add_check.png'
import List from '../images/ic/black/ic_list.png'
import Chat from '../images/ic/black/ic_chat.png'
import PIM from '../images/ic/black/ic_check_circle.png'
import Person from '../images/ic/black/ic_person_black.png'
import Location from '../images/ic/black/ic_place.png'
import GreenChat from '../images/ic/green/ic_chat-active.png'
import Arrow from '../images/ic/black/ic_arrow_forward.png'

const SecondNav = () => {
    return (
        <div className="secondNav">
            <div className="wrapper">
                <div className="allcategories">
                    <a><img src={Categories} /><span>Shop All Categories</span><img className="secondNav-arrow" src={Arrow} /></a>
                </div>
                <ul className="firstWrap">
                    <a><li><img src={Catalog} />My Catalog<img className="secondNav-arrow" src={Arrow} /></li></a>
                    <a><li><img src={List} />My List<img className="secondNav-arrow" src={Arrow} /></li></a>
                    <a><li><img className="blackChat" src={Chat} /> <img className="greenChat" src={GreenChat} />Live Help<img className="secondNav-arrow" src={Arrow} /></li></a>
                </ul>
                <ul className="secondWrap">
                    <a><li><img src={PIM} />PIM<img className="secondNav-arrow" src={Arrow} /></li></a>
                    <a><li><img src={Person} />Account<img className="secondNav-arrow" src={Arrow} /></li></a>
                    <a><li><img src={Location} />Branch Locations<img className="secondNav-arrow" src={Arrow} /></li></a>
                </ul>
            </div>
        </div>
    )
}

export default SecondNav
