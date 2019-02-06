import Nav from '../components/Nav'

const Layout = (props) => (
    <div>
        <Nav />
        {props.children}
        <style jsx global>
            {`
                body, html {
                    margin: 0
                    padding: 0
                }
            `}
        </style>
    </div>
)
export default Layout