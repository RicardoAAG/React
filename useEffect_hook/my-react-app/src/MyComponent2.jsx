import React, { useEffect, useState } from 'react'

function MyComponent2() {

    const [ancho, setAncho] = useState(window.innerWidth)
    const [alto, setAlto] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleCambio)
        console.log("Event Listener agregado")

        //Aqui el return se hace cuando se desmonta el componente, si el useEffect fuera con cada render
        //entonces el codigo en return se hace justo antes de cada render siguiente
        return () => {
            window.removeEventListener("resize", handleCambio)
            console.log("Event Listener removido")
        }
    }, [])

    useEffect(() => {
        document.title = `Tamaño: ${alto} x ${ancho}`
    }, [ancho, alto])

    function handleCambio() {
        setAncho(window.innerWidth)
        setAlto(window.innerHeight)
    }

    return (
        <>
            <p>Alto: {alto}px</p>
            <p>Ancho: {ancho}px</p>
        </>
    )
}

export default MyComponent2