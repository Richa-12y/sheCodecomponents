import React from "react";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { IoMaleFemale } from "react-icons/io5";
import "./form.css";

const Form = ({
  handleSubmit,
  inputFiledData,
  handleChangeFname,
  handleOpation,
  optaionData,
  userDetails,
}) => {
  // const handleChangeLname = (e) => {
  //   setInputFiledData((p) => ({ ...p, LastName: e.target.value }));
  // };
  // const handleChangeEmail = (e) => {
  //   setInputFiledData((p) => ({ ...p, Email: e.target.value }));
  // };
  // const handleChangeContact = (e) => {
  //   setInputFiledData((p) => ({ ...p, Contact: e.target.value }));
  // };

  // const handleChangeAddress = (e) => {
  //   setInputFiledData((p) => ({ ...p, Address: e.target.value }));
  // };
  return (
    <>
      <div className="input_container">
        <form onSubmit={handleSubmit}>
          {Object.keys(inputFiledData).map((el, i) => {
            return (
              <React.Fragment key={i}>
                <label for={el}>{el}:</label>
                <input
                  className="input-filed"
                  type={el}
                  id={el}
                  name={el}
                  value={inputFiledData[el]}
                  onChange={(ele) => handleChangeFname(ele, el)}
                />
              </React.Fragment>
            );
          })}
          {/* <label for="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={inputFiledData.LastName}
            onChange={handleChangeLname}
          />
          <label for="email">Email id:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputFiledData.Email}
            onChange={handleChangeEmail}
          />
          <label for="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={inputFiledData.Contact}
            onChange={handleChangeContact}
          />
          <label for="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={inputFiledData.Address}
            onChange={handleChangeAddress}
          /> */}

          <select onChange={handleOpation} className="selection-container">
            {optaionData.map((option, i) => {
              return (
                <>
                  {i === 0 ? (
                    <option value={option}>{option}</option>
                  ) : (
                    <option>{option}</option>
                  )}
                </>
              );
            })}
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="dispaly_data">
        <h5>dispaly the data:</h5>
        {userDetails.map((el, index) => {
          return (
            <div key={index}>
              <p>{el.FirstName}</p>
              <p>{el.LastName}</p>
              <p>{el.Contact}</p>
              <p> {el.Address}</p>
              <p>
                {el.Sex === "Male" ? (
                  <BsGenderMale style={{ color: "blue" }} />
                ) : el.Sex === "Female" ? (
                  <BsGenderFemale style={{ color: "red" }} />
                ) : (
                  <IoMaleFemale style={{ color: "orange" }} />
                )}
                {el.Sex}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
