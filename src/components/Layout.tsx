import * as React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import Head from 'next/head'

export const Layout: React.FunctionComponent = props =>
  <div id="layout">
    {/*language=PostCSS*/}
    <style jsx global>{`
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
    <Head >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header/>
    <main className="main">
      {props.children}
    </main>
    <Footer />
  </div>
