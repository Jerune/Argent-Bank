// @ts-nocheck
import { useEffect, useState } from 'react'

export function useFetch(path, type, data) {
  const [returnData, setReturnData] = useState({})
  const [isLoading, setLoading] = useState(true)

  const baseURL = 'http://localhost:3001/api/v1'
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
    if (!fetchURL) return console.log('Incorrect Fetch URL')
    async function fetchData() {
      const fetchContent = setFetchDataByType()
      console.log('Fetch URL', fetchURL)
      console.log('Fetch Content', fetchContent)
      const response = await fetch(fetchURL, fetchContent)
      const data = await response.json()
      console.log(data)
      setReturnData(data)
      setLoading(false)
    }

    setLoading(true)
    fetchData()
  }, [fetchURL])

  return [isLoading, returnData]
}
