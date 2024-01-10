import "./Navbar.css"
import Photo from "../Images/Photo.svg";
import bell from "../Images/bell.svg";
import downArrow from "../Images/downArrow.svg"
import groupIcon from "../Images/groupIcon.svg"
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbox1">
        <div className="logo1">
          <img src={groupIcon} alt="group" />
        </div>
        <div>Category-1</div>
      </div>
      {/* ================================navbox2=========================== */}
      <div className="navbox2">
        <div>
          <img src={Photo} alt="pic" />
        </div>
        <div>
          <img src={downArrow} alt="dropdown" />
        </div>
        <div>
          <img src={bell} alt="bellIcon" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
