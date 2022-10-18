import React         from "react";
import {Transaction}                    from "../models/Transaction.model";
import {Table} from "react-bootstrap";

interface BlockTransactionsTableProps {
  transactions: Transaction[];
}

export const BlockTransactionsTable: React.FC<BlockTransactionsTableProps> = (props) => {
  const { transactions } = props;

  return (
    <div className={"mt-5"}>
      <h3>Transactions</h3>

      <div className={"rounded overflow-hidden border bg-white"}>
        <Table striped style={{ tableLayout: "fixed" }}>
          <thead>
          <tr>
            <th>Txn Hash</th>
            <th>From</th>
            <th>To</th>
          </tr>
          </thead>

          <tbody>
          {
            transactions.map((transaction) => (
              <tr key={transaction.hash}>
                <td style={{width: "33%"}} className={"text-truncate"}>
                  {transaction.hash}
                </td>
                <td style={{width: "33%"}} className={"text-truncate"}>
                  {transaction.from}
                </td>
                <td style={{width: "33%"}} className={"text-truncate"}>
                  {transaction.to || "-"}
                </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>
    </div>
  )
}
