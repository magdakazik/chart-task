import {useState, useEffect, useCallback} from 'react'
import './App.css';
import MyChart from './components/Chart'

const SAMPLE_DATA = [
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 16
  },
  {
      "dt": 1707465601,
      "price": 109.1,
      "amount": 11
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 20
  },
  {
      "dt": 1707465602,
      "price": 109.1,
      "amount": 6
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 2
  },
  {
      "dt": 1707465603,
      "price": 109.1,
      "amount": 22
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 12
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 3
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 17
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 10
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 1
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 7
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 15
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 91
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 52
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 72
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 27
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 100
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 91
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 14
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 10
  },
  {
      "dt": 1707465600,
      "price": 109.1,
      "amount": 27
  }
]

function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try{
      const response = await fetch('https://rest.statica.pl/rest/stockquotes/gpw:PLKGHM000017?type=trades&dt_from=2010-01-01&limit=10000', {
        method: 'GET',
        headers: {
          'Authorization': 'Basic',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: 'frontend2024',
          password: 'test'
        })
      })

      const data = await response.json()

      if(!response.ok){
        throw new Error('Something went wrong!')
      }

      const loadedData = []

      for(const key in data){
        loadedData.push({
          id: key,
          dt: data[key].dt,
          price: data[key].price,
          amount: data[key].amount
        })
      }
      console.log('data: ', data)
      setData(loadedData)
      setIsLoading(false)
    } catch(error){
      setError(error.message)
    }
    setIsLoading(false)
  },[])

  useEffect(() => {
    fetchDataHandler()
  },[fetchDataHandler])

  return (
    <div className="App">
      <MyChart data={SAMPLE_DATA}/>
      
    </div>
  );
}

export default App;
