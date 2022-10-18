import React      from "react";
import { Button } from "react-bootstrap";
import {Link}     from "react-router-dom";

export const LatestBlock: React.FC = () => {
  return (
    <div>
      <Link to={"/block/1"}>
        <Button>Go to Block: 1</Button>
      </Link>
    </div>
  )
}
