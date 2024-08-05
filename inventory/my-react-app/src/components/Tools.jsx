import React from 'react'
import './Tools.css'

function Tools({ children }) {
    return (
        <div className='tool-set'>
            <div className="tool-set-container">
                {children}
            </div>
        </div>
    )
}

export default Tools