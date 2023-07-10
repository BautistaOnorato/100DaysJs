import { useState } from 'react'
import FormHeader from './FormHeader'
import UserPage from './UserPage'

const Form = () => {
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [instagram, setInstagram] = useState('')
  const [github, setGithub] = useState('')
  const [twitter, setTwitter] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState(false)

  const changePage = (action) => {
    const form = document.querySelector('#login-form')
    action === 'next' ? setPage(page + 1) : setPage(page - 1)
    action === 'next' ? setPage(page + 1) : setPage(page - 1)
    form.style.transform === 'translate(500px)'
  }

  const handlePhone = (e) => {
    const onlyNumberRx = /^\d+$/
    if (!onlyNumberRx.test(e.target.value) && e.target.value !== '') return
    setPhone(e.target.value)
  }

  const handleNext = () => {
    if (page === 1) {
      const emailRx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (!email || !pass || !confirmPass) {
        setError('Complete every field')
      } else if (!emailRx.test(email)) {
        setError('Invalid email format')
      } else if (pass !== confirmPass) {
        setError("Passwords don't match" )
      } else {
        setError('')
        changePage('next')
      }
    } else if (page === 2) {
      if (!instagram || !github || !twitter) {
        setError('Complete every field')
      } else {
        setError('')
        changePage('next')
      }
    }
  }

  const handleBack = () => {
    setError('')
    changePage('back')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!phone || !firstName || !lastName) {
      setError('Complet every field')
    } else {
      setUser(true)
    }
  }

  const reset = () => {
    setUser(false)
    setEmail('')
    setPass('')
    setConfirmPass('')
    setInstagram('')
    setGithub('')
    setTwitter('')
    setFirstName('')
    setLastName('')
    setPhone('')
    setPage(1)
  }

  return (
    <div className='form-container'>
      {
        user ? 
          (<UserPage reset={reset} email={email} firstName={firstName} lastName={lastName} instagram={instagram} twitter={twitter} github={github} phone={phone} />) :
          (
            <>
              <FormHeader page={page}/>
              <form id='login-form' onSubmit={handleSubmit}>
                {
                  page === 1 ? (
                    <fieldset className='page'>
                      <h2>Create Account</h2>
                      <div className="input-container">
                        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                        <input type="text" placeholder='Confirm Password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                      </div>
                      {error && <p className="error">{error}</p>}
                    </fieldset>
                  ) : page === 2 ? (
                    <fieldset className='page'>
                      <h2>Social Networks</h2>
                      <div className="input-container">
                        <input type="text" placeholder='Instagram' value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                        <input type="text" placeholder='Github' value={github} onChange={(e) => setGithub(e.target.value)} />
                        <input type="text" placeholder='Twitter' value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                      </div>
                      {error && <p className="error">{error}</p>}
                    </fieldset>
                  ) : (
                    <fieldset className='page'>
                      <h2>Personal Info</h2>
                      <div className="input-container">
                        <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <input type="text" placeholder='Phone number' value={phone} onChange={handlePhone} />
                      </div>
                      {error && <p className="error">{error}</p>}
                    </fieldset>
                  )
                }
              </form>
              <div className="btns-container">
                { page > 1 && <button className='btn' type='button' onClick={handleBack}>Back</button> }
                { page < 3 && <button className='btn' type='button' onClick={handleNext}>Next</button> }
                { page === 3 && <button className='btn' type='submit' form='login-form'>Submit</button> }
              </div>
            </>
          )
      }
    </div>
  )
}

export default Form