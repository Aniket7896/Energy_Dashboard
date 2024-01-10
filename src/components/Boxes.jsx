import I from "../Images/I.svg";
import "./Boxes.css";
const Boxes = () => {
  return (
    <div className="wholeBoxes">
      {/* ===================box1===================== */}
      <div className="boxes">
        <div className="whole-heading-box">
          <div className="heading-box">
            <div className="heading">Current Year Emissions</div>
            <div>
              <img src={I} alt="i-icon" />
            </div>
          </div>
          <p>contribution to Scope3</p>
        </div>
        <div className="inner-box">
          <div>39699 CO2e</div>
          <div>7.6%YOY↑</div>
        </div>
      </div>

      {/* ========================box2================== */}
      <div className="boxes">
        <div className="whole-heading-box">
          <div className="heading-box">
            <div className="heading">Current Year Emissions</div>
            <div>
              <img src={I} alt="i-icon" />
            </div>
          </div>
          <p>contribution to Scope3</p>
        </div>
        <div className="inner-box">
          <div>39699 CO2e</div>
          <div>7.6%YOY↑</div>
        </div>
      </div>
      {/* =============================box3===================== */}
      <div className="boxes">
        <div className="whole-heading-box">
          <div className="heading-box">
            <div className="heading">Current Year Emissions</div>
            <div>
              <img src={I} alt="i-icon" />
            </div>
          </div>
          <p>contribution to Scope3</p>
        </div>
        <div className="inner-box">
          <div>39699 CO2e</div>
          <div>7.6%YOY↑</div>
        </div>
      </div>
      {/* =================heaidng box=================== */}
      <div className="smallBox">
        <p>Total number of reached suppliers</p>
        <h1>143</h1>
      </div>
    </div>
  );
};
export default Boxes;
