import React, { useState } from 'react'

function MyComponent() {

    const [carro, setCarro] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    })

    function handleYearChange(event) {
        setCarro(c => ({ ...c, year: event.target.value }))
    }

    function handleMakeChange(event) {
        setCarro(c => ({ ...c, make: event.target.value }))
    }

    function handleModelChange(event) {
        setCarro(c => ({ ...c, model: event.target.value }))
    }

    return (
        <div>
            <p>Tu auto favorito es: {carro.year} {carro.make} {carro.model}</p>

            <input type='number' value={carro.year} onChange={handleYearChange} /><br />
            <input type='text' value={carro.make} onChange={handleMakeChange} /><br />
            <input type='text' value={carro.model} onChange={handleModelChange} /><br />
        </div>
    )
}

export default MyComponent