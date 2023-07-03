import { useState } from "react";

const Grid = ({ width, height, color, painting }) => {

  const [isMouseDown, setIsMouseDown] = useState(false);

  const changeColor = (e) => {
    // console.log(e);
    if(!isMouseDown) {
      return;
    }
    e.target.style.backgroundColor = painting ? color : "#FFFFFF";
  }

  const handleTouchMove = (e) => {
    document.body.classList.add('no-scroll')
    const touch = e.touches[0];
    const pixel = document.elementFromPoint(touch.clientX, touch.clientY);
    if (pixel && pixel.classList.contains('grid-block')) {
      pixel.style.backgroundColor = color;
    }
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true)
    const pixel = document.elementFromPoint(e.clientX, e.clientY);
    if (pixel && pixel.classList.contains('grid-block')) {
      pixel.style.backgroundColor = color;
    }
  }

  return (
    <div 
      className='grid-container' 
      style={{
        gridTemplateColumns: `repeat(${width}, 20px)`,
        gridTemplateRows: `repeat(${height}, 20px)`
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsMouseDown(false)}
      onTouchStart={changeColor}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => document.body.classList.remove('no-scroll')}
    >
      {
        Array(width * height).fill(null).map((element, i) => (
          <div className="grid-block" key={i} onMouseEnter={changeColor}>
          </div>
        ))
      }
    </div>
  )
}

export default Grid