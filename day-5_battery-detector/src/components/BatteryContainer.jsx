import useBattery from "../hooks/useBattery"
import BatteryPill from "./BatteryPill"
import BatteryStatus from "./BatteryStatus"

const BatteryContainer = () => {
  const { status } = useBattery();
  return (
    <div className="battery-container">
      <BatteryPill status={status}/>
      <div className="battery-info">
        <h5>Battery:</h5>
        <h3 className="percentage">{status.percentage}%</h3>
        <BatteryStatus status={status}/>
      </div>
    </div>
  )
}

export default BatteryContainer