import React from 'react'
import Lines from '../../images/ic/green/ic_line_style.png'
import Search from '../../images/ic/green/ic_search.png'
import Scan from '../../images/ic/green/ic_scanner.png'

const CircleCTAsMobile = () => {
    return (
        <div className="circleCTAs">
            <ul className="circleCTAs-list">
                <li>
                    <div className="circle-categories"><img src={Lines} /></div>
                    <div>Categories</div>
                </li>
                <li>
                    <div className="circle-search"><img src={Search} /></div>
                    <div>Search</div>
                </li>
                <li>
                    <div className="circle-scan"><img src={Scan} /></div>
                    <div>Scan</div>
                </li>
            </ul>
        </div>
    )
}

export default CircleCTAsMobile
