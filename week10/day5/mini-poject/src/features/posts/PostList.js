import {useEffect} from 'react'
import ReactionButton from "./ReactionButtons";
import { usePostSelector, usePostStatus, useFetchPosts } from "./postHooks";

const PostList = () => {
    const posts = usePostSelector()
    const status = usePostStatus()

    const callFetchPosts = useFetchPosts()

    useEffect(() => {
        callFetchPosts()
    }, [])

    if(status === 'loading') return (<h2>Loading...</h2>);
    if(status === 'failed') return (<h2>Something went wrong...</h2>);

    const renderPost = posts
        // .filter(post => {
        //     if(author != -1) return post.userId == author;
        //     return post;
        // })
        .map(post => {
            return(
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <ReactionButton post={post}/>
                </article>
            );
        });

    return (
        <>
            <h2>Posts</h2>
            <section>
                {renderPost}
            </section>
        </>
    )
};

export default PostList