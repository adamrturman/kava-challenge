import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  const handleClick = (event)=> {
    console.log("click")
    fetch("https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-20210122.json")
    .then((response) => response.json())
    .then((data)=> setData(data.validators))
  }

  console.log(data)
  // console.log(typeof data)

  const mappedData = data.map((transaction) => (
    <li>{transaction.name}</li>
  ))

  return (
    <div className="App">
      <button onClick={handleClick}>Hello</button>
      {mappedData}
    </div>
  );
}

export default App;
