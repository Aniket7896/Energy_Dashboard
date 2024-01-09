// import logo1 from "Images/logo.svg";
import logo from "../Images/logo.svg";
import dropDown from "../Images/dropDown.svg";
import settingIcon from "../Images/settingIcon.svg";
import "../components/Sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebox">
        <div className="logo-box">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="first">
          <div className="text">Data-in</div>
          <div className="energy-box">
            <img src={settingIcon} alt="settingIcon" />
            <div className="energy">Energy</div>
            <img src={dropDown} alt="dropdown" />

            <div></div>
          </div>
          <div></div>
        </div>
        <div className="second">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Sidebar;
