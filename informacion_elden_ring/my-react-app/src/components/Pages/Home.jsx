import '../../index.css'
import Hero from '../Hero'
import React from 'react'
import CardsInformation from "../CardsInformation.json"
import CardItems from '../CardItems.jsx'
import '../Cards.css'

function Home() {

    const allowedKeys = [1, 2]
    const filteredCards = CardsInformation.filter(card => allowedKeys.includes(card.key));

    const allowedKeys2 = [3, 4]
    const filteredCards2 = CardsInformation.filter(card => allowedKeys2.includes(card.key));

    return (
        <>
            <Hero />
            <div className='cards'>
                <h1>Discover fascinating places</h1>
                <div className="cards-container">
                    <ul className="cards-items">
                        {filteredCards.map((card, index) => (
                            <CardItems
                                key={card.key}
                                imageName={card.imageName}
                                text={card.text}
                                label={card.label}
                                path={card.path}
                                title={card.title}
                            />
                        ))}
                    </ul>
                    <ul className="cards-items">
                        {filteredCards2.map((card, index) => (
                            <CardItems
                                key={card.key}
                                imageName={card.imageName}
                                text={card.text}
                                label={card.label}
                                path={card.path}
                                title={card.title}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home