import React from 'react'
import PropTypes from 'prop-types'

function Personajes(props) {

    const estilo = {
        border: props.borde || "1px solid rgb(0, 0, 0)",
        boxShadow: props.sombra || "5px 5px 5px rgba(0, 0, 0, 0.2)",
        backgroundColor: props.fondo || "hsl(0, 0%, 100%)",
    }

    return (
        <div className="personaje" style={estilo}>
            <img className="imagen" src={props.img}></img>
            <h2 className="nombre">{props.nombre}</h2>
            <hr></hr>
            <p className="descripcion">{props.descripcion}</p>
            <h4 className="subtitulo">Atributos</h4>
            <ul className="atributos">
                <li>Fuerza: {props.fur}</li>
                <li>Destreza: {props.des}</li>
                <li>Constitucion: {props.con}</li>
                <li>Inteligencia: {props.int}</li>
                <li>Sabiduria: {props.sab}</li>
                <li>Carisma: {props.car}</li>
            </ul>
        </div>
    )
}

// Se agrega un valor base, en caso de que no se pase nada
Personajes.defaultProps = {
    img: "https://via.placeholder.com/200",
    nombre: "Nombre",
    descripcion: "Descripcion",
    fur: 0,
    des: 0,
    con: 0,
    int: 0,
    sab: 0,
    car: 0,
}

export default Personajes