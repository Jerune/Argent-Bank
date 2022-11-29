// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useLoginUserMutation } from '../hooks/useAPI'
import { signIn } from '../redux/reducer'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const usernameInput = useRef(null)
  const passwordInput = useRef(null)
  const rememberCheckbox = useRef(null)
  const emailInLocalStorage = localStorage.getItem('email')
  const [loginUser, result] = useLoginUserMutation()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

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

  async function handleSubmit(event) {
    event.preventDefault()
    const { data, error } = await loginUser(formData)

    if (data && data.status === 200) {
      handleLocalStorage()
      dispatch(signIn({ ...formData, ...data.body }))
      setFormData({
        email: '',
        password: '',
      })
      navigate('/profile')
    } else if (error.status === 400) {
      const errorMessage = error.data.message
      switch (errorMessage) {
        case 'Error: User not found!':
          usernameInput.current.classList.add('error')
          usernameInput.current.placeholder = errorMessage
          break
        case 'Error: Password is invalid':
          passwordInput.current.classList.add('error')
          passwordInput.current.placeholder = errorMessage
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
