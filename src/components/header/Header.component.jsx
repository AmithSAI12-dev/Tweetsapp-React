import React, { useState } from 'react'
import './Header.style.css';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import {ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as User} from '../../assets/user.svg';
import {ReactComponent as Wishlist} from '../../assets/wishlist.svg';
import {ReactComponent as Cart} from '../../assets/cart.svg';
import MobileNav from '../mobile-nav/MobileNav.component';
import { Link } from 'react-router-dom';

function Header() {
    // State to toggle mobile dropdown
    const [open, setOpen] = useState(false);
    return (
        <header className='header'>
            <div className='container'>
                {/* Header Mobile Icon */}
                <div className="header__mobile" onClick={() => setOpen(!open)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                {/* Header Mobile Navigation */}
                { open && <MobileNav />}
                {/* Header Logo */}
                <Link to='/' className='header__logo'><Logo /></Link>
                {/* Header Navigation */}
                <div className='header__navigation'>
                    <Link to='/shop'><div className='header__navigationItem'>Men</div></Link>
                    <Link to='/shop'><div className='header__navigationItem'>Women</div></Link>
                    {/* Header Dropdown */}
                    <div className="header__dropdown">
                        <Link to='/' className='header__dropdownItem'>new in</Link>
                        <Link to='/' className='header__dropdownItem'>Clothing</Link>
                        <Link to='/' className='header__dropdownItem'>shoes</Link>
                        <Link to='/' className='header__dropdownItem'>accessories</Link>
                        <Link to='/' className='header__dropdownItem'>skateboard</Link>
                        <Link to='/' className='header__dropdownItem'>snowboard</Link>
                        <Link to='/' className='header__dropdownItem'>route one o.b.</Link>
                        <Link to='/' className='header__dropdownItem'>brands</Link>
                        <Link to='/' className='header__dropdownItem'>launches</Link>
                        <Link to='/' className='header__dropdownItem'>sale</Link>
                    </div>
                </div>
                {/* Header Search */}
                <form action='/' className='header__form'>
                    <button type='submit' className='header__btn'><Search /></button>
                    <input type='text' placeholder='Search products..' className='header__input'/>
                </form>
                {/* Header Icons */}
                <div className="header__icons">
                    <img src="https://cdn.shopify.com/s/files/1/0274/4293/7933/t/375/assets/club-logo-dark.svg?v=1225262083578130312" alt="Club" />
                    <Link to='/login'><User /></Link>
                    <Wishlist />
                    <Cart />
                </div>
                
            </div>
        </header>
    )
}

export default Header
