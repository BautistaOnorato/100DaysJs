/* eslint-disable react/prop-types */
import Square from "./Square"

const Modal = ({ winner, handleReset }) => {

  return (
    <section className="modal-container">
      <div className="modal">
        <div className="modal-text">
          <h2>{ winner !== "🤝" ? "Winner" : "Draw" }</h2>
        </div>
        <div className="win-square">
          <Square>{winner}</Square>
        </div>
        <button onClick={() => handleReset()} >Reset</button>
      </div>
    </section>
  )
}

export default Modal