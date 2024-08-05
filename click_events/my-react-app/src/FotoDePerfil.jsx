import React from 'react'

function FotoDePerfil() {

    //Se crea una imagen y despues la funcion que conrtrola el click, para que desparezca la imagen
    const imageUrl = './src/assets/capybara.webp'
    const handleClick = (e) => e.target.style.display = "none";

    //en este caso la imagen tambien funciona como un boton
    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    )
}

export default FotoDePerfil