// @ts-nocheck
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../img/argentBankLogo.png'
import { SignOut } from '../redux/reducer'

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const firstName = useSelector((state) => state.firstName)
  const userIsLoggedIn = useSelector((state) => state.isloggedIn)

  function SignOutUser() {
    dispatch(SignOut())
    navigate('/login')
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!userIsLoggedIn ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        ) : (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i> {firstName}
            </Link>
            <a className="main-nav-item" onClick={SignOutUser}>
              <i className="fa fa-sign-out"></i> Sign Out
            </a>
          </>
        )}
      </div>
    </nav>
  )
}
