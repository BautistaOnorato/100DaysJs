/* eslint-disable react/prop-types */
import { RiPlug2Line } from 'react-icons/ri'
import { HiOutlineLightningBolt } from 'react-icons/hi'

const BatteryStatus = ({ status }) => {
  return (
    <p className="battery-status">
      {
        status.charging ? (
          <span>Charging... <HiOutlineLightningBolt className='icon charging' /></span>
        ) : status.percentage < 25 ? (<span>Low battery <RiPlug2Line className='icon low' /></span>): ""
      }
    </p>
  )
}

export default BatteryStatus