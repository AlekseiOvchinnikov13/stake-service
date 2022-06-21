import axios from 'axios';

const API_TOKEN_ETHERSCAN = 'IBA9F4GC4PGMUSK4DKGJ3MTTBQK5KXK1BB';

export const getContractABI = address => {
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${API_TOKEN_ETHERSCAN}`;

  return axios.get(url)
    .then(res => res.data.result)
    .catch(() => []);
};