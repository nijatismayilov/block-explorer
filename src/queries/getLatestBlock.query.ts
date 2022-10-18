import axios from "axios";

export const getLatestBlockQuery = async () => {
  const result = await axios.post(
    "https://cloudflare-eth.com",
    {
      jsonrpc: "2.0",
      method: 'eth_getBlockByNumber',
      params: ['latest', true],
      id: 1,
    },
    {
      headers: {
        "Content-Type": 'application/json'
      }
    }
  );

  return result.data;
}
