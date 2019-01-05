import Layout from './../layouts/index';
const Post = (props) => (
    <Layout>
        <h1>{props.url.query.title}</h1>
        <h5>This is post</h5>
    </Layout>
)
export default Post