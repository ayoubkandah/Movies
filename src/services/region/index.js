import get from 'utility/axios';

/**
 * To get regions with iso.
 *
 * @return {Promise<Object>}
 */
export const Regions = async () => {
  const res = await get(
    `watch/providers/regions?api_key=${process.env.REACT_APP_KEY}&language=en-Us`
  );
  return res.results;
};

/**
 * To get region providers.
 *
 * @return {Promise<Object>}
 */
export const RegionProvider = async (iso) => {
  const res = await get(
    `watch/providers/tv?api_key=${process.env.REACT_APP_KEY}&language=en-US&watch_region=${iso}`
  );
  return res.results;
};
