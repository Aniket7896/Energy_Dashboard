import "./Sidebar.css";
import logo from "../Images/logo.svg";
import dropDown from "../Images/dropDown.svg";
import settingIcon from "../Images/settingIcon.svg";
import waterIcon from "../Images/waterIcon.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebox" >
        <div className="logo-box">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="boxes1"> 
          <div className="first">
            <div className="text">Data-in</div>
            <div className="energy-box">
              <div>
                <img src={settingIcon} alt="settingIcon" />
              </div>
              <div className="energy">Energy</div>
              <div>
                <img src={dropDown} alt="dropdown" />
              </div>
            </div>
          </div>
          <div className="second">
            <div>
              <img src={waterIcon} alt="waterIcon" />
            </div>
            <div>Water and Effluents</div>
            <div>
              <img src={dropDown} alt="dropdown" />
            </div>
          </div>
        </div>
        <div className="boxes2">

        </div>
      </div>
    </div>
  );
};
export default Sidebar;
