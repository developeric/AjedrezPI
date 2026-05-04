import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*Piezas */}
      <div className='flex flex-col min-h-screen items-center justify-center align-center'>


        <div className='flex ARRIBA'>
          <Card imagen={"Pieces/WTorre.png"} titulo="Torre" descripcion={"Se mueve en línea recta, ya sea de forma horizontal o vertical, sin límite de casillas. Junto con el rey, realiza el movimiento especial del enroque."} />
          <Card imagen={"Pieces/WCaballo.png"} titulo="Caballo" descripcion={"Se mueve en forma de L (dos casillas en una dirección y una en perpendicular). Es la única pieza capaz de saltar por encima de las demás."} />
          <Card imagen={"Pieces/WAlfil.png"} titulo="Alfil" descripcion={"Se mueve en línea diagonal por todo el tablero, sin límite de casillas. Siempre se mantiene en el color de casilla en el que empezó."} />
        </div>
        {/* Abajo */}
        <div className='flex ABAJO'>
          <Card imagen={"Pieces/WPeon.png"} titulo="Peón" descripcion={"Avanza una casilla hacia adelante (dos en su primer movimiento) y captura en diagonal. Si llega al otro extremo del tablero, se corona y puede transformarse en otra pieza."} />
          <Card imagen={"Pieces/WRey.png"} titulo="Rey" descripcion={"Se mueve una sola casilla en cualquier dirección. Es la pieza más importante del juego: el objetivo principal es proteger al tuyo y darle jaque mate al del rival."} />
          <Card imagen={"Pieces/WReina.png"} imagenHover={"Pieces/BReina.png"} titulo="Reina" descripcion={"Es la pieza más poderosa. Combina los movimientos de la torre y el alfil, moviéndose en línea recta o diagonal tantas casillas como quiera."} />
        </div>
      </div>
      {/*Piezas */}

      
    </>
  )
}

export default App
