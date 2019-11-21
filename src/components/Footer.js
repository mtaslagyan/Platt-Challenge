import React from 'react'
import Help from '../images/ic/black/ic_comment.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content wrapper">
                <div className="footer-info">
                    <strong>Support Center</strong><br/><br/>
                    <a className="footer-phone" href="tel:+18002575288"><b>800-25-Platt</b></a><br/>
                    <a className="footer-phone" href="tel:+18002575288"><span>800-2575288</span></a><br/><br/>
                    <b>4 a.m. - 12 a.m. (pst)</b><br/>
                    <b>7 Days a week</b><br/>
                    <div className="footer-live-help">
                        <a href="#"><img src={Help}/>Live Help</a>
                    </div>
                    
                </div>
                <div className="footer-content-links">
                    <a href="#">Contact Us</a>
                    <a href="#">What's New</a>
                    <a href="#">FAQ's</a>
                </div>

            </div>
        </div>
    )
}

export default Footer
