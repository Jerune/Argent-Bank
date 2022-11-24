// @ts-nocheck
import React from 'react'
import logo from '../img/argentBankLogo.png'

export default function HeaderNav() {
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
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i> Tony
        </a>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i> Sign In
        </a>
        <a className="main-nav-item" href="./index.html">
          <i className="fa fa-sign-out"></i> Sign Out
        </a>
      </div>
    </nav>
  )
}
