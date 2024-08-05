import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="home">
                    <a href="/">Home</a>
                </div>
                <div className="title">
                    <h1>Sistema Inventariado</h1>
                </div>
            </div>
        </nav>
    )
}

export default NavBar