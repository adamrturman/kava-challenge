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
        data.forEach(transaction => {
            if (parseInt(transaction.shares) === amount){
                return transaction.delegator_address;
            }
        })
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