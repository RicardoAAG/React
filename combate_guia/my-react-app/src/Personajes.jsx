import React, { useState } from 'react'

function Personajes(props) {

    const [personajes, setPersonajes] = useState(props.lista);

    const iniciativa = () => {
        const nuevaIniciativa = [...personajes]
        for (let numero = 0; numero < nuevaIniciativa.length; numero++) {
            let iniciativa = Math.floor((Math.random() * 20) + 1);
            nuevaIniciativa[numero].iniciativa = iniciativa
        }
        nuevaIniciativa.sort((a, b) => b.iniciativa - a.iniciativa); //Orden numerico
        setPersonajes(nuevaIniciativa)
    }

    const reset = () => {
        const nuevaVida = [...personajes]
        for (let numero = 0; numero < nuevaVida.length; numero++) {
            nuevaVida[numero].vida = nuevaVida[numero].vidaMaxima
        }
        nuevaVida.sort((a, b) => b.iniciativa - a.iniciativa); //Orden numerico
        setPersonajes(nuevaVida)
    }

    const matar = (x) => {
        const nuevaLista = [...personajes]
        nuevaLista[x].vida = 0;
        setPersonajes(nuevaLista)
    }

    const listaItems = personajes.map((personaje, index) =>
        personaje.vida === 0 ? null : (
            <li className="individuo" key={personaje.id} onClick={() => matar(index)}>
                {personaje.nombre}: &nbsp;<b>HP: {personaje.vida}</b>, Ini: {personaje.iniciativa}
            </li>
        )
    );

    return (
        <>
            <h2 className={props.tipo}>{props.tipo}</h2>
            <button className="botonIniciativa" onClick={iniciativa}>
                Lanzar Iniciativa
            </button>
            <ol className='lista-items'>
                {listaItems}
            </ol>
            <button className="botonReiniciar" onClick={reset}>
                Resetear combatientes
            </button>
        </>
    )
}

export default Personajes