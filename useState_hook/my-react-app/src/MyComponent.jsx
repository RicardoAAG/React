import React, { useState } from 'react'

//React hook sirve para crear variables que puedan ser cambiadas y actualizadas dentro de la misma pagina
//creando una variable conformada por ella misma y su constructor, a la cual se le puede asiganr una funcion, como useState


function MyComponent() {

    //Primero se declaran, [nombre de la variable,nombre del constructor]=tipo de react hook(valor inicial)
    const [name, setName] = useState("Invitado");
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    //aqui se crean las funciones del constructor, estas se activan cuando se presiona el boton y alteran el valor de su variable de alguna forma
    //ya se cambiando su valor por otro, aumentadolo o variandolo
    const updateName = () => {
        setName("Sus")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed);
    }


    return (
        <div>
            {/* Las funciones que se usan para afectar las variables deben ser usadas  con atributos de diferentes componentes,
            como el atributo onClick del componente boton, para que cada vez que se presione el boton inicie la funcion*/}
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}>Toggle Status</button>
        </div>
    )
}

export default MyComponent