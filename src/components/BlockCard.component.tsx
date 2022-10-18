import React                    from "react";
import {ListGroup}        from "react-bootstrap";
import {Block}                  from "../models/Block.model";
import {BlockTransactionsTable} from "./BlockTransactionsTable.component";

export interface IBlockCardProps {
  block: Block;
}

export const BlockCard: React.FC<IBlockCardProps> = (props) => {
  const { block } = props;
  const blockNumber = parseInt(block.number);

  return (
    <div>
      <ListGroup>
        <ListGroup.Item className={"d-flex"}>
          <div className={"w-25"}>
            Block number:
          </div>
          <div className={"w-75"}>
            <strong>#{blockNumber}</strong>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className={"d-flex"}>
          <div className={"w-25"}>
            Block hash:
          </div>
          <div className={"w-75"}>
            {block.hash}
          </div>
        </ListGroup.Item>
      </ListGroup>

      <BlockTransactionsTable transactions={block.transactions} />
    </div>
  )
}
