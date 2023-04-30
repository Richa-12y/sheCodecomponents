import React from "react";
import "./counter.css";

const Counter = ({
  incementData,
  setIncementData,
  setInputData,
  inputData,
}) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setInputData("");
    } else {
      setInputData(+e.target.value);
    }
  };

  const handleClickButton = () => {
    console.log(inputData);
    if (!inputData) {
      setIncementData((prevData) => prevData + 1);
    } else {
      setIncementData((prevData) => prevData + inputData);
    }
  };
  const handleClickButtondec = () => {
    // console.log(inputData);
    if (incementData < 0) {
      setIncementData(0);
    } else {
      setIncementData((prevData) => prevData - 1);
    }
  };
  const handleClickButtonrest = () => {
    setInputData("");
    setIncementData(0);
  };
  const getColor = () => {
    if (incementData < 5) {
      return "redClass";
    } else if (incementData >= 5 && incementData <= 20) {
      return "yellow";
    } else if (incementData >= 20 && incementData <= 50) {
      return "lightpink";
    } else if (incementData >= 50 && incementData <= 100) {
      return "lightOrange";
    } else {
      return "greenclass";
    }
    // switch (true) {
    //   case incementData < 5:
    //     return "redClass";
    //   case incementData >= 5 && incementData <= 20:
    //     return "yellow";
    //   case incementData >= 20 && incementData <= 50:
    //     return "lightpink";
    //   case incementData >= 50 && incementData <= 100:
    //     return "lightOrange";

    //   default:
    //     return "greenclass";
    // }
  };

  return (
    <div className="counter_container">
      <div className={getColor()}>counter{incementData} </div>
      <input
        className="counter-input"
        placeholder="enter the number"
        onChange={handleChange}
        value={inputData}
      />
      <div className="button_container">
        <button onClick={handleClickButton}>+</button>
        <button onClick={handleClickButtondec}>-</button>
        <button onClick={handleClickButtonrest}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
