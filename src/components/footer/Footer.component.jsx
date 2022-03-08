import React from 'react'
import './Footer.style.css';
import { ReactComponent as Youtube} from '../../assets/youtube.svg';
import {ReactComponent as Instagram} from '../../assets/insta.svg';
import {ReactComponent as Facebook} from '../../assets/facebook.svg';
import {ReactComponent as Tiktok} from '../../assets/tiktok.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';
import {ReactComponent as Pinterest} from '../../assets/pinterest.svg';


function Footer() {
    return (
        <footer className='footer'>
            {/* Footer Links */}
            <div className="footer__links">
                <div className="footer__about">
                    <h5 className='title--xs text-uppercase'><a href="/">about us</a></h5>
                    <ul>
                        <li><a href="/" className='text-capitalize'>about us</a></li>
                        <li><a href="/" className='text-capitalize'>our stores</a></li>
                        <li><a href="/" className='text-capitalize'>route one launches</a></li>
                        <li><a href="/" className='text-capitalize'>the sustainable route</a></li>
                        <li><a href="/" className='text-capitalize'>feedback</a></li>
                        <li><a href="/" className='text-capitalize'>cookie policy</a></li>
                        <li><a href="/" className='text-capitalize'>vacancies</a></li>
                    </ul>
                </div>
                <div className="footer__about">
                    <h5 className='title--xs text-uppercase'><a href="/">about us</a></h5>
                    <ul>
                        <li><a href="/" className='text-capitalize'>about us</a></li>
                        <li><a href="/" className='text-capitalize'>our stores</a></li>
                        <li><a href="/" className='text-capitalize'>route one launches</a></li>
                        <li><a href="/" className='text-capitalize'>the sustainable route</a></li>
                        <li><a href="/" className='text-capitalize'>feedback</a></li>
                        <li><a href="/" className='text-capitalize'>cookie policy</a></li>
                        <li><a href="/" className='text-capitalize'>vacancies</a></li>
                    </ul>
                </div>
                <div className="footer__about">
                    <h5 className='title--xs text-uppercase'><a href="/">about us</a></h5>
                    <ul>
                        <li><a href="/" className='text-capitalize'>about us</a></li>
                        <li><a href="/" className='text-capitalize'>our stores</a></li>
                        <li><a href="/" className='text-capitalize'>route one launches</a></li>
                        <li><a href="/" className='text-capitalize'>the sustainable route</a></li>
                        <li><a href="/" className='text-capitalize'>feedback</a></li>
                        <li><a href="/" className='text-capitalize'>cookie policy</a></li>
                        <li><a href="/" className='text-capitalize'>vacancies</a></li>
                    </ul>
                </div>
            </div>
            {/* Footer Contact */}
            <div className="footer__contactInfo">
                <p>Need help?</p>
                <h5>Call us on <a href="/"><strong>0800 840 1010</strong></a></h5>
                <p className='mt-10'>Lines open</p>
                <h6>Monday - Friday | 8:30am - 4:30pm</h6>
                <a href="/" className='pt-50'>orders@routeone.co.uk</a>
                <div className="footer__icons">
                    <Youtube />
                    <Instagram />
                    <Tiktok />
                    <Facebook />
                    <Twitter />
                    <Pinterest />
                </div>
                <h4>Download the Route One App.</h4>
            </div>
        </footer>
    )
}

export default Footer
