import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

// useContext sirve para pasar info entre componentes sin tener que hacer props.
// Para eso se tiene que elegir un componente como el proveedor de la info, y otros componentes como los receptores
// Se tiene que importar el hook, crear una constante nueva con dicho hook y envolver el componente por el cual
// va a bajar la informacion, ademas de la informacion que vamos a estar pasando

export const UserContext = createContext()

function ComponentA() {

    const [user, setUser] = useState("RAAG")

    return (
        <div className='box'>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA