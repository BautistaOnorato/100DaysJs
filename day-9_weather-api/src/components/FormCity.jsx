/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiSearch} from 'react-icons/bi'

const FormCity = ({ city, handleCity, handleSubmit }) => {

  const handleChange = (e) => {
    handleCity(e.target.value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} id='form-city'>
      <fieldset>
        <FaMapMarkerAlt className='pin-icon' />
        <input type="text" value={city} onChange={handleChange} />
      </fieldset>
      <button className='search'><BiSearch /></button>
    </form>
  )
}

export default FormCity