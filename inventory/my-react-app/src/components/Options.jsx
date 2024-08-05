import React from 'react'
import './Options.css'

function Options({ children, isList }) {
    return (
        <div className='item-list'>
            <div className={`${isList ? isList : ''} item-list-container`}>
                {children}
            </div>
        </div>
    )
}

export default Options