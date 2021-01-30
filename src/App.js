import styles from './App.module.css';
import { fetchData } from './services/dataService';
import React, { useState } from 'react';
import Landing from './Landing/Landing';
import Data from './Data/Data';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

function App() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayData = () => {
    setLoading(true);
    fetchData()
      .then(({ data }) => {
        setData(data.app_state.staking.delegations);
        setShowData(true);
        setLoading(false);
      });
  }

  if(!showData) {
    return (
      <div className={styles.App}>
        <Landing display={displayData} />
        {loading && <LoadingSpinner />}
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Data setShowData={setShowData} data={data} />
    </div>
  );
}

export default App;
