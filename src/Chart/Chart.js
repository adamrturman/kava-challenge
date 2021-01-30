import React from "react";
import styles from './Chart.module.css';
import { Line } from "react-chartjs-2";

export default function MyChart(props) {
    const data = {
        labels: [...props.addresses],
        datasets: [
            {
                label: "Shares per delegation",
                data: [...props.amounts],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };
    return (
        <div className={styles.chart}>
            <Line data={data} />
        </div>
    );
}