import React from 'react'
import Deals from '../../images/panel/deal1.png'

const TodaysDeals = () => {
    return (
        <div className="todaysdeals">
            <img src={Deals}/>
            <div className="todaysdeals-content">
                <span className="todaysdeals-firstline">TODAY'S<br/> DEALS </span>
                <hr className="todaysdeals-divider"/>
                <span className="todaysdeals-secondline">CHECK BACK DAILY FOR NEW DEALS</span>
                <div><a href="#">View deals</a></div>
            </div>
        </div>
    )
}

export default TodaysDeals
