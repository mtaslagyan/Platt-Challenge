import React from 'react'
import Banner from '../../images/panel/app-get-banner.png'

const DownloadApp = () => {
    return (
        <div className="downdloadApp wrapper">
            <a href="#"><img src={Banner}/></a>
            <div className="downdloadApp-text">Shop better, download the Platt App today</div>
        </div>
    )
}

export default DownloadApp
