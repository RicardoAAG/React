import ComponentD from './ComponentD'
import React, { useContext } from 'react'
import { UserContext } from './ComponentA'

// En los componentes en los que se use se tiene que importar tanto el hook como la constante creada arriba.
// Se tiene que crear un const nuvo con la informacion importada y con el hook useContext, y despues se puede
// usar en el interior del componente sin problemas


function ComponentC() {

    const user = useContext(UserContext)

    return (
        <div className='box'>
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC