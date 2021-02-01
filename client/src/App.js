import {useEffect, useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [users, changeUsers] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          changeUsers(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      {users.map((user, i) => 
        <p key={user.userId}>{user.userId}: {user.userName}</p>
      )}
    </div>
  );
}

export default App;
