import React, { useState } from 'react'

function MyComponent() {

    const [enemigos, setEnemigos] = useState(["Goblin", "Orco", "Lobo"]);

    function handleAgregarEnemigo() {
        const nuevoEnemigo = document.getElementById("enemigoInput").value
        document.getElementById("enemigoInput").value = "";

        setEnemigos(e => [...e, nuevoEnemigo]);
    }

    function handleEliminarEnemigo(index) {
        setEnemigos(enemigos.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h2>Lista de Enemigos</h2>
            <ul>
                {enemigos.map((food, index) =>
                    <li key={index} onClick={() => handleEliminarEnemigo(index)}>{food}</li>
                )}
            </ul>
            <input type='text' id="enemigoInput" placeholder='Inserta el nombre del enemigo' />
            <button onClick={handleAgregarEnemigo}>Agregar enemigo</button>
        </div>
    )
}

export default MyComponent