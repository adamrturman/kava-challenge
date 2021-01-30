import React from "react";
import styles from './DataChart.module.css';
import { Line } from "react-chartjs-2";

function DataChart(props) {

    const { data } = props;

    const addresses = data.map((transaction) => {
        return transaction.delegator_address;
    });

    const amounts = data.map((transaction) => {
        return transaction.shares;
    });

    const info = {
        labels: [...addresses],
        datasets: [
            {
                label: "Shares per delegation",
                data: [...amounts],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };
    return (
        <div className={styles.chart}>
            <Line data={info} />
        </div>
    );
}

export default DataChart;