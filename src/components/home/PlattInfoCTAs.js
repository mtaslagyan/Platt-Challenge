import React from 'react'
import SuperToolDay from '../../images/img/super-tool-day.png'
import Locations from '../../images/img/ic_location_b.png'
import HelpCenter from '../../images/img/ic_helpcenter.png'
import PlattU from '../../images/img/ic_platt-u.png'

const PlattInfoCTAs = () => {
    return (
        <div className="infoCTAs wrapper">
            <ul className="infoCTAs-firstwrap">
                <li>
                    <a href="#">
                        <img src={SuperToolDay}/><br/>
                        <div>
                            <span>Super Tool Day &<br/> Dymanic Data Day</span> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Locations}/><br/>
                        <div>
                            <span>Branch Locations</span> 
                        </div>
                    </a>
                </li>
            </ul>
            <ul className="infoCTAs-secondwrap">
                <li>
                    <a href="#">
                        <img className="infoCTAs-helpcenter" src={HelpCenter}/><br/>
                        <div>
                            <span>Help Center</span> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img className="infoCTAs-plattu" src={PlattU}/><br/>
                        <div>
                            <span>Platt University</span> 
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PlattInfoCTAs
