import React from "react";
import style from "./modal.module.css";

const Modal = ({ open, setOpen, children }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const parentClick = (e) => {
    if (e.currentTarget !== e.target) return;
    console.log(e.isPropagationStopped());
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div
          className={style["modal_box_container"]}
          onClick={(e) => parentClick(e)}
        >
          <div className={style["modal_container"]} open={open}>
            <div>{children}</div>
            <button
              className={style["modal-close-button"]}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
/**
 * you can write terniory operator as well
 * {open==0?"":<div>container</div>}
 * but here is the only one contion so i used ?? opertor
 * i used useState in that hold the value [open,setOpen]
 * create on click for handleOpen when user click on that model get open initialy we set false when it open we can put setOpen(true)
 */
