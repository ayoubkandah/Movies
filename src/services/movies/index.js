import get from 'utility/axios';

/**
 * To get popular movies per page.
 *
 * @return {Promise<Object>}
 */
const popularMovies = (page) => {
  const res = get(
    `movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${page}`
  );
  return res;
};
export default popularMovies;
