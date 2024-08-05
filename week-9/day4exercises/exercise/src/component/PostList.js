import data from '../data.json';

const PostList = () => {
    return(
        <>
            {
                data.map((item) => {
                    return(
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostList