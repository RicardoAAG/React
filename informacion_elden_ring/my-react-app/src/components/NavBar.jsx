import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.webp";
import menu from "../assets/menu.png";
import equis from "../assets/equis.png";
import Button from './Button';
import './NavBar.css';

function NavBar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 750) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className="logo" src={logo} alt="Logo" />
                        <p className='title'>ERTG</p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <img src={click ? equis : menu} height={'30rem'} />
                    </div>
                    <ul className={click ? 'nav-menu nav-menu-active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/regions' className='nav-links' onClick={closeMobileMenu}>
                                Regions
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Enemies' className='nav-links' onClick={closeMobileMenu}>
                                Enemies
                            </Link>
                        </li>
                        {!button && <Button type='transparent' size='small' words='Donate' />}
                    </ul>
                    {button && <Button type='transparent' size='small' words='Donate' />}
                </div>
            </nav>
        </>
    );
}

export default NavBar;
