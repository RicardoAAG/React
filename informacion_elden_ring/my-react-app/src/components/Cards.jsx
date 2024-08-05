import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards(props) {
    return (
        <div className='cards'>
            <div className="cards-container">
                <ul className="cards-items">
                    <CardItems
                        src={props.logo}
                        text={props.text}
                        label={props.label}
                        path={props.path}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards