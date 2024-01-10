import "./Sidebar.css";
import logo from "../Images/logo.svg";
import dropDown from "../Images/dropDown.svg";
import settingIcon from "../Images/settingIcon.svg";
import waterIcon from "../Images/waterIcon.svg";
import Waste from "../Images/Waste.svg";
const Sidebar = () => {
  return (
    // <div>
    //   <div className="sidebox">
    //     <div className="logo-box">
    //       <div className="logo">
    //         <img src={logo} alt="logo" />
    //       </div>
    //     </div>
    //     <div className="boxes1">
    //       <div className="first">
    //         <div className="text">Data-in</div>
    //       </div>
    //       <div className="">
    //         <div className="energy-box">
    //           <div>
    //             <img src={settingIcon} alt="settingIcon" />
    //           </div>
    //           <div className="energy">Energy</div>
    //           <div>
    //             <img src={dropDown} alt="dropdown" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="second">
    //         <div>
    //           <img src={waterIcon} alt="waterIcon" />
    //         </div>
    //         <div>Water and Effluents</div>
    //         <div>
    //           <img src={dropDown} alt="dropdown" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="boxes2">
    //       <div className="box2-first">
    //         <div className="text">Analyze</div>
    //       </div>
    //       <div className="energy-box">
    //         <div>
    //           <img src={settingIcon} alt="settingIcon" />
    //         </div>
    //         <div className="energy">Energy</div>
    //       </div>
    //       <div className="wasteBox">
    //         <div>
    //           <img src={Waste} alt="watebox" />
    //         </div>
    //         <div>Waste</div>
    //       </div>
    //     </div>
    //     <div className="btn">
    //       <button>Open Help Center</button>
    //     </div>
    //   </div>
    // </div>

    <div className="sideBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* =====================================first======================= */}
      <div className="firstBox">
        <div className="text">DATA-IN</div>
        <div className="energy-level">
          <div>
            <img src={settingIcon} alt="setting" />
          </div>
          <div className="texts">Energy</div>
          <div>
            <img src={dropDown} alt="dorpdown" />
          </div>
        </div>
        <div className="water-level">
          <div>
            <img src={waterIcon} alt="water" />
          </div>
          <div className="texts">Water and Effluents</div>
          <div>
            <img src={dropDown} alt="dorpdown" />
          </div>
        </div>
      </div>
      {/* ===============================second=========================== */}
      <div className="secondBox">
        <div className="text">ANALYZE</div>
        <div className="energy-boxes">
          <div>
            <img src={settingIcon} alt="setting" />
          </div>
          <div className="texts">Energy</div>
        </div>
        <div className="wasteBoxes">
          <div>
            <img src={Waste} alt="waste" />
          </div>
          <div className="texts">Waste</div>
        </div>
      </div>
      {/* ===============third=================== */}
      <div className="thirdBox">
        <button>Open Help Center</button>
      </div>
    </div>
  );
};
export default Sidebar;
