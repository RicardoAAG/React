import React from 'react'

function Boton() {

    // Permite hacer un contador con el boton
    // let contador = 0;
    // const handleClick = (nombre) => {
    //     if (contador < 3) {
    //         contador++;
    //         console.log(`${nombre}, me has presionado ${contador} vez/veces`)
    //     } else {
    //         console.log(`Ya deja de presionarme ${nombre}!!! GRRR`)
    //     }
    // }


    const handleClick = (event) => event.target.textContent = "No tan fuerte :c";

    return (
        // <button onClick={() => handleClick("Ricardo")}>
        //     Presioname uwu
        // </button>

        //Aqui mandamos a llamar el boton, junto con los parametros que usa
        <button onDoubleClick={(e) => handleClick(e)}>
            Presioname uwu
        </button>
    )
}

export default Boton