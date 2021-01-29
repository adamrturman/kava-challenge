import './App.css';
import React, { useState } from 'react'
import MyChart from './Chart/Chart'


function App() {
  const [data, setData] = useState([])
  const [showData, setShowData] = useState(false)



  const handleClick = (event) => {
    fetch("https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-20210122.json")
      .then((response) => response.json())
      .then((data) => setData(data.app_state.staking.delegations))
      .then(setShowData(true))
  }

  const totalTransactions = countTransactions(data)
  const medianTransaction = median(data)
  const largestTransaction = maxTransaction(data)
  const maxInvestor = findInvestor(data, largestTransaction)
  const sortedTransactions = sortedData(data)
  const averageTransaction = sum(data) / countTransactions(data)
  const addresses = data.map((transaction) => {
    return transaction.delegator_address
  })

  const amounts = data.map((transaction) => {
    return transaction.shares
  })

  const mappedSortedData = sortedTransactions.map((transaction) => {
    return transaction
  })

  function countTransactions(data) {
    return data.length
  }

  function median(data) {
    return Math.floor(data.length / 2 + 1)
  }

  function sortedData(data) {
    const allShares = data.map((transaction) => {
      return transaction.shares
    })
    return allShares.sort((a, b) => a - b)
  }

  function maxTransaction(data) {
    const allShares = data.map((transaction) => {
      return transaction.shares
    })
    return Math.max(...allShares)
  }

  function sum(data) {
    let total = 0
    const allAmounts = data.forEach((transaction)=> {
        total += parseInt(transaction.shares)
    })
    return total
  }

  function findInvestor(data, amount) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].shares == amount) {
        return data[i].delegator_address
      }
    }
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Render Data</button>
      {showData ?
        <div>
          <div>There are {totalTransactions} total transactions</div>
          <div>The median value is {mappedSortedData[medianTransaction]}</div>
          <div>The average of all transactions is {averageTransaction}</div>
          <div>The maximum transaction is {largestTransaction} made by {maxInvestor}</div>
          <MyChart addresses={addresses} amounts={amounts} />
        </div>
        : null}
    </div>
  );
}

export default App;
