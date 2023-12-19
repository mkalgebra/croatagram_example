import "./PostHeader.scss";

function PostHeader() {
  return (
    <div className="c-post-header">
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
        width={64}
      ></img>
      <div className="c-post-header__text">
        <p className="c-post-header__text--main">beauty24</p>
        <p className="c-post-header__text--secondary">New York</p>
      </div>
    </div>
  );
}

export default PostHeader;
