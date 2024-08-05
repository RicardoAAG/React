import React from 'react'
import Button from './Button'
import './Hero.css'
import intro from '../assets/intro2.mp4'

function Hero() {
    return (
        <div className='hero-container'>
            <video src={intro} autoPlay loop muted />
            <h1>WELCOME TO THE LANDS BETWEEN</h1>
            <p>Lets explore together</p>
            <div className='hero-buttons'>
                <Button type='transparent' size='big' words='Lets Start' />
                <Button type='fill' size='big' words='Watch Trailer' />
            </div>
        </div>
    )
}

export default Hero