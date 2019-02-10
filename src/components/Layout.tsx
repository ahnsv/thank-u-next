import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout: React.FunctionComponent = props => (
  <div id="layout">
    {/*language=PostCSS*/}
    <style jsx global>
      {`
        /**
* Shout out to Blank
* http://blankcorp.kr/sp.php?p=ci
*/
        @font-face {
          font-family: "Black Sans";
          src: url("/static/fonts/blank_Sans_Bold.woff2");
        }

        html,
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        ul,
        li {
          font-family: "Black Sans";
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }

        body > div {
          height: inherit;
          width: inherit;
        }
        #layout {
          height: inherit;
          width: inherit;
          display: flex;
          flex-direction: column;
        }
        .head {
          margin-bottom: auto;
        }
        .main {
          flex: 1;
        }
        .footer {
          margin-top: auto;
        }
      `}
    </style>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header />
    <main className="main">{props.children}</main>
    <Footer />
  </div>
);
