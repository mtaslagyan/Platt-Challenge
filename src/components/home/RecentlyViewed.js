import React from 'react'
import Case from '../../images/recent/11.png'
import Metal from '../../images/recent/22.png'

const RecentlyViewed = () => {
    return (
        <div className="recentlyViewed">
            <div className="recentlyViewed-content">
                <div className="recentlyViewed-text">
                    <span>Recently Viewed</span>
                    <span><a href="#">View all</a></span>
                </div>
                <div className="recentlyViewed-imgs">
                    <img src={Case}/>
                    <img src={Metal}/>
                    <img src={Metal}/>
                </div>
            </div>
        </div>
    )
}

export default RecentlyViewed
