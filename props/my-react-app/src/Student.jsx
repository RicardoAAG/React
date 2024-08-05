import React from 'react'
import PropTypes from 'prop-types'

//los props son propiedades de solo lectura para pasar entre componentes, donde el padre pasa la informacion al hijo
// props nos permite pasar informacion al componente desde donde se mande a llamar
function Student(props) {
    return (
        <div className='estudiante'>
            {/* Aqui estamos usando de props la llave name, pero pueden crearse mas */}
            <p>Nombre: {props.nombre}</p>
            <p>Edad: {props.edad}</p>
            {/* Como aqui se esta pasando un booleando entonces se debe aplicar una condicion if  */}
            <p>Estudiante: {props.esEstudiante ? "Si" : "No"}</p>
        </div>
    )
}

// Esto funciona para revisar que la informacion ingresada sea del tipo deseado, sino entonces suelta una advertencia en la consola
Student.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    esEstudiante: PropTypes.bool,
}

// Se agrega un valor base, en caso de que no se pase nada
Student.defaultProps = {
    nombre: "Por Definir",
    edad: 0,
    esEstudiante: false,
}

export default Student