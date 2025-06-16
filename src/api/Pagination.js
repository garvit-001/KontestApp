// utils/pagination.js
export const paginate = (items = [], pageNumber = 0, itemsPerPage = 10) => {
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const currentPageItems = items.slice(pagesVisited, pagesVisited + itemsPerPage);

  return { currentPageItems, pageCount };
};
