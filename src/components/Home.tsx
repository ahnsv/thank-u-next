import * as React from "react";
export const Home: React.FunctionComponent = props => (
  <div className="home">
    <style jsx>{`
      .home {
        padding: 0 8vw;
        display: flex;
        flex-direction: column;
      }
      .home > div {
        flex: 1;
        display: flex;
        flex-direction: row;
        height: calc(50vh - 60px);
        justify-content: center;
        align-items: center;
      }
      .hero {
      }
      .hero-background {
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+0,2989d8+50,207cca+51,7db9e8+100;Blue+Gloss+Default */
        background: rgb(30, 87, 153); /* Old browsers */
        background: -moz-linear-gradient(
          -45deg,
          rgba(30, 87, 153, 1) 0%,
          rgba(41, 137, 216, 1) 50%,
          rgba(32, 124, 202, 1) 51%,
          rgba(125, 185, 232, 1) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          -45deg,
          rgba(30, 87, 153, 1) 0%,
          rgba(41, 137, 216, 1) 50%,
          rgba(32, 124, 202, 1) 51%,
          rgba(125, 185, 232, 1) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          135deg,
          rgba(30, 87, 153, 1) 0%,
          rgba(41, 137, 216, 1) 50%,
          rgba(32, 124, 202, 1) 51%,
          rgba(125, 185, 232, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
        flex: 1;
      }
      .hero-text {
        flex: 1;
      }
    `}</style>
    <div className="hero">
      <div className="hero-background"></div>
      <div className="hero-text">
        Hello World,
        This is Sangtae Ahn
      </div>
    </div>
    <div className="content">Content</div>
  </div>
);
