import classes from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';
function PostsList(props) {

    return (

        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="JP" body="Hello there this is a message" />
                <Post author="Lukas" body="Hi, I am here as well." />
            </ul>
        </>

    );
}

export default PostsList; 