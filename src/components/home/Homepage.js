import React from 'react'
import GetStarted from './GetStarted'
import ProductMarkets from './ProductMarkets'
import TodaysDeal from './TodaysDeals'
import TodaysDealMobile from './TodaysDealsMobile'
import RecentlyViewed from './RecentlyViewed'
import PlattInfoCTAs from './PlattInfoCTAs'
import DowndloadApp from './DownloadApp'
import CircleCTAsMobile from './CircleCTAsMobile'

const Homepage = () => {
    return (
        <div>
            <CircleCTAsMobile />
            <TodaysDealMobile />
            <ProductMarkets />
            <GetStarted />
            <TodaysDeal />
            <RecentlyViewed />
            <PlattInfoCTAs />
            <DowndloadApp />
        </div>
    )
}

export default Homepage
