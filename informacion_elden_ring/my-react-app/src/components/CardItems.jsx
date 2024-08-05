import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function CardItems(props) {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        // Cambia la ruta según el prop `src` si es necesario
        import(`../assets/${props.imageName}`).then(module => {
            setImageSrc(module.default);
        }).catch(err => {
            console.error('Error loading image:', err);
        });
    }, [props.imageName]);

    if (!imageSrc) return <p>Loading...</p>;

    return (
        <>
            <li className='cards-items'>
                <Link className='cards-item-link' to={props.path}>
                    <figure className='cards-item-img-wrap' data-category={props.label}>
                        <img src={imageSrc} className='cards-item-img' />
                    </figure>
                    <div className='cards-title'>
                        <h1 className='cards-title-text'>{props.title}</h1>
                    </div>
                    <div className="cards-item-info">
                        <h5 className="cards-item-text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItems