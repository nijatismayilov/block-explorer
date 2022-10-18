import React      from "react";
import { Button } from "react-bootstrap";
import { Link }   from "react-router-dom";
import {ROUTES}   from "../routes.constants";

export const Block: React.FC = () => {
  return (
    <div>
      <Link to={ROUTES.latest}>
        <Button>Go to Latest Block</Button>
      </Link>
    </div>
  )
}
