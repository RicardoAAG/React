import React, { useEffect, useState } from 'react'

//Use effect funciona como un hook quie le dice a react que haga un codigo cada vez que algo paso
//cuando un componente se re-rendereiza, se monta (agregarlo al DOM) o cambia su valor

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    //useEffect(funcion,[]), de esta manera el codigo se hace solo cuando se monta el componente
    // useEffect(() => {
    //     document.title = `Programa Contador`
    // }, [])

    // useEffect(funcion), asi el codigo se hace cada vez que algo que renderiza en el componente
    // useEffect(() => {
    //     document.title = `Cuenta: ${count}`
    // })

    //useEffect(funcion,[dependencies]), el codigo se hace solo cuando las dependencias cambian de valor y al montar
    useEffect(() => {
        document.title = `Cuenta: ${count} ${color}`
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1)
    }

    function subtractCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
        <>
            <p style={{ color: color }}>Contador: {count}</p>
            <button onClick={addCount}>Agregar</button>
            <button onClick={subtractCount}>Quitar</button><br />
            <button onClick={changeColor}>Cambiar Color</button>
        </>
    )
}

export default MyComponent