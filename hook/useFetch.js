import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: { ...query },
		headers: {
			'X-RapidAPI-Key': '85427f0a92msh8dbd8a39a3717e3p144723jsn21d32dfec210',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
		}
	}
	const fetchData = async () => {
		setIsLoading(true)
		try {
			const response = await axios.request(options)
			setData(response.data.data)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			alert('There is an error')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])
	const refetch = () => {
		setIsLoading(true)
		fetchData()
	}

	return { data, isLoading, error, refetch }
}
export default useFetch
