import Layout from '../layouts'
import PostList from '../components/PostList'
const jsonData = [
	{
		id: 1,
		thumbnail: 'thumbnail-1.jpg',
		title: 'sample1',
		description: 'this is a sample data',
		date: '2019-01-05'
	},
	{
		id: 2,
		thumbnail: 'thumbnail-2.jpg',
		title: 'sample2',
		description: 'this is a sample data',
		date: '2019-01-05'
	},
	{
		id: 3,
		thumbnail: 'thumbnail-3.jpg',
		title: 'sample3',
		description: 'this is a sample data',
		date: '2019-01-05'
	},
]

const Index = () =>
	(
		<div>
			<Layout>
				<p>Blog Main</p>
				<div className="post-list">
					<PostList metaData={jsonData[0]}></PostList>
					<PostList metaData={jsonData[1]}></PostList>
					<PostList metaData={jsonData[2]}></PostList>
				</div>
			</Layout>
			<style jsx>
				{`
					.post-list {
						display: flex;
						justify-content: space-between;
					}
				`}
			</style>
		</div>
	)

export default Index
