import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto"; 

const PieChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Pie data={chartData} />
    </div>
  );
};
export default PieChart;
