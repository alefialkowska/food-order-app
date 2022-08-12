import { useState, useEffect } from 'react'

const useFetch = url => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response =>response.json())
            .then(responseData => setMeals(responseData))
            .catch(err => {
                setError(err)
                setMeals([])
            })
            .finally(setLoading(false)
            )

    }, [url])

    return { meals, error, loading }
}
 
export default useFetch;