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

			nav > ul > li > a {
				text-decoration: none;
				color: black;
			}

			nav > ul > li > a:after {
				content: "";
				position: absolute;
				display: flex;
				width: 3em;
				border-bottom: 1px solid;
				opacity: 0;
				-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
				-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
				-webkit-transition: opacity 0.35s, transform 0.35s;
				transition: opacity 0.35s, transform 0.35s;
				-webkit-transform: scale(0, 1);
				-webkit-transform: scale(0, 1);
				-ms-transform: scale(0, 1);
				transform: scale(0, 1);
			}

			nav > ul > li > a:hover:after {
				opacity: 1;
				-webkit-transform: scale(1);
				transform: scale(1);
			}
		`}</style>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
			<li>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</li>
			<li>
				<Link href="/projects">
					<a>Projects</a>
				</Link>
			</li>
		</ul>
	</nav>
);
