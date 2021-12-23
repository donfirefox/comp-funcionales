import { useState, useEffect } from "react";

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial); // Este es un hook

  const incrementar = () => {
    setContador(contador + 1);
  };

  return [contador, incrementar];
};

// Componente funcional
const App = () => {
  const [contador, incrementar] = useContador(0);

    useEffect(()=>{
        document.title = contador
        //console.log('soy un efecto')
    },[contador]) // Cuando pasamos un arreglo vacio, 
    // decimos que no tiene dependencia, y se ejecuta 1 vez

  return (
    <div>
      contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;
