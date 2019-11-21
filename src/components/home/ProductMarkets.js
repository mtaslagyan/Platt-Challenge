import React from 'react'
import DataComm from '../../images/img/datacomm.png'
import HVAC from '../../images/img/hvac.png'
import Industrial from '../../images/img/industrial.png'
import Lighting from '../../images/img/lighting.png'
import Energy from '../../images/img/energy.png'
import Utility from '../../images/img/utility.png'

const ProductMarkets = () => {
    return (
        <div className="productMarkets wrapper">
            <div className="productMarkets-title">
                <strong>Product Markets</strong>
            </div>
            <ul className="productMarkets-CTAs">
                <li>
                    <a href="#">
                        <img src={DataComm}/><br/>
                        <div>
                            <span>DataComm</span> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={HVAC}/><br/>
                        <div>
                            <span>HVAC</span> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Industrial}/><br/>
                        <div>
                            <span>Industrial</span> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Lighting}/><br/>
                        <div>
                            <span>Lighting</span> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Energy}/><br/>
                        <div>
                            <span>Energy<br/>Efficiency</span> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={Utility}/><br/>
                        <div>
                            <span>Utility</span> 
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ProductMarkets
