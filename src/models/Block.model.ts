import {Transaction} from "./Transaction.model";

export type Block = {
  number: string;
  hash: string;
  parentHash: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transactions: Transaction[];
  uncles: any[];
  baseFeePerGas: string;
  nonce: string;
  mixHash: string;
}
