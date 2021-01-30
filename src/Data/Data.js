import React from 'react'
import Chart from '../Chart/Chart'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './Data.module.css'

function Data(props) {
    const { data, setShowData } = props;

    const totalTransactions = countTransactions(data);
    const medianTransaction = median(data);
    // const medianTransaction = quickselectMedian(data)
    const sortedTransactions = sortedData(data);
    // const largestTransaction = maxTransaction(sortedTransactions)
    const largestTransaction = maxTransaction(data);
    const maxInvestor = findInvestor(data, largestTransaction);
    const averageTransaction = sum(data) / totalTransactions;
    
    const addresses = data.map((transaction) => {
        return transaction.delegator_address
    });

    const amounts = data.map((transaction) => {
        return transaction.shares
    });

    const mappedSortedData = sortedTransactions.map((transaction) => {
        return transaction
    });

    function countTransactions(data) {
        return data.length
    }

    function median() {
        return Math.floor(totalTransactions / 2 + 1)
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
        });

        return Math.max(...allShares);
    }

    function sum(data) {
        let total = 0
        data.forEach((transaction) => {
            total += parseInt(transaction.shares)
        })
        return total
    }

    function findInvestor(data, amount) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].shares === amount) {
                return data[i].delegator_address
            }
        }
    }

    return (
        <>
            <div className="col-sm-10 col-md-6 mx-auto mt-5">
                <Card className={styles.info}>
                    <Card.Header>Data</Card.Header>
                    <Card.Body>
                        <div>There are <span>{totalTransactions}</span> total transactions</div>
                        <div>The median value is <span>{mappedSortedData[medianTransaction]}</span> </div>
                        <div>The average value of all transactions is <span>{averageTransaction}</span></div>
                        <div>The maximum transaction value is <span>{largestTransaction}</span><br /> and was made by <span>{maxInvestor}</span></div>
                        <Button className={styles.button} onClick={() => setShowData(false)}>Return to Homepage</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-10">
                <Chart addresses={addresses} amounts={amounts} />
            </div>
        </>
    );
}

export default Data;
