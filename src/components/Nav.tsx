import * as React from 'react'
import Link from 'next/link'

export const Nav: React.FunctionComponent = props =>
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/SSR">
      <a>SSR</a>
    </Link>
    <Link href="/StyledJsx">
      <a>Styled Jsx</a>
    </Link>
    <Link href="/ModuleCss">
      <a>Module CSS</a>
    </Link>
    <style jsx>
      {`
      nav {
        margin-left: auto;
      }
    `}
    </style>
  </nav>
