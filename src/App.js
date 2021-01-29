import styles from './App.module.css';
import React, { useState } from 'react'
import MyChart from './Chart/Chart'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import logo from './img/Kava-logo.svg'


function App() {
  const [data, setData] = useState([])
  const [showData, setShowData] = useState(false)



  const displayData = (event) => {
    fetch("https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-20210122.json")
      .then((response) => response.json())
      .then((data) => setData(data.app_state.staking.delegations))
      .then(setShowData(true))
  }

  const totalTransactions = countTransactions(data)
  const medianTransaction = median(data)
  const sortedTransactions = sortedData(data)
  const largestTransaction = maxTransaction(sortedTransactions)
  const maxInvestor = findInvestor(data, largestTransaction)
  const averageTransaction = sum(data) / totalTransactions
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
    return Math.floor(totalTransactions / 2 + 1)
  }

  function sortedData(data) {
    const allShares = data.map((transaction) => {
      return transaction.shares
    })
    return allShares.sort((a, b) => a - b)
  }

  function maxTransaction(sortedData) {
    return sortedData[sortedData.length - 1]
  }

  function sum(data) {
    let total = 0
    const allAmounts = data.forEach((transaction) => {
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
    <div className={styles.App}>
      <div className="col-sm-10 col-md-6 mx-auto mt-5">
        <Card className={styles.info}>
          <Card.Body>
            <h1 className={styles.heading}><img src={logo} alt="logo" /></h1>
            <Button className={styles.button} onClick={displayData}>Render Data</Button>
          </Card.Body>
        </Card>
      </div>
      {showData ?
        <div>
          <div className="col-sm-10 col-md-6 mx-auto mt-5">
            <Card className={styles.info}>
              <Card.Header>Data</Card.Header>
              <Card.Body>
                <div>There are <span>{totalTransactions}</span> total transactions</div>
                <div>The median value is <span>{mappedSortedData[medianTransaction]}</span> </div>
                <div>The average value of all transactions is <span>{averageTransaction}</span></div>
                <div>The maximum transaction value is <span>{largestTransaction}</span><br /> and was made by <span>{maxInvestor}</span></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-10">
            <MyChart addresses={addresses} amounts={amounts} />
          </div>
        </div>
        : null}
    </div>
  );
}

export default App;
