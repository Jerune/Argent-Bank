// @ts-nocheck
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { logIn } from '../redux/reducer'
import { verifyIfDataExistsInDatabase } from '../utils/verifyFormData'

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usernameInput = useRef(null)
  const passwordInput = useRef(null)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const isDataCorrect = await verifyIfDataExistsInDatabase(formData)
    if (isDataCorrect.success) {
      await dispatch(logIn(formData))
      navigate('profile')
    } else {
      const inputFieldWithError = isDataCorrect.errorLocation
      inputFieldWithError.current.className.add('error')
      inputFieldWithError.current.placeholder = isDataCorrect.error
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              name="username"
              ref={usernameInput}
              onChange={handleChange}
              value={formData.username}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordInput}
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onSubmit={handleSubmit}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
