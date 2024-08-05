import Personajes from "./Personajes"
import kusk from "./assets/kusk.png"
import white from "./assets/white.png"
import appelling from "./assets/appelling.png"
import placidus from "./assets/placidus.png"

function App() {
  return (
    <div className="fondo">
      <Personajes
        img={kusk}
        borde="1px solid brown"
        sombra="5px 5px 5px green"
        fondo="lightgreen"
        nombre="Kusk"
        descripcion="Guerrero nomada de una tribu extinta"
        fur={15}
        des={12}
        con={12}
        int={8}
        sab={10}
        car={10}
      >
      </Personajes >
      <Personajes
        img={white}
        borde="1px solid black"
        sombra="5px 5px 5px yellow"
        fondo="whitesmoke"
        nombre="White"
        descripcion="Paladin enano de la orden del sol"
        fur={15}
        des={9}
        con={13}
        int={8}
        sab={10}
        car={12}
      >
      </Personajes >
      <Personajes
        img={appelling}
        borde="1px solid darkblue"
        sombra="5px 5px 5px lightblue"
        fondo="lightblue"
        nombre="Appeling"
        descripcion="Mono de monje de tierras lejanas"
        fur={9}
        des={15}
        con={10}
        int={10}
        sab={14}
        car={7}
      >
      </Personajes >
      <Personajes
        img={placidus}
        borde="1px solid blue"
        sombra="5px 5px 5px red"
        fondo="grey"
        nombre="Placidus"
        descripcion="Dragon electrico asesino y ladron"
        fur={10}
        des={12}
        con={15}
        int={11}
        sab={8}
        car={8}
      >
      </Personajes >
      <Personajes></Personajes >
    </div>
  )
}

export default App
