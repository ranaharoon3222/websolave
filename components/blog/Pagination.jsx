import React, { useState } from "react";

const Pagination = ({ totalPosts, postsPerPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    // Call onPageChange prop with the selected page number
    onPageChange(pageNumber);
  };

  return (
    <ul className="d-flex align-items-center  justify-content-center style-none">
      {pageNumbers.map((pageNumber) => (
        <li
          className={pageNumber === activePage ? "active" : ""}
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
