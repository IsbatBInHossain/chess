// src/App.jsx
import { useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import './App.css'

function App() {
  const [game, setGame] = useState(new Chess())

  function onDrop(sourceSquare, targetSquare) {
    const gameCopy = new Chess(game.fen())
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    })
    if (move) {
      setGame(gameCopy)
      return true
    }
    return false
  }

  return (
    <div className='app'>
      <div className='board-container'>
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </div>
  )
}

export default App
