// @ts-nocheck
import { useEffect, useState } from 'react'

export function useFetch(path, type, data) {
  const [returnData, setReturnData] = useState({})
  const [isLoading, setLoading] = useState(true)

  const baseURL = 'localhost:3001/api/v1'
  const fetchURL = `${baseURL}${path}`

  const setFetchDataByType = () => {
    switch (type) {
      case 'login':
        return {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      case 'profile':
        return {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
          },
        }
      case 'update':
        return {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
          },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
          }),
        }
    }
  }

  useEffect(() => {
    if (!fetchURL) return console.log('Incorrect Fetch Request')
    async function fetchData() {
      const fetchContent = setFetchDataByType()
      const response = await fetch(fetchURL, fetchContent)
      const data = await response.json()
      setReturnData(data)
      setLoading(false)
    }

    setLoading(true)
    fetchData()
  }, [fetchURL])

  return [isLoading, returnData]
}
