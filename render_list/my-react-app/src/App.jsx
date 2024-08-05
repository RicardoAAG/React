import List from "./List"

function App() {

  // lista de objetos, con el id, el nombre del personaje y su vida restante
  const aliados = [
    { id: 1, nombre: "Kusk", vida: 15, iniciativa: 13 },
    { id: 2, nombre: "Appelling", vida: 12, iniciativa: 20 },
    { id: 3, nombre: "White", vida: 20, iniciativa: 1 },
    { id: 4, nombre: "Placidus", vida: 10, iniciativa: 18 },
    { id: 5, nombre: "Conductor", vida: 8, iniciativa: 11 }
  ];

  const enemigos = [
    { id: 6, nombre: "Goblin", vida: 7, iniciativa: 3 },
    { id: 7, nombre: "Goblin", vida: 7, iniciativa: 10 },
    { id: 8, nombre: "Lobo", vida: 7, iniciativa: 8 },
    { id: 9, nombre: "Hobgoblin", vida: 10, iniciativa: 20 },
    { id: 10, nombre: "Osgo", vida: 20, iniciativa: 11 }
  ];

  return (
    // Estamos pasando la lista como un prop
    <>
      {/* Esto se pone para que la lista desaparezca si no tiene elementos */}
      {aliados.length > 0 && <List items={aliados} categoria="Aliados" />}
      {enemigos.length > 0 && <List items={enemigos} categoria="Enemigos" />}
    </>
  )
}

export default App
