import { useState } from "react";

//Reglas de los hooks:
//1. no se pueden llamar en loops, ni condiciones
//2. Deben estar en el inicio del componentes
//3. Solo se llaman en componentes que devuelven jsx
//4. Se pueden llamar en custom hooks
//5. cuando se crea un custom hook debe comenzar con use

//Componente basado en clase
// class App extends Component {

//     state = {
//         contador:0,
//     }

//     incrementar= ()=>{
//         this.setState(
//             {contador:this.state.contador+1}
//         )
//     }

//     render(){
//         return(
//             <div>
//             contador: {this.state.contador}
//             <button onClick={this.incrementar} >Incrementar</button>
//             </div>
//         )
//     }
// }

//Custom hook, podria usarse para usar una api
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial); // Este es un hook

    const incrementar = () => {
      setContador(contador + 1);
    };

    return [contador, incrementar]
}

// Componente funcional
const App = () => {

const [contador, incrementar] = useContador(0)

  return (
    <div>
      contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;
