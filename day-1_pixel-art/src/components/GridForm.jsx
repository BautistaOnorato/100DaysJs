import { useState } from 'react'
import Grid from './Grid'

const GridForm = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [color, setColor] = useState("#000000");
  const [showGrid, setShowGrid] = useState(false);
  const [painting, setPainting] = useState(true);

  const clearGrid = () => {
    if (showGrid) {
      setHeight(1);
      setWidth(1);
      setShowGrid(false);
    }
  }

  const selectedStyle = {
    color: "#242424",
    backgroundColor: "#ffffff",
    border: "1px solid #242424"
  }

  const maxWH = () => {
    const deviceWidth = window.innerWidth;
    if (deviceWidth <= 720 && deviceWidth > 550) {
      return 24
    } else if (deviceWidth <= 550) {
      return 12
    } else return 32
  }
  

  return (
    <div className='container'>
      <div className='form-container'>
        <form action="">
          <div className="range-inputs-container">
            <div className='range-input'>
              <label htmlFor="width-range">Grid Width</label>
              <input type="range" name="width-range" id="width-range" value={width} min={1} max={maxWH()} onChange={(e) => setWidth(e.target.value)} />
              <span className='range-value'>{width}</span>
            </div>
            <div className='range-input'>
              <label htmlFor="height-range">Grid Height</label>
              <input type="range" name="height-range" id="height-range" value={height} min={1} max={maxWH()} onChange={(e) => setHeight(e.target.value)} />
              <span className='range-value'>{height}</span>
            </div>
          </div>
          <div className="form-buttons">
            <button type='button' className="btn-form" onClick={() => setShowGrid(true)}>Create Grid</button>
            <button type='button' className="btn-form" onClick={() => clearGrid()}>Clear Grid</button>
            <input type="color" name="color-input" id="color-input" value={color} onChange={(e) => setColor(e.target.value)} />
            <button type='button' className="btn-form" style={!painting ? selectedStyle : {}} onClick={() => setPainting(false)}>Erase</button>
            <button type='button' className="btn-form" style={painting ? selectedStyle : {}} onClick={() => setPainting(true)}>Paint</button>
          </div>
        </form>
      </div>
      { showGrid && <Grid width={width} height={height} color={color} painting={painting}/> }

    </div>
  )
}

export default GridForm