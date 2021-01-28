// import React from 'react'
// import { Chart } from 'react-charts'
 
// function MyChart() {
//   const data = React.useMemo(
//     () => [
//       {
//         label: 'Series 1',
//         data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//       },
//       {
//         label: 'Series 2',
//         data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//       }
//     ],
//     []
//   )
 
//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'linear', position: 'bottom' },
//       { type: 'linear', position: 'left' }
//     ],
//     []
//   )
 
// //   const lineChart = (
// //     // A react-chart hyper-responsively and continuously fills the available
// //     // space of its parent element automatically
// //     <div
// //       style={{
// //         width: '400px',
// //         height: '300px'
// //       }}
// //     >
// return(
//       <Chart data={data} axes={axes} />
// //     </div>
// )
// //   )
// }

// export default MyChart

import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function MyChart() {
  return (
    <div className="App">
      <Bar data={data} />
    </div>
  );
}