export type TransactionAccessList = {
  address: string;
  storageKeys: string[];
};

export type Transaction = {
  type: string;
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: string;
  value: string;
  v: string;
  r: string;
  s: string;
  gasPrice: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  chainId: string;
  accessList: TransactionAccessList[];
};
