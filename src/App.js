
import { useEffect, useState } from 'react';
import './App.css'
import Table from "./Table";

function App() {
  const [coinData, setCoinData] = useState([])
  const [data, setData] = useState([])

  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false

  const handleCoinFetch = async function(){
    let res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    const data = await res.json()

    console.log(data)

    setCoinData(data)
    setData(data.slice(0, 20))
  }

  const handleData = function(){
    let dataLength  = coinData.length;

    const startIdx = data.length;
    const next = startIdx + 20
    const endIdx = next > dataLength? dataLength : startIdx + 20

    const formattedData = coinData.slice(startIdx, endIdx)

    console.log(data)
    setData([...data, ...formattedData])
  }

  useEffect(() => handleCoinFetch,[])

  return(
    <div className="App">
      <Table coinData={data}/>
      <button onClick={handleData}>Add</button>
    </div>
  )
  }


export default App;