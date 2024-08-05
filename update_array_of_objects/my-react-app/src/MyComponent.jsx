import React, { useState } from 'react'

function MyComponent() {

    // Primero creamos varias variables, una para el array de objetos y las demas para las partes del objeto
    const [enemigos, setEnemigos] = useState([]);
    const [enemigoVida, setEnemigoVida] = useState();
    const [enemigoNombre, setEnemigoNombre] = useState("");
    const [enemigoHabilidad, setEnemigoHabilidad] = useState("");

    // Esta primer funcion nos permite crear un objeto nuevo, tomando los valores modificados de cada variable, agregandolos a un objeto
    // y despues agregando ese objeto a la version anterior de enemigos, que es la lista, finalmente borramos su valor
    const handleAgregarEnemigo = () => {
        const nuevoEnemigo = {
            vida: enemigoVida,
            nombre: enemigoNombre,
            habilidad: enemigoHabilidad
        }

        setEnemigos(e => [...e, nuevoEnemigo])

        setEnemigoVida(0)
        setEnemigoNombre("")
        setEnemigoHabilidad("")
    }

    // Esta elimina a un objeto del array, al dar click a un elemento esta se manda a llamar y elimina del array el objeto cuyo index es igual al de la lista
    function handleEliminarEnemigo(index) {
        setEnemigos(e => e.filter((_, i) => i !== index))
    }

    //Estas funciones permiten cambiar el valor de las variables conforme vamos agregando informacion en los inputs
    function handleCambiarVida(event) {
        setEnemigoVida(event.target.value)
    }

    function handleCambiarNombre(event) {
        setEnemigoNombre(event.target.value)
    }

    function handleCambiarHabilidad(event) {
        setEnemigoHabilidad(event.target.value)
    }



    return (
        <div>
            <h2>Lista de enemigos</h2>
            <ul>
                {/* El map toma un array y va iterando en el, extrayendo cada parte de este como 1 objeto y el inmdex del mismo, el index se usa como la llave de la
                lista desordenada mientras que las partes del objeto se imprimen como un componente de dicha lista, y se crea un elemento de la lista por cada objeto en el array */}
                {enemigos.map((enemigo, index) =>
                    <li key={index} onClick={() => handleEliminarEnemigo(index)}>
                        Nombre: {enemigo.nombre} | HP: {enemigo.vida} | Habilidad: {enemigo.habilidad}.
                    </li>)}
            </ul>
            {/* Estos permiten obtener la informacion y agregtarlas a cada variable */}
            <input type='number' value={enemigoVida} onChange={handleCambiarVida} placeholder='Ingresa vida del enemigo' /><br />
            <input type='text' value={enemigoNombre} onChange={handleCambiarNombre} placeholder='Ingresa nombre del enemigo' /><br />
            <input type='text' value={enemigoHabilidad} onChange={handleCambiarHabilidad} placeholder='Ingresa la habilidad del enemigo' /><br />
            {/* Este boton permite pasar toda la info de los inputs al array completo, usando la funcion handleAgregarEnemigo*/}
            <button onClick={handleAgregarEnemigo}>Agregar enemigo</button>
        </div>
    )
}

export default MyComponent