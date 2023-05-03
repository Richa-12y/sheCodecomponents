import React from "react";
import "./basicspeeddial.css";
import { GrAdd } from "react-icons/gr";

const Basicspeeddial = ({
  setOpenbutton,
  openbutton,
  actions,
  tooltipbuttonname,
  hodleNamedata,
  setTooltipbuttonname,
  handleSpeedButton,
}) => {
  return (
    <div
      className="basicspeeddial_container"
      onMouseLeave={() => setOpenbutton(false)}
    >
      {openbutton && (
        <>
          {actions.map((el, i) => {
            console.log(el, i);
            return (
              <div className="button_parent_container">
                {tooltipbuttonname === el.name && (
                  <div className="tooltip">{el.name}</div>
                )}
                <div
                  key={i}
                  className="button_icon_container"
                  onMouseEnter={() => hodleNamedata(el)}
                  onMouseLeave={() => setTooltipbuttonname("")}
                >
                  {el.icon}
                </div>
              </div>
            );
          })}
        </>
      )}

      <button className="speeddial_button" onMouseEnter={handleSpeedButton}>
        <GrAdd
          className={openbutton ? "routerclass" : "addicon"}
          size={"1.5rem"}
          color="white"
        />
      </button>
    </div>
  );
};

export default Basicspeeddial;
