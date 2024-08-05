// Event handler que manda a llamar una funciona cada vez que el valor de la entrada cambie, como en inputs, textareas, radioButtons,etc

import React, { useState } from 'react'

function MyComponent() {

    //Primero se tiene que declarar una variable que se pueda modificar y mostrar en tiempo real, con un react Hook
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [comentario, setComentario] = useState("");
    const [pago, setPago] = useState("");
    const [envio, setEnvio] = useState("Entrega");

    //Estasn funciones son las que se mandan a llamar con eventHandler, en su interior esta el constructor de la variable que se intenta cambiar
    // y se cambia segun el valor del target de donde se este llamando el evento
    function handleNameChange(event) {
        setNombre(event.target.value);
    }

    function handleQuantityChange(event) {
        setCantidad(event.target.value);
    }

    function handleCommentChange(event) {
        setComentario(event.target.value);
    }

    function handlePaymentChange(event) {
        setPago(event.target.value);
    }

    function handleShippingChange(event) {
        setEnvio(event.target.value);
    }


    //En el return se manda a llamar como un onChange que manda a llamar la funcion dedicada anteriormente, en type se pueden especificar cosas como numeros o radios
    // Para poder usar formatos mas especificos de informacion
    return (
        <div>
            <input value={nombre} onChange={handleNameChange} />
            <p>Nombre: {nombre}</p>

            <input value={cantidad} onChange={handleQuantityChange} type='number' />
            <p>Cantidad: {cantidad}</p>

            <textarea value={comentario} onChange={handleCommentChange}
                placeholder='Ingresa instrucciones de entrega' />
            <p>Comentario: {comentario}</p>


            <select value={pago} onChange={handlePaymentChange}>
                <option value={""}>Selecciona una opcion</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Tarjeta de regalo">Tarjeta de regalo</option>
            </select>
            <p>Pago: {pago}</p>

            <label>
                <input type='radio' value="Pick Up" checked={envio === "Pick Up"} onChange={handleShippingChange} />
                Pick up
            </label><br />
            <label>
                <input type='radio' value="Entrega" checked={envio === "Entrega"} onChange={handleShippingChange} />
                Entrega
            </label>
            <p>Envio: {envio}</p>
        </div>
    )
}

export default MyComponent