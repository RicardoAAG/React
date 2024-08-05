import { React, useState } from 'react'
import Button from '../Button'
import Tools from '../Tools'
import Options from '../Options'
import Store from '../Store'
import StoresInformationData from '../StoresInformation.json'
import CreateStore from '../CreateStore'

function Home() {

    const [storesInformation, setStoresInformation] = useState(StoresInformationData);
    const [icon, setIcon] = useState('...')
    const [createView, setCreateView] = useState(false)


    function editButton() {
        setIcon('✏️')
    }

    function eraseButton() {
        setIcon('❌')
    }

    function createButton() {
        setCreateView(createView => !createView)
    }

    function childSetStoresInformation(info) {
        setStoresInformation(info)
    }

    return (
        <>
            <Tools>
                <Button text={createView ? 'Cancelar' : 'Agregar Tienda'} size='medium' type='transparent' onClick={createButton} />
                <Button text='Editar Tienda' size='medium' type='transparent' onClick={editButton} />
                <Button text='Eliminar Tienda' size='medium' type='transparent' onClick={eraseButton} />
            </Tools>
            <div className='screen'>
                <Options>
                    <Store buttonIcon={icon} stores={storesInformation} changeInfo={childSetStoresInformation} />
                </Options>
                <Options isList='yes-list'>
                    {createView ? <CreateStore /> : <></>}
                </Options>
            </div>
        </>
    )
}

export default Home