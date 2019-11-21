import React from 'react'
import Deals from '../../images/panel/deal1.png'

const TodaysDealsMobile = () => {
    return (
        <div className="todaysdeals-mobile">
            <img src={Deals}/>
            <div className="todaysdeals-mobile-content">
                <span className="todaysdeals-mobile-firstline">TODAY'S<br/> DEALS </span>
                <hr className="todaysdeals-mobile-divider"/>
                <span className="todaysdeals-mobile-secondline">CHECK BACK DAILY FOR NEW DEALS</span>
                <div><a href="#">View deals</a></div>
            </div>
        </div>
    )
}

export default TodaysDealsMobile
