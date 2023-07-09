import React, { useState } from 'react'

const Coin = () => {
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)

  const handleFlip = (e) => {
    e.target.disabled = true
    let i = Math.floor(Math.random() * 2)
    console.log(i);
    const coin = document.querySelector('.coin')
    if (i) {
      setTimeout(() => {
        coin.style.animation = "flipHeads 3s forwards"
      }, 100)
      setTimeout(() => {
        setHeads(heads + 1)
        coin.style.animation = "return-head 0s forwards"
        e.target.disabled = false
      }, 3000)
    } else {
      setTimeout(() => {
        coin.style.animation = "flipTails 3s forwards"
      }, 100)
      setTimeout(() => {
        setTails(tails + 1)
        coin.style.animation = "return-tail 0s forwards"
        e.target.disabled = false
      }, 3000)
    }
  }

  const handlReset = () => {
    setHeads(0)
    setTails(0)
  }

  return (
    <div className='coin-container'>
      <div className="counter">
        <p>Heads: {heads}</p>
        <p>Tails: {tails}</p>
      </div>
      <div className="coin">
        <div className="a-side">
          <div className="left-separation"></div>
          <p className='coin-title'>HEADS</p>
          <div className="right-separation"></div>
        </div>
        <div className="b-side">
          <div className="left-separation"></div>
          <p className='coin-title'>TAILS</p>
          <div className="right-separation"></div>
        </div>
      </div>
      <div className="btns">
        <button className="flip-btn" onClick={handleFlip} >Flip Coin</button>
        <button className="reset-btn" onClick={handlReset}>Reset</button>
      </div>
    </div>
  )
}

export default Coin