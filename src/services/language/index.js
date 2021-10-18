import get from 'utility/axios';

/**
 * To get all languages with iso.
 *
 * @return {Promise<Object>}
 */
const languages = async () => {
  const res = await get(
    `configuration/languages?api_key=${process.env.REACT_APP_KEY}`
  );
  return res;
};

export default languages;
