import { useState } from "react";

const Pagination = (data, perPageRecords) => {
  const [page, setPage] = useState(1);
  const recordsPerPage = perPageRecords;
  const npage = Math.ceil(25 / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const lastIndex = page * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);

  const handleForward = () => {
    if (page < npage) {
      setPage(page + 1);
    }
  };

  const handleCurrentPage = (value) => {
    setPage(value);
  };

  const handleBackward = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return {
    numbers,
    records,
    page,
    handleForward,
    handleCurrentPage,
    handleBackward,
  };
};

export default Pagination;
