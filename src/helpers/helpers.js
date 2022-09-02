import {useContext} from 'react';
import {PostsContext} from '../context/PostsContext';

// const MobileWidth = '950';

/**
 * Delete html tags from text
 * @param text {String} text
 * @returns {*}
 */
export const cleanText = text => {
  const regexp = /(?:<).*?(?:>)/g;
  return text.replace(regexp, '');
};

/**
 * Format dateTime to date (dd.MM.yyyy)
 * @param date
 * @returns {string}
 */
export const dateTimeToDateFormat = (date) => {
  let tmpDate = date.slice(0, date.indexOf(' '));
  tmpDate = tmpDate.split('-').reverse().join('.');
  return tmpDate;
};

/**
 * Reduces an array to the num of elements
 * @param num Desired array length
 * @param array Array
 * @returns {*}
 */
export const sliceArrayByCount = (num, array) =>
  array.slice(0, num - array.length);

/**
 * Get all exist posts categories
 * @returns {any[]}
 */
export const getAllCategories = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const posts = useContext(PostsContext);
  const cats = posts && posts.reduce((acc, post) =>
    acc.concat(post?.categories)
  , []);

  return Array.from(new Set(cats));
};

/**
 * Get only the main cryptocurrency metrics
 * @param data All cryptocurrency metrics
 * @returns {{'coingecko rank': *, 'market_cap rank': *, 'coingecko score': *, 'liquidity score': *, ath: (boolean|*), 'current price': (boolean|*), atl: (boolean|*), 'community score': *, 'developer score': *, 'total supply': *, homepage: *}}
 * @param {*} data
 */
export const getMainDataByCoinInfo = (data) => {
  return {
    data: {
      'market cap rank': data.market_cap_rank,
      'coingecko score': data.coingecko_score,
      'community score': data.community_score,
      'developer score': data.developer_score,
      'liquidity score': data.liquidity_score,
      'alexa rank': data.public_interest_stats?.alexa_rank,
      ath: data.market_data?.ath?.usd,
      atl: data.market_data?.atl?.usd,
      'current price': data.market_data?.current_price?.usd,
      'total supply': data.market_data?.total_supply,
    },
    info: {
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      current_price: data.market_data?.current_price?.usd,
    },
    homepage: data.links?.homepage?.filter(link => link.length > 0)[0],
    image: data.image
  };
};