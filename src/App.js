import styles from './App.module.css';
import axios from 'axios'
import React, { useState } from 'react'
import Landing from './Landing/Landing'
import Data from './Data/Data'
import LoadingSpinner from './LoadingSpinner/LoadingSpinner'

function App() {
  const [data, setData] = useState([])
  const [showData, setShowData] = useState(false)
  const [loading, setLoading] = useState(false)


  const displayData = (event) => {
    setLoading(true)
    axios.get("https://ipfs.io/ipfs/QmbZiEejjAmdEmtF71WLPuY3dwkeMPCmcVxaj7N8aH56Zw/kava-4-export-20210122.json")
      .then(({ data }) => {
        setData(data.app_state.staking.delegations)
        setShowData(true)
        setLoading(false)
      })
  }

  return (
    <div className={styles.App}>
      <Landing display={displayData} showData={showData} />
      {loading ?
        <LoadingSpinner />
        : null}
      <Data setShowData={setShowData} showData={showData} data={data} />
    </div>
  );
}

export default App;
