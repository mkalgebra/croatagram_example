import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.scss";

export default function Profile() {
  const [user, setUser] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, [id]);

  if (!user) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <div className="c-profile">
        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Website:</b> {user.username}
        </p>
        <a href={`mailto:${user.email}`}>Contact me</a>
      </div>
    </>
  );
}
