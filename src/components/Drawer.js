import React from "react";
import style from "./drawer.module.css";
import { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { GrFolderCycle } from "react-icons/gr";
const Drawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const drawerData = [
    { icon: <AiOutlineMail size={"1.3rem"} />, text: "Inbox" },
    { icon: <AiTwotoneMail size={"1.3rem"} />, text: "Starred" },
    { icon: <AiOutlineMail size={"1.3rem"} />, text: "Send email" },
    { icon: <AiTwotoneMail size={"1.3rem"} />, text: " Drafts" },
  ];

  const drawerDataSeconds = [
    { icon: <AiOutlineMail size={"1.3rem"} />, text: "All mail" },
    { icon: <MdDelete size={"1.3rem"} />, text: "Trash" },
    { icon: <GrFolderCycle size={"1.3rem"} />, text: "Spam" },
  ];
  return (
    <div className={style["drawer_box_container"]}>
      <div className={style["button_container"]}>
        <button onClick={handleOpen}>Rigth</button>
      </div>
      {open && (
        <div
          className={style["drawer_box"]}
          open={open}
          onClick={() => setOpen(false)}
        >
          <GiCancel
            onClick={() => setOpen(false)}
            className={style["cancle_button"]}
          />
          <div className={style["drawer_body"]}>
            <div className={style["drawer_header"]}>
              <div className={style["drawer_header_button_container"]}>
                {drawerData.map((el, i) => {
                  return (
                    <div className={style["drawer_container_text"]} key={i}>
                      <div>
                        {el.icon} {el.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr></hr>
            <div className={style["drawer_footer"]}>
              <div className={style["drawer_footer_button_container"]}>
                {drawerDataSeconds.map((e, index) => {
                  return (
                    <div
                      className={style["drawer_footer_container_text"]}
                      key={index}
                    >
                      <div>
                        {e.icon} {e.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
