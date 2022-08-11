import { useState } from 'react';

const useFetchData = (url) => {

    const [data, setData] = useState('');
    const [louding, setLouding] = useState(true);
    const [error, setError]= useState(false);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        setData(data)
        setError(false)
    })
    .catch(err => {
        setError(error);
        console.log(error)
    })
    .finally(setLouding(false))

    return {
        data,
        louding,
        error,
    }
}
 
export default useFetchData ;