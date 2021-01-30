import React from 'react';

function Average(props) {
    const { data } = props;
    
    function sum(data) {
        let total = 0
        data.forEach((transaction) => {
            total += parseInt(transaction.shares)
        })
        return total;
    }
    
    const totalTransactions = data.length;
    const averageTransaction = sum(data) / totalTransactions;
    
    return (
        <div>
            The average value of all transactions is <span>{averageTransaction}</span>
        </div>
    )
}

export default Average;