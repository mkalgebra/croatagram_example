import PostHeader from "../PostHeader/PostHeader";
import PostMain from "../PostMain/PostMain";
import PostFooter from "../PostFooter/PostFooter";
import "./Post.scss";

function Post() {
  return (
    <div className="c-post">
      <PostHeader />
      <PostMain />
      <PostFooter />
    </div>
  );
}

export default Post;
