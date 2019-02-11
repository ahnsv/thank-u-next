import * as React from "react";
import { Nav } from "./Nav";

export const Header: React.FunctionComponent = props => (
  <div className="header">
    <style jsx>
      {`
        .header {
          display: flex;
          flex-direction: row;
          padding: 0 3vw;
        }
        .header > h2 {
          margin-right: auto;
          flex: 0;
        }
      `}
    </style>
    <h2>AST</h2>
    <Nav />
  </div>
);
