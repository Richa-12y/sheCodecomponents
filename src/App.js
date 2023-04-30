import React from "react";
import { useState } from "react";
import Modal from "./components/Modal";

import Drawer from "./components/Drawer";

import "./App.css";
import Pagination from "./components/Pagination";
import Tabs from "./components/Tabs";
import Counter from "./components/Counter";
import Form from "./Form";

function App() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 150;
  const tabData = ["item1", "item2", "item3"];
  const tabs = [
    {
      label: "Tab 1",
      // content: <p>Tab 1 content</p>,
    },
    {
      label: "Tab 2",
      // content: <p>Tab 2 content</p>,
    },
    {
      label: "Tab 3",
      // content: <p>Tab 3 content</p>,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  // const [data, setData] = useState("");
  const handleClick = (livalue, liindex) => {
    console.log(liindex);
    console.log(livalue);
    setActiveTab(liindex);
    // setData(livalue);
  };
  // const [currentTab, setCurrentTab] = useState(0);
  // const [inputData, setInputData] = useState("");
  // const [incementData, setIncementData] = useState(0);

  const [inputFiledData, setInputFiledData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Contact: "",
    Address: "",
    Sex: "",
  });

  const [userDetails, setUserDetails] = useState([]);

  const handleChangeFname = (ele, type) => {
    console.log(ele);
    // console.log({ ...inputFiledData, FirstName: e.target.value });
    setInputFiledData((p) => ({ ...p, [type]: ele.target.value }));
  };

  const handleOpation = (e) => {
    // console.log({ e.target.value });
    setInputFiledData((p) => ({ ...p, Sex: e.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log([...userDetails,inputFiledData]);
    setUserDetails([...userDetails, inputFiledData]);
  };
  console.log(inputFiledData);
  console.log(userDetails);
  const optaionData = ["Female", "Male", "Other"];

  return (
    <div className="app">
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      /> */}
      {/* <Modal open={open} setOpen={setOpen}>
        <div>Hello</div>
      </Modal>
      <button className="modal-button" onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <Drawer /> */}
      {/* <Tabs
        tabs={tabs}
        handleClick={handleClick}
        activeTab={activeTab}
        setCurrentTab={setCurrentTab}
      >
        <p>Tab {currentTab} content</p>
      </Tabs> */}
      {/* <Counter
        incementData={incementData}
        setIncementData={setIncementData}
        setInputData={setInputData}
        inputData={inputData}
      <Form
        handleSubmit={handleSubmit}
        inputFiledData={inputFiledData}
        handleChangeFname={handleChangeFname}
        handleOpation={handleOpation}
        optaionData={optaionData}
        userDetails={userDetails}
      />
      /> */}
      {/* <div>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </div> */}
    </div>
  );
}

export default App;
