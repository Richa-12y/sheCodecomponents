import React from "react";
import "./pagination.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalItems,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(totalPages);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  const handlePageChange = (pageValue) => {
    console.log(pageValue);
    setCurrentPage(pageValue);
  };
  return (
    <div className="pagination_container">
      <div className="pagination">
        <IoIosArrowBack
          onClick={() => setCurrentPage((p) => (p > 1 ? p - 1 : totalPages))}
        />
        {pageNumbers.map((el, i) => {
          return (
            <div
              key={i}
              className={currentPage === el ? "page-item active" : "page-item"}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(el)}
              >
                {el}
              </button>
            </div>
          );
        })}
        <IoIosArrowForward
          onClick={() => setCurrentPage((p) => (totalPages > p ? p + 1 : 1))}
        />
      </div>
    </div>
  );
};

export default Pagination;
