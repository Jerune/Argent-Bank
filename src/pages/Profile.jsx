// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function Profile() {
  const firstName = useSelector((state) => state.firstName)
  const lastName = useSelector((state) => state.lastName)
  const userIsLoggedIn = useSelector((state) => state.isloggedIn)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ firstName, lastName })
  const [isEditingDetails, setIsEditingDetails] = useState(false)

  useEffect(() => {
    if (!userIsLoggedIn) navigate('/login')
  }, [userIsLoggedIn])

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  function toggleIsEditingDetails() {
    setIsEditingDetails((prevState) => {
      return !prevState
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        {!isEditingDetails ? (
          <button className="profile-button" onClick={toggleIsEditingDetails}>
            Edit Name
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder={firstName}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder={lastName}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="profile-button" type="submit">
                Save
              </button>
              <button
                className="profile-button"
                onClick={toggleIsEditingDetails}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}
