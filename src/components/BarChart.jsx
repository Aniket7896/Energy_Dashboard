import {Bar} from "react-chartjs-2"
import { Chart as ChartJS } from 'react-chartjs-2';
// import {  } from 'chart.js/auto'; // Updated import for Chart.js version 3

const BarChart = ({chartData}) => {
  return (
    <div className="chart-container">
      <Bar data={chartData} />
    </div>
  );
}
export default BarChart