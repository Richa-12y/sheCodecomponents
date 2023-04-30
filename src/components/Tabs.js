import React from "react";
import "./tabs.css";

const Tabs = ({ tabs, handleClick, activeTab, setCurrentTab, children }) => {
  const tabClick = (el, i) => {
    handleClick(el, i);
    setCurrentTab(i);
  };
  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabs.map((el, i) => {
          return (
            <li
              key={i}
              onClick={() => tabClick(el, i)}
              className={activeTab === i ? "tab-active" : "tab"}
            >
              {el.label}
            </li>
          );
        })}
      </ul>
      <div className="tab-content">{children}</div>
    </div>
  );
};

export default Tabs;
