import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./styles/customPagination.css";

const PaginationResults = ({ location, setData }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    if (location) {
      if (location?.residents?.length <= rowsPerPage) {
        setData(location);
      } else {
        handleChangePage(null, page);
      }
    }
  }, [location]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
    const startIndex = (newPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentPageElements = [
      ...(location?.residents?.slice(startIndex, endIndex) || []),
    ];
    setData({ ...location, residents: currentPageElements });
  };

  return (
    <Pagination
      count={Math.ceil((location?.residents?.length || 0) / 10)}
      page={page}
      onChange={handleChangePage}
    />
  );
};

export default PaginationResults;
