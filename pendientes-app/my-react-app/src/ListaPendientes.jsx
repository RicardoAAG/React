import React, { useState } from 'react'

function ListaPendientes() {

    const [pendientes, setPendientes] = useState([])
    const [nuevoPendiente, setNuevoPendientes] = useState("")

    function handleCambioInput(event) {
        setNuevoPendientes(event.target.value);
    }

    function agregarPendiente() {

        if (nuevoPendiente.trim() != "") {
            setPendientes(p => [...p, nuevoPendiente])
            setNuevoPendientes("")
        }
    }

    function eliminarPendiente(index) {
        const pendientesActualizados = pendientes.filter((_, i) => i !== index)
        setPendientes(pendientesActualizados)

    }

    function subirPendiente(index) {
        const pendientesActualizados = [...pendientes]
        if (index > 0) {
            [pendientesActualizados[index], pendientesActualizados[index - 1]] =
                [pendientesActualizados[index - 1], pendientesActualizados[index]]
            setPendientes(pendientesActualizados)
        }
    }

    function bajarPendiente(index) {
        const pendientesActualizados = [...pendientes]
        if (index < pendientes.length - 1) {
            [pendientesActualizados[index], pendientesActualizados[index + 1]] =
                [pendientesActualizados[index + 1], pendientesActualizados[index]]
            setPendientes(pendientesActualizados)
        }
    }

    return (
        <div className='lista-pendientes'>
            <h1>Lista de Pendientes</h1>
            <div>
                <input
                    type='text'
                    placeholder='Ingresa un pendiente...'
                    value={nuevoPendiente}
                    onChange={handleCambioInput}
                />
                <button
                    className='boton-agregar'
                    onClick={agregarPendiente}>
                    Agregar
                </button>
            </div>
            <ol>
                {pendientes.map((pendiente, index) =>
                    <li key={index}>
                        <span className='texto'>{pendiente}</span>
                        <button className="boton-borrar" onClick={() => eliminarPendiente(index)}>
                            Borrar
                        </button>
                        <button className="boton-mover" onClick={() => subirPendiente(index)}>
                            Subir
                        </button>
                        <button className="boton-mover" onClick={() => bajarPendiente(index)}>
                            Bajar
                        </button>
                    </li>)}
            </ol>
        </div>
    )
}

export default ListaPendientes