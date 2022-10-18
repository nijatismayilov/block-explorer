import axios                  from "axios";
import {QueryFunctionContext} from "@tanstack/react-query";

export const getBlockByNumberQuery = async (context: QueryFunctionContext) => {
  const [_, blockNumber] = context.queryKey;

  const result = await axios.post(
    "https://cloudflare-eth.com",
    {
      jsonrpc: "2.0",
      method: 'eth_getBlockByNumber',
      params: [`0x${(blockNumber as number).toString(16)}`, true],
      id: 1,
    },
    {
      headers: {
        "Content-Type": 'application/json'
      }
    }
  );

  if (result.data.error) {
    throw new Error(result.data.error.message);
  }

  return result.data;
}
