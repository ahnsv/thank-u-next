import Link from 'next/link'

const Nav = () => (
    <div className="nav-wrapper">
        <div className="nav-items">
            <div className="logo">TaeBae</div>
            <input type="text" placeholder="Search..." />
        </div>
        <div className="navigator">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
        <style jsx>
            {`
                .nav-wrapper {
                    margin: 0 1rem;
                    display: flex;
                }
                .nav-items {
                    flex = none;
                }
                .navigator {
                    margin-left: auto;
                }
            `}
        </style>
    </div>
)
export default Nav