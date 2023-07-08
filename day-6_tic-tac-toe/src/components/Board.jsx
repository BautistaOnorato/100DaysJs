/* eslint-disable react/prop-types */
import { useState } from "react"
import { TURNS } from "../logic/Constants"
import Square from "./Square"
import { checkEndGame, checkWinner } from "../logic/board"
import confetti from 'canvas-confetti'
import Modal from "./Modal"

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    if (checkWinner(newBoard)) {
      setWinner(turn)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner("🤝")
    }
  }

  return (
    <>
      <div className="board">
        {
          board.map((element, i) => (
            <Square key={i} updateBoard={updateBoard} index={i}>
              {element}
            </Square>
          ))
        }
      </div>
      <div className="actions">
        <div className="turns">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </div>
      </div>
      {winner !== null && <Modal winner={winner} handleReset={handleReset} />}
    </>
  )
}

export default Board