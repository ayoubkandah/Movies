import axios from 'axios';
import URL from 'config/variables';

/**
 * Get method.
 *
 * @param {String} path Path of route.
 *
 * @returns {Promise<Object>}
 */
const get = async (path) => {
  const res = await axios({
    method: 'Get',
    url: `${URL}${path}`,
  });

  return res.data;
};

export default get;
