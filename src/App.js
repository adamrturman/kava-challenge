import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)

  const totalTransctions = function(array) {
    return array.length;
  }

  const handleClick = (event)=> {
    console.log("click")
    fetch("https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-20210122.json")
    .then((response) => response.json())
    .then((data)=> setData(data.app_state.staking.delegations))
  }

  function sum(data) {
    return data.length
  }

  function median(data) {
    return Math.floor(data.length/2)
  }

 const totalTransactions = sum(data)
 const medianTransaction = median(data)

  const mappedData = data.map((transaction) => (
    <li>Delegator address: {transaction.delegator_address} has {transaction.shares} shares</li>
  ))
 

  return (
    <div className="App">
      <button onClick={handleClick}>Hello</button>
      <div>There are {totalTransactions} transactions</div>
      <div>The median transaction is the index {medianTransaction}</div>
      <div>{mappedData}</div>
    </div>
  );
}

export default App;
