import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'
import classnames from 'classnames'
import * as styles from './Layout.css'

export const Layout: React.FunctionComponent = props =>
  <div className={classnames('layout', styles.layout)}>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet"></link>
    </Head>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
