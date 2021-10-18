import axios from 'axios';
import { movieURL } from 'config/variables';

/**
 * Get method.
 *
 * @param {String} path Path of route.
 *
 * @returns {Promise<Object>}
 */
const get = async (path) => {
  console.log(
    `${movieURL}${path} urllllllllllllllllllllllllllllllllllllllllllll`
  );
  const res = await axios({
    method: 'Get',
    url: `${movieURL}${path}`,
  });

  return res.data;
};

export default get;
