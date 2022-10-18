import React                 from "react";
import {Container}  from "react-bootstrap";
import {useQuery}            from "@tanstack/react-query";
import {getLatestBlockQuery} from "../queries/getLatestBlock.query";
import {Block}               from "../models/Block.model";
import {BlockCard}  from "../components/BlockCard.component";
import {PageLayout} from "../components/PageLayout.component";

export const LatestBlock: React.FC = () => {
  const { isFetching, data, isError, error } = useQuery<{ result: Block }>(["latest-block"], getLatestBlockQuery);
  const block = data?.result;

  return (
    <PageLayout isFetching={isFetching} error={error as Error} isError={isError} data={block}>
      {block && (
        <Container>
          <BlockCard block={block} />
        </Container>
      )}
    </PageLayout>
  )
}
