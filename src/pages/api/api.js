import axios from 'axios';

export const getFeeds = async () => {
  const nameMedium = 'stake-service';
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${nameMedium}`;
  const extraUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://rss.app/feeds/58wFvJBIPryvOyHu.xml';

  const res = await axios.get(url)
    .then(res => res.data.items)
    .catch(() => 'error');

  if (!Array.isArray(res)) {
    return axios.get(extraUrl)
      .then(res => res.data.items)
      .catch(() => []);
  }
  return res;
};

export const getCoinInfo = coinId => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false`;

  return axios.get(url)
    .then(res => res.data)
    .catch(() => []);
};