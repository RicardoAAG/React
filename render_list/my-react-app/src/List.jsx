import React from 'react'
import PropTypes from 'prop-types'


//un componente de este estilo nos permite crear una lista y luego por medio de un map nos permite usar los elementos de la lista
function List(props) {

    //guardamos la lista que obtuvimos como prop en una lista nueva
    const personajes = props.items;
    const categoria = props.categoria;

    //La lista se puede ordenar, ya sea por texto o numero, en este caso ordenamos por numero para saber quien va primero
    // aliados.sort((a, b) => a.nombre.localeCompare(b.nombre)) // Por nombre
    personajes.sort((a, b) => b.iniciativa - a.iniciativa); //Orden numerico

    //Esto filtra cualquier personaje en en personajes con una iniciativa mayor a 20 y lo almacena en otra lista, el siguiente almacena los fallos 1 y los guarda en otra lista
    const criticoIniciativa = personajes.filter(personaje => personaje.iniciativa >= 20);
    const falloIniciativa = personajes.filter(personaje => personaje.iniciativa == 1);

    // con la funcion map hacemos que por cada personaje en personajes se genere un elemento lista de CSS con el nombre, un espacio, la vida de cada personaje y su iniciativa
    const listaItems = personajes.map(personaje => <li key={personaje.id}>
        {personaje.nombre}: &nbsp;<b>HP: {personaje.vida}</b>, Ini: {personaje.iniciativa}
    </li>)

    return (
        <>
            <h3 className={props.categoria}>
                {categoria}
            </h3>
            <ol className='lista-items'>
                {listaItems}
            </ol>
        </>
    )
}

List.propTypes = {
    categoria: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
        { id: PropTypes.number, nombre: PropTypes.string, vida: PropTypes.number, iniciativa: PropTypes.number }
    ))
}

List.defaultProps = {
    categoria: "categoria",
    items: []

}

export default List