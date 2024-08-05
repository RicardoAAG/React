import { React, useState } from 'react'
import Button from './Button'
import './CreateStore.css'

function CreateStore(props) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }

    return (
        <>
            <div className='card-create-store'>
                <div className='card-create-store-first'>
                    <h3>Crear Tienda</h3>
                </div>
                <hr />
                <div className='card-create-store-second'>
                    <p>Nombre: {name}</p>
                    <input value={name} onChange={handleNameChange} />
                </div>
                <div className='card-create-store-third'>
                    <p>Descripcion: {description}</p>
                    <input value={description} onChange={handleDescriptionChange} />
                </div>
                <div className='card-create-store-submit'>
                    <Button text="Guardar" size='medium' type='fill' onClick={props.onClickSubmit}/>
                </div>
            </div>
        </>
    )
}

export default CreateStore