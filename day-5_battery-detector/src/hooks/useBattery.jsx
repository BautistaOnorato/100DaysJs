import { useEffect, useState } from "react"

const useBattery = () => {

  const [status, setStatus] = useState({})

  useEffect(() => {
    navigator.getBattery().then(battery => {
      const newStatus = {
        percentage: battery.level * 100,
        charging: battery.charging
      }

      setStatus(newStatus)
    })
  }, [])

  return { status }
}

export default useBattery