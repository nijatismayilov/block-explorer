import React                               from "react";
import {Button, Spinner, Stack, Container} from "react-bootstrap";
import {Link}                              from "react-router-dom";
import {useQuery}                 from "@tanstack/react-query";
import {getLatestBlockQuery}      from "../queries/getLatestBlock.query";
import {Block}                    from "../models/Block.model";
import {BlockCard}                from "../components/BlockCard.component";

export const LatestBlock: React.FC = () => {
  const { isLoading, data, isError } = useQuery<{ result: Block }>(["latest-block"], getLatestBlockQuery);
  const block = data?.result;

  if (isLoading) {
    return (
      <div className={"d-flex justify-content-center align-items-center vh-100"}>
        <Spinner animation={"border"} />
      </div>
    )
  }

  if (isError || !block) {
    return (
      <div>
        Something went wrong :(
      </div>
    )
  }

  return (
    <Container>
      <BlockCard block={block} />
    </Container>
  )
}
