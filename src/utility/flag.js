import { flagsURL } from 'config/variables';

/**
 * Return flag url.
 *
 * @return {String}
 */
const flag = (iso) => {
  const res = `${flagsURL}${iso}/flat/64.png`;
  return res;
};

export default flag;
