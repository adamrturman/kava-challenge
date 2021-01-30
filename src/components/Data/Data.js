import React from 'react'
import TotalTransactions from '../TotalTransactions/TotalTransactions'
import Median from '../Median/Median'
import Average from '../Average/Average'
import MaxTransaction from '../MaxTransaction/MaxTransaction'
import Chart from '../DataChart/DataChart'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './Data.module.css'

function Data(props) {
    const { data, setShowData } = props;
    
    return (
        <>
            <div className="col-sm-10 col-md-6 mx-auto mt-5">
                <Card className={styles.info}>
                    <Card.Header>Data</Card.Header>
                    <Card.Body>
                        <TotalTransactions data={data}/>
                        <Median data={data} />
                        <Average data={data} />
                        <MaxTransaction data={data} />
                        <Button className={styles.button} onClick={() => setShowData(false)}>Return to Homepage</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-10">
                <Chart data={data} />
            </div>
        </>
    );
}

export default Data;
