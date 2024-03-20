import React from "react";

const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };

  const handlePrevPage = () => {
    setPage((page) => page - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
    scrollTop();
  };

  const handleFirstPage = () => {
    setPage(1);
    scrollTop();
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  return (
    <div className="text-color-primary flex items-center justify-center p-10 gap-5 text-xl">
      {page > 1 ? (
        <button
          className="hover:bg-color-accent hover:text-color-secondary transition-all border rounded-lg px-3 py-1"
          onClick={handlePrevPage}
        >
          {"<"}
        </button>
      ) : null}

      <div className="flex gap-3">
        {page === 1 ? null : (
          <button
            className="hover:text-color-accent transition-all"
            onClick={handleFirstPage}
          >
            first page...
          </button>
        )}
        <p>
          {page} of {lastPage}
        </p>
        {page === lastPage ? null : (
          <button
            className="hover:text-color-accent transition-all"
            onClick={handleLastPage}
          >
            ...last page
          </button>
        )}
      </div>
      {page >= lastPage ? null : (
        <button
          className="hover:bg-color-accent hover:text-color-secondary transition-all border rounded-lg px-3 py-1"
          onClick={handleNextPage}
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
