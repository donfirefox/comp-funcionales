
// Los componentes funcionales no tiene tienen setState
// Los hooks permiten manejar el estado de los comp funcionales


const impura = () => new Date().toLocaleString()

console.log(impura())

//Funcion que nunca cambia se llama función pura 
const MiComponente = ({miProp})=>{
  return(
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = ()=>{
  return(
    <MiComponente miProp={'Chanchito feliz'} />
  )
}

export default App

