import React from 'react';

function Median(props) {
    const { data } = props;

    function sortedData(data) {
        const allShares = data.map((transaction) => {
            return transaction.shares
        })
        return allShares.sort((a, b) => a - b);
    }

    function findMedianIndex() {
        return Math.floor(data.length / 2 + 1);
    }

    const sortedTransactions = sortedData(data);
    const medianIndex = findMedianIndex(data);
    const medianTransaction = sortedTransactions[medianIndex];

    return(
        <div>The median value is <span>{medianTransaction}</span> </div>
    )
}

export default Median;