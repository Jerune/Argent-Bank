// @ts-nocheck
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../img/argentBankLogo.png'
import { logOut } from '../redux/reducer'

export default function HeaderNav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const firstName = useSelector((state) => state.firstName)

  function SignOutUser() {
    dispatch(logOut())
    navigate('/login')
  }

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i> {firstName}
        </Link>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
        <a className="main-nav-item" onClick={SignOutUser}>
          <i className="fa fa-sign-out"></i> Sign Out
        </a>
      </div>
    </nav>
  )
}
