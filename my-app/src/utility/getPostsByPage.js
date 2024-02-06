
// Function to get a subset of posts based on the current page
export const getPostsByPage = (page, postsPerPage, searchedBlogs) => {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return searchedBlogs.slice(startIndex, endIndex);
};


