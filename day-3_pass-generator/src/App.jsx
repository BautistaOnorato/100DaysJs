import { useState } from 'react'
import './App.css'
import { CopyIcon } from './icons/Icons'
import { checkStrength, generatePassword } from './utils/generator'

function App() {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState("weak")
  const [length, setLength] = useState(8)
  const [upper, setUpper] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [duplicate, setDuplicate] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault()
    const newPass = generatePassword(length, upper, numbers, symbols, duplicate)
    const passwordStrength = checkStrength(newPass)
    setPassword(newPass)
    setStrength(passwordStrength)
  }

  const handleCopied = () => {
    const modal = window.document.querySelector(".copy-modal");
    modal.classList.add("triggered")
    navigator.clipboard.writeText(password)
    setTimeout(() => {
      modal.classList.remove("triggered")
    }, 4000)
  }

  return (
    <div className='app'>
      <div className="container">
        <div className="title">
          <h2>Pass Generator</h2>
        </div>
        <form action="" onSubmit={handleSumbit}>
          <fieldset className="output-container">
            <div className='output-password'>
              <p id='password'>{password}</p>
              <div className="copy">
                <div className="copy-icon">
                  <CopyIcon handleCopied={handleCopied} />
                </div>
                <div className="copy-modal">
                  Copied!
                </div>
              </div>
            </div>
            <div className='strength-line' id={strength}/>
          </fieldset>
          <fieldset className="length-container">
            <label htmlFor="length-input">Password Length <span>{length}</span></label>
            <input type="range" name="length-input" id="length-input" min={1} max={32} value={length}  onChange={(e) => setLength(e.target.value)} />
          </fieldset>
          <fieldset className='settings-container'>
            <p>Password Settings</p>
            <div className="settings">
              <div className="setting">
                <input type="checkbox" name="uppercase" id="uppercase" checked={upper} onChange={() => setUpper(!upper)} />
                <label htmlFor="uppercase">Uppercase (A-Z)</label>
              </div>
              <div className="setting">
                <input type="checkbox" name="numbers" id="numbers" checked={numbers} onChange={() => setNumbers(!numbers)} />
                <label htmlFor="numbers">Numbers (0-9)</label>
              </div>
              <div className="setting">
                <input type="checkbox" name="symbols" id="symbols" checked={symbols} onChange={() => setSymbols(!symbols)} />
                <label htmlFor="symbols">Symbols (@$!%*?&)</label>
              </div>
              <div className="setting">
                <input type="checkbox" name="duplicate" id="duplicate" checked={duplicate} onChange={() => setDuplicate(!duplicate)} />
                <label htmlFor="duplicate">Exclude Duplicate</label>
              </div>
            </div>
          </fieldset>
          <button type='submit' className='btn-generate'>Generate Password</button>
        </form>
      </div>
    </div>
  )
}

export default App
