import "isomorphic-fetch";
import * as React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import { getStore } from "../src/store";
import { PageTransition } from "next-page-transitions";

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const server = !!ctx.req;
    const store = getStore(undefined, server);
    const state = store.getState();
    const out = { state, server } as any; 

    if (Component.getInitialProps) {
      return {
        ...out,
        pageProps: {
          ...(await Component.getInitialProps(ctx))
        }
      };
    }

    return out;
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps } = props;

    return (
      <Container>
        <Provider store={getStore(undefined, props.server)}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </Provider>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    );
  }
}
