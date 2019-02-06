import * as React from "react";
import Link from "next/link";

export const Nav: React.FunctionComponent = props => (
  <nav>
    <style jsx>{`
      nav {
        display: flex;
        flex-direction: row;
      }
      nav > ul {
        list-style: none;
        display: flex;
        flex-direction: row;
      }
      nav > ul > li {
        margin-right: 1vw;
      }
    `}</style>
    <h4>samples</h4>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/SSR">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/StyledJsx">
          <a>Styled Jsx</a>
        </Link>
      </li>
      <li>
        <Link href="/ModuleCss">
          <a>Module CSS</a>
        </Link>
      </li>
    </ul>
  </nav>
);
