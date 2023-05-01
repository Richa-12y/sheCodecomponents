import React from "react";
import "./navbar.css";
import { useMediaQuery } from "@react-hook/media-query";
import { AiOutlineHome } from "react-icons/ai"; //FiSettings//AiFillCloseCircle
import { FiSettings } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai"; //AiOutlineMenu
import { AiOutlineMenu } from "react-icons/ai"; //AiOutlineMenu

const Navbar = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  const [opennav, setOpennav] = React.useState(false);

  const handelNavClick = () => {
    setOpennav(true);
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="navbar_conatiner">
            <nav className="nav_conatiner">
              <div>sheCode</div>

              <div className="setting-container">
                {!opennav && <AiOutlineMenu onClick={handelNavClick} />}
              </div>
            </nav>
          </div>
          {opennav && (
            <div className="mobile_drwer">
              <div className="close_icon">
                <AiFillCloseCircle
                  size={"2rem"}
                  onClick={() => setOpennav(false)}
                />
              </div>
              <div className="small-nav-container">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Settings</div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="navbar_conatiner">
            <nav className="nav_conatiner">
              <ul>
                <li>sheCode</li>
                <li>
                  {" "}
                  <AiOutlineHome />
                  Home
                </li>
                <li>
                  <select className="home_selecter">
                    <option>About</option>
                    <option disabled>──────────</option>
                    <option>Company</option>
                    <option disabled>──────────</option>
                    <option>Team</option>
                    <option>— History</option>
                    <option disabled>──────────</option>
                    <option>VIDEO</option>
                  </select>
                </li>
                <li>
                  <select className="conatct_selecter">
                    <optgroup label="Australia">
                      <option value="sydney"> Contact</option>
                      <option value="melbourne">Melbourne</option>
                      <option value="brisbane">Brisbane</option>
                    </optgroup>
                    <optgroup label="New Zealand">
                      <option value="auckland">Auckland</option>
                      <option value="dunedin">Dunedin</option>
                      <option value="nelson">Nelson</option>
                    </optgroup>
                    <optgroup label="Thailand">
                      <option value="bangkok">Bangkok</option>
                      <option value="chiang-mai">Chiang Mai</option>
                      <option value="pattaya">Pattaya</option>
                    </optgroup>
                  </select>
                </li>
              </ul>
              <div className="setting-container">
                <FiSettings />
                Setting
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
