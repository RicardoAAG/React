import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button className={`${props.type} ${props.size} btn`} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button