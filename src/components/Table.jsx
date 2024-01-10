import './Table.css'
import userdata from "../Data"
const Table = () => {
     const data = userdata.filter((data) => data.Year === 2023);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SUPPLIER</th>
            <th>YEAR</th>
            <th>EMISSION(in CO2e)</th>
            <th>YOY(R/E Change)</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.Supplier}</td>
              <td>{data.Year}</td>
              <td>{data["Emissions(in CO2e)"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table