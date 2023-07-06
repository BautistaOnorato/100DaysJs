import { useState } from 'react'
import Select from './components/Select'
import { QRCodeCanvas } from 'qrcode.react'
import './App.css'
import { DownloadIcon } from './icons/icons'

const sizeList = ['100x100', '200x200', '300x300', '400x400']

function App() {
  const [size, setSize] = useState(sizeList[3])
  const [firstColor, setFirstColor] = useState("#FFFFFF")
  const [secondColor, setSecondColor] = useState("#000000")
  const [text, setText] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")

  const handleSize = (newSize) => {
    setSize(newSize)
  }

  const handleDownload = () => {
    const canvas = document.querySelector("canvas")
    const dataUrl = canvas.toDataURL('image/png')
    const link = document.createElement("a")
    link.href = dataUrl
    link.download = "qrcode.png"
    link.click()
  }

  return (
    <div className='container'>
      <form className="qr-form">
        <fieldset className="no-text-container">
          <input type="color" name="primary-color-input" id="color-input" value={firstColor} onChange={(e) => setFirstColor(e.target.value)} />
          <input type="color" name="secondary-color-input" id="color-input" value={secondColor} onChange={(e) => setSecondColor(e.target.value)} />
          <Select options={sizeList} handler={handleSize} main={size}/>
        </fieldset>
        <input type="text" name="text-input" id="text-input" placeholder='Enter QR Text' value={text} onChange={(e) => setText(e.target.value)} />
      </form>
      <section className="qr-container">
        <QRCodeCanvas value={text} bgColor={firstColor} fgColor={secondColor} size={size.slice(1 + size.indexOf("x"))} />
      </section>
      <section className='btn-container'>
        <button className='btn' onClick={handleDownload} >Download <DownloadIcon /></button>
      </section>
    </div>
  )
}

export default App
