import * as React from 'react'
import { Nav } from './Nav'

export const Header: React.FunctionComponent = props =>
  <div className="header">
    <img src="" alt="" />
    <Nav />
    <style jsx>
      {`
        .header {
          display: flex;
        }
        .header img {
          flex: none;
        }
        .header nav {
          margin-left: auto;
        }
      `}
    </style>
  </div>
