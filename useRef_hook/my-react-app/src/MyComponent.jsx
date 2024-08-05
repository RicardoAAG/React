import React, { useState, useEffect, useRef } from 'react'

// useRef es similar a useState con la diferencia de que no re-renderiza el componente, solamente almacena la informacion,
// dicha informacion puede realizar cambios pero no necesita re-renderizar todo el componente, normnalmente se usa para controlar
// elementos visuales del DOM, animaciones, timers y transiciones

function MyComponent() {

    // Objeto con una propiedad current, que es la referencia que se le esta pasando, en este caso null
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    // let [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    // Con estas funciones al hacer click a un boton se cambia el valor de input ref.current, y como esta referenciando estilo HTML
    // es posible acceder a los componentes style,backgroundColor de dicha referencias y asi alterar el color de los inputs
    function handleClick1() {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "Yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "Yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3() {
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = "Yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }

    return (
        // En este caso se usa ref de un imput para guardar en dicho objeto sus referencias HTML
        <div>
            <button onClick={handleClick1}>
                Click me1
            </button>
            {/* <h2>{number}</h2> */}
            <input ref={inputRef1} />
            <button onClick={handleClick2}>
                Click me2
            </button>
            <input ref={inputRef2} />
            <button onClick={handleClick3}>
                Click me3
            </button>
            <input ref={inputRef3} />
        </div>
    )
}

export default MyComponent