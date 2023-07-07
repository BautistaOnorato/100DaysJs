import { defineStyle } from "../logic/defineStyle"

/* eslint-disable react/prop-types */
const BatteryPill = ({ status }) => {
  return (
    <div className="battery-pill">
      <div className="battery-liquid" style={defineStyle(status.percentage)}>
        <div className="battery-liquid-top" 
          style={status.percentage === 100 ? 
            { paddingBottom: "0", background: "none" } 
            : { paddingBottom: "4px", background: defineStyle(status.percentage).background }}
          />
      </div>
    </div>
  )
}

export default BatteryPill