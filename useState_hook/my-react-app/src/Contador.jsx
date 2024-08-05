import React, { useState } from 'react'

function Contador() {

    const [contador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contador + 1);
    }

    const disminuir = () => {
        setContador(contador - 1);
    }

    const resetear = () => {
        setContador(0);
    }

    return (
        <div className='contenedor-contador'>
            <p className='contador-display'>{contador}</p>
            <button className='contador-boton' onClick={disminuir}>Disminuir</button>
            <button className='contador-boton' onClick={resetear}>Resetear</button>
            <button className='contador-boton' onClick={aumentar}>Aumentar</button>
        </div>
    )
}

export default Contador