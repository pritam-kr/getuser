import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  console.log(user);

  function Getuser() {
    fetch(`https://reqres.in/api/users?page=1`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data.data);
      });
  }

  setTimeout(() => {}, 4000);

  return (
    <>
      <nav>
        <button onClick={Getuser}>Get Users</button>
      </nav>

      <main>
        <div className="user-container">
          {user.map((eachUser) => {
            return (
              <>
                <div className="user-card">
                  <img src={eachUser.avatar} alt="user_img" />
                  <h2>
                    {eachUser.first_name} {eachUser.last_name}
                  </h2>
                  <p>
                    {" "}
                    {eachUser.email} <i className="fas fa-envelope"></i>{" "}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
