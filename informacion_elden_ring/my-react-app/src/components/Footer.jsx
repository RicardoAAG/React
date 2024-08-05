import React from 'react'
import Button from './Button'
import './Footer.css'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.webp";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-suggestion">
                <p className='footer-suggestion-heading'>
                    Tell me what you think about the website
                </p>
                <div className='input-area'>
                    <form>
                        <input type="text" name="suggestion" placeholder="Add a Suggestion" className="footer-input" />
                    </form>
                    <Button type="transparent" words="Submit" size="small" />
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/'>What</Link>
                        <Link to='/'>Why</Link>
                        <Link to='/'>Where</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/'>What</Link>
                        <Link to='/'>Why</Link>
                        <Link to='/'>Where</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/'>What</Link>
                        <Link to='/'>Why</Link>
                        <Link to='/'>Where</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/'>What</Link>
                        <Link to='/'>Why</Link>
                        <Link to='/'>Where</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className='social-logo'>
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <small className='website-rights'>ERTG © 2024</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link-youtube' to="/" target='_blank' aria-label='Youtube'>
                            <img className="social-icons-logo" src={youtube} />
                        </Link>
                        <Link className='social-icon-link-github' to="/" target='_blank' aria-label='GitHub'>
                            <img className="social-icons-logo" src={github} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer