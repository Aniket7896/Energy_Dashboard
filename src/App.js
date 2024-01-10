import './App.css';
import Boxes from './components/Boxes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BarChart from './components/BarChart';
import userdata from './Data';
import { useState } from 'react';

function App() {
  


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec'];
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: " Emissions(in CO2e)",
        data: userdata.map((data) =>
          data["Emissions(in CO2e)"]
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Revenue (in INR)",
        data: userdata.map((data) =>
          data["Revenue (in INR)"]
        ),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: " R / E",
        data: userdata.map((data) => data["R/E"]),
        backgroundColor: "rgb(255, 255, 0)",
      },
    ],
  });

// =========================options=========================

//  const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };


  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="content-container">
          <Navbar />
          <div className="page">
            <Boxes />
            <BarChart chartData={data}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
