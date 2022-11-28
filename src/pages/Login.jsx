// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { SignIn } from '../redux/reducer'
import { verifyIfDataExistsInDatabase } from '../utils/verifyFormData'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usernameInput = useRef(null)
  const passwordInput = useRef(null)
  const rememberCheckbox = useRef(null)
  const userIsLoggedIn = useSelector((state) => state.isloggedIn)
  const emailInLocalStorage = localStorage.getItem('email')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (userIsLoggedIn) {
      navigate('/profile')
    }
  }, [userIsLoggedIn])

  useEffect(() => {
    if (emailInLocalStorage) {
      setFormData({
        email: emailInLocalStorage,
        password: '',
      })
    }
  }, [])

  function resetErrorState() {
    if (usernameInput.current.classList.contains('error')) {
      usernameInput.current.classList.remove('error')
      usernameInput.current.placeholder = ''
    } else if (passwordInput.current.classList.contains('error')) {
      passwordInput.current.classList.remove('error')
      passwordInput.current.placeholder = ''
    }
  }

  function handleChange(event) {
    resetErrorState()
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  function handleLocalStorage() {
    if (rememberCheckbox.current.checked) {
      localStorage.setItem('email', formData.email)
    } else {
      if (emailInLocalStorage) {
        localStorage.clear()
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const isDataCorrect = verifyIfDataExistsInDatabase(formData)
    if (isDataCorrect.success) {
      handleLocalStorage()
      dispatch(SignIn(formData))
      setFormData({
        email: '',
        password: '',
      })
      navigate('/profile')
    } else {
      switch (isDataCorrect.errorLocation) {
        case 'usernameInput':
          usernameInput.current.classList.add('error')
          usernameInput.current.placeholder = isDataCorrect.error
          break
        case 'passwordInput':
          passwordInput.current.classList.add('error')
          passwordInput.current.placeholder = isDataCorrect.error
          break
        default:
          null
      }
      setFormData({
        email: '',
        password: '',
      })
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              id="email"
              name="email"
              ref={usernameInput}
              placeholder=""
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordInput}
              placeholder=""
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" ref={rememberCheckbox} id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}