import "./App.scss";
import Post from "./components/Post/Post";

function App() {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="c-app">
      <h1 className="c-app__title">Croatagram</h1>
      <h2 className="c-app__subtitle">Feed</h2>
      <div className="c-app__content">
        {posts.map((post) => (
          <Post />
        ))}
      </div>
    </div>
  );
}

export default App;
