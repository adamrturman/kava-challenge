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
 const sortedTransactions = sortedData(data)
 const sumTransactions = sum(data)

 function sortedData(data){
   const allShares = data.map((transaction)=> {
     return transaction.shares
   })
   return allShares.sort((a,b) => a-b)
 }

 function sum(data) {
  const allAmounts = data.map((transaction)=> {
    return transaction.shares
  })
  let total = 0
  for (let i=0; i< allAmounts.length; i++) {
    total += parseInt(allAmounts[i])
  }
  return total
}

  const mappedData = data.map((transaction) => (
    <li>Delegator address: {transaction.delegator_address} has {transaction.shares} shares</li>
  ))

  const mappedSortedData = sortedTransactions.map((transaction)=> (
    <li>{transaction}</li>
  ))
 

  return (
    <div className="App">
      <button onClick={handleClick}>Hello</button>
      <div>There are {totalTransactions} total transactions</div>
      <div>The median transaction is the index {medianTransaction}</div>
      <div>The median value is {mappedSortedData[medianTransaction]}</div>
      <div>The sum of all transactions is {sumTransactions}</div>
      {/* <div>Sorted Transactions: {mappedSortedData}</div> */}
      {/* <div>{mappedData}</div> */}
    </div>
  );
}

export default App;
