import React, { useState, useEffect } from 'react'

function RelojDigi() {

    const [tiempo, setTiempo] = useState(new Date());
    const [pais, setPais] = useState("")

    useEffect(() => {
        const intervaloId = setInterval(() => {
            setTiempo(new Date())
        }, 1000)

        return () => {
            clearInterval(intervaloId)
        }
    }, []);

    function formatTime() {
        let horas = tiempo.getHours();
        const minutos = tiempo.getMinutes();
        const segundos = tiempo.getSeconds();
        const meridiem = horas >= 12 ? "PM" : "AM";

        if (pais === "Buenos Aires") {
            horas = horas + 3
        } else if (pais === "CDMX") {
        } else if (pais === "Londres") {
            horas = horas + 7
        } else if (pais === "") {
            return "00:00:00 AM"
        }

        horas = horas % 12 || 12;

        return `${agregarCero(horas)}:${agregarCero(minutos)}:${agregarCero(segundos)} ${meridiem}`
    }

    function agregarCero(numero) {
        return (numero < 10 ? "0" : "") + numero;
    }

    function handlecambiarPais(event) {
        setPais(event.target.value)
        console.log(pais)
    }

    return (
        <div className='reloj-contenedor'>
            <div className='reloj'>
                <span>{formatTime()}</span>
                <select className='select-pais' value={pais} onChange={handlecambiarPais}>
                    <option value="">País</option>
                    <option value="CDMX">CDMX</option>
                    <option value="Londres">Londres</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                </select>
            </div>
        </div>
    )
}

export default RelojDigi