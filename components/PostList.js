import Link from 'next/link'
const PostList = (props) => (
    <div className="post">
        <Link as={`/post/${props.metaData.id}`} href={`/post?title=${props.metaData.title}`}>
            <div className="post--preview" style={{ backgroundImage: `url(assets/img/${props.metaData.thumbnail}.${props.metaData.thumbnail.split('.')[1]}` }}>
                <h1>{props.metaData.title}</h1>
                <h4>{props.metaData.description}</h4>
                <h6>{props.metaData.date}</h6>
            </div>
        </Link>
        <style jsx>{`
			.post {
                min-width: calc( 100% / 3 - 16px );
                border: 1px solid lightgrey;
                border-radius: 24px;
            }
            .post--preview {
                padding: 3rem;
            }
		`}
        </style>
    </div>
)

export default PostList;