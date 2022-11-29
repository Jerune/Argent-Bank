// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useGetProfileMutation, useSetProfileMutation } from '../hooks/useAPI'
import { changeUserData } from '../redux/reducer'

export default function Profile() {
  const dispatch = useDispatch()
  const store = useStore()
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const [getUserData, userGetResult] = useGetProfileMutation()
  const [setUserData, userSetResult] = useSetProfileMutation()
  const [formData, setFormData] = useState({ firstName, lastName })
  const [isEditingDetails, setIsEditingDetails] = useState(false)

  useEffect(() => {
    if (!isEditingDetails) {
      async function getFirstAndLastName() {
        const { data, error } = await getUserData()
        if (data && data.status === 200) {
          dispatch(changeUserData({ ...data.body }))
        }
      }
      getFirstAndLastName()
    }
  }, [isEditingDetails])

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
    setFormData({ firstName, lastName })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const { data, error } = await setUserData({ ...formData })

    if (data && data.status === 200) {
      dispatch(changeUserData(data.body))
      toggleIsEditingDetails()
    } else {
      console.log(error.data.message)
    }
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {!isEditingDetails &&
            firstName &&
            lastName &&
            `${firstName} ${lastName}!`}
        </h1>
        {!isEditingDetails ? (
          <button className="profile-button" onClick={toggleIsEditingDetails}>
            Edit Name
          </button>
        ) : (
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="input-wrapper profile-inputs">
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
            <div className="input-wrapper profile-inputs">
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
