import React from 'react';

function MaxTransaction(props) {
    const { data } = props;

    function maxTransaction(data) {
        const allShares = data.map((transaction) => {
            return transaction.shares
        });

        return Math.max(...allShares);
    }

    function findInvestor(data, amount) {
        for (let i = 0; i < data.length; i++) {
            if (parseInt(data[i].shares) === amount) {
                return data[i].delegator_address
            }
        }
    }

    const largestTransaction = maxTransaction(data);
    const maxInvestor = findInvestor(data, largestTransaction);

    return (
        <div>
            The maximum transaction value is <span>{largestTransaction}</span><br /> 
            and was made by <span>{maxInvestor}</span>
        </div>
    )
}

export default MaxTransaction;