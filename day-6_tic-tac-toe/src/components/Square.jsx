/* eslint-disable react/prop-types */
const Square = ({ children, updateBoard, index, isSelected }) => {

  const className = isSelected ? 'square is-selected' : 'square'

  const handleUpdate = () => {
    if (updateBoard) {
      updateBoard(index)
    }
  }

  return (
    <div className={className} onClick={handleUpdate}>
      {children}
    </div>
  )
}

export default Square