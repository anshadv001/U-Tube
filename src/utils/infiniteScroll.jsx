export const infiniteScroll = ({ fullData, currentPage,itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = fullData.slice(startIndex, startIndex + itemsPerPage);
  const islistCompleted =
    fullData.length - 1 <= startIndex + itemsPerPage ? true : false;
  return ({ paginatedData, islistCompleted })
};
