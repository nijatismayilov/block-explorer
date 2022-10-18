import React                                      from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LatestBlock }                            from "./pages/LatestBlock.page";
import { Block }                                  from "./pages/Block.page";
import {ROUTES}                                   from "./routes.constants";
import {Header}                                   from "./components/Header.component";
import {Main}                                     from "./components/Main.component";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path={ROUTES.latest} element={<LatestBlock />} />
          <Route path={ROUTES.block} element={<Block />} />
          <Route path={"*"} element={<Navigate to={ROUTES.latest} />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
