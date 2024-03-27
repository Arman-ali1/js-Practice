//🥲To build this component i used chatgpt, cz the logic was bery hard. I'll be needing a bit more practise of logic building before i can build this component's logic on my own.
interface PaginationProps {
  filteredData: any;
  itemsPerPage: any;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  filteredData,
  itemsPerPage,
  page,
  setPage,
}) => {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Calculate the range of page numbers to display
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  let startPage = 1;
  let endPage = totalPages;
  const maxPageNumbersToShow = 2; // Adjust this value to control how many page numbers to show

  if (totalPages > maxPageNumbersToShow) {
    // Calculate start and end page numbers to show
    const startOffset = Math.floor(maxPageNumbersToShow / 2);
    const endOffset = maxPageNumbersToShow - startOffset - 1;

    if (page <= startOffset) {
      // If the current page is near the start, show pages from 1 to maxPageNumbersToShow
      endPage = maxPageNumbersToShow;
    } else if (page > totalPages - endOffset) {
      // If the current page is near the end, show pages from totalPages - maxPageNumbersToShow + 1 to totalPages
      startPage = totalPages - maxPageNumbersToShow + 1;
    } else {
      // If the current page is in the middle, show pages from page - startOffset to page + endOffset
      startPage = page - startOffset;
      endPage = page + endOffset;
    }
  }

  return (
    <div className="flex gap-[10px] shadow-lg shadow-blue-800">
      {page > 1 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="text-[#1B1919] font-medium text-base rounded-[5px] bg-[#FAAF3D] py-2 px-4"
        >
          Prev
        </button>
      )}

      {range(startPage, endPage).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={
            "border-solid border font-medium text-base rounded-[5px] py-2 px-4 " +
            (page === pageNumber
              ? "border-[#FAAF3D] text-[#FAAF3D] "
              : "text-white border-white hover:bg-white hover:text-[#1B1919] transition-all duration-300 ease-in-out")
          }
        >
          {pageNumber}
        </button>
      ))}
      {endPage < totalPages - 1 && (
        <span className="text-white flex items-end ">....</span>
      )}
      {endPage < totalPages && (
        <button
          onClick={() => handlePageChange(totalPages)}
          className="border-solid border text-white border-white hover:bg-white hover:text-[#1B1919] transition-all duration-300 ease-in-out font-medium text-base rounded-[5px] py-2 px-4"
        >
          {totalPages}
        </button>
      )}
      {page < totalPages && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="text-[#1B1919] font-medium text-base rounded-[5px] bg-[#FAAF3D] py-2 px-4"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
