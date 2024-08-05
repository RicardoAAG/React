import { React } from 'react'
import './Store.css'
import Button from './Button'


function Store({ changeInfo, ...props }) {


    function handleOnClick(key) {
        if (props.buttonIcon === '✏️') {

        } else if (props.buttonIcon === '❌') {
            const newStores = props.stores.filter(store => store.key !== key);
            changeInfo(newStores);
        }
    }


    return (
        <>
            {props.stores.map((store, index) => (
                <div className="card" key={store.key}>
                    <div className="card-header">
                        <h2 className="card-title">{store.name}</h2>
                        <div className="button-container">
                            <Button size='small' type='fill' text={props.buttonIcon} onClick={() => handleOnClick(store.key)} />
                        </div>
                    </div>
                    <hr />
                    <div className="card-body">
                        <p className="card-description">{store.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Store
