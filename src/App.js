import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";


function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ users: [] });


  useEffect(() => {
    fetchUsers()
  }, []);

  function fetchUsers(){
    return fetch('https://obscure-headland-31666.herokuapp.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setUserData(data);
      })
    }
     

  useEffect(() => {
    // auto-login
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
       <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Welcome user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
