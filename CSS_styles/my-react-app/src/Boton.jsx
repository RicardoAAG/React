import React from 'react'

function Boton() {

    // Estilo inline
    const styles = {
        backgroundColor: "rgb(128, 0, 128)",
        color: "rgb(255, 255, 255)",
        padding: "10px 10px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "50px",
    }

    return (
        <button style={styles}>Presioname :D</button>
    )
}

export default Boton


// // Estilo Externo
// function Boton() {
//     return (
//         <button className='boton'>Presioname :D</button>
//     )
// }

// export default Boton

// import styles from './Boton.module.css'

// // Estilo Modular
// function Boton() {
//     return (
//         <button className={styles.boton}>Presioname :D</button>
//     )
// }