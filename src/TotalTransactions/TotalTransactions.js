import React from 'react';

function TotalTransactions (props) {
    const { data } = props;
    function countTransactions(data) {
        return data.length
    }
    const totalTransactions = countTransactions(data);
    return (
        <div>
            There are <span>{totalTransactions}</span> total transactions
        </div>
    )
}

export default TotalTransactions