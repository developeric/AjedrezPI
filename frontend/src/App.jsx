import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import { TODAS_LAS_PIEZAS } from './data/pieces.js'
import SearchBar from './components/SearchBar'

function App() {
  const [state, setState] = useState("");
  const [piezasMostradas, setPiezasMostradas] = useState([TODAS_LAS_PIEZAS]);

  useEffect(() => {
    const resultado = TODAS_LAS_PIEZAS.filter(pieza => pieza.nombre.toLowerCase().includes(state.toLowerCase())
    );

    setPiezasMostradas(resultado)
  })


  return (
    <>
      <SearchBar setBusqueda={setState} />
      {/*Piezas */}
      <div>
        <div className='flex flex-wrap gap-6 ml-9 my-3 min-h-screen items-center justify-center'>
          {piezasMostradas.map(pieza => (
            <Card
              key={pieza.id}
              nombre={pieza.nombre}
              descripcion={pieza.desc}
              imagen={pieza.img} />
          ))}
        </div>
      </div>



    </>
  )
}

export default App
