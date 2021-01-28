import React from "react";
import { Line } from "react-chartjs-2";



export default function MyChart(props) {
    console.log("props in chart", props)
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
    <div className="App">
      <Line data={data} />
    </div>
  );
}