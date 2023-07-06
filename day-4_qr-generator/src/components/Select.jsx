import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../icons/icons";

/* eslint-disable react/prop-types */
const Select = ({ options, handler, main }) => {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    handler(e.target.textContent);
    setOpen(false)
  }

  return (
    <div className="select-container">
      <div className="main-option" onClick={() => setOpen(!open)}>
        <p>{main}</p>
        { open ? <ChevronUpIcon /> : <ChevronDownIcon /> }
      </div>
      {
        open && (
          <div className="select-list">
            <ul>
              {
                options.map((option, i) => (
                  <li key={i} onClick={handleClick}>{option}</li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Select