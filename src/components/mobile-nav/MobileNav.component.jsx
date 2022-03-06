import React, {useState} from 'react';
import './MobileNav.style.css';
import { CSSTransition } from 'react-transition-group';


function MobileNav() {
    const [active, setActive] = useState('main');
    return (
        <div className='header__mobileNav'>
            <CSSTransition in={active === 'main'} unmountOnExit timeout={500} className='menu-primary'>
                <div className="menu">
                    <a href="/" onClick={(e) => {e.preventDefault(); setActive('men')}}>Men</a>
                    <a href="/" onClick={(e) => {e.preventDefault(); setActive('women')}}>Women</a>
                    <a href="/">Sustainability</a>
                    <a href="/">Community</a>
                    <a href="/">Blog</a>
                    <a href="/">Snow Team</a>
                    <a href="/">Skate Team</a>
                    <a href="/">Stores</a>
                    <a href="/">Skate Skills</a>
                    <a href="/">
                        <img src="https://cdn.shopify.com/s/files/1/0274/4293/7933/t/375/assets/club-logo-dark.svg?v=1225262083578130312" alt="Club" />
                    </a>
                </div>
            </CSSTransition>
            <CSSTransition in={active === 'men'} unmountOnExit timeout={500} className='menu-secondary'>
                <div className="menu">
                    <a href="/" onClick={(e) => {e.preventDefault(); setActive('main')}}>Back</a>
                    <a href="/">Women</a>
                    <a href="/">Sustainability</a>
                    <a href="/">Community</a>
                    <a href="/">Blog</a>
                </div>
            </CSSTransition>  
            <CSSTransition in={active === 'women'} unmountOnExit timeout={500} className='menu-secondary'>
                <div className="menu">
                    <a href="/" onClick={(e) => {e.preventDefault(); setActive('main')}}>Back</a>
                    <a href="/">Women</a>
                </div>
            </CSSTransition>    
        </div>
            
    )
}


export default MobileNav;
