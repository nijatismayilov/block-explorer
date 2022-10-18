import React                   from "react";
import {Container}     from "react-bootstrap";
import { useParams }     from "react-router-dom";
import {IBlockPageParams}      from "../models/BlockPageParams.model";
import {useQuery}              from "@tanstack/react-query";
import {getBlockByNumberQuery} from "../queries/getBlockByNumber.query";
import {Block}      from "../models/Block.model";
import {PageLayout} from "../components/PageLayout.component";
import {BlockCard}  from "../components/BlockCard.component";

export const BlockPage: React.FC = () => {
  const { blockNumber } = useParams<IBlockPageParams>();
  const { isError, data, isFetching, error } = useQuery<{ result: Block }>(
    ["block-by-number", Number(blockNumber)],
    getBlockByNumberQuery
  );
  const block = data?.result;

  return (
    <PageLayout isFetching={isFetching} error={error as Error} isError={isError} data={data}>
      {block && (
        <Container>
          <BlockCard block={block} />
        </Container>
      )}
    </PageLayout>
  )
}
