import React from "react";

const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };

  const handlePrevPage = () => {
    let first = page - 1;
    if (first !== 0) {
      setPage((page) => page - 1);
      scrollTop();
    }
  };

  const handleNextPage = () => {
    let last = page + 1;
    if (last <= lastPage) {
      setPage((page) => page + 1);
      scrollTop();
    }
  };

  return (
    <div className="text-color-primary flex items-center justify-center p-10 gap-5 text-xl">
      <button
        className="hover:bg-color-accent hover:text-color-secondary transition-all border rounded-lg px-3 py-1"
        onClick={handlePrevPage}
      >
        {"<"}
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="hover:bg-color-accent hover:text-color-secondary transition-all border rounded-lg px-3 py-1"
        onClick={handleNextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
