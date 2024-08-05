import Student from "./Student"

function App() {
  return (
    <>
      {/* Estamos pasando un valor prop con la llave name y otros*/}
      <Student nombre="Ricardo" edad={22} esEstudiante={false} />
      <Student nombre="Diego" edad={17} esEstudiante={true} />
      <Student nombre="Angel" edad={22} esEstudiante={true} />
      {/* Esta pasanod aproposito un valor equivocado para probar PropTypes */}
      <Student nombre="Luis" edad="25" esEstudiante={true} />
      {/* Se genera un componente vacio para probar DefaultProps */}
      <Student />
    </>
  )
}

export default App
