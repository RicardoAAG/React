import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button(props) {
    return (
        <button className={`${props.type} ${props.size} btn`}>
            {props.words}
        </button>
    )
}

export default Button