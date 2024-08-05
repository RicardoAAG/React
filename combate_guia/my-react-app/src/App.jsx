import Personajes from "./Personajes"

function App() {

  const aliados = [
    { id: 1, nombre: "Kusk", vida: 15, iniciativa: 0, vidaMaxima: 15 },
    { id: 2, nombre: "Appelling", vida: 12, iniciativa: 0, vidaMaxima: 12 },
    { id: 3, nombre: "White", vida: 20, iniciativa: 0, vidaMaxima: 20 },
    { id: 4, nombre: "Placidus", vida: 10, iniciativa: 0, vidaMaxima: 10 },
  ];

  const enemigos = [
    { id: 6, nombre: "Goblin", vida: 7, iniciativa: 0, vidaMaxima: 7 },
    { id: 7, nombre: "Goblin", vida: 7, iniciativa: 0, vidaMaxima: 7 },
    { id: 8, nombre: "Lobo", vida: 7, iniciativa: 0, vidaMaxima: 7 },
    { id: 9, nombre: "Hobgoblin", vida: 10, iniciativa: 0, vidaMaxima: 10 },
    { id: 10, nombre: "Osgo", vida: 20, iniciativa: 0, vidaMaxima: 20 }
  ];

  return (
    <div className="pagina">
      <h2 className="titulo">COMBATE!!!</h2>
      <hr className="linea"></hr>
      <p className="informacion">Presiona a un personaje para matarlo</p>
      <div className="fila">
        <div className="columnaAliados">
          <Personajes lista={aliados} tipo="Aliados" />
        </div>
        <div className="columnaEnemigos">
          <Personajes lista={enemigos} tipo="Enemigos" />
        </div>
      </div>
    </div>
  )
}

export default App
