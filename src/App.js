import React from "react";
import { useState } from "react";
import Modal from "./components/Modal";

import Drawer from "./components/Drawer";

import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 150;

  return (
    <div className="app">
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
      {/* <Modal open={open} setOpen={setOpen}>
        <div>Hello</div>
      </Modal>
      <button className="modal-button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <Drawer /> */}
    </div>
  );
}

export default App;
