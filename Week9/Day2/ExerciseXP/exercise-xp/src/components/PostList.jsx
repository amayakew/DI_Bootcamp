import data from '../data/posts.json'
import './PostList.css'

const PostList = () => {
    return (
        <div className='postsWrap'>
            <h2 className='title'>Hi This is a Title</h2>
            {data.map((post, index) => (
                <div key={index}>
                    <h2 className='title'>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;