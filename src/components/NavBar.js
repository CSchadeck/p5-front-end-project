import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Welcome</Link>
      </div>
      <div>
        {user ? (
        <div>
          <Link to="https://obscure-headland-31666.herokuapp.com/requests">Requests</Link>
          <Link to="/Form">RequestForm</Link>
          <button onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="https://obscure-headland-31666.herokuapp.com/login">Login</Link>
            <Link to="https://obscure-headland-31666.herokuapp.com/signup">SignUp</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
