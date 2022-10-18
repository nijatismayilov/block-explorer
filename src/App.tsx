import React                                    from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LatestBlock }                            from "./pages/LatestBlock.page";
import { Block }                                  from "./pages/Block.page";

export const ROUTES = {
  block: "/block/:blockNumber",
  latest: "/block/latest"
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.latest} element={<LatestBlock />} />
        <Route path={ROUTES.block} element={<Block />} />
        <Route path={"*"} element={<Navigate to={ROUTES.latest} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
