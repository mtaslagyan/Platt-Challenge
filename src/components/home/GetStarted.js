import React from 'react'
import PlattPlus from '../../images/img/platt-plus.png'

const GetStarted = () => {
    return (
        <div className="getStarted wrapper">
            <div className="getStarted-img">
                <img src={PlattPlus}/>
            </div>
            <span className="getStarted-info">
                <div>
                   <span className="getStarted-firstline">Get Started Today</span><br/>
                    <span className="getStarted-secondline">Become a <span>Platt Plus</span> Member.</span><br/> 
                </div>
                <div className="getStarted-link"><a href="#">Learn More</a></div>
            </span>
        </div>
    )
}

export default GetStarted
