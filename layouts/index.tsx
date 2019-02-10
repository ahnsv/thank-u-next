import { Nav } from "../src/components/Nav";
import * as React from "react";

const Layout: React.StatelessComponent = props => (
  <div>
    <Nav />
    {props.children}
    <style jsx global>
      {`
                body, html {
                    margin: 0
                    padding: 0
                }
            `}
    </style>
  </div>
);
export default Layout;
