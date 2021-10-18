import get from 'utility/axios';

/**
 * To get genres.
 *
 * @return {Promise<Object>}
 */
const Genres = async () => {
  const res = await get(
    `genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`
  );
  return res.genres;
};

export default Genres;
