import { useEffect } from "react";
// import {useSelector, useDispatch} from 'react-redux'; ----> moved to hooks file
// import { fetchPosts } from "./state/slice"; ---> hooks
import ReactionButton from "./ReactionButton";
// import { selectPosts, selectStatus } from "./state/selectors.js"; ----> moved to hooks file
import {usePostsSelector, usePostsStatus, useFetchPosts} from './state/hooks.js';

const PostsList = () => {
    // const posts = useSelector(state => state.postsReducer.posts); ---> useSelector(selectPosts)
    // const status = useSelector(state => state.postsReducer.status); ---> useSelector(selectStatus)
    // do not write in one line

    const posts = usePostsSelector();
    const status = usePostsStatus();

    // const dispatch = useDispatch(); ---> moved to hooks

    // useEffect(() => {
    //     dispatch(fetchPosts()) ---> moved to hooks
    // },[]);
    // [] -> Run the effect only once, when the component mounts

    const callFetchPost = useFetchPosts();

    useEffect (() => {
        callFetchPost()
    },[]);

    if (status === 'loading'){
        return <h2>Loading...</h2>
    };

    if (status === 'failed'){
        return <h2>Oooops...</h2>
    };
    
    return (
        <>
            <h2>Posts</h2>
            <section>
                {posts.map((post) => {
                    return (
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <ReactionButton {...post}/>
                        </article>
                    );
                })}
            </section>

        </>
    );
};

export default PostsList;

// <ReactionButton {...post}/> send as props the post object's keys, so we can call them separately
// other way: post={post} send the whole post object