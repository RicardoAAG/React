import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting(props) {

    const mensajeBienvenida = <h2 className='mensaje-bienvenida'>Bienvenido {props.userName}</h2>;
    const mensajeAviso = <h2 className='mensaje-aviso'>Porfavor inicia sesion para continuar</h2>;

    // Cualquiera de las dos formas permiten mostrar u ocultar algo en la pagina cuando se cumple alguna condicion
    return (
        props.isLoggedIn ? mensajeBienvenida : mensajeAviso
    )


    // if (props.isLoggedIn) {
    //     return <h2>Bienvenido {props.userName}</h2>
    // } else {
    //     return <h2>Porfavor inicia sesion para continuar</h2>
    // }
}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Invitado"
}

export default UserGreeting